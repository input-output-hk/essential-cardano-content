---
title: Dynamic P2P is available on mainnet
tags:
  - Networking
  - SPO
  - Node
url: ""
image: https://ucarecdn.com/e81a33cd-996e-40c4-b53c-045113f43a5f/-/resize/800/-/format/webp/-/quality/best/-/progressive/yes/
image_text: ""
---

### **Dynamic peer-to-peer (P2P) networking comes with the release of node v.1.35.6. Network participants can now test automatic node communication without a need for static configurations.**

Dynamic P2P networking is an important evolution for Cardano and a further boost to the network's performance, resilience, and decentralization. By automating the peer selection process, Dynamic P2P enables enhanced communication between distributed nodes and simplifies the process of running a relay or a block-producing node. This eliminates the need for static configurations and manual stake pool operators’ (SPO) input.

Dynamic P2P comes as a built-in functionality with node v.1.35.6 release today. The SPO community is now encouraged to test P2P functionality by updating _one_ of their relays to use the P2P topology mode. Over the next few weeks, IOG and CF teams together with the SPO community will be assessing network connectivity to ensure a smooth rollout of Dynamic P2P functionality.

Here’s more about the evolution of the Cardano network and the features that Dynamic P2P brings.

## Connectivity

[Cardano's networking protocols](https://iohk.io/en/blog/posts/2021/04/06/boosting-network-decentralization-with-p2p/) combine nodes and their interactions into a unified system using standard communication infrastructure. The network distributes information about transactions and blocks to all active nodes.

There are two ways to configure a Cardano node:

1.  As a **block-producing node** responsible for producing blocks on the Cardano blockchain. SPOs run block-producing nodes that require incoming connections to receive block information and outgoing connections to propagate generated blocks. P2P will enable bi-directional usage of each connection, so the order of connections will not matter.
    
2.  As a **relay node**, responsible for communicating with other relays in the network and broadcasting blocks from block-producing nodes. Relay nodes also act as a ‘defense layer’ for block producers to ensure that block producers are not directly exposed to the whole internet.
    

## Ensuring minimum communication delays and maximum resilience

The network’s design aims to minimize communication delays and maximize network resilience against failures, capacity constraints, or malicious behavior.

IOG has always recommended that SPOs deploy **_at least two_** relay nodes for each block-producing node to ensure that the system adds blocks and verifies transactions effectively. This strengthens security and deters denial of service (DoS) attacks.

As mentioned in a [previous post](https://iohk.io/en/blog/posts/2021/05/11/cardano-decentralization-continues/), Cardano's networking evolved from its initial federated structure to hybrid and the current P2P model. Networking will keep evolving with future additions such as [Ouroboros Genesis](https://iohk.io/en/blog/posts/2023/02/09/ouroboros-genesis-enhanced-security-in-a-dynamic-environment/) and peer-sharing:

1.  **Federated**: introduced in the [Byron development phase in 2017](https://www.essentialcardano.io/article/what-iog-has-delivered-for-cardano-byron-the-foundation-of-cardano), IOG core and relay nodes maintained the network and connected users, wallets, and exchanges.
    
2.  **Hybrid**: since the [Shelley development phase in 2020](https://www.essentialcardano.io/article/what-iog-has-delivered-for-cardano-shelley-decentralizing-the-blockchain), block-producing nodes send and receive communications through trusted relays and/or a manual community-developed and managed tool called the [topology updater](https://github.com/cardano-community/guild-operators/blob/alpha/docs/Scripts/topologyupdater.md).
    
3.  **Dynamic P2P**: currently being released, Dynamic P2P provides automation and resilience to optimize network performance. SPO relays can automatically connect to each other through self-discovery and optimization.
    
4.  [Ouroboros Genesis](https://iohk.io/en/blog/posts/2023/02/09/ouroboros-genesis-enhanced-security-in-a-dynamic-environment/): in development. Anyone running their own node or Daedalus wallet will connect to a fully decentralized and self-organized network.
    
5.  **Peer sharing**: in development. Peer sharing will facilitate the discovery of potential peers that are not registered on the chain within the overall Cardano node network. This phase will also allow anyone to contribute to running the network, rather than just using resources from SPOs.
    

## The current network state: hybrid mode

Currently, block-producing nodes require both incoming and outgoing connections to receive and propagate blocks. However, the selection (in the configuration) of these connections is a manual task done with the [topology updater tool](https://github.com/cardano-community/guild-operators/blob/alpha/docs/Scripts/topologyupdater.md). This tool helps SPOs to configure their nodes to connect to other nodes in the network and also receive updates about network changes (eg, stake, performance, or availability).

SPOs need to spend time and effort running the tool manually. When updating their relays, SPOs also need to ensure that their block-producing nodes are connected to the network, otherwise, they may miss a block-producing slot and any rewards.

## Dynamic P2P automates connectivity

Dynamic P2P enables automated connection of SPO relays to each other through self discovery and optimization, thus removing the need for static configuration and the manual SPO maintenance required by the hybrid setup. P2P makes the network more performant and resilient to changes such as node or routing failures, and also streamlines the flow of information between the thousands of distributed nodes.

### **How does Dynamic P2P work?**

P2P doesn’t just automate the selection of the static configuration, it is more dynamic than that. Currently, SPOs might configure a node to connect to, for example, 50 other SPO nodes. This is a pretty large number, since many nodes can be offline, change their addresses, etc. While 20 connections are enough for efficient communication, SPOs may have to over-provision because of the static configuration.

In a Dynamic P2P setup, SPOs can target to configure 20 connections, which can be picked from thousands of SPO relays, not just 50. And if any are offline, or go offline, the setup will automatically pick new ones, to meet the set target. This means that the configuration is no longer limited to a static pool of 50 peers.

P2P also allows for more sophisticated configurations for direct peering arrangements between SPOs. For example, if two SPOs want to maintain a connection between their relays, and each has two relays, they can configure a group of peers that lists the other SPOs’ two relays but with a target that there should be at least one connection. This means that there is no need for over-provisioning, and SPOs still get automatic failover if one relay goes down. With static configuration, one had to choose between listing only one and thus not getting resilience, or listing both and over-provisioning (using more resources).

Finally, P2P optimizes the selection of peers to minimize the overall diffusion time in the whole network. It does this continuously and automatically. Internal IOG research shows that a policy based purely on local information can achieve a global outcome close to optimal. It measures the frequency with which peers are the first to provide a block header that later ends up in the chain. Peers that are least useful by this metric are periodically ‘churned out’ and replaced by other randomly selected peers. Simulation results show that this simple optimization procedure method reaches a near optimal global outcome within a relatively small number of iterations, on the order of 24 hours.

See this [technical specification](https://input-output-hk.github.io/ouroboros-network/pdfs/network-spec/network-spec.pdf) for more details.

﻿_We’re continuing to share further updates with the SPO community and invite everyone to join the_ [SPO Telegram group](https://t.me/SPOannouncements) and [Discord channel](https://discord.com/invite/inputoutput) for technical discussions.
