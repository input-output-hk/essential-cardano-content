---
title: Epochs in Cardano
tags:
  - Cardano
  - epoch
  - education
  - ada
url: ""
image: https://ucarecdn.com/3d4b5fe0-630f-47c1-b9b0-519ee41f0b5b/
image_text: Cardano epochs
---

In the Cardano ecosystem, time is divided into epochs of 5 days. Between epochs, a snapshot occurs in which the ADA coin balance of the accounts is scanned. For example, if you delegate ADA coins to a pool, it will only show up after a new snapshot.

Epochs are used as a specific accounting period for which rewards are paid. It is necessary to measure the performance of pools in terms of block production in order to reward pool operators and delegators.

There are 432,000 seconds in each epoch, which corresponds to the number of slots in which a new block can theoretically be created. The protocol is set up so that a new block is only created in certain slots. Some slots will remain empty. In certain slots, randomly selected pools get a chance to create a block. The assigned pool is called a slot leader. Pools have an economic incentive to create a block in assigned slot, since pool operators get rewarded for doing so, along with all delegators who delegated ADA coins to that pool. However, it may happen that due to technological problems, for example, a new block will not be created.

All epochs have a similar meaning. If you look at the epochs from the perspective of newly delegated coins to the pool, you could distinguish 5 epochs between the delegation process and the first reward: Delegation, Stake registration, Skate usage, Reward calculation, Reward distribution. If you look at it through the eyes of multiple delegators, you will see that our artificially named epochs run in parallel. Someone has just delegated their coins for the first time, another user's stake has just been used by the pool in that epoch, other users are already getting rewards.

## Staking and epochs

If you delegate ADA coins 1 day before a new snapshot, you must wait one epoch (5 days) before the pool can use your stake in the next epoch (another 5 days). It takes another one epoch to calculate the rewards (5 days). In the next epoch the rewards are distributed. You need to wait 15-20 days (at least 3 epochs) before you receive your first reward. After that, you can expect to receive a reward every epoch.

You can explore all epochs since genesis here: [https://cexplorer.io/epoch](https://cexplorer.io/epoch)
