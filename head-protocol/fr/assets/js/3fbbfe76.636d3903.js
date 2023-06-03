"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Frequently Asked Questions",s={unversionedId:"faq/index",id:"faq/index",title:"Frequently Asked Questions",description:"And their answers!",source:"@site/core-concepts/faq/index.md",sourceDirName:"faq",slug:"/faq/",permalink:"/head-protocol/fr/core-concepts/faq/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/faq/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Specification",permalink:"/head-protocol/fr/core-concepts/specification"}},l={},d=[],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"And their answers!")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"When Hydra?"),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{href:"https://github.com/orgs/input-output-hk/projects/21/"},"roadmap")," is publicly available on Github. Note that there are multiple sections behind tabs to view it from different angles (as release packages, as quarters, etc...)  ")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"When is the Hydra Head protocol a good fit?"),(0,r.kt)("p",null,"The Hydra Head protocol is well-suited for any situation where a known set of participants know each other well-enough to agree on building a network but don't trust one another enough with funds management to do so without ways to secure their assets backed by the possibility to settle disputes on the layer 1.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I run Plutus scripts inside a head?"),(0,r.kt)("p",null,"Yes! Transactions running between head participants are full-blown Alonzo transactions. They carry scripts, and spend UTxO in all-the-same manner as layer 1 transactions. Incidentally, each Hydra node is running a Cardano ledger and maintaining a ledger state. However, DApps which currently rely on the PAB for on-chain interactions will fall short when it comes to driving the execution of a Plutus contract inside a head. Indeed, the PAB is currently tightly coupled to the Cardano layer 1 chain; it is a Cardano client that interacts with the chain using the node-to-client mini-protocols (chain-sync, state-query, tx-submission). Hydra nodes do not expose such protocols (yet), making it incompatible with the PAB.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can a third-party run a Hydra node on behalf of a wallet owners (e.g. running managed Hydra Heads)?"),(0,r.kt)("p",null,"Totally! This is similar for instance to ",(0,r.kt)("a",{parentName:"p",href:"https://phoenix.acinq.co/"},"Phoenix")," in Bitcoin Lightning: a non-custodial managed lightning node. As an end-user, one still have full control on the keys and funds, but the underlying infrastructure is managed on one's behalf (provided fees). This however implies some form of trust between the service provider and the user. Indeed, the user implicitly trusts the service provider to, for instance, properly handle contestations and closure of a head.   ")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is the relationship between Hydra heads and Hydra nodes?"),(0,r.kt)("p",null,"It is (at least","*",") a ",(0,r.kt)("strong",{parentName:"p"},"one-to-many")," relationship. Each Hydra head is comprised of several Hydra nodes. We are currently aiming for up to 100 nodes per head as a stretch goal. Heads are independent and form an isolated network. It is possible to have infinitely many heads running in parallel. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(","*",") It is possible to make Hydra nodes support multiple heads making it a many-to-many relationship."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is the Hydra Head protocol a side-chain?"),(0,r.kt)("p",null,"No it isn't. In fact, there are two crucial facts that discards heads from being seen as side-chains:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"There's no guaranteed data availability on Hydra. Said differently, transactions are (a) only known of the head participants, and (b) typically forgotten as soon as they're processed. Indeed, there's no block in a Hydra head and also no incentive for participants to either keep the history around or make it available to users outside of the head.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A head network is static, new participants cannot join and have to be decided upfront. The network is thus very much isolated / private, and not reachable by any peer. Hydra heads are really channels between a set of well-known participants.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"If the Hydra Head ledger is configured with a non-zero transaction fee, where do the paid fees go?"),(0,r.kt)("p",null,"Setting protocol parameters with ",(0,r.kt)("inlineCode",{parentName:"p"},"fee > 0")," will enforce that transactions in the Hydra Head (layer 2) are consuming more than they produce. On the layer 1, however, the UTxO stay untouched and the total value does not change and a difference is accrued. Right now, when settling an agreed state from the L2 on the L1 during fanout, this difference will be spendable by the Head participant which does post the ",(0,r.kt)("inlineCode",{parentName:"p"},"fanoutTx"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Is it possible to us a different protocol parameters in the Hydra Head?"),(0,r.kt)("p",null,"In principle, yes! The ledger used for L2 transactions is configurable and can use the same or different protocol parameters as the L1. ",(0,r.kt)("strong",{parentName:"p"},"But there is a catch!")," If UTxOs get snapshotted on the L2, they can only be fanned out on the L1 ",(0,r.kt)("strong",{parentName:"p"},"exactly")," like they were snapshotted."),(0,r.kt)("p",null,"Let's look at two examples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"minUTxOValue = 0"),': Outputs with no "ADA" in their value in the L2 would be disallowed on L1 -> this makes fanout not possible. Using partial fanout as also considered within ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/issues/190"},"this feature")," would only disallow fanout of affected UTxOs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"maxTxExecutionUnits(L2) > maxTxExecutionUnits(L1)"),": Outputs payed to scripts which are too expensive to validate on L1 -> will be fanned out, but become unspendable.")),(0,r.kt)("p",null,"With great power, comes great responsibility. ")))}p.isMDXComponent=!0}}]);