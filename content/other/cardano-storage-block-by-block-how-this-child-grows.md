---
title: Cardano storage - block by block, how this child grows
tags:
  - storage
  - size
  - blockchain
url: https://cexplorer.io/storage
image: https://ucarecdn.com/54f37d5a-a206-4b62-b1fa-742e63749467/
image_text: Cardano size (blockchain storage)
---

We have now added a new chart that analyzes the size of the Cardano blockchain - both increments per epoch and total size.

As you may notice, the size of all blocks for the last full [epoch 377](https://cexplorer.io/epoch/377) was 809 MB, which is kind of the recent average.

For the record, the largest increase in one epoch was [epoch 335](https://cexplorer.io/epoch/335) and was 1,376 MB.

In the days when Cardano didn't have staking, the increase was about 10-20 MB per epoch.

All blocks together have actually size 85,486 MB.

Note that Cardano, especially since the last hardfork, is extremely efficient in terms of possible storage consumption. There is no need, as some other chains, to send redundant internal transactions every minute to keep the network running etc. But that's also why Cardano can't boast a ridiculous number of millions of TPS - because the network is really only running real transactions. Even the rewards from staking, as long as they are not collected from the reward address, take up no space on the blockchain.

Take a look on [Cardano storage](https://cexplorer.io/storage) live.
