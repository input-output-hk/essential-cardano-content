---
title: Weekly development report as of 2026-09-18
slug: weekly-development-report-2026-09-18
tags:
  - Weekly development updates
  - Cardano
url: ""
image: https://ucarecdn.com/0d1a73a6-4d21-4cf4-9f85-9abdda04ae70/
image_text: Weekly development report as of 2026-09-18
---

### CORE TECHNOLOGY

This week’s update from the **ledger** team covers four weeks of work. The headline item: Dijkstra's batch validation now runs Plutus scripts for sub-transactions and counts their execution budgets, closing a gap where sub-transaction validators and minting policies went unchecked and their costs escaped transaction and block limits and script fees. The team also reworked Withdrawals handling in the ENTITIES rule to implement the full specification, moving batch withdrawal checks out of UTXO and into ENTITIES along with legacy-mode value conservation and new SUBUTXO/SUBUTXOW predicate failures.

On Plutus V4, the team implemented the TxInfo translation for protocol version 4, redid the PlutusPurpose translation, and fixed the Dijkstra cost model injection, bumping plutus-ledger-api to at least 1.68. Dijkstra era work also added a POOL rule, an EMax /= 0 check, and enforced account balance intervals, while Leios protocol parameters landed in the Dijkstra era with a size-constrained leios\_certificate signer set.

The rest was serialisation, interface, and testing cleanup: more resilient decoders and encoders, an era parameter on StakePoolParams, ToJSON/FromJSON instances for transaction types across all eras, new conformance tests for Dijkstra's EPOCH rule and account balance intervals, and a crypton version bump alongside CI hardening and node 11.1.1 backports.

[Read this update](https://github.com/IntersectMBO/cardano-updates/blob/0eb7cd4fa5e2a91ba0bd83ca1ecee0560a9f4a60/blog/2026-09-16-ledger.md) for more details. 

### SCALING

This week was one of consolidation for the **Hydra** team after the 2.4.0/2.4.1 release: four PRs merged, three opened, across two repos. The etcd network component was bumped (etcd 3.5.25 to 3.6.6, grapesy and http2 client libs updated too); the long-standing putMessage stall under heavy load now surfaces as a reconnectable error instead of hanging forever, though the underlying issue is still reproducible upstream. The actual fix, dedicated recycled broadcast connections, was re-verified with large soak tests. A nightly Blockfrost test flake was also fixed.

The main bug fix closed a fanout wedge: a partial fanout could empty a head while its on-chain state still read Closed, leaving it stuck unable to finalize or revert. The fix centralizes the fanout decision so every caller hits the same guard. New adversarial model testing (spam, rollbacks, latency, restarts) caught and fixed a similar wedge plus several mock-chain bugs.

Separately, Performance (M2) is now marked done, and three other milestones (metrics, the hydra-recipes repo, and cardano-node compatibility) moved earlier on the roadmap.

Here’s [this week’s Hydra update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w37/) in greater detail.

### RESEARCH

This week, the **Research** team is attending [MARBLE 2026](https://www.marble-conference.org/marble2026) to present the [Strategic Validator Liquidation in Proof-of-Stake Tokenomics](https://www.iog.io/papers/strategic-validator-liquidation-in-proof-of-stake-tokenomics) research paper and [SCN 2026](https://scn.unisa.it/scn26/) to present the [Improved Approximation Guarantees for Groupwise Maximin Share Fairness](https://arxiv.org/pdf/2606.04731) research paper.

They are also preparing to host the next in the series of technical workshops under Cardano Vision 26 on Cardano governance. Registration is [now open](https://luma.com/uy584nq2).
