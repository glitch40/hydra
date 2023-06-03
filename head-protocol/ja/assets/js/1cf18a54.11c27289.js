"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={slug:13,title:"13. Plutus Contracts Testing Strategy\n",authors:[],tags:["Accepted"]},i=void 0,l={permalink:"/head-protocol/ja/adr/13",source:"@site/adr/2022-01-19_013-contract-testing-strategy.md",title:"13. Plutus Contracts Testing Strategy\n",description:"Status",date:"2022-01-19T00:00:00.000Z",formattedDate:"2022\u5e741\u670819\u65e5",tags:[{label:"Accepted",permalink:"/head-protocol/ja/adr/tags/accepted"}],readingTime:1.26,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"13",title:"13. Plutus Contracts Testing Strategy\n",authors:[],tags:["Accepted"]},prevItem:{title:"12. Top-down Test-driven Design\n",permalink:"/head-protocol/ja/adr/12"},nextItem:{title:"14. Token usage in Hydra Scripts\n",permalink:"/head-protocol/ja/adr/14"}},c={authorsImageUrls:[]},s=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We are implementing our custom (",(0,r.kt)("a",{parentName:"li",href:"/adr/10"},"Direct"),") interaction w/ Cardano blockchain and not using the PAB nor the ",(0,r.kt)("inlineCode",{parentName:"li"},"Contract")," monad to define off-chain contract code"),(0,r.kt)("li",{parentName:"ul"},"This implies we cannot use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus-apps/blob/main/plutus-contract/src/Plutus/Contract/Test.hs"},"official")," testing framework for Contracts which relies on ",(0,r.kt)("inlineCode",{parentName:"li"},"Contract")," monad and emulator traces nor the ",(0,r.kt)("a",{parentName:"li",href:"https://plutus-apps.readthedocs.io/en/latest/plutus/tutorials/contract-testing.html"},"QuickCheck based framework")),(0,r.kt)("li",{parentName:"ul"},"We want to follow our ",(0,r.kt)("a",{parentName:"li",href:"/adr/12"},"Test-Driven Development")," approach for contracts as this is a critical part of Hydra"),(0,r.kt)("li",{parentName:"ul"},"On-Chain Validators need not only to be correct and functional, but also secure and hardened against malicious parties")),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Therefore")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We test-drive single contracts code using ",(0,r.kt)("em",{parentName:"li"},"Mutation-Based Property Testing")),(0,r.kt)("li",{parentName:"ul"},"Contracts are tested through the construction of actual ",(0,r.kt)("em",{parentName:"li"},"transactions")," and running phase-2 ledger validation process"),(0,r.kt)("li",{parentName:"ul"},'We start from a "healthy" transaction, that\'s expected to be correct and stay so'),(0,r.kt)("li",{parentName:"ul"},"Contract code is initially ",(0,r.kt)("inlineCode",{parentName:"li"},"const True")," function that validates any transaction"),(0,r.kt)("li",{parentName:"ul"},"We flesh the contract's code piecemeal through the introduction of ",(0,r.kt)("em",{parentName:"li"},"Mutations")," that turn a healthy transaction into an expectedly invalid one"),(0,r.kt)("li",{parentName:"ul"},"We gradually build a set of combinators and generators that make it easier to mutate arbitrarily transactions, and combine those mutations")),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We make the contracts' ",(0,r.kt)("em",{parentName:"li"},"Threat model"),"  explicit through the tests we write, which should help future auditors' work"),(0,r.kt)("li",{parentName:"ul"},"We'll need an additional layer of tests to exercise the Hydra OCV State Machine through ",(0,r.kt)("em",{parentName:"li"},"sequence of transactions"),". This could be implemented using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/plutus-apps/tree/main/quickcheck-dynamic"},"quickcheck-dynamic")," library, or other tools that are currently being developed by the Cardano community")))}d.isMDXComponent=!0}}]);