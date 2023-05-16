{-# LANGUAGE TypeApplications #-}

module Hydra.Cardano.Api.Tx where

import Hydra.Cardano.Api.Prelude

import Hydra.Cardano.Api.KeyWitness (
  fromLedgerTxWitness,
  toLedgerBootstrapWitness,
  toLedgerKeyWitness,
 )
import Hydra.Cardano.Api.Lovelace (fromLedgerCoin)
import Hydra.Cardano.Api.TxScriptValidity (toLedgerScriptValidity)

import qualified Cardano.Ledger.Alonzo.Scripts as Ledger
import qualified Cardano.Ledger.Alonzo.TxWits as Ledger
import Cardano.Ledger.Babbage.Core (ppPricesL)
import qualified Cardano.Ledger.Babbage.Tx as Ledger
import Cardano.Ledger.BaseTypes (maybeToStrictMaybe, strictMaybeToMaybe)
import qualified Cardano.Ledger.Core as Ledger (PParams, Tx, hashScript)
import qualified Data.Map as Map
import Lens.Micro ((^.))

-- * Extras

-- | Get explicit fees allocated to a transaction.
--
-- NOTE: this function is partial and throws if given a Byron transaction for
-- which fees are necessarily implicit.
txFee' :: HasCallStack => Tx era -> Lovelace
txFee' (getTxBody -> TxBody body) =
  case txFee body of
    TxFeeExplicit TxFeesExplicitInShelleyEra fee -> fee
    TxFeeExplicit TxFeesExplicitInAllegraEra fee -> fee
    TxFeeExplicit TxFeesExplicitInMaryEra fee -> fee
    TxFeeExplicit TxFeesExplicitInAlonzoEra fee -> fee
    TxFeeExplicit TxFeesExplicitInBabbageEra fee -> fee
    TxFeeExplicit TxFeesExplicitInConwayEra fee -> fee
    TxFeeImplicit _ -> error "impossible: TxFeeImplicit on non-Byron transaction."

-- | Calculate the total execution cost of a transaction, according to the
-- budget assigned to each redeemer.
totalExecutionCost ::
  Ledger.PParams (ShelleyLedgerEra Era) ->
  Tx Era ->
  Lovelace
totalExecutionCost pparams tx =
  fromLedgerCoin (Ledger.txscriptfee prices executionUnits)
 where
  prices = pparams ^. ppPricesL

  executionUnits =
    case tx of
      Tx (ShelleyTxBody _ _ _ (TxBodyScriptData _ _ redeemers) _ _) _ ->
        foldMap snd (Ledger.unRedeemers redeemers)
      _ ->
        mempty

-- * Type Conversions

-- | Convert a cardano-api 'Tx' into a cardano-ledger 'Tx' in the Babbage era
toLedgerTx :: Tx Era -> Ledger.Tx (ShelleyLedgerEra Era)
toLedgerTx = \case
  Tx (ShelleyTxBody _era body scripts scriptsData auxData validity) vkWits ->
    let (datums, redeemers) =
          case scriptsData of
            TxBodyScriptData _ ds rs -> (ds, rs)
            TxBodyNoScriptData -> (mempty, Ledger.Redeemers mempty)
     in -- XXX: The suggested way (by the ledger team) forward is to use
        -- mkBasicTxBody and lenses to construct ledger transactions.
        Ledger.AlonzoTx
          { Ledger.body =
              body
          , Ledger.isValid =
              toLedgerScriptValidity validity
          , Ledger.auxiliaryData =
              maybeToStrictMaybe auxData
          , Ledger.wits =
              Ledger.AlonzoTxWits
                { Ledger.txwitsVKey =
                    toLedgerKeyWitness vkWits
                , Ledger.txwitsBoot =
                    toLedgerBootstrapWitness vkWits
                , Ledger.txscripts =
                    Map.fromList
                      [ ( Ledger.hashScript @(ShelleyLedgerEra Era) s
                        , s
                        )
                      | s <- scripts
                      ]
                , Ledger.txdats =
                    datums
                , Ledger.txrdmrs =
                    redeemers
                }
          }

-- | Convert a cardano-ledger's 'Tx' in the Babbage era into a cardano-api 'Tx'.
fromLedgerTx :: Ledger.Tx (ShelleyLedgerEra Era) -> Tx Era
fromLedgerTx ledgerTx =
  Tx
    (ShelleyTxBody era body scripts scriptsData (strictMaybeToMaybe auxData) validity)
    (fromLedgerTxWitness wits)
 where
  -- XXX: The suggested way (by the ledger team) forward is to use lenses to
  -- introspect ledger transactions.
  Ledger.AlonzoTx body wits isValid auxData = ledgerTx

  era =
    ShelleyBasedEraBabbage

  scripts =
    Map.elems $ Ledger.txscripts' wits

  scriptsData =
    TxBodyScriptData
      ScriptDataInBabbageEra
      (Ledger.txdats' wits)
      (Ledger.txrdmrs' wits)

  validity = case isValid of
    Ledger.IsValid True ->
      TxScriptValidity TxScriptValiditySupportedInBabbageEra ScriptValid
    Ledger.IsValid False ->
      TxScriptValidity TxScriptValiditySupportedInBabbageEra ScriptInvalid
