---
title: Weekly development report as of 2026-06-05
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/58c83478-d9f2-41bd-9e52-3f217c1db8f3/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team published release benchmarks for node v.11.0.1 and ran feature benchmarks for `TxSubmissionLogicV2` and compiler version comparisons. On the development side, the team removed legacy tracing and completed work on genesis caching and post-processing infrastructure. The `cardano-tracer` HTTP API for metric time-series queries and Grafana datasource integration is also complete and awaiting merge. Leios mempool benchmarks using `tx-centrifuge` are underway. Finally, the team merged the formal trace schema definition with the conformance framework to be presented at the Porto workshop. [Learn more here](https://updates.cardano.intersectmbo.org/2026-05-29-performance-and-tracing#benchmarking).

The **consensus** team worked on Leios prototype development, starting the migration to the Dijkstra era of the Cardano node, enabling stake pool operator key registration, and aligning the prototype with the audited BLS cryptography. Work is ongoing on endorser block application, [mempool partitioning](https://github.com/IntersectMBO/ouroboros-consensus/pull/2047), and [throughput dashboard](https://github.com/input-output-hk/ouroboros-leios/pull/929) integration.

On fetch and network design, the team continued investigating multi-peer endorser block fetch strategies, refined the safety argument for Linear Leios, and concluded that erasure coding is unlikely to pay off at this stage. The change to the committee selection scheme was merged into the Leios SIP, reducing the certificate size from around 8 kB to 200 bytes.

The team also began discussions on mempool design for Leios, with approaches under consideration including two distinct mempools and a directed acyclic graph for the ledger.

As part of the UTXO-HD and Ledger-HD initiatives, work continued on the UTXO-HD redesign, [LSM](https://github.com/IntersectMBO/ouroboros-consensus/pull/2021) snapshot export, and the migration of InstantStake to the [redesigned UTXO-HD](https://github.com/IntersectMBO/ouroboros-consensus/pull/2049) as a pattern for the remaining datasets. Finally, the team worked on predictable [ledger state snapshots](https://github.com/IntersectMBO/cardano-node/pull/6526) in cardano-node and on enabling search on the consensus documentation site.

### WALLETS AND SERVICES

This week, the **Lace** team [released Lace 2.0.6](https://x.com/lace_io/status/2059189482218275040). This release resolves the issue with DRep ID message signing on mnemonic wallets, enabling authentication for the Intersect Hydra voting DApp. DRep IDs are now displayed in CIP-129 format for improved clarity and compatibility, stake key message signing is supported on Ledger hardware wallets, and connected accounts are always shown during message signing flows. The release also fixes an issue where network selection was not always preserved when migrating from Lace v1 to v2.

### SCALING

This week, the **Hydra** team merged the [partial fanout feature](https://github.com/cardano-scaling/hydra/pull/2324) and is preparing for the release. Heads with large UTXO sets can now be fanned out in multiple steps, each verified on-chain via a BLS accumulator membership proof, with the chunk size dynamically determined by binary search to maximize outputs per step. This removes the previous limit on UTXOs per head. Alongside this, the `hydra-tui` received a [significant refactor](https://github.com/cardano-scaling/hydra/pull/2590), the test suite [migrated](https://github.com/cardano-scaling/hydra/pull/2620) to `tasty`, and several correctness fixes landed around cross-head event contamination and recovered deposits leaking back into L2.

The **Mithril** team completed [caching](https://github.com/input-output-hk/mithril/issues/3043) of circuit keys for the SNARK circuit in the STM library and [removed](https://github.com/input-output-hk/mithril/issues/3132) the helpers module for the SNARK recursive circuit. They continued work on the [type consistency](https://github.com/input-output-hk/mithril/issues/3128) and [naming](https://github.com/input-output-hk/mithril/issues/3130) alignment refactoring of the SNARK recursive circuit, the [prover input](https://github.com/input-output-hk/mithril/issues/3138) of the recursive SNARK aggregation primitives, and the implementation of the SNARK-friendly [genesis certificate](https://github.com/input-output-hk/mithril/issues/3145).

The team also completed enhancements to support the [genesis verification key](https://github.com/input-output-hk/mithril/issues/3270) in the explorer. They continued work on shipping the Mithril [signer node](https://github.com/input-output-hk/mithril/issues/3011) binary in the Cardano node bundle, enforcing the DMQ message ID format, prototyping the Cardano node ledger state certification, and removing Mithril node support in mithril-devnet.

Finally, the team worked on optimizing [end-to-end tests](https://github.com/input-output-hk/mithril/issues/3151) for SNARK and fixing flakiness in the CI.

### RESEARCH

This week, the **research** team is sharing content from last week's Cardano R&D session, which delved deeper into the IOR proposal, focusing on post-quantum security, exploratory research on [sharding](https://x.com/IOGroup/status/2062219641921957922), and updates on consensus, scalability, and other workstreams in Cardano Vision 2026. If you missed the event or want to catch up on discussions, you can watch the [recording](https://www.youtube.com/watch?v=tqmBqacN8G4&feature=youtu.be&utm_campaign=8896168-IO%20Research&utm_medium=email&_hsenc=p2ANqtz--6LzIp8g0af5huviD-3YU43yTkozknp-OUiOxVBe8fAqtPX3SmDq3XYM2Qf3b-jTPGkuKIASWrdlRirnqYbf7vqIgmQw&_hsmi=421784278&utm_content=421784278&utm_source=hs_email). 

The team has also published a [blog post on Linear Leios](https://www.iog.io/news/the-leios-roadmap-to-solving-the-blockchain-trilemma) outlining the Leios roadmap to solve the blockchain trilemma.

The [IOR proposal](https://momentum.cardano.iog.io/) future-proofs Cardano. We are down to the final days – make your vote count today!  Voting is open until June 8.
