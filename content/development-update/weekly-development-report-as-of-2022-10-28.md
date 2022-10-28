---
title: Weekly development report as of 2022-10-28
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/22d26061-5f12-4097-a26a-b64d749c442f/
image_text: ""
---

### CORE TECHNOLOGY

This week, the teams continued working on the node, ledger, consensus, and networking improvements.

For a detailed overview, see this [technical development report](https://input-output-hk.github.io/cardano-updates/).

### WALLETS AND SERVICES 

This week, the **Daedalus** team increased the minimum required disk space and released a new Daedalus pre-production version after the network respin. 

Work is ongoing on **Lace** desktop development. The team migrated all UI components to use only cardano-js-sdk. The quality assurance team is preparing to run a regression test for potential issue resolution between browser and desktop applications. The team also implemented ‘feature flags’ to switch such functionality as, for example, multi-address support on and off. Finally, they created a notification about unused multi-address changes. 

The **Adrestia** team remained focused on getting cardano-js-sdk production-ready, and also worked on post-Vasil upgrade improvements.

The team also worked on the multisig (shared wallets) feature and the first implementation of build-balance library (balanceTx) in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the SECP release process and started work on the main exploratory parts of the process increment. They made progress on the implementation of Babbage support and the addition of integration tests into the Plutus tools builder library and planned the next process increment.

The **Marlowe** team used Marlowe Runtime to execute the Actus PAM contract on the preview testnet. They also defined an initial list of features for the Runtime web server and added CLI support for the Marlowe contract history. Additionally, the team fixed transaction creation issues, implemented a constraint-solving feature for Marlowe transactions, and implemented `marlowe` command functions into Marlowe Runtime. 

Finally, they addressed known vulnerabilities in the Marlowe specification, published reference scripts, added JSON serialization to the reference Haskell implementation, and wrote new calculation functions.

### BASHO (SCALING)

This week, the **Hydra** team reviewed and addressed several open comments in the new HeadV1 specification, completing a list of identified gaps between the specification and implementation. Following the [recent demonstration](https://twitter.com/SundaeSwap/status/1580969361892085762) of the SundaeSwap DEX running on Hydra, the teams met to capture feature ideas and incorporate feedback on the roadmap. They also discussed potential research avenues.

The **Mithril** team has been working on the new continuous integration and delivery (CI/CD) pipelines and the automated deployment of environments as part of the new version of the release process. They also worked on the optimization of the cryptographic library by removing the use of the Merkle path from single signatures. 

Finally, they started implementing the automatic data storage upgrade of the signer and the aggregator nodes.

### GOVERNANCE

This week, **Project Catalyst** finalized and distributed ecosystem rewards to proposal assessors and veteran proposal assessors for their work in Fund9. Voters’ rewards will be distributed by the end of next week. 

All projects and ecosystem rewards in Project Catalyst are funded by the Cardano treasury, whose goal is the provision of funds to develop Cardano activities through a voting process. This necessitates a process whereby funds are regularly sent to the treasury to ensure sustainability. With every transaction on the Cardano blockchain, a small fixed transaction fee applies, of which a small percentage gets added to the treasury. As of October 2022, the Cardano treasury holds over 1bn ada.  

![](https://lh4.googleusercontent.com/EdPJ-r6eTCpoXeIVy_s8GgRbHn6XZYHN0q_f_vynXFvc3zmyweIn_yUggwAgQ0NXhvDgYSxYqsWsLtpc6HaOwVX8vWuXQMdctwgYmIOzY_eMIHR0cbAnwJgt5OzFuqR7kVVswjln0i62_vEW-4ZKxuHPvsw112AsifxQIoCdrl0WMwmSmnitwBbqymc)

### コアテクノロジー

ノード、台帳、コンセンサス、ネットワークの改良作業を続けました。

詳細は[技術開発レポート](https://input-output-hk.github.io/cardano-updates/)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは必要とされるディスク容量を増加し、ネットワークの再スピン後に新しいDaedalus Pre-productionバージョンをリリースしました。 

**Lace**デスクトップの開発作業は進行中です。すべてのUIコンポーネントをcardano-js-sdkのみを使用するよう移行させました。QAチームは、ブラウザーとデスクトップアプリケーション間の問題解消の可能性のために、リグレッションテストを実行する準備をしています。マルチアドレスサポートのオン、オフなど、機能の切り替えを行うための「feature flags（機能フラッグ）」の実装も行いました。未使用のマルチアドレス変更について、通知を作成しました。 

**Adrestia**チームはcardano-js-sdkを本番環境にする作業に集中したほか、Vasilアップグレード後の改良に取り組みました。

マルチシグ（ウォレットの共有）機能と、cardano-walletへのbuild-balanceライブラリー（balanceTx）初回実装作業にも取り組みました。

### スマートコントラクト

**Plutus**チームはSECPリリースプロセスの作業を続け、プロセス増分の主要調査部分への取り組みを始めました。PlutusツールのビルダーライブラリーにBabbageサポートを実装する作業と統合テストを追加する作業を進め、次のプロセス増分の計画を立てました。

**Marlowe**チームはMarlowe Runtimeを使ってActus PAMコントラクトをプレビューテストネットで実行しました。また、Runtimeウェブサーバーの初期機能リストを定義し、Marloweコントラクト履歴にCLIサポートを追加しました。トランザクション作成の不具合を修正し、Marloweトランザクションの制約解決機能を実装し、Marlowe Runtimeに「marlowe」コマンド関数を実装しました。 

Marlowe仕様の既知の脆弱性に取り組み、参照スクリプトを公開し、参照Haskell実装にJSONシリアル化を追加し、新しい計算関数を作成しました。

### Basho( スケーリング)

**Hydra**チームは新しいHeadV1仕様にある、複数のオープンコメントをレビューし、仕様と実装の間のギャップを特定したリストを完成してこれに対応しました。Hydraで実行されているSundaeSwap DEXの[最近のデモンストレーション](https://twitter.com/SundaeSwap/status/1580969361892085762)を受けて、 チームは機能のアイデアを出し合い、ロードマップにフィードバックを組み込むために集まりました。潜在的な研究手段についても話し合いました。

**Mithril**チームは、パイプラインの新しい継続的統合とデリバリー（CI/CD）、および、新しいリリースプロセスバージョンの一環としての環境の自動デプロイに取り組みました。単一の署名からマークルパスの使用を削除することで、cryptographicライブラリーを最適化しました。 

データストレージの署名者とアグリゲーターノードの自動アップグレードの実装を始めました。

### ガバナンス

**Project Catalyst**はエコシステムの提案査定者とベテラン提案査定者のFund9における作業への報酬をまとめ、送金しました。投票者の報酬は、来週末に送信されます。 

Project Catalystのすべてのプロジェクトとエコシステムの報酬は、Cardanoトレジャリーから資金を得ています。その目的は、投票プロセスを介してCardanoアクティビティを発展させるために資金を提供することです。サステナビリティを確保するためには、資金が定期的にトレジャリーに送られるプロセスが必要です。Cardanoブロックチェーンのトランザクションごとに、少額かつ定額のトランザクション手数料が適用され、そのうち一定の割合がトレジャリーに追加されます。2022年10月現在、Cardanoトレジャリーは10億ADAを保有しています。
