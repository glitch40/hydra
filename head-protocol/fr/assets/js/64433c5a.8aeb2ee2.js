"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6145],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},54704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(52991),i=r(1116);const s={sidebar_position:1},c="Overview",l={unversionedId:"index",id:"index",title:"Overview",description:"Hydra is the layer 2 scalability solution for Cardano, which aims to increase transaction speed through low latency and high throughput and minimize transaction cost.",source:"@site/core-concepts/index.md",sourceDirName:".",slug:"/",permalink:"/head-protocol/fr/core-concepts/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Hydra Node Architecture",permalink:"/head-protocol/fr/core-concepts/architecture/"}},d={},p=[],m={toc:p},h="wrapper";function u(e){let{components:t,...s}=e;return(0,a.kt)(h,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Hydra is the layer 2 scalability solution for Cardano, which aims to increase transaction speed through low latency and high throughput and minimize transaction cost."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2020/299.pdf"},"Hydra Head")," is the first protocol of the Hydra family and embodies the foundation for more advanced deployment scenarios relying on isomorphic, multi-party state-channels. For an introduction to the protocol also check out these two blog posts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/"},"Hydra \u2013 Cardano\u2019s solution for ultimate Layer 2 scalability")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://iohk.io/en/blog/posts/2022/02/03/implementing-hydra-heads-the-first-step-towards-the-full-hydra-vision/"},"Implementing Hydra Heads: the first step towards the full Hydra vision "))),(0,a.kt)("p",null,"There are different flavors and extensions of the Hydra Head protocol, but let's start by looking at the full lifecycle of a basic Hydra Head, and how it allows for isomorphic state transfer between layer 1 and layer 2."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(60677).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"A Hydra Head is formed by a group of online and responsive participants. Participants ",(0,a.kt)("strong",{parentName:"p"},"init"),"ialize a Head by announcing several parameters on-chain, including the participants list. Then each of the participants ",(0,a.kt)("strong",{parentName:"p"},"commit"),"s unspent transaction outputs (UTXOs) from the Cardano main-chain to it, before all the UTXOs are ",(0,a.kt)("strong",{parentName:"p"},"collect"),"ed and made available in a Hydra Head as initial state (",(0,a.kt)("inlineCode",{parentName:"p"},"U0"),"). At any moment before collecting, participants can also ",(0,a.kt)("strong",{parentName:"p"},"abort")," the process and recover their funds."),(0,a.kt)("p",null,"While open, they can use the Hydra Head via a hydra-node to submit transactions over the Head network. Transactions have the same format and properties as on the main-chain: they are ",(0,a.kt)("em",{parentName:"p"},"isomorphic"),". When UTXO entries are spent, and new UTXO entries are created in a Hydra Head, all participants are required to acknowledge and agree on the new state in so-called snapshots (",(0,a.kt)("inlineCode",{parentName:"p"},"U1..Un"),")."),(0,a.kt)("p",null,"Any participant can ",(0,a.kt)("strong",{parentName:"p"},"close")," the Head using an agreed state, when for example they wish to cash out on the mainnet, or if another party misbehaves or stalls the Head's evolution. There is a mechanism to ",(0,a.kt)("strong",{parentName:"p"},"contest")," the final state on the main chain. Ultimately, a ",(0,a.kt)("strong",{parentName:"p"},"fanout")," transaction distributes the final agreed state and makes available on the layer 1 what only existed virtually in the Head."),(0,a.kt)(o.Z,{items:(0,i.V)().items.filter((e=>{let{docId:t}=e;return"index"!=t})),mdxType:"DocCardList"}))}u.isMDXComponent=!0},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),o=r(53438),i=r(39960),s=r(13919),c=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function u(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(u,{item:e})))))}},60677:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hydra-head-lifecycle-b8449385e9041a214bf8c6e52830de3c.svg"}}]);