---
title: Weekly development report as of 2023-11-10
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/422918c5-633a-4b56-af96-4de0fed19337/
image_text: ""
---

This week, the core technology teams continued working on node, networking, and consensus enhancements. 

Over the last few weeks, the **ledger** team focused on the quality improvements of the Conway era implementation and the tooling used for ledger testing. They resolved several bugs related to the correct usage of DRep thresholds for ratification, treasury withdrawals, DRep stake distribution snapshotting, and delegation options. The team also worked on some Conway-related additions such as Conway ledger events, disallowing voting on expired proposals, and the constitutional committee anchor. Additionally, the team improved reusable interfaces for an ordered set `OSet` and ordered map `OMap`, which allowed to disable duplicate certificates and proposals in a transaction. The team also reorganized Plutus functionalities in preparation for Plutus v3 integration. 

More progress has been made on the enhancement of a specialized ‘Imp’ test library that allows writing concise stateful unit tests for verifying the ledger logic, and conformance testing, which allows interfacing with Haskell-generated code from the Agda specification. Finally, they extended the serialization testing to increase binary conformance coverage.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

Last week, the **Lace** team attended the Cardano Summit 2023, where team members met many project leaders interested in collaborating with IOG. They also worked on enhancing the multi-staking feature which will be released next week. 

### SMART CONTRACTS

This week, the **Plutus** tools team kept working on Marconi API queries, cardano-node-emulator testing, and user documentation improvements. 

Last week, the **Marlowe** team presented two workshops at the Cardano Summit 2023 exploring Marlowe’s suite of tools, safety features, DApp creation, and beginner-friendly smart contracts. 

