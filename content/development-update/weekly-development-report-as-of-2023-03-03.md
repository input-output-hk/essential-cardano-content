---
title: Weekly development report as of 2023-03-03
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/4148fa96-3337-4e05-aae0-fdee86f4becc/
image_text: Weekly development report as of 2023-03-03
---

### CORE TECHNOLOGY

This week, the **core technology** teams continued working on ledger, consensus, and networking improvements. 

The **benchmarking** team finalized benchmarking runs and analyses for the new SECP primitives and for the upcoming node v.1.35.6 release. The team also performed their first benchmarking runs for UTXO-HD and are currently refining the setup. To improve accessibility, they added introspective capabilities to the new tracing system. More work is ongoing on infrastructure and tooling improvements.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on adding support for Ledger v.6.0.3.

Work is ongoing on the **Lace** desktop development. The team continued polishing the DApp browser, which follows the newest v.0.2.0 of [CIP-30](https://cips.cardano.org/cips/cip30/), and added a banner to display various Cardano node statuses. They also reduced the app's memory consumption, reorganized the translation files' structure, and made significant progress on CI infrastructure issue resolutions. 

The **Adrestia** team are still working on extending the multi-signature feature with delegation functionality in cardano-wallet. They're also working on extracting the transaction balancing library, and on DBLayer refactoring to improve performance and memory usage.

Finally, the team is preparing cardano-js-sdk for production release.

### SMART CONTRACTS

This week, the **Plutus** team kept enhancing the Plutus debugger and worked on script capacity increase by adding sums and products and incorporating Plutonomy optimizations. The Plutus tools team worked on building indexers for the sidechains team using Marconi. Additionally, they worked on reducing technical debt by providing support for cardano-api in the emulator.

This week, the **Marlowe** team fixed the traversal of parties to extract roles and public keys and some incorrect asset records for marlowe-chain-indexer. They also handled the epoch-boundary block in [chain-indexer tests](https://github.com/input-output-hk/marlowe-cardano/pull/497), ensured that coin selection [respects collateral rules](https://github.com/input-output-hk/marlowe-cardano/pull/470), and defined the [Marlowe Runtime scaling strategy](https://github.com/input-output-hk/marlowe-cardano/pull/479). The team worked on the creation of a first draft of the Marlowe Starter Kit for [demeter.run](https://demeter.run/), added unit tests for `buildApplyInputConstraintsV1`, and made some table modifications in Marlowe Explorer.

Finally, they introduced basic [error reporting](https://github.com/input-output-hk/marlowe-cardano/commit/eb023e8bb) to the REST API and [fixed db-comparison](https://github.com/input-output-hk/marlowe-cardano/pull/496) for the illegal Shelley address.    

### BASHO (SCALING)

This week, the **Hydra** team continued closing various gaps and aligning the implementation of the Hydra Head protocol logic with the specification. They also completed the [minting policy implementation](https://github.com/input-output-hk/hydra/issues/720), clarified message authentication with researchers, and planned further work for [mainnet compatibility](https://github.com/input-output-hk/hydra/issues/713). 

Finally, the team progressed on the internal audit and published some auditing guidelines to receive community contributions.

The **Mithril** team worked on deploying the era activation mechanism to their test networks and preparing the upgrade procedure to be implemented on the signer nodes run by the SPOs. They also refactored the state machines of the aggregator and signer nodes so that they can better handle critical errors, which lead to node panic, from recoverable errors. Additionally, the team started working on the design that will allow a Mithril network to certify generic types of data with a minimum customization effort and only soft updates.

Finally, they started working on a test network running a `mainnet` Cardano network and fixed a bug that made the client Docker image crash at startup.

![](https://lh3.googleusercontent.com/uUbbrPu7FermSRggv4HzddN0C_WX90LV_y3MZctxiwR_p6IbcHG8PHxVQxoP6NjKZhbFSEio2dbebfIB7SBlTnruZh3pyr6ZR5vrMFVcm3mwMEtc1WmGljQBcl-Z-0wZtqInq8grAqC4)

### コアテクノロジー

**コアテクノロジー**チームは、台帳、コンセンサス、ネットワークの改良への取り組みを続けました。 

**ベンチマーク**チームは、新しいSECPプリミティブと予定されているノードv.1.35.6リリースのベンチマーク実行と分析を完了しました。UTXO-HDの最初のベンチマークランを実行し、現在セットアップを改良しています。アクセシビリティを向上させるために、新しい追跡システムにイントロスペクティブ機能を追加しました。インフラとツールの改良に向けて、さらに多くの作業が進行中です。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、Ledger v. 6.0.3のサポートの追加に取り組みました。

**Lace**デスクトップの開発作業は進行中です。[CIP-30](https://cips.cardano.org/cips/cip30/)の最新バージョン0.2.0に続くDAppブラウザーの改良を続け、さまざまなCardanoノードのステータスを表示するバナーを追加しました。アプリのメモリ消費量を削減し、翻訳ファイルの構造を再編成し、CIインフラの問題解決に大きな進展をもたらしました。 

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業を続けています。トランザクション残高ライブラリーの抽出作業、パフォーマンスとメモリー使用量を改善するためのDBLayerのリファクタリングに取り組んでいます。

cardano-js-sdkの本番リリースを準備しています。

### スマートコントラクト

**Plutus**チームは、Plutusデバッガーの機能強化を続け、SUMと製品を追加し、Plutonomy最適化を組み込むことでスクリプト容量を増やす作業に取り組みました。Plutusツールチームは、Marconiを使用してサイドチェーンチームのインデクサー構築に取り組みました。エミュレーターでcardano-apiのサポートを提供することで、技術負債の削減に取り組みました。

**Marlowe**チームは、Marlowe-chain-indexerの役割と公開鍵、およびいくつかの誤った資産レコードを抽出するために、当事者のトラバーサルを修正しました。[chain-indexerテスト](https://github.com/input-output-hk/marlowe-cardano/pull/497)のエポック境界ブロックを処理し、コイン選定が[担保ルールを遵守](https://github.com/input-output-hk/marlowe-cardano/pull/470)するようにし、[Marlowe Runtimeスケーリング戦略](https://github.com/input-output-hk/marlowe-cardano/pull/479)を定義しました。[demeter.run](https://demeter.run/)用のMarlowe Starter Kit初回ドラフトを作成し、buildApplyInputConstraintsV1のユニットテストを追加し、Marloweエクスプローラーに変更を加えました。

REST APIに基本的な[エラー報告](https://github.com/input-output-hk/marlowe-cardano/commit/eb023e8bb)を導入し、不正なShelleyアドレス用の[db-comparisonを修正](https://github.com/input-output-hk/marlowe-cardano/pull/496)しました。    

### Basho( スケーリング)

**Hydra**チームは、Hydra Headプロトコルロジックの実装と仕様のさまざまなギャップを埋め、調整する作業を続けました。[ミントポリシーの実装](https://github.com/input-output-hk/hydra/issues/720)を仕上げ、研究者とメッセージ認証を明確にし、[メインネットの互換性](https://github.com/input-output-hk/hydra/issues/713)に関する今後の作業を計画しました。 

内部監査を進め、コミュニティの貢献を受けるための監査ガイドラインをいくつか公開しました。

**Mithril**チームは、ERAアクティベーションメカニズムをテストネットワークにデプロイし、SPOが実行する署名者ノードに実装するアップグレード手順を準備しました。アグリゲーターノードと署名者ノードのステートマシンをリファクタリングして、回復可能なエラーからノードパニックを引き起こす重要なエラーをより適切に処理できるようにしました。Mithrilネットワークが最小限のカスタマイズ労力とソフトアップデートだけで汎用タイプのデータを認証できるようにする設計に取り組み始めました。

Cardanoのmainnetネットワークを実行しているテストネットワークの作業を開始し、起動時にクライアントDockerイメージがクラッシュするバグを修正しました。
