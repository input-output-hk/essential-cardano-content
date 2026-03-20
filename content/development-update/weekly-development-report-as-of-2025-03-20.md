---
title: Weekly development report as of 2025-03-20
tags:
  - Weekly development updates
  - Development
url: ""
image: https://ucarecdn.com/e63e97b6-b6bd-4c48-b3c2-e94214d644ab/
image_text: ""
---

### CORE TECHNOLOGY

Over the past few weeks, the **ledger** team has progressed work on nested transactions by implementing an additional ledger rule. They also integrated the new testing library `AntiGen` into the ledger, enabling negative property testing of decoders against the CDDL specification. This improves confidence in the quality of binary decoders, both for current and future eras.

The team also progressed work on the canonical ledger state by adding one more namespace.

Finally, they reached a major milestone by releasing all ledger packages to CHaP for the upcoming cardano-node v.10.7 release, which includes the features required for the intra-era hard fork to protocol version 11.

### SCALING

**Mithril**

This week, the Mithril team continued implementing new succinct proofs. They completed the certificate chain adaptation for the SNARK aggregate verification key, prepared the SNARK prover witness, and finalized the naming alignment as part of the SNARK circuit refactoring. They published a [new dev blog](https://mithril.network/doc/dev-blog/2026/03/16/new-protocol-parameters-mainnet/) detailing protocol parameter changes on mainnet. The team also continued work on [modularity enhancements](https://github.com/input-output-hk/mithril/issues/3039) using gadgets and on SNARK proof verification. In addition, they advanced the [full review](https://github.com/input-output-hk/mithril/issues/2982) of the recursive circuit prototype, the technical report for the recursive Halo2 circuit, and the impact assessment of SNARK on the Mithril [protocol's security](https://github.com/input-output-hk/mithril/issues/2703).

The team also continued work on the new certification for Cardano blocks and transactions, including the prover and client library implementations, completed static builds for Mithril nodes, and began enhancing support for signed entity types through configuration.

Finally, they continued [testing the DMQ node](https://github.com/input-output-hk/mithril/issues/3053) 0.3.0 pre-release and worked on removing the v1 backend for the Cardano database in the client library and CLI.

**Hydra**

The Hydra team released [version 1.3.0](https://github.com/cardano-scaling/hydra/releases/tag/1.3.0) and made substantial progress on the partial fanout feature ([#1667](https://github.com/cardano-scaling/hydra/issues/1667), [#2538](https://github.com/cardano-scaling/hydra/pull/2538)). They also [fixed an issue](https://github.com/cardano-scaling/hydra/pull/2519) related to the high layer 2 transaction load and [improved logging](https://github.com/cardano-scaling/hydra/pull/2531) when running smoke tests.

Next, the team focuses on improving the structure and consistency of benchmarks to support more reliable performance analysis. They are also working on the upcoming Dijkstra era and implementing the ‘directly open heads’ feature. Finally, the team plans to upgrade to `cardano-api` v.10.21.
