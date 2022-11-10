---
title: "Astarter: introducing a framework for merge staking protocol rewards"
tags:
  - Cardano
  - Emurgo
  - ada
  - ASTARTER
url: ""
image: https://ucarecdn.com/bf8c520a-7a6d-4520-b41c-ea76842e4269/
image_text: Merge Staking Protocol Rewards
---

There are many reasons for Astarter to develop a two-stage ISPO. For instance, to incentivize both ada and AA staking for Cardano and Astarter ecosystems, incentive reward for participation in the ecosystems, and to create an innovative way to fundraise and invest in projects with minimal risk.

As an ISPO distribution method, MSP distributes project tokens in a more targeted way than any other ISPO while at the same time addressing issues relating to value addition and utility.

The first stage of the Astarter ISPO that enables the community to accumulate an assignment of native AA tokens from delegating ada to Astarter AA1 Stake pool is underway. The accumulated AA tokens may be utilized in the second stage of the ISPO, Merge Staking.

This article focuses primarily on the second stage of Astarter ISPO, Merge Staking Protocol (MSP) rewards. To read more about the first stage of the ISPO, follow [this link](https://medium.com/astarter/astarter-ispo-stage1-launch-1350f4e36c5).

**AA Tokenomics**

AA token is the heart of Astarter, which acts as a governance token and native utility token for the community and project infrastructure.  
![AA](https://ucarecdn.com/d257c93d-ebbd-458d-81ab-77d3ec00f623/)

AA tokens staked within the Astarter staking ecosystem can contribute towards merge-staking rewards in the second stage of the ISPO (Merge Staking Protocol). The Astarter staking ecosystem is multifaceted with elements and functions that include Launchpad tier-level access, Astarter Decentralised Exchange (ADEX) AMM liquidity provisions, Money Market yield-generating lending, and collateralized borrowing.

At the same time, the AA token is also the reward payment token of Astarter, AA1 pool. The rewards to users participating in Astarter ISPO stage 1 are in the form of AA tokens. For more on Astarter [Tokenomics](https://medium.com/astarter/astarter-aa-tokenomics-d99cd74703a8).

**Merge Staking Protocol**

In addition to the Astarter ISPO AA1 stake pool, we also introduced two MSP programs, partner and associate, for SPOs to participate in the second stage. The difference between these two programs is; that partner MSP pools hold an allocated AA and earn MSP partner rewards. The initial number of associate and partner pool slots is limited to allow the protocol to scale. The reward structure for partner pools is discussed in greater detail later in a follow-up the article.

**Merge Staking Protocol Rewards**

In regards to the second stage of the ISPO Merge Staking Protocol rewards, there is a two-step process to earning AA through Merge Staking as follows;

1) Delegation of ada to Astarter AA1 or an MSP pool, This is ada delegated to earn Cardano protocol staking rewards or other rewards depending on the chosen pool.

2) Staking AA in the Astarter staking ecosystem, the Astarter staking ecosystem is multifaceted in that it has different rewards and incentives specific to each core product which adds to the AA token utility.

The combination of 1) ada delegated and 2) AA Staked in the steps above is a combined requirement for Merge Staking AA rewards. Merge staking AA rewards come on top of any delegation or staking reward in 1 and 2 above.

While the exact formula is not as simple as ada Delegation + AA Stake, the combination of the two produces a computation of a virtual stake.

`AvgStake x N = Virtual Stake`

`AvgStake` is the average amount of AA the user has staked within the Astarter ecosystem.

`N` is the sum of multipliers and includes a merge staking multiplier incremental to the combined ada delegation to Astarter AA1 or an MSP pool and AA stake within the Astarter ecosystem.

This adaptive approach allows for additional multipliers to increase the Virtual Stake and subsequent AA rewards earned; for example, early participation, duration, NFT, or Multi Token multipliers.

**Example Rewards**

Data modeling potential rewards under different scenarios based on the framework outlined in this article produce some interesting results. While still in development and subject to change the following example demonstrates potential rewards.

