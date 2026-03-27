---
title: Weekly development report as of 2026-03-27
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5e89804e-665d-46a5-9459-61d17f04664b/
image_text: ""
---

### CORE TECHNOLOGY

Over the past few weeks, the **networking** team supported the upcoming node v.10.7.0 release and [released](https://github.com/orgs/IntersectMBO/projects/5/views/18) the new versions of `ouroboros-network` and `cardano-diffusion`.

For Leios, work remained in progress on [mux egress prioritization](https://github.com/IntersectMBO/ouroboros-network/issues/5262), transaction submission v2 performance [improvements](https://github.com/IntersectMBO/ouroboros-network/issues/5336) and [demo](https://github.com/IntersectMBO/ouroboros-network/issues/5337), and [updates](https://github.com/input-output-hk/ouroboros-leios/pull/820/changes) to the network section.

Across `ouroboros-network`, the team [enhanced](https://updates.cardano.intersectmbo.org/#ouroboros-network) transaction submission robustness and testing, refactored the mux and socket API, added new type data to ledger peers, and made various tooling and documentation enhancements.

On the [DMQ node](https://updates.cardano.intersectmbo.org/#dmq-node), they completed work on signature submission v2, ledger peer integration, dependency updates, documentation improvements, and released `dmq-node` 0.3.0.0 pre-release. Integration with `cardano-tracer` remains in progress.

Finally, IOSim saw multiple improvements, including event log handling, broader cleanup, and added support for GHC 9.14.

The **consensus** team worked on Peras protocol development by reviewing and merging the implementation of the [committee selection model](https://github.com/IntersectMBO/ouroboros-consensus/pull/1839), which defines how voters are chosen for fast-finality voting rounds. They also merged the node [implementation](https://github.com/IntersectMBO/ouroboros-consensus/pull/1864) that enables tracking Peras certificate progress on-chain, supporting the protocol’s chain-selection rule.

Additionally, the team released `ouroboros-consensus` [v.1.0.0.0](https://github.com/IntersectMBO/ouroboros-consensus/pull/1926) and reworked internal [resource management](https://github.com/IntersectMBO/ouroboros-consensus/pull/1910) for ledger state access, improving node robustness. Finally, they fixed a minor [issue](https://github.com/IntersectMBO/ouroboros-consensus/pull/1923) in the immutable DB chunk enumeration logic affecting test coverage and integrated the networking team’s `ouroboros-network` v.1.0 release ([#1918](https://github.com/IntersectMBO/ouroboros-consensus/pull/1918), [#1927](https://github.com/IntersectMBO/ouroboros-consensus/pull/1927), [#1929](https://github.com/IntersectMBO/ouroboros-consensus/pull/1929)).

### SMART CONTRACTS

This week, the **Cardano High Assurance** team went to [Buidler Fest](https://buidlerfest.com/) in Buenos Aires, organized by TxPipe. The team demonstrated the latest features of the automated formal verification tool and the coming-soon Plinth static analyzer.

### SCALING

This week, the **Mithril** team completed several SNARK-related milestones: they finished implementing the [Halo2 circuit](https://github.com/input-output-hk/mithril/issues/2895) in the STM library, completed work on [SNARK aggregation primitives](https://github.com/input-output-hk/mithril/issues/3040) for creating and verifying SNARK proofs, and finalized circuit refactoring, including modularity enhancements and a switch to a transcript hash function. They also completed the [technical report](https://github.com/input-output-hk/mithril/issues/2981) for the recursive Halo2 circuit. The team continued work on the full review of the recursive SNARK circuit prototype, the impact assessment of SNARK on Mithril protocol security, wiring the SNARK proof into the aggregate signature, and activating the SNARK prover in the dev networks.

They also completed implementing the [new prover](https://github.com/input-output-hk/mithril/issues/2987) for Cardano blocks and transactions, the [client library](https://github.com/input-output-hk/mithril/issues/3031), and enhanced the signed entity type configuration. They continued progressing on the client CLI implementation, partial block range support, and usage examples for Cardano blocks and transactions. Additionally, they kept working on the release process improvements, the removal of the legacy Cardano database backend in the client, and the enhancement of the protocol security page on the website.

Finally, they completed static builds of Mithril nodes in CI, finalized [testing of the DMQ node](https://github.com/input-output-hk/mithril/issues/3053) `0.3.0` pre-release, and updated the [Midnight ZK library](https://github.com/input-output-hk/mithril/issues/2983) audit status.

The **Hydra** team continued progress on the partial fanout feature ([#1667](https://github.com/cardano-scaling/hydra/issues/1667), [#2538](https://github.com/cardano-scaling/hydra/pull/2538)) and made some final changes to the [directly open heads](https://github.com/cardano-scaling/hydra/issues/1329) feature. They also investigated a [blocker](https://github.com/cardano-scaling/hydra/pull/2520) encountered during the upgrade to `cardano-api` v.10.21 and worked on improving [snapshot resilience](https://github.com/cardano-scaling/hydra/pull/2551).

### VOLTAIRE

With **Intersect** committee elections coming soon, now is a great time to start thinking about where you could make the most impact. Which areas of Cardano's future matter most to you – governance, budget, technical direction, ecosystem growth? There's a committee for that. 

Applications open March 30 through April 17, so take a moment to reflect on where your skills and passion align, and consider [putting your name forward](https://members.intersectmbo.org/dashboard).

If standing for election isn't for you right now, think about who in your network might be the perfect fit. Great committees are built from great people, and you might know exactly the right one.

### RESEARCH

IOR’s Professor Aggelos Kiayias has been named a **2026 Fellow of the International Association for Cryptologic Research (IACR)**. He is being awarded ‘for outstanding contributions to cryptographic designs, including the science and implementations of blockchains, for educational leadership, and for service to the IACR’.

The [IACR](https://www.iacr.org/) is the global authority on the science of cryptology. To be named a Fellow is to join the ranks of the visionaries who built the protocols securing the modern internet. For Professor Kiayias, this recognition is a testament to a lifelong commitment to provable security. This IACR Fellowship recognizes the profound impact Professor Kiayias has had across the cryptographic landscape, most notably in the evolution of decentralized networks. 

The IOR team is also progressing on Work Package 2026 workstreams and writing accessible explainers to accompany some of the research papers.
