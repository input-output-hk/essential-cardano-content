---
title: "Ouroboros Peras Weekly Update : 21 August 2026 "
slug: ouroboros-peras-weekly-update-21-august-2026
tags:
  - Peras
  - Weekly development updates
  - "#cardano"
url: ""
image: https://ucarecdn.com/762046da-f937-4cf7-8d45-b35c4a0cdac4/
image_text: ""
---

This week, we started onboarding a few new colleagues who will help us make Peras mainnet-ready.

Several working groups have also been launched, with each investigating a different area: graceful termination and other potential optimisations for the ObjectDiffusion mini-protocol; implementing support for historical certificates and extending Ouroboros Genesis to allow syncing nodes to receive them; access to properly registered BLS keys from the ledger; the interface between Consensus and Ledger with respect to certificate serialisation and validation; and extending the Peras testnet in terms of observability and testing scenarios.

Integration work continued, with changes being extracted from the [Peras integration branch](https://github.com/IntersectMBO/ouroboros-consensus/pull/2067) into PRs targeting the main branch.

*   The [Add Peras helpers](https://github.com/input-output-hk/sop-extras/pull/4) PR, extracted from [Peras 59 (old)](https://github.com/IntersectMBO/ouroboros-consensus/pull/2212), has been merged and integrated.
    
*   The [Add hard-fork point conversion helpers](https://github.com/IntersectMBO/ouroboros-consensus/pull/2218) PR has been accepted.
    
*   The PR introducing the necessary [StateSupportsPerasEpochContext instances](https://github.com/IntersectMBO/ouroboros-consensus/pull/2220) for different block types is currently under review.
    

Work also continued on simplifying parts of the integration code that handle HFC vs. Shelley-based queries.

The team also started integrating [cardano-ledger PR #5992](https://github.com/IntersectMBO/cardano-ledger/pull/5992) into the Consensus layer through [ouroboros-consensus PR #2222](https://github.com/IntersectMBO/ouroboros-consensus/pull/2222). This will allow properly registered BLS keys to be extracted from the ledger state.

Development of the Peras testnet continued, focusing on bootstrapping the temporary retrieval of public and private BLS keys from the environment until [#2222](https://github.com/IntersectMBO/ouroboros-consensus/pull/2222) lands on the main branch.

Read the [full technical update](https://tweag.github.io/cardano-website/projects/prs/reports/2026-08-21/)
