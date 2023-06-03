"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3039],{19257:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(90814);const i={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",terminalWindowBody:"terminalWindowBody_tzdS",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",dot:"dot_fGZE"};function r(e){let{children:t,minHeight:n}=e;const r="string"==typeof t?a.createElement(o.Z,null,t):t;return a.createElement("div",{className:i.terminalWindow,style:{minHeight:n}},a.createElement("div",{className:i.terminalWindowHeader},a.createElement("div",{className:i.buttons},a.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i.dot,style:{background:"#58cb42"}}))),a.createElement("div",{className:i.terminalWindowBody},r))}},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),i=n(19257);const r={sidebar_position:3},s="QuickStart",d={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"QuickStart",description:"Your first steps with a hydra-node.",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/head-protocol/unstable/fr/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/docs/getting-started/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/head-protocol/unstable/fr/docs/getting-started/installation"},next:{title:"D\xe9mo",permalink:"/head-protocol/unstable/fr/docs/getting-started/demo/"}},l={},c=[{value:"Hydra-node options...",id:"hydra-node-options",level:2},{value:"...and Where to Find Them",id:"and-where-to-find-them",level:2},{value:"Cardano Keys",id:"cardano-keys",level:3},{value:"Hydra keys",id:"hydra-keys",level:3},{value:"Contestation Period",id:"contestation-period",level:3},{value:"Reference Scripts",id:"reference-scripts",level:3},{value:"Ledger Parameters",id:"ledger-parameters",level:3},{value:"Fuel",id:"fuel",level:3},{value:"Generating transactions for the WebSocket API",id:"generating-transactions-for-the-websocket-api",level:2},{value:"Example Setup",id:"example-setup",level:2},{value:"Google Cloud w/ Terraform",id:"google-cloud-w-terraform",level:3},{value:"Running on Mainnet",id:"running-on-mainnet",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"QuickStart"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your first steps with a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),".")),(0,o.kt)("p",null,"Running a Hydra head means running a Hydra node connected to some other Hydra nodes and connected to a Cardano node. A working ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/"},"cardano-node")," is therefore a pre-requisite for running a Hydra head. In this guide, we won't go over details about running a Cardano node and we invite you to look for existing documentation on the matter if need be."),(0,o.kt)("admonition",{title:"cardano-node & cardano-cli",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using containers and the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/inputoutput/cardano-node"},"official Docker image")," for running a Cardano node."),(0,o.kt)("p",{parentName:"admonition"},"This image contains both ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli"),". The latter is handy to run various commands, for example to create addresses and to generate keys.")),(0,o.kt)("h2",{id:"hydra-node-options"},"Hydra-node options..."),(0,o.kt)("p",null,"The entire configuration of the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," is provided through command-line options. Options are used to configure various elements of the network, API, chain connection and used ledger. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," option to get a description of all options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n\nUsage: hydra-node ([-q|--quiet] (-n|--node-id NODE-ID) [-h|--host IP]\n                    [-p|--port PORT] [-P|--peer ARG] [--api-host IP]\n                    [--api-port PORT] [--monitoring-port PORT]\n                    [--hydra-signing-key FILE] [--hydra-verification-key FILE]\n                    [--hydra-scripts-tx-id TXID] [--persistence-dir DIR]\n                    [--mainnet | --testnet-magic NATURAL] [--node-socket FILE]\n                    [--cardano-signing-key FILE]\n                    [--cardano-verification-key FILE]\n                    [--start-chain-from SLOT.HEADER_HASH]\n                    [--contestation-period CONTESTATION-PERIOD]\n                    [--ledger-protocol-parameters FILE] |\n                    COMMAND) [--version] [--script-info]\n\n  Starts a Hydra Node\n\nAvailable options:\n  -q,--quiet               Turns off logging.\n  -n,--node-id NODE-ID     The Hydra node identifier used on the Hydra network.\n                           It is important to have a unique identifier in order\n                           to be able distinguish between connected peers.\n  -h,--host IP             Listen address for incoming Hydra network\n                           connections. (default: 127.0.0.1)\n  -p,--port PORT           Listen port for incoming Hydra network connections.\n                           (default: 5001)\n  -P,--peer ARG            A peer address in the form <host>:<port>, where\n                           <host> can be an IP address, or a host name. Can be\n                           provided multiple times, once for each peer (current\n                           maximum limit is 4 peers).\n  --api-host IP            Listen address for incoming client API connections.\n                           (default: 127.0.0.1)\n  --api-port PORT          Listen port for incoming client API connections.\n                           (default: 4001)\n  --monitoring-port PORT   Listen port for monitoring and metrics via\n                           prometheus. If left empty, monitoring server is not\n                           started.\n  --hydra-signing-key FILE Hydra signing key used by our hydra-node.\n                           (default: \"hydra.sk\")\n  --hydra-verification-key FILE\n                           Hydra verification key of another party in the Head.\n                           Can be provided multiple times, once for each\n                           participant (current maximum limit is 4 ).\n  --hydra-scripts-tx-id TXID\n                           The transaction which is expected to have published\n                           Hydra scripts as reference scripts in its outputs.\n                           Note: All scripts need to be in the first 10 outputs.\n                           See release notes for pre-published versions. You can\n                           use the 'publish-scripts' sub-command to publish them\n                           yourself.\n  --persistence-dir DIR    The directory where the Hydra Head state is stored.Do\n                           not edit these files manually!\n  --mainnet                Use the mainnet magic id.\n  --testnet-magic NATURAL  Network identifier for a testnet to connect to. We\n                           only need to provide the magic number here. For\n                           example: '2' is the 'preview' network. See\n                           https://book.world.dev.cardano.org/environments.html\n                           for available networks. (default: 42)\n  --node-socket FILE       Filepath to local unix domain socket used to\n                           communicate with the cardano node.\n                           (default: \"node.socket\")\n  --cardano-signing-key FILE\n                           Cardano signing key of our hydra-node. This will be\n                           used to 'fuel' and sign Hydra protocol transactions,\n                           as well as commit UTxOs from. (default: \"cardano.sk\")\n  --cardano-verification-key FILE\n                           Cardano verification key of another party in the\n                           Head. Can be provided multiple times, once for each\n                           participant (current maximum limit is 4).\n  --start-chain-from SLOT.HEADER_HASH\n                           The id of the block we want to start observing the\n                           chain from. If not given, uses the chain tip at\n                           startup. Composed by the slot number, a separator\n                           ('.') and the hash of the block header. For example:\n                           52970883.d36a9936ae7a07f5f4bdc9ad0b23761cb7b14f35007e54947e27a1510f897f04.\n  --contestation-period CONTESTATION-PERIOD\n                           Contestation period for close transaction in seconds.\n                           If this value is not in sync with other participants\n                           hydra-node will ignore the initial tx. Additionally,\n                           this value needs to make sense compared to the\n                           current network we are running. (default: 60s)\n  --ledger-protocol-parameters FILE\n                           Path to protocol parameters used in the Hydra Head.\n                           See manual how to configure this.\n                           (default: \"protocol-parameters.json\")\n  --version                Show version\n  --script-info            Dump script info as JSON\n  -h,--help                Show this help text\n\nAvailable commands:\n  publish-scripts          Publish Hydra's Plutus scripts on chain to be used\n                           by the hydra-node as --hydra-script-tx-id.\n\n                            \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n                            \u2503              \u26a0 WARNING \u26a0              \u2503\n                            \u2523\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u252b\n                            \u2503    This costs money. About 50 Ada.    \u2503\n                            \u2503 Spent using the provided signing key. \u2503\n                            \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b\n\n\n\n")),(0,o.kt)("admonition",{title:"Dynamic Configuration",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We realise that the command-line in its current form isn't as user-friendly as it could, and is somewhat cumbersome to use for setting up large clusters."),(0,o.kt)("p",{parentName:"admonition"},"There are however plans to make the configuration more user-friendly and configurable dynamically; see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/240"},"#240")," & ",(0,o.kt)("a",{parentName:"p",href:"/adr/15"},"ADR-15"))),(0,o.kt)("h2",{id:"and-where-to-find-them"},"...and Where to Find Them"),(0,o.kt)("h3",{id:"cardano-keys"},"Cardano Keys"),(0,o.kt)("p",null,"The previous section describes the various options and elements needed to setup a Hydra node. In this section, we'll show how to obtain some of those elements. First, let's start with the Cardano keys (",(0,o.kt)("inlineCode",{parentName:"p"},"--cardano-signing-key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--cardano-verification-key"),")."),(0,o.kt)("p",null,"In a head, every participant is authenticated by two sets of keys, one key pair is a plain Ed25519 public/private key pair quite common on Cardano already. Such a key pair can be generated using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," as follows:"),(0,o.kt)(i.Z,{mdxType:"TerminalWindow"},"cardano-cli address key-gen --verification-key-file cardano.vk --signing-key-file cardano.sk"),(0,o.kt)("p",null,"From there, each participant is expected to share their verification key with other participants. To start a node, one will need its ",(0,o.kt)("strong",{parentName:"p"},"own signing key")," and ",(0,o.kt)("strong",{parentName:"p"},"other participants' verification key"),". Those keys are currently used to authenticate on-chain transactions which drives the execution of the Hydra protocol. They prevent unsolicited actors to fiddle with the head life-cycle (for instance, someone external to the head could otherwise ",(0,o.kt)("em",{parentName:"p"},"abort")," an initialised head). While this wouldn't put head participants' funds at risk, it is still an annoyance that one wants to prevent."),(0,o.kt)("h3",{id:"hydra-keys"},"Hydra keys"),(0,o.kt)("p",null,"The second set of keys are the so-called Hydra keys, which are used for multi-signing snapshots within a Head. While in the long-run, those keys will be key pairs used within MuSig2 aggregated multi-signature scheme. At present however, the aggregated multisig cryptography is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/193"},"yet to be implemented")," and the Hydra nodes are a naiive, but secure multi-signature scheme based on Ed25519 keys."),(0,o.kt)("p",null,"These are similar to cardano keys but are used only in the layer 2. We provide demo key pairs as ",(0,o.kt)("inlineCode",{parentName:"p"},"alice.{vk,sk}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bob.{vk,sk}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"carol.{vk,sk}")," in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/demo"},"demo folder"),"."),(0,o.kt)("p",null,"Alternatively, unique keys can be generated using ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-tools"),", a command-line utility that's provided as part of Hydra:"),(0,o.kt)(i.Z,{mdxType:"TerminalWindow"},"hydra-tools gen-hydra-key --output-file my-key"),(0,o.kt)("p",null,"This will create two files, ",(0,o.kt)("inlineCode",{parentName:"p"},"my-key.sk")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"my-key.vk")," containing Hydra keys suitable for use inside a head."),(0,o.kt)("h3",{id:"contestation-period"},"Contestation Period"),(0,o.kt)("p",null,"Contestation period is the argument to the hydra node expressed as the number of seconds. This value needs to be in sync with the network we are running on since\nslot lengths are different on different networks."),(0,o.kt)("p",null,"Contestation period is used in:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Constructing the upper transaction bound for close transaction"),(0,o.kt)("li",{parentName:"ul"},"Contestation deadline.")),(0,o.kt)("admonition",{title:"Note on contestation period",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All parties in the hydra head protocol need to configure the same value for ",(0,o.kt)("inlineCode",{parentName:"p"},"--contestation-period")," otherwise the ",(0,o.kt)("inlineCode",{parentName:"p"},"Init")," transaction will be ignored.\nThis prevents certain party from stalling/DoS-ing the head by setting unreasonable big number for contestation period.")),(0,o.kt)("h3",{id:"reference-scripts"},"Reference Scripts"),(0,o.kt)("p",null,"Hydra makes use of reference scripts to reduce the size of transactions driving the Head's lifecycle. In principle, reference scripts will be published with each release and the corresponding transaction id will be advertised in the release notes. However, if you do want to play around with this and provide alternative versions, you can do so by first publishing the scripts yourself via the ",(0,o.kt)("inlineCode",{parentName:"p"},"publish-scripts")," command:"),(0,o.kt)(i.Z,{mdxType:"TerminalWindow"},"hydra-node publish-scripts --testnet-magic 42 --node-socket /path/to/node.socket --cardano-signing-key cardano.sk"),(0,o.kt)("p",null,"On success, this commands outputs a transaction id ready to be used. The provided key is expected to hold funds (> 50 ADA), and will be used to create multiple ",(0,o.kt)("strong",{parentName:"p"},"UNSPENDABLE")," UTxO entries on-chain, each carrying a script that can be later referenced by the Hydra node."),(0,o.kt)("h3",{id:"ledger-parameters"},"Ledger Parameters"),(0,o.kt)("p",null,"At the core of a Hydra head, there's a ledger. At the moment, Hydra is wired only to Cardano and assumes a ledger configuration similar to the one used on the layer 1. This translates as a command-line option ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-protocol-parameters"),". This defines the updatable protocol parameters such as fees or transaction sizes. They use the same format as the one used by the cardano-cli (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli query protocol-parameters"),"'s output)."),(0,o.kt)("p",null,"We provide existing files in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-cluster/config"},"hydra-cluster/config"),' which can be used as basis. In particular, the protocol parameters are defined to nullify costs inside a head. Apart from that, they are the direct copy the current mainnet parameters. An interesting point about the Hydra\'s ledger is that, while it re-uses the same rules and code as the layer 1 (a.k.a. isomorphic), parameters may also be altered to slightly differ from the layer 1. This is the case for fees, but could also be done for script maximum execution budget for instance. However, not all parameters are safe to alter! Changing parameters that control the maximum size of a value (carrying native assets), or the minimum Ada value for a UTxO may render a head "unclosable"! A good rule thumb is that anything that applies strictly to transactions (fees, execution units, max tx size...) is safe to change. But anything that could be reflected in the UTxO is not.'),(0,o.kt)("admonition",{title:"About Protocol Parameters",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note that many of protocol-parameters are actually irrelevant in the context of Hydra (for example, there's no treasury or stake pool inside a head; consequently, parameters configuring the reward incentive or delegation rules are pointless and unused).")),(0,o.kt)("h3",{id:"fuel"},"Fuel"),(0,o.kt)("p",null,"Finally, one last bit necessary to get Hydra nodes all working regards their ",(0,o.kt)("em",{parentName:"p"},"internal wallet"),". Indeed, Hydra-nodes currently come with a rudimentary wallet which they use for fueling transactions driving the Head lifecycle (Init, Commit, Close, Fanout...). Since those transactions happen on the layer 1, they cost money!"),(0,o.kt)("p",null,"For now, this is managed internally by the Hydra's wallet, but it needs some help. The Cardano keys provided to the node are expected to hold funds. More specifically, at least one UTxO entry, marked with a specific datum hash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Fuel datum hash"',title:'"Fuel',datum:!0,'hash"':!0},"a654fb60d21c1fed48db2c320aa6df9737ec0204c0ba53b9b94a09fb40e757f3\n")),(0,o.kt)("p",null,"Conveniently (at least, as much as it can possibly be right now), we provide a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/sample-node-config/gcp/scripts/create-marker-utxo.sh"},"create-marker-utxo.sh")," script that uses the cardano-cli to convert a normal UTxO into a marked fuel UTxO. Note that the marker is necessary because, the Cardano keys are expected to hold funds necessary for commits as well, however unmarked."),(0,o.kt)("p",null,"For easy scripting purpose, ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-tools")," provide a dedicated command to output the current marker datum hash:"),(0,o.kt)(i.Z,{mdxType:"TerminalWindow"},'hydra-tools marker-hash > "a654fb60d21c1fed48db2c320aa6df9737ec0204c0ba53b9b94a09fb40e757f3"'),(0,o.kt)("admonition",{title:"About commits",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the long-run, we'll ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/215"},"move commits outside of the Hydra node")," to be done by external wallets (likely through wallets following the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0030"},"CIP-0030")," standard).")),(0,o.kt)("h2",{id:"generating-transactions-for-the-websocket-api"},"Generating transactions for the WebSocket API"),(0,o.kt)("p",null,"To perform a transaction within an initialized Head via the WebSocket API of Hydra Node, use the commands below and send the output to the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Transaction building"',title:'"Transaction','building"':!0},'cardano-cli transaction build-raw \\\n  --babbage-era \\\n  --tx-in 09d34606abdcd0b10ebc89307cbfa0b469f9144194137b45b7a04b273961add8#687 \\\n  --tx-out addr1vx8apm8x8rla2w6tk7dxnwrlxkmeuera4x4tw5j695xhxeq4wawpz+7620669 \\\n  --fee 0 \\\n  --out-file tx.json\n\ncardano-cli transaction sign \\\n  --tx-body-file tx.json \\\n  --signing-key-file cardano.sk \\\n  --out-file signed-tx.json\n\necho "{ \\"tag\\": \\"NewTx\\", \\"transaction\\": $(cat signed-tx.json | jq ".cborHex") }"\n{ "tag": "NewTx", "transaction": "84a3008182582009d34606abdcd0b10ebc89307cbfa0b469f9144194137b45b7a04b273961add81902af0181a200581d618fd0ece638ffd53b4bb79a69b87f35b79e647da9aab7525a2d0d7364011a0074483d0200a10081825820c736d40ee64c031851af26007c00a3b6fcbebccfd333a8ee6f14983f9be5331c58404bae506f5235778ec65eca6fdfcf6ec61ab93420b91e0b71ca82d437904f860e999372cf00252246ca77012e19c344b3af60df9f853af53fc86835f95a119609f5f6" }\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--tx-in")," value is a UTxO obtained from the reply to the ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "tag": "GetUTxO" }')," message.\nE.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="GetUTxOResponse"',title:'"GetUTxOResponse"'},'{\n  "tag": "GetUTxOResponse",\n  "utxo": {\n    "09d34606abdcd0b10ebc89307cbfa0b469f9144194137b45b7a04b273961add8#687": {\n      "address": "addr1w9htvds89a78ex2uls5y969ttry9s3k9etww0staxzndwlgmzuul5",\n      "value": {\n        "lovelace": 7620669\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"example-setup"},"Example Setup"),(0,o.kt)("h3",{id:"google-cloud-w-terraform"},"Google Cloud w/ Terraform"),(0,o.kt)("p",null,"We provide sample node configurations that will help you get started hosting a Hydra node on virtual machines in the Cloud in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/sample-node-config/gcp/"},(0,o.kt)("inlineCode",{parentName:"a"},"sample-node-config/")," directory"),". In particular, this setup contains a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/sample-node-config/gcp/docker-compose.yaml"},"docker-compose.yaml")," specification which gives a good template for configuring cardano-node + hydra-node services. It also offers various useful scripts to setup your cluster."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This setup is meant to configure your cluster for devnet network. If you want to run the node on mainnet check out ",(0,o.kt)("em",{parentName:"p"},"Running on Mainnet")," paragraph.")),(0,o.kt)("h2",{id:"running-on-mainnet"},"Running on Mainnet"),(0,o.kt)("p",null,"Hydra node is compatible with the mainnet network. To choose this network you need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--mainnet")," flag for the network id in the hydra-node arguments. We publish the hydra scripts on each new release and you can find them on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/releases"},"release page")," (look for section ",(0,o.kt)("em",{parentName:"p"},"Hydra Scripts"),")."),(0,o.kt)("p",null,"Please be sure to read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/known-issues"},"relevant section")," section to fully understand the limitations and consequences of running Hydra nodes on mainnet."))}u.isMDXComponent=!0}}]);