---
title: Weekly development report as of 2023-04-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f6f02dfd-abc3-4c9a-a46c-0f339cf73a10/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **core technology** teams continued working on node, consensus, and networking improvements.

The [performance and tracing team](https://input-output-hk.github.io/cardano-updates/2023-04-05-performance-and-tracing) worked on adjusting their infrastructure to the new 8.0 release branch, conducted an early run of benchmarking, and profiled the new tracing system to minimize its resource footprint and ensure high throughput.

The team also merged variance analysis for reporting and comparison, and will integrate a Plutus script library into their tooling and benchmarking profiles. 

Finally, they added a profile family for tracing systems and are currently implementing various specializations of the Nomad backend while streamlining credentials management.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

[Lace 1.0](https://www.lace.io/blog/hello-web3-lace-1-0-is-live), IOG’s light wallet platform, went live on mainnet on April 11, 2023. This is just the beginning of the Web3 journey with Lace, so stay tuned for upcoming features such as the Lace desktop version, DApp store, and many more. If you haven’t tried it out yet, visit the [Lace website](https://www.lace.io/).  

Work continues on the **Lace** desktop development. The team worked on implementing an announcement feature to provide users with updates directly in the application. They are also considering new features to improve the DApp embedded browser layout, implement an auto-connect feature for DApps, and eliminate the need to click ‘Connect to Lace Desktop’ when using the embedded browser. 

Finally, the QA team is defining the testing guidelines for upcoming releases.

The **Adrestia team** completed a round of performance optimization of the Lace BE (cardano-js-sdk), and the team is extremely proud to announce that Lace has officially been released to mainnet.

The team is also wrapping up the multi-signature feature with delegation functionality in cardano-wallet, are working on extracting the transaction balancing library, and are also working on DBLayer refactoring to improve performance and memory usage.

### SMART CONTRACTS

The **Plutus** tools team ​​started adding the correctness test for Marconi indexers by comparing those with cardano-db-sync. They also made `MintBurn` indexer of Marconi available for querying in the HTTP server and added better support for logging in the standalone emulator. The Plutus Core team continued working on the implementation of [sums-of-products](https://github.com/cardano-foundation/CIPs/pull/455) to add native support for data types and ensure substantial size improvements for Plutus scripts.

The **Marlowe** team renamed `marlowe` to `marlowe-runtime-cli` in starter kit [videos](https://github.com/input-output-hk/marlowe-starter-kit/commit/74819bc) and [examples](https://github.com/input-output-hk/marlowe-starter-kit/commit/d4b0e6d), added CHaP’s [input map](https://github.com/input-output-hk/marlowe-playground/pull/24) to Marlowe Playground's Flake, and fixed some OCI operables to handle mainnet correctly and issues that caused Marlowe Playground to discard addresses when moving from Blockly to Marlowe and vice versa. 

Finally, they updated Marlowe Runtime architecture diagrams and published [Marlowe libraries to CHaP](https://github.com/input-output-hk/marlowe-cardano/pull/556).

### BASHO (SCALING)

The **Hydra** team published their [monthly report for March](https://hydra.family/head-protocol/monthly/2023-03/), created separate links for different documentation versions, and identified potential solutions for the rollbacks bug. The team also discussed query API requests for the Hydra Voting project and held a meeting with community members to answer their questions about Hydra. Moving forward, the team plans to integrate the Hydra Head protocol specification into the repository, implement a short-term fix for the rollbacks issue, and draft a Query API ADR.

The **Mithril** team continued implementing the migration of the aggregator stores to a relational design and completed the adaptation and migration of the signed entity and signer stores. They also created a new tick service that provides beacons to other services of the aggregator. Additionally, they started implementing the new certifier service of the aggregator that is responsible for orchestrating the signature of multiple concurrent messages.

Finally, the team started designing the interface that generic actors must implement to sign and verify generic types of data.

### GOVERNANCE

**Voltaire**

[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md) is a crucial step in Cardano’s journey into the age of Voltaire, as it defines the future on-chain governance mechanisms of the blockchain, and helps to create a self-sustaining system built on community contribution and consensus. But what does this actually mean?

Last week, Matthias Benkort (Cardano Foundation) along with Addie Girouard, Jared Corduan, & Kevin Hammond (IOG) [hosted a discussion of CIP-1694](https://www.youtube.com/watch?v=obFeC2JS_IQ&t=5s). In this conversation, they discussed community-driven enhancements to the current governance scheme, the future roles and responsibilities of Delegate Representatives (dReps), the Constitutional Committee, and stake pool operators, how to define and safeguard Cardano’s guiding principles, and the tooling and governance processes needed to get there. 

Take a deeper dive into CIP-1694 and find out how it provides new tools to further facilitate decentralized governance enabling even bigger changes in the future.

**Project Catalyst**

​​Last week in **Project Catalyst**, the team gave an update about the proposed improvements to the deployability and auditability of the Catalyst platform. You can rewatch the segment from the main town hall [here](https://youtu.be/Xk-FRLQT6v8?t=2345). More information will be shared in the coming weeks, make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

Finally, to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter. Check [it out here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

![](https://lh3.googleusercontent.com/d3PEAS_FNvE8c5aj_4wUIc95hIuY3lZvBrIxByksySyp_rwzDmsRWSpfioGmqA3sHGMHMiTtF7n0PhKfSHWvwKr_mqA4WetO_4sGFWGu3ivv8dK5OhRx2YKaq_Y_KAOpVFCN3mkM8ZuEmaJdkgyd-1Y)

### コアテクノロジー

**コアテクノロジー**チームは、ノード、コンセンサス、ネットワークの改良への取り組みを続けました。

[パフォーマンスおよびトレース](https://input-output-hk.github.io/cardano-updates/2023-04-05-performance-and-tracing)チームは、新8.0リリースブランチに合わせてインフラを調整し、ベンチマークを早期実行した他、リソースフットプリントを最小限に抑え、高スループットを確保するために新しい追跡システムのプロファイリングを行いました。

レポートと比較のための分散分析をマージしました。Plutusスクリプトライブラリーはツールおよびベンチマークプロファイルに統合する予定です。

追跡システム用プロファイルファミリーを追加し、現在、クレデンシャル管理を合理化しながら、Nomadバックエンドのさまざまな特化機能を実装しています。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

IOGのライトウォレットプラットフォーム、[Lace 1.0は](https://www.lace.io/blog/hello-web3-lace-1-0-is-live)、2023年4月11日にメインネットで公開されました。これは、Laceを使ったWeb3の歩みの始まりに過ぎません。Laceデスクトップバージョン、DAppストアなど、今後追加される多彩な機能にご期待ください。まだ試していない場合は、[Laceのウェブサイト](https://www.lace.io/)にアクセスしてください。  

**Lace**デスクトップの開発作業は進行中です。ユーザーにアプリケーションで直接更新提供を通知する機能の実装に取り組みました。DApp埋め込みブラウザーのレイアウトを改良する新機能の実験、DAppを自動接続する機能の実装、埋め込みブラウザーの使用時にConnect to Lace Desktopのクリックを不要にする作業なども行っています。QAチームは今後のリリースのテストガイドラインを定義しています。 

QAチームは今後のリリースのテストガイドラインを定義しています。

**Adrestia**チームは、Lace BE（cardano-js-sdk）のパフォーマンス最適化ラウンドを完了しました。Laceのメインネット公式リリースを発表できることを大変誇りに思っています。

cardano-walletの委任機能を備えたマルチシグ機能をまとめ、現在トランザクション残高ライブラリーの抽出に取り組んでいる他、パフォーマンスとメモリー使用量を改善するためのDBLayerリファクタリングも進めています。

### スマートコントラクト

**Plutus**ツールチームは、Cardano-db-syncと比較することによるMarconiインデクサーの正確性テストの追加を開始しました。MarconiのMintBurnインデクサーをHTTPサーバーでクエリできるようにし、スタンドアロンエミュレーターのロギングサポートを強化しました。Plutus Coreチームは、データ型のネイティブサポートを追加し、Plutusスクリプトのサイズを大幅に改善するために、引き続き[sums-of-products](https://github.com/cardano-foundation/CIPs/pull/455)の実装に取り組みました。

**Marlowe**チームは、スターターキットの[動画](https://github.com/input-output-hk/marlowe-starter-kit/commit/74819bc)と[例](https://github.com/input-output-hk/marlowe-starter-kit/commit/d4b0e6d)でmarloweをmarlowe-runtime-cliに改称し、CHAPの[入力マップ](https://github.com/input-output-hk/marlowe-playground/pull/24)をMarlowe PlaygroundのFlakeに追加し、メインネットを正しく処理するための操作可能なOCI、そして、BlocklyとMarlowe間で移動する際に、Marlowe Playgroundがアドレスを破棄する原因になる問題をと修正しました。

Marlowe Runtimeアーキテクチャー図を更新し、[MarloweライブラリーをCHAP](https://github.com/input-output-hk/marlowe-cardano/pull/556)に公開しました。

### Basho( スケーリング)

**Hydra**チームは[3月の月次レポート](https://hydra.family/head-protocol/monthly/2023-03/)を公開し、ドキュメントのバージョンごとに別々のリンクを作成し、ロールバックバグを解消する可能性のある解決策を特定しました。Hydra投票プロジェクトのQuery APIリクエストについて話し合い、コミュニティメンバーとのミーティングを開催し、Hydraに関する質問に答えました。今後は、Hydra Headプロトコル仕様をリポジトリに統合し、ロールバック問題の暫定的な修正を実装し、Query API ADRのドラフトを作成する予定です。

**Mithril**チームは、アグリゲーターストアのリレーショナル設計への移行の実装を続け、署名済みエンティティストアと署名者ストアの適応と移行を完了しました。アグリゲーターの他のサービスにビーコンを提供する新しいティックサービスも作成しました。複数の同時メッセージの署名をオーケストレーションするアグリゲーターの新しい認証サービスの実装を開始しました。

ジェネリックアクターが汎用データ型に署名、検証を行うために実装すべきインターフェイスの設計を開始しました。

### ガバナンス

**Voltaire**

[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)は、ブロックチェーンの将来のオンチェーンガバナンスメカニズムを定義し、コミュニティの貢献とコンセンサスに基づいて構築された自律的なシステムを作成するのに役立つという点において、Cardano Voltaire期の重要なステップです。より具体的に説明すると、

先週、Matthias Benkort（Cardano財団）、Addie Girouard、Jared Corduan、Kevin Hammond（IOG）により、[CIP-1694に関するディスカッションが開催](https://www.youtube.com/watch?v=obFeC2JS_IQ&t=5s)されました。ここでは、コミュニティ主導で現在のガバナンススキームを強化すること、委任代表団（dRep）、憲法委員会（Constitutional Committee）、ステークプールオペレーターの将来の役割と責任、Cardanoの指針を定義、保護する方法、そしてそこに到達するために必要なツールとガバナンスプロセスについて議論しました。

CIP-1694の詳細から、将来的にさらに大きな変化を可能にする分散型ガバナンスをますます促進させる新しいツールを提供する方法をご覧ください。

**Project Catalyst**

先週の**Project Catalyst**では、Catalystプラットフォームのデプロイと監査性に関して提案された改善点について最新情報を提供しました。メインタウンホールからのセグメントの再視聴は[ここから](https://youtu.be/Xk-FRLQT6v8?t=2345)行えます。今後数週間内に、さらなる更新情報が提供されます。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録をしてください。

  
週刊ニュースレターの過去の号をブックマークして、Project Catalystのすべての情報を入手してください。詳しくは、[こちら](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)をご覧ください。
