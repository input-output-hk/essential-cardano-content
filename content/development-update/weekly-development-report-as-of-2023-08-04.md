---
title: Weekly development report as of 2023-08-04
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2573564c-6160-41fb-995f-426ac4471b95/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **networking** team activated several default traces for node-to-client and node-to-node protocols, which are set to be released in node v.8.2.0. Additionally, they ensured that the cardano-client-0.1.0.x library (used by db-sync) does not use the experimental node-to-client protocol, while [cardano-client-0.2.0.0](https://github.com/input-output-hk/ouroboros-network/pull/4612) remains unaffected. They also merged the [dynamic block production](https://github.com/input-output-hk/ouroboros-network/issues/3159) feature into ouroboros-consensus, which enables hot-swap P2P nodes. These are important for the deployment of block-producing nodes.

Finally, the team continued reviewing the implementation of [big ledger peers](https://github.com/input-output-hk/ouroboros-network/pull/4462) for eclipse evasion.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team continued the implementation of Posthog analytics and dedicated efforts to add Trezor support and implement the multi-delegation feature. Additionally, they conducted end-to-end testing for Edge support, refactored heavily used utility functions, and focused on the setup of collateral. 

Finally, the team prepared for the implementation of CIP-95. 

### SMART CONTRACTS

This week, the **Plutus** core team worked on adding decentralized governance support, as defined in CIP-1694, to Plutus v3.

The **Marlowe** team fixed the [slot limit](https://github.com/input-output-hk/marlowe-cardano/pull/668) in the database, [optimized](https://github.com/input-output-hk/marlowe-cardano/pull/663) the chain seek protocol, and added a [contract source ID option](https://github.com/input-output-hk/marlowe-cardano/pull/660) to POST /contracts. 

Finally, they updated the Marlowe logo in Marlowe Playground and Marlowe Explorer and fixed [some bugs](https://github.com/input-output-hk/marlowe-cardano/pull/664) in Marlowe Runtime.

### BASHO (SCALING)

This week, the **Hydra** team conducted their July monthly review meeting, which is an ongoing effort to ensure transparent communication and project evaluation. They successfully migrated the core logic of the node to an event-sourced architecture, allowing for incremental writes of events to persistence. This migration significantly improved the project's performance and maintainability. See [this report](https://hydra.family/head-protocol/monthly/2023-07) for more details.

The team also implemented a new feature that enables the reading of protocol parameters through the API and fixed the CI workflows to support pull requests from forks of external contributors. These improvements streamline the development process encouraging community involvement in the project.

This week, the **Mithril** team completed the [Mithril protocol’s mainnet beta launch](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch): the `release-mainnet` network is now consistently producing new certificates and snapshots! The team is monitoring the network and is preparing a new distribution that will be released shortly. They also kept working on the implementation of the [stress test tool](https://github.com/input-output-hk/mithril/issues/991) for benchmarking the aggregator, and implementing the refactoring of the [serialization/deserialization](https://github.com/input-output-hk/mithril/issues/668) of the entities of the cryptographic library. Additionally, they started creating a [runbook](https://github.com/input-output-hk/mithril/issues/1085) for the production infrastructure.

Finally, they worked on [upgrading](https://github.com/input-output-hk/mithril/issues/1090) the Cardano node to v.8.1.2, [fixing](https://github.com/input-output-hk/mithril/issues/1114) the `release-preprod` network that stopped producing certificates, and [troubleshooting](https://github.com/input-output-hk/mithril/issues/1125) the SPO’s signer node that received unexpected errors.

### VOLTAIRE

This week in **Voltaire**, the feedback collected from the [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) workshop is being reviewed and considered. An update will be published shortly. As [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) moves to its final form, the community will have the opportunity to vote on whether this MVG is an acceptable way to move forward together. This represents a powerful option for the crucial advancement of participatory governance within the Cardano ecosystem.

[Intersect](https://intersectmbo.org) was announced earlier this month, as a key institution for the ecosystem that brings together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such, it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol.

All participants in the Cardano ecosystem are welcome to become Intersect members. Made up of a distributed group of participants, including the foremost experts on Cardano and current ecosystem contributors, Intersect will facilitate healthy discussions and sound decision-making amongst its members, and the community at large, to uncover pain points, while championing successes. To join as a founding member, [click here](http://intersectmbo.org/).       

### CATALYST

**The Project Catalyst** level 0 and level 1 community review stages came to a close on August 3. The level 2 community moderation stage will begin next Thursday, August 10. In this week’s town hall, the LATAM Catalyst community gave a presentation about the upcoming Ideafest, Lidonation talked about Catalyst Explorer, and we got to hear from another successfully closed-out project, Grow East Asia. You can rewatch the segment from the main town hall [here](https://www.youtube.com/watch?v=WMYGN1aOys8). Steven Johnson held an AMA for the Catalyst Voices proposal during the after-town hall. 

On the technical side of Catalyst, the team:

*   Completed another QA dry run for the voting app
    
*   Continued refining process alignment changes and successfully tested the API rate limiter
    
*   Discussed how to improve error handling in the application
    
*   Prepared initial Fund10 data for the next internal dry run
    
*   Deployed the new snapshot module to the dev environment and are working on fixes to the continuous snapshot service and rewards eligibility checker before releasing it to the community
    
*   Refactored the script being used to extract registration metrics from the snapshot service to include timestamps for easier reporting on changes over time
    
*   Worked on integrating snapshot data into the continuous deployment framework
    
*   Worked on bug fixes for the new IdeaScale importer
    
*   Started testing for the new community reviews calculator and new fields in vit-ss
    
*   Aligned on the approach for handling stageID changes in each fund within the auto-deployment framework
    
*   Discussed pointing the app to the official Project Catalyst website for full proposal details rather than IdeaScale
    
*   Continued manual testing of the moderation module
    
*   Started load testing the voting node, including a run that sustained 800 tps over 1 million votes cast on the local machine
    
*   Continued working on community documentation for new auditing tools.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team is preparing to deliver the Haskell Course in Kenya next week, training Cardano community members in conjunction with the African Blockchain Center.

  
![](https://ucarecdn.com/7c527d7e-0ada-4918-abce-6626d944cf04/)

### コアテクノロジー

**ネットワーキング**チームは、ノードクライアント間プロトコルおよびノード間プロトコルの一部のデフォルトトレースをアクティブにしました。これらは、ノードv.8.2.0でリリースされます。cardano-client-0.1.0.xライブラリー（db-syncで使用）が実験的なノードクライアント間プロトコルを使用しないようにしましたが、[cardano-client-0.2.0.0](https://github.com/input-output-hk/ouroboros-network/pull/4612)は影響を受けません。[動的ブロック生成機能](https://github.com/input-output-hk/ouroboros-network/issues/3159)をouroboros-consensusにマージして、ホットスワップP2Pノードを有効にしました。これは、ブロック生成ノードのデプロイに重要です。

エクリプス回避のための[ビッグレジャーピア](https://github.com/input-output-hk/ouroboros-network/pull/4462)の実装のレビューを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、Posthog分析の実装を継続し、Trezorサポートの追加とマルチ委任機能の実装に専念しました。Edgeサポートのエンドツーエンドテストを実施し、多用されるユーティリティ機能をリファクタリングし、担保の設定に重点を置きました。 

CIP-95の実装準備を行いました。 

### スマートコントラクト

**Plutus** Coreチームは、CIP-1694で定義されている分散型ガバナンスのサポートをPlutus V3に追加する作業に取り組みました。

**Marlowe**チームは、データベースの[スロット制限](https://github.com/input-output-hk/marlowe-cardano/pull/668)を修正し、チェーンシークプロトコルを[最適化](https://github.com/input-output-hk/marlowe-cardano/pull/663)し、POST/contractsに[コントラクトソースIDオプション](https://github.com/input-output-hk/marlowe-cardano/pull/660)を追加しました。 

Marlowe PlaygroundとMarloweエクスプローラーでMarloweロゴを更新し、Marlowe Runtimeの[バグ](https://github.com/input-output-hk/marlowe-cardano/pull/664)を修正しました。

### Basho( スケーリング)

**Hydra**チームは、7月の月例レビュー会議を開催しました。これは、コミュニケーションの透明性を高めプロジェクトを正しく評価するための継続的な取り組みです。ノードのコアロジックをイベントソースアーキテクチャーに移行し、イベントの永続化への増分書き込みを可能にしました。この移行により、プロジェクトのパフォーマンスと保守性が大幅に向上しました。詳細は、[このレポート](https://hydra.family/head-protocol/monthly/2023-07)をご覧ください。

APIからプロトコルパラメーターの読み取りを可能にする新機能を実装し、外部コントリビューターのフォークからのプルリクエストをサポートするようCIワークフローを修正しました。こうした改良により、コミュニティのプロジェクトへの関与を奨励する開発プロセスが合理化されます。

**Mithril**チームは、[Mithrilプロトコルのメインネットベータ版を立ち上げ](https://mithril.network/doc/dev-blog/2023/07/21/mainnet-beta-launch)ました。release-mainnetネットワークは現在継続的に新しい証明書とスナップショットを生成しています。チームはネットワークを監視するとともに、まもなくリリース予定の新ディストリビューションの準備を進めています。アグリゲーターのベンチマーク用[ストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の実装、暗号理論ライブラリーのエンティティの[シリアル化、逆シリアル化](https://github.com/input-output-hk/mithril/issues/668)のリファクタリングの実装にも取り組みました。プロダクションインフラ用[ランブック](https://github.com/input-output-hk/mithril/issues/1085)の作成を始めました。

Cardanoノードのv.8.1.2への[アップグレード](https://github.com/input-output-hk/mithril/issues/1090)、証明書の生成を停止したrelease-preprodネットワークの[修正](https://github.com/input-output-hk/mithril/issues/1114)、想定外のエラーを受信したSPOサイナーノードの[トラブルシューティング](https://github.com/input-output-hk/mithril/issues/1125)に取り組みました。

### VOLTAIRE

**Voltaire**では、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)ワークショップで収集したフィードバックのレビューと検討を行っています。更新情報はまもなく公開されます。[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)が最終形態に移行するにつれて、コミュニティはこのMVGが協力して前進するための方法として受け入れられるものであるかどうかを投票する機会が得られます。これは、Cardanoエコシステムの参加型ガバナンスを進めるうえで強力なオプションを示します。

Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関、[Intersect](https://intersectmbo.org)（インターセクト）が今月上旬に発表されました。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。

Cardanoエコシステムのすべての参加者は、Intersectメンバーになることを歓迎します。Cardanoの第一人者や現在のエコシステムの貢献者を含む分散化された参加者グループで構成されているIntersectは、メンバーとコミュニティ全体の間で健全な議論と健全な意思決定を促進し、成功を擁護しながら、ペインポイントを明らかにします。設立メンバーとして参加するには、[ここをクリック](http://intersectmbo.org/)してください。      

### CATALYST

Project Catalystでは、コミュニティレビューのレベル0とレベル1が8月3日に終了しました。レベル2のコミュニティ調整段階は8月10日木曜日に開始されます。今週のタウンホールでは、LATAM Catalystコミュニティが来るIdeafestについて発表し、LidonationがCatalystエクスプローラーについて話したほか、成功を収めたプロジェクト、Grow East Asiaも紹介されました。ここで、メインタウンホールからセグメントを再視聴できます。タウンホール後、Steven JohnsonがCatalyst Voices提案についてのAMAを開催しました。 

Catalystの技術的側面は以下の通りです。

*   投票アプリのQAドライランをもう一度実施
    
*   プロセス変更の調整を続け、APIレートリミッターのテストに成功
    
*   アプリケーション内のエラー処理の改善方法について話し合い
    
*   次回の内部ドライラン用に初期Fund10データを準備
    
*   新しいスナップショットモジュールを開発環境にデプロイし、コミュニティへのリリース前に継続的スナップショットサービスと報酬資格チェッカーの修正に取り組む
    
*   登録メトリクスをスナップショットサービスから抽出するために使用されるスクリプトを、タイムスタンプを含めて時間の経過に伴う変化のレポートを容易に作成できるようリファクタリング
    
*   継続的デプロイフレームワークへのスナップショットデータの統合に取り組む
    
*   新しいIdeaScaleインポーターのバグを修正
    
*   vit-ssの新しいコミュニティレビュー計算機とフィールドのテストを開始
    
*   自動デプロイフレームワーク内で各ファンドのstageID変更を処理するアプローチを調整
    
*   IdeaScaleではなく、Project Catalystの公式サイトにアプリを誘導することについて話し合い
    
*   モデレートモジュールの手動テストを継続
    
*   ローカルマシンで100万票以上の投票を800tpsで維持するランを含む、投票ノードの負荷テストを開始
    
*   新しい監査ツールのコミュニティドキュメントの作成を継続
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、来週ケニアで提供されるHaskellコースの準備をしており、African Blockchain Centerと協力してCardanoコミュニティメンバーをトレーニングしています。
