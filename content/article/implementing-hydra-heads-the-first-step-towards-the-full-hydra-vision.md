---
title: "Implementing Hydra Heads: the first step towards the full Hydra vision"
tags:
  - Hydra
  - Scalability
  - Development
url: ""
image: https://ucarecdn.com/5f118db5-4d73-41f5-ab74-e3516fc8a68c/
image_text: A picture of a night's sky with a constellation
---

**Original author:**

Matthias Benkort

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2022/02/03/implementing-hydra-heads-the-first-step-towards-the-full-hydra-vision/): February 3, 2022

**Summary**:

The Hydra Head, the first in a suite of protocols, is an important element of Cardano’s scaling journey. Let’s see how it fits into the bigger picture. And maybe bust some myths

**Article**:

We’ve done the science and the theory. We have laid the foundations for a scalable, versatile, and high-throughput blockchain. Now it’s time for steady growth and system enhancements. With the goal of creating an optimized ecosystem to support and foster decentralized applications (DApps) development, Cardano is in the foothills of the Basho phase. With smart contracts already in place, Basho is all about [scaling](https://iohk.io/en/blog/posts/2022/01/14/how-we-re-scaling-cardano-in-2022/) and network optimization. The [Hydra](https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/) protocol family is a key component of this.

We have talked about Hydra before. Hydra is an ensemble of layer 2 solutions designed to address network security and scalability capabilities. Originally conceived within the work of the Ouroboros research team, it has in fact forged an independent path since the original paper's publication. Hydra offers increased throughput, minimized latency, and cost-efficient solutions without substantial storage requirements. The Hydra Head protocol was already shaping up back in [2020](https://eprint.iacr.org/2020/299) and since then our thinking has developed – particularly throughout this early implementation and proof of concept stage. Building on that initial idea, the **Hydra Head protocol** matured into [a proof of concept](https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/) and has continued to do so as we have headed toward a more defined implementation for the testnet MVP.

We have seen plenty of excitement (great!) along with misconceptions and misunderstandings (not so great). Most of these have arisen from the idea statement, rather than the actual protocol _implementation_ and some of our earlier blogs have perhaps contributed to these misunderstandings. But the Hydra Head protocol isn’t solely about SPO implementation as much as the theoretical ‘1 million TPS’ – which needs to be caveated and better explained.

In this article, we – the Hydra engineering team – outline our current progress, our approach, and our near and long-term roadmap. We’ll demystify some misconceptions, clarify the benefits and reflect on development challenges.

## Hydra Head in a nutshell

Let’s first re-introduce Hydra Heads, which involve not only a robust networking layer between peers and an integrated Cardano ledger but also, several on-chain scripts (smart contracts) that drive the lifecycle of a Hydra Head.

A Hydra Head is a provably secure [isomorphic state channel](https://www.google.com/url?q=https://eprint.iacr.org/2020/299.pdf&sa=D&source=docs&ust=1643024354663393&usg=AOvVaw2qBMRPzWu0H_7oIkQZkQX-). Simply put, it is an off-chain mini-ledger between a restricted set of participants, which works similarly (albeit significantly quicker) to the on-chain main ledger.

The first thing to understand is that a channel is a communication path between two or more peers. To be part of a Head means being one of those peers. Channels form isolated networks that can evolve in parallel to the main network. On these alternative networks, participants follow a different, simpler, consensus algorithm: everyone needs to agree on all transactions flowing through. A consequence of this is that, as a participant, I cannot lose money I haven't explicitly agreed to lose. Why? Because any valid transaction requires my _explicit_ approval.

When forming a Head, participants may commit funds to it. This means moving funds on-chain to a script address that locks them under specific rules. The script guarantees safe execution of the protocol on-chain, and in particular, that participants cannot cheat one another. At any time, however, any participant may decide to quit the Head by closing it. In this case, all participants walk away with the latest state they had agreed to off-chain, on their parallel network.

Think of Heads as ‘private poker tables’ where participants bring their own chips to play the game. Participants can play for as long as they want. If someone doesn't play, then the game doesn't progress. Yet, participants are still free to walk away with their chips. If they do so, the game ends with the current wealth distribution.

![Hydra Head (simplified) lifecycle](https://ucarecdn.com/ca9ea96a-e1f4-46f0-8148-cf6d1ad0022e/)

**_Figure 1_**_. Hydra Head (simplified) life cycle_

The dealer at the table (the on-chain script) ensures that people play by the rules and don't cheat. In the end, there are as many chips out as there were chips in, but they may have been redistributed during the course of the game. While the final result is known outside of the table, the history of all actions that happened during the game is only known to the participants.

This protocol is one of a whole suite of protocols that we usually refer to as ‘Hydra’. The current engineering effort is focused on implementing the Hydra Head protocol as published in [Hydra: Fast Isomorphic State-Channels](https://eprint.iacr.org/2020/299) by Chakravarty et al.

Around the end of 2021, Maxim Jourenko, Mario Larangeira, and Keisuke Tanaka published an iteration on top of Hydra Head called [Interhead Hydra: Two Heads are Better than One](https://eprint.iacr.org/2021/1188). This iteration defines a method for interconnecting two Heads together enabling, in the long run, the creation of a network of interconnected Hydra Heads. Previously, there were mentions of other protocols like the ‘Hydra Tail’. However, those are still under research, along with new ideas coming from the recent work on the Hydra Head protocol.

## Hydra misconceptions

Recently we have seen a lot of commentary positioning Hydra as the ‘ultimate’ solution for Cardano scalability. For sure, Hydra Heads make for a strong foundation to build a scalability layer for Cardano. They are an essential building block that leverages the power of the [Extended Unspent Transaction Output (EUTXO)](https://iohk.io/en/blog/posts/2021/03/12/cardanos-extended-utxo-accounting-model-part-2/) model to enable more complex solutions on top. They are a critical element of the scalability journey, but they are not the _final_ destination.

### Scalability isn’t about a million TPS

Before talking about scalability metrics, let’s clarify a few things about transactions per second (TPS). Amongst all those available, TPS is probably the least meaningful metric to consider as a means of comparison. Transactions come in different shapes and sizes. While this is true for Cardano, it’s even more essential when comparing two drastically different systems.

Think about a highway and vehicles. One can look at how many ‘Vehicles Per Second’ (VPS) the highway can handle between two points. Yet, if there’s no common definition of what a vehicle is, then comparing 10 VPS to 100 VPS is seemingly meaningless. If the 10 vehicles in the example refer to massive cargo trucks, does it make sense to compare them to 100 scooters in terms of their delivery capabilities? The same applies to transactions. A transaction carrying hundreds of native assets and outputs is certainly not the same as a single ada payment between two actors.

Using TPS as a metric within the same context (for example, to compare two versions of the Cardano node) is meaningful. Using it as a means of comparison between blockchains isn’t.

With that in mind, we suggest looking not only at throughput but also at finality and concurrency as important metrics to consider and discuss scalability:

*   **throughput**: the volume of data processed by a system in a given amount of time
    
*   [finality](https://docs.cardano.org/core-concepts/chain-confirmation-versus-transaction-confirmation): the time it takes for the result of some action to become immutable and true for everyone in the system
    
*   **concurrency**: the amount of work that can be done by different actors without blocking each other
    

Hydra Heads excel in achieving near-instant finality within a Head. The process of setting up and closing a Head can take a few blocks, but once established, transactions can flow rapidly across collaborative participants. Since Hydra Heads also use the EUTXO model, they can process non-conflicting transactions concurrently, which – coupled with good networking – allows for optimal use of the available resources. The first simulations of the Hydra Head protocol back in 2020 suggested a very promising ‘1000 TPS’. We are now in the process of benchmarking the real implementation in terms of throughput and finality.

One caveat: a Hydra Head is a very _local_ construct within a small group of participants. These groups will initially be independent and thus, looking at the sum of their individual metrics as a whole is misleading. Since groups are independent and can be independently created at will, it is easy to reach any figure by just adding them up: ten, a thousand, one million, one billion, and so on.

Consequently, while the first version of the Hydra Head protocol will allow for small groups of participants to scale up their traffic at a low cost, it won’t immediately offer a solution for global consumer-to-consumer (micro) payments or NFT sales. Why? Because the consensus inside a Head requires every participant to react to every transaction. And a single head doesn't scale infinitely with the number of participants, at least not without some additional engineering efforts. For example, the interconnection of Hydra Heads paves the way for larger networks of participants, effectively turning local Heads into a global network. We are exploring several other ideas to extend the Hydra Head protocol to broaden the set of use cases it can cover. We will talk more about that in the next sections and in future updates.

### Use cases and the role of SPOs

So when are Heads useful? Hydra Heads shine when a small group of participants needs to process many quick interactions. Imagine, for example, a pay-per-use API service, a bank-to-bank private network, or a fast-paced auction between a seller and a small group of bidders. The use cases are plenty and take various forms. Some of them may be long-running Heads going for months, whereas others may be much shorter and only last a few hours.

Our [initial Hydra research in 2020](https://iohk.io/en/blog/posts/2020/03/26/enter-the-hydra-scaling-distributed-ledgers-the-evidence-based-way/) suggested stake pool operators (SPOs) as _likely_ candidates for running Hydra Heads. However, as the Hydra Head protocol has been researched and built as a proof of concept, we can firmly state that it is a misunderstanding to say that _only_ SPOs should run a Hydra Head to ensure ledger scalability. In fact, SPOs have no intrinsic interest in opening Heads between each other without a reason to transact (tipping or trading NFTs, for example). In a way, SPOs are like any other actor when it comes to the Hydra Head protocol. They can be a participant and open up Heads with other peers, but so can anyone interested.

Admittedly, SPOs are good in operating infrastructure and can be some of the first users running instances of the Hydra Head protocol. Still, this only allows participating SPOs to transact with one another, which limits use cases for end-users. Only advanced layer 2 system designs like the Interhead Hydra protocol require intermediaries to run infrastructure to the benefit of end-users. In fact, we anticipate that one likely setup for Hydra Heads will be providing users with managed Hydra Heads as a service (HaaS). We can achieve this without giving up custody of funds by running the infrastructure on the behalf of end-users, who generally have neither the interest nor the technical skills to maintain such infrastructure.

This is very similar to the current operational model of light wallets and light wallet providers that are much more likely to be running Hydra Heads in the long run. Imagine a network composed of the top light wallet providers within the Cardano ecosystem. Such providers can then facilitate instant and cheap payments between their users while ensuring overall trust.

We also envision that services for developers and DApp providers will be likely candidates for running Hydra Heads. Indeed, DApp developers require access to on-chain information. For that, developers may rely on online services that provide adequate interfaces and typically charge monthly usage fees. Hydra Heads can improve this process by enabling a more decentralized business model with pay-per-use API calls between service providers and DApp developers.

## The roadmap

As a group of protocols that will be delivered over time, and will involve more elaborated layer 2 system designs on top of the Hydra Head protocol, it is crucial that we engage frequently with developers of the Cardano ecosystem. This is not about a ‘big bang’ release but rather an iterative release cycle. We need to understand developer challenges, make sure to meet their needs, and ultimately ensure we are building something useful. This is why we are developing Hydra Head as an open-source GitHub project, starting with an early proof of concept last year. Aiming for a regular and frequent release cadence, we released our initial developer preview in September (0.1.0) followed by a second iteration (0.2.0) before Christmas. The next increment (0.3.0) is coming up in February. We follow semantic versioning and each of those pre-releases (0.x.0) adds features that will be available to our partners and early adopters to test out on private and public Cardano testnet(s).

We’re delighted to announce that _our_ [roadmap is now also available on Github](https://github.com/orgs/input-output-hk/projects/21)! As a means to engage with our community of developers and to be transparent about the course of our development efforts, you will find [feature issues](https://github.com/input-output-hk/hydra-poc/labels/feature), [milestones](https://github.com/input-output-hk/hydra-poc/milestones), and [project boards](https://github.com/input-output-hk/hydra-poc/projects?type=beta) available on the [Hydra Head repository.](https://github.com/input-output-hk/hydra-poc/)

While our focus is on creating meaningful and feature-packed releases as we journey along testnet and later mainnet maturity with version 1.0.0, the roadmap also includes tentative dates. These forecasts stem from both the work accomplished so far and our estimates of the work remaining ahead. We’ll reflect on the content and the dates regularly in an agile manner to keep the roadmap as accurate as possible.

### Community feedback is essential

We will measure our success by how much traffic will be running in Hydra Heads in comparison to the Cardano mainnet. This means that we can’t reach our goal without the community, and Hydra can only be successful if it is useful to current and future Cardano users.

Depending on your time, skills, and expertise, we welcome you to engage with us to share questions, feedback, or contribute to the development effort. This is a stellar opportunity to build a whole ecosystem of layer 2 solutions for Cardano together. The Hydra Head protocol will be the first building block of many advanced solutions to come. At IOG, we have already started working on some of them, but some will inevitably (and fortunately!) be built by the members of our community, which we look forward to supporting.

We’ll talk about Hydra Heads in more detail during February’s mid-month development update. Subscribe to our [Youtube channel](https://www.youtube.com/c/IohkIo) and come join us!

_I’d like to thank Sebastian Nagel, Olga Hryniuk, Mark Irwin, and Tim Harrison for their input and support in preparing this blog post._
