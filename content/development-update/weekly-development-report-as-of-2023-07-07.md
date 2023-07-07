---
title: Weekly development report as of 2023-07-07
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/4798ee3b-a58a-4b2d-8897-15e983a5455f/
image_text: ""
---

### CORE TECHNOLOGY

This week, the DB Sync team improved and validated the design of the Conway integration with db-sync. They also improved the initial integration of the UTXO-HD feature branches, which are now being tested, and prepared release v.13.1.1.3, which supports node v.8.1.1. 

Finally, the team made some fixes to their build processes, Docker, developer experience, and documentation, and added new [tests](https://github.com/input-output-hk/cardano-db-sync/pull/1429/files) to the new tx\_out options. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team continued working on cardano-js-sdk. They updated the TxBuilder to delegate funds to any stake address and use a new input selection algorithm for multi-delegation, polished and prepared the release of the import HD wallet feature, and began researching long-term spending behavior and its impact on the user staking portfolio. 

Work is ongoing on the Lace browser application. The team were busy working on the upcoming v.1.3 release and continued making progress on the creation of new UI components for the multi-delegation flow. 

Finally, they focused on Trezor support and completed work on responsiveness improvements to come in v.1.3 release. 

### SMART CONTRACTS

This week, the **Plutus** tools team worked on setting up runtime monitoring for the Marconi sidechain, adding value and epochNo response fields to the `getUtxosForAddress` indexer and the `afterTx` query field for the `getBurnTokenEvents` indexer. They also investigated how to make the standalone emulator usable with a real Cardano node socket client.

The Plutus core team improved support for [BLS built-ins](https://github.com/input-output-hk/plutus/pull/5413/files) in Plutus Tx, enhanced the [cost infrastructure](https://github.com/input-output-hk/plutus/pull/5411) to support bitwise built-ins in the future, and reviewed BLS built-in [end-to-end tests](https://github.com/input-output-hk/antaeus/pull/15).

Finally, they are in the process of defining and prioritizing objectives for the next few months.

**Marlowe** and Plutus teams held the Marlowe launch party in Lisbon this week, where they shared the latest updates and engaged with the vibrant community of pioneers and enthusiasts in exploring the future of smart contracts in Cardano. 

### BASHO (SCALING)

This week, the **Hydra** team wrote and published the [June monthly report](https://hydra.family/head-protocol/monthly/2023-06/), implemented the end-to-end functionality for [external commits](https://github.com/input-output-hk/hydra/issues/215), and tested it on the preview environment. They also listed Hydra as a tool on the [Cardano developer portal](https://developers.cardano.org/tools/), providing more visibility for the project. The team clarified the path forward for layer 2 protocol improvements and explored an alternative CI approach using Cabal instead of Nix. 

Finally, they released [version 0.11.0](https://github.com/input-output-hk/hydra/releases/tag/0.11.0), marking another milestone in the project’s development.

This week, the **Mithril** team created a new distribution pre-release [2327.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2327.0-pre), and initiated testing of the new production signer deployment model with the pioneer SPOs. They completed the setup of the monitoring on the [Mithril networks infrastructure](https://github.com/input-output-hk/mithril/issues/987) and started working on the deployment of the [mainnet infrastructure](https://github.com/input-output-hk/mithril/issues/988). The team also kept working on the implementation of a simple [stress test tool](https://github.com/input-output-hk/mithril/issues/991) for benchmarking the aggregator, [refactoring](https://github.com/input-output-hk/mithril/issues/669) the interface to the cryptographic library, and the simplification of the [structure of the artifacts](https://github.com/input-output-hk/mithril/issues/932). 

Finally, they fixed a bug that sporadically prevented the latest signer registration of an SPO to be used in the associated signing epoch, and worked on fixing a bug in the epoch gap detection of the certificate chain in the aggregator.

### VOLTAIRE

This week in **Voltaire**, conversations continued on [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) to establish an initial Minimum Viable Governance (MVG) framework. This framework is crucial for the advancement of participatory governance within the Cardano ecosystem. By collecting feedback from community members, diverse viewpoints can be incorporated to ensure the governance system aligns with the community’s needs and desires. 

The following workshops, hosted this week, yielded some valuable feedback:

*   Virtual by syarbel#8604 and andreassosilo#8781
    
*   Virtual by rodrigopacini#6495
    
*   Virtual by PureRelativity(Curtis)#3502, Dave\_Digital Ark \[DAP\]#3337, Demmy🇳🇬#7661 (7/8)
    

This week, the team has been diligently preparing for the Edinburgh CIP-1694 workshop. Following numerous community-led workshops in recent months, organized by community members worldwide, workshop leaders will convene in the Scottish capital next week to review their findings, provide conclusive feedback, and progress towards the final draft of CIP-1694.

[CIP-30](https://cips.cardano.org/cips/cip30/) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) are mechanisms proposed in [Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) to empower ada holders with voting capabilities. These proposals, once implemented by wallet providers, will enable community members to express their democratic consent for governance actions.

It's essential for community members to actively participate in providing feedback for [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). By voicing opinions and suggestions, you can help shape the future of governance within Cardano. This collaborative approach ensures that the governance mechanisms implemented best represent the community's needs.  

### CATALYST

This week in **Project Catalyst,** more than 300 proposals were submitted for Fund10. Additionally, previously closed-out projects showcased their work during the [town hall](https://www.youtube.com/watch?v=A2LGhs49aW4), providing insights into how their initiatives have influenced the Cardano ecosystem. Make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

In the technical updates from last week's Catalyst:

*   A new version of the mobile app was released in stores, and investigations were carried out regarding issues related to app updates
    
*   Critical updates for the mobile app were prioritized and initiated to align with various Catalyst process changes, such as community reviews, categories, and ada denomination
    
*   The list of supported wallets at the time of registration start was finalized
    
*   Testing of the rewards address fix from the Daedalus team commenced, with an expected release in the upcoming weeks
    
*   Testing continued on the snapshot importer tool 
    
*   Progress was made on the snapshot module proof of concept (PoC) and backend enablers
    
*   A new weighted average calculator for community reviews was prepared and is now ready for review
    
*   Implementation of tests for Catalyst Data Services continued
    
*   Plans to sunset vit-ss post-Fund10 progressed, including the identification and resolution of dependencies
    
*   Efforts were made to package auditability tools with earthly to enhance accessibility for the community
    
*   Dependencies were untangled in order to complete voting load testing, including debugging the node stats endpoint for Jormungandr
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team focused on planning the Haskell Course and some members of the team attended the Marlowe launch event. Additionally, the team prepared to deliver a webinar on Blockchain Fundamentals to alumni of the Milken Institute.

### コアテクノロジー

DB SyncチームはConwayとdb-syncとの統合の設計を改良し、検証しました。UTXO-HD機能ブランチの初期統合を改良し、現在テストを行っています。また、ノードv.8.1.1をサポートするv.13.1.1.3リリースの準備を行いました。 

ビルドプロセス、Docker、開発者の操作性、ドキュメントに修正を加え、新しいtx\_outオプションに新しい[テスト](https://github.com/input-output-hk/cardano-db-sync/pull/1429/files)を加えました。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、cardano-js-sdkへの取り組みを続けました。任意のステークアドレスに資金を委任し、マルチ委任に新しいインプット選択アルゴリズムを使用するようTxBuilderを更新し、HDウォレットのインポート機能を改良してリリースを準備し、長期的な支出行動およびそのユーザーステーキングポートフォリオへの影響の調査を開始しました。 

Laceブラウザーアプリケーションの作業は進行中です。予定されているv.1.3リリース準備に追われており、引き続きマルチ委任フロー用の新しいUIコンポーネントの作成を進めました。 

Trezorサポートに焦点を当て、v.1.3リリースで提供される応答性の向上に関する作業を完了しました。 

### スマートコントラクト

**Plutus**ツールチームは、Marconiサイドチェーンのランタイム監視の設定に取り組み、getUtxosForAddressインデクサーと、getBurnTokenEventsインデクサーのafterTxクエリフィールドに値とepochNo応答フィールドを追加しました。スタンドアロンエミュレーターを実際のCardanoノードソケットクライアントで使用可能にする方法についても調査しました。

Plutus Coreチームは、Plutus Txの[BLSビルトイン](https://github.com/input-output-hk/plutus/pull/5413/files)のサポートを改良し、将来ビット単位のビルトインをサポートするために[コストインフラ](https://github.com/input-output-hk/plutus/pull/5411)を強化し、BLSビルトインの[エンドツーエンドテスト](https://github.com/input-output-hk/antaeus/pull/15)をレビューしました。

今後数か月間の目標を定義し、優先順位を付ける作業を進めています。

**Marlowe**チームとPlutusチームはリスボンでMarlowe打ち上げパーティを開き、Cardanoのスマートコントラクトの未来を探求するパイオニアや愛好家の活気あふれるコミュニティと最新情報を共有し、交流を深めました。 

### Basho( スケーリング)

**Hydra**チームは[6月の月次レポート](https://hydra.family/head-protocol/monthly/2023-06/)を作成、公開し、[外部コミット](https://github.com/input-output-hk/hydra/issues/215)のエンドツーエンド機能を実装し、プレビュー環境でこれをテストしました。Hydraを[Cardano Developer Portal](https://developers.cardano.org/tools/)サイトのツールリストに加え、プロジェクトの可視性を高めました。レイヤー2プロトコルの改善に向けた道筋を明らかにし、Nixの代わりにCabalを使用したCIの代替アプローチを検討しました。 

[バージョン0.11.0](https://github.com/input-output-hk/hydra/releases/tag/0.11.0)をリリースし、プロジェクト開発におけるマイルストンをもう一つ達成しました。

**Mithril**チームは、新ディストリビューションプレリリース版[2327.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2327.0-pre)を作成し、パイオニアSPOとともに新しいプロダクション署名者デプロイモデルのテストを開始しました。[Mithrilネットワークインフラ](https://github.com/input-output-hk/mithril/issues/987)の監視設定を完了し、[メインネットインフラ](https://github.com/input-output-hk/mithril/issues/988)のデプロイ作業を始めました。引き続きアグリゲーターのベンチマーク用の簡単な[ストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の実装、暗号理論ライブラリーのインターフェイスの[リファクタリング](https://github.com/input-output-hk/mithril/issues/669)、[アーティファクトの構造](https://github.com/input-output-hk/mithril/issues/932)の簡素化に取り組みました。 

関連する署名エポックで使用されるSPOの最新の署名者登録を散発的に妨げるバグを修正し、アグリゲーターで証明書チェーンのエポックギャップ検出に関するバグの修正に取り組みました。

### VOLTAIRE

**Valtaire**に関しては、初期MVG（最小実行可能ガバナンス）フレームワークを確立するための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)に関する話し合いを続けました。このフレームワークは、Cardanoエコシステムの参加型ガバナンスを進めるうえで不可欠です。コミュニティメンバーからフィードバックを収集することで、多様な視点を取り入れ、コミュニティのニーズと要望に沿ったガバナンスシステムを構築することができます。 

今週は以下のワークショップが開催され、貴重なフィードバックが得られました。

*   仮想ワークショップ - syarbel#8604、andreassosilo#8781主催
    
*   仮想ワークショップ - rodrigopacini#6495主催
    
*   仮想ワークショップ - PureRelativity(Curtis)#3502、Dave\_Digital Ark \[DAP\]#3337、Demmy🇳🇬#7661主催（7月8日）
    

チームはCIP-1694エディンバラワークショップの準備に熱心に取り組みました。ここ数か月間の世界各地でコミュニティメンバーが組織したコミュニティ主導のワークショップに続き、ワークショップのリーダーたちは来週スコットランドの首都に集い、結果を振り返り、まとめとなるフィードバックを提供し、CIP-1694の最終草稿に向けて進みます。

[CIP-30](https://cips.cardano.org/cips/cip30/)および[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)は、[CIP（Cardano改善提案）](https://cips.cardano.org/)でADA保有者に投票権を与えるべく提案されたメカニズムです。この提案がウォレットプロバイダーにより実装されると、コミュニティメンバーはガバナンスアクションについて民主的に同意を表明することができるようになります。

コミュニティメンバーが、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)や[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)に積極的にフィードバックを提供することは極めて重要です。意見や提案を表明することは、Cardanoのガバナンスの未来を形作るのに役立ちます。この協調的なアプローチにより、実装されたガバナンスメカニズムがコミュニティのニーズを代表するようになります。  

### CATALYST

**Project Catalyst**では、Fund10に300を超える提案が提出されました。[タウンホール](https://www.youtube.com/watch?v=A2LGhs49aW4)ではすでに完了したプロジェクトが紹介され、そのイニシアチブがCardanoエコシステムにどのように影響を与えたかについての洞察が提供されました。[今後のタウンホール](http://bit.ly/catalyst-townhall)へ参加登録を行い、最新情報を入手してください。

Catalystの技術面の更新情報は以下の通りです。

*   モバイルアプリの新バージョンをストアでリリース、アプリ更新に関する不具合の調査を実施
    
*   モバイルアプリの重要な更新に優先順位を付け、コミュニティレビュー、カテゴリー、ADAの単位名など、Catalystプロセスのさまざまな変更に合わせて開始
    
*   登録開始時にサポートされているウォレットのリスト完成
    
*   Daedalusチームによる報酬アドレスの修正のテスト開始、今後数週間以内にリリース予定
    
*   スナップショットインポーターツールのテストを継続 
    
*   スナップショットモジュールの概念実証（PoC）とバックエンドイネーブラーが進捗
    
*   コミュニティレビュー用の新しい加重平均計算機を準備、現在レビュー準備完了
    
*   Catalyst Data Services用テストの実装を継続
    
*   依存関係の特定と解決を含む、Fund10後のvit-ss終了計画を推進
    
*   コミュニティのアクセシビリティを向上させるEarthlyを使用した監査ツールのパッケージ化に尽力
    
*   Jormungandrのノード統計エンドポイントのデバッグなど、投票負荷テストを完了するために依存関係を解消  
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームはHaskellコースの企画に集中したほか、一部のメンバーはMarlowe打ち上げイベントに参加しました。Milken Instituteの卒業生を対象としたブロックチェーンの基礎に関するウェビナーを準備しました。
