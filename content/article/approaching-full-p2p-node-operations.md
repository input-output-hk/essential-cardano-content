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

日本語版はスクロールダウンしてください。  
  
  
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

### フルP2Pノード稼働に向かって

### 完全なP2Pネットワーキング、暫定ブートストラップネットワーク、および今後の計画の詳細

ピアツーピア（P2P）ネットワーキングは、P2P通信、データ同期、および参加者間のコンセンサスを可能にすることで、ブロックチェーンの長期的な分散化、セキュリティ、および回復力に重要な貢献をします。

2023年3月、[Dynamic P2P](https://iohk.io/jp/blog/posts/2023/03/16/dynamic-p2p-is-coming-to-cardano/)により、ピア選択プロセスが自動化されました。ノード[v.1.35.6](https://github.com/IntersectMBO/cardano-node/releases/tag/1.35.6)のリリースにより、分散されたノード間の通信が強化され、リレーノードとブロック生成ノードの操作が簡素化され、静的な設定とステークプールオペレーター（SPO）による手動入力が不要になりました。

フルP2Pノード運用に向けた次の（そして最後の）ウェイポイントには、近々リリースされるOuroboros Genesisで到達する見込みです。Genesisは、今夏を目標に、Changアップグレードの一環としてデプロイが予定されています。これにより、ノードは稼働中のCardanoネットワークからセルフブートストラップできるようになります。

## フルP2Pへの移行

現在、ネットワークへの初回エントリーでは、安全で信頼できるバリデーター（通常は信頼できる仲間のSPOまたは別のエンティティ）から同期する必要があります。ノードが同期されると、[Ouroboros Praos](https://iohk.io/jp/research/library/papers/ouroboros-praos-an-adaptively-secure-semi-synchronous-proof-of-stake-protocol/)を使用して、分散化された形で動作します。[Ouroboros Genesis](https://iohk.io/jp/research/library/papers/ouroboros-genesis-composable-proof-of-stake-blockchains-with-dynamic-availability/)はこのプロセスをさらに簡素化します。cardano-nodeのP2P機能を利用すると、プロセスは完全に自律的になり、人間の介入は不要になります。

現在のハイブリッドモデルからフルP2Pネットワーキングへの移行プロセスは段階的なものであり、移行はすでに始まっています。[PoolTool](https://pooltool.io/networkhealth)によれば、SPOの約65%が12月にリリースされたノードv.8.7.3にアップグレードしており、5%がP2P最新バージョンを搭載した[v.8.9.0](https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.0)にアップグレードしています。IOGとCardano財団のエンジニアは協力して、個々のSPOの特定、これへの連絡、通知、P2Pをサポートするのに十分なリレーを実行しているかの確認を続け、ウォレット、DApp、取引所、その他のノードユーザーと連絡を取って、必要に応じてノードをアップグレードしていることを確認します。

## Ouroboros Genesisへの移行：一時的なブートストラップネットワークと「Genesis Lite」

個々のノードのダウンタイムが長期化したり、ネットワークとの同期が失われたりした場合は、セルフブートストラッププロセスを実行する必要があります。これは、ネットワークに参加する新しいノードにも適用されます。Ouroboros Genesisのデプロイに先立つ暫定的な措置として、IOGとEMURGOは約20の信頼できるノードで構成される新しい専用ブートストラップネットワークGenesis Liteをユーザーに提供します。この信頼できるブートストラップリレーネットワークは、要求に応じてスケーリングし、Cardano Genesisのコンフィグからのノードブートストラップを提供します。新たにブートストラップされたノードは、最初は最新の信頼できるノードに従う必要があります。その後、現在のTIPに近づいたらP2Pに切り替えます。以前のバージョンでは、この移行はノード所有者が手動でトポロジーファイル内のスロットを指定して実行する必要がありました。

## エコシステムのアップグレード

ノード所有者によるタイムリーなアップグレードは、完全なP2Pをシームレスに展開し、Cardanoネットワークのサービスに必要な品質を維持するために不可欠です。完全なP2Pシステムに移行する際には、すべてのノード所有者が、P2Pメカニズムをフルサポートするバージョンにノードをアップグレードする必要があります。また、サービスプロバイダーもアップグレードを完了していることを確認する必要があります。これには、DAppプロバイダー、取引所、ウォレットプロバイダー、エクスプローラー、その他のツール、 ステークプールが含まれます。

IOGは現在、Daedalus、Lace、Nami、その他のツールを、新しいP2Pツールへの適合をサポートするようアップグレードしています。Cardano財団のAdrestiaチームは、ウォレットバックエンドのアップグレードにも取り組んでいます。DB Syncは変更なしで引き続き機能します。IOGおよびCardano財団のエンジニアリングチームは、SPOコミュニティとともに、引き続きネットワークのパフォーマンスとサービスの品質を日々監視し、定期的にユーザーとコミュニケーションを取っていきます。

**すべてのSPO、取引所、DApp開発者、インフラプロバイダー、その他のノードユーザーは、今週最新ノードv.8.7.3以降にアップグレードし、すべてのリレーノードをP2Pモードで実行することが推奨されています。**SPOのリレーノードのファイアウォールの背後にいるブロックプロデューサーは、useLedgerAfterSlotを-1に設定したブロック生成ノードでP2Pモードを使用することも、必要に応じてレガシーネットワークを使用してリレーノードと通信を継続することもできます。ツールプロバイダーには、トポロジーファイル内のローカルルートでピアディスカバリーを無効化するようuseLedgerAfterSlotを-1に設定し、独自のカスタムトポロジーを設定するオプションもあります。

これらの取り組みをサポートするために必要なことについて詳しく知りたいSPO、インフラプロバイダー、またはCardanoビルダーは、[こちら](https://discord.gg/3GnfnZ3SsQ)のP2P運用チャネルにアクセスしてください。

まだDiscordサーバーに参加していない場合は、[こちら](https://discord.gg/gFjRCKkPCx)をクリックしてください。
