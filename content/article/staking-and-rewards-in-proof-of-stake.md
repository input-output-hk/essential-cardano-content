---
title: Staking and rewards in proof of stake
tags:
  - Staking
  - Cardano
  - Ethereum
  - rewards
  - locking
  - slashing
  - liquid
url: ""
image: https://ucarecdn.com/80589a7e-10c7-4c6d-a891-5c18d56d145b/
image_text: Staking and rewards in proof of stake
---

### How it works on Cardano, compared to Ethereum

Cardano's [staking and rewards system](https://www.essentialcardano.io/article/staking-is-the-bedrock-of-cardano) supports and incentivizes the blockchain's decentralization, and is a fundamental component of Cardano's operations. By staking some (or all) of their ada, Cardano users become active participants in the network's sustainability – and staking in Cardano is safe with no upfront or out of pocket costs.

This post compares staking in Cardano with staking in Ethereum 2.0, using technical information from public sources. The intention is to provide a convenient summary of what’s publicly available, with some references for readers to do their own research.

## Staking on Cardano

[Decentralization](https://www.essentialcardano.io/glossary/decentralization) was the motivation and the main achievement of the Shelley development phase in Cardano in 2020. Ada holders can [delegate](https://www.essentialcardano.io/faq/what-is-stake-delegation) their ada to stake pools run by [stake pool operators](https://www.essentialcardano.io/faq/who-is-a-stake-pool-operator-spo) (SPOs). There are now [thousands of stake pools](https://www.statista.com/statistics/1279280/cardano-ada-biggest-staking-pool-groups/) in operation. 

[Five years](https://roadmap.cardano.org/en/byron/) of experience and [millions of wallet addresses](https://cardanofeed.com/cardano-active-wallets-skyrocket-past-3-million-a-striking-1000-year-on-year-increase-45346) have demonstrated the security and decentralization of Cardano’s [Ouroboros proof-of-stake consensus](https://www.essentialcardano.io/article/from-classic-to-genesis-the-implementations-of-ouroboros-explained) at scale and volume.

Anyone who holds some ada can run a stake pool on a computer that is dedicated to the task. Running a stake pool does require some technical knowledge. [This page from](https://cardano.org/stake-pool-operation/) [Cardano.org](//Cardano.org) gives more details.

An easier and more popular option for an ada holder is to delegate ada to a stake pool. This description of staking in Cardano is from the viewpoint of a delegator:

*   A wallet has a stake address (which collates stake) and a rewards address (which accumulates rewards)
    
*   A snapshot is taken of the sum of the ada held by these addresses at the start of each epoch (which lasts five days) – this forms the staking power for the wallet in the next epoch
    
*   When an ada holder delegates stake to a pool, they increase the probability of that pool producing a block 
    
*   If a stake pool mints blocks in an epoch, rewards are distributed to both the ada delegator and the stake pool according to the pool’s fee structure
    
*   Rewards are calculated during the epoch after the blocks are produced and then paid to rewards addresses at the start of the following epoch
    
*   Cardano promotes decentralization by limiting the effective size of a stake pool with [the k parameter](https://cardano.org/stake-pool-operation/) 
    
*   Ada in a rewards address is automatically re-staked and can be withdrawn for spending when desired
    
*   The delegation process is baked into the protocol, and rewards are distributed by the blockchain itself automatically.
    

Figure 1 shows the relevant activities in a single thread of staking. Every epoch starts a new thread, so once the system stabilizes, all these activities happen concurrently in every epoch.

![](https://lh4.googleusercontent.com/Tg3PdwEXfo4InGSaSpvZ-4jbeJOkUbpdB7djt20AC-KdSvWyEe_LBjXxEPuqVgWy6_Hl9RmVZdWq68yzJMSIdRiEo3wwV6diGIUlttFjL9Y2Th-zUBq71zibgd2kiLbvO-kFbFoaIk6xyBt9_eXDA8Ap-Ai5ofLZbvnq7gWoashU1isp-ZMD2asglg9NUA)

Figure 1. The sequence of staking in Cardano

The main implications of this system are:

*   Delegated stake earns rewards that compound at five-day intervals
    
*   There is no locking period, or penalty for early withdrawal of ada after the snapshot has been taken
    
*   The balance at the next epoch boundary is used for staking in the following thread
    
*   The wallet’s balance during an epoch does not affect rewards 
    
*   Ada holders can distribute their stake across several pools
    
*   Security risk is minimized because the staked ada never leaves the staking wallet, and there’s no need to disclose any keys
    
*   There is no cost to delegators because the protocol rewards the pool operator directly.
    

## Staking on Ethereum

Transforming into a proof-of-stake chain was the main motivation for ETH2.0 and the Merge. 

Ethereum does not natively support delegation, so unless the holder runs their own validating node, they must choose between staking as a service and pooled staking. These options are explored below. In all cases, the stake must be transferred from the ETH holder’s wallet to the staking address, so the holder loses control of their assets.

The Ethereum protocol has the ability to penalize a validator that acts against the network by reducing their stake. The process is called **slashing**, and can result in the exclusion of a validator from the network. [More information](https://medium.com/prysmatic-labs/eth2-slashing-prevention-tips-f6faa5025f50).

### Solo home staking in Ethereum

This option is preferable for the safety of the staker and the security of the network. This is similar to running a stake pool in Cardano.

[More information about solo staking](https://ethereum.org/en/staking/solo/).

*   A minimum of 32ETH must be staked 
    
*   Rewards are paid in ETH directly from the protocol
    
*   Neither stake nor rewards can be withdrawn for some time, estimated at one to two years
    
*   A dedicated computer connected to the internet 24/7 is recommended
    
*   Technical expertise, fast connection, and a reliable machine are all needed
    
*   If newly-purchased ETH is added to a staking address, it is not automatically staked
    
*   If the validating node is misconfigured or goes offline, there is a danger of slashing.
    

### Staking as a service in Ethereum

Third-party operators run the validating node for a fee.

[More information about staking as a service](https://ethereum.org/en/staking/saas/).

*   The same constraints as for solo staking apply to stake and withdrawals
    
*   Ethereum does not support delegation natively, so the validator must act honestly and not incur penalties from regulators or slashing from the protocol
    
*   The third-party operator needs the holder’s signing keys
    
*   Third-party operators are not free.
    

### Pooled staking in Ethereum

Third-party operators run one or more validating nodes. The operator provides software that allows ETH holders to stake amounts smaller than 32ETH.

[More information about pooled staking](https://ethereum.org/en/staking/pools/).

*   The operator may provide a smart contract and a special token that represents the staked ETH
    
*   If there is a special token, it may be usable for collateral or yield farming
    
*   The operator is subject to withdrawal restrictions, which may have implications for the stake
    
*   Ethereum does not support pooled or delegated staking natively, so the third-party operator must be trustworthy
    
*   Third-party operators are not free.
    

## Conclusion

Staking is a necessary feature of every proof-of-stake chain, but every chain has its own rules.

  
![](https://ucarecdn.com/02fa1ad9-231e-4d4f-88ca-e0ac0db87e10/)

_Nothing in this article is intended to be professional advice, including without limitation, financial, investment, legal or tax advice. Input Output Global, Inc. is not responsible for your use of or reliance on any information in this article._