This week, the team revised [safety checks](https://github.com/input-output-hk/marlowe-cardano/pull/741) for open roles in Runtime, added open roles [integration tests](https://github.com/input-output-hk/marlowe-cardano/pull/726), worked on related [documentation](https://github.com/input-output-hk/marlowe-cardano/pull/726), and added a [lesson](https://github.com/input-output-hk/marlowe-starter-kit/pull/46) about open roles to the Runtime starter kit. They also reviewed and tested the vesting DApp, added the [Marlowe token plan prototype](https://github.com/input-output-hk/marlowe-token-plans/pull/23/files#diff-789ba9dd14c60b18005402df87d89938f1a38bba8f92fbb5ed0fc87c045b1093), improved [tracing](https://github.com/input-output-hk/marlowe-cardano/pull/735) for Marlowe chain sync protocols, tested Runner MVP, and improved the [connection widget](https://github.com/input-output-hk/marlowe-vesting/pull/19) in marlowe-tokens-plans. 

### SCALING

This week, the **Mithril** team kept working on the adaptation of the Mithril [client as a library](https://github.com/input-output-hk/mithril/issues/1311), which is almost completed. They progressed with decentralizing the Mithril networks with the [peer-to-peer](https://github.com/input-output-hk/mithril/issues/1300) (P2P) networking proof of concept, for which they have achieved the implementation of a very basic working demo with a peer-to-peer publish-subscribe (pub-sub) mechanism. Also, the team kept working on the [deterministic computation](https://github.com/input-output-hk/mithril/issues/1283) of the UTXO/transactions set from the immutable files.

Finally, they resolved the naming issue of the [Docker package](https://github.com/input-output-hk/mithril/issues/1322) responsible for storing images of the new Mithril client CLI and continued addressing a performance issue associated with the 'release-mainnet' aggregator.

### VOLTAIRE

Last week, the **Voltaire** team worked hard alongside several team members present at the Cardano Summit (while others supported remotely) to showcase the progress made toward Cardano’s on-chain governance.

Highlights from the Cardano Summit include:  

*   A tech demo of GovTool
*   A tech demo of SanchoNet
*   The announcement of the Cardano ballot for CIP-1694
*   Panel discussions on the importance of community governance, and the importance of Intersect in Cardano governance
    
Over 150 community members signed up to join Intersect. The Cardano Summit 2023 was an excellent opportunity to exhibit the ongoing progress towards the age of Voltaire to the broader community.

### CATALYST

This week, the **Catalyst** team is in the final stages of refining the mobile app and backend for Fund11. They have focused on enhancing performance and functionality to ensure a top-tier user experience, including improvements such as faster loading times and near real-time updates on registration or voting power.

Simultaneously, work is underway to introduce a robust load-testing framework to elevate testing capabilities. This strategic move aims to fortify the system's resilience, ensuring optimal performance under various loads and offering insight into any issues.

The teams are excited to expand collaboration opportunities by establishing open-source repositories for the Catalyst Voices and Hermes projects. This initiative aligns with the commitment to fostering innovation and community engagement. They have already initiated the foundational work for the Catalyst Voices backend, which is available in the open-source repository.

Lastly, they are currently developing a new community testing framework to enable users to test new capabilities before they reach production, allowing the community to offer feedback earlier in the development lifecycle. The open source and community testing initiatives will be presented in the coming weeks as proof of achievement for milestone 1 of the Voices and Hermes projects funded in Fund10.

Join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel to stay updated with everything happening in Project Catalyst.

### EDUCATION

Last week, several members of the **Education** team were present at the Cardano Summit to promote their programs and courses and meet the community. They published an [article](https://www.linkedin.com/pulse/iog-concludes-cardano-training-program-africa-blockchain-trajc%3FtrackingId=wv%252FlEaO5SaSJSA9VedBuvg%253D%253D/?trackingId=wv%2FlEaO5SaSJSA9VedBuvg%3D%3D) about the Cardano training program with the Africa Blockchain Center, and are now working on educational Marlowe content.

![](https://ucarecdn.com/8c49c9da-7ebb-4d27-b05f-1b67b1ed8292/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コアテクノロジーチームは、ノード、ネットワーク、コンセンサス改良への取り組みを続けました。 

この数週間、**台帳**チームはConway期の実装と台帳テストに使用されるツールの品質向上に集中しました。DRep批准閾値の正しい使用、トレジャリーからの引き出し、DRepステーク分布のスナップショット、委任オプションに関する複数のバグを修正しました。Conway台帳イベント、期限切れの提案への投票を不可にする、憲法委員会のアンカーなど、Conway関連の追加機能にも取り組みました。オーダーセットOsetとオーダーマップOMap用に再利用可能なインターフェイスを改良しました。これは、トランザクション内で重複する証明書と提案を無効にすることができます。Plutus v3の統合準備でPlutusの機能を再編成しました。 

台帳ロジックを検証するための簡潔なステートフルユニットテストを記述できる専用のlmpテストライブラリーの強化と、Agda仕様からHaskellで生成したコードとの整合を可能にする適合性テストを進めました。バイナリー適合のカバレッジを強化できるようにシリアル化テストを拡張しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームはCardanoサミット2023に参加し、IOGとのコラボレーションに興味を持つ多くのプロジェクトリーダーたちと会いました。来週リリースされるマルチステーキング機能の強化にも取り組みました。 

### スマートコントラクト

**Plutus**ツールチームは、Marconi API、cardano-node-emulatorのテスト、ユーザードキュメントの改訂への取り組みを続けました。 

MarloweチームはCardanoサミット2023で2つのワークショップを開催し、安全機能、DApp作成、初心者に優しいスマートコントラクトなど、Marloweのツールスイートを紹介しました。 

Runtimeでオープンロールの[安全性チェック](https://github.com/input-output-hk/marlowe-cardano/pull/741)を修正し、[統合テスト](https://github.com/input-output-hk/marlowe-cardano/pull/726)を追加し、関連する[ドキュメント](https://github.com/input-output-hk/marlowe-cardano/pull/726)に取り組み、Runtimeスターターキットにオープンロールに関する[レッスン](https://github.com/input-output-hk/marlowe-starter-kit/pull/46)を追加しました。べスティングDAppをレビューおよびテストし、[Marloweトークンプランのプロトタイプ](https://github.com/input-output-hk/marlowe-token-plans/pull/23/files#diff-789ba9dd14c60b18005402df87d89938f1a38bba8f92fbb5ed0fc87c045b1093)を追加し、Marloweチェーン同期プロトコルの[トレース](https://github.com/input-output-hk/marlowe-cardano/pull/735)を改良し、Runner MVPをテストし、marlowe-tokens-plansの[接続ウィジェット](https://github.com/input-output-hk/marlowe-vesting/pull/19)を改良しました。 

### スケーリング

**Mithril**チームは[ライブラリーとしてのMithrilクライアント](https://github.com/input-output-hk/mithril/issues/1311)の適用に関する作業を続け、ほぼ完了しました。[P2P](https://github.com/input-output-hk/mithril/issues/1300)ネットワーキング概念実証でMithrilネットワークの分散化を進め、P2P Pub/Sub（出版-購読型）メカニズムを使用した極めて基本的な作業デモの実装を達成しました。不変ファイルから得られるUTXO/トランザクションセットの[決定的計算](https://github.com/input-output-hk/mithril/issues/1283)への取り組みも続けました。

新しいMithrilクライアントCLIのイメージを保存するための[Dockerパッケージ](https://github.com/input-output-hk/mithril/issues/1322)の名付け問題を解消し、release-mainnetアグリゲーターに関連するパフォーマンスの不具合への対処を続けました。

### VOLTAIRE

Voltaireチームは、Cardanoサミットに出席した複数のチームメンバーと協力して、Cardanoのオフチェーンガバナンスに向けた進捗を紹介しました（他のメンバーはリモートでサポート）。

Cardanoサミットのハイライトは以下のとおりです。

*   GovToolの技術デモ
*   SanchoNetの技術デモ
*   CIP-1694 Cardano Ballotの発表
*   コミュニティガバナンスの重要性およびCardanoガバナンスにおけるIntersectの重要性に関するパネルディスカッション
    
150を超えるコミュニティメンバーがIntersectに参加しています。Cardanoサミット2023は、Voltaire期へ向けた進捗をより広範なコミュニティに示す絶好の機会となりました。

### CATALYST

**Catalyst**チームはFund11に向けたモバイルアプリとバックエンドの改良の最終段階に入っています。読み込み時間の短縮、登録や議決権に関するほぼリアルタイムの更新など、最高レベルのユーザーエクスペリエンスを保証するためにパフォーマンスと機能の強化に焦点を当てています。

同時に、テスト機能を向上させるための堅牢な負荷テストフレームワークの導入作業が進行中です。この戦略的な動きは、システムの回復性を強化し、さまざまな負荷下で最適なパフォーマンスを確保し、あらゆる問題に対する洞察を提供することを目的としています。

Catalyst VoicesプロジェクトとHermesプロジェクト用のオープンソースリポジトリを確立することで、コラボレーションの機会が拡大することが期待されます。このイニシアチブは、イノベーションとコミュニティエンゲージメントを促進するというコミットメントと一致しています。すでにCatalyst Voicesのバックエンドに関する基礎作業を開始しており、オープンソースリポジトリで利用可能です。

製品になる前にユーザーが新しい機能を試し、開発ライフサイクルの早い段階でコミュニティからのフィードバックが得られるようにする、コミュニティ向けの新しいテストフレームワークの開発が進行中です。Fund10で資金提供をされたVoicesプロジェクトとHermesプロジェクトのマイルストン1の達成証明として、数週間内に、オープンソースとコミュニティテストのイニシアチブが紹介されます。

[Catalyst Telegram](https://t.me/cardanocatalyst)の案内チャネルに参加して、Project Catalystの最新情報を入手してください。  

### 教育

**教育**チームは、一部のメンバーがCardanoサミットに出席してプログラムとコースを宣伝し、コミュニティと交流しました。Africa Blockchain CenterとのCardanoトレーニングプログラムに関する[記事](https://www.linkedin.com/pulse/iog-concludes-cardano-training-program-africa-blockchain-trajc%3FtrackingId=wv%252FlEaO5SaSJSA9VedBuvg%253D%253D/?trackingId=wv%2FlEaO5SaSJSA9VedBuvg%3D%3D)を公開し、現在Marloweの教育コンテンツに取り組んでいます。
