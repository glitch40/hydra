"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(n),m=o,c=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(87462),o=(n(67294),n(3905));const r={title:"May 2023",slug:"2023-05",authors:["ch1bo","pgrange","ffakenz"],tags:["monthly"]},i=void 0,s={permalink:"/head-protocol/monthly/2023-05",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/monthly/2023-05-monthly.md",source:"@site/monthly/2023-05-monthly.md",title:"May 2023",description:"This report summarizes the work on Hydra since April 2023. It serves as",date:"2023-05-30T14:30:18.000Z",formattedDate:"May 30, 2023",tags:[{label:"monthly",permalink:"/head-protocol/monthly/tags/monthly"}],readingTime:8.445,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead - Hydra @ IOG",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Pascal Grange",title:"Senior software engineer - Hydra @ IOG",url:"https://github.com/pgrange",imageURL:"https://github.com/pgrange.png",key:"pgrange"},{name:"Franco Testagrossa",title:"Senior software engineer - Hydra @ IOG",url:"https://github.com/ffakenz",imageURL:"https://github.com/ffakenz.png",key:"ffakenz"}],frontMatter:{title:"May 2023",slug:"2023-05",authors:["ch1bo","pgrange","ffakenz"],tags:["monthly"]},nextItem:{title:"April 2023",permalink:"/head-protocol/monthly/2023-04"}},l={authorsImageUrls:[void 0,void 0,void 0]},h=[{value:"Roadmap",id:"roadmap",level:2},{value:"Release 0.10.0",id:"release-0100",level:4},{value:"Notable roadmap updates",id:"notable-roadmap-updates",level:4},{value:"Development",id:"development",level:2},{value:"Timed transactions #196",id:"timed-transactions-196",level:4},{value:"Removing --ledger-genesis #863",id:"removing---ledger-genesis-863",level:4},{value:"Improving CI runtime",id:"improving-ci-runtime",level:4},{value:"Community",id:"community",level:2},{value:"Hydrozoa #850",id:"hydrozoa-850",level:4},{value:"Hydra for Payments project update",id:"hydra-for-payments-project-update",level:4},{value:"Spanish translation",id:"spanish-translation",level:4},{value:"Conclusion",id:"conclusion",level:2}],p={toc:h},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This report summarizes the work on Hydra since April 2023. It serves as\npreparation for the monthly review meeting (see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1anUC3Z1idloyR6uwiSHLZtV6-LQvUcByHPMUgCBOVIA"},"slides")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1_N6b4RDe579TgLawiJzbE0NLofD3ljE6/view"},"recording"),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"This month the team released version 0.10.0 which includes many important features.\nThe project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/input-output-hk/projects/21"},"roadmap")," was\nonly slightly updated this month and already saw one more feature completed:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The roadmap without idea items",src:n(72604).Z,width:"2133",height:"752"})," ",(0,o.kt)("small",null,(0,o.kt)("center",null,"The roadmap without idea items"))),(0,o.kt)("h4",{id:"release-0100"},"Release 0.10.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First mainnet compatible release of ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," including technical changes and documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Mainnet exposure currently limited to 100\u20b3 per participant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added some missing features to the client API (short-term solutions)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some quality of life improvements in running the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/releases/tag/0.10.0"},"Full release notes")," and a list of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/milestone/8?closed=1"},"delivered features")))),(0,o.kt)("h4",{id:"notable-roadmap-updates"},"Notable roadmap updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Got new input and a concrete scenario for benchmarking (off-chain) performance\nof a Hydra head. As it is a very basic one, we moved the item from an\nidea to a feature and started work on it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Added a new feature item to add Hydra as a tool to developer platforms within\nour agenda of ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/monthly/2023-01#themes-for-2023"},"promoting Hydra as an open-source\nplatform"),"\nfor scalability on Cardano.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Already completed a first feature for 0.11.0 and considering whether to release it as\nearly as possible with latest advances."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The latest roadmap with features and ideas",src:n(15880).Z,width:"2421",height:"1112"})," ",(0,o.kt)("small",null,(0,o.kt)("center",null,"The latest roadmap with features and ideas"))),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-04-26..2023-05-24"},"Issues and pull requests closed since last\nreport")),(0,o.kt)("p",null,"This month, the team worked on the following:"),(0,o.kt)("h4",{id:"timed-transactions-196"},"Timed transactions ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/issues/196#"},"#196")),(0,o.kt)("p",null,"To realize the Hydra Head protocol, a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," observes and follows the\nchain progress on the layer 1 (L1). Until now, this component was only observing\nprotocol related transactions. Now, on every block roll forward, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Tick")," event\ncarrying the notion of time from L1 is observed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," and is used\nto validate transactions in a Hydra head. This means that clients can submit\ntime bounded transactions to an open head and expect them to be validated using\nthe same slot that would be used on L1. It is important to mention that time\nonly advances on L1 when a block is produced."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Timed transactions in a Hydra Head state channel",src:n(6077).Z,width:"1609",height:"970"})," ",(0,o.kt)("small",null,(0,o.kt)("center",null,"Timed transactions in a Hydra Head state channel"))),(0,o.kt)("p",null,"This feature will make the Hydra L2 ledger now en-par with UTXO features\navailable on the Cardano L1. A logical next step in this direction could be to\nmake time in the state channel advance every configured ",(0,o.kt)("inlineCode",{parentName:"p"},"slotLength")," (e.g. every\nsecond) using the system clock in between blocks as a form of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dead_reckoning"},"dead reckoning"),"."),(0,o.kt)("h4",{id:"removing---ledger-genesis-863"},"Removing --ledger-genesis ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/pull/863"},"#863")),(0,o.kt)("p",null,"The hydra-node had two command line options to configure the ledger used for validating layer 2 (L2) transactions: ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-protocol-parameters")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--ledger-genesis"),". The former option, which is self-explanatory, allows configuration of the Cardano protocol parameters to be used. Often, the same parameters as those on L1 are configured, or similar parameters with reduced fees, for example. On the other hand, the second option required the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis-shelley.json")," file previously used to initialize the Shelley era by the cardano-node."),(0,o.kt)("p",null,"When we started using the current slot in the L2 ledger (see above), we realized\nthat only the start time and slot length are effectively used from that\nconfiguration file. Moreover, it would be quite surprising if those were\ndifferent and slots would be longer or shorter on L2 (unless explicitly\nconfigured). We opted to remove the option altogether and have the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),"\nfetch the genesis parameters from the Cardano network. This makes the system\neasier to configure and more isomorphic to L1."),(0,o.kt)("h4",{id:"improving-ci-runtime"},"Improving CI runtime"),(0,o.kt)("p",null,"The Hydra project ",(0,o.kt)("a",{parentName:"p",href:"./adr/12"},"embraces Test Driven Development")," and implements\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/workflows/ci.yaml"},"Continuous Integration")," (CI),\nchecking all these tests pass and more."),(0,o.kt)("p",null,"The CI could sometimes take as long as an hour or\nmore to run, which has a negative impact on the project's workflow.\nFor instance, all the project's branches have to be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/wiki/Coding-Standards#merge-prs-with-merge-commits-and-rebase-branches-on-top-of-master"},"fast-forward with\nmaster"),"\nbefore being merged.\nSo if all the tests on a branch are green and the pull request has been\napproved but is lagging a bit behind master, it has to be rebased, so the\nCI has to run again, incurring a one hour or so delay in this case before\nbeing able to merge it. The situation becomes worse when several pull requests\nare ",(0,o.kt)("em",{parentName:"p"},"ready")," to be merged."),(0,o.kt)("p",null,"Analyzing the run from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/runs/4933005294"},"May, 10th"),"\nwe can see that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Building and testing takes 19 minutes for the longest"),(0,o.kt)("li",{parentName:"ul"},"Generating haddock documentation and running the benchmarks takes 28 minutes\nfor the longest"),(0,o.kt)("li",{parentName:"ul"},"Documentation (which will need artifacts generated in previous steps) will take\n14 minutes"),(0,o.kt)("li",{parentName:"ul"},"In total, this run took 1 hour and 16 minutes.")),(0,o.kt)("p",null,"Let's focus on the build and the testing stage first. We're expecting the\nplutus-merkle-tree to run fast but ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/runs/4933005294/jobs/8816564512"},"it took 8 minutes and 52\nseconds"),"\n, 7m and 11 seconds being spent setting up the build environment.\nIn other words, 81% of the build time is downloading binary dependencies from some nix cache."),(0,o.kt)("p",null,"Compiling the code requires cabal and other nix dependencies that will trigger\nmassive downloads. Instead, let's, straight on, run the tests with nix and let\nnix decide what needs to be compiled. Sometimes, most of the code will not have\nchanged and the test binary will already be available in some nix cache to be run\nwithout any compilation step."),(0,o.kt)("p",null,"This has been done in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/867"},"#867"),".\nMerging this PR, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/runs/5003046049"},"build on master took 45\nminutes")," and,\nspecifically, the same ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/runs/5003046049/jobs/8963773583"},"plutus-merkle-tree\njob"),"\nonly took 1 minute and 44 seconds, only 20% of the time observed before."),(0,o.kt)("p",null,"Then, let's focus on documentation (14 minutes). Most of the time spent by this\nprocess is website optimization. It makes sense for the documentation that will\nactually be published on the website (master or release). But what about all\nthe builds in branches for which the website will never be published?\nWe need to keep this documentation step in branches because it gives us sanity\nchecks, preventing broken links, for instance. But we can definitely remove the\noptimization step."),(0,o.kt)("p",null,"This has been done in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/880"},"#880"),"\nand it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/runs/5067084637/jobs/9098252031"},"saves 10 minutes"),"\nfrom this step."),(0,o.kt)("p",null,"Our first goal was to reduce CI execution time when pushing\non branches and this has been improved. We're now having execution time\nsignificantly under 30 minutes where it used to be 45 minutes or even an hour."),(0,o.kt)("p",null,"We had some issues with compilation output, obfuscated by nix, which have been\nsolved by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/889"},"#889"),"."),(0,o.kt)("p",null,"Every morning, we rebuild our master branch and we can observe the whole\nexecution time on the following graph (in seconds):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CI perf",src:n(53817).Z,width:"1942",height:"1142"})," ",(0,o.kt)("small",null,(0,o.kt)("center",null,"C.I. execution total execution time"))),(0,o.kt)("p",null,"Although we observed performance improvements on branches CI execution time,\nmaster execution time has not been reduced that much. We may save 10 minutes\nfrom the documentation step because optimizing the ",(0,o.kt)("em",{parentName:"p"},"unstable")," documentation is\nmaybe not worthwhile.\nBut what's more problematic here is the process variability."),(0,o.kt)("p",null,"This variability can be explained by nix cache misses. That's something we need\nto investigate. It's hard to optimize a process with buffers, especially here\nwhere in case of a cache miss, recompilation has to happen and takes time.\nSo every cache miss introduces several minutes of overhead which explains why we\nobserve so much variation between two days with this master execution time."),(0,o.kt)("p",null,"Next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inspect why we have an unexpected random cache miss"),(0,o.kt)("li",{parentName:"ul"},"Improve haddock generation time (15 minutes)"),(0,o.kt)("li",{parentName:"ul"},"Reduce bench time (we probably don't want to run the whole benchmark suite for\nevery single commit, or a smaller one)"),(0,o.kt)("li",{parentName:"ul"},"Focus on the changed area (do not compile everything to generate the monthly\nreport)")),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("h4",{id:"hydrozoa-850"},"Hydrozoa ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/input-output-hk/hydra/discussions/850"},"#850")),(0,o.kt)("p",null,"This month, the project saw a new kind of contribution from the community.\n@GeorgeFlerovsky has written a research piece about an adaptation of the\n(Coordinated) Hydra Head protocol into a new flavor - Hydrozoa. The article is\ncurrently being examined and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/discussions/850"},"discussed on\nGitHub"),". Feedback so\nfar has been positive. Of course, one does not simply change the Hydra Head\nprotocol (pun intended), but the ideas contained could drive evolution and\nbe followed up with concrete protocol extensions. Very much like the ideas\npresented in the original paper."),(0,o.kt)("h4",{id:"hydra-for-payments-project-update"},"Hydra for Payments project update"),(0,o.kt)("p",null,"In this collaborative effort between IOG and ObsidianSystems, we are pushing the\nfrontiers of using Hydra in payment use cases. It will lower the entry barrier\nfor developers and ultimately users to leverage Hydra L2 for sending\nand receiving ada and Cardano native assets with very low fees and sub-second\nfinality."),(0,o.kt)("p",null,"The project is in its second phase where the open-source\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay"},"hydra-pay")," library is being\nexpanded with necessary features while the team pushes for building a\ndedicated mobile application."),(0,o.kt)("p",null,"With the recently released hydra-pay version\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/obsidiansystems/hydra-pay/releases/tag/v0.2.0"},"0.2.0"),', an\nend-to-end workflow of the Android App nicknamed "HydraNow" can be realized.\nThis app will act as a layer 2 wallet quite like a Bitcoin Lightning Wallet and\ndrives feature development in both ',(0,o.kt)("inlineCode",{parentName:"p"},"hydra-pay")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra")," in the background."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Two instances of HydraNow (in browser) connected via a hydra-pay channel",src:n(60328).Z,width:"3216",height:"1572"})," ",(0,o.kt)("small",null,(0,o.kt)("center",null,"Two instances of HydraNow (in browser) connected via a hydra-pay channel"))),(0,o.kt)("h4",{id:"spanish-translation"},"Spanish translation"),(0,o.kt)("p",null,"Last, but not least, we would like to thank @Agustinblockchain for their\ncontribution of a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/pull/866"},"Spanish translation #866"),"\nof the ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/unstable/es/"},"hydra.family website")," \ud83c\uddea\ud83c\uddf8 \ud83c\udf89"),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The monthly review meeting for May was held on 2023-05-24 via Google Meet with\nthese ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1anUC3Z1idloyR6uwiSHLZtV6-LQvUcByHPMUgCBOVIA"},"slides")," and here is the ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1_N6b4RDe579TgLawiJzbE0NLofD3ljE6/view"},"recording"),"."),(0,o.kt)("p",null,"The monthly review meeting was lively and we had stakeholders from IOG as well\nas interested community members join. They were well served by two very nice\ndemos shown by ObsidianSystems and IOG teams."),(0,o.kt)("p",null,"After having dealt with some issues last month, we are happy to have\nthe first mainnet-capable version released and have already another feature\ncompleted this month."),(0,o.kt)("p",null,"It is great to see that more and more contributors from the community are\nstepping up to become advocates of the technology. A community is forming and we\nrealize that the project could need some help from someone dedicated to keep\ntrack of all the great things happening. What a great problem to have!"))}u.isMDXComponent=!0},53817:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-05-ci-perf-6f40f4793f448feae776a3e87c1c4d59.png"},60328:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-05-hydra-now-a33a097233ff47e7cf2ccfc064abdd7f.png"},72604:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-05-roadmap-ex-ideas-190169ec27dae76ae437be73558443c0.png"},15880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-05-roadmap-a6eb7e109a1fe9a3beff03ac1824762b.png"},6077:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2023-05-timed-transactions-a2a620ded97818a461ae1a1a3caa3388.jpg"}}]);