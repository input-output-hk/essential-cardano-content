---
title: Weekly development report as of 2026-05-29
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/c001fabf-5806-4665-b233-911093db767e/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **ledger** team focused on the Plutus context performance work: the validation rules now consume precomputed information stored in `StAnnTx` rather than recomputing it, completing an optimization arc spanning several cycles. In parallel, work began on removing the legacy `Coders` machinery from the codebase, with several call sites already migrated to a new `SparseKeyed` alternative.

On the Dijkstra era front, the team introduced a dedicated `transaction_mempool` rule to distinguish the mempool transaction decoder from the one used inside the block body, tightened the `chain_code` specification to 32 bytes, and completed a fixes pass ensuring all CDDL tests pass. 

Conformance testing preparation for Dijkstra also advanced, and the canonical ledger state work continued with a new `entities/accounts/v0` namespace and a refactor of `gov/proposals/v0` to preserve proposal order.

Finally, the team added two new microbenchmarks for the `TICK` and `NEWEPOCH` rules to support epoch transition performance analysis, and introduced a new `generate-cbor` CLI tool for generating CBOR for any rule in any era from the command line – useful both internally and for downstream consumers such as serialization libraries and alternative node implementations.

### SMART CONTRACTS

This week, the **High Assurance** team completed formalizing the latest built-ins, arrays, and values, and achieved 100% compliance with the conformance test suite. The tool is ready for the upcoming hard fork changes and will run on the latest release of Plutus core.

Last but not least, the community granted funding to the consortium between Harmonic Labs, IO, Lantr, Midgard Labs, No.Witness Labs, SAIB, and TxPipe to develop an extended version of Blaster, integrate it into Aiken, Pebble, Futura, and Scalus, and improve the user experience through a container-based development environment, Visual Studio Code extensions, and generic property sets and security checks.

### SCALING

This week, the **Mithril** team completed the analysis of the [impact](https://github.com/input-output-hk/mithril/issues/3133) of the recursive SNARK on the security of the Mithril protocol, implemented [benchmarks](https://github.com/input-output-hk/mithril/issues/3154) for the non-recursive SNARK, and [refactored](https://github.com/input-output-hk/mithril/issues/3127) the error handling of the SNARK recursive circuit. They continued work on circuit key caching for the SNARK circuit in the STM library, removing the helpers module for the SNARK recursive circuit, the prover input for the recursive SNARK aggregation primitives, and implementing the SNARK-friendly genesis certificate.

They also enhanced the [synchronization](https://github.com/input-output-hk/mithril/issues/3243) of immutable files in the Cardano database, implemented [robust support](https://github.com/input-output-hk/mithril/issues/3172) for unknown and in-progress signed entity types, removed the Cardano database `v1` backend, and continued working on the prototype for Cardano node ledger state certification. Additionally, they enforced the DMQ message ID format and enhanced the support of the genesis verification key in the explorer.

Finally, the team completed the update of the protocol [security page](https://github.com/input-output-hk/mithril/issues/2703) on the website and continued work on shipping the Mithril signer node binary in the Cardano node bundle.

This week, the **Leios** team made progress across protocol design, implementation, and testing.

The Cardano community voted to approve Leios' funding through the treasury with 88% support, and the on-chain action is poised for enactment. This secures the resources needed to carry Leios from prototype to mainnet hard fork.

On the protocol design side, the team merged an update to CIP-0164 that replaces the original voting committee design with a stake-based committee selection scheme. The practical effect is a significant reduction in certificate size – from ~8 kB to~ 200 bytes, roughly 40× smaller – reducing bandwidth, storage, and validation cost on every block.

The Leios reference implementation was successfully rebased onto Dijkstra, the upcoming Cardano ledger era, in a cross-team effort spanning the ledger, network, consensus, and node repositories.

Finally, the dedicated red team demonstrated Piranha, a new attack-simulation tool designed to coordinate and evaluate attacks on the protocol, supporting the high-confidence testing track.

### VOLTAIRE

Cardano’s constitutional committee elections are coming, with candidate registration now open, and voting scheduled from June 13 to July 13. As usual, Intersect has stepped in to represent the community in facilitating this election, even though it is a Cardano election, not an Intersect one.

Candidate registration closes on Saturday, May 30, so there’s still time to go to the [voting page](https://docs.hydra-voting.intersectmbo.org/cc-elections-2026/cc-election-application/how-to-apply-for-cc-elections) and submit your application. However, note that, unlike in previous years, when generating credentials before registering was optional, this year **it is mandatory.**

### RESEARCH

This week, the **research** team hosted the first Cardano R&D session of 2026, in which researchers outlined the workstreams of the [IOR proposal](https://momentum.cardano.iog.io/proposals/input-output-research) that will shape Cardano’s development. They discussed post-quantum security, Ouroboros Leios, ZK capabilities for Cardano, and explored examples of foundational research such as sharding, incentives, and relationship credentials. 

Voting on the IOR proposal is open for DReps until June 8.
