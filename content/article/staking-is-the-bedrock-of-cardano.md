---
title: Staking is the bedrock of Cardano
tags:
  - Cardano
  - Staking
  - Delegation
  - Rewards
  - Stake pool
  - Ouroboros
  - Decentralization
url: ""
image: https://ucarecdn.com/c635b204-12ff-4726-83b9-70ce81b22ffe/
image_text: Staking on Cardano
---

### Staking delegation helps keep the blockchain growing – and ada holders are rewarded for participating

Original author: Anthony Quinn

Each month, a few more [Cardano stake pools](https://docs.cardano.org/getting-started/operating-a-stake-pool/about-stake-pools) are being created, so far bringing the total number of [active pools to more than 3,000](https://adapools.org/). At the start of 2021, there were about 2,000. The ada is staked from 1.2 million wallet addresses. In the process, the level of delegation has increased to almost 74% of all the ada in circulation. That’s some achievement, but it still leaves a quarter of all ada yet to be staked – does that matter?

The short answer is yes, for two reasons. First, staking is what secures the Cardano network, so the more ada staked the better. And second, on an individual level, ada holders who have not delegated their coins are missing out on the rewards that are distributed to stake pools for verifying transactions and producing blocks.

The idea of proof of stake (PoS) is now so established that it’s easy to forget what a massive innovation it is. The delays in Ethereum trying to move from proof of work (PoW) show how difficult PoS is to implement. So it’s worth taking a closer look.

## Before Cardano

The earliest blockchain, Bitcoin, and the first to use smart contracts, Ethereum, were based on proof-of-work technology. These first and second-generation blockchains both require a network of computers that compete to validate transactions and ‘mine’ coins. The competition consists of solving an otherwise worthless puzzle so that the chance of success – and earning the rewards involved – depends solely on raw computational power. Ultimately, these blockchain validators compete by expending energy, which has led to massive levels of electricity use.

Many people recognized the PoW problem early on and proof of stake was suggested in a [bitcoin forum](https://bitcointalk.org/index.php?topic=27787.0) in 2011:

> I'm wondering … whether a transition from a proof-of-work based system to a proof-of-stake one might happen. What I mean by proof of stake is that instead of your ‘vote’ on the accepted transaction history being weighted by the share of computing resources you bring to the network, it's weighted by the number of bitcoins you can prove you own, using your private keys.

A year later, Peercoin implemented a hybrid PoS-PoW protocol. But there were questions about whether PoS was secure. So teams of academics set out to design a PoS protocol that could be proven mathematically. It turned into quite a race, with a team led by Aggelos Kiayias, a professor at the University of Edinburgh and chief scientist at Input Output Global (IOG), submitting a groundbreaking paper about Ouroboros, ‘[the first blockchain protocol based on proof of stake with rigorous security guarantees](https://iohk.io/en/research/library/papers/ouroborosa-provably-secure-proof-of-stake-blockchain-protocol/)’, to the [Crypto 2017 conference](https://iohk.io/en/blog/posts/2017/06/19/proof-of-stake-protocol-ouroboros-at-crypto-17/). It beat a team from Cornell University that introduced the Snow White protocol and described by the authors as a ‘green’ consensus protocol because it used so much less energy than PoW blockchains. The Crypto conference applies a rigorous peer review process to include papers in the program. This involves other academics scrutinizing each paper for its scientific merits.

Professor Kiayias’s paper established in a formal mathematical proof that the security properties of Ouroboros were comparable to those of Bitcoin. With 1,300 citations on Google Scholar, it is one of the most referenced research papers about blockchain, and has influenced several other systems, most notably Polkadot and Concordium.

Once the theory had been proven, IOG’s blockchain engineers set about implementing the Ouroboros protocol in the Haskell programming language. Cardano was launched in September 2017 and ada, Cardano’s native cryptocurrency that fuels the blockchain, immediately became a leading cryptocurrency – one of only four coins that has held on to a top 10 position since.

Of course, that 2017 launch was just the start of Cardano’s journey, as set out in its [four-era roadmap](https://roadmap.cardano.org/en/). IOG’s engineers rejected the Silicon Valley model of ‘go fast and break things’, because failures of critical infrastructure affect people’s lives. Slow and steady is the Cardano way.

## Staking and Ouroboros

Cardano relies on Ouroboros with its mathematically proven PoS consensus mechanism. Stake, a virtual resource, is recorded on the Cardano blockchain and delegation of that stake by ada holders is what keeps the network running and secure.

Rather than every ada holder having to run a computer system to take part in the staking process, it makes sense to share resources in stake pools. However, it is vital that the system prevents any pool becoming dominant. So Cardano has a reward-sharing scheme that incentivizes stake pools to develop in a way that ensures fairness. At the same time, the system makes it possible for stakeholders to delegate to a stake pool, or set up their own pool. In the latter case, pool operators ‘pledge’ their stake. This is a commitment to ‘lock up’ a certain amount of stake to help safeguard the network.

Making the process easy to use is important because the more stakeholders are engaged in the system, the more secure the distributed ledger. Most ada holders will not want to run a pool. Instead, they delegate their stake to one or more pools that, in their opinion, best serve their interests and the interest of the community at large. Cardano is non-custodial, so no funds are locked up at any time, and all stakeholders are encouraged to delegate their ada stake from their wallets.

Dominance is avoided by limiting the control of individual stakeholders. Stake pool operators exert an influence in the system proportional to the resources controlled by their pool, and not to their own resources. The higher the control by one individual of the system, the worse its security, leading to the possibility of a 51% attack to control the blockchain. Another danger is of stakeholders creating many pools, which can also lead to increased leverage – and even a [Sybil attack](https://iohk.io/en/blog/posts/2018/10/29/preventing-sybil-attacks/).

Professor Kiayias has described how the mechanism at the heart of Ouroboros behaves, both in [blog posts](https://iohk.io/en/blog/posts/2018/10/23/stake-pools-in-cardano/) and in the ground-breaking academic paper that proved the security of the Ouroboros.

The Ouroboros mechanism provides the right set of constraints for the system to converge to a certain number of equally-sized pools. Operators are rewarded appropriately for their performance, their cost efficiency, and their general contributions to the ecosystem.

The rewards-sharing scheme ensures that smaller and medium pools can contribute to the ecosystem without becoming gobbled up into larger operators and consortia, as has happened with other blockchain systems, particularly Bitcoin. The scheme is also designed so that as soon as stake delegated to a single pool increases above a certain threshold, the rewards diminish. That encourages ada holders to switch to a different pool to improve their rewards, which in turn bolsters the spread of stake across a larger number of pools. The network is more secure through a larger number of participants validating transactions.

At the end of each epoch – a measure of time used by Ouroboros, lasting about five days – rewards are distributed. As well as stake pool operating costs, earnings are transferred automatically to each stakeholder’s private wallet by the Ouroboros protocol itself, not the stake pool.

One term you may have come across is ‘liquid staking’. This refers to a problem with some other blockchains whereby the stake associated with a cryptocurrency is ‘locked’ by the staking process so cannot be used for other purposes, such as voting. This is not a problem with Cardano; the stake is always liquid. Also, there is no ‘lock in’ period before a stake becomes active or that might delay a coin being spent or used in any other way.

## Choosing a stake pool

As well as deciding on an amount to pledge, stake pool operators have to set out their profit margin and operational costs. At the end of each epoch, rewards are distributed to the stake pools. The rewards are distributed to the pool and the stakeholders in three stages. First, operational costs are automatically retained by the operator, ensuring that stake pools remain viable. Second, the operator’s profit is calculated and withheld by the pool. Finally, all the ada holders who have delegated to the pool are rewarded in ada, the amount being proportional to their stake.

Professor Kiayias suggests that ada holders think of delegation as a [‘vote of confidence’](https://iohk.io/en/blog/posts/2020/11/13/the-general-perspective-on-staking-in-cardano/) – a way to show support for a pool's mission or goals. Ada owners should use tools like [adapools.org](//adapools.org) and [pooltool.io](//pooltool.io) to investigate factors that might influence their staking decision. These might include a pool’s culture, ranking, resources, community presence, professionalism, and long-term commitment to the Cardano ecosystem. Watch out for news of improvements to the ranking mechanism in the Daedalus wallet interface, for example. Finally, check the pool’s performance and updates regularly to ensure that your choice and assessment remains the best possible.

_Nothing in this article is intended to be professional advice, including without limitation, financial, investment, legal or tax advice. Input Output Global, Inc. is not responsible for your use of or reliance on any information in this article._
