---
title: Weekly development report as of 2026-05-22
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/f8c2c2b7-8df3-4a71-bee9-dd5f3fdc07b3/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team delivered the first voting capability in the Leios prototype: nodes now diffuse votes over a dedicated mini-protocol, and a voting thread casts votes on completed endorser-block closures. This forms the foundation for committee-based endorsement and is exercised by new threadnet property tests ([#1963](https://github.com/IntersectMBO/ouroboros-consensus/pull/1963)).

The team continued working on Leios, reworking the prototype branch to target the same `ouroboros-consensus-3.0.1.0` release delivered as part of `cardano-node` v.11.0.1, so downstream consumers building against that node release can pick up Leios without a separate consensus branch ([#2041](https://github.com/IntersectMBO/ouroboros-consensus/pull/2041)). The team is also adding late-join support, so a node joining the network after an endorser block was produced can still resolve the resulting certified blocks ([#2040](https://github.com/IntersectMBO/ouroboros-consensus/pull/2040)), and replacing the placeholder voting from [#1963](https://github.com/IntersectMBO/ouroboros-consensus/pull/1963) with stake-based committee selection and real BLS signatures, so votes are individually validated before being relayed ([#2039](https://github.com/IntersectMBO/ouroboros-consensus/pull/2039)). Performance work on the in-memory Leios database is also underway, addressing contention and laziness issues that were causing nodes to time out under load ([#2032](https://github.com/IntersectMBO/ouroboros-consensus/pull/2032)).

As part of treasury funding initiative 10, the team retired the V1 LedgerDB implementation and the LMDB backing store. V2 has been the default for some time; removing V1 deletes a substantial amount of unreachable code, drops the LMDB dependency, and simplifies the LedgerDB API – snapshots no longer block the caller, and the `tryFlush` no-op has been removed ([#2030](https://github.com/IntersectMBO/ouroboros-consensus/pull/2030)). This paves the way for adding more tables to the ledger state and storing them on disk.

### WALLETS AND SERVICES

**Lace** is now available on [iOS](https://apps.apple.com/us/app/lace-wallet/id6743856101), completing the multi-platform rollout launched with Lace 2.0. One wallet, three chains, available on browser and mobile.

### SCALING

The **Mithril** team completed the [refactoring](https://github.com/input-output-hk/mithril/issues/3126) of the recursive circuit, the preparation of the prover input implementation in the [STM library](https://github.com/input-output-hk/mithril/issues/3137), the off-circuit [verification tests](https://github.com/input-output-hk/mithril/issues/3193) for the recursive SNARK circuit prototype, and the replacement of the temporary certificate circuit with the STM circuit. They also continued work on circuit [key caching](https://github.com/input-output-hk/mithril/issues/3043) for the SNARK circuit in the STM library, the recursive SNARK aggregation primitives prover input, the preparation of the SNARK-friendly genesis certificate implementation, and the non-recursive certificate circuit benchmarks.

Additionally, the team continued work on shipping the Mithril [signer node binary](https://github.com/input-output-hk/mithril/issues/3011) in the Cardano node bundle, robust support for unknown and in-progress signed entity types, enforcement of the [DMQ message ID format](https://github.com/input-output-hk/mithril/issues/3251), and enhancements to immutable file synchronization for the Cardano database.

Finally, the team completed enforcement of [Mithril crate versions](https://github.com/input-output-hk/mithril/issues/3245) in downstream Mithril crates and added more details to the protocol security page on the website.

### RESEARCH

This week, the **research** team hosted an [X Space](https://x.com/i/spaces/1DGLdvLZqPzGm/peek?s=20) featuring Charles Hoskinson and Professor Aggelos Kiayias to dive into the [IOR proposal](https://momentum.cardano.iog.io/proposals/input-output-research). The discussion centered on the three themes of the proposal: **post-quantum security**, **scalability**, and **human-centered design**. The speakers emphasized that Cardano’s first-principles methodology is the soul of the brand. This approach has been vindicated, as other ecosystems are pivoting towards the same peer-reviewed, academic, research-based foundations that Cardano pioneered.

Ultimately, the session underscored that a positive [vote](https://adastat.net/governances/5ad10ad39f49a0f93ac91e70482f114fdbcbc05b20ac774dbe23a82efbcb820a00) on this pivotal proposal is an investment in future-proofing Cardano, ensuring it retains its science-based advantage and remains the industry leader in evidence-based blockchain development.
