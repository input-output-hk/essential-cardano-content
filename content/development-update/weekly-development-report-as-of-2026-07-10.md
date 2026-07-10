---
title: Weekly development report as of 2026-07-10
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/c7b59173-2143-4b92-adec-872565412b80/
image_text: ""
---

### CORE TECHNOLOGY

This month, the **performance and tracing** team removed the legacy `iohk-monitoring`\-based tracing backend from `cardano-node`, eliminating approximately 11,000 lines of outdated code across 15 modules and nine transitive build dependencies. The team also removed RTView from cardano-tracer, with its functionality now fully covered by the Grafana datasource and timeseries server. Work is underway to restructure trace-dispatcher into two distinct packages – [hermod-tracing-api](https://github.com/IntersectMBO/hermod-tracing/tree/master/hermod-tracing-api) and [hermod-tracing-core](https://github.com/IntersectMBO/hermod-tracing/tree/master/hermod-tracing-core) – allowing downstream packages to avoid pulling in the full backend stack when only instrumentation is needed.

The cardano-tracer timeseries HTTP API and accompanying Grafana datasource were merged, providing PromQL-like queries over metric timeseries. The team also moved the cardano-recon-framework and trace-resources package into the [Hermod Tracing System](https://github.com/IntersectMBO/hermod-tracing/tree/master) project, and completed the genesis cache overhaul for the performance workbench – now close to merging.

Finally, benchmark optimizations showed a ~17% reduction in process CPU usage only under full saturation, with small increases of 3–6% in block adoption times. The default build remains recommended for the current Praos node.

The **ledger** team focused on several areas:

*   **Performance:** the `StAnnTx` memoization work was extended to Alonzo, completing integration across all relevant ledger eras. The long-running removal of the legacy `Coders` machinery also reached completion.
    
*   **Leios support:** the first Leios-related changes landed in the ledger, including the `LeiosCert` type added as an optional field to `DijkstraBlockBody` and a new `cardano-protocol` package to house protocol-level code.
    
*   **Dijkstra era:** work continued on ledger rule structural cleanup, including a new `ENTITIES` rule to handle withdrawals and direct deposits, and the third installment of Dijkstra conformance testing. The team also fixed two user-facing bugs – one affecting Plutus cost model overrides and one causing spurious `TxInfo` translation failures.
    
*   **Tooling and infrastructure:** the team moved `generate-cbor` CLI tool into `cardano-ledger-api`, added new Conway UTXO and script generators, and applied dependency updates across the stack.
    

### WALLETS AND SERVICES 

This week, **Lace** released **browser extension 2.1**, one of its biggest updates yet. Headlining the release is **wallet security check**, a new feature that helps users identify whether a wallet may have been affected by a known security incident, either when restoring a wallet or by running a check at any time, with clear guidance provided where relevant. 

Alongside this, Lace 2.1 introduces a host of improvements across the wallet, including enhanced token management, streamlined send flows, expanded DRep ID support, improved network resilience, a smoother DApp experience, hardware wallet enhancements, and numerous stability and usability upgrades. The release also sets the stage for the upcoming **Lace Carbon** opt-in beta, giving the community an early look at what's next while helping shape the future of Lace through feedback.

### SMART CONTRACTS 

Over the past weeks, the **Plutus** team has continued to make improvements across performance, tooling, and assurance.

*   **Performance and compiler improvements**. The team improved several parts of the Plutus optimization pipeline and ledger API implementation. This includes making common `Value` operations more efficient, adding a new compiler optimization for certain recursive functions, and fixing an optimization pass to preserve program behavior correctly.
    
*   **Better benchmarking and tooling**. They added lightweight benchmarking support to the UPLC executable, making it easier to sanity-check execution-time measurements for UPLC scripts and compare results against existing benchmark infrastructure.
    

*   **Specs and formal methods**. The team continued strengthening the foundations of Plutus by updating the UPLC specification for the built-in value type and related functions, and by improving the metatheory and certification infrastructure used to reason about compiler transformations. These changes make the formal-assurance workflow easier to maintain, debug, and scale to larger programs.
    

See these [pull requests](https://updates.cardano.intersectmbo.org/2026-07-08-plutus-core/#key-pull-requests-merged) for more details.

### DEVELOPER EXPERIENCE

The developer experience initiative officially kicked off last week, though work has been underway for several weeks now. Here is the current state:

*   A team of experts has been assembled across all deliverables
    
*   Work is ongoing in two of the three biggest workstreams: `contracts-library` and `cardano-init`; collaborators at the Cardano Foundation have significantly advanced the third workstream, optimizing onboarding on the Developer Portal, while the team finalized its contribution plan
    
*   [contracts-library](https://github.com/input-output-hk/contracts-library): the first reference contract is in place, with a set  of [20 reusable protocols and patterns](https://github.com/input-output-hk/contracts-library/issues/16) for research and triage
    
*   [cardano-init](https://github.com/input-output-hk/cardano-init): specifications, a rough proof of concept, and a plugin architecture are ready for community validation – simple projects using Aiken, MeshJS, and infrastructure can already be created.
    

Have feedback on developer experience on Cardano? The team welcomes input – whether it's something that could work better or ideas for what to prioritize next. Reach out to Robertino via [X](https://x.com/theroberm), [Discord](https://discord.com/channels/@me/665713765743853600), or [email](mailto:robertino.martinez@iohk.io).

### SCALING

This week, the **Hydra** team merged the user-friendly hydra-node configuration file ([#2581](https://github.com/cardano-scaling/hydra/pull/2581), [#2296](https://github.com/cardano-scaling/hydra/issues/2296)), allowing operators to run a head from a single YAML file and compare configurations against peers at a glance. The team also scoped deposit and recovery chain observations to the head that produced them, closing a long-standing cross-head contamination issue ([#2743](https://github.com/cardano-scaling/hydra/pull/2743), [#2606](https://github.com/cardano-scaling/hydra/issues/2606)). The Blockfrost backend now retries on HTTP errors instead of crashing and handles inline datums more reliably. 

Finally, the team fixed two issues in the event store's rotation logic – a race between VACUUM and streaming client history, and a deadlock in the network layer's outbound message queue that could silently halt broadcasting.

The **Mithril** team refactored the unsafe SNARK setup, prepared the prover input for the recursive SNARK aggregation primitives, decoupled the Midnight library in the SNARK recursive circuit, and tested that the degree of the SNARK circuits remains unchanged. They continued improving the modularity of the SNARK recursive circuit using gadgets.

The team also worked on enhancing the aggregator state machine to support the `Blocked` state and on capturing end-to-end execution logs in artifacts.

Finally, they continued work on shipping the Mithril signer node binary in the Cardano node bundle, releasing the `2628` distribution, upgrading the Cardano node to `11.1`, updating the DMQ node to `0.7.0.0`, and upgrading the `midnight-zk` library to `2.3.3`.

### VOLTAIRE 

Voting is proceeding in the constitutional committee election. DReps have until July 23 at 21:45 UTC to select their four preferred candidates from the ten people standing. See [this X post](https://x.com/lallymcclay/status/2075010085697302562?s=46&t=SDFfhQvJDm5El3itasWBEA) for more details.

### RESEARCH

This week, the **research** team is working on the Draft Mid-Year report for Cardano Vision 26. This mid-year report provides progress and transparency on all work streams. Links will be circulated soon on the Cardano Forum for community review.

The team also ran the first in a series of technical workshops on the Cardano Vision 26 programs, with this session focusing on zero-knowledge verification.
