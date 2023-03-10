---
title: Weekly development report as of 2023-02-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5b019fbb-0644-4c98-a65e-0f0deccc6d8d/
image_text: ""
---

### CORE TECHNOLOGY

This week, the Valentine (SECP) upgrade [went live on Cardano mainnet](https://twitter.com/InputOutputHK/status/1625615743470411784). [Native support for SECP](https://www.essentialcardano.io/article/new-cardano-cryptographic-primitives-will-bring-greater-interoperability-and-secure-cross-chain-dapp-development) now fosters cross-chain interoperability and ensures the highest level of security for DApp development. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team changed how the next Catalyst fund is displayed and fixed a minor issue on the progress screen.

Work is ongoing on the **Lace** desktop development. The team worked on enhancing how the main layout displays embedded DApps, made progress on local node management, and adapted some broken end-to-end tests to the new codebase. 

Finally, they fixed some hardware wallet issues and CSS paddings/margins issues with the DApp display in the desktop app. 

On February 14, 2023 the Lace team held a Twitter Space to discuss the latest on the Lace platform with Charles Hoskinson, Alex Apeldoorn, Ben O’Hanlon, Mathieu Henrijean, and other valued community members. In case you missed it, you can [play the recording here](https://twitter.com/lace_io/status/1625833260457594885).

The **Adrestia** team kept working on extending the multi-signature feature with delegation functionality in cardano-wallet. They also worked on extracting the transaction balancing library, and are currently working on DBLayer refactoring to improve performance and memory usage.

Finally, the team is preparing cardano-js-sdk for production release.

### SMART CONTRACTS

This week, the **Plutus** team kept working on the Plutus debugger development, script capacity increase, and documentation. They also continued building indexers for Marconi and addressing technical debt. 

This week, the **Marlowe** team [deprecated Marlowe Lambda](https://github.com/input-output-hk/marlowe-cardano/pull/464), corrected the collateral index in the chain sync `txout` table, and [updated marlowe-apps](https://github.com/input-output-hk/marlowe-cardano/pull/455) to use the Runtime protocol. They also [documented](https://github.com/input-output-hk/marlowe-cardano/pull/459/files) an existing Marlowe Runtime stress testing strategy, updated commands printed in marlowe-cli --help, implemented the GetTransactions and GetContractState queries, and automated Runtime scenarios. 

Finally, they added support for fetching the Marlowe state from the marlowe-runtime, which allows building contracts with oracle inputs.

### BASHO (SCALING)

The **Hydra** team finalized work on some gaps to align the Hydra scripts implementation with the specification, which also improved script size and costs. They also analyzed the asymptotic complexity of the `collect` and `fanout` transactions and their relation, evaluated the plutus-tx profiling toolchain, and prepared for further improvements in Hydra on-chain performance. 

Finally, the team held discussions with researchers and internal auditors and planned the next steps for securing the Hydra Head protocol using a ‘full’ minting policy. 

The **Mithril** team released a new [2306.0](https://github.com/input-output-hk/mithril/releases/tag/2306.0) distribution that implements minor fixes and updates and completes the wiring of the era activation markers reader into the signer and aggregator nodes. They also designed an event store in the aggregator and started its implementation as a monitoring solution to provide figures for deployment rates of versions on signer nodes before activating an era switch.

Finally, they finalized the new design of the relational store of the aggregator, and fixed a bug that prevented some signers from signing during an epoch if they missed the registration slot for the following epoch.

![](https://lh5.googleusercontent.com/X-sbYEzVfXqCgQJlKCx5C2UW6BV2CVWDi3M1fUo4UuZdhfPrM5067ggrgux-cKdKwPuqaX3-E9sEUJHDsIzzw55293cmwwzyjo0mNNpOWT7D4okL3vgDJicUNQQgghpOZOeRmNB1q8Wi)

### コアテクノロジー

Valentine（SECP）アップグレードが[Cardanoメインネットで稼働を始めました](https://twitter.com/InputOutputHK/status/1625615743470411784)。[SECPのネイティブサポート](https://www.essentialcardano.io/article/new-cardano-cryptographic-primitives-will-bring-greater-interoperability-and-secure-cross-chain-dapp-development)により、チェーン間相互運用性が促進され、DApp開発のために最高レベルのセキュリティが保証されます。 

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは次回Catalystファンドの表示方法を変更し、進捗画面の軽微な不具合を修正しました。

**Lace**デスクトップの開発作業は進行中です。DAppに組み込まれたメインのレイアウト表示を改良し、ローカルノード管理を進展させ、一部の壊れたエンドツーエンドテストを新しいコードベースに適合させました。 

デスクトップアプリで、ハードウェアウォレットの不具合、DApp表示のCSSパディング/マージンの問題を修正しました。 

2023年2月14日、LaceチームはTwitterスペースを開き、Charles Hoskinson、Alex Apeldoorn、Ben O’Hanlon、Mathieu Henrijean、その他コミュニティメンバーとともにLaceプラットフォーム最新情報について語り合いました。聞き逃した方は[こちらの録音](https://twitter.com/lace_io/status/1625833260457594885)をお聞きください。

**Adrestia**チームは、cardano-walletのマルチシグ機能を委任機能で拡張する作業を続けました。トランザクション残高ライブラリーの抽出作業も行い、現在はパフォーマンスとメモリー使用量を改善するためにDBLayerのリファクタリングに取り組んでいます。

cardano-js-sdkの本番リリースを準備しています。

### スマートコントラクト

**Plutus**チームは、Plutusデバッガー開発、スクリプト容量増加、文書化への取り組みを続けました。Marconiインデクサーの構築と、技術負債への取り組みも継続しました。 

**Marlowe**チームは、[Marlowe Lambdaを非推奨にし](https://github.com/input-output-hk/marlowe-cardano/pull/464)、チェーン同期「txout」テーブルの担保インデックスを修正し、ランタイムプロトコルを使用するように[marlowe-appsを更新](https://github.com/input-output-hk/marlowe-cardano/pull/455)しました。既存のMarlowe Runtimeのストレステスト戦略を[文書化](https://github.com/input-output-hk/marlowe-cardano/pull/459/files)し、marlowe-cli --helpにプリントされたコマンドを更新し、GetTransactionsクエリとGetContractStateクエリを実装し、Runtimeシナリオを自動化しました。 

marlowe-runtimeからMarloweステータスをフェッチするためのサポートを追加しました。これにより、オラクルインプットを使用したコントラクトが構築できるようになります。

### Basho( スケーリング)

**Hydra**チームは、Hydraスクリプト実装と仕様のギャップを埋める作業を完了しました。これにより、スクリプトサイズとコストも改善されました。「collect」トランザクションと「fanout」トランザクションの漸近的な複雑さとその関係を分析し、plutus-txプロファイリングツールチェーンを評価し、Hydraオンチェーンパフォーマンスのさらなる改善に備えました。 

研究者や社内監査役と話し合い、「完全な」ミントポリシーを使用するHydra Headプロトコルを保護するための次のステップを計画しました。 

**Mithril**チームは、新しい[2306.0](https://github.com/input-output-hk/mithril/releases/tag/2306.0)ディストリビューションをリリースしました。これは軽微な修正と更新を実装し、署名者ノードとアグリゲーターノードへの開発期アクティベーションマーカーリーダーの配線を完了するものです。アグリゲーターのイベントストアを設計し、開発期切り替えを有効化する前に署名者ノードでのバージョンデプロイ率の数値を提供する監視ソリューションとして実装を始めました。

アグリゲーターのリレーショナルストアの設計を完了し、署名者が次のエポックの登録スロットを逃した場合、エポック中に署名できなくなるというバグを修正しました。
