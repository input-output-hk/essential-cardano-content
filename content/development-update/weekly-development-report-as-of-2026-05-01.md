---
title: Weekly development report as of 2026-05-01
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/2c42eddd-9c7f-4d7f-8795-6ad8cfc1d012/
image_text: ""
---

### CORE TECHNOLOGY

IO's treasury proposals are live on the [proposals website](https://momentum.cardano.iog.io/). For context on previously funded work, the [team published the Q4 2025 – Q1 2026 delivery report](https://www.iog.io/news/what-did-io-deliver-for-cardano-in-q4-2025-q1-2026), which covers what IO delivered for Cardano under the previous funding cycle.

To support the community in reviewing the proposals, IO has been hosting a series of X Spaces. A general kickoff session launched the process, followed by two dedicated spaces covering four proposals: Cardano upgrades, developer experience, Cardano High Assurance, and Plutus. The April 29 session covered Leios and layer 2 scalability proposals. Follow [IO on X](https://x.com/IOGroup) for more details on the upcoming spaces.

Delegated representative (DRep) voting is open now and closes on May 24. [Explore the full set of proposals](https://momentum.cardano.iog.io/proposals).

The **ledger** team progressed work on ledger rules for nested transactions and on translating newer features into the Plutus context. They introduced a change to how the Plutus context is prepared for each transaction entering the mempool – when fully integrated, this is expected to result in meaningful performance improvements.

Additionally, the team transferred all ledger state queries from the consensus component to the ledger component and introduced an initial stage of streaming injection functionality. This will be used for testing and benchmarking, particularly for on-disk storage scenarios where large volumes of data need to be injected into the ledger state without affecting operating memory.

Finally, they fixed several CDDL bugs identified using the new `AntiGen` and `cuddle` tools, and improved examples and facilities for golden tests.

### WALLETS AND SERVICES

[Lace mobile](https://www.lace.io/blog/lace-mobile-is-here-finally) is now available on [Android](https://play.google.com/store/apps/details?id=io.lace.mobilewallet), with iOS support to follow. The release brings core wallet functionality to mobile – sending and receiving assets, staking, swapping, and DApp connectivity – without requiring a desktop. This release also marks the start of [Lace 2.0](https://chromewebstore.google.com/detail/lace/gafhhkghbfjjkeiendhlofajokpaflmk), a step toward a multi-chain experience across Cardano and Bitcoin.

### SMART CONTRACTS

This week, the **Cardano High Assurance** team demonstrated two new tools that together enable automatic correctness proofs for Cardano smart contracts, from source language down to the CEK machine, against the actual ledger rules.

The first, [PlutusCoreBlaster](https://github.com/input-output-hk/PlutusCoreBlaster), is a complete executable formalization of the Cardano CEK machine, UPLC, and Plutus Core built-ins in Lean 4. Any UPLC program can be imported, and correctness theorems can be written against its actual execution – not a model, but the real implementation. This means developers can use the UPLC output from any surface language (Aiken, Plinth, Plutarch, or others) without needing to model their contract separately.

The second, [CardanoLedgerAPIBlaster](https://github.com/input-output-hk/CardanoLedgerApiBlaster), is an executable formalization of V1, V2, and V3 script contexts and ledger rules, reflecting the actual design choices made by the node – consistent with what runs on preview, pre-production, and mainnet.

To demonstrate what the tooling unlocks, the team formalized the sellNFT contract using CardanoLedgerAPIBlaster and ran Blaster on it. The proof revealed a double-satisfaction vulnerability. Combined, the two tools give developers a complete path: write a contract, import it, state your properties, and Blaster automatically proves them against the real CEK machine and ledger rules.

Join the team's [Discord discussions](https://discord.gg/waYbH94ajy) and see the 2026 funding proposal to extend this work on the [proposals website](https://momentum.cardano.iog.io/proposals/cardano-high-assurance).

### SCALING

Over the past few weeks, the **Leios** team improved the prototype's storage system, which had been affecting the test suite and proto-devnet runs, restoring stability in both environments. They published the first ledger throughput benchmarks for processing transactions with and without validation, confirming the expected speedup from reapplication over initial validation. More coverage will be needed, but the team is cautiously optimistic about this crucial aspect that underpins the Leios protocol's security. 

The team also began work on replacing the current 'always certified' shortcut with real vote traffic, while also aiming to simplify the committee selection scheme, allowing for smaller votes, certificates, and faster verification. Additionally, they updated the prototype to place endorser-block announcements in the Praos block header, aligning the implementation with the protocol specification. The team updated the cost estimate analysis and [interactive tool](https://leios.cardano-scaling.org/cost-estimator/) to use the CIP-164 Linear Leios protocol, providing better guidance on expected operational costs for SPOs.

Finally, the liveness proof for the Agda formal specification – covering honest chain growth and chain quality – was submitted for review, closing the last major open gap in the formal specification.

The **Mithril** team released the [2617.0](https://github.com/input-output-hk/mithril/releases/tag/2617.0) distribution – read the [developer blog](https://mithril.network/doc/dev-blog/2026/04/28/distribution-2617/) for more details. This version bumps the Mithril signer to [1.0.0](https://mithril.network/doc/dev-blog/2026/04/28/mithril-signer-stable-release), marking it as production-ready on the `release-mainnet` network, adds support for Cardano node `v.10.7.1`, and includes [statically built binaries](https://mithril.network/doc/dev-blog/2026/04/28/static-builds) as well as various bug fixes and improvements.

The team also completed the [golden tests](https://github.com/input-output-hk/mithril/issues/3125) for the recursive SNARK circuit prototype and enhanced witness preparation for the non-recursive prover in the STM library. They continued work on implementing a SNARK-friendly protocol message, the data encoding and state-transition tests for the recursive SNARK circuit prototype, and detecting SNARK circuit modifications in the STM library. Additionally, they completed the extraction of the [Merkle tree modules](https://github.com/input-output-hk/mithril/issues/2897) into a new crate.

Finally, the team implemented support for multiple tiers of tests in CI, refactored the crates publication, and investigated test flakiness.

### VOLTAIRE

Voting in the **Intersect** election committees concluded on Friday, May 1, at 12 noon UTC. With 105 candidates for 37 available seats, the election was hotly contested. An independent audit has commenced and will continue over the weekend. Results will be announced on Monday, May 4, at noon UTC.

### RESEARCH

This week, the **research** team has submitted their treasury proposal and are preparing their DRep Advocacy campaign, which includes content and events to explain the impact and value of the workstreams in the IOR proposal.
