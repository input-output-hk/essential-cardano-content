---
title: Weekly development report as of 2023-02-10
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/528533a6-7aed-4aa0-8274-a49d955a70d4/
image_text: Cardano development report
---

### CORE TECHNOLOGY

This week, IOG teams together with CF and Emurgo continued preparing for the upcoming Valentine (SECP) upgrade. The SECP update proposal to upgrade the Cardano [pre-production environment](https://twitter.com/InputOutputHK/status/1623361548621082624?s=20&t=uwZp68vUgB56dhBkOnaK6g) and mainnet were submitted this week. The upgrade will take effect on pre-production on Saturday, February 11, 2023 at 00:00 UTC, and will be available on mainnet on February 14, 2023 at 21:44:00 UTC.

This week, the teams also released GraphQL v.8.0.0, which is compatible with node versions 1.35.4 and 1.35.5. For the latest progress, track this [upgrade readiness page](https://iohk.zendesk.com/hc/en-us/articles/14669691361433-Ecosystem-readiness-for-the-SECP-upgrade) and see the [compatibility matrix](https://docs.cardano.org/tools/comp-matrix) to stay up to date with the latest releases.

Over the past two weeks, the **ledger** team worked on integration efforts, cleaning up and debugging some serialization issues, and adding tests. They also continued working on ongoing large projects and released a [CIP](https://github.com/cardano-foundation/CIPs/blob/06fc0ab2d9cd4b73503f6c0b1ea6819d3c0b57e3/CIP-%3F%3F%3F%3F/README.md#evolution-of-the-cardano-ledger) to make the ledger a registered CIP category.

The **consensus** team continued refactoring the UTXO-HD prototype and created a new repository that contains the anti-diff packages used in the prototype. Work is ongoing on Genesis development. The team is preparing for the meeting with researchers to audit the implementation design and continue working on basic tests and simplifications. Finally, they introduced two new tools, one for dumping CBOR-encoded blocks to JSON, and another to serve a local immutable database.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the team continued working on **Lace** desktop development. They ran more automated tests, integrated Matomo analytics tracking, and worked on the reflection of the cardano-node status in the UI. They also restructured the code base so that source code files are split by feature, and separated translation files from the Lace browser folder. The team worked with the DevX team to create a single Lace desktop installer capable of connecting to all available networks (mainnet/pre-production/preview). 

Finally, they polished the inner DApp browser by adding styles and details from the UI/UX team.

The **Adrestia** team released Cardano GraphQL v.8.0.0 and continued preparing cardano-js-sdk for release to production. They're also working on extending the multi-signature feature with delegation functionality in cardano-wallet, and on DBLayer refactoring to improve performance and memory usage.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the Plutus debugger, script capacity increase, and source code built-in documentation. Work is also ongoing on building indexers and addressing technical debt. 

This week, the **Marlowe** team improved the data hash in the chain index and worked on the Marlowe Explorer [project and contract view](https://github.com/input-output-hk/marlowe-explorer/commit/6fa3919aa52429e19ead543f500ec56834d793f2). They also ran some unit tests for Marlowe transactions, [refactored](https://github.com/input-output-hk/marlowe-explorer/pull/12) common web page creation functions, and made spec tests reproducible. 

Finally, the team set up an infrastructure for [web API testing](https://github.com/input-output-hk/marlowe-cardano/pull/446), paginated query API for loading contract headers, and added a [MarloweHeaderSync protocol](https://github.com/input-output-hk/marlowe-cardano/pull/442) to marlowe-sync.

### BASHO (SCALING)

The **Hydra** team completed [work on the Hydra V1 specification](https://github.com/input-output-hk/hydra/issues/448) by updating graphs and adding a section about rollbacks. They further plan to make the specification more approachable and an open standard. The team also improved the hydra-cluster tool to launch a local --devnet sandbox environment and continued aligning hydra-plutus scripts with the specification by running more checks on `close` and `contest` transactions.

The **Mithril** team worked on the new relational design of the aggregator store, which will be used with the implementation of the version deployment monitoring for the signer nodes. They also completed the implementation of the era reader trait that powers the era switch behavior. The team finalized the development of the era reader adapter that retrieves era activation markers from transactions on the Cardano chain.

Finally, they created new SPO nodes on the Mithril networks and upgraded the Cardano node to version 1.35.5 on their `devnet` and infrastructure.

The **sidechains** team [released the proof of concept EVM sidechain testnet](https://twitter.com/InputOutputHK/status/1622886158140145669?s=20&t=2gmkNcznmHf9NLyvA-wGKg)**.** Developers can now test token transfer between the test environments, connect wallets, and deploy smart contracts and DApps. You can find updated documentation on how to work with the [example EVM sidechain here](https://docs.cardano.org/cardano-sidechains/example-evm-sidechain/network-details).

### Governance

This week **Project Catalyst** received its 400th project close-out report, which is an amazing milestone for a grassroots innovation fund in two years. Stay tuned for further updates and see the Project Catalyst [website](https://projectcatalyst.io/) for more information.

  
![](https://ucarecdn.com/5a5f63c7-6fcb-4ef8-aa80-d114ec140162/)

### コアテクノロジー

予定されているバレンタイン（SECP）アップグレードの準備を続けました。Cardanoプリプロ環境へアップグレードするためのSECP更新提案は、[今週](https://twitter.com/InputOutputHK/status/1623361548621082624?s=20&t=uwZp68vUgB56dhBkOnaK6g)提出されました。このアップグレードは、日本時間2023年2月11日午前9時に実施されます。 

ノードバージョン1.35.4と1.35.5対応のGraphQL v.8.0.0もリリースしました。最新の進捗状況は、[アップグレード準備の進捗情報ページ](https://iohk.zendesk.com/hc/en-us/articles/14669691361433-Ecosystem-readiness-for-the-SECP-upgrade)を、また、最新リリース情報は[互換性マトリックス](https://docs.cardano.org/tools/comp-matrix)をチェックしてください。

この2週間、**台帳**チームは統合に取り組み、シリアル化に関する不具合のクリーンアップとデバッグ、そしてテストの追加を行いました。進行中の大規模なプロジェクトに関する作業も続け、台帳を登録済みCIPカテゴリーにするための[CIP](https://github.com/cardano-foundation/CIPs/blob/06fc0ab2d9cd4b73503f6c0b1ea6819d3c0b57e3/CIP-%3F%3F%3F%3F/README.md%23evolution-of-the-cardano-ledger)をリリースしました。

コンセンサスチームはUTXO-HDプロトタイプのリファクタリングを続け、プロトタイプで使用するanti-diffパッケージを含む新しいリポジトリを作成しました。Genesisの開発作業は進行中です。実装デザインの監査のために研究者とのミーティングを準備しています。また、基本テストと簡易化への取り組みを続けています。さらに、2つの新ツールが導入されました。1つはCBORでエンコードされたブロックをJSONにダンプするためのもので、もう1つはローカルの不可変データベースを提供するためのものです。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

引き続き**Lace**デスクトップの開発に取り組みました。さらに多くの自動化されたテストを実行し、Matomo分析追跡を統合し、cardano-nodeのステータスをUIに繁栄させる作業に取り組みました。コードベースをリファクタリングしてソースコードファイルを機能で分割し、翻訳ファイルをLaceブラウザーフォルダーから分離しました。DevXチームと協力して、利用可能な全ネットワーク（メインネット、プリプロ、プレビュー）に接続可能な単一のLaceデスクトップインストーラーを作成しました。 

UI/UXチームのスタイルと詳細を追加してDAppインナーブラウザーを改良しました。

**Adrestia**チームは、Cardano GraphQL v.8.0.0をリリースし、cardano-js-sdkを本番環境にリリースする準備を継続しました。cardano-walletのマルチシグ機能を委任機能で拡張し、パフォーマンスとメモリー使用量を改善するためにDBLayerのリファクタリングに取り組みました。

### スマートコントラクト

**Plutus**チームは、Plutusデバッガー、スクリプト容量増加、ソースコードビルトインの文書化への取り組みを続けました。インデクサーの構築と技術負債への対応は継続しています。 

**Marlowe**チームは、チェーンインデックスのデータハッシュを改良し、Marlowe Explorerの[プロジェクトおよびコントラクト表示](https://github.com/input-output-hk/marlowe-explorer/commit/6fa3919aa52429e19ead543f500ec56834d793f2)に取り組みました。Marloweトランザクションのユニットテストを実行し、共通のウェブページ作成機能を[リファクタリング](https://github.com/input-output-hk/marlowe-explorer/pull/12)し、仕様テストを再現可能にしました。 

[ウェブAPIテスト](https://github.com/input-output-hk/marlowe-cardano/pull/446)のインフラをセットアップし、コントラクトヘッダーを読み込むためのクエリAPIをページ分割し、[MarloweHeaderSyncプロトコル](https://github.com/input-output-hk/marlowe-cardano/pull/442)をmarlowe-syncに追加しました。

### Basho( スケーリング)

**Hydra**チームは、グラフを更新し、ロールバックに関するセクションを追加して、[Hydra V1の仕様に関する作業](https://github.com/input-output-hk/hydra/issues/448)を完了しました。 さらに、仕様をより親しみやすく、オープンな標準にすることを計画しています。ローカルのDevNetサンドボックス環境に展開するようhydra-clusterツールを改良し、`close`および`contest`トランザクションのチェックをさらに実行することによってhydra-plutusスクリプトと仕様をすり合わせる作業を継続しました。

**Mithril**チームは、アグリゲーターストアの新しいリレーショナル設計に取り組みました。これは、署名者ノードのバージョンデプロイ監視の実装で使用されます。開発期切り替え動作を強化する、開発期読み取りトレイトの実装も完了しました。Cardanoチェーンのトランザクションから開発期有効化マーカーを回収する開発期読み取りアダプターの開発を完了しました。

Mithrilネットワークに新しいSPOノードを作成し、`devnet`とインフラでCardanoノードを1.35.5にアップグレードしました。

**サイドチェーン**チームは、[EVMサイドチェーンテストネットの概念実証をリリースしました](https://twitter.com/InputOutputHK/status/1622886158140145669?s=20&t=2gmkNcznmHf9NLyvA-wGKg)\*\*。\*\*開発者は、テスト環境間でトークンの移動、ウォレットの接続、スマートコントラクトやDAppのデプロイをテストすることができます。[EVMサイドチェーンのサンプル](https://docs.cardano.org/cardano-sidechains/example-evm-sidechain/network-details)の使い方に関する更新されたドキュメントをご覧ください。

### ガバナンス

**Project Catalyst**は、400番目のプロジェクト完了報告書を受け取りました。これは2年間のグラスルートイノベーションファンドにとって驚くべきマイルストンです。最新情報をお楽しみに。また、Project Catalystの[ウェブサイト](https://projectcatalyst.io/)で詳細情報をご覧ください。
