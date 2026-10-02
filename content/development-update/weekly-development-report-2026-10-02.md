---
title: Weekly development report as of 2026-10-02
slug: weekly-development-report-2026-10-02
tags:
  - Weekly development updates
  - cardano
url: ""
image: https://ucarecdn.com/56b6acc1-a0af-44cc-8862-cf0583cc5026/
image_text: ""
---

## CORE TECHNOLOGY

This week, the **ledger** team put most of its effort into Leios and the block header changes that support it. Each protocol now has its own block header interface, which can be specified era by era, and Dijkstra headers no longer rely on a self-reported protocol version. On the Leios side, the ledger now selects the Leios committee at the epoch boundary and expires BLS keys after KES expiry. It also checks a pool's BLS proof of possession when the pool registers in Dijkstra. The team also added Peras protocol parameters as groundwork, though Peras certificates stay out of the Dijkstra block body for now.

Work on the Plutus V4 context and sub-transactions continued, and scripts can now see the sub-transaction index. Dijkstra gained new protocol parameters for reference-input costs, along with a fix to conservation of value for phase-2-invalid transactions. Elsewhere, governance now uses its own type for the pool distribution, pools that re-register get corrected VRF key handling, and native scripts carry less memory overhead. On testing, the team kept filling in predicate-failure coverage for the mempool and sub-transaction rules and added regression tests for conformance.

[Read the ledger update](https://updates.cardano.intersectmbo.org/2026-09-30-ledger) for more.

This week, the **performance and tracing** team published release benchmarks for node 11.1.1. The CPU usage improvement from 11.1.0 holds, and the memory increase is smaller, though still measurable and listed as a known issue. For Leios, the team turned its transaction validation benchmark into a standalone executable that SPOs can run on their own hardware, without nix or a Haskell toolchain. The team is also testing its benchmarking automation with the Leios prototype ahead of the release candidate.

tx-generator, the tool behind the team's benchmarking workloads, can now write transactions to disk instead of only submitting them live, and it supports Dijkstra-era transactions. On tracing, the team is integrating Hermod Tracing into the node ahead of replacing trace-dispatcher in a release after the Dijkstra hard fork.

[Read this performance and tracing update](https://updates.cardano.intersectmbo.org/2026-09-30-performance-and-tracing) for more.

## SCALING

This week, the **Hydra** team merged five PRs, opened seven, and made 47 commits across two repos, with no releases. The test migration described last week merged on Monday. cardano-node moved from 11.0.1 to 11.1.2, since the older version was the suspected cause of a nightly failure, and the demo docker-compose image (still on 10.6.2) was updated with it. The same PR fixed a Blockfrost timing test and a flaky stalled-broadcast test, which now scrapes metrics with retries.

A new delegated-head demo runs a head whose operators commit none of their own funds. Two independent addresses add funds through increments, transact inside the head, and leave through decrements. One of them builds its deposit transaction in JavaScript and submits it straight to L1, which shows that depositing doesn't need the hydra-node API. You can try it with nix run .#delegated-demo.

The team also changed how a node decides its network is backed up. The outbox used to report BacklogFull once it hit a fixed 1,000 pending messages, so under constant load a node could refuse NewTx while its network was still draining normally. In the end-to-end benchmarks, every refused transaction then invalidated the later ones in that client's chain, which is why the sustained-load and plateau scenarios had been failing on master. Now the outbox estimates how long the backlog would take to clear at the recent completion rate, and reports BacklogFull only when that time exceeds noProgressFor. The 1,000 cap stays as a memory backstop. The changelog also got a tidy-up. Seven stacked PRs on rollback handling were opened on Tuesday and closed without merging by Friday.

Read [this Hydra update](https://cardano-scaling.github.io/hydra-updates/updates/2026-w39/) for more.

## WALLETS

This week, the **Lace** team released Lace 2.4, a week after 2.3, and RealFi is now built into the wallet. The swap review screen now shows what a transaction does before you confirm it, not only the quote. You can see what leaves your wallet, the fee, where the order goes, what's held as collateral, and when the transaction expires. DApp signing is easier to follow too. When Lace can't sign a request, it now explains why instead of letting the request disappear. Several requests at once are queued and shown one at a time, and a request only counts as successful once the signature is actually in place. A DApp that loses its connection also no longer holds up the others.

Midnight syncing is more reliable now that each wallet's state is stored separately, and the progress display follows the slowest part of the sync. You can expand a Midnight send to check the raw transaction data before confirming. The fix also covers multi-token sends, partially successful transactions, transfers to yourself, and history on new accounts. On the hardware side, Lace adds support for the V8 Cardano app on Ledger. Generating DUST from a Cardano account holding cNIGHT is coming shortly after the release.

With RealFi in Lace, users can explore DeFi features, including USDrf and sUSDrf, from the wallet and follow their activity on the RealFi dashboard. RealFi bundles the underlying DeFi transactions so there are fewer steps to manage, and you still review and approve every transaction in Lace before it goes through. The team will share more over the coming weeks on how the integration works.

[Read this blog post](https://www.lace.io/blog/lace-2-4-we-re-moving-quickly) for more on Lace 2.4 and [this one](https://www.lace.io/blog/realfi-built-into-lace) for more on RealFi in Lace.

## RESEARCH

This week, the **Research** team is preparing for the [AFT 2026](https://aft.ifca.ai/aft26/index.html) conference in London next week, where the [Reserve Depletion and Security Runway in Proof-of-Stake Systems](https://www.iog.io/papers/reserve-depletion-and-security-runway-in-proof-of-stake-systems) paper by Paolo Penna and Manvir Schneider will be presented. IOG is a gold sponsor for the event and Aggelos Kiayias is the program chair. 

They also published new explainers for the [Strategic Validator Liquidation in Proof-of-Stake Tokenomics](https://www.iog.io/api/research/pdf/explainer/LZJFYADR?_gl=1*gxgzv1*_up*MQ..*_ga*MTM4Mzg0NTkuMTc5MDY2NzEzOA..*_ga_KJKXMPL63Y*czE3OTA2NjcxMzckbzEkZzAkdDE3OTA2NjcxMzckajYwJGwwJGgw) and [Fast Difficulty Adjustment in Proof-of-Work Consensus](https://www.iog.io/api/research/pdf/explainer/CMS48YZX?_gl=1*1h4e77f*_up*MQ..*_ga*MjAyMjUzOTE1NC4xNzkwNzU5Njcw*_ga_KJKXMPL63Y*czE3OTA3NTk2NzAkbzEkZzAkdDE3OTA3NTk2NzAkajYwJGwwJGgw) research papers.
