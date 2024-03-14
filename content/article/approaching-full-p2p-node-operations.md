---
title: Approaching full P2P node operations
tags:
  - Networking
  - node
  - Consensus
  - Cardano
  - SPO
url: ""
image: https://ucarecdn.com/9f251bd8-74ce-4451-9da8-9b80716dfdbe/
image_text: Approaching full P2P node operations
---

Author: Marcin Szamotulski

### Learn more about preparations for full P2P networking, an interim bootstrap network, and plans ahead

Peer-to-peer (P2P) networking is a key contributor to the long-term decentralization, security, and resilience of blockchains, enabling P2P communication, data synchronization, and consensus among participants.

In March 2023, [Dynamic P2P](https://iohk.io/en/blog/posts/2023/03/16/dynamic-p2p-is-coming-to-cardano/) automated the peer selection process. Enabled by the node [v.1.35.6](https://github.com/IntersectMBO/cardano-node/releases/tag/1.35.6) release, it enhanced communication between distributed nodes, simplifying the operation of relay and block-producing nodes, and eliminating the need for static configurations and manual input from stake pool operators (SPOs).

The next (and final) waypoint in the journey toward full P2P node operations is planned to arrive with the upcoming Ouroboros Genesis release. Genesis is scheduled to be deployed as part of the Chang upgrade, targeted for this summer. This will allow nodes to self-bootstrap from the live Cardano network.

## The full P2P transition

Currently, initial network entry requires syncing from a safe, trusted validator – usually a trusted fellow SPO or another entity. Once nodes are synchronized, they operate in a decentralized manner, using [Ouroboros Praos](https://iohk.io/en/research/library/papers/ouroboros-praos-an-adaptively-secure-semi-synchronous-proof-of-stake-protocol/). [Ouroboros Genesis](https://iohk.io/en/research/library/papers/ouroboros-genesis-composable-proof-of-stake-blockchains-with-dynamic-availability/) will simplify the process further – when utilizing the P2P capabilities of cardano-node, the process will be entirely autonomous, eliminating the need for human intervention.

The process of moving from the current hybrid model towards full P2P networking is a gradual one, and the transition is already underway. According to [PoolTool](https://pooltool.io/networkhealth), around 65% of SPOs have upgraded to node v.8.7.3 released in December, and 5% have upgraded to [v.8.9.0](https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.0) which has the latest version of P2P. In a joint effort, engineers from IOG and the Cardano Foundation will continue to identify, contact, and inform individual SPOs to ensure that they are running sufficient relays to support P2P, and are communicating with wallets, DApps, exchanges, and other node users to ensure that they upgrade their nodes as necessary.

## Moving towards Ouroboros Genesis: a temporary bootstrap network and ‘Genesis Lite’

When an individual node experiences extended downtime or falls out of synchronization with the network, it must undergo a self-bootstrap process. This also applies to new nodes joining the network. As an interim measure preceding the deployment of Ouroboros Genesis, IOG and EMURGO will offer users a new dedicated bootstrap network – Genesis Lite – consisting of approximately 20 trusted nodes. This trusted bootstrap relay network will scale with demand and will facilitate node bootstrapping from the Cardano Genesis configuration. Newly bootstrapped nodes must follow an up-to-date and trusted node initially, then switch to P2P when close to the current tip. In previous versions, this transition needed to be performed manually by node owners specifying the slot in the topology file.

## Ecosystem upgrades

Timely upgrading by node owners will be crucial for the seamless rollout of full P2P and for maintaining the necessary quality of service for the Cardano network. While migrating toward a full P2P system, all node owners will need to upgrade their nodes to versions that fully support P2P mechanisms. Users should also ensure that their service providers have completed the upgrades. This applies to DApp providers, exchanges, wallet providers, explorers, other tooling, and stake pools.

IOG is now upgrading Daedalus, Lace, Nami, and other tools that it supports to conform with the new P2P tooling. The Adrestia team at the Cardano Foundation is also working on an upgrade for the wallet backend. DB Sync will continue to work without change. IOG and the CF engineering teams along with the SPO community will continue to monitor network performance and quality of service daily and communicate with key stakeholders regularly.

**All SPOs, exchanges, DApp developers, infrastructure providers, and other node users have this week been encouraged to upgrade to the latest node v. 8.9.0 and to run all their relay nodes in P2P mode.** Block producers firewalled behind an SPO’s relay nodes can also use P2P mode on their block-producing nodes with `useLedgerAfterSlot` set to `-1`, or they can continue to communicate with their relay nodes using legacy networking if they prefer. Tool providers also have the option to configure their own custom topology using local roots in their topology file with `useLedgerAfterSlot` set to -1 to disable peer discovery.

If you are an SPO, infrastructure provider, or Cardano builder and want to learn more about what you need to do to support these efforts, you can jump into the P2P operational channel [here](https://discord.gg/3GnfnZ3SsQ).

Or if you haven't joined the Discord server yet, you can do that [here](https://discord.gg/gFjRCKkPCx).
