---
title: Weekly development report as of 2026-11-06
slug: weekly-development-report-2026-11-06
tags:
  - Weekly development updates
  - cardano
url: ""
image: https://ucarecdn.com/69f7b426-47ed-45f9-a6cd-06c0959fcf2f/
image_text: Summary of this week's Cardano development report, 2026-11-06
---

## **CORE TECHNOLOGY**

This week, the **consensus team** advanced Leios on the main development branch, adding endorser block production, certificate checks during chain selection, and vote relaying. These changes remain development work, not a mainnet release.

The team also released Leios prototype rc-2026w44 with adaptive endorsements, which reduce endorser block sizes when votes are insufficient. The earlier rc-2026w43 cut certifying-block forging time from up to 0.9 seconds to milliseconds. Separately, ouroboros-consensus 5.3.0.0 reduced memory use during ledger snapshot writes.

See [this update](https://updates.cardano.intersectmbo.org/2026-11-03-consensus/) for more details.

## **SCALING**

In its October 26 to November 1 update, the **Hydra team** merged expanded monitoring for snapshot progress, queues, and persistence, with updated dashboards and example alerts. It also added demo recording tools and fixed crashes involving empty token asset names and deposit lookups.

Further capacity and startup fixes remained open at the reporting cutoff. There was no new Hydra release during this period.

See [this update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w44/) for more details.

## **DEVELOPER EXPERIENCE**

In its October 26 to November 1 update, the **developer experience team** published the Dijkstra readiness tracker and reassessed tooling against the cardano-node 11.2.0 prerelease. The tracker records compatibility findings and the upstream changes tools need.

The team also completed onboarding lessons, nine design patterns, and automated example checks on an integration branch. These were not yet live on the developer portal. Contracts-library testing improvements, including 67 property-based tests across five contracts, also remained on an integration branch at the cutoff.

In cardano-init, the global --json flag replaced --format json on the main branch, with the output schema unchanged. The change was not yet released.

See [this update](https://input-output-hk.github.io/devx-updates/updates/2026-w44/) for more details.

## **WALLETS**

On Friday, October 30, the **Lace team** released **Lace 2.5 for the browser extension**, introducing improvements to transactions, DApp signing, and wallet syncing, alongside new functionality for Midnight users.

The release enables users to designate cNIGHT held in their Cardano accounts to Midnight addresses to generate DUST directly within Lace. ADA transactions are now smoother, with eligible staking rewards automatically included when needed and clearer messaging around insufficient balances and transaction fees.

Lace 2.5 also improves troubleshooting with more detailed, copyable DApp signing errors. Additionally, users can now reset wallet sync at the individual account level, refreshing transaction history, token information, and activity data to resolve syncing issues.

Read the [Lace 2.5 blog post](https://www.lace.io/blog/lace-2-5-more-control-smoother-transactions) and [view the release announcement on X](https://x.com/lace_io/status/2116233112707334177).

## **SMART CONTRACTS**

This week, the **Plutus team** finalized cost models for the keepPolicies and dropPolicies builtins and added 65 conformance cases for the new Value builtins. The team also documented these functions and multiIndexArray in the Plutus Core specification.

Compiler fixes preserve computations that can fail during constant folding, while further changes corrected Plutus V4 context compilation. Work continued on formal models and evaluator optimizations.

See [this update](https://updates.cardano.intersectmbo.org/2026-11-04-plutus-core/) for more details.

## **HIGH ASSURANCE**

This week, the High Assurance team merged a [major Blaster optimizer update](https://github.com/input-output-hk/Lean-blaster/pull/155), reducing repeated work during verification and improving simplification and solver translation. The team also advanced symbolic analysis of Plutus contracts, adding support for [BLS12-381 values](https://github.com/input-output-hk/PlutusCoreBlaster/pull/72) and a [workaround for byte-string-to-integer conversion](https://github.com/input-output-hk/PlutusCoreBlaster/pull/71). Work continued on [proof reconstruction](https://github.com/input-output-hk/Lean-blaster/pull/457) and improvements to the [Blaster VS Code extension](https://github.com/input-output-hk/blaster-extension/pull/53).

## **RESEARCH**

The **research team** hosted a technical workshop on light client architecture. The team discussed ways to interact with the chain securely without running a full node, as Cardano's ecosystem expands to mobile wallets, bridges, L2s, and resource-constrained devices. If you missed the session, you can watch the [recording](https://drive.google.com/file/d/1QJTnCIJaIKpflnqBeDxPIF7qu62z_gsm/view). They also published an [explainer](https://www.iog.io/api/research/pdf/explainer/VK4FGKSJ) for the 'Crossing with Confidence: Formal Analysis and Model Checking of Blockchain Bridges' research paper and an [explainer](https://www.iog.io/api/research/pdf/explainer/N4ZCK4XC) for the _Permissionless Consensus from a Common Random String_ research paper.