The amount of AA distributed per epoch adjusts depending on the sum of all Virtual Stakes (of all participants) so that more participants and AA staked can result in balanced rewards over time. There is a forecast of between 30% — 300% expected APR for Merge Staking AA.

For every participant, the average AA staked in the Astarter ecosystem multiplied by the sum of all multipliers will give a virtual stake:

`AvgAAStaked * SUM(Multipliers)= Virtual Stake`

To calculate participant AA rewards per epoch during stage 2 Merge Staking. The system divides the Virtual Stake by the sum of all Virtual Stakes (of all participants) and multiplies each share by the amount of AA distributed each epoch.

`AA rewards = Virtual Stake / Sum(All Virtual Staked) * AA rewards per epoch`

**Example Scenario**

> **_An early participant delegating 1000 ada to Astarter AA1 or an MSP pool has collected an AWL NFT and holds it in the same delegating wallet. When merge staking begins, the participant stakes 500 AA in the Astarter staking ecosystem._**
> 
> **_The 500 AA stake multiplied by 2.274 (the sum of multipliers) gives a Virtual Stake of 1,137_**
> 
> **_There is a total Virtual Stake by all users of 1,534,222_**
> 
> **_The MSP reward pot for the epoch is 12,153 AA_**
> 
> **_1,137 divided by 1,534.222  
> Multiplied by 12,153  
> 9.007 AA rewards (132% APR)_**

**Introduction to Merge Staking Protocol multipliers**

Multipliers determine the amount of virtual stake through simple multiplication. Therefore the greater the number of multipliers, the greater the virtual stake and subsequent token rewards.

The maximum bonus multiplier, at least for now, is four and includes the following multipliers;

*   Basic Bonus Multiplier
    
*   Merge Stake Multiplier
    
*   Early Bird Multiplier
    
*   NFTs Held Multiplier
    

**Basic Bonus Multiplier**

This Multiplier gets granted to all Merge Skating participants delegating ada to an MSP pool and Staking AA in the Astarter staking ecosystem.

**Merge Staking multiplier**

The Merge Staking multiplier is relative to the combined ada/AA stake. Delegated ada and staked AA thresholds are combined to achieve the merge staking multiplier.

After the stage 2 Merge Staking starts, participants will earn MSP AA rewards based on the amount of ada delegation to Astarter AA1 or a participating MSP Pool and the amount of AA staked in the Astarter staking ecosystem.

More ada delegated to Astarter AA1 or an MSP pool, and the more AA staked to the Astarter ecosystem, will increase the Merge Staking multiplier.

**Earlybird Multiplier**

The first early participation bonus applies to delegators participating from epoch 366–369 with a sustained average delegation over a specific time after stage 2 Merge Staking starts.

More ada delegated to Astarter AA1 or our MSP pools during a period will give a higher Earlybird multiplier.

**NFT Multipliers**

Astarter AWLs NFT series is packed with ISPO and Merge Staking Protocol utility, and while still being developed, the basic principle of this utility is thus;

Holding Astarter NFTs in the same wallet that is delegating ada to Astarter AA1 or an MSP pool and Staking AA in the Astarter ecosystem will result in an NFT multiplier. NFT Multipliers are specific to Astarter NFT collections and are awarded based on the number of NFTs held up to a maximum.

To conclude this article with a heads up on the first NFT multiplier coming to the Astarter ISPO AA1 pool soon! [Learn how to participate in the Astarter ISPO stage 1](https://medium.com/astarter/how-to-participate-in-astarter-ispo-stage-1-cf14aa3f235e) delegating ada before epoch 380!

Thank you for reading.

**Astarter Social Links**

> [Website](http://astarter.io/) _|_ [Twitter](https://twitter.com/AstarterDefiHub) _|_ [Telegram](https://t.me/astartergroup) _|_ [Medium](https://medium.com/@AstarterDefiHub) _|_ [YouTube](https://youtube.com/c/astartertv)
