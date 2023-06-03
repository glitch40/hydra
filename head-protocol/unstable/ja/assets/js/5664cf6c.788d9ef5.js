"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[3541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},s="Test Results for hydra-cluster",o={unversionedId:"tests/hydra-cluster/hspec-results",id:"tests/hydra-cluster/hspec-results",title:"Test Results for hydra-cluster",description:"Test.LogFilter",source:"@site/benchmarks/tests/hydra-cluster/hspec-results.md",sourceDirName:"tests/hydra-cluster",slug:"/tests/hydra-cluster/hspec-results",permalink:"/head-protocol/unstable/ja/benchmarks/tests/hydra-cluster/hspec-results",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/benchmarks/tests/hydra-cluster/hspec-results.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Ledger micro-benchmarks",permalink:"/head-protocol/unstable/ja/benchmarks/ledger"},next:{title:"Test Results for hydra-node",permalink:"/head-protocol/unstable/ja/benchmarks/tests/hydra-node/hspec-results"}},i={},d=[{value:"Test.LogFilter",id:"testlogfilter",level:2},{value:"Test.Ledger.Cardano.Configuration",id:"testledgercardanoconfiguration",level:2},{value:"ShelleyGenesis",id:"shelleygenesis",level:3},{value:"ProtocolParameters",id:"protocolparameters",level:3},{value:"Test.Hydra.Cluster.Faucet",id:"testhydraclusterfaucet",level:2},{value:"returnFundsToFaucet",id:"returnfundstofaucet",level:3},{value:"seedFromFaucet",id:"seedfromfaucet",level:3},{value:"Test.Generator",id:"testgenerator",level:2},{value:"JSON encoding of Dataset",id:"json-encoding-of-dataset",level:3},{value:"Test.EndToEnd",id:"testendtoend",level:2},{value:"End-to-end on Cardano devnet",id:"end-to-end-on-cardano-devnet",level:3},{value:"hydra-node executable",id:"hydra-node-executable",level:4},{value:"Monitoring",id:"monitoring",level:4},{value:"two hydra heads scenario",id:"two-hydra-heads-scenario",level:4},{value:"restarting nodes",id:"restarting-nodes",level:4},{value:"three hydra nodes scenario",id:"three-hydra-nodes-scenario",level:4},{value:"single party hydra head",id:"single-party-hydra-head",level:4},{value:"Test.DirectChain",id:"testdirectchain",level:2},{value:"Test.CardanoNode",id:"testcardanonode",level:2},{value:"Test.CardanoClient",id:"testcardanoclient",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-results-for-hydra-cluster"},"Test Results for hydra-cluster"),(0,r.kt)("h2",{id:"testlogfilter"},"Test.LogFilter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"keeps basic structure of entry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"replaces transactions by their ids in ReqSn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"significantly reduces standard log messages size"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Details"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+++ OK, passed 200 tests (69.0% reduces size by 90%).\n\nRatios (200 in total):\n69.0% 0 %\n 9.5% 90 %\n 4.0% 10 %\n 3.5% 20 %\n 3.5% 60 %\n 3.0% 80 %\n 2.5% 40 %\n 2.0% 30 %\n 1.5% 50 %\n 1.5% 70 %\n"))))),(0,r.kt)("h2",{id:"testledgercardanoconfiguration"},"Test.Ledger.Cardano.Configuration"),(0,r.kt)("h3",{id:"shelleygenesis"},"ShelleyGenesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can be read from JSON")),(0,r.kt)("h3",{id:"protocolparameters"},"ProtocolParameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can be read from JSON")),(0,r.kt)("h2",{id:"testhydraclusterfaucet"},"Test.Hydra.Cluster.Faucet"),(0,r.kt)("h3",{id:"returnfundstofaucet"},"returnFundsToFaucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seedFromFaucet and returnFundsToFaucet work together")),(0,r.kt)("h3",{id:"seedfromfaucet"},"seedFromFaucet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"should work concurrently")),(0,r.kt)("h2",{id:"testgenerator"},"Test.Generator"),(0,r.kt)("h3",{id:"json-encoding-of-dataset"},"JSON encoding of Dataset"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"allows to encode values with aeson and read them back"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Details"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+++ OK, passed 100 tests.\n")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"generates a Dataset that keeps UTXO constant"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Details"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+++ OK, passed 100 tests.\n"))))),(0,r.kt)("h2",{id:"testendtoend"},"Test.EndToEnd"),(0,r.kt)("h3",{id:"end-to-end-on-cardano-devnet"},"End-to-end on Cardano devnet"),(0,r.kt)("h4",{id:"hydra-node-executable"},"hydra-node executable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display proper semantic version given it is passed --version argument"),(0,r.kt)("li",{parentName:"ul"},"logs its command line arguments"),(0,r.kt)("li",{parentName:"ul"},"detects misconfiguration")),(0,r.kt)("h4",{id:"monitoring"},"Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node exposes Prometheus metrics on port 6001")),(0,r.kt)("h4",{id:"two-hydra-heads-scenario"},"two hydra heads scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"two heads on the same network do not conflict"),(0,r.kt)("li",{parentName:"ul"},"bob cannot abort alice's head")),(0,r.kt)("h4",{id:"restarting-nodes"},"restarting nodes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can abort head after restart"),(0,r.kt)("li",{parentName:"ul"},"can observe a commit tx after a restart, even when a tx happened while down"),(0,r.kt)("li",{parentName:"ul"},"can start chain from the past and replay on-chain events"),(0,r.kt)("li",{parentName:"ul"},"close of an initial snapshot from re-initialized node is contested")),(0,r.kt)("h4",{id:"three-hydra-nodes-scenario"},"three hydra nodes scenario"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"inits a Head, processes a single Cardano transaction and closes it again"),(0,r.kt)("li",{parentName:"ul"},"inits a Head and closes it immediately ")),(0,r.kt)("h4",{id:"single-party-hydra-head"},"single party hydra head"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"full head life-cycle"),(0,r.kt)("li",{parentName:"ul"},"can close with long deadline"),(0,r.kt)("li",{parentName:"ul"},"can submmit a timed tx")),(0,r.kt)("h2",{id:"testdirectchain"},"Test.DirectChain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can init and abort a head given nothing has been committed"),(0,r.kt)("li",{parentName:"ul"},"can init and abort a 2-parties head after one party has committed"),(0,r.kt)("li",{parentName:"ul"},"cannot abort a non-participating head"),(0,r.kt)("li",{parentName:"ul"},"can commit"),(0,r.kt)("li",{parentName:"ul"},"can commit empty UTxO"),(0,r.kt)("li",{parentName:"ul"},"can open, close & fanout a Head"),(0,r.kt)("li",{parentName:"ul"},"can restart head to point in the past and replay on-chain events"),(0,r.kt)("li",{parentName:"ul"},"cannot restart head to an unknown point"),(0,r.kt)("li",{parentName:"ul"},"can publish and query reference scripts in a timely manner"),(0,r.kt)("li",{parentName:"ul"},"can only contest once")),(0,r.kt)("h2",{id:"testcardanonode"},"Test.CardanoNode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"has expected cardano-node version available"),(0,r.kt)("li",{parentName:"ul"},"withCardanoNodeDevnet does start a block-producing devnet within 5 seconds")),(0,r.kt)("h2",{id:"testcardanoclient"},"Test.CardanoClient"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"queryGenesisParameters works as expected")))}p.isMDXComponent=!0}}]);