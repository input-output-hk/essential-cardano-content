---
title: Weekly development report as of 2026-07-17
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/37b793bc-bda4-4947-9812-ca744ce8cdec/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team continued to stabilize the Leios testnet, releasing two prototype builds – [prototype-2026w27a](https://github.com/input-output-hk/ouroboros-leios/pull/978) and [prototype-2026w28](https://github.com/input-output-hk/ouroboros-leios/pull/986) – and fixing several bugs identified during testnet runs. The team also implemented a [voting dashboard](https://github.com/input-output-hk/ouroboros-leios/pull/985) to improve Leios observability, showing how endorser blocks are voted on and certified. They also reviewed a change to the endorser block certification, expected to roughly double the certification rate and increase throughput, and began drafting the Leios high-level design document.

Additionally, the team participated in the node diversity conformance testing meetings with the Amaru team and discussed how to specify the mempool and transaction submission precisely enough for other node implementations to follow.

They also improved the `snapshot-converter` tool's help and version output, making it clearer how to convert ledger snapshots between in-memory and on-disk formats ([#2098](https://github.com/IntersectMBO/ouroboros-consensus/pull/2098)), and added a reference document covering the metrics and tracing available for observing Ouroboros Genesis ([#2103](https://github.com/IntersectMBO/ouroboros-consensus/pull/2103)).

See this [technical update](https://updates.cardano.intersectmbo.org/2026-07-14-consensus) for more details.

### SMART CONTRACTS 

This week, the **Cardano High Assurance** team delivered the Plinth Static Analyzer. It is available on the Visual Studio Marketplace – [Plu-Stan (VS Code/Cursor)](https://marketplace.visualstudio.com/items?itemName=IOG.vscode-plustan). It comes with a set of binaries for an easy 1-click installation for most projects and architectures. It is still in its early phase, and all feedback is welcome.

The team also delivered the [JSON-RPC](https://github.com/input-output-hk/sc-testing-tools-vs-extension) implementation, which will serve as the backend for the property-based testing tool Visual Studio extension next quarter.

Finally, the team drafted the [Universal Annotation Language specification](https://github.com/input-output-hk/UniversalAnnotationLanguage), and several examples are being annotated with it. This will be used in surface languages (eg, Plinth) to directly annotate the business logic and security invariants of the various DApp smart contracts.

### SCALING

This week, the **Mithril** team completed the modularity enhancement of the SNARK recursive circuit with gadgets. They continued work on refactoring the non-recursive SNARK proof to avoid carrying the circuit verification key, analyzing and optimizing the testing strategy for the STM SNARK modules, and upgrading the `midnight-zk` library to `2.3.3`.

The team also enhanced the aggregator state machine to support the `Blocked` state and continued implementing the aggregator CLI commands for decentralized configuration parameters. Additionally, they continued shipping the Mithril signer node binary in the Cardano node bundle, working on the release of the `2628` distribution, upgrading to Cardano node v.`11.1`, and updating the DMQ node to `0.7.0.0`.

Finally, the team completed the Rust upgrade to version `1.97`, fixed the Mithril install script failing on the `unstable` version, and captured the end-to-end execution logs as artifacts.

### VOLTAIRE 

The van Rossem hard fork governance action met the required ratification thresholds across all voting groups on July 13 and was subsequently ratified at the epoch boundary of Epoch 643. According to protocol, the hard fork will automatically be enacted on the next epoch boundary on July 18, 2026 at 21:44:51 UTC (slot height: 192,844,800).

As well as Plutus improvements and Plutus Cost Model enhancements, this upgrade lays the foundation for the next upgrade, the Dijkstra era hard fork, which will introduce Ouroboros Leios to Cardano.

No other governance actions were directly impacted, delayed, or expired as a result of the hard fork governance action reaching ratification.

### RESEARCH

This week, the **research** team released the [Cardano Vision 2026](https://docs.google.com/document/d/1kZQIcSBOzrDE7X0nxQySNG3X6uonLoXRk-yzMqE_43Q/edit?tab=t.tm862zhlc1y9)

[Mid-Year Progress & Transparency Report (Draft)](https://docs.google.com/document/d/1kZQIcSBOzrDE7X0nxQySNG3X6uonLoXRk-yzMqE_43Q/edit?tab=t.tm862zhlc1y9). This report is open for community feedback until Jul 30, 2026.

They also held their second Cardano R&D session, during which the research leads shared updates on CV26 workstreams and the draft Mid-Year report. They also held a [technical workshop](https://www.youtube.com/watch?v=x0FX6YpXbmE) on zero-knowledge (ZK) verification infrastructure for Cardano, which included presentations on Groth 16, Plonky 3, and Halo 2.
