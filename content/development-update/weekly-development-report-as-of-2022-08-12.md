---
title: Weekly development report as of 2022-08-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/797d1fdc-0f83-4695-8505-6b1f74e5ac5c/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams released node v.1.35.3. If no issues occur and the node works as intended, v.1.35.3 will trigger the Vasil mainnet upgrade. They also upgraded the serialization library, wallet backend, Rosetta, and GraphQL to the latest tags. 

The **consensus** team continued working on UTXO HD performance properties and ran some property tests for the changelog. They also worked on Genesis model assumptions, reviewed the ChainSync rate-limiting feature, and planned further work on P2P, Eclipse, and Genesis. 

The **networking** team started working on the design and implementation of Gossip. They also released a new node-to-node protocol, fixed some bugs in the network simulator and RTView, and updated the network-mux library.

### WALLETS AND SERVICES 

This week, the **Daedalus** team prepared for the upcoming testnet release of Daedalus v.4.12.1.

Development work is ongoing on the **Lace** desktop features. The team worked on the ‘Send’ function for ada and other asset transactions, improved the ‘Balance’ screen, and added the USD price conversion functionality. 

The **Adrestia** team worked on updating Adrestia components for the upcoming hard fork. They also kept preparing the cardano-js-sdk to production.

Finally, they continued implementing multisig (shared wallets) and light mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on improvements of the debugging process for developers, built-in functions, testing, and documentation updates. They also worked on updating Plutus tools to cardano-node v.1.35.3, fully replacing custom ledger validation rules with the ones from cardano-ledger. The Plutus contract emulator now supports Babbage transactions and the tx builder library is also updated to support Babbage functionality. 

The **Marlowe** team completed work on Marlowe runtime chain synchronization, updated Marlowe Playground to the [latest version](http://play.marlowe-finance.io/), and updated Plutus Core fixing broken Haddock links. 

Finally, they extended the ‘Initialize’ script test operation to allow contract templates with parameters and changed ‘Slots’ to ‘POSIXTime’ in the Marlowe repository. 

### BASHO (SCALING)

This week, the **Hydra** team completed work on transactions that use reference scripts and enabled abort transaction functionality. They also completed Head logic refactoring, updated documentation, and fixed the Flaky test. The team made progress improving time handling, used an exposed key interface for HydraKey, and updated cardano-node with relevant dependencies.  

![](https://lh4.googleusercontent.com/x6XklQqhK9BD0roFNDKZ8zfBOExJVMM2UgIQ7hJWDGzz-sEz8B6tKan919pmtl5yH6QcxE6kJfc1ngdfM-2zjTh8GyRKaN8oaQmBF3AOFWl_7j-VDQAZv_9pmTqPrGs1SzyiN6Ib-g7uoF7f6VsReI8)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームは、ノードv.1.35.3をリリースしました。問題が起こらず、ノードが期待されたとおりに作動した場合、v.1.35.3はVasilメインネットアップグレードをトリガーします。シリアル化ライブラリー、ウォレットバックエンド、Rosetta、GraphQLを最新タグにアップグレードしました。 

**コンセンサス**チームは、UTXO HDのパフォーマンスプロパティに取り組み、Changelogのプロパティテストを実行しました。Genesisモデルの仮説にも取り組み、ChainSyncのレート制限機能を見直し、P2P、Eclipse、Genesisの今後の作業計画を立てました。 

**ネットワーキング**チームは、Gossipの設計と実装に関する作業を始めました。新しいノードツーノードプロトコルをリリースし、ネットワークシミュレーターとRTViewのバグを修正し、network-muxライブラリーを更新しました。

### ウォレットとサービス 

**Daedalusチーム**は、Daedalus v.4.12.1のテストネットリリースを準備しました。

**Lace**デスクトップ機能の開発作業は進行中です。ADAの送信機能や他の資産のトランザクションに取り組み、残高画面を改良し、USD換算表示機能を追加しました。 

**Adrestia**チームはハードフォークに向けたAdrestiaコンポーネントの更新に取り組みました。cardano-js-sdkを本番環境にする準備は進めています。

cardano-walletへマルチシグ（ウォレットの共有）機能とライトモード機能を実装する作業は継続中です。 

### スマートコントラクト

**Plutus**チームは、開発者用のデバッグプロセスの改良、ビルトイン機能、テスト、ドキュメントの更新に取り組みました。Plutusツールをcardano-node v.1.35.3-rc1に更新し、カスタム台帳の検証ルールをcardano-ledgerのものに完全に置き換えました。Plutusコントラクトエミュレーターは現在Babbageトランザクションをサポートしており、tx builderライブラリーもBabbage機能をサポートするよう更新されました。 

**Marlowe**チームはMarloweランタイムチェーン同期の作業を終え、Marlowe Playgroundを[最新バージョン](http://play.marlowe-finance.io/)に更新し、Plutus Coreを更新してHaddockのリンク切れを修正しました。 

Marloweリポジトリで「Initialize」スクリプトのテスト操作を拡張してパラメーター付きコントラクトテンプレートを許可し、「Slots」を「POSIXTime」に変更しました。 

### Basho( スケーリング)

**Hydra**チームは参照スクリプトを使用したトランザクションに関する作業を仕上げ、トランザクション中止機能を有効にしました。Headロジックのリファクタリングを完了し、ドキュメントを更新し、Flakyテストを修正しました。時間処理の改良を進め、Hydrakeyに公開キーインターフェイスを使用し、cardano-nodeを関連する依存関係で更新しました。
