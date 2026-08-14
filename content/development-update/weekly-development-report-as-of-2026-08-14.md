---
title: Weekly development report as of 2026-08-14
slug: weekly-development-report-as-of-2026-08-14
tags:
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/0159961b-a773-430d-b858-216326f0ce42/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team released `prototype-2026w32` and continued advancing Leios prototype development. The node now generates and sends endorser-block announcements to peers, which is the first step toward full announcement-based diffusion. The team also added validation to reject malformed Dijkstra blocks and fixed several testnet observability issues, including the visualizer losing events and incorrect throughput dashboard units.

On node performance, the team removed allocations from transaction identifier comparisons – making them roughly five times faster – reduced allocations in mempool snapshot code, and simplified how the mempool moves transactions into a newer era.

The team released ouroboros-consensus 4.0.0.0 and 4.1, and enabled the node to hard fork into the next Dijkstra era. The default snapshot policy was updated to one snapshot per day on mainnet, keeping the node aligned with Mithril. Finally, they [added](https://github.com/IntersectMBO/ouroboros-consensus/blob/30c1d802d103f3d4c6bd1694789a19240c43cbf1/docs/website/contents/explanations/hard_forks_and_node_to_node_versioning.md) a new documentation page covering hard forks and node-to-node versioning.

See this [update](https://github.com/IntersectMBO/cardano-updates/blob/7ad1838fa8c7acbd3a683d654b364e0ffbddb7ed/blog/2026-08-11-consensus.md) for more details.

### SMART CONTRACTS

Over the past two weeks, the **Plutus** team opened two CIPs and one CPS for community review:

*   [CIP-0194](https://github.com/cardano-foundation/CIPs/pull/1236) proposes adding a Match node to UPLC for matching on built-in constants, primarily `Data`. This would make consuming script contexts in validators significantly cheaper than the current approach. [](https://github.com/cardano-foundation/CIPs/pull/1238)
    
*   [CIP-0195](https://github.com/cardano-foundation/CIPs/pull/1238) specifies the `Data` encoding of the Plutus V4 ledger types. 
    
*   A [new CPS](https://github.com/cardano-foundation/CIPs/pull/1244) aims to build community consensus on how to expose property tests and tests for older protocol and language versions to alternative node and UPLC evaluator implementers with minimal integration effort. Feedback on all three is welcome.
    

The team also merged the CollapseCase optimization pass, which rewrites list casing into dropList where applicable, updated the UPLC tool to deduce input and output formats from file extensions, and released Plutus V4 ledger API types in version 1.67.0.0.

### DEVELOPER EXPERIENCE

This week, the **developer experience** team delivered 41 commits across four active deliverables, focusing on hardening and design.

The ecosystem [map](https://input-output-hk.github.io/devx-updates/map/graph/) continued to serve as a living baseline following the D1 delivery, with significant curation around adding several new tools and stake pool explorers, including ODATANO, [adapools.xyz](//adapools.xyz), and Daedalus. OSS filtering was improved, and the developer pledge welcomed two new signatories.

On cardano-init, the team focused on making the tooling reliable and transparent under real conditions. They merged Yaci devnet CI coverage – the last scaffolding role without test coverage – and introduced a strict mode that converts silent skips into hard failures, ensuring a passing run genuinely proves that the devnet is booted and the full transaction round-trip is executed. They also introduced an experimental-tools gate, which flags tools that are not yet production-ready and prevents them from being scaffolded without explicit user confirmation.

The contracts-library saw 19 commits this week. The main contribution was a draft architecture for CIP-113 event-triggered assets – a design that allows tokens to respond automatically to real-world events through oracle data feeds, with built-in rules for how tokens can be transferred, upgraded, or retired. The team also expanded the library's catalog of contract explorations to include peer-to-peer swaps and prediction markets.

On the Cardano Foundation's Developer Portal, the team merged the beginner lecture track with improved lessons, theme-safe diagrams, and runnable Mesh examples. Building on this, intermediate lectures opened covering on-chain versus off-chain concepts, now also backed by runnable Aiken examples.

See the [developer experience webpage](https://input-output-hk.github.io/devx-updates/) for more details.

### SCALING

This week, the **Hydra** team launched a new [updates tracking](https://cardano-scaling.github.io/hydra-updates/) webpage to improve visibility into ongoing work.

Across 9 merged PRs, 7 closed issues, and 48 commits, the team delivered progress across maintenance, performance, and ecosystem support. On the maintenance side, deposits too large to be claimed are now rejected, preventing funds from being locked on-chain with no path to redemption. They also updated Mithril to 2630.0 with the v2 database backend, fixed macOS release binaries to run without Nix, and resolved a Plutus time-conversion failure and a long-running-node era-history bug.

The team also merged the `--deposit-activation` flag, giving operators independent control over deposit activation timing. On the performance side, they extended the fanout benchmark to vary party counts and closed two `PersistentQueue` bugs affecting queue visibility and pop behavior. Documentation improvements from the previous week also landed, including the partial fanout page and several rendering and dark mode fixes.

See [technical details](https://cardano-scaling.github.io/hydra-updates/updates/2026-w32/).

### RESEARCH

This week, the **Research** team is preparing the final version of the mid-year report to submit to Intersect. Additionally, two research papers by Aggelos Kiayias will be presented at [Crypto ‘26](https://crypto.iacr.org/2026/) in Santa Barbara, USA, next week: [Fast Difficulty Adjustment in Proof-of-Work Consensus](https://eprint.iacr.org/2026/1116.pdf) by Juan Garay, Aggelos Kiayias, Yu Shen &

[Permissionless Consensus from a Common Random String](https://eprint.iacr.org/2026/1179.pdf) by Damiano Abram, Marshall Ball, Juan Garay, Aggelos Kiayias.
