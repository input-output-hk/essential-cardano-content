---
title: Weekly development report as of 2022-05-20
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/edbf8718-9592-4269-a5f2-adbbc7957dc8/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams continued preparing for June’s Vasil hard fork. They worked on the new node version, DB Sync dependencies, and benchmarking. As diffusion pipelining had been merged to master, the teams continued working on testing and bug fixes. They finalized logging improvements and are now preparing for the closed testnet release inviting a small group of DApps for functionality assessment. 

The **DevOps** team performed automation tasks to simplify the creation of new Cardano networks and integrated HashiCorp consul and vault with the entry point for cardano-node to automate configuration management. Finally, they worked on the P2P deployment of cardano-node to Bitte (Nomad) in preparation for Vasil hard fork testing. 

The **networking** team continued working on the typed-protocols refactoring, had a final code review session, and resolved relevant issues. They also started working on the networking tooling for node deployment to ensure robust management of eight machines that run 16 nodes worldwide. Finally, they are now working with approximately 70 SPOs on the P2P public testnet.

### WALLETS AND SERVICES

The **Daedalus** team migrated the Daedalus module bundler from Webpack 4 to Webpack 5. They also created a special Daedalus version for the Marlowe Pioneers program and resolved some issues related to hardware wallet functionality.

The **Adrestia** team began preparing Adrestia components for the upcoming hard fork.

They also finalized the cardano-js-sdk MVP and moved it forward to get it production-ready alongside a new simple HTTP API built on top of db-sync.

Finally, the team continues working on technical debt, and adding multisig features and "light" mode to cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team added a new definition `Plutus.ChainIndex.App (runMainWithLog)` to the chain index that allows it to run with different functions to process startup logs. They also made optimizations to the `MakeKnownM` builtin.

The **Marlowe** team improved the approximation of transaction fees and the duration and display of error messages in Marlowe Run. They also set up Sentry integration and fixed some mock-chain testing issues. Within the Marlowe Playground, they fixed issues that prevented the oracle prototype from working and updated the tutorials and labels for time parameters in the metadata. 

### BASHO (SCALING)

This week, the **Hydra** team continued working on the contestation validator and logic, and initiated preparations to audit and formalize Coordinated Head Protocol verification. They also provided the ability to accept transactions in binary format using Hydra API, and started evaluating upcoming Babbage features on a babbage-preview branch. 

### GOVERNANCE

After [announcing the winners](https://drive.google.com/file/d/1s3jCE7pmoUujy3ASMia-UhFl2KLi_hnf/view) from Fund8, **Project Catalyst** is moving fast towards the start of Fund9. At the Catalyst Townhall, the team announced the launch of Fund9 on June 1st. Users are welcome to [register their interest here](https://bit.ly/3rCicSR). With $16M ada available for grants and ecosystem rewards, Project Catalyst is expecting over 1,000 proposals - building on Cardano has never been livelier.

In the meantime, the team are busy onboarding the hundreds of successful Fund8 projects. 

### STATISTICS TO DATE

![](https://lh6.googleusercontent.com/Oj5YpaqdtVeVokE7MVWLmCjKabZqtk_xePqWrDChDloeb7BIi3i74pbzKxryp_QUVkjIp8E2TN6SruMlK3haBjlnD-BDMBvLEOAMZfyHO9h6XGzEmzms4gdKKQRgK1cZ0DSVeFB0gIWXQIUhxg)

### 週刊開発レポート　2022年05月20日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームは6月のVasilハードフォークの準備を続けました。新しいノードバージョン、DB Syncの依存関係、ベンチマークに取り組みました。拡散パイプラインをマスターにマージし、テストとバグの修正作業を続けました。ログの改良を完了し、現在機能評価のためにDAppの小グループを招いて、テストネット限定リリースの準備を進めています。 

**ネットワーキング**チームは型付きプロトコルのリファクタリング作業を続け、最終コードレビューセッションを行い、関連する不具合を解消しました。世界各地の16のノードを実行する8台のマシンを確実に管理する、ノードデプロイ用ネットワーキングツールにも着手しました。その他、現在P2Pパブリックテストネットでおよそ70のSPOと協力しています。

### ウォレットとサービス

**Daedalus**チームはDaedalusモジュールバンドラーをWebpack 4からWebpack 5へ移行しました。Marloweパイオニアプログラム向けにDaedalus特別版を作成したほか、ハードウェアウォレットの機能に関する不具合を解消しました。

**Adrestia**チームは、予定されているハードフォークに向け、Adrestiaコンポーネントの準備を始めました。

cardano-js-sdk MVPを仕上げ、db-syncに構築した新しいシンプルなHTTP APIとともに本番環境に対応できるよう先へ進めました。

技術負債への取り組み、cardano-walletへマルチシグ機能と「ライト」モードを追加する作業は継続中です。

### スマートコントラクト

**Plutus**チームは、チェーンインデックスに新たな定義\\Plutus.ChainIndex.App (runMainWithLog)を追加しました。これにより、さまざまな関数を実行して起動ログを処理できるようになります。また、MakeKnownMビルトインを最適化しました。

**Marlowe**チームは、Marlowe Runのトランザクション手数料の概算と、エラーメッセージの期間と表示を改良しました。Sentryの統合をセットアップし、模擬チェーンのテストの不具合を修正しました。Marlowe Playgroundでは、Oracleプロトタイプが機能しないという不具合を修正し、メタデータのタイムパラメーターのチュートリアルとラベルを更新しました。 

### Basho( スケーリング)

**Hydra**チームはコンテステーションバリデーターとロジックへの取り組みを続け、Coordinated Head Protocol検証の監査と形式化の準備を始めました。Hydra APIを使用したバイナリー形式でトランザクションを受け入れる機能を提供し、来たるBabbage機能の評価をbabbage-previewブランチで始めました。 

### ガバナンス

**Project Catalyst** はFund8の[勝者発表](https://drive.google.com/file/d/1s3jCE7pmoUujy3ASMia-UhFl2KLi_hnf/view)を終えたあと、早速Fund9に向けて動いています。Catalyst Townhallでは、Fund9が6月1日に開始されることを発表しました。現在ユーザーの登録を[こちら](https://bit.ly/3rCicSR)で受け付けています。1600万米ドル相当のADAが交付金およびエコシステムへの報酬として用意されており、1,000を超える提案が期待される今、Cardanoでの構築はかつてないほど活発になっています。

数百のFund8プロジェクトのオンボーディングにも追われました。 

### 現時点の統計

![](https://lh6.googleusercontent.com/GrGRDi0YaBAp8mDbzdm0Ez-_LCxBZFVQjlKuNolCgGzkJI6D_MQL2u4T37ntxKKODFKUFG3xKH4fYOUZhLYddO7EumTUH-bM1I8gS-J6nhZX8lVrtoyuCzEMVe2JWcrWbQTihwuh_6Qtkk5Myg)
