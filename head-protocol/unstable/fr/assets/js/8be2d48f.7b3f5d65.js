"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"April 2023",slug:"2023-04",authors:["ch1bo","abailly","v0d1ch","pgrange"],tags:["monthly"]},o=void 0,l={permalink:"/head-protocol/unstable/fr/monthly/2023-04",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-04-monthly.md",source:"@site/monthly/2023-04-monthly.md",title:"April 2023",description:"This report summarizes the work on Hydra since March 2023. It serves as",date:"2023-05-03T06:45:42.000Z",formattedDate:"3 mai 2023",tags:[{label:"monthly",permalink:"/head-protocol/unstable/fr/monthly/tags/monthly"}],readingTime:8.99,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead - Hydra @ IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Arnaud Bailly",title:"Lead Architect - Hydra @ IOG",url:"https://github.com/abailly-iohk",imageURL:"https://github.com/abailly-iohk.png",key:"abailly"},{name:"Sasha Bogicevic",title:"Senior software engineer - Hydra @ IOG",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"},{name:"Pascal Grange",title:"Senior software engineer - Hydra @ IOG",url:"https://github.com/pgrange",imageURL:"https://github.com/pgrange.png",key:"pgrange"}],frontMatter:{title:"April 2023",slug:"2023-04",authors:["ch1bo","abailly","v0d1ch","pgrange"],tags:["monthly"]},prevItem:{title:"May 2023",permalink:"/head-protocol/unstable/fr/monthly/2023-05"},nextItem:{title:"March 2023",permalink:"/head-protocol/unstable/fr/monthly/2023-03"}},s={authorsImageUrls:[void 0,void 0,void 0,void 0]},p=[{value:"Roadmap",id:"roadmap",level:2},{value:"Notable roadmap updates",id:"notable-roadmap-updates",level:4},{value:"Development",id:"development",level:2},{value:"Configurable API",id:"configurable-api",level:4},{value:"Versioned docs and specification",id:"versioned-docs-and-specification",level:4},{value:"Fixed scripts, Plutonomy and custom script contexts",id:"fixed-scripts-plutonomy-and-custom-script-contexts",level:4},{value:"Rollback bug hunt",id:"rollback-bug-hunt",level:4},{value:"Community",id:"community",level:2},{value:"Hydra for Voting",id:"hydra-for-voting",level:4},{value:"Hydra for Auctions",id:"hydra-for-auctions",level:4},{value:"Kupo x Hydra",id:"kupo-x-hydra",level:4},{value:"CBIA meetings",id:"cbia-meetings",level:4},{value:"Twitter space on scaling Cardano",id:"twitter-space-on-scaling-cardano",level:4},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},h="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This report summarizes the work on Hydra since March 2023. It serves as\npreparation for the monthly review meeting (see\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/10wZJy0tyGMbvMihbHnHk0QByA_TAZrtbcRbf5Gd-SHg/"},"slides"),"\nand the\n",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1X4yPerLTatPPMrX3RYS7XH9lfT_LYaaX/view?usp=sharing"},"recording"),"),\nwhere the team updates major project stakeholders on recent developments to\ngather their feedback on proposed plans."),(0,i.kt)("h2",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"The project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap")," was\nonly slightly updated this month:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(12968).Z,width:"2827",height:"1111"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"The latest roadmap with features and ideas"))),(0,i.kt)("h4",{id:"notable-roadmap-updates"},"Notable roadmap updates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There are still many \ud83d\udcad ",(0,i.kt)("strong",{parentName:"p"},"idea")," items on the roadmap, however, not on the\ncurrent and next planned release columns. The process involves clarifying and\nrefining each idea item into a \ud83d\udcac ",(0,i.kt)("strong",{parentName:"p"},"feature")," before starting work on it. This\nincludes giving equal consideration to new user \ud83d\udcad ",(0,i.kt)("strong",{parentName:"p"},"idea"),"s and requests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Temporarily postponed the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/696"},"Hydra heads explorer\n#696")," item until there is\nmore clarity. While there aren't any major blockers,the explorer just requires\nfurther detailing, especially since we're currently in talks with existing\nCardano explorer platforms.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Converted the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/193"},"aggregated multi-signature\n#193")," from the concrete\nroadmap into an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/discussions/787"},"idea discussion\n#787"),". This is based\non feedback from the community, and we believe that discussing it there would\nbe more beneficial.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The main focus for the 0.10.0 release is implementing mainnet compatibility.\nThis is mostly done and only requires some documentation and disclaimer\nupdates. We're about to release 0.10.0, which will be the first\nmainnet-compatible version.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Meanwhile, work on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/380"},"configurable API\n#380")," was completed,\nwhich gave rise to new ideas and follow-up feature requests from users. One of\nthem (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/823"},"Add HeadState/Snapshot to Greetings\n#823"),") was fairly\nstraightforward and necessary to deliver a consistent, usable increment on the\nAPI with the upcoming release.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Prioritized ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/196"},"Support timed transactions\n#196")," higher as yet\nanother use case would benefit from this."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(25352).Z,width:"2133",height:"1014"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"The roadmap without idea items"))),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-03-29..2023-04-26"},"Issues and pull requests closed since last\nreport")),(0,i.kt)("p",null,"This month, the team worked on the following:"),(0,i.kt)("h4",{id:"configurable-api"},"Configurable API"),(0,i.kt)("p",null,"The API evolved a bit, driven by the issues our users reported\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/823"},"#823"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/813"},"#813"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/800"},"#800"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/789"},"#789"),". Related changes\nwere added to the API server so now our clients can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Control the historical messages output. History messages can be displayed\nupon re/connection or not depending on client needs."),(0,i.kt)("li",{parentName:"ul"},"Snapshot UTXOs can optionally be disabled."),(0,i.kt)("li",{parentName:"ul"},"Transactions can be displayed in CBOR or JSON format.")),(0,i.kt)("p",null,"Our clients can also have a nice insight into the current Hydra node state and head UTXOs\nthat are now displayed as part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Greetings")," message."),(0,i.kt)("p",null,"Next steps on the API level are to further fulfill user needs by grooming and\nimplementing needed changes related to filtering, pagination etc."),(0,i.kt)("h4",{id:"versioned-docs-and-specification"},"Versioned docs and specification"),(0,i.kt)("p",null,"Over the ",(0,i.kt)("a",{parentName:"p",href:"/monthly/2023-02#development"},"last couple of months")," the Hydra\nspecification became an important artifact to use in discussion, review and\npotential audit of the Hydra Head protocol implementation. The document was now\nmoved from overleaf into the Hydra repository, where it is properly versioned\nand built on each CI run. Changes can be proposed using our regular pull request\nworfklow and the final PDF is built and ",(0,i.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/unstable/core-concepts/specification"},"published to the\nwebsite"),"\nautomatically."),(0,i.kt)("p",null,"Note that the above link points to the new ",(0,i.kt)("inlineCode",{parentName:"p"},"/unstable")," version of the\ndocumentation, which holds the bleeding edge user manual, specification and\nAPI reference (which got a new sidebar) built directly from ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),". The\nnormal, non-unstable version of the website is always referring to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/releases"},"last\nreleased version"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9703).Z,width:"1365",height:"751"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"Specification on the Hydra website"))),(0,i.kt)("h4",{id:"fixed-scripts-plutonomy-and-custom-script-contexts"},"Fixed scripts, Plutonomy and custom script contexts"),(0,i.kt)("p",null,"As we made the specification use a more direct way to represent transactions\n(instead of the constraint emitting machine formalism), we realized that our\nscripts are not correctly ensuring ",(0,i.kt)("em",{parentName:"p"},"script continuity"),". We identified these\n'gaps' as red sections (see above) in the specification and worked on fixing\nthem."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/777"},"actual fix #777"),"\nwas fairly straightforward and could easily be covered by our mutation-based\ncontract tests, the script size increased and we could not publish all three\nHydra scripts in a single publish transaction (which allows for a single\n",(0,i.kt)("inlineCode",{parentName:"p"},"--hydra-scripts-tx-id")," parameter on the ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node"),")."),(0,i.kt)("p",null,"To mitigate this, we looked into the UPLC optimizer\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/well-typed/plutonomy/tree/master/src/Plutonomy"},"Plutonomy"),".\nApplying it was fairly simple, our tests did also pass, script sizes ",(0,i.kt)("em",{parentName:"p"},"and\ncosts")," also became lower. But, script size does not matter so much as we are\nusing reference scripts and using a (not really maintained?) optimizer which\nintroduces yet another question mark after compilation from ",(0,i.kt)("inlineCode",{parentName:"p"},"plutus-tx")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"uplc")," was not our cup of tea right now at least (and we might pull this out\nof the drawer later)."),(0,i.kt)("p",null,"There is an alternative: decoding ",(0,i.kt)("inlineCode",{parentName:"p"},"ScriptContext")," involves quite some code,\nbut we don't need everything in all validators. So we introduced a\ncustomscript context that only decodes the fields we need."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"scripts"),(0,i.kt)("th",{parentName:"tr",align:null},"@0.9.0"),(0,i.kt)("th",{parentName:"tr",align:null},"fixes"),(0,i.kt)("th",{parentName:"tr",align:null},"fixes + plutonomy"),(0,i.kt)("th",{parentName:"tr",align:null},"fixes + custom ScriptContext"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u03bdInitial"),(0,i.kt)("td",{parentName:"tr",align:null},"4621"),(0,i.kt)("td",{parentName:"tr",align:null},"4727"),(0,i.kt)("td",{parentName:"tr",align:null},"3672"),(0,i.kt)("td",{parentName:"tr",align:null},"4300")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u03bdCommit"),(0,i.kt)("td",{parentName:"tr",align:null},"2422"),(0,i.kt)("td",{parentName:"tr",align:null},"2513"),(0,i.kt)("td",{parentName:"tr",align:null},"1816"),(0,i.kt)("td",{parentName:"tr",align:null},"2068")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u03bdHead"),(0,i.kt)("td",{parentName:"tr",align:null},"8954"),(0,i.kt)("td",{parentName:"tr",align:null},"9492"),(0,i.kt)("td",{parentName:"tr",align:null},"7579"),(0,i.kt)("td",{parentName:"tr",align:null},"9456 (no custom SC)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u03bcHead"),(0,i.kt)("td",{parentName:"tr",align:null},"4458"),(0,i.kt)("td",{parentName:"tr",align:null},"4537"),(0,i.kt)("td",{parentName:"tr",align:null},"3468"),(0,i.kt)("td",{parentName:"tr",align:null},"4104")))),(0,i.kt)("p",null,"As part of this process, we also updated dependencies #",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/826"},"826")," to the latest\n",(0,i.kt)("inlineCode",{parentName:"p"},"cardano-node")," master. Although it didn't have an impact on script sizes, it's a\ncrucial step towards preparing for upcoming hard-forks."),(0,i.kt)("h4",{id:"rollback-bug-hunt"},"Rollback bug hunt"),(0,i.kt)("p",null,"Opening our first head on mainnet failed. We didn't\nlose any funds, except for some fees, but the head just did not open.\nExploring the logs, we figured out that a rollback happened while opening the\nhead and there was a bug."),(0,i.kt)("p",null,"This is our test pyramid. It already contained some tests about the rollback but\nwe decided to enrich our model-based tests to simulate rollbacks (before that,\nit used to run on a ",(0,i.kt)("em",{parentName:"p"},"perfect")," blockchain). You can find more about our\nmodel-based test strategy in ",(0,i.kt)("a",{parentName:"p",href:"https://engineering.iog.io/2022-09-28-introduce-q-d/"},"Model-Based Testing with\nQuickCheck"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"test pyramid",src:n(58727).Z,width:"2048",height:"1418"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"Testing pyramide"))),(0,i.kt)("p",null,"The new property\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/commit_vs_rollback/hydra-node/test/Hydra/ModelSpec.hs#L185"},"headOpensIfAllPartiesCommit"),"\nhelped prove the issue. At the end of the day, the problem came from a\nconcurrency issue introduced while implementing ",(0,i.kt)("a",{parentName:"p",href:"./adr/18"},"ADR 18"),"."),(0,i.kt)("p",null,"In the figure below, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DirectChain")," processes a new block, updating the\n",(0,i.kt)("inlineCode",{parentName:"p"},"chainState")," stored inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"headState"),". This also leads to an event being\npublished to some event queue. Later, the ",(0,i.kt)("inlineCode",{parentName:"p"},"HeadLogic")," (called ",(0,i.kt)("em",{parentName:"p"},"Node")," in the\npicture) will process this event, updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"headState"),"."),(0,i.kt)("p",null,"At the end of the process, we can see that the new ",(0,i.kt)("inlineCode",{parentName:"p"},"headState")," points to a\n",(0,i.kt)("inlineCode",{parentName:"p"},"previousRecoverableState")," which contains the same ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 1"),"\ninstead of ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 0"),". If a rollback then happens, the ",(0,i.kt)("inlineCode",{parentName:"p"},"headState")," will be\nreverted to this ",(0,i.kt)("inlineCode",{parentName:"p"},"previousRecoverableState")," and the fact that it contains\n",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 1")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"chainState 0")," makes some on-chain observations\nimpossible."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Race condition",src:n(67785).Z,width:"1412",height:"915"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"Race condition"))),(0,i.kt)("p",null,"This explains the issue we had when opening our head:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a commit A is observed on-chain;"),(0,i.kt)("li",{parentName:"ol"},"a rollback happens so that the headState ",(0,i.kt)("em",{parentName:"li"},"forgets")," about this commit but not\nthe ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," (remember, it's the wrong ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState"),");"),(0,i.kt)("li",{parentName:"ol"},"the commit is observed again on the chain but ignored by the ",(0,i.kt)("inlineCode",{parentName:"li"},"chainState")," (because\nit has already seen it, it just ignores it);"),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"headState")," will never hear about this commit again and so will never open\nthe head, waiting forever for the missing commit.")),(0,i.kt)("p",null,"We decided to implement the following solution:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A local chain state is re-introduced in the chain component, not shared with\nthe head logic."),(0,i.kt)("li",{parentName:"ul"},"A copy of the chain state is kept in the head state to keep the benefits of\nADR ",(0,i.kt)("a",{parentName:"li",href:"./adr/18"},"18")," regarding persistence."),(0,i.kt)("li",{parentName:"ul"},"The rollback event is removed from the API until ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/185"},"#185"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"possible solution",src:n(18795).Z,width:"1597",height:"956"})," ",(0,i.kt)("small",null,(0,i.kt)("center",null,"Possible solution"))),(0,i.kt)("p",null,"Rollback management is quite a tricky business. It might be the case that we've\ntried to be a bit too smart. So we're doing a rollback in our way of handling\nrollbacks until we focus on this topic again when dealing with this roadmap item:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/185"},"Handle rollbacks II"),"."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("h4",{id:"hydra-for-voting"},"Hydra for Voting"),(0,i.kt)("p",null,"The project is advancing and a basic vote tallying scenario in the Catalyst use\ncase was demonstrated in the review meeting. The project is driving the API\ndiscussions as it is not using any Haskell tooling, but an application in Java\nwith Aiken as the validator scripting language. Besides the catalyst use case,\nother scenarios like the ballot voting for the summit are also explored now."),(0,i.kt)("h4",{id:"hydra-for-auctions"},"Hydra for Auctions"),(0,i.kt)("p",null,"A new demo was recorded in the wake of an upcoming Twitter space discussing\nauctions and NFT marketplaces with the community. The feature set currently\nincludes starting the auction on L1, bidding on L1 or (and this is the novel\nthing!) transferring the auction from L1 to L2, such that it can be bid on L2."),(0,i.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",height:0}},(0,i.kt)("iframe",{src:"https://www.loom.com/embed/7ed84e37d65748d994d8a0be147f7ecb",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,i.kt)("h4",{id:"kupo-x-hydra"},"Kupo x Hydra"),(0,i.kt)("p",null,"In a good old pairing session between IOG and CF engineers, the integration of\nKupo with Hydra was explored. This seems to be promising and work started ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CardanoSolutions/kupo/pull/117"},"here\nkupo#117"),". This will make it\npossible to run ",(0,i.kt)("inlineCode",{parentName:"p"},"kupo")," natively connected to a ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra-node"),", very much it would\nrun with ",(0,i.kt)("inlineCode",{parentName:"p"},"cardano-node")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ogmios"),". Kupo is a lightweight indexer of chain data\nlike unspent transaction outputs and allows its clients to query information\non-demand. \ud83d\udc39"),(0,i.kt)("h4",{id:"cbia-meetings"},"CBIA meetings"),(0,i.kt)("p",null,"Hydra Team is now a regular participant to ",(0,i.kt)("a",{parentName:"p",href:"https://www.cbia.io/"},"Cardano Blockchain Infrastructure\nAlliance")," meetings which happen more or less on a monthly\nbasis. Hydra was featured during the meetup that happened while the team was on\na ",(0,i.kt)("a",{parentName:"p",href:"/monthly/2023-03"},"workshop in Feldkirch")," and through this participation we\nhope to contribute to growth of the Cardano eco-system and position Hydra as a\nkey infrastructure for builders."),(0,i.kt)("h4",{id:"twitter-space-on-scaling-cardano"},"Twitter space on scaling Cardano"),(0,i.kt)("p",null,"This month we took part in a Twitter space about scaling Cardano and how Hydra\ncan contribute to this. Thanks for conducting this\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/thepizzaknight_"},"@thepizzaknight","_")," \ud83d\ude4f"),(0,i.kt)("a",{href:"https://twitter.com/i/spaces/1vOxwMVDaXLGB"},(0,i.kt)("p",null,(0,i.kt)("img",{src:n(28031).Z,width:"708",height:"258"}))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The monthly review meeting for April was held on 2023-04-26 via Google Meet with\nthese\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/10wZJy0tyGMbvMihbHnHk0QByA_TAZrtbcRbf5Gd-SHg/"},"slides"),"\nand here is the\n",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1X4yPerLTatPPMrX3RYS7XH9lfT_LYaaX/view?usp=sharing"},"recording"),"."),(0,i.kt)("p",null,"Although it has been a busy month we could not cut a release, unfortunately."),(0,i.kt)("p",null,"We've experienced several setbacks due to the commits vs. rollbacks bug and oversized script sizes, which have slowed down our progress. Additionally, the back and forth on the API, which at times required creative and unconventional solutions, has also been time-intensive. However, we view this feedback as ",(0,i.kt)("strong",{parentName:"p"},"incredibly")," valuable, as it will ultimately make hydra-node more user-friendly and capable, albeit through a step-by-step process."),(0,i.kt)("p",null,"Associated projects in the greater Hydra community are moving ahead nicely\ndue to the collaborative approach and tight loops of interaction between the\nindividual teams."),(0,i.kt)("p",null,"All things considered, the project can be considered on track. We are very close to cutting our first mainnet-compatible release and the rising number of user\nrequests and interested developers are good indicators that Hydra adoption\nis increasing."))}c.isMDXComponent=!0},18795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-possible-solution-1b4bc4a476389bd660fa06cc182bc26b.png"},67785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-race-condition-734c42e231ebc340c1c72e4014aeb691.png"},25352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-roadmap-ex-ideas-28efc0211737e7b74b8c8d4c05c681c9.png"},12968:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-roadmap-d86dcb7d087f91df1d2f7d8bc87fdd23.png"},9703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-specification-c62e215ae68896ec86ea6e51aa2ccd76.png"},58727:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-test-pyramide-d76808e09459750072e15c10a660a09d.png"},28031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-04-twitter-space-d7f42586519d5d7f7c6bc89405b06cd4.png"}}]);