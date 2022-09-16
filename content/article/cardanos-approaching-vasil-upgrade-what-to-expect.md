---
title: "Cardano’s Vasil upgrade: what to expect "
tags:
  - Scalability
  - Cardano
  - Basho
  - Development
  - Plutus
  - Vasil
url: ""
image: https://ucarecdn.com/7091bd94-a70a-40eb-82f2-9f2757d9c12a/
image_text: Cardano's Vasil Upgrade
---

**Author:** [Tim Harrison](https://iohk.io/en/team/tim-harrison) - VP Community & Ecosystem

**Summary**:

Increased functionality, performance & scalability; find out what the Vasil upgrade will bring to Cardano.

**Article:**

We’re now a little under one week away from the deployment of the Vasil upgrade, which significantly improves and enhances Cardano's capabilities. New Plutus v2 features and enhancements will enable DApp developers to create novel and exciting experiences, while diffusion pipelining unlocks the potential for greater throughput and network capacity.

Vasil preparations have been underway for some time across the entire Cardano ecosystem. The core engineering teams at IOG and the Cardano Foundation, SPOs, DApp developers, and exchanges have performed intensive testing and integration efforts, with positive results. A joint IOG/Cardano Foundation team will use the [hard fork combinator](https://iohk.io/en/blog/posts/2020/05/07/combinator-makes-easy-work-of-shelley-hard-fork/) to deploy Vasil at the protocol level on September 22nd. The new capabilities (including node and CLI support for reference inputs, inline datums, reference scripts, and collateral outputs), along with a new Plutus cost model, will become available for developers to utilize on mainnet exactly one epoch later, on September 27th.

### **Security, correctness & expressiveness**

It's been a journey both methodical and exciting. Cardano's development evolved in a series of defined stages ('eras'). First, a foundation of security and correctness. Capability, scalability, and expressiveness next. The Byron federated era, and the Byron reboot – which rebuilt the core platform – closed with the [Shelley upgrade](https://www.coindesk.com/tech/2020/07/30/cardano-introduces-proof-of-stake-with-shelley-hard-fork/) in the summer of 2020. Shelley transformed Cardano into the most decentralized proof-of-stake platform in the world, with almost 3,000 active stake pools.

2021's Mary upgrade introduced NFTs and multi-asset capability, sparking the creation of one of the most vibrant NFT communities in the blockchain space with over 6 million distinct native tokens issued to date.

The [Alonzo upgrade](https://iohk.io/en/blog/posts/2021/09/12/today-will-feel-like-a-destination-yet-a-new-exciting-journey-begins/) in the fall of 2021 implemented smart contract capability using the Plutus scripting language, establishing an ecosystem that now sees well over 1,000 projects [building on Cardano](https://www.linkedin.com/posts/timbharrison_defi-community-blockchain-activity-6975452581288366081-4t44?utm_source=share&utm_medium=member_desktop).

### **Plutus script enhancements**

Vasil enhances Cardano's smart contract capabilities through Plutus v2, which adds greater efficiency to an already powerful smart contract platform. Vasil leverages the [EUTXO model](https://www.essentialcardano.io/article/the-eutxo-handbook) to enable faster and more sophisticated DApps.

This upgrade has been an ambitious and collaborative effort from its inception. The community has requested and in fact advanced many of the enhancements via the [Cardano Improvement Proposal (CIP) process](https://cardanofoundation.org/en/news/make-it-even-better-cardanos-improvements-proposals/).  This further demonstrates the vibrancy and ongoing growth of the developer community building on Cardano.

The main additions that Vasil unlocks are:

*   **Reference inputs** ([CIP-31](https://cips.cardano.org/cips/cip31/)). This upgrade enables data sharing on-chain. Previously, datums were carried in transaction outputs; they stored and provided access to information on the blockchain. However, to access information in this datum, it was necessary to spend the output that the datum was attached to. This required the re-creation of a spent output. The addition of reference inputs now allows developers to look at the datum without extra steps. This facilitates access to information stored on the blockchain without the need for spending and re-creating UTXOs. This will be useful for oracles, for example.
    
*   **Inline datums** ([CIP-32](https://cips.cardano.org/cips/cip32/)). Transaction datums were previously attached to outputs as hashes. With the implementation of inline datums, developers can now create scripts and attach datums directly to outputs instead of using their hashes. This simplifies how datums are used – a user can see the actual datum rather than supply it to match the given hash.
    
*   **Reference scripts** ([CIP-33](https://cips.cardano.org/cips/cip33/)). In Alonzo, when spending an output locked within a Plutus script, the script had to be included in the spending transaction. This increased the size of the script also causing certain delays in its processing. The reference scripts upgrade allows developers to reference a script without including it in each transaction. This significantly [reduces transaction size, improves throughput](https://iog.io/en/blog/posts/2022/04/13/boosting-cardano-s-throughput-with-script-referencing/), and reduces script execution costs (since the script only needs to be paid for once).
    
*   **Datums and redeemers**. Following the Vasil upgrade, developers will be able to see redeemers for all inputs rather than just the one being passed to the currently executing script.
    
*   **Data Serialisation primitive**. A new ‘serialiseData’ ([CIP-42](https://cips.cardano.org/cips/cip42/)) Plutus primitive reduces the overall memory and CPU costs allowing for more optimized and generic ways of data serialization.
    

The community is eagerly anticipating these updates to Plutus. Several much-awaited new DeFi projects, including [Indigo Protocol](https://indigoprotocol.io/), [Liqwid Finance](https://twitter.com/liqwidfinance), and [Maladex](https://maladex.com/) intend to leverage v2 capabilities when they launch. And many other, currently live projects will upgrade their code to take full advantage of the new capabilities. Such a broad scope of enhancements means that the Cardano ecosystem will see brand new DApps and new _improved_ DApps (after updating and auditing) begin deploying during Q4 and beyond.

Benefitting from a new, more efficient Plutus interpreter, new Plutus cost models (active on-chain from September 27th) will make both v1 and v2 DApps cheaper. The extent of these advantages will depend on the individual DApp, but early reports from DApp developers are very promising. Artano, an NFT project currently running on Cardano, recently published [a blog](https://www.essentialcardano.io/article/upgrading-to-vasil-key-development-takeaways) sharing their findings from extensive testing. When utilizing Plutus v2, they saw a 90%+ decrease in script size and a corresponding cost reduction of over 75%.

### **Other enhancements**

Script collateral adjustment ([CIP-40](https://github.com/cardano-foundation/CIPs/pull/216)) improves transaction validation. Previously, the collateral amount was set to 150% of the transaction fee, and no change was provided to the collateral UTXO. This meant that if a script failed phase-2 validation, a DApp user would lose all the funds stored in the UTXO chosen for the collateral.

After Vasil, DApp developers will be able to specify a change address for the script collateral. If the script fails phase-2 validation, only the collateral amount will be taken, and the remaining funds will be sent to the change address.

### **Diffusion pipelining**

IOG applied a series of steady, careful parameter optimizations (such as block size and script memory units increase) throughout early 2022 to tune and improve network performance. As a result, the network is now highly performant with load consistently well within required measures. 

[Diffusion pipelining](https://iohk.io/en/blog/posts/2022/02/01/introducing-pipelining-cardanos-consensus-layer-scaling-solution/) is a further improvement to the consensus layer that facilitates faster block propagation. Also deployed as part of Vasil, it will enable gains in block production headroom, which will enable further increases to Cardano's performance and competitiveness. Script validation processes will further see adjustments and optimizations contributing to consistency in block propagation times and higher transaction processing rates. Diffusion pipelining gives greater scope for further adjustments, by improving block propagation times, thus enabling higher throughput.

Diffusion pipelining effectively streamlines the process of sharing information about newly created blocks among network participants by ensuring that blocks can be shared (propagated) in the network well within five seconds (the safe security ‘ceiling’) after their creation. Diffusion pipelining propagates blocks before their full validation, thus ‘overlapping’ the time spent on diffusion with the time needed on validation.

Pipelining also ensures that the block header referencing the hash of a previous block is propagated correctly. The body of the block is retained within the metadata included in the next block, which is essential for DDoS attack resistance even without full block confirmation.

Ultimately, diffusion pipelining will improve scalability by enabling further performance improvements. In layman’s terms, it is another lever that can be pulled. And as always, making slow, steady and measured changes is key. We can anticipate a ‘spike’ in activity immediately following the upgrade – as the community test drives the capabilities. Monitoring will continue for at least four epochs post-hard fork, at which point a decision will be made about further adjustments, based on 'normal' network bandwidth.

### **Removal of the ‘d’ Parameter**

It is also worth noting that while block production has been fully decentralized since March 31st, 2021, the Vasil upgrade will remove the _d_ parameter entirely, thus cementing decentralization in perpetuity and preventing any future re-federation.

### **Optimized Security**

Finally, Vasil optimizes Ouroboros’ Verifiable Random Function (VRF) process. Before Vasil, block validation required two VRF functions in every network hop. Vasil drops one of these functions, resulting in faster block validation and network syncing times overall. Users will experience higher performance without compromising security settings.

### **A summer of testing**

Vasil represents a complex body of work, from several perspectives. First off in terms of core engineering scope, this is the most extensive upgrade the IOG team has attempted to date, touching every layer of the network stack. As a result, every downstream component (including DB-sync, the wallet backend, Rosetta etc.) has required updating and full regression testing.

And there are multiple ecosystem stakeholders to be considered. Ensuring that any upgrade is safe and secure, and that players across the Cardano ecosystem are fully ready has always been paramount. And while IOG has been working to a clear plan, the nature of software engineering along with these dependencies means that things can take longer than anticipated. 

With this in mind, IOG and the Cardano Foundation, recently agreed on some clear critical mass indicators in the final mile to ensure ecosystem readiness, before ‘announcing’ the date for the hard fork combinator event. These were:

1.  75% of mainnet blocks being created by the final Vasil node candidate (1.35.3)
    
2.  Approximately 25 exchanges upgraded (representing c.80% of ada liquidity)
    
3.  Top 10 DApps by TVL confirming they have upgraded to 1.35.3 on PreProduction and are ready for mainnet.
    

Tracking against [these metrics](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Ecosystem-readiness-for-Vasil-upgrade) has been ongoing. The SPO community was the first to ‘tick the box’; 98% of blocks are now being minted by the new 1.35.3 node, significantly exceeding the minimum threshold set. At the time of writing, exchange liquidity is close to 60%  t, and with many of the leading exchanges confirmed ready or in the process of upgrading, the team is fully confident in this regard. IOG has been working closely with a number of leading DApp projects to track their readiness and again, the numbers are looking good. A recent poll among the technical community confirmed readiness for 22nd September hence the date for the mainnet upgrade has been agreed.

### **So what’s next?**

A few things need to happen between now and the agreed hard fork date. The Vasil DevNet, which was spun up specifically for early Vasil testing, has now been deprecated. The new Preview environment will become the agile development platform for the community going forward, with the PreProduction environment mirroring mainnet more closely. A successful upgrade on the PreProduction environment is the final stage before hard forking the mainnet.

### **Deployment Timeline & Key dates**

\*Here’s a closer look at the technical timelines:\*

  
![Vasil upgrade timeline](https://ucarecdn.com/23903c67-d1b2-48a5-a3c3-bc6451d37f9c/)

Vasil arrives in the month of Cardano's fifth anniversary, and represents a step-change in the blockchain's capabilities. Yet the regular ada holder using Cardano for transactions and DApps doesn't need to do anything, as it all happens mostly behind the scenes. Cardano’s unique Hard Fork Combinator (HFC) technology makes upgrades for end users a seamless and fuss-free affair. All they have to do is look forward to greater efficiency and faster transaction processing times!

At the time of writing, approx. exchange liquidity is nearing 60%.  While the Cardano Foundation exchange team IOG anticipates this figure will be close to the 80% threshold by the time of the upgrade, users holding their ada on exchanges might experience service disruption if their chosen exchange is yet to update their system at the time of the network upgrade. If personal liquidity is important to you, IOG recommends tracking the [exchanges that have upgraded](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade) or consulting exchange customer support pages.

### **Underlying significance**

The upgrade was named in honor of Cardano ambassador, the [late Vasil St. Dabov](https://www.youtube.com/watch?v=OFKrVcEg0Jc), who sadly passed away in 2021. Vasil was a Bulgarian mathematician, programmer, polymath and conservationist who planted over 10,000 trees in his lifetime, and hosted Cardano’s 2nd anniversary celebrations in his home city of Plovdiv in 2019.

So it is especially poignant – and entirely coincidental – that September 22nd is also the anniversary of the 1908 declaration of [independence of the Bulgarian state](https://www.izbite.com/en/traditions-and-celebrations/traditions-and-celebrations/september-22-day-of-bulgarian-independence#:~:text=On%20September%2022%2C%201908%20in,headed%20by%20Crown%20King%20Ferdinand.) (one of the oldest in Europe) from the Ottoman empire. A ‘happy accident’ for a steadfast and highly deliberate community that imparts additional meaning to this most significant of upgrades.

_Stay up to date on the upgrade progress via IOG’s_ [Twitter](https://twitter.com/InputOutputHK) _and_ [YouTube](https://www.youtube.com/c/IohkIo/videos)_. Thanks from all the team at IOG to the Cardano Foundation and the Cardano Community for their continued support. Thank you to Olga Hryniuk, Fernando Sanchez, Kevin Hammond, Nigel Hemsley & Vitor Silva for their support in creating this article._
