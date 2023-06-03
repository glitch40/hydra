"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1369],{19257:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(90814);const r={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",terminalWindowBody:"terminalWindowBody_tzdS",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",dot:"dot_fGZE"};function i(e){let{children:t,minHeight:n}=e;const i="string"==typeof t?o.createElement(a.Z,null,t):t;return o.createElement("div",{className:r.terminalWindow,style:{minHeight:n}},o.createElement("div",{className:r.terminalWindowHeader},o.createElement("div",{className:r.buttons},o.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),o.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),o.createElement("span",{className:r.dot,style:{background:"#58cb42"}}))),o.createElement("div",{className:r.terminalWindowBody},i))}},57268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));n(19257);const r={sidebar_position:4},i="Preliminaries",s={unversionedId:"tutorial/using_hydra/using-hydra-part-1",id:"tutorial/using_hydra/using-hydra-part-1",title:"Preliminaries",description:"In this section, we will showcase the usage of the hydra implementation. Below we will show detailed usages of the main components, these consist of the Hydra node and the usage of the associated API it exposes.",source:"@site/docs/tutorial/using_hydra/using-hydra-part-1.md",sourceDirName:"tutorial/using_hydra",slug:"/tutorial/using_hydra/using-hydra-part-1",permalink:"/head-protocol/fr/docs/tutorial/using_hydra/using-hydra-part-1",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/docs/tutorial/using_hydra/using-hydra-part-1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Protocol outline",permalink:"/head-protocol/fr/docs/tutorial/protocol-outline"},next:{title:"Setup",permalink:"/head-protocol/fr/docs/tutorial/using_hydra/using-hydra-part-2"}},l={},d=[],c={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preliminaries"},"Preliminaries"),(0,a.kt)("p",null,"In this section, we will showcase the usage of the hydra implementation. Below we will show detailed usages of the main components, these consist of the Hydra node and the usage of the associated API it exposes."),(0,a.kt)("p",null,"Before we start, we will use some tools that are assumed to be installed. These are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nix (with the correct IOG nix caches setup)"),(0,a.kt)("li",{parentName:"ul"},"Postman")),(0,a.kt)("p",null,"Here we will use Nix to build the software and Postman will be used to connect to the Hydra API Web Socket. Also, before we start using Hydra, we will set up a cardano-node connected to the preview testnet. Every Hydra node needs a connection to a layer one network to verify and post onchain transactions in a trustless way."),(0,a.kt)("p",null,"To start, we clone the hydra repository using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/input-output-hk/hydra\n")),(0,a.kt)("p",null,"Change directory to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra")," repository and perform checkout to release 0.8.0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout 0.8.0\n")),(0,a.kt)("p",null,"Then enter a nix shell using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nix-shell\n")),(0,a.kt)("p",null,"This shell also brings a ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cardano-cli")," in scope of our path. Then we make a directory for the preview testnet in the repo with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir preview-testnet\nmkdir preview-testnet/db\ncd preview-testnet/\n")),(0,a.kt)("p",null,"Then download the environment configurations for this testnet via"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/input-output-hk/cardano-world/master/docs/environments/preview/alonzo-genesis.json\nwget https://raw.githubusercontent.com/input-output-hk/cardano-world/master/docs/environments/preview/byron-genesis.json\nwget https://raw.githubusercontent.com/input-output-hk/cardano-world/master/docs/environments/preview/shelley-genesis.json\nwget https://raw.githubusercontent.com/input-output-hk/cardano-world/master/docs/environments/preview/config.json\nwget https://raw.githubusercontent.com/input-output-hk/cardano-world/master/docs/environments/preview/topology.json\n")),(0,a.kt)("p",null,"You can start the node with the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cardano-node run +RTS -N -A16m -qg -qb -RTS --topology ./topology.json --database-path ./db --socket-path ./node.socket --host-addr 0.0.0.0 --port 6000 --config ./config.json\n")),(0,a.kt)("p",null,"Keep this terminal running and open another terminal in the ",(0,a.kt)("inlineCode",{parentName:"p"},"hydra")," repository. Again we enter a nix-shell with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nix-shell\n")),(0,a.kt)("p",null,"Once we are in this shell, we export the location of the cardano-node socket with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export CARDANO_NODE_SOCKET_PATH=/full/path/to/hydra/preview-testnet/node.socket\n")),(0,a.kt)("p",null,"This will let our system know where the entry point for communication with the node resides, this is necessary for other programs that will utilize the node. We will also use the following command to add auto-completion of the client to our path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"source <(cardano-cli --bash-completion-script cardano-cli)\n")),(0,a.kt)("p",null,"To check the synchronization process of the node, we query the tip of the local known blockchain data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cardano-cli query tip --testnet-magic 2\n{\n    "block": 337207,\n    "epoch": 84,\n    "era": "Babbage",\n    "hash": "19b809bc1cb6ee28d6f6d004e2f311c26c26fb364ffb9bffa2821e00c3aae98a",\n    "slot": 7307855,\n    "syncProgress": "100.00"\n}\n')),(0,a.kt)("p",null,"We see that we are fully in sync with the network."))}h.isMDXComponent=!0}}]);