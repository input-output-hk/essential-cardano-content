---
title: Input Endorsers explained
tags:
  - Scalability
url: ""
image: ""
image_text: ""
---

At the moment, Cardano processes blocks in a relatively simple manner. Thanks to EUTxO, transactions and their fees are computed locally and submitted.

Once submitted, transactions wait in mempools to be added in the upcoming block which has space for them. This way, the protocol functions in a serialized manner, though without a fee market. So when congestion happens, transactions just have to wait for their turn.

Since computation is done locally, transactions will not fail, it will just take time for their turn to be included in a block to come. So how do Input Endorsers work? At the moment, mempools collect and store transactions, until they are included in a mainchain block.

Input Endorsers change the concept of the mainchain block production from including transactions to serializing, validating "batches" of transactions by referencing to them. Similar to mempools which store transactions, input blocks store them as well.

They not only store them, but locally prove their validity via Mithril certificates, which are cryptographic proofs of validity to groups of transactions. Due to the P2P nature of the network, many input blocks can be produced concurrently, they are free segments of mempools.

So how does this tie everything together? Simply put, this splits transaction processing and block production/validation. The concept of offloading the mainchain and validating batches is mostly realized via L2 solutions like ZK Rollups and Optimistic Rollups in crypto.

Input Endorsers however execute this thought process of validating a batch of transactions at once and offloading the mainchain by keeping fast transaction flow out of it in a much more elegant manner. Input Endorsers erase risks and UX deteriations like bridging.

Instead of creating a new layer (a secondary chain), which is then valited in whole (ZK Rollups etc.), thanks to EUTxO, local state, and Mithril certificates, Input Endorsers constantly create batches of input blocks which contain certified and valid transactions.

All the main chain has left to do is to rank these already valid input blocks and resolve double spends in the graph. So by utilizing local state and cryptographic proofs, load on the mainchain is greatly reduced and throughput increases massively. An elegant process.
