---
title: Weekly development report as of 2026-04-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d3b92cd7-ef89-4ba1-8080-5c9d2eeb15bb/
image_text: Weekly development report as of 2026-04-17
---

### CORE TECHNOLOGY

This week, teams at Input Output are finalizing **2026 treasury proposals** for continued Cardano development. Nine proposals – spanning core protocol maintenance, consensus, upgrades, scaling, developer experience, smart contracts, and more – support a defined body of work, with clear ownership, timelines, and a direct link to Cardano’s 2030 vision. Once published, they will be accessible for community review and voting.

Starting next week, X Spaces sessions will cover each proposal group and its related development initiatives. Announcements, along with the treasury website launch, will be shared via [IO’s X account](https://x.com/IOGroup).

Last week, the **consensus** team implemented Leios endorser block (EB) inclusion in the consensus layer, adding EB announcement and certification tracking to blocks, along with a SQLite-based backend for querying EBs and certificates ([#1921](https://github.com/IntersectMBO/ouroboros-consensus/pull/1921)). They also progressed work on UTXO-HD by refactoring database initialization by changing `mkOpenState` in `ImmutableDB` and `VolatileDB` (#[1917](https://github.com/IntersectMBO/ouroboros-consensus/pull/1917)), and improved performance by caching transaction differences on first execution, addressing a hotspot observed during transaction revalidation on stressed nodes (#[1954](https://github.com/IntersectMBO/ouroboros-consensus/pull/1954)).

Additionally, the team released ouroboros-consensus [v2.0.0.0](https://github.com/IntersectMBO/ouroboros-consensus/pull/1947) and [v3.0.0.0](https://github.com/IntersectMBO/ouroboros-consensus/pull/1964), integrated [ouroboros-network 1.1.\*](https://github.com/IntersectMBO/ouroboros-consensus/pull/1943), and incorporated the latest consensus packages into `cardano-node` for the upcoming node [v.10.7 release](https://github.com/IntersectMBO/cardano-node/pull/6402). Finally, they fixed a flaky ChainDB StateMachine test related to iterators (#[1948](https://github.com/IntersectMBO/ouroboros-consensus/pull/1948)) and updated the consensus documentation by replacing the ‘Introduction’ page with a comprehensive system overview, including a C4 context diagram and clarifications on code organization and era evolution (#[1950](https://github.com/IntersectMBO/ouroboros-consensus/pull/1950)).

The **ledger** team focused on preparing for the Cardano node v.10.7.0 release, which includes the fixes and features required for the upcoming Van Rossum hard fork to protocol version 11. They also prepared for a subsequent v.10.7.1 release to address performance issues identified in the ledger component of v.10.7.0.

The team also identified and fixed several issues, primarily in the CDDL specification, supported by the recently integrated `AntiGen` tool for negative property testing of ledger serialization.

Additionally, the team introduced optimizations that improve chain validation and replay performance, and enhanced the ledger API used by consensus, resulting in clearer and safer boundaries between components.

For [CIP-118](https://github.com/cardano-foundation/CIPs/pull/862) (nested transactions), they defined two additional ledger rules, UTXO and UTXOW, enabling transaction processing in the Dijkstra era to account for sub-transactions. For [CIP-165](https://github.com/cardano-foundation/CIPs/pull/1083) (canonical ledger state), they applied fixes to the constitutional committee representation.

### WALLETS AND SERVICES

After supporting the Midnight mainnet launch, the **Lace** team is now focused on delivering Lace 2.0 for the extension and working on the mobile version.

### SMART CONTRACTS

The **Cardano High Assurance** team delivered a complete formalization of the [Cardano Ledger API for Lean 4](https://github.com/input-output-hk/CardanoLedgerApiBlaster). Together with the [PlutusCore, UPLC, CEK Machine formalization](https://github.com/input-output-hk//PlutusCoreBlaster), and the automated formal reasoning backend, [Blaster](https://github.com/input-output-hk/Lean-blaster), this gives anyone in the community the ability to express and formally verify smart contracts without needing to write a formal proof.

The team will be working on a set of tutorial examples across several possible use cases to guide any new user through verifying their smart contract.

### SCALING

This week, the **Mithril** team completed several SNARK-related tasks. They created a new module for the recursive SNARK circuit in the STM library, added support for test mode, refactored the bytes codec for forward and backward compatibility, synchronized updates from the non-recursive circuit prototype, prepared a testing plan for the IVC circuit, enhanced witness preparation for the non-recursive prover, and added golden tests for the recursive SNARK circuit prototype.

They also completed partial block range support, security parameter offset signing, and the WASM client implementation for Cardano blocks and transactions. In addition, they continued work on the explorer update and on documenting Cardano block and transaction signatures on the website. The team also progressed the upgrade to Cardano node v.10.7 and completed DMQ node updates to `0.4.1.0` and `0.4.2.0`.

Finally, they cross-compiled Windows builds from Linux using Nix, fixed node build failures in Hydra CI, and investigated a stoppage of SNARK aggregator certification on the dev network.

See this [technical update](https://updates.cardano.intersectmbo.org/2026-04-15-mithril#low-level-overview) for more details.

### VOLTAIRE

In the latest news on the **Intersect** committee elections, candidate applications closed today, Friday, April 17, with more candidates than available seats in all eight committees.

Voting opens on Monday, April 20, and runs until May 1. Each member’s vote carries the same weight, regardless of the amount of ada held. Each member is entitled to one vote for each available seat in each committee. For example, if there are five seats in a committee and seven candidates, a member can select five candidates. The same rules apply to each committee. Members can change their votes at any time until noon UTC on May 1.

To vote, log in to the [Intersect members’ area](https://members.intersectmbo.org/), select ‘Voting events’, and follow the prompts.

### RESEARCH

This week, the **Research** team is proud to announce a new strategic collaboration with the [Archimedes Research Unit](https://archimedesai.gr/en/) of the Athena Research Center (Athena RC), in Athens, Greece. This new partnership includes a new blockchain technology laboratory (BTL), which aims to advance research at the intersection of decentralized AI, blockchain, and private healthcare.

The new laboratory will drive research into how blockchain can act as a secure layer for artificial intelligence by merging privacy-enhancing technologies, game theory, and distributed ledgers to decouple data access from data insight. 

We look forward to sharing the innovations that will emerge from this exciting partnership.
