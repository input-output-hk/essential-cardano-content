---
title: Weekly development report as of 2026-05-15
tags:
  - Weekly development updates
  - development
  - Statistics
url: ""
image: https://ucarecdn.com/53307ce6-397f-45ec-9c18-89aa95a24f0c/
image_text: ""
---

### CORE TECHNOLOGY

This week, IO’s **core technology** teams released [Cardano node v.11.0.1](https://github.com/IntersectMBO/cardano-node/releases/tag/11.0.1), the first release to support the protocol version 11 intra-era hard fork. This enables the upgrade to protocol version 11 once the hard fork governance action has been voted on by stake pool operators, delegated representatives, and the constitutional committee, and enacted on the chain. The release also bumps `cardano-api` and `cardano-cli` to their 11.0 series and advances the experimental hard fork target to protocol version 12. Additionally, it adds HTTPS support for EKG and Prometheus metric servers in `cardano-tracer`, along with a new timeseries store exposed via REST API.

Benchmarking reports relevant to the 11.0.1 release are available in [this post](https://updates.cardano.intersectmbo.org/reports/2026-05-performance-11.0.1).

The **ledger** team continued preparations for the upcoming Dijkstra era.

On [CIP-118 nested transactions](https://github.com/polinavino/CIPs/blob/polina/CIP0118/CIP-0118/README.md), the team updated the CDDL specification of `block` to match CIP-0176 non-segregated block body [serialization](https://github.com/cardano-foundation/CIPs/pull/1084), added a dedicated `block_body`, and added an `EncCBORGroup` instance for `DijkstraBlockBody` to unblock downstream integration in consensus. They also fixed serialization for `DijkstraTx` and integrated `StAnnTx` – the state-annotated transaction representation that memoizes the Plutus parts of validation – into the `LEDGER`, `UTXOW`, `UTXO`, and `MEMPOOL` rules across every era, realizing the performance benefits of earlier memoization work end to end. Several guards were also added to the Plutus V1–V3 context translation so that new Dijkstra features unsupported by older language versions cause translation to fail explicitly rather than silently producing an incorrect context. The team also completed preparation work for running conformance tests in Dijkstra and began reorganizing the test hierarchy around a new class-based `ImpSpec` approach that enforces a common set of tests across all eras.

On the **Ledger-HD**, the streaming infrastructure for injecting large volumes of data from genesis files is now complete, covering stake pools and the remaining state needed for testing and benchmarking work targeting constant-memory reads from disk.

The [CIP-165 canonical ledger state](https://github.com/cardano-foundation/CIPs/pull/1083) expansion continued with two additional namespaces added under the new namespace-based query interface: `entities/dreps/v0` and `entities/stake_pools/vrf_key_hashes/v0`.

Finally, on the maintenance side, the team expanded examples and added golden tests for all queries migrated from consensus to ledger, and did the same for transaction examples. They published the changelog for the `cardano-node-11.0` release, made `ZeroTreasuryWithdrawals` a permanent governance check for every era, starting with Conway, and switched `ChainData` and `Attributes` to use `ByteArray` instead of `ByteString` to avoid pinned-memory fragmentation. Finally, they adjusted several `NoThunks` instances and fixed a `cuddle` failure on Plutus `Constr` data and a bug in its CDDL spec definition.

### SMART CONTRACTS

This week, the **Plutus** team published a [blog post](https://www.iog.io/news/uplc-command-line-tool) about the improved UPLC command-line tool. Among other things, the tool can optimize Plutus scripts, with experiments on recent mainnet scripts indicating average execution cost savings of more than 10%.

Several further improvements to UPLC optimization have been integrated into the tool in recent weeks, including a new `--inline-unconditional-growth` flag for tuning inliner aggressiveness, Agda certifiers for several optimization passes, a new constant-folding pass, and a pass that hoists polymorphic built-ins to reduce the use of force. Common subexpression elimination (CSE) has also been improved.

Feedback, bug reports, and ideas for further improvements are welcome via GitHub issues in the [Plutus repository](https://github.com/IntersectMBO/plutus).

### SCALING

This week, the **Hydra** team released [hydra-node 2.1.0](https://github.com/cardano-scaling/hydra/releases/tag/2.1.0), bringing improved deposit security, a new SQLite-backed event store, a ~7% reduction in snapshot confirmation latency, and compatibility with the Cardano node protocol version 12+. All operators are encouraged to upgrade. 

The team also [upgraded](https://github.com/cardano-scaling/hydra/pull/2607) to cardano-api 11.1 and cardano-node 11.0.1 to support protocol version 12+, and [switched](https://github.com/cardano-scaling/hydra/pull/2599) from a lazy to a strict Map to reduce memory pressure during transaction processing. Work continues on partial fanout and a user-friendly configuration file for `hydra-node` to replace the current command-line flags.

The **Mithril** team completed the [trusted setup](https://github.com/input-output-hk/mithril/issues/2944) validation for the SNARK circuit in the STM library, the implementation of standard [Schnorr signatures](https://github.com/input-output-hk/mithril/issues/3136) in the STM library, the implementation of the SNARK-friendly [protocol message](https://github.com/input-output-hk/mithril/issues/3146), the in-circuit and off-circuit verification tests for the recursive SNARK circuit prototype, the preparation of the recursive circuit refactoring, and the preparation of the prover input implementation in the STM library.

The team also prepared the ledger state certification proof of concept and continued work on enforcing the [DMQ message ID format](https://github.com/input-output-hk/mithril/issues/3251).

Finally, they completed the upgrade to Cardano node [v.11.0](https://github.com/input-output-hk/mithril/issues/3257), updated all GitHub runners to [Ubuntu 24.04](https://github.com/input-output-hk/mithril/issues/3246), and continued work on robust support for unknown and in-progress signed entity types.

### RESEARCH

This week, the **research** team held a session on [Cardano Over Coffee](https://x.com/i/status/2054917489604084177) to discuss the IOR treasury proposal, hosted by Fergie Miller, director of research partnerships. The team is also hosting an X Space next week with Aggelos Kiayias, chief scientist at IO. Details will be shared on our socials soon!
