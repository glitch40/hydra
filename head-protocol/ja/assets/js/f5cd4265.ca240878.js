"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1149],{19257:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(90814);const r={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",terminalWindowBody:"terminalWindowBody_tzdS",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",dot:"dot_fGZE"};function i(e){let{children:t,minHeight:n}=e;const i="string"==typeof t?a.createElement(o.Z,null,t):t;return a.createElement("div",{className:r.terminalWindow,style:{minHeight:n}},a.createElement("div",{className:r.terminalWindowHeader},a.createElement("div",{className:r.buttons},a.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:r.dot,style:{background:"#58cb42"}}))),a.createElement("div",{className:r.terminalWindowBody},i))}},70932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905)),r=n(19257);const i={sidebar_position:3},d="\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",s={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",description:"hydra-node\u3092\u4f7f\u7528\u3057\u305f\u6700\u521d\u306e\u30b9\u30c6\u30c3\u30d7\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/head-protocol/ja/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/quickstart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/head-protocol/ja/docs/getting-started/installation"},next:{title:"\u30c7\u30e2",permalink:"/head-protocol/ja/docs/getting-started/demo/"}},p={},l=[{value:"Hydra-node \u306e\u30aa\u30d7\u30b7\u30e7\u30f3...",id:"hydra-node-\u306e\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u8a73\u7d30\u306b\u3064\u3044\u3066",id:"\u8a73\u7d30\u306b\u3064\u3044\u3066",level:2},{value:"\u30ab\u30eb\u30c0\u30ce\u9375(\u30ad\u30fc)",id:"\u30ab\u30eb\u30c0\u30ce\u9375\u30ad\u30fc",level:3},{value:"Hydra \u9375(\u30ad\u30fc)",id:"hydra-\u9375\u30ad\u30fc",level:3},{value:"\u5143\u5e33\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u5143\u5e33\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:3},{value:"\u71c3\u6599",id:"\u71c3\u6599",level:3},{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4f8b",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4f8b",level:2},{value:"Google \u30af\u30e9\u30a6\u30c9\u3068 Terraform",id:"google-\u30af\u30e9\u30a6\u30c9\u3068-terraform",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8"},"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),"\u3092\u4f7f\u7528\u3057\u305f\u6700\u521d\u306e\u30b9\u30c6\u30c3\u30d7\u3002")),(0,o.kt)("p",null,"Hydra \u30d8\u30c3\u30c9\u3092\u52d5\u304b\u3059\u3068\u3044\u3046\u3053\u3068\u306f\u3001\u4ed6\u306e\u8907\u6570\u306e Hydra \u30ce\u30fc\u30c9\u306b\u63a5\u7d9a\u3055\u308c\u3001Cardano \u30ce\u30fc\u30c9\u306b\u63a5\u7d9a\u3055\u308c\u305f Hydra \u30ce\u30fc\u30c9\u3092\u52d5\u304b\u3059\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/cardano-node/"},"cardano-node")," \u306e\u5b9f\u884c\u306f Hydra \u30d8\u30c3\u30c9\u3092\u52d5\u304b\u3059\u305f\u3081\u306e\u524d\u63d0\u6761\u4ef6\u3068\u306a\u308a\u307e\u3059\u3002\u3053\u306e\u30ac\u30a4\u30c9\u3067\u306f\u3001Cardano \u30ce\u30fc\u30c9\u306e\u5b9f\u884c\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u8aac\u660e\u3057\u307e\u305b\u3093\u306e\u3067\u3001\u5fc5\u8981\u3067\u3042\u308c\u3070\u3001\u3053\u306e\u4ef6\u306b\u95a2\u3059\u308b\u65e2\u5b58\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u63a2\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("admonition",{title:"cardano-node & cardano-cli",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Cardano \u30ce\u30fc\u30c9\u306e\u5b9f\u884c\u306b\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u3084",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/inputoutput/cardano-node"},"\u516c\u5f0f Docker \u30a4\u30e1\u30fc\u30b8"),"\u306e\u4f7f\u7528\u3092\u63a8\u5968\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u3053\u306e\u30a4\u30e1\u30fc\u30b8\u306b\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," \u306e\u4e21\u65b9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli"),"\u306f\u69d8\u3005\u306a\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u306e\u306b\u4fbf\u5229\u3067\u3001\u4f8b\u3048\u3070\u30a2\u30c9\u30ec\u30b9\u306e\u4f5c\u6210\u3084\u9375\u306e\u751f\u6210\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"hydra-node-\u306e\u30aa\u30d7\u30b7\u30e7\u30f3"},"Hydra-node \u306e\u30aa\u30d7\u30b7\u30e7\u30f3..."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," \u306e\u69cb\u6210\u5168\u4f53\u306f\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002 \u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3001API\u3001\u30c1\u30a7\u30fc\u30f3\u63a5\u7d9a\u3001\u304a\u3088\u3073\u4f7f\u7528\u3055\u308c\u308b\u53f0\u5e33\u306e\u3055\u307e\u3056\u307e\u306a\u8981\u7d20\u3092\u69cb\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002 ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u8aac\u660e\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nUsage: hydra-node ([-q|--quiet] (-n|--node-id NODE-ID) [-h|--host IP]\n                    [-p|--port PORT] [-P|--peer ARG] [--api-host IP]\n                    [--api-port PORT] [--monitoring-port PORT]\n                    [--hydra-signing-key FILE] [--hydra-verification-key FILE]\n                    [--hydra-scripts-tx-id TXID] [--persistence-dir DIR]\n                    (--mainnet | --testnet-magic NATURAL) [--node-socket FILE]\n                    [--cardano-signing-key FILE]\n                    [--cardano-verification-key FILE]\n                    [--start-chain-from SLOT.HEADER_HASH]\n                    [--contestation-period CONTESTATION-PERIOD]\n                    [--ledger-genesis FILE]\n                    [--ledger-protocol-parameters FILE] |\n                    COMMAND) [--version] [--script-info]\n\n  Starts a Hydra Node\n\nAvailable options:\n  -q,--quiet               Turns off logging.\n  -n,--node-id NODE-ID     The Hydra node identifier used on the Hydra network.\n                           It is important to have a unique identifier in order\n                           to be able distinguish between connected peers.\n  -h,--host IP             Listen address for incoming Hydra network\n                           connections. (default: 127.0.0.1)\n  -p,--port PORT           Listen port for incoming Hydra network connections.\n                           (default: 5001)\n  -P,--peer ARG            A peer address in the form <host>:<port>, where\n                           <host> can be an IP address, or a host name. Can be\n                           provided multiple times, once for each peer (current\n                           maximum limit is 4 peers).\n  --api-host IP            Listen address for incoming client API connections.\n                           (default: 127.0.0.1)\n  --api-port PORT          Listen port for incoming client API connections.\n                           (default: 4001)\n  --monitoring-port PORT   Listen port for monitoring and metrics via\n                           prometheus. If left empty, monitoring server is not\n                           started.\n  --hydra-signing-key FILE Hydra signing key used by our hydra-node.\n                           (default: "hydra.sk")\n  --hydra-verification-key FILE\n                           Hydra verification key of another party in the Head.\n                           Can be provided multiple times, once for each\n                           participant (current maximum limit is 4 ).\n  --hydra-scripts-tx-id TXID\n                           The transaction which is expected to have published\n                           Hydra scripts as reference scripts in its outputs.\n                           Note: All scripts need to be in the first 10 outputs.\n                           See release notes for pre-published versions. You can\n                           use the \'publish-scripts\' sub-command to publish them\n                           yourself.\n  --persistence-dir DIR    The directory where the Hydra Head state is stored.Do\n                           not edit these files manually!\n  --mainnet                Use the mainnet magic id.\n  --testnet-magic NATURAL  Specify a testnet magic id.\n  --node-socket FILE       Filepath to local unix domain socket used to\n                           communicate with the cardano node.\n                           (default: "node.socket")\n  --cardano-signing-key FILE\n                           Cardano signing key of our hydra-node. This will be\n                           used to \'fuel\' and sign Hydra protocol transactions,\n                           as well as commit UTxOs from. (default: "cardano.sk")\n  --cardano-verification-key FILE\n                           Cardano verification key of another party in the\n                           Head. Can be provided multiple times, once for each\n                           participant (current maximum limit is 4).\n  --start-chain-from SLOT.HEADER_HASH\n                           The id of the block we want to start observing the\n                           chain from. If not given, uses the chain tip at\n                           startup. Composed by the slot number, a separator\n                           (\'.\') and the hash of the block header. For example:\n                           52970883.d36a9936ae7a07f5f4bdc9ad0b23761cb7b14f35007e54947e27a1510f897f04.\n  --contestation-period CONTESTATION-PERIOD\n                           Contestation period for close transaction in seconds.\n                           If this value is not in sync with other participants\n                           hydra-node will ignore the initial tx. Additionally,\n                           this value needs to make sense compared to the\n                           current network we are running. (default: 60s)\n  --ledger-genesis FILE    Path to a Shelley-compatible genesis JSON file used\n                           for the Hydra ledger. You can use the corresponding\n                           Cardano network\'s shelley genesis file from:\n                           https://book.world.dev.cardano.org/environments.html\n                           (default: "genesis-shelley.json")\n  --ledger-protocol-parameters FILE\n                           Path to protocol parameters used in the Hydra Head.\n                           See manual how to configure this.\n                           (default: "protocol-parameters.json")\n  --version                Show version\n  --script-info            Dump script info as JSON\n  -h,--help                Show this help text\n\nAvailable commands:\n  publish-scripts          Publish Hydra\'s Plutus scripts on chain to be used\n                           by the hydra-node as --hydra-script-tx-id.\n\n                            \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n                            \u2503              \u26a0 WARNING \u26a0              \u2503\n                            \u2523\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u252b\n                            \u2503    This costs money. About 50 Ada.    \u2503\n                            \u2503 Spent using the provided signing key. \u2503\n                            \u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u251b\n\n')),(0,o.kt)("admonition",{title:"Dynamic Configuration",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u73fe\u5728\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u3068\u306f\u8a00\u3044\u96e3\u304f\u3001\u5927\u898f\u6a21\u306a\u30af\u30e9\u30b9\u30bf\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u306f\u3084\u3084\u4f7f\u3044\u306b\u304f\u3044\u3068\u3044\u3046\u3053\u3068\u306f\u8a8d\u8b58\u3057\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u3057\u304b\u3057\u3001\u3088\u308a\u4f7f\u3044\u3084\u3059\u304f\u3001\u52d5\u7684\u306b\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u8a08\u753b\u304c\u3042\u308a\u307e\u3059\u3002",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/240"},"#240")," & ",(0,o.kt)("a",{parentName:"p",href:"/adr/15"},"ADR-15")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,o.kt)("h2",{id:"\u8a73\u7d30\u306b\u3064\u3044\u3066"},"\u8a73\u7d30\u306b\u3064\u3044\u3066"),(0,o.kt)("h3",{id:"\u30ab\u30eb\u30c0\u30ce\u9375\u30ad\u30fc"},"\u30ab\u30eb\u30c0\u30ce\u9375(\u30ad\u30fc)"),(0,o.kt)("p",null,"\u524d\u306e\u9805\u76ee\u3067\u306f\u3001Hydra \u30ce\u30fc\u30c9\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u5fc5\u8981\u306a\u3055\u307e\u3056\u307e\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u8981\u7d20\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3057\u305f\u3002\u3053\u306e\u9805\u76ee\u3067\u306f\u3001\u53d6\u5f97\u65b9\u6cd5\u306b\u3064\u3044\u3066\u305d\u306e\u4e00\u90e8\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002\u307e\u305a\u3001Cardano \u30ad\u30fc\u30d5\u30a1\u30a4\u30eb(",(0,o.kt)("inlineCode",{parentName:"p"},"--cardano-signing-key")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"--cardano-verification-key"),")\u304b\u3089\u3067\u3059\u3002"),(0,o.kt)("p",null,"\u30d8\u30c3\u30c9\u5185\u306b\u304a\u3044\u3066\u3001\u53c2\u52a0\u8005\u306f 2 \u7d44\u306e\u9375\u3067\u8a8d\u8a3c\u3055\u308c\u307e\u3059\u3002 1 \u7d44\u306e\u9375\u30da\u30a2\u306f\u3001Cardano \u3067\u3059\u3067\u306b\u4e00\u822c\u7684\u306a Ed25519 \u306e\u516c\u958b\u9375/\u79d8\u5bc6\u9375\u30da\u30a2\u3067\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u9375\u30da\u30a2\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli")," \u3092\u7528\u3044\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u751f\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"TerminalWindow"},"cardano-cli address key-gen --verification-key-file cardano.vk --signing-key-file cardano.sk"),(0,o.kt)("p",null,"\u5404\u53c2\u52a0\u8005\u306f\u81ea\u5206\u306e\u691c\u8a3c\u30ad\u30fc\u3092\u4ed6\u306e\u53c2\u52a0\u8005\u3068\u5171\u6709\u3059\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002 \u30ce\u30fc\u30c9\u3092\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5206\u306e\u7f72\u540d\u30ad\u30fc"),"\u3068",(0,o.kt)("strong",{parentName:"p"},"\u4ed6\u306e\u53c2\u52a0\u8005\u306e\u691c\u8a3c\u30ad\u30fc"),"\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u9375\u306f\u73fe\u5728\u3001Hydra \u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u5b9f\u884c\u3092\u4fc3\u3059\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30fb\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u671b\u307e\u308c\u306a\u3044\u30a2\u30af\u30bf\u30fc\u304c\u30d8\u30c3\u30c9\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u3044\u3058\u304f\u308a\u56de\u3059\u306e\u3092\u9632\u3050\u305f\u3081\u3067\u3059\uff08\u305f\u3068\u3048\u3070\u3001\u30d8\u30c3\u30c9\u306e\u5916\u90e8\u306e\u8ab0\u304b\u304c\u3001\u521d\u671f\u5316\u3055\u308c\u305f\u30d8\u30c3\u30c9\u3092\u4e2d\u6b62\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3059\uff09\u3002\u3053\u308c\u306f\u30d8\u30c3\u30c9\u53c2\u52a0\u8005\u306e\u8cc7\u91d1\u3092\u5371\u967a\u306b\u3055\u3089\u3059\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u305d\u308c\u3067\u3082\u9632\u304e\u305f\u3044\u5384\u4ecb\u306a\u3082\u306e\u3067\u3059\u3002"),(0,o.kt)("h3",{id:"hydra-\u9375\u30ad\u30fc"},"Hydra \u9375(\u30ad\u30fc)"),(0,o.kt)("p",null,"2 \u3064\u76ee\u306e\u30ad\u30fc\u30bb\u30c3\u30c8\u306f\u3001\u3044\u308f\u3086\u308b Hydra \u30ad\u30fc\u3067\u3001Head \u5185\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u306e\u30de\u30eb\u30c1\u30b7\u30b0\u30cd\u30c1\u30e3\u306b\u4f7f\u7528\u3055\u308c\u308b\u3082\u306e\u3067\u3059\u3002\u9577\u671f\u7684\u306b\u306f\u3001\u3053\u308c\u3089\u306e\u9375\u306f MuSig2 \u30a2\u30b0\u30ea\u30b2\u30fc\u30b7\u30e7\u30f3\u30fb\u30de\u30eb\u30c1\u30b7\u30b0\u30cd\u30c1\u30e3\u65b9\u5f0f\u3067\u4f7f\u7528\u3055\u308c\u308b\u30ad\u30fc\u30da\u30a2\u3068\u306a\u308b\u4e88\u5b9a\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u73fe\u6642\u70b9\u3067\u306f\u3001\u96c6\u7d04\u578b\u30de\u30eb\u30c1\u30b7\u30b0\u30cd\u30c1\u30e3\u6697\u53f7\u306f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/193"},"\u672a\u5b9f\u88c5"),"\u3067\u3001Hydra \u30ce\u30fc\u30c9\u306f Ed25519 \u9375\u306b\u57fa\u3065\u304f\u5b89\u5168\u306a\u30de\u30eb\u30c1\u30b7\u30b0\u30cd\u30c1\u30e3\u65b9\u5f0f\u3068\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u3053\u308c\u3089\u306f\u30ab\u30eb\u30c0\u30ce\u30ad\u30fc\u306b\u4f3c\u3066\u3044\u307e\u3059\u304c\u3001\u6df7\u540c\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u57fa\u672c\u7684\u306b\u30ad\u30fc\u30de\u30c6\u30ea\u30a2\u30eb\u3067\u76f4\u63a5\u69cb\u6210\u3055\u308c\u308b\u5225\u306e\u57fa\u672c\u7684\u306a\u30c7\u30a3\u30b9\u30af\u4e0a\u306e\u8868\u73fe\u3092\u4f7f\u7528\u3057\u307e\u3059\uff08\u30ab\u30eb\u30c0\u30ce\u30ad\u30fc\u306f\u901a\u5e38\u3001\u30c6\u30ad\u30b9\u30c8\u30a8\u30f3\u30d9\u30ed\u30fc\u30d7\u306b CBOR \u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u3066\u4fdd\u5b58\u3055\u308c\u307e\u3059\uff09\u3002\u30c7\u30e2\u7528\u306e\u9375\u30da\u30a2\u306f\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"alice.{vk,sk}"),"\u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"bob.{vk,sk}")," \u3001 ",(0,o.kt)("inlineCode",{parentName:"p"},"carol.{vk,sk}")," \u3092 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/demo"},"demo folder"),"\u306b\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002 \u73fe\u5728\u3001\u53c2\u52a0\u8005\u306f\u305d\u306e\u4e2d\u304b\u3089 1 \u3064\u3092\u9078\u3073\u3001Cardano \u306e\u9375\u3068\u540c\u69d8\u306e\u65b9\u6cd5\u3067\u3001\u691c\u8a3c\u9375\u3092\u4ef2\u9593\u3068\u5171\u6709\u3057\u3001\u7f72\u540d\u9375\u3092\u5f7c\u3089\u306b\u4f7f\u3046\u3053\u3068\u304c\u671f\u5f85\u3055\u308c\u3066\u3044\u308b\u3002 (TODO: \u30b7\u30b9\u30c6\u30e0\u306e\u30a8\u30f3\u30c8\u30ed\u30d4\u30fc\u3092\u5229\u7528\u3057\u3066\u65b0\u3057\u3044\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u7c21\u5358\u306a\u65b9\u6cd5\u3092\u63d0\u4f9b\u3059\u3079\u304d\u3067\u3042\u308b)"),(0,o.kt)("h3",{id:"\u5143\u5e33\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"},"\u5143\u5e33\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"),(0,o.kt)("p",null,"Hydra-Head \u306e\u30b3\u30a2\u306b\u306f\u3001\u53f0\u5e33\u304c\u3042\u308a\u307e\u3059\u3002\u73fe\u6642\u70b9\u3067\u306f\u3001Hydra \u306f Cardano \u306b\u306e\u307f\u914d\u7dda\u3055\u308c\u3066\u304a\u308a\u3001\u30ec\u30a4\u30e4\u30fc 1 \u3067\u4f7f\u308f\u308c\u3066\u3044\u308b\u3082\u306e\u3068\u540c\u69d8\u306e\u53f0\u5e33\u69cb\u6210\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 \u3053\u308c\u306f\u30012 \u3064\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30aa\u30d7\u30b7\u30e7\u30f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-genesis")," \u3068 ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-protocol-parameters")," \u3068\u3057\u3066\u7ffb\u8a33\u3055\u308c\u307e\u3059\u3002\u524d\u8005\u306f\uff08\u30b7\u30a7\u30ea\u30fc\uff01\uff09\u751f\u6210\u898f\u5247\u3092\u5b9a\u7fa9\u3057\u3001\u3088\u308a\u5177\u4f53\u7684\u306b\u306f\u3001\u53f0\u5e33\u304c\u5fc5\u8981\u3068\u3059\u308b",(0,o.kt)("strong",{parentName:"p"},"\u30b0\u30ed\u30fc\u30d0\u30eb"),"\u3067\u66f4\u65b0\u4e0d\u53ef\u80fd\u306a\u30d7\u30ed\u30c8\u30b3\u30eb\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\u5f8c\u8005\u306f\u3001\u624b\u6570\u6599\u3084\u53d6\u5f15\u30b5\u30a4\u30ba\u306a\u3069\u3001\u66f4\u65b0\u53ef\u80fd\u306a\u30d7\u30ed\u30c8\u30b3\u30eb\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306f cardano-cli \u3067\u4f7f\u7528\u3055\u308c\u308b\u3082\u306e\u3068\u540c\u3058\u5f62\u5f0f\u3092\u4f7f\u7528\u3057\u307e\u3059\uff08\u4f8b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-cli query protocol-parameters"),"\u306e\u51fa\u529b\uff09\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/hydra-cluster/config"},"hydra-cluster/config"),"\u306b\u65e2\u5b58\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u63d0\u4f9b\u3057\u3066\u304a\u308a\u3001\u3053\u308c\u3092\u30d9\u30fc\u30b9\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u7279\u306b\u3001\u30d8\u30c3\u30c9\u5185\u306e\u30b3\u30b9\u30c8\u3092\u7121\u52b9\u5316\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u305d\u308c\u3068\u306f\u5225\u306b\u3001\u73fe\u5728\u306e\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3082\u305d\u306e\u307e\u307e\u30b3\u30d4\u30fc\u3057\u3066\u3044\u307e\u3059\u3002\u30d2\u30c9\u30e9\u306e\u53f0\u5e33\u306e\u9762\u767d\u3044\u3068\u3053\u308d\u306f\u3001\u30ec\u30a4\u30e4\u30fc 1 \u3068\u540c\u3058\u30eb\u30fc\u30eb\u3084\u30b3\u30fc\u30c9\u3092\u518d\u5229\u7528\u3057\u3066\u3044\u308b\uff08\u3044\u308f\u3086\u308b\u540c\u578b\uff09\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u3001\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u304c\u30ec\u30a4\u30e4\u30fc 1 \u3068\u306f\u82e5\u5e72\u7570\u306a\u308b\u3088\u3046\u306b\u5909\u66f4\u3055\u308c\u3066\u3044\u308b\u70b9\u3067\u3059\u3002\u3053\u308c\u306f\u6599\u91d1\u306e\u5834\u5408\u3067\u3059\u304c\u3001\u4f8b\u3048\u3070\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u6700\u5927\u5b9f\u884c\u4e88\u7b97\u306a\u3069\u3067\u3082\u53ef\u80fd\u3067\u3059\u3002\u305f\u3060\u3057\u3001\u3059\u3079\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u5b89\u5168\u306b\u5909\u66f4\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u5024\u306e\u6700\u5927\u30b5\u30a4\u30ba\uff08\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30bb\u30c3\u30c8\u3092\u904b\u3076\uff09\u3092\u5236\u5fa1\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u3084\u3001UTxO \u306e\u6700\u5c0f Ada \u5024\u3092\u5909\u66f4\u3059\u308b\u3068\u3001\u30d8\u30c3\u30c9\u304c\u300cclosable\u300d\u306b\u306a\u3063\u3066\u3057\u307e\u3046\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u7d4c\u9a13\u5247\u304b\u3089\u8a00\u3046\u3068\u3001\u53d6\u5f15\u306b\u53b3\u5bc6\u306b\u9069\u7528\u3055\u308c\u308b\u3082\u306e\uff08\u624b\u6570\u6599\u3001\u5b9f\u884c\u5358\u4f4d\u3001\u6700\u5927 TX \u30b5\u30a4\u30ba...\uff09\u306f\u5909\u66f4\u3057\u3066\u3082\u5b89\u5168\u3067\u3042\u308b\u3002\u3057\u304b\u3057\u3001UTxO \u306b\u53cd\u6620\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3082\u306e\u306f\u3001\u305d\u3046\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),(0,o.kt)("admonition",{title:"About Protocol Parameters",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u307b\u3068\u3093\u3069\u306e\u30d7\u30ed\u30c8\u30b3\u30eb\u30d1\u30e9\u30e1\u30fc\u30bf\u306f\u3001\u307e\u305a\u7b2c\u4e00\u306b Genesis \u30d1\u30e9\u30e1\u30fc\u30bf\u3067\u3042\u308b\u305f\u3081\u30012 \u3064\u306e\u30d5\u30a1\u30a4\u30eb\u306e\u9593\u306b\u5c11\u3057\u91cd\u8907\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3055\u3089\u306b\u3001\u3053\u308c\u3089\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306e\u591a\u304f\u306f\u3001Hydra \u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u306f\u5b9f\u969b\u306b\u306f\u7121\u95a2\u4fc2\u3067\u3059\uff08\u305f\u3068\u3048\u3070\u3001Head \u306e\u4e2d\u306b\u91d1\u5eab\u3084\u30b9\u30c6\u30fc\u30af\u30d7\u30fc\u30eb\u304c\u306a\u3044\u305f\u3081\u3001\u5831\u916c\u30a4\u30f3\u30bb\u30f3\u30c6\u30a3\u30d6\u307e\u305f\u306f\u59d4\u4efb\u30eb\u30fc\u30eb\u3092\u69cb\u6210\u3059\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u306f\u4f7f\u7528\u3067\u304d\u307e\u305b\u3093\uff09\u3002")),(0,o.kt)("h3",{id:"\u71c3\u6599"},"\u71c3\u6599"),(0,o.kt)("p",null,"\u6700\u5f8c\u306b\u3001Hydra \u30ce\u30fc\u30c9\u304c\u3059\u3079\u3066\u52d5\u4f5c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3082\u3046 1 \u3064\u306e\u3053\u3068\u306f\u3001\u5185\u90e8\u30a6\u30a9\u30ec\u30c3\u30c8\u306b\u3064\u3044\u3066\u3067\u3059\u3002\u5b9f\u969b\u3001Hydra \u30ce\u30fc\u30c9\u306b\u306f\u73fe\u5728\u521d\u6b69\u7684\u306a\u30a6\u30a9\u30ec\u30c3\u30c8\u304c\u4ed8\u5c5e\u3057\u3066\u304a\u308a\u3001Head \u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\uff08Init, Commit, Close, Fanout...\uff09\u3092\u99c6\u52d5\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u71c3\u6599\u3068\u3057\u3066\u5229\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u30ec\u30a4\u30e4\u30fc 1 \u3067\u767a\u751f\u3059\u308b\u306e\u3067\u3001\u304a\u91d1\u304c\u304b\u304b\u308a\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4eca\u306e\u3068\u3053\u308d\u3001\u3053\u308c\u306f Hydra \u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u306b\u3088\u3063\u3066\u5185\u90e8\u7684\u306b\u7ba1\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u3044\u304f\u3064\u304b\u306e\u52a9\u3051\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ce\u30fc\u30c9\u306b\u63d0\u4f9b\u3055\u308c\u308b Cardano \u30ad\u30fc\u306f\u3001\u8cc7\u91d1\u3092\u4fdd\u6301\u3059\u308b\u3053\u3068\u304c\u671f\u5f85\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001\u7279\u5b9a\u306e\u30c7\u30fc\u30bf\u30e0\u30cf\u30c3\u30b7\u30e5\u3067\u30de\u30fc\u30af\u3055\u308c\u305f\u3001\u5c11\u306a\u304f\u3068\u3082 1 \u3064\u306e UTxO \u30a8\u30f3\u30c8\u30ea\u30fc\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Fuel datum hash"',title:'"Fuel',datum:!0,'hash"':!0},"a654fb60d21c1fed48db2c320aa6df9737ec0204c0ba53b9b94a09fb40e757f3\n")),(0,o.kt)("p",null,"\u4fbf\u5229\u306a\u3053\u3068\u306b\uff08\u5c11\u306a\u304f\u3068\u3082\u3001\u4eca\u3067\u304d\u308b\u9650\u308a\uff09\u3001cardano-cli \u3092\u4f7f\u7528\u3057\u3066\u901a\u5e38\u306e UTxO \u3092\u30de\u30fc\u30af\u3055\u308c\u305f\u71c3\u6599 UTxO \u306b\u5909\u63db\u3059\u308b",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/sample-node-config/gcp/scripts/create-marker-utxo.sh"},"create-marker-utxo.sh"),"\u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30de\u30fc\u30ab\u30fc\u304c\u5fc5\u8981\u306a\u7406\u7531\u306f\u3001Cardano \u306e\u9375\u306f\u30b3\u30df\u30c3\u30c8\u306b\u5fc5\u8981\u306a\u8cc7\u91d1\u3082\u4fdd\u6301\u3059\u308b\u3053\u3068\u304c\u671f\u5f85\u3055\u308c\u308b\u304b\u3089\u3067\u3059\uff08\u305f\u3060\u3057\u3001\u30de\u30fc\u30af\u3055\u308c\u3066\u3044\u307e\u305b\u3093\uff09"),(0,o.kt)("admonition",{title:"About commits",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u9577\u671f\u7684\u306b\u306f\u3001\u79c1\u305f\u3061\u306f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/215"},"Hydra \u30ce\u30fc\u30c9\u5916\u306e\u30b3\u30df\u30c3\u30c8\u3092\u79fb\u52d5"),"\u3057\u3066\u3001\u5916\u90e8\u306e\u30a6\u30a9\u30ec\u30c3\u30c8\uff08\u304a\u305d\u3089\u304f",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cardano-foundation/CIPs/tree/master/CIP-0030"},"CIP-0030"),"\u6a19\u6e96\u306b\u5f93\u3046\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u901a\u3058\u3066\uff09\u3067\u884c\u308f\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002")),(0,o.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4f8b"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4f8b"),(0,o.kt)("h3",{id:"google-\u30af\u30e9\u30a6\u30c9\u3068-terraform"},"Google \u30af\u30e9\u30a6\u30c9\u3068 Terraform"),(0,o.kt)("p",null,"\u30af\u30e9\u30a6\u30c9\u4e0a\u306e\u4eee\u60f3\u30de\u30b7\u30f3\u4e0a\u3067 Hydra \u30ce\u30fc\u30c9\u3092\u30db\u30b9\u30c8\u3059\u308b\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30ce\u30fc\u30c9\u69cb\u6210\u3092",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/tree/master/sample-node-config/gcp/"},"sample-node-config/"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002 \u7279\u306b\u3001\u3053\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/sample-node-config/gcp/docker-compose.yaml"},"docker-compose.yaml")," \u3068\u3044\u3046\u4ed5\u69d8\u304c\u3042\u308a\u3001cardano-node + hydra-node \u30b5\u30fc\u30d3\u30b9\u3092\u8a2d\u5b9a\u3059\u308b\u305f\u3081\u306e\u826f\u3044\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u30af\u30e9\u30b9\u30bf\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u305f\u3081\u306e\u69d8\u3005\u306a\u4fbf\u5229\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u3082\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);