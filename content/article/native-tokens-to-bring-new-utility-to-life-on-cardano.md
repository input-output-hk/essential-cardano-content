---
title: Native tokens to bring new utility to life on Cardano
tags:
  - Blog
  - Shelley
  - Native tokens
  - Transaction
url: ""
image: https://iohk.io/en/blog/posts/2021/02/04/native-tokens-to-bring-new-utility-to-life-on-cardano/
image_text: Portrait of Mary Shelley by Richard Rothwell (1800-1868)
---

**Original author:**

[Tim Harrison](https://iohk.io/en/blog/authors/tim-harrison/page-1/) - VP Community & Ecosystem

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2021/02/04/native-tokens-to-bring-new-utility-to-life-on-cardano/): February 4th, 2021

**Summary**:

Users will soon be able to create their own on-chain tokens for transactions on Cardano

**Article:**

The Goguen rollout continues with another key building block in Cardano’s evolution into a decentralized, multi-asset (MA) smart contract platform. The Goguen ‘Mary’ update – named after author Mary Shelley – introduces the ability to create user-defined tokens. These custom tokens will be ‘native’, so they can be transacted directly on the blockchain, just like ada. While ada will remain Cardano’s principal currency, Cardano will transform into a multi-asset (MA) blockchain, opening up a constellation of possibilities. This MA capability will become a fresh development fulcrum for developers worldwide, further widening Cardano's reach and potential.

### **Another hard fork?**

Yesterday, using what was effectively a hard fork, we successfully deployed the Mary update to the Cardano public testnet, for final testing prior to mainnet deployment. This forking event is a crucial step in the process, as the Testnet is as close an environment to the Mainnet as we can get. Once we deploy all the elements on the Testnet, invite devs to dive in and monitor the results, we can accurately ascertain how the Mainnet will behave.

Hard forks tend to be disruptive events because the history of the pre-forked blockchain is no longer available. Without careful planning, testing, and execution there can be unintended consequences. Earlier blocks can be lost when the protocol rules are altered, for example.

However, Cardano handles hard fork events differently. We use a [hard fork combinator](https://iohk.io/en/blog/posts/2020/05/07/combinator-makes-easy-work-of-shelley-hard-fork/) to combine protocols without triggering service interruptions or a network restart – and, crucially, the combinator maintains the history of the previous blocks.

Cardano has undergone several development stages, and the quest is far from over. Goguen is happening now. We’re seeing the early steps toward Voltaire now with Project Catalyst, and Basho will follow. Each stage brings Cardano's journey closer to its ultimate destination: True decentralization and scalability, utility, and sustainable governance. And each stage will use the combinator, a tried and tested technology, to power the transition. We first used it for the Byron to Shelley upgrade, proving the combinator's effectiveness in achieving a seamless transition. Allegra, which introduced token-locking in December, used it, too, as will Cardano’s next development stages.

### **How we got to Mary**

The advent of token-locking with Allegra, though a relatively small technical change to the Ouroboros protocol in itself, established the threshold for Cardano's multi-asset strategy, and the network's future as a whole. The change readied the platform for smart contracts and the support of native assets other than ada.

Allegra laid down the foundations for Mary with the introduction of production-ready code so engineers could start testing. This work covered features such as defining a monetary script, minting, redeeming and burning tokens, and sending tokens in a transaction.

Just before the holiday break, a programming interface (command line interface -CLI) was added for the wallet backend. Since then, updates for that wallet backend and interface, along with explorer support for multi-currency blocks, have been underway.

We are now finalizing the integration of the completed wallet backend with the metadata registry, and the Rosetta API (a common interface for exchanges to interact with the Cardano blockchain) will be updated to support multi-assets.

### **The metadata registry**

The concept of metadata is worth explaining here. In Cardano, metadata is a description of the native assets that people can read. These assets are stored on-chain using identifiers which are non human-readable. The readable version of this information is stored off the blockchain, in public token registries. These registries – initially managed by the IOG – will ultimately be owned and be configurable by the community, thus enabling another layer of Cardano's decentralization goal. By empowering the community to own and configure these registries, we ensure that the community can fully trust the datasets, as the users themselves are the owners of the data, so it's in their best interest to act honestly.

### **Mary is almost here**

The Mary codebase is due to be deployed on mainnet by the end of February, assuming all final testing goes as planned during the month. Mary's arrival is the first in a series of evolutionary stages that will enable the community to benefit from these new capabilities:

*   Yesterday, we successfully deployed the Goguen ‘Mary’ code onto the Cardano testnet. The SPO community and internal teams are now doing final UAT on this.
    
*   The Cardano explorer (the tool that retrieves and presents blockchain and transaction information from the Cardano network) has also been updated and released for quality assurance testing yesterday.
    
*   We also deployed a basic version of the Daedalus wallet, for testing the wallet backend.
    
*   During February, the Daedalus wallet will be updated to include support for sending, receiving, and viewing multiple tokens , including integration with the new backend interface.
    
*   The metadata registries (Github repos that store user-submitted metadata) will come online a little later this month.
    
*   From the testnet phase onward, there will be support from our Technical Support Desk (TSD), a specific testnet wallet to view and transact tokens, and use of the registry to add metadata to tokens. There is also a dedicated dev support program run by our community team to support developers who want to [get involved](https://input-output.typeform.com/to/OJsf0XcD).
    

The deployment of Goguen ‘Mary’ marks a significant stage in Cardano’s journey. When Mary turns her crypto key within the network, we will unlock the mechanism for users to create their own tokens for a myriad applications: Decentralized Finance (DeFi), and countless other business use cases.

_Next week, we’ll publish a blog post digging a little deeper into core native token functionality and what users can expect. Remember to follow us on_ [Twitter](https://twitter.com/InputOutputHK) and subscribe to our [YouTube channel](https://www.youtube.com/channel/UCBJ0p9aCW-W82TwNM-z3V2w) to get the very freshest updates as we continue the Goguen rollout.
