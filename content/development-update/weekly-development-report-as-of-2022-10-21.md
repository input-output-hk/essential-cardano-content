---
title: Weekly development report as of 2022-10-21
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/7ee77db1-cc08-4e54-91f7-e5f3ef0f733e/
image_text: Cardano weekly development report
---

### CORE TECHNOLOGY

This week, the **ledger** team continued addressing technical debt. The infrastructure for serialization schemes versioning is now in place. They took the first steps towards implementing proper support for the [formal ledger repository](https://github.com/input-output-hk/formal-ledger-specifications), particularly by adding Nix builds and continuous integration support. They are now finalizing an investigation of the performance of a critical function used by the consensus layer for leader checks. 

Finally, the team is in the process of improving code packaging and versioning.

The **consensus** team worked on adding property tests for different aspects of the UTXO HD prototype (era transitions, mempool, and backing store). Work is also ongoing on Genesis development. The team benchmarked a different version of the ChainSync jumping prototype and inspected performance improvements. 

For a detailed overview, see this [technical development report](https://input-output-hk.github.io/cardano-updates/).

### WALLETS AND SERVICES 

The **Daedalus** team released Daedalus v.5.1.0 and is now upgrading dependencies with critical vulnerabilities.

Work is ongoing on **Lace** desktop development. The team resolved wallet restoration issues and started moving traces of the bridge component for cardano-wallet. 

The Lace wallet platform was also presented during the recent Rare Bloom event, where the Lace team showcased the beta product. During this event, the team announced the upcoming _Lace explorers beta program_. If you’re interested in participating in the Lace development process by helping test the wallet’s functionality and scalability before the official mainnet launch, [you can sign up here](https://www.lace.io/). 

Finally, the Lace team is recruiting for community manager and technical community manager roles. You can find out more in the footer of the Lace website.

The **Adrestia** team remained focused on getting cardano-js-sdk production-ready and worked on post-Vasil upgrade improvements.

The team also worked on the multisig (shared wallets) feature and the first implementation of build-balance library (balanceTx) in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the SECP release process and the exploratory parts of the process increment. They made progress implementing Babbage support in the Plutus tools transaction builder library, implemented a stake pool delegation indexer for Marconi, and added more integration tests.

The **Marlowe** team added balancing to solve Marlowe Runtime transaction creation constraints and wrote a function that generates relevant choice input data for tests. They also fixed collisions in the default marlowe-tx command port argument, fixed incorrect UTXO query results in `chainseekd`, and implemented `buildApplyInputsConstraints` and `buildCreateConstraints`. 

### BASHO (SCALING)

This week, the **Hydra** team worked on implementing [ADR18](https://hydra.family/head-protocol/adr/18/) the backup and restore functionality of the Hydra node. The early version of this feature was already tested by SundaeSwap in their [recent demonstration](https://twitter.com/SundaeSwap/status/1580969361892085762) of the DEX running on Hydra. The team also worked on updating the specification, met with the researchers, and discussed a solution for securing rollbacks ‘past the opening of a Head’. They also responded to recent requests for static executables by prioritizing, implementing, and merging this feature. 

The **Mithril** team has been actively monitoring the current Mithril test environment following the release of a new experimental ‘certified’ registration of the SPOs. They identified and fixed some issues that prevented genuine SPOs from registering. The team also continued implementing the new version of the release process while working on the new CI/CD workflows and environments.

### GOVERNANCE

This week, **Project Catalyst** continues to finalize project onboarding. Two hundred and sixteen projects werefunded in Fund9 and are now going through due diligence and setting reporting expectations.  
  
Preparation for Fund10 is in progress. There is wide recognition that processes need to mature, simplify, become more autonomous, remain inclusive, and continue demonstrating value to the broader Cardano ecosystem. As a result, new changes will be introduced to the community for consideration before the Fund10 launch.  
  
To stay up to date with the latest development or participate in Project Catalyst’s governance, join this [mailing list](https://bit.ly/3dSZJvx), weekly [Town Halls](https://bit.ly/3rCicSR) (restarting in November), and a dedicated [Discord](https://discord.gg/U5PMfmWZ) channel.

  

![](https://lh6.googleusercontent.com/W6H9MrVDwA_vy-rtGVaAUAZftLXsv0-gx-YwQfjoqoQ6vyM7K7snrG28kgruQeiZkzqC0lGjeQ-ewsUAQge-nLuA67O15n3y8QgzMQSrSF87mR0N1MYYJkEpMclZn_b_pxMrR6piA6gQeTbaVo6HGDqXRbRuAM_89N9ky7aAJsbhbrYj7XxQhZglsc0q)

### コアテクノロジー

**台帳**チームは技術負債への取り組みを続けました。シリアル化スキームバージョニングのインフラが整いました。とくにNixビルドと継続的な統合サポートを追加することによって、[formal ledgerリポジトリ](https://github.com/input-output-hk/formal-ledger-specifications)の適切なサポート実装に向けて、最初の一歩を踏み出しました。現在、コンセンサス層でリーダーチェックに使用されている重要な関数のパフォーマンスの調査の最終段階に入っています。 

コードパッケージとバージョニングを改良するプロセスに入りました。

**コンセンサス**チームは、UTXO HDプロトタイプのさまざまな側面（開発期遷移、メモリープール、バッキングストア）のプロパティテストを追加する作業に取り組みました。ジェネシスの開発作業も進行中です。異なるChainSyncジャンププロトタイプのバージョンのベンチマークを行い、パフォーマンスの改善について調べました。 

詳細は[技術開発レポート](https://input-output-hk.github.io/cardano-updates/)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームはDaedalus v.5.1.0をリリースし、現在重要な脆弱性のある依存関係をアップグレードしています。

**Lace**デスクトップの開発作業は進行中です。ウォレットの復元に関する問題を解消し、cardano-walletのブリッジコンポーネントの追跡の移動を始めました。 

Laceウォレットのプラットフォームは、先般のRare Bloomイベントでも発表され、Laceチームはベータ版を紹介しました。このイベントで、チームは予定されている_Laceエクスプローラーベータプログラム_について発表しました。ウォレットの機能やスケーラビリティを公式なメインネット立ち上げ前にテストすることで、Laceの開発プロセスに参加したい場合には、[こちらでサインアップ](https://www.lace.io/)してください。 

現在Laceチームは、コミュニティマネージャーとテクニカルコミュニティマネージャーを募集しています。詳しくは、Laceウェブサイトのフッターをご覧ください。

**Adrestia**チームはcardano-js-sdkを本番環境にする作業に集中したほか、Vasilアップグレード後の改良に取り組みました。

マルチシグ（ウォレットの共有）機能と、cardano-walletへのbuild-balanceライブラリー（balanceTx）初回実装作業にも取り組みました。

### スマートコントラクト

PlutusチームはSECPリリースプロセスと、プロセス増分の調査部分への取り組みを続けました。PlutusツールのトランザクションビルダーライブラリーにBabbageサポートを実装する作業を進め、Marconi用のステークプール委任インデクサーを実装し、統合テストをさらに追加しました。

**Marlowe**チームは、Marlowe Runtimeのトランザクション作成の制約を解消するために残高を追加し、テスト用に関連する選択インプットを生成する関数を作成しました。デフォルトのmarlowe-txコマンドポート引数の衝突を修正し、chainseekdでの誤ったUTXOクエリ結果を修正し、buildApplyInputsConstraintsとbuildCreateConstraintsを実装しました。 

### Basho( スケーリング)

**Hydra**チームは、[ADR18](https://hydra.family/head-protocol/adr/18/) Hydraノードのバックアップおよび復元機能の実装に取り組みました。本機能の初期バージョンは、SundaeSwapがHydraで実行中のDEXを[最近デモンストレーション](https://twitter.com/SundaeSwap/status/1580969361892085762)した中ですでにテストされています。また、仕様を更新し、研究者と会い、「Headのオープニングを過ぎた」ロールバックを確保するソリューションについて話し合いました。また、この機能を優先し、実装し、マージすることで、静的実行可能ファイルに対する最近の要求に応えました。 

**Mithril**チームは、新しい実験的なSPOの「認証済み」登録のリリースを受け、現在のMithrilテスト環境の監視を活発に行っています。正当なSPOの登録を妨げていたいくつかの問題を特定し、修正しました。リリースプロセスの新バージョンの実装を続けるとともに、新しいCI/CDワークフローおよび環境に取り組みました。

### ガバナンス

**Project Catalyst**は、引き続きプロジェクトのオンボーディングの最終段階にあります。216プロジェクトがFund9で資金調達を受け、現在デューデリジェンスを実施し、期待値のレポートを設定しています。  
  
Fund10の準備は進んでいます。プロセスが成熟し、簡素化され、より自律的になり、包括的であり続け、より広範なCardanoエコシステムに価値を示し続ける必要があるという認識が広まっています。その結果、Fund10の開始前にコミュニティが熟考するべく、新たに変更が導入されます。  
  
最新の開発情報を入手したり、Project Catalystのガバナンスに携わるには、この[メーリングリスト](https://bit.ly/3dSZJvx)、毎週の[Town Halls](https://bit.ly/3rCicSR)（11月再開）、[Discord](https://discord.gg/U5PMfmWZ)専用チャネルにご参加ください。
