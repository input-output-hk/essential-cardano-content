---
title: "Cardano’s approaching Vasil upgrade: what to expect "
tags:
  - Scalability
  - Cardano
  - Basho
  - Development
  - Plutus
url: ""
image: https://ucarecdn.com/cda18bf2-2081-4e80-a173-35ce56fbc46e/
image_text: Cardano Vasil Upgrade
---

**Original author:**

[Tim Harrison](https://iohk.io/en/team/tim-harrison) - VP Community & Ecosystem

Originally published on [IOHK.io](https://iohk.io/en/blog/posts/2022/07/04/cardano-s-approaching-vasil-upgrade-what-to-expect/): July 4, 2022

**Summary**:

The Vasil upgrade will bring increased functionality, performance, scalability, and interoperability to Cardano through new features and improvements

**Article**:

The Vasil upgrade will bring significant performance and capability enhancements to Cardano. The network has seen consistent incremental improvements over the past couple of years – and the launch of NFT, multi-asset and smart contract capability in 2021 – but put simply, Vasil is the most significant network upgrade since the deployment of staking via [Shelley.](https://www.coindesk.com/tech/2020/07/30/cardano-introduces-proof-of-stake-with-shelley-hard-fork/)

In June, the node team released the brand new Cardano node version 1.35.0, the foundation for the Vasil upgrade. This latest release enables the use of new Plutus capabilities after the Vasil upgrade, including node and CLI support for reference inputs, inline datums, reference scripts, collateral output, and Plutus V2 primitives.

On June 28, the IOG team [reported](https://twitter.com/InputOutputHK/status/1541800451460431872) it had submitted an update proposal to hard fork the Cardano testnet, and commenced the countdown for the Vasil mainnet upgrade.

Now, thanks to stake pool operators (SPOs) supporting the Cardano testnet (and their sterling efforts to upgrade their testnet nodes to version 1.35.0 last week), developers will soon start to enjoy the new Vasil enhancements and capabilities that we’ll soon see on mainnet. IOG successfully hard forked the Cardano testnet at 20:20 UTC on July 3, and Plutus V2 capabilities will become available in one epoch’s time.

## All about Vasil

As well as bringing improvements to smart contracts, the upgrade is part of the _Basho_ phase of the Cardano roadmap, which focuses on scaling and network & ledger optimization and will bring multiple improvements to the ledger. Vasil will be deployed at the protocol level using [Cardano’s hard-fork combinator](https://iohk.io/en/blog/posts/2020/05/07/combinator-makes-easy-work-of-shelley-hard-fork/) (HFC) – innovative technology which enacts seamless protocol transitions and ledger upgrades minimizing disruption for end-users.

The upgrade – named in honor of the [late Vasil St. Dabov](https://www.youtube.com/watch?v=OFKrVcEg0Jc), a Cardano ambassador who sadly passed away in 2021 – will implement widely anticipated features such as [diffusion pipelining](https://iohk.io/en/blog/posts/2022/02/01/introducing-pipelining-cardanos-consensus-layer-scaling-solution/) and [upgrades to Plutus](https://iohk.io/en/blog/posts/2022/04/13/boosting-cardano-s-throughput-with-script-referencing/) – Cardano’s core smart contract language. Many of the improvements have been scoped and developed with the support of the wider development community and stem from Cardano Improvement Proposals (CIPs). Additionally, a number of new cryptographic primitives will be provided, and script validation processes will further see adjustments and optimizations contributing to consistency in block propagation times and higher transaction processing rates.

## How we arrived here

Since 2020's Byron reboot, Cardano has seen regular upgrades, enabling a community of over 3,000 SPOs to create and support an industry-defining decentralized proof-of-stake network.

Since the [Mary upgrade](https://iohk.io/en/blog/posts/2021/02/04/native-tokens-to-bring-new-utility-to-life-on-cardano/) (in early 2021), users have been able to create a variety of native assets to trade and exchange on the ledger. In September 2021, [Alonzo](https://iog.io/en/blog/posts/2021/09/12/today-will-feel-like-a-destination-yet-a-new-exciting-journey-begins/) introduced smart contract support, and Cardano has since steadily evolved into a fully-functional smart contract platform, with a rich NFT ecosystem and multiple [native tokens](https://nativetokens.da.iog.solutions/).

Cardano's evolution has facilitated a groundswell in DApp launches, with dozens already operating on mainnet, including multiple decentralized exchanges (DEXs) and NFT marketplaces. But that’s just the start – the IOG team is tracking over [1,000 projects](https://www.linkedin.com/posts/timbharrison_cardano-consensus2022-buildingoncardano-activity-6948656685037010944-7rr2?utm_source=linkedin_share&utm_medium=member_desktop_web) building on Cardano, and this likely underestimates the amount of work going on.

The Vasil upgrade will provide some key capabilities to enable further projects to launch as well as offer an upgrade path (bringing greater speed, transactional capability, and more powerful scripts) to existing DApps. With the Vasil hard fork, the _d_ parameter will also be removed since block production is now fully decentralized; this will prevent re-federation. Let’s take a closer look at the Vasil changes.

### Diffusion pipelining

IOG has already been applying a series of steady, careful parameter optimizations (such as block size and script memory units increase) throughout 2022 to tune and improve network performance. [Diffusion pipelining](https://iog.io/en/blog/posts/2022/03/21/increasing-the-transaction-throughput-of-cardano/) steps things up a gear, by improving block propagation times, thus enabling higher throughput.

In essence, it streamlines the process of sharing information about newly created blocks among network participants by ensuring that blocks can be shared (propagated) in the network well within five seconds after their creation. For this, diffusion pipelining propagates blocks before their full validation, thus ‘overlapping’ the time spent on diffusion with the time needed on validation.

Pipelining also ensures that the block header referencing the hash of a previous block is propagated correctly. The body of the block is retained within the metadata included in the next block, which is essential for DDoS attack resistance even without full block confirmation.

Ultimately, diffusion pipelining will add scalability by enabling further block size increases and Plutus script improvements, as IOG continues to optimize the network throughout the rest of the year.

### Plutus script enhancements

Vasil will further improve the already powerful Plutus platform, enabling developers to create faster, more efficient DApps. Optimization for smart contracts allows for better leveraging of [Cardano's EUTXO model](https://iohk.io/en/blog/posts/2022/06/23/overview-of-the-research-enabling-smart-contract-support-on-cardano/), including:

*   Addition of **reference inputs** ([CIP-31](https://cips.cardano.org/cips/cip31/)). This upgrade enables data sharing on-chain. Previously, datums were carried in transaction outputs; they stored and provided access to information on the blockchain. However, to access information in this datum, one had to spend the output that the datum was attached to. This required the re-creation of a spent output. The addition of reference inputs now allows developers to look at the datum without extra steps. This facilitates access to information stored on the blockchain without the need for spending and re-creating UTXOs. This will be useful for oracles, for example.
    
*   Addition of **inline datums** ([CIP-32](https://cips.cardano.org/cips/cip32/)). Transaction datums were previously attached to outputs as hashes. With the implementation of inline datums, developers can now create scripts and attach datums directly to outputs instead of using their hashes. This simplifies how datums are used – a user can see the actual datum rather than supply it to match the given hash.
    
*   Implementation of **reference scripts** ([CIP-33](https://cips.cardano.org/cips/cip33/)). In Alonzo, when spending an output locked within a Plutus script, one had to include the script in the spending transaction. This increased the size of the script also causing certain delays in its processing. The reference scripts upgrade allows developers to reference a script without including it in each transaction. This significantly [reduces transaction size, improves throughput](https://iog.io/en/blog/posts/2022/04/13/boosting-cardano-s-throughput-with-script-referencing/), and reduces script execution costs (since the script only needs to be paid for once).
    

Developers and DApp users alike are eagerly anticipating these improvements to Plutus. Yet it is important to note that developers will need time to utilize and deploy the Plutus enhancements in their DApps to take advantage, and many will also seek a fresh audit after significant changes to their code.

#### Plutus V2

The Vasil upgrade will also include Cardano cryptographic primitives improvements (enabling greater interoperability options for other blockchains), a tuned Plutus interpreter, and a new cost model, which are all part of Plutus V2 scripts.

*   **Plutus evaluator speed improvements**: Due to performance improvements in the Plutus evaluator, both Plutus V1 and Plutus V2 scripts have lower cost model parameters than before, resulting in 20-30% improvements in script resource usage.
    
*   **Updated cost model parameters**: The updated cost model parameters extend the set of built-in functions by adding three new built-ins: ‘serialiseData’, ‘verifyEcdsaSecp256k1Signature’, and ‘verifySchnorrSecp256k1Signature’. The latter built-ins support ECDSA/SECP256K elliptic curve standards, which provides better interoperability between Cardano and other blockchains such as Bitcoin or Ethereum, for instance. A ‘serialiseData’ ([CIP-42](https://cips.cardano.org/cips/cip42/)) function reduces the overall memory and CPU costs allowing for more optimized and generic ways of data serialization.
    
*   **Datums and redeemers**: Following the Vasil upgrade, developers will be able to see redeemers for all inputs rather than just the one being passed to the currently executing script.
    

Since a new cost model is needed to enable Plutus V2, Plutus V2 capabilities will become available from the epoch following the Vasil hard fork. It is also important to note that Plutus V1 cannot use reference inputs, reference scripts, or inline datums.

### Other enhancements

Script collateral adjustment ([CIP-40](https://github.com/cardano-foundation/CIPs/pull/216)) is another adjustment that improves transaction validation. Previously, the collateral amount was set to 150% of the transaction fee, and no change was provided to the collateral UTXO. This meant that if a script failed phase-2 validation, a DApp user would lose all the funds stored in the UTXO chosen for the collateral.

After Vasil, DApp developers will have the possibility to specify a change address for the script collateral. If the script fails phase-2 validation, only the collateral amount will be taken, and the remaining funds will be sent to the change address.

Finally, Vasil optimizes Ouroboros’ Verifiable Random Function (VRF) process. Before Vasil, block validation required two VRF functions in every network hop. Vasil drops one of these functions, resulting in faster block validation and network syncing times overall. Users will experience higher performance without compromising security settings.

## Ready for Vasil

The Vasil upgrade represents a step-change in the capability of Cardano. Diffusion pipelining will allow for greater network throughput, while the new Plutus enhancements will open up new developer use cases and offer significantly improved DApp user experiences.

Vasil is a complex program of work. Projects will need to check backward compatibility and SPOs will need to make some scripting adjustments. The community will now have a period of **four** weeks following the testnet hard fork to allow SPOs, developers, and exchanges to test and upgrade before the Cardano mainnet hard fork.

Our prime concern is to ensure that the upgrade process is facilitated in a safe and secure manner. Once developers and SPOs are comfortable and ready (and the lion's share of exchanges have completed testing and updated), the Vasil hard fork can occur.

If you’re an ada holder using Cardano for transactions and DApps, you won’t need to do anything. Cardano’s unique HFC technology makes upgrades for end users a seamless and fuss-free affair. All you’ll have to do is look forward to greater efficiency and faster transaction processing times.

However, you may see some service interruption if your favorite exchange is yet to update their system at the time of the network upgrade. So we recommend you keep track of which exchanges have upgraded [here](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade) or via exchange customer support pages.

_We’ll be sure to keep you updated over the next month or so via IOG’s Twitter and videos. Thanks from all the team to all the Cardano Community for their continued support. We couldn't do this without you._

_I’d like to thank Olga Hryniuk, Kevin Hammond, Nigel Hemsley & Vitor Silva for their support in creating this article._
