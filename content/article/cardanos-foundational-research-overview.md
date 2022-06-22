---
title: Cardano's foundational research overview
tags:
  - Research
  - Ouroboros
  - Staking
  - Stake Pool
  - Proof of stake
url: ""
image: https://ucarecdn.com/9bf2a9dd-8ede-49e1-8920-7a096394eaaf/
image_text: "Here’s the first of a series of blog posts taking a closer look at
  the research underpinning Cardano "
---

**Author**:

Olga Hryniuk - Technical Writer

**Summary**:

Here’s the first of a series of blog posts taking a closer look at the research underpinning Cardano

**Article**:

Since its inception in 2015, the Cardano project had one clear goal: to alter the way cryptocurrencies are designed and developed. Instead of having a single, authoritative whitepaper, the project combined a range of scientific design principles and engineering best practices to produce a solid, pioneering, research-based blockchain. The key ideas of Cardano development were presented in the '[Why Cardano](https://why.cardano.org/en/introduction/motivation/)' essay and the '[Cardano whiteboard](https://www.youtube.com/watch?v=Ja9D0kpksxw)' video by Charles Hoskinson. This research-driven approach positions Cardano uniquely among other blockchain platforms.

A set of the best practices, ideas, and contributions formed Cardano’s foundation for building a secure, decentralized, and scalable ledger. There is now a substantial body of research, represented by Input Output Global’s extensive [library of papers](https://iohk.io/research/library/), which at the time of writing numbers 139. Many of them have been peer-reviewed and accepted at top-tier academic conferences. [According to Google Scholar](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=ouroboros&btnG=), the original Ouroboros paper has been cited more than 1,200 times.

## Research papers

Charles Hoskinson, IOG CEO, said:

> Decentralization imposes major technical challenges to financial systems worldwide and IOG Research is interested in every single one of them.

The vision of IOG Research is to be a leading institution in the academic study of blockchain infrastructures and fintech, and, more broadly, distributed systems secured by cryptographic techniques and incentivized through economic game theory. IOG has established its reputation for tackling difficult research questions in general, and for building formal and reliable foundations for the fintech blockchain infrastructure industry in particular.

In this blog post, we take a look at some of the research papers that set the foundations of Cardano.

### Ouroboros

The initial paper to drive the project's research was ‘[Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol](https://eprint.iacr.org/2016/889.pdf)’, which was academically peer-reviewed and published at Crypto 2017.

Consensus lies at the heart of blockchain networks. Ouroboros is the proof-of-stake consensus protocol for Cardano. The name ‘Ouroboros’ comes from an ancient symbol that represents eternity and endless return. For Cardano, Ouroboros symbolizes the theoretical eternity of a blockchain.

Since 2017, a number of Ouroboros protocol versions have been produced. Each ‘flavor’ of Ouroboros adds different features and functionality to support Cardano’s evolution. Starting with [Ouroboros Classic](https://eprint.iacr.org/2016/889.pdf), the ledger has undergone regular upgrades. Ouroboros Classic established the foundation for an energy-efficient proof-of-stake consensus protocol in a federated setting (Cardano’s Byron development theme). [Praos](https://eprint.iacr.org/2017/573.pdf), [Genesis](https://eprint.iacr.org/2018/378.pdf), and [Chronos](https://eprint.iacr.org/2019/838.pdf) were designed to ensure enhanced security in a fully permissionless setting. While Genesis improved the Praos protocol, Chronos will make Genesis even more robust when implemented. [This blog post](https://iohk.io/en/blog/posts/2022/06/03/from-classic-to-chronos-the-implementations-of-ouroboros-explained/) describes the evolution of Ouroboros in more detail.

Coupled with unique technology and mathematically verified mechanisms, Ouroboros realizes a ‘[Nakamoto-style consensus](https://bitcoin.org/bitcoin.pdf)’ adapted for proof of stake. Ouroboros provides the security and robustness guarantees as we know them from Bitcoin’s proof-of-work consensus while ensuring greater efficiency in terms of energy consumption. Rather than relying on miners to solve computationally complex problems to create a block, proof-of-stake participants create and validate blocks based on the stake they control in the network.

In his blog post, [The Ouroboros path to decentralization](https://iohk.io/en/blog/posts/2020/06/23/the-ouroboros-path-to-decentralization/), [Professor Aggelos Kiayias](https://iohk.io/en/team/aggelos-kiayias), Chief Scientist at IOG and the chair in cybersecurity and privacy at the University of Edinburgh, says:

> Ouroboros is a decentralized ledger protocol that is analyzed in the context of both Byzantine and rational behavior. What makes the protocol unique is the combination of such design elements as stake, dynamic availability, trustless setting, and a reward-sharing incentive scheme.

### Delegation and stake pools

Transitioning from a federated setting to full decentralization required some adjustments to the protocol. It was essential to provide the means for proper account management (to enable a stake delegation technique) and incentivized participation.

The paper ‘[Account Management in Proof of Stake Ledgers](https://eprint.iacr.org/2020/525.pdf)’ – published in 2020 – explores ways to maximize stakeholders' participation in network maintenance activities.

Typically, proof-of-stake blockchains depend – by nature – on the active participation of stakeholders. Stakeholders need to be constantly online to validate network transactions and produce new blocks. However, not every stakeholder has the ability or desire to constantly be online. To ensure that the system is robust and remains secure in such conditions, it is important to enable different types of stakeholder participation.

Stake delegation addresses this problem and allows a user to participate in network activities by delegating their stake to other participants. Stake delegation gives rise to [stake pools](https://iohk.io/en/blog/posts/2018/10/23/stake-pools-in-cardano/) – server nodes holding the staking rights of multiple stakeholders. The paper mathematically analyzes and defines the delegation technique and also implements core wallet properties to process secure payments.

The paper ‘[Reward Sharing Schemes for Stake Pools](https://arxiv.org/ftp/arxiv/papers/1807/1807.11218.pdf)’, also published in 2020, introduces mechanisms to incentivize stakeholders for their activities.

The power of a stake pool comes from the accumulation of stake that is delegated to it. To avoid monopolization of network validation activities by one single pool, it is essential that network participants are incentivized to delegate to a large set of different pools.

The reward-sharing scheme describes a means to [properly incentivize](https://iohk.io/en/blog/posts/2020/11/30/blockchain-reward-sharing-a-comparative-systematization-from-first-principles/) stake pool operators (SPOs) and delegators for their activities such as transaction validation, block creation, etc. The research shows that the proposed reward mechanism steers the network to a desired level of decentralization and, in particular, offers protection against Sybil attacks. This is enabled by a so-called [pledging mechanism](https://iohk.io/en/blog/posts/2020/05/12/how-pledging-encourages-a-healthy-decentralized-cardano-ecosystem/), which greatly disincentives the formation of multiple stake pools controlled by a single real-world entity.

Cardano’s incentive model established an ecosystem where rational participants benefit from following the protocol, thereby enabling the secure and efficient operation of the Cardano blockchain. The result is a reliably operating, decentralized ledger secured by cryptographic techniques and game-theoretic reward mechanisms.

_Stay tuned! In our next posts, we’ll take a closer look at some of the research papers that established the foundation for a functional smart-contract platform. Specifically, we’ll start with the research that enabled an extended UTxO model, explain what that actually means and how it enables the ledger to handle multi-assets and fees with a variety of benefits for users._
