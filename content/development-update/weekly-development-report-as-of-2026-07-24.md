---
title: Weekly development report as of 2026-07-24
tags:
  - Development
url: ""
image: https://ucarecdn.com/5d2ae924-57f7-4695-aa92-bbb7c5a07fa5/
image_text: ""
---

### CORE TECHNOLOGY

Cardano's engineering is now decentralized. Since 2024, IO and its partners have been managing a transition that will conclude in 2027, resulting in several independent firms maintaining at least three Cardano node implementations in Haskell, Rust, and Go, alongside a complete set of formal specifications overseen by member-based organizations including Intersect and Pragma, and subject to community review and vote. As part of this process, IO is spinning out the Haskell node to community curation and control. Check out the [engineering website](https://cardano-engineering.iog.io/) for more details.

The **ledger** team continued integrating Leios features into the ledger, including block header abstractions and the addition of BLS12381 public keys to stake pool parameters and state, with the Dijkstra CDDL updated accordingly.

On governance and rules, the team implemented CIP-181, removing the DRep-delegation requirement for reward withdrawals, and introduced a safeguard to prevent accidental swapping of old and new Plutus cost models.

Work continued on making ledger interfaces more era-parametric, with expanded JSON serialization coverage and initial export and import modules for reading and writing canonical ledger state. Finally, they updated Conway conformance tests to protocol version 11, and added tests for the newly introduced top-level guard requirement.

See [this update](https://github.com/IntersectMBO/cardano-updates/pull/812/changes) for more details. 

### WALLETS AND SERVICES

This week, the **Lace** team released an update for iOS and Android, which introduces in-app swaps and restores the Banxa on-ramp on iOS. It also adds CardanoCube integration, and brings Ledger and Trezor hardware wallet support for Cardano. 

Users can now sort tokens by quantity, value, or ticker, add contacts or select their own accounts directly from the send flow, and access a new network information card in the Staking Center. The release also includes performance improvements and various refinements across the app.

### DEVELOPER EXPERIENCE

This week, the **developer experience** team launched a [new website](https://input-output-hk.github.io/devx-updates/) for proposal tracking, which also provides [weekly updates](https://input-output-hk.github.io/devx-updates/updates/2026-w29/). Steady progress continues across all four active deliverables, with 27 commits landing this week.

On `cardano-init`, the CLI took a meaningful step forward with the addition of the `fullstack` option, which scaffolds a project that combines on-chain and off-chain code in a single setup – the starting point most teams use in practice. Work also began on multi-role framework support, including exploration of Scalus integration and a dedicated Scalus template, alongside early work on extending the `doctor` command to check dependencies outside a project context.

The `contracts-library` saw 12 commits this week, with development focused on feature branches, as the previously cataloged building blocks begin to take shape as real code. On the community side, the developer pledge is now live and open for signatures. The Cardano Foundation's Developer Portal onboarding flow also moved forward, with the scaffold for the new onboarding experience now in place.

Developers building on Cardano are encouraged to [sign the pledge](https://input-output-hk.github.io/devx-updates/pledge/).

### SCALING

This week, the **Mithril** team completed the refactoring of the non-recursive SNARK proof to remove the circuit verification key, upgraded the `midnight-zk` library to `2.3.3`, enabled the Plutus-friendly hash for IVC proving, and refactored the error handling in the Midnight library. They also continued to analyze and optimize the testing strategy for the STM SNARK modules.

The team also continued implementing aggregator CLI commands for configuration parameters and creating a runbook for on-chain configuration parameters. They completed the simplification of the `SignersRegistrationRetriever` trait and continued work on shipping the Mithril signer node binary in the Cardano node bundle, the `2628` distribution release, the upgrade to Cardano node v.11.1, and the update of the DMQ node to `0.7.0.0`.

Finally, they completed the repository transfer to the Intersect MBO organization and continued preparing the documentation website for Docusaurus v4.

### VOLTAIRE

The Intersect treasury withdrawal governance action has been ratified, with DRep approval of 75.69% and Constitutional Committee endorsement by six of seven members. The withdrawal of ₳25.4M will fund technical stewardship and governance coordination for June 2026 to June 2027, with the transfer taking effect at the start of Epoch 646 (July 28).
