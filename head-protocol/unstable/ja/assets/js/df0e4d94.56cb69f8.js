"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[2482],{19257:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),o=n(90814);const r={terminalWindow:"terminalWindow_wGrl",terminalWindowHeader:"terminalWindowHeader_o9Cs",terminalWindowBody:"terminalWindowBody_tzdS",row:"row_Rn7G",buttons:"buttons_IGLB",right:"right_fWp9",dot:"dot_fGZE"};function i(t){let{children:e,minHeight:n}=t;const i="string"==typeof e?a.createElement(o.Z,null,e):e;return a.createElement("div",{className:r.terminalWindow,style:{minHeight:n}},a.createElement("div",{className:r.terminalWindowHeader},a.createElement("div",{className:r.buttons},a.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:r.dot,style:{background:"#58cb42"}}))),a.createElement("div",{className:r.terminalWindowBody},i))}},70167:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(19257);const i={sidebar_position:2},d="\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",description:"\u30cf\u30a4\u30c9\u30e9\u306e\u5165\u624b\u5148\u306f\uff1f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/head-protocol/unstable/ja/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"\u306f\u3058\u3081\u306b",permalink:"/head-protocol/unstable/ja/docs/getting-started/"},next:{title:"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",permalink:"/head-protocol/unstable/ja/docs/getting-started/quickstart"}},l={},c=[{value:"Docker\u306e\u4f7f\u7528",id:"docker\u306e\u4f7f\u7528",level:2},{value:"\u30bd\u30fc\u30b9\u304b\u3089\u306e\u69cb\u7bc9",id:"\u30bd\u30fc\u30b9\u304b\u3089\u306e\u69cb\u7bc9",level:2}],u={toc:c},p="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u30cf\u30a4\u30c9\u30e9\u306e\u5165\u624b\u5148\u306f\uff1f")),(0,o.kt)("h2",{id:"docker\u306e\u4f7f\u7528"},"Docker\u306e\u4f7f\u7528"),(0,o.kt)("p",null,"hydra-node\u3092\u52d5\u304b\u3059\u4e00\u756a\u8fc5\u901f\u306a\u65b9\u6cd5\u306f\u3001\u5c02\u7528\u306eDocker\u30a4\u30e1\u30fc\u30b8\u3092\u4f7f\u3046\u3053\u3068\u3067\u3059\u3002"),(0,o.kt)(r.Z,{mdxType:"TerminalWindow"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull ghcr.io/input-output-hk/hydra-node\ndocker run --rm ghcr.io/input-output-hk/hydra-node --help\n"))),(0,o.kt)("h2",{id:"\u30bd\u30fc\u30b9\u304b\u3089\u306e\u69cb\u7bc9"},"\u30bd\u30fc\u30b9\u304b\u3089\u306e\u69cb\u7bc9"),(0,o.kt)("p",null,"docker \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c Hydra \u3092 ",(0,o.kt)("em",{parentName:"p"},"use")," \u3059\u308b\u305f\u3081\u306e\u63a8\u5968\u3055\u308c\u308b\u65b9\u6cd5\u3067\u3059\u304c\u3001\u30bd\u30fc\u30b9\u304b\u3089 ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," \u3092\u30d3\u30eb\u30c9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001\u3053\u308c\u306b\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/download.html"},"nix")," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001",(0,o.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/blob/master/CONTRIBUTING.md"},"\u5bc4\u7a3f\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}m.isMDXComponent=!0}}]);