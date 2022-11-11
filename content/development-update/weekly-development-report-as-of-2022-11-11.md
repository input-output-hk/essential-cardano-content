---
title: Weekly development report as of 2022-11-11
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/4945caa4-6326-4faf-8378-0eecfb2c4541/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on ledger, consensus, and networking improvements.

IOG engineering teams are driving forward the [open-source approach](https://input-output-hk.github.io/cardano-updates/2022-10-31-open-source) to sharing Cardano updates and are defining the libraries to be shared with the community.

This is an ongoing process, but more teams are collaborating to share their weekly development progress. As always, for more details from different teams, see this [technical development report](https://input-output-hk.github.io/cardano-updates/archive).

### WALLETS AND SERVICES 

This week, the Daedalus team continued working on **Lace** desktop development. They implemented a feature-flag system that enables and disables features in the Lace desktop application, and worked on the proof of concept to connect the application with DApps. The team also fixed some hardware wallet issues and created new end-to-end tests. 

500 Lace Explorers have been selected and invited to join the first stage of the Explorers Beta Program. You can still register at [lace.io](//lace.io) for a chance to be selected in future stages of this testing program.

The **Adrestia** team focused on getting Cardano-js-sdk production-ready.

The team also worked on post-Vasil improvements, including the release of a maintenance update for cardano-graphql 7.0.2, and the preparation of a release of cardano-rosetta with some fixes and performance improvements.

Finally, the team is still working on implementing the multisig (shared wallets) feature and the first implementation of a build-balance library (balanceTx) for cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on SECP implementation and on the main exploratory parts of the process increment. They finalized Babbage support implementation, continued implementing the stake pool delegation indexer for Marconi, and added more integration tests to the transaction builder library. 

Finally, they are starting a new process increment session this week to plan deliverables for the upcoming months.

The **Marlowe** team created a tutorial for `marlowe-cli run analyze` command and moved Marlowe tests to a new package. They ran a contract using deposit, choice, and notify features, fixed the payout redeemer and coin selection, and tested transaction creation with many UTXOs.

Finally, they defined an initial list of features for Runtime APIs, added JSON serialization to the reference Haskell implementation, and optimized chainseek queries for creating mainnet transactions.

### BASHO (SCALING)

This week, the **Hydra** team redeployed the latest Hydra scripts to re-spin the preview testnet, see [0.8.0 release notes](https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0) for more details. They also completed the implementation of [ADR18](https://hydra.family/head-protocol/adr/18/) and worked on validators, whose development was impacted by CI flakiness. 

Finally, the team discussed hard forks and protocol parameter updates and aligned the Hydra HeadV1 specification with feedback from auditors.

The **Mithril** team has released its first distribution [2244.0](https://github.com/input-output-hk/mithril/releases/tag/2244.0) following the activation of the alpha version of the new release process. They continued refining its implementation and added a new set of artifacts to the distributions, such as Debian packages and macOS/Windows binaries. The team also enhanced the Mithril Explorer, which now provides more detailed information about epoch settings and easier access to multiple aggregators for the users. 

Finally, they started writing a CIP that will allow a higher decentralization of Mithril by using the Cardano node network layer.

### GOVERNANCE

**Project Catalyst** continues the cooldown phase while planning and looking ahead to Fund10.  
  
This week, voter rewards for Fund9 were distributed. This was completed via a Move Instantaneous Rewards (MIR), which means that voter rewards will arrive in a similar way as staking rewards within a few days. These should become spendable at the next epoch boundary. You can learn how to check this [using the example article.  
](https://iohk.zendesk.com/hc/en-us/articles/4403970604441-How-to-check-rewards-earned-from-Project-Catalyst-)

![](https://lh3.googleusercontent.com/8eLw4v96Nmfl6c80ktpC9B4dYt3NfWUUZZasXPWsDHrmS-hAzD2uvaOR62XXK8Gzqb0AxtLhg2Cm-Q-3iQjxL9-5AwfSik5PJ0jaiBx_dWXpFAyw5FsKdV88u8XRXJT3YM0-yl_xnuYmKIj5EKlFb8fEIRjxpycZd60HNzFAeWoUdkK-ptBm7Jho189M9sOb)

### コアテクノロジー

コアテクノロジーチームは、台帳、コンセンサス、ネットワークの改良への取り組みを続けました。

IOGエンジニアリングチームは、Cardanoアップデートの共有に[オープンソースアプローチ](https://input-output-hk.github.io/cardano-updates/2022-10-31-open-source)を推進し、ライブラリーをコミュニティと共有できるよう定義しました。

このプロセスは進行中ですが、週ごとの開発の進捗状況の共有に協力するチームは増えています。通常通り、他チームからの詳細は[技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

Daedalusチームは**、**引き続き**Lace**デスクトップの開発に取り組みました。Laceデスクトップアプリケーションの機能を有効化および無効化する機能フラグシステムを実装し、アプリケーションをDAppと接続するための概念実証に取り組みました。ハードウェアウォレットの不具合を修正し、新しいエンドツーエンドテストを作成しました。 

500のLaceエクスプローラーが選ばれ、エクスプローラーベータプログラムの第1段階に招待されました。このテストプログラムの今後の段階で参加者に選ばれるチャンスはまだ残っていますので、[lace.io](//lace.io)に登録してください。

**Adrestia**チームはcardano-js-sdkを本番環境にするための作業に集中しています。

cardano-graphql 7.0.2のメンテナンスアップデートのリリース、修正とパフォーマンスの改善を含む cardano-rosettaのリリース準備など、Vasil後の改善にも取り組みました。

マルチシグ（ウォレットの共有）機能と、cardano-walletへのbuild-balanceライブラリー（balanceTx）初回実装作業も続けています。

### スマートコントラクト

**Plutus**チームはSECP実装と、プロセス増分の主要調査部分への取り組みを続けました。Babbageサポートの実装を完了し、Marconiのステークプール委任インデクサーの実装を続け、transaction builderライブラリーに統合テストを追加しました。 

今週、今後数か月の成果物を計画するために、新しいプロセス増分セッションを開始します。

**Marlowe**チームは、「marlowe-cli run analyze」コマンドのチュートリアルを作成し、Marloweテストを新しいパッケージに移しました。入金、選択、通知の各機能を使用してコントラクトを実行し、支払い償還者とコインの選択を修正し、多くのUTXOを使ってトランザクション作成をテストしました。

ランタイムAPIの初期機能リストを定義し、JSON シリアライゼーションをHaskell参照実装に追加し、メインネットトランザクションを作成するためのchainseekクエリを最適化しました。

### Basho( スケーリング)

**Hydra**チームは最新のHydraスクリプトを再デプロイしてプレビューテストネットを再スピンしました。詳細は、[0.8.0リリースノート](https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0)をご覧ください。[ADR18](https://hydra.family/head-protocol/adr/18/)の実装も完了し、開発がCIの脆弱性に影響を受けたバリデーターに取り組みました。 

ハードフォークとプロトコルパラメーターの更新について話し合い、Hydra HeadV1の仕様を監査人からのフィードバックに合致させました。

**Mithril**チームは、新リリースプロセスのアルファ版の有効化に続き、初回ディストリビューション[2244.0](https://github.com/input-output-hk/mithril/releases/tag/2244.0)をリリースしました。実装の改良を続け、DebianパッケージやmacOS/Windowsバイナリなどの新しいアーティファクトセットをディストリビューションに追加しました。Mithrilエクスプローラーに関しては、エポック設定についての詳細情報を提供し、ユーザーが簡単に複数のアグリゲーターにアクセスできるよう強化しました。 

Cardanoノードのネットワーク層を使用することによってMithrilの分散化を高めることを可能にするCIPの作成を始めました。

### ガバナンス

**Project Catalyst**はいまだクールダウン期間にあり、Fund10の企画と展望を進めています。  
  
Fund9の投票者報酬は配信されました。この配信には、Move Instantaneous Rewards（MIR）が使用されました。このため、投票者報酬はステーキング報酬に似た方法で数日以内に入金されます。報酬は、次のエポック境界に使用可能になります。例を挙げた記事から、 [確認方法を学ぶことができます。](https://iohk.zendesk.com/hc/en-us/articles/4403970604441-How-to-check-rewards-earned-from-Project-Catalyst-)
