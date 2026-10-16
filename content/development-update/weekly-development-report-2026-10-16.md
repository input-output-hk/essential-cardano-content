---
title: Weekly development report as of 2026-10-16
slug: weekly-development-report-2026-10-16
tags:
  - cardano
  - Weekly development updates
url: ""
image: https://ucarecdn.com/4ddc5f95-e167-4cfd-b2be-a5cf01395b75/
image_text: A graphic summarizing Cardano's weekly development report as of Oct. 16, 2026
---

## CORE TECHNOLOGY

This week, the ledger team added Dijkstra forecasting for Leios and extended it with Peras protocol parameters. Forecasting now keeps stake data only in snapshots. The team also defined Leios' EndorserBlock and added a ledger query for the Leios committee. Pool BLS key handling now updates a key's epoch number only when a new key is registered, with additional tests for committee selection and stake distribution.

Plutus V4 is now the maximum script language for Dijkstra, and transaction witnesses can encode and decode V4 scripts from that era onward. Work on sub-transactions added input discovery, access to supplemental data supplied by the top-level transaction, and tests for refunds across a batch. The team also fixed reuse of verifiable random function (VRF) values at epoch boundaries in Dijkstra and expanded ledger conformance tests.

[See this update](https://github.com/IntersectMBO/cardano-updates/blob/0eb7cd4fa5e2a91ba0bd83ca1ecee0560a9f4a60/blog/2022-10-14-ledger.md) for more details.

## SCALING

This week, the Hydra team raised the snapshot transaction cap from 1,000 to 4,000. In a local three-node test, processing a burst of 24,000 minimal self-transfers took 13.50 seconds, down from 37.04 seconds. These results apply to that test setup, not general network throughput.

The team also corrected benchmark reporting and fixed how nodes distinguish deposits from fanouts, which return funds to layer 1.

Snapshot handling now preserves withdrawals still being settled.

[See this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w41/) for more details.

## WALLETS

This week, the Lace team prepared a newsletter showing how RealFi brings USDrf, sUSDrf, and a dashboard for managing activity into IOG Lace. The preview includes a walkthrough of the experience, while the team's X post shares a demo of swapping, staking, and managing assets through the Staking Center. RealFi is available only in eligible countries.

Lace 2.4.0 adds USDrf staking with position, reward, and R-Points tracking. The swap review screen shows outgoing assets, fees, the order destination, collateral, and expiry before confirmation. Decentralized application (DApp) signing requests are queued individually, and signing errors now appear in the signing window.

Midnight users can inspect raw transaction data before confirming a send, with improvements to syncing, multi-token sends, and activity reporting. Import screens also explain that entering a recovery phrase creates a software wallet. The release notes list DUST generation from Cardano accounts holding cNIGHT as coming shortly after 2.4.0.

[Read the newsletter preview](https://services.iohk.io/-temporary-slug-0af06ed1-c01f-4a6d-b03e-82a282fac733?hs_preview=sWHcMJwC-224163189044) and [watch the demo](https://x.com/lace_io/status/2107477619570774239) on X.

## DEVELOPER EXPERIENCE

This week, the developer experience team published the cardano-init documentation site and improved its doctor command. Developers can now find installation and command guides, check which tools are installed outside a project, and see supporting tools and community help for their chosen stack.

The Beginner and Intermediate onboarding path entered staging review as a draft. It brings together previously developed material, from setting up a wallet to building smart contracts; it is not yet published on the Developer Portal. Advanced optimization lessons and a new design-patterns section also remain in draft, with runnable examples and measured costs.

On the smart wallet exploration branch, deposit restrictions now complement spending restrictions, with updated Mesh and Tx3 drivers and a usage guide. That work remains unmerged. Angel Castillo of Biglup Labs and Chris Gianelloni of Blink Labs joined the pledge, with the week's source reporting 36 signatories.

[See this update](https://input-output-hk.github.io/devx-updates/updates/2026-w41/) for more details.

## RESEARCH

This week, the research team is preparing for the next Cardano R&D session on Oct 22, 2026. Join the team for a Q3 update on Cardano Vision 26. Explore research into Peras voting certificates, Mithril bridge security, ZK-rollup analysis, proof of personhood, and minUTXO alternatives, including a live Q&A. Register here: [https://luma.com/zyemvmln](https://luma.com/zyemvmln)
