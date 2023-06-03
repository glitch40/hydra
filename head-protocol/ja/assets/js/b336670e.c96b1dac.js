"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),o=r(52991),c=r(1116);const i={sidebar_label:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af",sidebar_position:1},s="\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3068\u5236\u9650\u4e8b\u9805",l={unversionedId:"index",id:"index",title:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3068\u5236\u9650\u4e8b\u9805",description:"\u3053\u306e\u9805\u76ee\u3067\u306f\u3001Hydra Head\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u65e2\u77e5\u306e\u5236\u9650\u306b\u95a2\u3059\u308b\u6700\u65b0\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Cardano\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff08\u304a\u3088\u3073\u30d6\u30ed\u30c3\u30af\uff09\u306b\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b5\u30a4\u30ba\u3001\u5b9f\u884c\u30b3\u30b9\u30c8\u3001Input\u3068Output\u306e\u6570\u306b\u5236\u9650\u304c\u3042\u308a\u3001\u3053\u308c\u3089\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4f9d\u5b58\u3057Head\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u6a5f\u80fd\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3057\u307e\u3059\u3002Head\u306b\u53c2\u52a0\u3067\u304d\u308b\u30d1\u30fc\u30c6\u30a3\u30fc\u306e\u6570\u3001Head\u306b\u30b3\u30df\u30c3\u30c8\u3067\u304d\u308bUTxO\u306e\u6570\u3001\u30d5\u30a1\u30f3\u30a2\u30a6\u30c8\u3067\u304d\u308b\u6570\u306f\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u6210\u719f\u3057\u3001\u6700\u9069\u5316\u3055\u308c\u3001\u57fa\u790e\u3068\u306a\u308b\u30ab\u30eb\u30c0\u30ce\u30c1\u30a7\u30fc\u30f3\u304c\u3001\u3088\u308a\u591a\u304f\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3088\u308a\u52b9\u7387\u7684\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u306b\u3088\u3063\u3066\u9032\u5316\u3059\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u5236\u9650\u306f\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs-benchmarks/current/index.md",sourceDirName:".",slug:"/",permalink:"/head-protocol/ja/benchmarks/",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/i18n/ja/docusaurus-plugin-content-docs-benchmarks/current/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Transactions Costs",permalink:"/head-protocol/ja/benchmarks/transaction-cost"}},d={},u=[],p={toc:u},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3068\u5236\u9650\u4e8b\u9805"},"\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3068\u5236\u9650\u4e8b\u9805"),(0,a.kt)("p",null,"\u3053\u306e\u9805\u76ee\u3067\u306f\u3001Hydra Head\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u65e2\u77e5\u306e\u5236\u9650\u306b\u95a2\u3059\u308b\u6700\u65b0\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Cardano\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff08\u304a\u3088\u3073\u30d6\u30ed\u30c3\u30af\uff09\u306b\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b5\u30a4\u30ba\u3001\u5b9f\u884c\u30b3\u30b9\u30c8\u3001Input\u3068Output\u306e\u6570\u306b\u5236\u9650\u304c\u3042\u308a\u3001\u3053\u308c\u3089\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4f9d\u5b58\u3057Head\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u6a5f\u80fd\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3057\u307e\u3059\u3002Head\u306b\u53c2\u52a0\u3067\u304d\u308b\u30d1\u30fc\u30c6\u30a3\u30fc\u306e\u6570\u3001Head\u306b\u30b3\u30df\u30c3\u30c8\u3067\u304d\u308bUTxO\u306e\u6570\u3001\u30d5\u30a1\u30f3\u30a2\u30a6\u30c8\u3067\u304d\u308b\u6570\u306f\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u6210\u719f\u3057\u3001\u6700\u9069\u5316\u3055\u308c\u3001\u57fa\u790e\u3068\u306a\u308b\u30ab\u30eb\u30c0\u30ce\u30c1\u30a7\u30fc\u30f3\u304c\u3001\u3088\u308a\u591a\u304f\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3088\u308a\u52b9\u7387\u7684\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u306b\u3088\u3063\u3066\u9032\u5316\u3059\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u5236\u9650\u306f\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u308c\u3089\u306e\u30da\u30fc\u30b8\u3067\u63d0\u4f9b\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306f\u3001Hydra\u306e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/actions/workflows/ci.yaml"},"\u7d71\u5408\u30d7\u30ed\u30bb\u30b9"),"\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u308b\u305f\u3081\u3001\u30b3\u30fc\u30c9\u306e\u73fe\u5728\u306e\u72b6\u614b\u3092\u53cd\u6620\u3059\u308b\u3053\u3068\u304c\u4fdd\u8a3c\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)(o.Z,{items:(0,c.V)().items.filter((e=>{let{docId:t}=e;return"index"!=t})),mdxType:"DocCardList"}))}f.isMDXComponent=!0},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),a=r(86010),o=r(53438),c=r(39960),i=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function u(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},r," ",o),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:c},c))}function p(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}}}]);