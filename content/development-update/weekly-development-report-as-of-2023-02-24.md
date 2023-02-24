---
title: Weekly development report as of 2023-02-24
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/9990fda4-7627-4ac4-ab4d-fb844c89cc29/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **networking** team fixed some issues in the peer-to-peer (P2P) code. They also finished the [Eclipse evasion design phase](https://github.com/orgs/input-output-hk/projects/19/views/16?pane=issue&itemId=19819205), which is essential for Ouroboros Genesis protocol functionality, and started working on its implementation. 

Finally, the team released [an updated set of network packages](https://input-output-hk.github.io/cardano-updates/2023-02-17-network) to be integrated with the cardano-node master branch.

The **ledger** team integrated multiple changes with the cardano-base and ouroboros-network repositories. This involved changes to the ledger serialization libraries to support proper versioning, and Conway ledger era support, which allows the ledger state to transition to a new system of governance. Additionally, the team continued addressing technical debt, improving the documentation and testing infrastructure, and formally specifying CIP-1694.

The **consensus** team analyzed the results from the system level benchmarks for UTXO HD, which showed a substantial performance regression. The analysis showed that the frequency at which ledger snapshots were taken was too high, so the team requested another benchmarking check based on a more realistic snapshotting policy. They also continued improving the prototype and released UTXO HD related packages.

Work is ongoing on Genesis development – the team discussed the current design with researchers and continued working on the testing and benchmarking of different Genesis prototypes.

The team also fixed a test failure related to iterators, which resulted in documentation improvements, an updated framework for writing unit and regression tests, and the possibility of debugging QuickCheck counter examples.

Finally, they released ouroboros-consensus v.0.2.0.0 and ouroboros-consensus-cardano 0.3.0.0 to [CHaP](https://github.com/input-output-hk/cardano-haskell-packages).

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on LedgerJS package updates to ensure efficient support for hardware wallets.

Work is ongoing on the **Lace** desktop development. The team kept improving the local node UI features (the ability to see node status by hovering over an icon in the main menu, for example), and completed the proof of concept for ‘wallet auto connect’ within a DApp connector. They also improved the application’s UI and UX and resolved various issues in the development repository.

The Lace light wallet platform will be soon updated on pre-production including new features to test before the mainnet launch. Explore more on the [website](https://www.lace.io/).

The **Adrestia** team are still working on extending the multi-signature feature with delegation functionality in cardano-wallet. They're also working on extracting the transaction balancing library, and also on DBLayer refactoring to improve performance and memory usage.

Finally, the team is preparing cardano-js-sdk for production release.

### SMART CONTRACTS

This week, the **Plutus** team kept working on the Plutus debugger development and script capacity increase. They also continued building indexers for Marconi, addressed more technical debt, and improved documentation.

This week, the **Marlowe** team ran some fix and unit tests for timed-out validity interval computation, improved program names and command-line options, and implemented an initial partial [index of Marlowe contracts](https://github.com/input-output-hk/marlowe-explorer/pull/14) in Marlowe Explorer. They also added property-based and integration tests to the protocol, fixed some Marlowe sync issues and added new query tests. 

Finally, they created the basic partial version of the [marlowe-runtime-ts](https://github.com/input-output-hk/marlowe-runtime-ts) client library, added UI for entering the Actus contract terms, and [decoupled](https://github.com/input-output-hk/marlowe-cardano/pull/480) actus-core from marlowe-cardano. 

### BASHO (SCALING)

The **Hydra** team completed work on a different way of [dealing with contests](https://github.com/input-output-hk/hydra/pull/716) during the contestation period. These will now always push the deadline out, making contestation periods easier to pick depending on the network a head runs on. They also added an important acceptance test and completed internal refactoring of the protocol logic, making future changes easier to implement.

The **Mithril** team worked on completing the implementation of the seamless hard updates of their networks with the era switch behavior they had designed. They also created a dedicated command on their nodes’ CLI that allows generating and signing an era marker’s payload to be stored on the Cardano chain, as well as creating dynamic cases for the end-to-end tests they run on the CI. Additionally, the team completed the implementation of the monitoring of the deployment rate of the signer node versions that will help them know when an era switch is ready to be activated.

Finally, they started designing the certification of generic types of data in the Mithril certificate chain.

![](https://lh6.googleusercontent.com/wTqZjKW9X9hqmUFW3pk5icxidlXGQPzJt3hMTGvHx2q5GMo43xb0K0zKVSgTMMHM3rb9Z90Plxmwfb-u2pF1a67GdUvum1JX_k7iNBrOx00cwlLEuj2P-S6U-hpxUB-A8lfShIg1uzpz)

### コアテクノロジー

**ネットワーキング**チームはP2Pコードの不具合を修正しました。Ouroboros Genesisプロトコルの機能に欠かせない[Eclipse回避の設計フェーズ](https://github.com/orgs/input-output-hk/projects/19/views/16?pane=issue&itemId=19819205)を完了し、実装作業に入りました。 

[ネットワークパッケージ](https://input-output-hk.github.io/cardano-updates/2023-02-17-network)を、cardano-nodeのマスターブランチと統合できるように更新しました。

**台帳**チームは、cardano-baseリポジトリおよびouroboros-networkリポジトリに複数の変更を統合しました。これには、適切なバージョニングをサポートするための台帳シリアライゼーションライブラリの変更と、台帳の状態を新しいガバナンスシステムに移行できるようにするConway台帳開発期のサポートが含まれます。その他、技術負債の対処、ドキュメントとテストインフラの改良、CIP-1694の形式仕様記述に関する作業を続けました。

コンセンサスチームは、UTXO HDのシステムレベルのベンチマークの結果を分析しました。これは、大幅なパフォーマンスの低下を示しました。分析の結果、台帳のスナップショットが作成される頻度が高すぎることが判明したため、より現実的なスナップショットポリシーに基づく別のベンチマークチェックを要求しました。プロトタイプの改良を続け、UTXO HD関連パッケージをリリースしました。

Genesisの開発作業は進行中です。現在の設計について研究者と話し合い、引き続きさまざまなGenesisプロトタイプのテストとベンチマークに取り組んでいます。

イテレーターに関連するテストの失敗を修正しました。この結果、ドキュメントの改善、ユニットテストと回帰テストを作成するためのフレームワークの更新、QuickCheckカウンター例のデバッグの可能性がもたらされました。

ouroboros-consensus v.0.2.0.0とouroboros-consensus-cardano 0.3.0.0を [CHAP](https://github.com/input-output-hk/cardano-haskell-packages)にリリースしました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、ハードウェアウォレットの効率的なサポートを確実にするために、LedgerJSパッケージの更新に取り組みました。

**Lace**デスクトップの開発作業は進行中です。ローカルノードUI機能（メインメニューのアイコンにカーソルを合わせることでノードのステータスを確認する機能など）の改良を続け、DAppコネクター内の「ウォレット自動接続」の概念実証を完了しました。アプリケーションのUIとUXを改善し、開発リポジトリのさまざまな問題を解決しました。

Laceライトウォレットプラットフォームは、まもなくプリプロで更新されます。ここには、メインネットへの配信前にテストする新機能が含まれます。[詳細はウェブサイト](https://www.lace.io/)をご覧ください。

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業を続けています。トランザクション残高ライブラリーの抽出作業、パフォーマンスとメモリー使用量を改善するためにDBLayerのリファクタリングにも取り組んでいます。

cardano-js-sdkの本番リリースの準備をしています。

### スマートコントラクト

**Plutus**チームは、Plutusデバッガー開発とスクリプト容量増加への取り組みを続けました。Marconiインデクサーの構築を続け、さらなる技術負債に取り組み、文書を改善しました。

**Marlowe**チームは、タイムアウトの妥当性間隔計算の修正とユニットテストをいくつか実行し、プログラム名とコマンドラインオプションを改善し、Marloweエクスプローラーで最初の部分的な[Marloweコントラクトインデックス](https://github.com/input-output-hk/marlowe-explorer/pull/14)を実装しました。プロトコルにプロパティベースのテストと統合テストを追加し、Marlowe同期の問題を修正し、新しいクエリテストを追加しました。 

[Marlowe-runtime-ts](https://github.com/input-output-hk/marlowe-runtime-ts)クライアントライブラリーの基本的な部分バージョンを作成し、ACTUSコントラクト条件を入力するためのUIを追加し、actus-coreをmarlowe-Cardanoから[切り離し](https://github.com/input-output-hk/marlowe-cardano/pull/480)ました。 

### Basho( スケーリング)

**Hydra**チームは、コンテスト期間中に[コンテストに対処する](https://github.com/input-output-hk/hydra/pull/716)ための異なる方法への取り組みを完了しました。これにより、常に締め切りが延長され、対象となるネットワークに応じてコンテスト期間を選択しやすくなります。重要な受け入れテストを追加し、プロトコルロジックの内部リファクタリングを完了して、将来の変更を実装しやすくしました。

**Mithril**チームは、設計通りに動作する開発期スイッチを搭載したネットワークのシームレスなハードアップデートの実装に取り組みました。Cardanoチェーンに保存する開発期マーカーのペイロードの生成と署名を可能にする専用コマンドをノードのCLIに作成し、CIで実行するエンドツーエンドテストの動的なケースを作成しました。署名者ノードバージョンのデプロイレート監視の実装を完了しました。これは、開発期スイッチをアクティブにする準備が整ったときに知るのに役立ちます。

Mithril証明書チェーンの汎用データタイプの認証の設計を開始しました。
