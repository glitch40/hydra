{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE NumericUnderscores #-}

module HydraNode where

import Hydra.Cardano.Api
import Hydra.Prelude hiding (delete)

import Cardano.BM.Tracing (ToObject)
import CardanoNode (NodeLog)
import Control.Concurrent.Async (forConcurrently_)
import Control.Concurrent.Class.MonadSTM (modifyTVar', newTVarIO, readTVarIO)
import Control.Exception (IOException)
import Control.Monad.Class.MonadAsync (forConcurrently)
import Data.Aeson (Value (..), object, (.=))
import qualified Data.Aeson as Aeson
import qualified Data.Aeson.KeyMap as KeyMap
import Data.Aeson.Types (Pair)
import qualified Data.List as List
import Data.Text (pack)
import qualified Data.Text as T
import Hydra.Cluster.Faucet (FaucetLog)
import Hydra.Cluster.Util (readConfigFile)
import Hydra.ContestationPeriod (ContestationPeriod)
import Hydra.Crypto (HydraKey)
import Hydra.Ledger.Cardano ()
import Hydra.Logging (Tracer, Verbosity (..), traceWith)
import Hydra.Network (Host (Host), NodeId (NodeId))
import qualified Hydra.Network as Network
import Hydra.Options (ChainConfig (..), LedgerConfig (..), RunOptions (..), defaultChainConfig, toArgs)
import Network.HTTP.Conduit (HttpExceptionContent (ConnectionFailure), parseRequest)
import Network.HTTP.Simple (HttpException (HttpExceptionRequest), Response, getResponseBody, getResponseStatusCode, httpBS)
import Network.WebSockets (Connection, receiveData, runClient, sendClose, sendTextData)
import System.FilePath ((<.>), (</>))
import System.IO.Temp (withSystemTempDirectory)
import System.Process (
  CreateProcess (..),
  StdStream (..),
  proc,
  withCreateProcess,
 )
import System.Timeout (timeout)
import Test.Hydra.Prelude (checkProcessHasNotDied, failAfter, failure, withLogFile)
import qualified Prelude

data HydraClient = HydraClient
  { hydraNodeId :: Int
  , connection :: Connection
  , tracer :: Tracer IO EndToEndLog
  }

-- | Create an input as expected by 'send'.
input :: Text -> [Pair] -> Aeson.Value
input tag pairs = object $ ("tag" .= tag) : pairs

send :: HydraClient -> Aeson.Value -> IO ()
send HydraClient{tracer, hydraNodeId, connection} v = do
  sendTextData connection (Aeson.encode v)
  traceWith tracer $ SentMessage hydraNodeId v

waitNext :: HasCallStack => HydraClient -> IO Aeson.Value
waitNext HydraClient{connection} = do
  bytes <- receiveData connection
  case Aeson.eitherDecode' bytes of
    Left err -> failure $ "WaitNext failed to decode msg: " <> err
    Right value -> pure value

-- | Create an output as expected by 'waitFor' and 'waitForAll'.
output :: Text -> [Pair] -> Aeson.Value
output tag pairs = object $ ("tag" .= tag) : pairs

-- | Wait some time for a single API server output from each of given nodes.
-- This function waits for @delay@ seconds for message @expected@  to be seen by all
-- given @nodes@.
waitFor :: HasCallStack => Tracer IO EndToEndLog -> NominalDiffTime -> [HydraClient] -> Aeson.Value -> IO ()
waitFor tracer delay nodes v = waitForAll tracer delay nodes [v]

-- | Wait up to some time for an API server output to match the given predicate.
waitMatch :: HasCallStack => NominalDiffTime -> HydraClient -> (Aeson.Value -> Maybe a) -> IO a
waitMatch delay client@HydraClient{tracer, hydraNodeId} match = do
  seenMsgs <- newTVarIO []
  timeout (truncate $ delay * 1_000_000) (go seenMsgs) >>= \case
    Just x -> pure x
    Nothing -> do
      msgs <- readTVarIO seenMsgs
      failure $
        toString $
          unlines
            [ "waitMatch did not match a message within " <> show delay <> "s"
            , padRight ' ' 20 "  nodeId:" <> show hydraNodeId
            , padRight ' ' 20 "  seen messages:"
                <> unlines (align 20 (decodeUtf8 . Aeson.encode <$> msgs))
            ]
 where
  go seenMsgs = do
    msg <- waitNext client
    traceWith tracer (ReceivedMessage hydraNodeId msg)
    atomically (modifyTVar' seenMsgs (msg :))
    maybe (go seenMsgs) pure (match msg)

  align _ [] = []
  align n (h : q) = h : fmap (T.replicate n " " <>) q

-- | Wait up to some `delay` for some JSON `Value` to match given function.
--
-- This is a generalisation of `waitMatch` to multiple nodes.
waitForAllMatch :: (Eq a, Show a, HasCallStack) => NominalDiffTime -> [HydraClient] -> (Aeson.Value -> Maybe a) -> IO a
waitForAllMatch delay nodes match = do
  when (null nodes) $
    failure "no clients to wait for"
  results <- forConcurrently nodes $ \n -> waitMatch delay n match
  case results of
    [] -> failure $ "empty results, but " <> (show $ length nodes) <> " clients"
    (r : rs) -> do
      unless (all (== r) rs) $
        failure $
          "inconsistent results: " <> show results
      pure r

-- | Wait some time for a list of outputs from each of given nodes.
-- This function is the generalised version of 'waitFor', allowing several messages
-- to be waited for and received in /any order/.
waitForAll :: HasCallStack => Tracer IO EndToEndLog -> NominalDiffTime -> [HydraClient] -> [Aeson.Value] -> IO ()
waitForAll tracer delay nodes expected = do
  traceWith tracer (StartWaiting (map hydraNodeId nodes) expected)
  forConcurrently_ nodes $ \client@HydraClient{hydraNodeId} -> do
    msgs <- newIORef []
    -- The chain is slow...
    result <- timeout (truncate $ delay * 1_000_000) $ tryNext client msgs expected
    case result of
      Just x -> pure x
      Nothing -> do
        actualMsgs <- readIORef msgs
        failure $
          toString $
            unlines
              [ "waitForAll timed out after " <> show delay <> "s"
              , padRight ' ' 20 "  nodeId:"
                  <> show hydraNodeId
              , padRight ' ' 20 "  expected:"
                  <> unlines (align 20 (decodeUtf8 . Aeson.encode <$> expected))
              , padRight ' ' 20 "  seen messages:"
                  <> unlines (align 20 (decodeUtf8 . Aeson.encode <$> actualMsgs))
              ]
 where
  align _ [] = []
  align n (h : q) = h : fmap (T.replicate n " " <>) q

  tryNext :: HydraClient -> IORef [Aeson.Value] -> [Aeson.Value] -> IO ()
  tryNext c@HydraClient{hydraNodeId} msgs = \case
    [] -> traceWith tracer (EndWaiting hydraNodeId)
    stillExpected -> do
      msg <- waitNext c
      traceWith tracer (ReceivedMessage hydraNodeId msg)
      modifyIORef' msgs (msg :)
      case msg of
        Object km -> do
          let cleaned = Object $ km & KeyMap.delete "seq" & KeyMap.delete "timestamp"
          tryNext c msgs (List.delete cleaned stillExpected)
        _ ->
          tryNext c msgs stillExpected

getMetrics :: HasCallStack => HydraClient -> IO ByteString
getMetrics HydraClient{hydraNodeId} = do
  response <-
    failAfter 3 $ queryNode hydraNodeId
  when (getResponseStatusCode response /= 200) $ failure ("Request for Hydra-node metrics failed :" <> show (getResponseBody response))
  pure $ getResponseBody response

queryNode :: Int -> IO (Response ByteString)
queryNode nodeId =
  parseRequest ("http://127.0.0.1:" <> show (6000 + nodeId) <> "/metrics") >>= loop
 where
  loop req =
    httpBS req `catch` onConnectionFailure (loop req)

  onConnectionFailure cont = \case
    (HttpExceptionRequest _ (ConnectionFailure _)) -> threadDelay 100_000 >> cont
    e -> throwIO e

data EndToEndLog
  = NodeStarted {nodeId :: Int}
  | SentMessage {nodeId :: Int, message :: Aeson.Value}
  | StartWaiting {nodeIds :: [Int], messages :: [Aeson.Value]}
  | ReceivedMessage {nodeId :: Int, message :: Aeson.Value}
  | EndWaiting {nodeId :: Int}
  | FromCardanoNode NodeLog
  | FromFaucet FaucetLog
  | StartingFunds {actor :: String, fuelUTxO :: UTxO, otherUTxO :: UTxO}
  | RefueledFunds {actor :: String, refuelingAmount :: Lovelace, fuelUTxO :: UTxO}
  | RemainingFunds {actor :: String, fuelUTxO :: UTxO, otherUTxO :: UTxO}
  | PublishedHydraScriptsAt {hydraScriptsTxId :: TxId}
  | UsingHydraScriptsAt {hydraScriptsTxId :: TxId}
  deriving (Eq, Show, Generic, ToJSON, FromJSON, ToObject)

-- XXX: The two lists need to be of same length. Also the verification keys can
-- be derived from the signing keys.
withHydraCluster ::
  HasCallStack =>
  Tracer IO EndToEndLog ->
  FilePath ->
  FilePath ->
  -- | First node id
  Int ->
  -- | NOTE: This decides on the size of the cluster!
  [(VerificationKey PaymentKey, SigningKey PaymentKey)] ->
  [SigningKey HydraKey] ->
  -- | Transaction id at which Hydra scripts should have been published.
  TxId ->
  ContestationPeriod ->
  (NonEmpty HydraClient -> IO ()) ->
  IO ()
withHydraCluster tracer workDir nodeSocket firstNodeId allKeys hydraKeys hydraScriptsTxId contestationPeriod action = do
  when (clusterSize == 0) $
    failure "Cannot run a cluster with 0 number of nodes"
  when (length allKeys /= length hydraKeys) $
    failure "Not matching number of cardano/hydra keys"

  forM_ (zip allKeys allNodeIds) $ \((vk, sk), ix) -> do
    let vkFile = workDir </> show ix <.> "vk"
    let skFile = workDir </> show ix <.> "sk"
    void $ writeFileTextEnvelope vkFile Nothing vk
    void $ writeFileTextEnvelope skFile Nothing sk
  startNodes [] allNodeIds
 where
  clusterSize = length allKeys
  allNodeIds = [firstNodeId .. firstNodeId + clusterSize - 1]

  startNodes clients = \case
    [] -> action (fromList $ reverse clients)
    (nodeId : rest) -> do
      let hydraSKey = hydraKeys Prelude.!! (nodeId - firstNodeId)
          hydraVKeys = map getVerificationKey $ filter (/= hydraSKey) hydraKeys
          cardanoVerificationKeys = [workDir </> show i <.> "vk" | i <- allNodeIds, i /= nodeId]
          cardanoSigningKey = workDir </> show nodeId <.> "sk"
          chainConfig =
            defaultChainConfig
              { nodeSocket
              , cardanoSigningKey
              , cardanoVerificationKeys
              , contestationPeriod
              }
      withHydraNode
        tracer
        chainConfig
        workDir
        nodeId
        hydraSKey
        hydraVKeys
        allNodeIds
        hydraScriptsTxId
        (\c -> startNodes (c : clients) rest)

-- | Run a hydra-node with given 'ChainConfig' and using the config from
-- config/. 
withHydraNode ::
  Tracer IO EndToEndLog ->
  ChainConfig ->
  FilePath ->
  Int ->
  SigningKey HydraKey ->
  [VerificationKey HydraKey] ->
  [Int] ->
  -- | Transaction id at which Hydra scripts should have been published.
  TxId ->
  (HydraClient -> IO a) ->
  IO a
withHydraNode tracer chainConfig workDir hydraNodeId hydraSKey hydraVKeys allNodeIds hydraScriptsTxId action = do
  withLogFile logFilePath $ \out -> do
    withSystemTempDirectory "hydra-node" $ \dir -> do
      let cardanoLedgerProtocolParametersFile = dir </> "protocol-parameters.json"
      readConfigFile "protocol-parameters.json" >>= writeFileBS cardanoLedgerProtocolParametersFile
      let hydraSigningKey = dir </> (show hydraNodeId <> ".sk")
      void $ writeFileTextEnvelope hydraSigningKey Nothing hydraSKey
      hydraVerificationKeys <- forM (zip [1 ..] hydraVKeys) $ \(i :: Int, vKey) -> do
        let filepath = dir </> (show i <> ".vk")
        filepath <$ writeFileTextEnvelope filepath Nothing vKey
      let ledgerConfig =
            CardanoLedgerConfig
              { cardanoLedgerProtocolParametersFile
              }
      let p =
            ( hydraNodeProcess $
                RunOptions
                  { verbosity = Verbose "HydraNode"
                  , nodeId = NodeId $ show hydraNodeId
                  , host = "127.0.0.1"
                  , port = fromIntegral $ 5000 + hydraNodeId
                  , peers
                  , apiHost = "127.0.0.1"
                  , apiPort = fromIntegral $ 4000 + hydraNodeId
                  , monitoringPort = Just $ fromIntegral $ 6000 + hydraNodeId
                  , hydraSigningKey
                  , hydraVerificationKeys
                  , hydraScriptsTxId
                  , persistenceDir = workDir </> "state-" <> show hydraNodeId
                  , chainConfig
                  , ledgerConfig
                  }
            )
              { std_out = UseHandle out
              }
      withCreateProcess p $
        \_stdin _stdout _stderr processHandle -> do
          result <-
            race
              (checkProcessHasNotDied ("hydra-node (" <> show hydraNodeId <> ")") processHandle)
              (withConnectionToNode tracer hydraNodeId action)
          case result of
            Left err -> absurd err
            Right a -> pure a
 where
  logFilePath = workDir </> "logs" </> "hydra-node-" <> show hydraNodeId <.> "log"

  peers =
    [ Host
      { Network.hostname = "127.0.0.1"
      , Network.port = fromIntegral $ 5000 + i
      }
    | i <- allNodeIds
    , i /= hydraNodeId
    ]

withConnectionToNode :: Tracer IO EndToEndLog -> Int -> (HydraClient -> IO a) -> IO a
withConnectionToNode tracer hydraNodeId action = do
  connectedOnce <- newIORef False
  tryConnect connectedOnce
 where
  tryConnect connectedOnce =
    doConnect connectedOnce `catch` \(e :: IOException) -> do
      readIORef connectedOnce >>= \case
        False -> threadDelay 0.1 >> tryConnect connectedOnce
        True -> throwIO e

  doConnect connectedOnce = runClient "127.0.0.1" (4000 + hydraNodeId) "/" $ \connection -> do
    atomicWriteIORef connectedOnce True
    traceWith tracer (NodeStarted hydraNodeId)
    res <- action $ HydraClient{hydraNodeId, connection, tracer}
    sendClose connection ("Bye" :: Text)
    pure res

-- | Runs an action with a new connection to given Hydra node.
withNewClient :: HydraClient -> (HydraClient -> IO a) -> IO a
withNewClient HydraClient{hydraNodeId, tracer} =
  withConnectionToNode tracer hydraNodeId

hydraNodeProcess :: RunOptions -> CreateProcess
hydraNodeProcess = proc "hydra-node" . toArgs

waitForNodesConnected :: HasCallStack => Tracer IO EndToEndLog -> [HydraClient] -> IO ()
waitForNodesConnected tracer clients =
  mapM_ waitForNodeConnected clients
 where
  allNodeIds = hydraNodeId <$> clients
  waitForNodeConnected n@HydraClient{hydraNodeId} =
    waitForAll tracer (fromIntegral $ 20 * length allNodeIds) [n] $
      fmap
        ( \nodeId ->
            object
              [ "tag" .= String "PeerConnected"
              , "peer" .= String (pack $ show nodeId)
              ]
        )
        (filter (/= hydraNodeId) allNodeIds)
