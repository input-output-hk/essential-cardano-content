---
title: Hydra - Cardano's solution for ultimate Layer 2 scalability
tags:
  - Hydra
  - Layer 2
  - Development
  - Scalability
url: ""
image: https://ucarecdn.com/5efcc745-823c-4739-862e-6ad807be2782/
image_text: A graphic representing the Hydra beast
---

**Original author:**

[Sebastian Nagel](https://iohk.io/en/team/sebastian-nagel) - Software Engineering Lead

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2021/09/17/hydra-cardano-s-solution-for-ultimate-scalability/): September 17, 2021

**Summary**:

Scalability is baked into the Cardano development roadmap; enter Hydra

**Article**:

The Alonzo upgrade enables the creation of smart contracts, decentralized applications (DApps), and other applications on top of Cardano.

Alonzo marks a significant milestone in the Cardano journey, deploying base-level scripting capability that will, in turn, enable further innovation and network development. It also starts the process of transforming transactions & tokens-based blockchain into a dynamic confluence of creativity, financial inclusion, and decentralized development.

Among the most exciting of the fresh developments enabled by Alonzo is Hydra, a key layer 2 solution to further improve Cardano's scalability by layering a new protocol on top of the existing layer 1 blockchain.

### Hydra: Cardano’s layer 2 solution

In a blockchain network, a consensus algorithm creates a secure and trustless environment by ensuring agreement on transaction history. Cardano uses Ouroboros, an efficient proof-of-stake consensus algorithm, for this very purpose. But Cardano also, just like any permissionless blockchain, faces challenges when trying to scale to achieve the throughput required to support applications in the real world, including payment, identification, game, or mobile services. After all, the blockchain needs to reach global consensus on each and every transaction.

Cardano transactions incur fees. The people who run the network (in the case of Cardano, the stake pool operator community) need to be rewarded appropriately for the part they play, so fees need to be set at a sustainable level. Users want to pay fees they deem acceptable. In addition, the blockchain needs to be protected against Denial-of-Service (DoS) attacks, for example. Fees can therefore not be set so low as to open up undue risk – DoS events must be made prohibitively costly to a potential attacker. Storage is also a concern, as an ever-growing transaction history can lead to storage problems. Effectively, the most successful blockchains risk becoming ‘victims’ of that very success.

Hydra is a layer 2 scalability solution that seeks to address all these concerns and aims to maximize throughput, minimize latency, incur low to no costs, and greatly reduce storage requirements.

### Scaling isomorphically

So how does it do this? By providing a more efficient means of processing transactions off-chain for a set of users, while using the main-chain ledger as the secure settlement layer, Hydra keeps security guarantees while remaining loosely coupled to the main chain. Not requiring global consensus, it can adapt to a broad range of applications. For example, Hydra allows Tx fees and minimum UTXO Value to be configured as low as 1 or 2 lovelaces, critical to microtransactions and the use cases these unlock.

Most importantly though, Hydra introduces the concept of [isomorphic state channels](https://eprint.iacr.org/2020/299.pdf): that is, to reuse the same ledger representation to yield uniform, off-chain ledger siblings, which we call Heads (hence the Hydra name, which references the [mythological, multi-headed creature](https://en.wikipedia.org/wiki/Lernaean_Hydra)). Specifically for Cardano, this means that native assets, non-fungible tokens (NFTs), and Plutus scripting are available inside _each_ Hydra Head. Isomorphism permits a natural extension of the system, rather than a bolted-on one.

Many of the transactions currently handled by the main chain or application running on the main chain can benefit directly from Hydra because it understands just the same transaction formats and signatures. This greatly lowers the entry barrier to Hydra for existing and potential new customers, who can reuse Cardano's tried-and-tested infrastructure for building wallets and applications interacting with the layer 2 system. Also, a Hydra Head can be created without initial funds on a receiving party’s side, which allows for a smooth user experience.

### Developing a proof of concept

We have already implemented the basic Hydra Head protocol as a proof of concept hydra-node. A developer preview will be ready by the time of the upcoming Cardano Summit. This will enable developers (or anyone interested) to run one or more hydra-nodes online, opening a Hydra Head with a limited number of participants, and feeding transactions to it. Users can expect to see a working prototype over a dedicated testnet, plus early benchmarking figures and documentation in this GitHub [repository](https://github.com/input-output-hk/hydra-poc). There likely will not be any user-facing components (wallets, user interface, etc.) available just yet.

It is also important to make a point about transactions per second (TPS), too often rather clumsily used as the sole measure of ‘success’ when it comes to scalability. Some people tend to rate a network on the basis of its maximum throughput measured in throughput (TPS). While this is a reasonable measure for ‘legacy’ systems where there is high predictability and conformity (e.g., the VISA network) it is a less useful metric for distributed systems. Instead, our initial focus is on latency (the time that elapses until a transaction is confirmed) as another, more practical way to measure the speed of blockchain transactions. On the mainnet, the minimum latency is 20 seconds (one block). This is the starting point. In a layer 2 system like Hydra, it is possible to achieve confirmation times of _less than one second_. Terms like ‘one million TPS’ have been used before. It is a bold number, and while this remains an aspirational target, the ultimate goal of any system is the flexibility to grow capability with demand. Throughput measured in TPS per Hydra head is secondary and mostly limited by the available hardware. In principle, by adding increasing numbers of Hydra heads to the system, arbitrarily high throughput can be achieved by the system as a whole.

### Hydra's evolution over time

In the short term, we will keep developing the hydra-node and the Hydra Head protocol until it becomes a solid and stable foundation for the community (and us!) to build real-world applications. These new apps will benefit from fast settling and low-to-no-cost transactions. We are also actively developing other key features, including the support of multiple heads per node, persistence, and Head protocol extensions

In the medium term, say 6-12 months, progress will greatly depend on the results of our research and experimentation, plus feedback from the developer community. We are researching ways to interconnect multiple Hydra Heads to increase the “reach” of our layer 2 solution, for example, and also testing different methods to make it easier to integrate and use Hydra. One of the most exciting visions for the long term is the development of ‘Virtual Heads’ by running the Hydra Head protocol _inside_ Hydra Heads, thus fully utilizing the isomorphism of our Layer 2 solution. Herein lies true, _theoretical limitless_ scalability.

### Flexibility is key to scalability & growth

The overarching concept for Hydra is the provision of a pioneering layer 2 scalability solution suitable for Cardano, a third-generation, UTXO-based blockchain capable of supporting smart contracts. Hydra will drive down costs while increasing throughput and maintaining security.

Hydra replicates the main chain's functionality while minimizing friction for users, but still allows the flexibility of having a different fee/cost structure and timing constraints on layer 2. Any successful ecosystem balances the needs of all users. We want this ecosystem to serve the needs of individual consumers, enterprises, professionals, and the growing list of DApps and their developers.

With the Alonzo hard fork, Cardano will start on a new journey as a smart contract platform, enabling technologies like Hydra, which in turn will dramatically improve Cardano’s scalability, and thus further its adoption.

_At the_ [Cardano Summit 2021](https://summit.cardano.org/), taking place 25-26 September, we’ll talk more about Hydra, its progress to date, and goals for the future. Make sure you join us! And you might also like to check out [this video explainer](https://www.youtube.com/watch?v=7ySUbFpTrAk).

#### _Matthias Benkort, Arnaud Bailly, and Fernando Sanchez also contributed to this piece._
