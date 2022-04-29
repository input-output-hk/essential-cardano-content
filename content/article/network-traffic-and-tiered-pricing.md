---
title: Network traffic and tiered pricing
tags:
  - Development
  - Fees
  - Transaction
url: ""
image: https://ucarecdn.com/7f4a6f09-d7be-4e4f-91fb-49f49e194bc2/
image_text: A picture of a road with car lights on both sides of the road
---

**Original author:**

[Philip Lazos](https://iohk.io/en/team/philip-lazos) - Research Fellow

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2021/11/26/network-traffic-and-tiered-pricing/): November 26, 2021

**Blurb**:

Decentralized finance will continue to build demand on Cardano. Our research project is looking at ways to maintain fair access and throughput for every user

**Article**:

A recent blog post outlined some of the ways in which the Cardano network would [flex and evolve](https://iohk.io/en/blog/posts/2021/11/22/slow-and-steady-wins-the-race-network-evolution-for-network-growth/) to meet the global demands of smart contracts and DeFi. Similarly, it will become necessary to upgrade the transaction fee system used for Cardano.

The current system is simple and fair: every transaction is treated the same and it is not possible for users to alter their priority by paying higher fees. As long as the throughput capacity is comparable to the demand, this approach works well.

There are, however, drawbacks. As the use of Cardano increases, there will, eventually, come a point when not all transactions will be able to be included in the blockchain, even with adjustments to the parameterization. Although increasing the capacity of the main chain and/or diverting transactions to [Hydra](https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/) or other layer 2 solutions can alleviate this concern, the core system must still work in an agile way in all possible cases and at all times.

This is especially relevant in the case of a denial of service (DoS) attack. With the system as is, an attacker could take advantage of the fair treatment and pass off their malicious spam as legitimate transactions, increasing waiting times for everyone else. There are measures in place (eg, relating to transaction propagation through the peer-to-peer network) that make such an attack technically challenging. However, for extra protection, we would like to be able to increase the costs of such attacks without jeopardizing the fairness and price efficiency of the whole system.

This is a topic members of IO Group’s research team have been looking at this year. The resulting approach proposed in this post maintains the pillars of Cardano transaction processing (predictability, fairness, and inexpensive access) while mitigating the issues that could arise from greater demand. Our approach puts forth a novel transaction fee mechanism for blockchains. The key to the design is partitioning each block into three ‘tiers’ based on the use case. Each tier makes up a set percentage of the maximum block size and is designed for different types of transactions (Figure 1). The tiers, along with the suggested split we are analyzing at present, would be:

*   fair (50%)
    
*   balanced (30%)
    
*   immediate (20%)
    

![](https://ucarecdn.com/808dca82-6d6e-4512-a706-d8592ea470f2/)

#### _Figure 1. Each block would be split into three tiers._

We will discuss the fair segment last because it works differently from the other two. Balanced and immediate work by having a ‘fee threshold’, which is different for each. To be included in a block, transaction issuers would specify the tier of service they need. This can be done by setting a maximum fee for the transaction. Then, each block would be filled starting with the immediate, then balanced, and finally fair tiers. Similar transactions within the same tier would pay the same fee. To make this choice simple, each transaction would only be charged the lowest fee that would guarantee its entry in the block. After every block, fees for immediate and balanced tiers would be updated dynamically and deterministically (reflecting the level of demand in previous blocks) to ensure that each segment uses its target percentage of the block.

The difference between immediate and balanced tiers is in the way fees would be updated, specifically the ‘speed’ at which they adjust given the current load. The threshold for immediate service would always be higher than balanced and would react more sharply to demand, ensuring that the transaction asking for it would be serviced as soon as possible. The balanced threshold would be slower to adapt and more stable: this would make it unsuitable for time-sensitive transactions but would provide a lower, more reliable price at the expense of a more varied waiting time.

While the balanced and immediate tiers aim to handle transactions with different levels of urgency, the fair tier handles ordinary transactions. The fair segment is intended to serve as a refinement of the current system in Cardano, keeping the fees low (or in the future even stable, by pegging to a basket of commodities/fiat, as explained in the [post on stablefees](https://iohk.io/en/blog/posts/2021/06/10/stablefees-and-the-decentralized-reserve-system/)) and removing any unpredictability from the user’s perspective. As long as demand is low (and the transactions fit into half of the block) this segment would function as Cardano does now.

However, once demand rises, a special mechanism would kick in for fair tier transactions. The mechanism would filter transactions in a manner independent of fees and be based on a prioritization function. One example of this would be to give priority to transactions depending on the age and amount of their UTXOs. In particular, the priority of a given transaction would be equal to the sum of the amount of each input multiplied by its age and then divided by the total size of the transactions in bytes. This priority could be used in conjunction with a threshold (updated dynamically after every block) that would filter transactions whose priority is too low. Such an approach guarantees liveness for each transaction at a low and predictable price and limits the effect a malicious attacker (or a surge of demand) could have on prices, by always providing an inexpensive way into each block.

The tiered pricing idea presented here also extends and clarifies the concept of the multiplier that we introduced in the stablefees post. Viewed in this way, each of the three tiers is associated with a deterministically calculated multiplier (with the fair tier always at a multiplier of 1) whose value depends on the congestion of the respective tier in previous blocks.

This mechanism is different from current pricing approaches, as used by Bitcoin or Ethereum (even with Ethereum Improvement Proposal 1559), where there is a variable fee that each transaction must exceed to make it into a block. The downside of this approach is that the fee everyone needs to pay is dictated by the ‘richest’ consumers. Even worse, this is the fee paid by the richest consumers to make it into a block ‘immediately’. In addition, even though the fees are mostly a function of supply and demand, these particular types of transaction fee mechanisms can inadvertently ‘shape’ demand, or inadvertently increase prices because the optimal bidding strategy is not clear to users. Imagine if the transaction fees of Bitcoin were halved suddenly and everyone forgot what they used to be, would they still rise to their current levels? Answering ‘no’ to this question illustrates the downsides of such mechanisms and is a predicament that tiered pricing precludes by design.

The tiered approach is more refined. It understands that not every transaction has the same needs, ensuring that different use cases can happen simultaneously and making it easy for users to choose the desired type of service. In this way, tiered pricing makes it possible to have predictable and fair fees while managing periods of congestion on the main chain. Combined with design improvements to be revealed in later posts that focus on increasing the raw throughput capacity and processing power of the main chain, tiered pricing shows how Cardano will be able to accommodate any circumstance of transaction processing demand.

_I would like to acknowledge the contributions of Giorgos Panagiotakos, Aggelos Kiayias, and Elias Koutsoupias to this post. Together we form the research group working on the design of this mechanism. A technical paper will be available soon._
