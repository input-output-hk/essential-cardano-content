---
title: Weekly development report as of 2026-03-13
tags:
  - Weekly development updates
  - Development
  - Ecosystem
  - Statistics
url: ""
image: https://ucarecdn.com/b6d53c99-a651-4c96-a57b-6263ab144ab8/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   Binance listed the [NIGHT](https://x.com/MidnightNtwrk/status/2031755770157572555) token this week and conducted an [airdrop](https://x.com/binance/status/2031712995714474037) to BNB holders
    
*   The [Sandstone](https://x.com/sandstonepool/status/2030945415592628558) stake pool team released Torsten, a Cardano full node written in Rust that could lower resource usage, provide faster chain syncing, and reduce hardware costs
    
*   [Cardano](https://x.com/RareNetworkWeb3/status/2031731960918524404) will be a block sponsor at Consensus 2026, taking place May 5–7, 2026, in Miami
    
*   Zero deposit fees for the USDC → USDCx deposit and relay services have been [extended](https://x.com/IOGroup/status/2030991994730787193).
    

### CORE TECHNOLOGY

Over the past few weeks, the **consensus** team continued work on the Leios prototype as part of Treasury Funding Initiative 4 (Ouroboros Leios implementation). They [implemented](https://github.com/IntersectMBO/ouroboros-consensus/pull/1883) a `run-threadnet` CLI that allows configuring, running, and observing simulated Cardano networks. This tool enables quick local testing of multi-node setups and speeds up the investigation of implementation issues. The team also drafted a baseline design for the [Leios fetch logic](https://github.com/input-output-hk/ouroboros-leios/pull/797) with [bounded memory usage](https://github.com/input-output-hk/ouroboros-leios/issues/811), addressing the challenge of efficiently fetching and managing large volumes of data while keeping resource usage within practical limits. Work will continue with an exploration of alternative storage strategies to further improve performance.

In Peras development, the team added [state-machine tests](https://github.com/IntersectMBO/ouroboros-consensus/pull/1809) for the Peras vote database, strengthening guarantees around the correctness of the voting mechanism.

They also delivered several node improvements as part of Treasury Funding Initiative 17 (maintenance and support). The node-to-client protocol was [updated](https://github.com/IntersectMBO/ouroboros-consensus/pull/1860) to version 23, unlocking new queries for wallets and other tools interacting with the node. The team also simplified the process for developers to [target the current era](https://github.com/IntersectMBO/ouroboros-consensus/pull/1919) when querying the node, improved [observability](https://github.com/IntersectMBO/ouroboros-consensus/pull/1898) of chain selection by exposing the reasons behind chain switches, and integrated a [ledger fix](https://github.com/IntersectMBO/ouroboros-consensus/pull/1914) for a bug in the Plutus script context.

Work also progressed on repository and tooling improvements. The team [unified](https://github.com/IntersectMBO/ouroboros-consensus/pull/1895) all consensus packages into a single package to simplify dependencies for downstream projects and [enhanced the snapshot converter](https://github.com/IntersectMBO/ouroboros-consensus/pull/1887) tool with a daemon mode that watches for new ledger snapshots and converts them automatically, which is useful for node operators managing different storage backends. The team also added developer [documentation](https://github.com/IntersectMBO/ouroboros-consensus/pull/1913) for inspecting a node’s chain.

Finally, testing and quality improvements included [generalizing](https://github.com/IntersectMBO/ouroboros-consensus/pull/1879) Genesis tests to support any block type, paving the way for conformance testing with real Cardano blocks, adding support for [GHC 9.14](https://github.com/IntersectMBO/ouroboros-consensus/pull/1902), and internal [cleanup](https://github.com/IntersectMBO/ouroboros-consensus/pull/1880) of chain selection and ledger database code.

### WALLETS AND SERVICES 

The **Lace** team is currently focused on supporting the upcoming Midnight mainnet launch, bringing rational privacy directly into the wallet experience. As the first wallet to integrate Midnight, Lace will give Cardano users secure, non-custodial access to Midnight assets alongside their existing holdings. This milestone introduces a new model in which public and private assets can coexist seamlessly within a single familiar interface, with Lace continuing to evolve alongside the Midnight ecosystem.

### SMART CONTRACTS

This week, the **Cardano High Assurance** team worked on the _automated formal verification tool_, focusing on implementing correct costing for the CEK machine used in formal verification. They also extended and improved the set of optimization rules, achieving a significant reduction in processing time. This brings the tool close to proving complex smart contracts directly at the UPLC level. The team plans to demonstrate its features at Buidler Fest this March.

For the _property-based testing tool_, the team focused on integrating the solution’s core components: a testing interface for generating complex test scenarios, a threat model that automatically explores known weaknesses, and a comprehensive set of examples showcasing the tool’s capabilities.

Finally, the team continued preparing the first release of the _static analysis tool_ for Plinth smart contracts. They implemented an initial set of rules and developed a Visual Studio Code extension. Work now focuses on finalizing the release and making the tool available to Plinth developers.

### SCALING

This week, the **Mithril** team continued implementing new succinct proofs. The team completed the SNARK [pre-aggregation primitives](https://github.com/input-output-hk/mithril/issues/2943) in the STM library, began preparing the SNARK prover witness, and continued adapting the certificate chain for SNARK AVK. They also made significant progress on the SNARK circuit refactoring, completing the [error handling](https://github.com/input-output-hk/mithril/issues/3035) and [type consistency](https://github.com/input-output-hk/mithril/issues/3036) tasks while continuing work on [decoupling](https://github.com/input-output-hk/mithril/issues/3037) the Midnight library and [aligning](https://github.com/input-output-hk/mithril/issues/3038) naming. In addition, they refactored the prototype recursive circuit's state transition functions and continued the full review of the recursive circuit prototype, the [technical report](https://github.com/input-output-hk/mithril/issues/2981) for the recursive Halo2 circuit, and the impact assessment of SNARK on Mithril protocol security.

The team also continued work on the new certification for Cardano blocks and transactions, including the [prover](https://github.com/input-output-hk/mithril/issues/2987) and the [client library](https://github.com/input-output-hk/mithril/issues/3031) implementation. They completed the [integration](https://github.com/input-output-hk/mithril/issues/3012) of Mithril explainers into the Cardano Developer Portal website and continued work on static builds for Mithril nodes.

Finally, they fixed a slowness issue affecting the import of Cardano blocks and transactions on dev aggregators, improved the DMQ node setup documentation, and tested the [DMQ node 0.3.0 pre-release](https://github.com/input-output-hk/mithril/issues/3053).

### VOLTAIRE

**Intersect** is preparing to facilitate the committee elections. Candidate applications will open on March 30, 2026, and close on April 17, with voting taking place from April 20 to May 1. Committee seats carry two-year terms, with elections held annually so that roughly half of each standing committee's membership rotates each year — preserving institutional knowledge and cultural continuity across cycles.

### RESEARCH 

This week, the **Input Output Research (IOR)** team is reviewing submissions received for the cryptographic tools workshop, affiliated with Eurocrypt 2026, in May.
