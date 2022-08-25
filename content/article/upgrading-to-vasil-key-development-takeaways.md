---
title: Upgrading to Vasil – key development takeaways
tags:
  - Cardano
  - Development
  - Artano
  - vasil
url: ""
image: https://ucarecdn.com/db3adaa4-ccdb-400f-8596-5ff95ee3506a/
image_text: Upgrading to Vasil - Artano
---

[Artano](https://artano.io/home/) is a community-driven non-fungible token (NFT) marketplace focused on revolutionizing the digital art economy. It seeks to connect vibrant global communities of artists and institutional clients with collectors around the world. Built on the Cardano blockchain, Artano enables the creation and trade of NFTs, as well as support for auctions, which only a few platforms on Cardano can offer.

Cardano is approaching its major upgrade to Vasil functionality. Like many other projects, Artano is in the process of upgrading both the platform and smart contract functionality to benefit from increased robustness, cost-efficiency, and scalability. 

Over the past few months, we have been testing Plutus V2 scripts and new Cardano Improvement Proposals (CIPs) that will be introduced with the Vasil upgrade. In this post, we share the key development takeaways we’ve learned while upgrading the platform and preparing it for a smooth transition to Vasil on mainnet. 

## The current state

Currently, Cardano is running on the Alonzo mainnet – smart-contract functionality introduced in September 2021. Vasil, which will bring significant performance and capability enhancements to Cardano, introduces a new development ‘era’ referred to as Babbage. 

Upgrading decentralized applications (DApps) to be compatible with Babbage functionality might not be as straightforward as it seems at a first glance. Upgrades introduce new ledger capabilities and this means that platforms, projects, and applications also need to adjust and prepare for such changes. 

Artano runs on a Cardano node at its core. In the process of upgrading to Vasil, we needed to upgrade from node v.1.34.1 to v.1.35.3, which is the recommended version for the mainnet hard fork. The platform also depends on the Cardano API rather than the Cardano CLI for the backend processing, and this requires a number of changes.

### Phase 1: Upgrading the components and maintaining compatibility

In preparation for the hard fork, both the Cardano node and the CLI need to be upgraded to the recommended version of the node (v.1.35.3). This comes with a number of changes required for Plutus contract support. An important thing for DApps to note is that when migrating from Plutus V1 scripts to Plutus V2 scripts, the source code, when recompiled, will not have the same script hash and address as a compiled V1 script. Using the exact same script with different language versions will result in different hashes. For more details, see the [‘Plutus script addresses’ overview](https://docs.cardano.org/cardano-testnet/about/feature-overview/#plutuscorechanges). 

For a marketplace like ours, it is important to ensure that the NFTs that were put on sale before the node upgrade can still be purchased after the upgrade. This implies that correct contract addresses and redeemers are used in buying and withdrawing the NFTs.

### Phase 2: Establishing compatibility with Plutus V1 contracts

After the hard fork, the era will change to Babbage, and the scripts that still reference the Alonzo era will not work anymore. Therefore, it is crucial to update the scripts to use proper era parameters and data structures, which will also enable the trade and withdrawal of NFTs that were put on sale before the hard fork. 

You can see some of the required changes listed in this [Alonzo to Babbage migration guide](https://github.com/dQuadrant/kuber/blob/master/migration_guide_alonzo_to_babbge.md). 

### Phase 3: Beyond the hard fork

Once the ledger is hard forked to Vasil functionality and the transition is complete, we can finally upgrade the contracts to support such Vasil capabilities as inline datums, reference scripts, and reference inputs. The benefits of these new capabilities would differ depending on the use case. For Artano, Vasil features provide significant benefits in reducing the transaction size and market operations fees (ie NFT buying and bidding). 

The table below summarizes the improvements:

  **![](https://lh5.googleusercontent.com/5sh7lqIlHxhGpTGR9qn9Qyj31fqczSNG6iGgm36xiuhQsx0eN16oTwNcROzefwSonbiXVcVkujzfNPx0XsfVwyKPMHgjIgxUzGFmNlc6EXFozWJolPALRS1gMlm-22d_TV0tbi2jyys3nGin2HHlDso)  
  \***The results are gained from currently deployed _mainnet_ using the node v.1.34.1.  
**\*\***The results are gained from testing Vasil functionality on the _preview testnet_ using the node v.1.35.3.
