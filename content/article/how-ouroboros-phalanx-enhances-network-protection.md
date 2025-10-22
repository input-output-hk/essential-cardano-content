---
title: How Ouroboros Phalanx enhances network protection
tags:
  - Ouroboros
  - Consensus
  - Development
  - Throughput
  - security
url: ""
image: https://ucarecdn.com/1b63d46b-6fd3-4907-9803-0990dc1ada60/
image_text: ""
---

_By Kris Bennett, developer relations specialist on the innovation team_

### Ouroboros Phalanx raises Cardano’s security bar with powerful protection against stake-based attacks – ensuring faster transactions and stronger network integrity

Imagine Cardano as a bustling city where everyone has a fair chance to ‘lead’ – deciding which transactions get added to the blockchain. But what if a sneaky group could rig the system, stacking the deck to control more turns than they should? That's the risk of ‘grinding attacks’ in Cardano's current setup. 

Today, Input | Output is excited to introduce Ouroboros Phalanx – think of it as a digital shield wall, inspired by ancient warriors locking shields to fend off invaders. Phalanx makes these attacks way harder and more expensive, keeping Cardano secure, fair, and fast for everyone. Phalanx is one of six projects funded via an Input | Output Research (IOR) proposal to Intersect, and endorsed by the community. This project is currently in its technical validation phase as part of its closure state. 

In simple terms, Phalanx upgrades Cardano's ‘random draw’ system (how leaders are picked) to be tamper-resistant. Phalanx adds an extra layer of protection to the rock-solid Praos protocol. Phalanx belongs to the broader Ouroboros family of consensus protocols that power Cardano’s proof-of-stake system. Ouroboros began with the original Classic and Praos designs, which established secure and energy-efficient block production. Later iterations, such as Genesis, Peras, and Leios, aim to extend Ouroboros to support features like dynamic availability, scalability, and higher throughput. Phalanx builds directly on Praos, strengthening its randomness mechanism to make Cardano even more resilient to manipulation as the network scales.

Let's break it down without the jargon.

## The hidden danger: why attacks matter

Cardano uses a lottery-like system within the Ouroboros Praos consensus to pick who adds the next block. It's fair because it's random – like drawing names from a hat. But bad actors with a significant stake (think 20% or more of ada) could ‘grind’ the system: they try tons of options super fast to pick the one that lets them win more often. This could lead to:

*   Delaying transactions (slowing down the network)
    
*   Sneaky tricks like double-spending or censoring deals
    
*   Undermining trust, as the city (Cardano) feels less safe.
    

It's like someone peeking at lottery tickets and swapping them out. Although it's not common yet, as Cardano grows, we need to stay ahead.

## How Phalanx works: the shield in action

Phalanx borrows from ancient tactics: soldiers in a phalanx formation were hard to break because they worked together tightly. Here, it adds a ‘slow and steady’ layer to the randomness process using something called verifiable delay functions (VDFs) – fancy math that takes real effort to compute, but is easy to check.

*   **Extends the process:** instead of quick draws, randomness builds over two epochs (10 days), making cheats need massive computing power.
    
*   **Honest players win easy:** regular stake pools do small, manageable tasks – like each soldier holding one shield.
    
*   **Attackers pay big:** cheaters must redo everything for each try, costing billions in hardware or energy. It's like forcing them to climb a mountain instead of a hill.
    

Analogy: Picture a raffle where tickets are drawn normally. Phalanx adds a puzzle to each ticket – easy for one, but if you're trying to fake thousands, you're buried in work.

## Real-world benefits: faster, safer Cardano

With Phalanx:

*   **Quicker confirmations:** transactions settle faster (20-30% reduction in wait times) because the system trusts randomness more.
    
*   **Stronger defense:** reduces attack risks by exponentially increasing the costs of an attack, thereby protecting your ada and DApps from disruptions.
    
*   **Eco-friendly boost:** by deterring wasteful attacks, it keeps Cardano green and efficient.
    
*   **Future-proof:** complements upgrades like [Peras](https://iohk.io/en/blog/posts/2025/04/11/ouroboros-peras-accelerating-transaction-settlement-on-cardano/) (super-fast finality) for even smoother experiences.
    

For users: your wallet feels more secure knowing your transaction is safe, no more worries about roll-backs. For developers: Build without worrying about network hiccups. For the community: Cardano stays decentralized and fair.

## What's next?

Currently, Phalanx operates at the protocol level – the next phase will commence once nodes start integrating this work. Phalanx will roll out via a hard fork after testnet success. Governance lets the community tweak settings. Dive deeper into our [technical post](https://iohk.io/en/blog/posts/2025/10/22/introducing-ouroboros-phalanx-breaking-the-economics-of-grinding-attacks/) or [check out the repo](https://github.com/input-output-hk/ouroboros-phalanx-protocol) for more details! 

Cardano isn't just building a blockchain – we're forging a fortress. Phalanx is the latest shield. Stay tuned!
