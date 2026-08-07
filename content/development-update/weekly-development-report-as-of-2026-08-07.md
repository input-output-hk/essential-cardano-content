---
title: Weekly development report as of 2026-08-07
slug: weekly-development-report-as-of-2026-08-07
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/365f6b0c-b0b8-4ce4-a1f8-4cf4501464e7/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team completed benchmarks for the Van Rossem hard fork, covering new Plutus execution budgets, internals, and a PlutusV3 baseline shift. The team also finalized the Hermod package restructure, added `cardano-config` support to `trace-dispatcher`, and delivered the genesis cache overhaul and protocol version 11 overlay.

On the tracing side, an alert manager feature for `cardano-tracer` is in the design phase, and native span support is underway in Hermod. For Leios, the team introduced a new `beacon` feature to impose memory limits, and benchmarking of on-disk LedgerDB transaction validation times is in progress.

See this [technical update](https://updates.cardano.intersectmbo.org/2026-07-31-performance-and-tracing#low-level-overview) for more details.

The **ledger** team advanced Leios support by replacing placeholder types with an actual BLS key in pool parameters, and added a dedicated round-trip test suite covering Praos and Leios block-header serialization.

On nested transactions in Dijkstra, the team implemented the withdrawal mechanism for sub-transactions, reworked predicate failures to be more precise and consistent, and settled how UTXO state updates behave under nested transactions. The AdaPots obligations guardrail was updated accordingly, and a field for the initial account balance was added to the top-level transaction body.

On the Plutus side, the team introduced a per-block script cache so scripts decoded for one transaction can be reused within the same block, and added memoization for script hash computation.

Two CIPs advanced this cycle: the team implemented CIP-50 (pledge-leverage-based staking rewards) and began groundwork for CIP-23 by adding the `minPoolMargin` protocol parameter to the Dijkstra era. Test coverage was expanded by enabling the Conway conformance suite in Dijkstra and adding new tests around stake calculations and sub-transactions.

### SMART CONTRACTS

The **Cardano High Assurance** team delivered a collection of optimizations for `lean-blaster` that resulted in a 30% performance improvement on smart contract benchmarks. They also added support for [CVC5](https://cvc5.github.io/), which is currently in review. This aims to increase performance through parallel solving, access to additional theory solvers, and a standardized proof format for proof reconstruction.

The Visual Studio Code extension for property-based testing has also been made available for internal testing.

### DEVELOPER EXPERIENCE

The **developer experience** team completed the Community Alignment deliverable (D1) ahead of the July 31 deadline. The milestone required a [public map of the Cardano development ecosystem](https://input-output-hk.github.io/devx-updates/map/graph/) and a repository of key projects willing to collaborate on the shared roadmap – both are now in place.

The ecosystem map went live, offering graph, table, and analysis views backed by a curated dataset of Cardano tooling with identified gaps and overlaps. The signatory list for the developer pledge continued to grow, with several new names joining from across the ecosystem.

On `cardano-init`, the team merged a dependency-installer verification gate – a CI step that installs each declared dependency in a native environment and checks that binaries land on PATH. Standing up the gate also surfaced and fixed several broken installer recipes.

The `contracts-library` saw 17 commits as previously cataloged explorations continue to take shape as ready-to-audit contract code. The Cardano Foundation's Developer Portal onboarding flow also advanced with 28 commits.

With D1 complete, focus shifts to the cardano-init specifications and proof-of-concept milestone, due August 31.

### SCALING

Over the past few weeks, the **Hydra** team released [2.3.0](https://github.com/cardano-scaling/hydra/releases/tag/2.3.0), headlined by a significant snapshot-processing speedup via the `reapplyTx` optimization, node configuration via a YAML file, native HD wallet key support, and several resilience fixes.

The team also worked on a major performance stack improving accumulator commitment computation – reducing a 4K-UTXO commitment from 2.13 seconds to 25 ms – alongside batched broadcast messages, raised transaction limits per snapshot from 100 to 1,000, and moved SQLite event encoding off the main node loop.

The team also implemented selective partial fanout, allowing operators to distribute a chosen subset of a closed head's UTXO rather than the full set. The deposit period is now embedded on-chain at initialization, a new `--deposit-activation` flag decouples activation from deadline calculation, and the commit endpoint now rejects deposits that could never be claimed.

Additionally, the team fixed a long-running issue where nodes rejected layer 2 Plutus transactions carrying a validity bound past the era forecast horizon, made `hydra-chain-observer` version-aware to remove compile-time coupling to a single protocol version, and fixed several usability issues in `hydra-tui`. Finally, they bumped Mithril to `2630.0` and switched to the v2 database backend.

### RESEARCH

This week, the **IO** **research** team is gathering feedback from the community on the Cardano Vision ‘26 Mid-Year report, which is available for review on the [Cardano Forum](https://forum.cardano.org/t/ior-cardano-vision-work-program-2026-mid-year-report-draft/155740). The [Cardano R&D session](https://www.youtube.com/watch?v=_H2jciyeL08&feature=youtu.be) held on July 16 also focused on updates from across the Cardano Vision ‘26 work streams. 

Additionally, members of the team recently attended the [Science of Blockchain conference](https://www.sbc-conference.com/2026/) at Stanford University and the mini conference of the [Stanford Input-Output Research Hub](https://tselab.stanford.edu/iorh/). The focus of this year was, among other topics, on censorship resistance, bridging Bitcoin to other chains, and the threats that quantum computers might present for deployed blockchains in the near future.
