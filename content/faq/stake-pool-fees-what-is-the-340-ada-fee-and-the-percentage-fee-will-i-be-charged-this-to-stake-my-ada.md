---
title: "Stake Pool Fees: What is the 340 ada fee and the percentage fee? Will I
  be charged this to stake my ada?"
tags:
  - Staking
  - Fees
  - Stake pool
  - Delegation
  - Delegator
url: ""
image: ""
image_text: ""
---

First of all you are not charged this fee to stake your ada. The only fees you are charged to stake your ada are:

• a transaction fee, currently around 0.17 ada, to authorise the delegation transaction.  
• 2 ada deposit which you can claim back if you decide to stop staking.

For each 5 day epoch, rewards are distributed to all ada holders who are delegated to a stake pool, providing the stake pool produced a block. These rewards consist of:

• A set percentage of the ada reserves (undistributed ada). As this is a set percentage this is gradually declining over time.  
• All of the transaction fees during the epoch. Currently this is a small addition to the reward pot but as Cardano sees more activity this will increase the staking APR.

The amount of ada that is received by a pool of delegators from the reserves for each block a Stake Pool produces is currently around 500 ada. So if a Stake Pool produces 1 block it will receive around 500 ada, 2 blocks around 1000 ada and so on. The number of blocks a stake pool produces is proportional to the amount of delegation in the Stake Pool. From the total amount of ada that a pool of delegators is awarded, the Stake Pool Operator (SPO) first takes the fixed fee of 340 ada, or maybe more if they have set a higher fixed fee. The SPO is then also awarded the margin fee which they have set, this is a percentage of the ada that remains after the fixed fee is taken. The ada that is left after these fees are taken is then shared between all of the delegators in the Stake Pool, weighted towards how much ada they have delegated. This fixed fee and margin fee are only taken once in each epoch and only if a Stake Pool produces one or more blocks. All of this happens automatically, taken care of by the protocol and is therefore trustless. Let's consider some examples. Rewards from transaction fees have been omitted for simplicity.

  
**A Stake Pool with a 340 ada fixed fee and a 3% margin fee**:

• Let’s assume this Stake Pool produces three blocks during the epoch. From the 1500 ada the SPO is awarded 340 ada plus 3% of the remainder. This leaves 1125.2 ada to share between the delegators. Assuming there are 50 delegators of equal size in the pool each delegator receives 22.504 ada.

• Let’s now assume that this Stake Pool produces six blocks during the epoch. From the 3000 ada the SPO is awarded 340 ada plus 3% of the remainder. This leaves 2580.2 ada to share between the delegators. As this Stake Pool has produced more blocks it will have more delegation and probably more delegators. Assuming there are 100 delegators of equal size in the pool each delegator receives 25.802 ada.

**A Stake Pool with a 340 ada fixed fee and a 1% margin fee:**

• Let’s assume this Stake Pool produces three blocks during the epoch. From the 1500 ada the SPO is awarded 340 ada plus 1% of the remainder. This leaves 1148.4 ada to share between the delegators. Assuming there are 50 delegators of equal size in the pool each delegator receives 22.968 ada.

• Let’s now assume that this Stake Pool produces six blocks during the epoch. From the 3000 ada the SPO is awarded 340 ada plus 1% of the remainder. This leaves 2633.4 ada to share between the delegators. As this Stake Pool has produced more blocks it will have more delegation and probably more delegators. Assuming there are 100 delegators of equal size in the pool each delegator receives 26.334 ada.

  
The lowest fees that a SPO can currently set for their Stake Pool is a 340 fixed fee and a 0% margin fee. There is currently a lot of discussion around lowering the minimum allowed fixed fee. Some SPOs feel that it is deterring delegators from joining Stake Pools which are small with regards to delegation, as they have no option but to take 340 ada from the staking rewards.

  
You may also find these FAQ of interest:

**Is my ada safe when staking?**  
[https://www.essentialcardano.io/faq/is-my-ada-safe-when-staking](https://www.essentialcardano.io/faq/is-my-ada-safe-when-staking)

**What happens when I move to a new stake pool? Will I lose rewards?**  
[https://www.essentialcardano.io/faq/what-happens-when-i-move-to-a-new-stake-pool-will-i-loose-rewards](https://www.essentialcardano.io/faq/what-happens-when-i-move-to-a-new-stake-pool-will-i-loose-rewards)

**Should I get a hardware wallet?**  
[https://www.essentialcardano.io/faq/should-i-get-a-hardware-wallet](https://www.essentialcardano.io/faq/should-i-get-a-hardware-wallet)
