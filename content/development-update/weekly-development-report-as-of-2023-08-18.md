---
title: Weekly development report as of 2023-08-18
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/060beb38-ac11-4955-ad7f-823e0b450e32/
image_text: Weekly development report as of 2023-08-18
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team finalized benchmarking node v.8.2.0. They also optimized the new tracing system and are currently working on documenting the tracing configuration. 

Finally, they improved the Nomad backend to take advantage of the added flexibility of the new hardware cluster.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team worked on polishing and bug fixing of the multi-delegation beta version. They also continued working on the serialization library in cardano-js-sdk to replace the CML library, collateral setting, and transitioned to the new, faster package management. 

Finally, they fixed some issues to allow the ledger and DApps to work with Lace and made UI updates for switching networks in the wallet.

### SMART CONTRACTS

The **Plutus** team worked on rewriting the Marconi indexers using a new simplified API, writing integration tests for marconi-sidechain, and updating the cardano-api version in plutus-apps.

This week, the **Marlowe** team added a [tool](https://github.com/input-output-hk/marlowe-ts-sdk/pull/11) to auto generate documentation from the TS code on GitHub, provided some ad hoc support to CNC for running raffle using Marlowe, ran [safety checks](https://github.com/input-output-hk/marlowe-cardano/pull/686) report failures for timed-out transactions, and [fixed execution cost analysis](https://github.com/input-output-hk/marlowe-cardano/pull/685) of Merkleized contracts. The team also worked on adding the initial version of [workspaces](https://github.com/input-output-hk/marlowe-ts-sdk/pull/10), documented a URL encoding [requirement](https://github.com/input-output-hk/marlowe-cardano/pull/684) for contract IDs, and [ran the](https://github.com/input-output-hk/marlowe-cardano/pull/682) `Future` [contract](https://github.com/input-output-hk/marlowe-cardano/pull/682) on-chain.

Finally, they worked on [modifying the Docker Compose](https://github.com/input-output-hk/marlowe-starter-kit/pull/26) workflow. 

### BASHO (SCALING)

This week, the **Hydra** team updated the Hydra node to support Cardano node v.8.1.2, ensuring compatibility with the latest mainnet release. The team also participated in discussions about a ‘cardanonical’ JSON schema and added it as a submodule to the project, which contributes to improved data modeling and interoperability.

In terms of community engagement, the team onboarded a new contributor, participated in a RareEvo Twitter space, and continued preparations for the Hydra master class.

This week, the **Mithril** team created an [explorer](https://mithril.network/explorer/registrations?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator&epoch=430) page with the registered signers to give recognition to the SPOs already running on mainnet. The team also focused on error refactoring to be standardized with the Automatic Deployment Rule (ADR).

### VOLTAIRE

This week in **Voltaire**, participatory governance advances with the launch of the first iteration of SanchoNet, an evolving technical testbed for CIP-1694’s on-chain governance actions. It is a new playground for the Cardano community to experience CIP-1694 in a controlled testnet environment. New governance roles, such as future delegate representatives (DReps), will be available to the community to experience and weigh in on the advancement of participatory governance. Visit [SanchoNet](https://sancho.network) to learn more and join the conversation on [Discord](https://sancho.network/get-started/discord).

[Intersect](https://intersectmbo.org) is a key institution for the ecosystem that brings together companies, developers, individuals, and other ecosystem participants to shape and drive the future development of Cardano. As such, it will be an administrator of processes that govern the continued roadmap and development of the Cardano platform and protocol. [Join Intersect today](http://intersectmbo.org/) as a founding member to receive an exclusive newsletter with a first look at the latest highlights. Additionally, a CIP-1694 Digest launched on the news tab of Intersect to provide vital technical information across all things Voltaire.           

### CATALYST

This week in **Project Catalyst,** the level 2 community review stage came to a close. There was an impressive amount of participation in the community review stage with a total of 841 participating reviewers and 200 eligible moderators. It was a pleasure to have Steven Johnson and Mike McNulty in the after town hall this week to discuss the ‘Catalyst Ecosystem Accelerator’ proposal alongside the community. During the town hall, the team showed off a few videos of the recently closed projects, and you can find the recording [here](https://www.youtube.com/watch?v=oKjt63Kmehk). If you haven’t already, make sure to register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

On the Catalyst technical side, the team:

*   Finalized testing of the mobile app, incorporating adjustments for fund operations, community reviews, and voting user experience. 
    
*   Addressed issues with the snapshot importer on testnet.
    
*   Fixed the Catalyst toolbox to accurately manage reward addresses.
    
*   Deployed the Project Catalyst snapshot module for community use.
    
*   Updated the supported wallets’ GitBook with new versions to improve usability.
    
*   Progressed in integrating snapshot data with an auto-deployment and orchestration framework for ongoing voting events.
    
*   Incorporated metrics to be logged during the execution of the IdeaScale importer.
    
*   Updated the IdeaScale importer to capture the necessary fields required by new features in the voting app.
    
*   Worked on the implementation of Fund10 changes to `vitss` in `cat-data-service`.
    
*   Introduced the continuous testnet and shared the announcement with the community, including the GVC.
    
*   Completed another load test on the voting node, resolving an issue with the tallying process.
    
*   Conducted an investigation into fragment specifications to explore the potential creation of a reference ‘vote signer,’ aimed at enhancing testing capabilities.
    
*   Implemented data input validations to ensure compatibility with the event database.
    

Finally, to stay up to date with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, some members of the **Education** team are on the ground in Nairobi, Kenya, teaching Haskell and native smart contracts in partnership  with the African Blockchain Center. The team is also preparing for the Cardano Days event at the [ITESO University](https://www.iteso.mx/) in Guadalajara, Mexico next week.

  
![](https://ucarecdn.com/1a2979f9-5450-41fb-984e-5309a30fa68f/)

### コアテクノロジー

**パフォーマンス＆トレース**チームはノードv.8.2.0のベンチマークを完了しました。新しいトレースシステムを最適化し、現在トレース設定の文書化に取り組んでいます。 

新しいハードウェアクラスターの柔軟性を活用できるよう、Nomadバックエンドを改良しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームはマルチ委任ベータ版の洗練とバグ修正に取り組みました。cardano-js-sdkのシリアル化ライブラリーをCMLライブラリーに置き換える作業と担保設定への取り組みを続け、より高速な新しいパッケージ管理に移行しました。 

台帳とDAppがLaceで作動できるよう不具合を修正し、ウォレットでネットワークを切り替えるためUIを更新しました。

### スマートコントラクト

**Plutus**チームは、簡素化された新APIを使用してMarconiインデクサーを書き直し、 marconi-sidechainの統合テストを作成し、plutus-appsのcardano-apiバージョンを更新する作業に取り組みました。

**Marlowe**チームは、GitHubのTSコードからドキュメントを自動生成する[ツール](https://github.com/input-output-hk/marlowe-ts-sdk/pull/11)を追加し、Marloweを使用してくじを実行するためのCNCの暫定的なサポートを提供し、失敗と報告されたタイムアウトトランザクションの[安全性チェック](https://github.com/input-output-hk/marlowe-cardano/pull/686)を実行し、マークル化コントラクトの[実行コスト分析を修正](https://github.com/input-output-hk/marlowe-cardano/pull/685)しました。[ワークスペース](https://github.com/input-output-hk/marlowe-ts-sdk/pull/10)の初回バージョンの追加、コントラクトIDのURLエンコーディング[要件](https://github.com/input-output-hk/marlowe-cardano/pull/684)の文書化、オンチェーンの[Futureコントラクトの実行](https://github.com/input-output-hk/marlowe-cardano/pull/682)にも取り組みました。

[Docker Composeワークフローの変更](https://github.com/input-output-hk/marlowe-starter-kit/pull/26)にも取り組みました。 

### Basho( スケーリング)

**Hydra**チームは、Cardanoノードv.8.1.2をサポートして最新のメインネットリリースに対応できるよう、Hydraノードを更新しました。cardanonical JSONスキーマに関する議論に参加し、これをサブモジュールとしてプロジェクトに追加しました。これは、データモデリングと相互運用性の向上に貢献します。

コミュニティエンゲージメントに関しては、新しいコントリビューターをオンボーディングし、RareEvoのTwitterスペースに参加し、Hydraマスタークラスの準備を続けました。

**Mithril**チームは、すでにメインネットで稼働しているSPOの認知度を高めるために、登録済みサイナーを含む[エクスプローラー](https://mithril.network/explorer/registrations?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator&epoch=430)ページを作成しました。ADR（自動デプロイルール）で標準化するエラーリファクタリングにも注力しました。

### VOLTAIRE

**Voltaire**に関しては、CIP-1694のオンチェーンガバナンスアクションのための進化型テストベッドであるSanchoNetの初回イテレーション開始によって、参加型ガバナンスが前進します。これはCardanoコミュニティが制御されたテストネット環境でCIP-1694を体験するための新しい遊び場です。参加型ガバナンスの進歩を経験し、検討するために、将来のDRep（デリゲーター代表団）のような新しいガバナンスの役割を利用できるようになります。詳細は[SanchoNet](https://sancho.network)サイトで、また、[Discord](https://sancho.network/get-started/discord)の議論にも参加してください。

[Intersect](https://intersectmbo.org)は、Cardanoの将来の開発を形作り、推進するために、企業、開発者、個人、および他のエコシステム参加者が協力するエコシステムの重要な機関です。これは、Cardanoプラットフォームとプロトコルの継続的なロードマップと開発を司るプロセスの管理者となります。設立メンバーとして[今すぐIntersectに参加](http://intersectmbo.org/)すると、最新情報をまとめたニュースレターが配信されます。Intersectのニュースタブでは、Voltaireに関する重要な技術情報を提供するCIP-1694 Digestの提供が開始されました。           

### CATALYST

**Project Catalyst**では、レベル2コミュニティレビューが終了しました。コミュニティレビュー段階は、合計で841人のレビュー担当者と200人のモデレーターという、印象的な参加人数となりました。今週のタウンホール後、Steven JohnsonとMike McNultyがコミュニティとCatalyst Ecosystem Accelerator提案について話し合いました。タウンホールでは、最近完了したプロジェクトの動画がいくつか紹介されました。[ここ](https://www.youtube.com/watch?v=oKjt63Kmehk)で録画を見ることができます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加が未登録の場合には、ぜひ登録してください。

Catalystの技術面は以下の通りです。

*   モバイルアプリのテスト終了、ファンド操作、コミュニティレビュー、投票のユーザーエクスペリエンスの調整を組み込む 
    
*   テストネットでスナップショットインポーターの不具合に対処
    
*   Catalystツールボックスを報酬アドレスを正しく管理するよう修正
    
*   コミュニティ用にProject Catalystのスナップショットモジュールをデプロイ
    
*   サポート済みウォレットのGitBookを新バージョンで更新して使いやすさを向上
    
*   進行中の投票イベントの自動デプロイおよびオーケストレーションフレームワークとスナップショットデータとの統合を進める
    
*   IdeaScaleインポーターの実行中にログに記録させるメトリクスの組み込み
    
*   投票アプリの新機能に必要なフィールドを取得するために、IdeaScaleインポーターを更新
    
*   Fund10の変更をcat-data-serviceのvitssに実装
    
*   継続テストネットの導入とGVCを含むコミュニティと発表を共有
    
*   投票ノードで別のロードテストを完了し、集計プロセスの問題を解消
    
*   テスト機能の強化を目的とし、参照「投票署名者」の作成の可能性を検討するために、フラグメント仕様の調査を実施
    
*   イベントデータベースとの互換性を確保するために、データインプット検証を実装
    

[Catalyst Telegram案内チャネル](https://t.me/cardanocatalyst)に登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、African Blockchain Centerと提携して、一部のメンバーがケニアのナイロビでHaskellとネイティブスマートコントラクトの講義を行いました。来週メキシコのグアダラハラの[ITESO大学](https://www.iteso.mx/)で開催されるCardano Daysイベントの準備も進めています。
