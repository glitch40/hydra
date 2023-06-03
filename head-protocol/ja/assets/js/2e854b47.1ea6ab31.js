"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7287],{19257:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(90814);const s={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",terminalWindowBody:"terminalWindowBody_tzdS",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",dot:"dot_fGZE"};function o(e){let{children:t,minHeight:a}=e;const o="string"==typeof t?n.createElement(i.Z,null,t):t;return n.createElement("div",{className:s.terminalWindow,style:{minHeight:a}},n.createElement("div",{className:s.terminalWindowHeader},n.createElement("div",{className:s.buttons},n.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s.dot,style:{background:"#58cb42"}}))),n.createElement("div",{className:s.terminalWindowBody},o))}},92634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(19257);const s={sidebar_position:2},o="Intro",r={unversionedId:"tutorial/intro",id:"tutorial/intro",title:"Intro",description:"In this tutorial, we will discuss the current implementation of the Hydra proof of concept implementation. This decentralized application aims to create a fast isomorphic state channel on the Cardano blockchain. What this precisely means will be discussed later. Before we start, we will provide some context to further build upon. After that, we will summarize the Hydra protocol in more detail.",source:"@site/docs/tutorial/intro.md",sourceDirName:"tutorial",slug:"/tutorial/intro",permalink:"/head-protocol/ja/docs/tutorial/intro",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/docs/tutorial/intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Tutorial",permalink:"/head-protocol/ja/docs/tutorial/"},next:{title:"Protocol outline",permalink:"/head-protocol/ja/docs/tutorial/protocol-outline"}},l={},c=[{value:"Some context",id:"some-context",level:2},{value:"Scaling, side chains and state channels",id:"scaling-side-chains-and-state-channels",level:2},{value:"Hydra as a state channel",id:"hydra-as-a-state-channel",level:2}],h={toc:c},d="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("p",null,"In this tutorial, we will discuss the current implementation of the Hydra proof of concept implementation. This decentralized application aims to create a fast isomorphic state channel on the Cardano blockchain. What this precisely means will be discussed later. Before we start, we will provide some context to further build upon. After that, we will summarize the Hydra protocol in more detail."),(0,i.kt)("h2",{id:"some-context"},"Some context"),(0,i.kt)("p",null,"Any layer one blockchain suffers from a fundamental scalability limitation, this is fundamental because intentionally, transactions on a blockchain are validated by multiple parties to enhance the security of the protocol, this just consumes more time. For Cardano, this is reflected in the fact that blocks are created on average each 20 seconds, in this time, block creation, propagation, and validation happens. These limitations ultimately mean that state, the information that describes the system, can only change in discrete steps of this duration. Besides, given peak hours on the blockchain when there is a transaction queue, the time required to settle and confirm a transaction might also be higher, further increasing the effective settlement time. This is because your transaction might not be added to the next block, but the second or even third one coming."),(0,i.kt)("h2",{id:"scaling-side-chains-and-state-channels"},"Scaling, side chains and state channels"),(0,i.kt)("p",null,"In general, not specific to blockchains, computer science knows two common ways of scaling systems, they are ",(0,i.kt)("strong",{parentName:"p"},"vertical")," and ",(0,i.kt)("strong",{parentName:"p"},"horizontal")," scaling. Both try to increase resources available to a system to achieve better overall performance."),(0,i.kt)("p",null,"For vertical scaling, the performance of the system is increased by adding resources available to the already existing instance of the system. For Cardano, this practically means increasing the block size to allow for more actions in each 20 seconds for the layer one blockchain. This is a great way to initially scale the system, but is always capped by some physical limits. This limit is the diffusion time of a block. To ensure the security of the system, each block has roughly 5 seconds to propagate and diffuse among the other network participants so that they can build another block on top of it."),(0,i.kt)("p",null,'Then we have horizontal scaling. Here, the performance of the system is increased by adding more instances of the same system alongside each other. Practically, this means that besides the main chain, one or multiple side chains are spun up that do the same thing, each "x" seconds all instances create a block. Unlike vertical scaling, horizontal scaling does not know a limit, there can be many side chains that are connected to the layer one. A downside to this way of scaling is that this abstract notion of "state" is split up into multiple pieces. Each instance is blind to what is happening on the other instances, and crossing to another instance requires a bridge (the state is sharded).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"horizontal-vertical-scaling.png",src:a(49265).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"Now there is a third way of scaling blockchains, this is via state channels, of which Hydra is a flavor. State channels, similar to the horizontal scaling solution, are a layer two solution that runs separately and alongside the layer one, thought the two are different!"),(0,i.kt)("p",null,"At its core, a state channel in the context of blockchains is a smart contract that enforces a set of predefined rules for transaction handling between parties. Unlike in the horizontal scaling case, where multiple instances of a blockchain are run at the same time, a state channel originates from the main chain. Eventually, it merges back in the main chain, it lives only temporally (though it could exist indefinitely)."),(0,i.kt)("p",null,"The goal of these state channels is to take some pieces of state on the layer one blockchain and validate its progress elsewhere between only those parties who are concerned about this state. Then, after this computation is done, the parties return the final state on which all parties agree back to layer one. This construction means that the 20-second time duration of block production no longer poses a problem for the propagation of the state in a state channel. Moreover, parties that run a state channel could agree on not charging any transaction fee for these computations!"),(0,i.kt)("p",null,"The security of the state channels lies in the hands of the parties that run the channel, similar to a blockchain. But there is a difference, instead of blocks, the progress is captured in snapshots. These snapshots are intermediate captures of the state of the channel and are signed by each party in the channel. When the channel closes, each party has a chance to return their last perceived state. In case of dispute, the main chain can always verify the latest snapshot, which contains all signatures of the participants and a timestamp. Thus, with each transition in a channel, cryptographic proof is gathered, and in case of dispute, the layer one blockchain is leveraged to settle that dispute. A visual representation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"statechannel.png",src:a(16548).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"hydra-as-a-state-channel"},"Hydra as a state channel"),(0,i.kt)("p",null,"Hydra is a flavor of a state channel, but it is more. That is because it is an isomorphic state channel, this is a technical term that indicates that the link between the main chain and the hydra channel is structure preserving. The ledger rules that apply to the main chain also apply to the state channel. This is handy because with this preservation, smart contract written for the layer one can also be executed similarly in the state channel, they behave the same. "),(0,i.kt)("p",null,'The origin of the name comes from a mythical serpend-like water monster with multiple heads in Greek mythology. Now that we know what a state channel is, we can see the connection to this monster. Since state channels can be run concurrently, that is, multiple channels can be run alongside each other asynchronously, a blockchain can have multiple "heads" as well.'))}m.isMDXComponent=!0},49265:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/horizontal-vertical-scaling-641668a980ebbefd7b0296886c94df3e.png"},16548:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/statechannel-54de6aa360b6a39c55353e13022af0df.png"}}]);