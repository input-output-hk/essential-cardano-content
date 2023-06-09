---
title: Staking and rewards in proof of stake
tags:
  - Staking
  - Cardano
  - rewards
  - locking
  - slashing
  - liquid
url: ""
image: https://ucarecdn.com/56a69820-65fe-4d93-ba66-371bf28b1d14/
image_text: Staking and rewards in proof of stake
---

## Staking and rewards in Cardano


Cardano's [staking and rewards system](https://www.essentialcardano.io/article/staking-is-the-bedrock-of-cardano) supports and incentivizes the blockchain's decentralization and is a fundamental component of the blockchain's operations. By delegating the stake that comes with  their ada, Cardano users become active participants in the network's sustainability – with no costs and no ‘locking up’.  

This post describes Cardano’s stake delegation process to summarize and demystify the technical information from public sources. The intention is to provide a convenient summary of what’s publicly available, with some references for readers to do their own research.  



## Staking on Cardano
Ada holders can [delegate](https://www.essentialcardano.io/faq/what-is-stake-delegation) their ada to stake pools run by [stake pool operators](https://www.essentialcardano.io/faq/who-is-a-stake-pool-operator-spo) (SPOs). There are [thousands of stake pools](https://www.statista.com/statistics/1279280/cardano-ada-biggest-staking-pool-groups/) in operation. 

[Five years](https://roadmap.cardano.org/en/byron/) of experience and [millions of wallet addresses](https://cardanofeed.com/cardano-active-wallets-skyrocket-past-3-million-a-striking-1000-year-on-year-increase-45346) have demonstrated the security and decentralization of Cardano’s [Ouroboros proof-of-stake consensus](https://www.essentialcardano.io/article/from-classic-to-genesis-the-implementations-of-ouroboros-explained) at scale and volume.

Anyone who holds some ada can run a stake pool on a computer that is dedicated to the task. Running a stake pool does require some technical knowledge. [This page from Cardano.org](https://cardano.org/stake-pool-operation/) gives more details.

An easier and more popular option for an ada holder is to delegate to a stake pool. This description of the process is from the viewpoint of a delegator:

- A wallet has a stake address (which collates stake) and a reward address (which accumulates rewards)
- A snapshot is taken of the sum of the ada held by these addresses at the start of each epoch (which lasts five days) – this forms the staking power for the wallet in the next epoch
- There is no minimum or maximum amount of stake
- When an ada holder delegates stake to a pool, they increase the probability of that pool producing a block 
- If a stake pool mints blocks in an epoch, rewards are distributed to both the ada delegator and the stake pool according to the pool’s fee structure
- Rewards are calculated during the epoch after the blocks are produced and then paid to rewards addresses at the start of the following epoch
- Cardano promotes decentralization by limiting the effective size of a stake pool with [the k parameter](https://cardano.org/stake-pool-operation/) 
- Ada in a rewards address is automatically re-staked and can be withdrawn for spending when desired
- The delegation process is baked into the protocol, and rewards are distributed automatically
- There is no queue for withdrawals; each withdrawal is processed independently at the usual speed of transactions on the blockchain.  

Figure 1 shows the relevant activities in a single thread of staking. Every epoch starts a new thread, so once the system stabilizes, all these activities happen concurrently in every epoch.  
  
![](https://camo.githubusercontent.com/e991e65124484f99e89ab136563b14874a34a57cd47e1475d59dba9c7476779a/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f5467335064774558666f34496e4753615370765a2d346a62654a4f6b556270644237646a74323041432d4b645376577945655f4c426a58784550757156675779365f486c39526d565a6457713638797a4a4d5349645269456f337777563664694749556c7474466a4c39593254682d7a55427137317a69626764326b694c62764f2d6b4662466f61496b3678794274395f655844413841702d4169356f664c5a62766e713767576f61736855316973702d5a4d44326173676c67394e5541)  
Figure 1. The sequence of staking in Cardano

The main implications of this system are:  
- Delegated stake earns rewards that compound at five-day intervals
- There is no locking period or penalty for early withdrawal of ada after the snapshot has been taken
- Once ada are staked, rewards start in fifteen days and then accrue every five days
- The balance at the next epoch boundary is used for staking in the following thread
- The wallet’s balance during an epoch does not affect rewards 
- Ada holders can distribute their stake across several pools
- Security risk is minimized because the staked ada never leaves the staking wallet, and there’s no need to disclose any keys
- There is no cost to delegators because the protocol rewards the pool operator directly.
## Conclusion
Staking is a necessary feature of every proof-of-stake chain, but every chain has its own rules. Cardano’s rules are among the best in the industry, and they operate without needing any intervention from ada holders. By doing your own research, you will discover that competing blockchains do not measure up to Cardano’s standards.


_Nothing in this article is intended to be professional advice, including without limitation, financial, investment, legal, or tax advice. Input Output Global is not responsible for your use of or reliance on any information in this article._
