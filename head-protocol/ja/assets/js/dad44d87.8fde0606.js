"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5108],{94088:e=>{e.exports=JSON.parse('{"pluginId":"benchmarks","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"\u30d9\u30f3\u30c1\u30de\u30fc\u30af","href":"/head-protocol/ja/benchmarks/","docId":"index"},{"type":"link","label":"Plutus Merkle-Tree Benchmarks","href":"/head-protocol/ja/benchmarks/mt-benchmarks","docId":"mt-benchmarks"},{"type":"link","label":"Transactions Costs","href":"/head-protocol/ja/benchmarks/transaction-cost","docId":"transaction-cost"},{"type":"link","label":"Profiling Hydra scripts","href":"/head-protocol/ja/benchmarks/profiling","docId":"profiling"},{"type":"category","label":"tests","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"hydra-cluster","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Results for hydra-cluster","href":"/head-protocol/ja/benchmarks/tests/hydra-cluster/hspec-results","docId":"tests/hydra-cluster/hspec-results"}]},{"type":"category","label":"hydra-node","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Results for hydra-node","href":"/head-protocol/ja/benchmarks/tests/hydra-node/hspec-results","docId":"tests/hydra-node/hspec-results"}]},{"type":"category","label":"hydra-plutus","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Results for hydra-plutus","href":"/head-protocol/ja/benchmarks/tests/hydra-plutus/hspec-results","docId":"tests/hydra-plutus/hspec-results"}]},{"type":"category","label":"hydra-tui","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Results for hydra-tui","href":"/head-protocol/ja/benchmarks/tests/hydra-tui/hspec-results","docId":"tests/hydra-tui/hspec-results"}]},{"type":"category","label":"plutus-cbor","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Results for plutus-cbor","href":"/head-protocol/ja/benchmarks/tests/plutus-cbor/hspec-results","docId":"tests/plutus-cbor/hspec-results"}]},{"type":"category","label":"plutus-merkle-tree","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Test Results for plutus-merkle-tree","href":"/head-protocol/ja/benchmarks/tests/plutus-merkle-tree/hspec-results","docId":"tests/plutus-merkle-tree/hspec-results"}]}]}]},"docs":{"index":{"id":"index","title":"\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3068\u5236\u9650\u4e8b\u9805","description":"\u3053\u306e\u9805\u76ee\u3067\u306f\u3001Hydra Head\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u65e2\u77e5\u306e\u5236\u9650\u306b\u95a2\u3059\u308b\u6700\u65b0\u30c7\u30fc\u30bf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002Cardano\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff08\u304a\u3088\u3073\u30d6\u30ed\u30c3\u30af\uff09\u306b\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b5\u30a4\u30ba\u3001\u5b9f\u884c\u30b3\u30b9\u30c8\u3001Input\u3068Output\u306e\u6570\u306b\u5236\u9650\u304c\u3042\u308a\u3001\u3053\u308c\u3089\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u4f9d\u5b58\u3057Head\u30d7\u30ed\u30c8\u30b3\u30eb\u306e\u6a5f\u80fd\u306b\u5f71\u97ff\u3092\u53ca\u307c\u3057\u307e\u3059\u3002Head\u306b\u53c2\u52a0\u3067\u304d\u308b\u30d1\u30fc\u30c6\u30a3\u30fc\u306e\u6570\u3001Head\u306b\u30b3\u30df\u30c3\u30c8\u3067\u304d\u308bUTxO\u306e\u6570\u3001\u30d5\u30a1\u30f3\u30a2\u30a6\u30c8\u3067\u304d\u308b\u6570\u306f\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3068\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u6210\u719f\u3057\u3001\u6700\u9069\u5316\u3055\u308c\u3001\u57fa\u790e\u3068\u306a\u308b\u30ab\u30eb\u30c0\u30ce\u30c1\u30a7\u30fc\u30f3\u304c\u3001\u3088\u308a\u591a\u304f\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3088\u308a\u52b9\u7387\u7684\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u306b\u3088\u3063\u3066\u9032\u5316\u3059\u308b\u3068\u3001\u3053\u308c\u3089\u306e\u5236\u9650\u306f\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002","sidebar":"defaultSidebar"},"mt-benchmarks":{"id":"mt-benchmarks","title":"Plutus Merkle-Tree Contract","description":"Cost of on-chain Merkle-Tree","sidebar":"defaultSidebar"},"profiling":{"id":"profiling","title":"Profiling Hydra scripts","description":"This is a quick tutorial how to profile Hydra scripts and is intended for","sidebar":"defaultSidebar"},"tests/hydra-cluster/hspec-results":{"id":"tests/hydra-cluster/hspec-results","title":"Test Results for hydra-cluster","description":"Test.LogFilter","sidebar":"defaultSidebar"},"tests/hydra-node/hspec-results":{"id":"tests/hydra-node/hspec-results","title":"Test Results for hydra-node","description":"Hydra.SnapshotStrategy","sidebar":"defaultSidebar"},"tests/hydra-plutus/hspec-results":{"id":"tests/hydra-plutus/hspec-results","title":"Test Results for hydra-plutus","description":"Hydra.Plutus.Golden","sidebar":"defaultSidebar"},"tests/hydra-tui/hspec-results":{"id":"tests/hydra-tui/hspec-results","title":"Test Results for hydra-tui","description":"Hydra.TUI.Options","sidebar":"defaultSidebar"},"tests/plutus-cbor/hspec-results":{"id":"tests/plutus-cbor/hspec-results","title":"Test Results for plutus-cbor","description":"Plutus.Codec.CBOR.Encoding","sidebar":"defaultSidebar"},"tests/plutus-merkle-tree/hspec-results":{"id":"tests/plutus-merkle-tree/hspec-results","title":"Test Results for plutus-merkle-tree","description":"Plutus.MerkleTree","sidebar":"defaultSidebar"},"transaction-cost":{"id":"transaction-cost","title":"Transactions Costs","description":"Sizes and execution budgets for Hydra protocol transactions. Note that unlisted parameters are currently using arbitrary values and results are not fully deterministic and comparable to previous runs.","sidebar":"defaultSidebar"}}}')}}]);