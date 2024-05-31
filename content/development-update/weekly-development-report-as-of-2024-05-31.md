---
title: Weekly development report as of 2024-05-31
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/af3f75ad-f1cb-4307-b64c-cb8545587cdc/
image_text: Weekly development report as of 2024-05-31
---

### CORE TECHNOLOGY

This week, the consensus team made significant advancements in the UTXO-HD project. They [updated UTXO-HD to use simple diffs](https://github.com/IntersectMBO/ouroboros-consensus/issues/1114), which resulted in a drastic improvement in the mempool benchmarks. The team also assisted in [releasing version 0.10.0](https://github.com/stevana/quickcheck-state-machine/pull/48) of the `quickcheck-state-machine` library, which is crucial for high-assurance property tests. Additionally, [they rebased UTXO-HD on top of node v.8.11](https://github.com/IntersectMBO/ouroboros-consensus/pull/1121). A replay with the in-memory backend took five hours and five minutes to reach the 124 millionth slot.

This month, the IOG Plutus and consensus teams have established technical working groups under [Intersect](https://www.intersectmbo.org/), committed to open source principles and wider community collaboration in the age of Voltaire.

The inaugural meeting of the new Plutus working group will be held on Tuesday, June 4, aiming to broaden community involvement in defining its future roadmap. On Thursday, June 2, at 14:30 UTC, the IOG consensus team will host the first in a monthly series of open meetings for all interested parties.

Stay tuned to learn more about the introduction to UTXO-HD, its current status, and how to run a UTXO-HD-capable node. There will also be an update on the Ouroboros Peras workstream, which will improve finality on Cardano.

To participate in working groups, sign up to [become a member of Intersect](https://www.intersectmbo.org/get-involved) and receive an invite to the Discord server, where you'll find meeting links. 

### SCALING

This week, the **Hydra** team released Hydra node version 0.17.0. This version includes the new blueprint commit transaction mechanism and several networking protocol upgrades developed over the past few weeks. Additionally, the team updated documentation to support these new features.

In the upcoming sprint, the team will focus on completing the outstanding increment decommit work to finish the model tests for it. They will also investigate potential adversarial attacks on the smart contract to ensure robustness and security.

This week, the **Mithril** team released a new [Mithril protocol insights dashboard](https://lookerstudio.google.com/u/0/reporting/8b05ea4b-6a43-45ea-aef2-237906ec7a42/page/kem0D?s=oi6CR5eZrnQ) and a new [explorer page displaying active and deregistered SPOs](https://github.com/input-output-hk/mithril/issues/1686) for the latest Cardano epochs. They also continued implementing the certification of Cardano transactions in Mithril networks by improving the throughput of the prover route of the aggregator and making progress on low-latency certification by completing the implementation of a chain block reader from the Cardano mini-protocol with Pallas.

Additionally, the team started [working on a new beacon](https://github.com/input-output-hk/mithril/issues/1697) for signing Cardano transactions based on the chain point. Finally, they refactored the persistence library, enhanced their testing tools for Cardano transactions, and fixed a block parsing problem that prevented the signature of Cardano transactions in the test networks.

### VOLTAIRE & SANCHONET

If you are interested in testing on-chain participatory governance as outlined in [CIP-1694](https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694), [join the SanchoNet community](https://sancho.network/get-started/discord). SanchoNet is the testnet for new governance features, and the team invites community members to actively participate in testing and refining the governance mechanisms, ensuring a robust and decentralized system.

This week, the SanchoNet documentation was updated to improve the DRep multi-sig tutorial, component links on the resources page, and the DRep Pioneer program participation requirements.

To learn more about Chang – the upgrade bringing CIP-1694 functionality, key features, and deployment stages, read [this explainer on Cardano Docs](https://docs.cardano.org/about-cardano/evolution/upgrades/chang/).

### CATALYST

This week in Project Catalyst, town hall 164 took place, providing a platform for community engagement and updates. The community review stage is currently underway.

The Catalyst network hosted its monthly meeting for funded projects, featuring Anthony Day from Midnight, who spoke on Web3 growth strategies.

Lastly, the Fund12 voting registration is still ongoing, we encourage community members to register and participate in the voting process.

### EDUCATION

This week, the **education** team is preparing lectures for the upcoming Cardano Developer Course, supporting the DRep Pioneer program, and writing content for Mastering Cardano.  
  
  
![](https://ucarecdn.com/6a51e776-4aea-42d2-adcc-62a6eb5f469e/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コンセンサスチームは、UTXO-HDプロジェクトで大幅に進展しました。[単純な差分を使用するようにUTXO-HDを更新](https://github.com/IntersectMBO/ouroboros-consensus/issues/1114)し、メモリープールのベンチマークを大幅に改良しました。高保証プロパティテストに不可欠なquickcheck-state-machineライブラリーの[バージョン0.10.0のリリース](https://github.com/stevana/quickcheck-state-machine/pull/48)にも協力しました。[ノードv.8.11にUTXO-HDをリベース](https://github.com/IntersectMBO/ouroboros-consensus/pull/1121)しました。インメモリーバックエンドを使用したリプレイでは、1億2400万目のスロットに到達するのに5時間5分かかりました。

今月IOG Plutusチームとコンセンサスチームは、Intersectの下に技術ワーキンググループを設立し、Voltaire期のオープンソースの原則と幅広いコミュニティコラボレーションに取り組んでいます。

将来のロードマップを定義するためのコミュニティの関与を拡大することを目的として、6月4日火曜日に新しいPlutusワーキンググループの発足ミーティングが開催されます。6月2日（木）14:30 UTC（日本時間同日23:30）、IOGコンセンサスチームは、すべての関係者を対象とした月例オープンミーティングの第1回を主催します。

UTXO-HDの概要、現在のステータス、およびUTXO-HD対応ノードの実行方法については、引き続きご確認ください。Ouroboros Perasのワークストリームが更新され、Cardanoのファイナリティが向上することになります。

ワーキンググループに参加するには、[Intersectにメンバー登録](https://www.intersectmbo.org/get-involved)してDiscordサーバーへの招待状を受け取ります。ミーティングへのリンクはDiscordにあります。

### スケーリング

**Hydra**チームはHydraノード0.17.0をリリースしました。このバージョンには、新しいブループリントコミットトランザクションメカニズムと、過去数週間にわたって開発されたネットワークプロトコルのアップグレードが含まれています。これらの新機能をサポートするためにドキュメントの更新も行いました。

次のスプリントでは、インクリメントデコミットに関する残りの作業とモデルテストを完了することに焦点を当てます。スマートコントラクトの堅牢性とセキュリティを確保するために、潜在的な敵対的攻撃を調査する予定です。

**Mithril**チームは、[Mithrilプロトコルの新しいインサイトダッシュボード](https://lookerstudio.google.com/u/0/reporting/8b05ea4b-6a43-45ea-aef2-237906ec7a42/page/kem0D?s=oi6CR5eZrnQ)と、最新のCardanoエポックで[アクティブなSPOと登録解除されたSPOを表示する新しいエクスプローラーページ](https://github.com/input-output-hk/mithril/issues/1686)をリリースしました。アグリゲーターの証明ルートのスループットを改良してMithrilネットワークにCardanoトランザクション認証を実装する作業を継続し、Pallasを使用したCardanoミニプロトコルのチェーンブロックリーダーの実装を完了して低レイテンシーの認証を前進させました。

チェーンポイントに基づいてCardanoトランザクションに署名するための新しいビーコンの開発に着手しました。永続性ライブラリーをリファクタリングし、Cardanoトランザクションのテストツールを強化し、テストネットワークでCardanoトランザクションの署名を妨げるブロック解析の問題を修正しました。

### VOLTAIRE & SANCHONET

[CIP-1694](https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694)で概説されているオンチェーン参加型ガバナンスのテストに興味がある場合は、[SanchoNetコミュニティに参加](https://sancho.network/get-started/discord)してください。SanchoNetは新しいガバナンス機能のテストネットです。コミュニティメンバーには、堅牢で分散化されたシステムを保証するために、ガバナンスメカニズムのテストと改良への積極的な参加が促されています。

SanchoNetドキュメントを更新し、DRepマルチシグチュートリアル、リソースページのコンポーネントリンク、DRep パイオニアプログラム参加要件を改善しました。

CIP-1694の主要機能やデプロイステージを搭載するためのChangアップグレードの詳細は、[Cardano Docsの説明](https://docs.cardano.org/about-cardano/evolution/upgrades/chang/)を参照してください。

### CATALYST

第164回タウンホールが開催され、コミュニティが参加し、更新を行うためのプラットフォームが提供されました。現在コミュニティレビュー段階が進行中です。

Catalystネットワークでは、資金提供されたプロジェクトのための月例会議が開催され、MidnightのAnthony DayがWeb3の成長戦略について話しました。

Fund12の投票登録はまだ受付中です。コミュニティメンバーには、投票プロセスに登録して参加することをお勧めします。

### 教育

**教育**チームは、Cardano開発者コースの講義の準備、DRepパイオニアプログラムのサポート、Mastering Cardanoのコンテンツの作成を行っています。
