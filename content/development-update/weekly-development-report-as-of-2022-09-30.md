---
title: Weekly development report as of 2022-09-30
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/97d83a7d-8a04-49bc-970f-dac8325f0202/
image_text: ""
---

### CORE TECHNOLOGY

Following the Vasil upgrade triggered on September 22, the new Vasil capabilities became available on the Cardano mainnet on September 27. Developers can now use the Plutus V2 cost model, reference inputs, inline datums, and reference scripts, which boost DApp development and performance in terms of transaction size reduction, throughput, and cost efficiency. 

The **networking** team also worked on the Ouroboros network improvements. They finalized work on the high- and low-level peer sharing design, continued working on the Eclipse evasion design, and fixed some issues with simulations and diffusion testing. Finally, work is ongoing on IO-Sim and typed protocols enhancements. 

Cardano turned 5 on September 27, [read this post](https://iohk.io/en/blog/posts/2022/09/27/cardano-5-years-on/) to recall some of the key achievements and milestones that have defined the blockchain's evolution.

### WALLETS AND SERVICES 

This week, the **Daedalus** team continued testing trezor-connect v.9 and the upcoming ledger-js v.5.1.0 compatibility. 

Work is ongoing on **Lace** desktop development. The team worked on the refactoring of the existing code structure to simplify code sharing between applications, updated the ‘FullNodeObservableWallet’, and fixed some issues on the ‘Submit’ screen to bundle multiple transactions to be sent at once. Finally, they added a ‘Storybook’ feature to the desktop application. 

The **Adrestia** team kept working to get cardano-js-sdk production-ready, and are continuing with the implementation of multisig (shared wallets) and ‘light’ mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the upcoming SECP release process and on the main exploratory parts of the program increment. They also made progress implementing Babbage support for Plutus tools, worked on the Marconi MVP, and progressed on the design of a multi-scenario node testing framework. Finally, they worked on technical debt and open-source processes.

The **Marlowe** team reviewed and tested Marlowe semantics in PS, Haskell, and Isabelle and added more test cases after the code review. They also worked on semantics maintenance and reviewed & improved the validator code, creating a top-level construct for Marlowe Extended in Haskell, and adding a payment-type single-asset. The team designed a specification for Marlowe transaction creation in Marlowe Run and implemented a ‘TransactionConstraints’ module. Finally, they synced Marlowe specification with semantics and validator documentation. 

### BASHO (SCALING)

This week, the **Hydra** team worked on creating a persistent DApp-hosting environment running in a Hydra Head operated by the team. This led to several bug fixes, documentation and instruction improvements, and yielded example configurations.

This week, the **Mithril** team continued working on the certification of the SPOs registering in the Mithril network and on the new version of the release process. They kept monitoring the current Mithril test environment (run with pioneer SPOs), and also fixed some locks occurring on the Aggregator database following the migration of the internal stores.

References to [Hydra](https://docs.cardano.org/development-guidelines/scalability-solutions/hydra) and [Mithril](https://docs.cardano.org/development-guidelines/scalability-solutions/mithril) developer resources are now included on Cardano Docs.

### GOVERNANCE

This week, **Project Catalyst** published the [final results](https://bit.ly/Fund9_Results) for Fund9. The community has spoken! There were 216 successful proposals that will receive funds to build and develop on Cardano using Cardano Treasury funds. Congratulations to all. With Fund9 wrapping up, we look ahead to Fund10, launching on November 2.  
  
In Fund10, there will be ₳16m available for grants and ecosystem rewards, with 10 challenges ready to address from November 2. You can get an early view of the 10 challenges by signing up to the Catalyst [Telegram channel](https://t.me/cardanocatalyst) and joining the weekly [Town Halls](https://bit.ly/3rCicSR) (every Wednesday at 17:00 UTC). More details to follow as we count down to Fund10.  
  
Did you know? At every stage of Project Catalyst, the community is in control. From addressing the community set challenges by submitting proposals, to reviewing and assessing the quality of those proposals, to voting on what proposals should get funding. It’s an equitable mechanism to utilize the Cardano Treasury in a self-determining cycle, and one-of-a-kind across blockchain.   

![](https://lh5.googleusercontent.com/Zf-Mxg-GoH-AEnWVqVd3SpQesh98cdFI92PMliGw-gcorPPGSMihWdoUvAIC9sfEv29yaPkeDWOE8N0pV5Jb710ZqyXih_yt7-R2qeJC-4Oa2iMHoj7DEFgPk6X11YwEjKoMylBzk-msllZDkOX8PBWAvD1vxmyB0Giadx9Uz_Wg5sto1ZvPdzJFuB9N)

### コアテクノロジー

Vasilアップグレードが9月22日にトリガーされたのに続き、Vasilの新機能は9月27日からCardanoメインネットで利用可能になりました。開発者は、Plutus V2コストモデル、参照インプット、インラインデータム、参照スクリプトを使うことができるようになり、これらの新機能によって、DApp開発が促進され、トランザクションサイズの削減、スループット、コスト効率の面からパフォーマンスが向上します。 

**ネットワーキング**チームは、Ouroborosネットワークの改良にも取り組みました。ハイレベル、ローレベルのピア共有設計を仕上げ、Exlipse回避の設計を続け、シミュレーションと拡散テストの不具合を修正しました。IO-Sim、型付きプロトコルの改良作業は進行中です。 

Cardanoは9月27日で5周年を迎えました。[このブログ記事は](https://iohk.io/jp/blog/posts/2022/09/27/cardano-5-years-on/)、ブロックチェーンの進化を定義した主要な成果とマイルストンを振り返っています。

### ウォレットとサービス 

**Daedalus**チームは、引き続きtrezor-connect v.9と、予定されているledger-js v.5.1.0の互換性テストを実施しました。 

**Lace**デスクトップの開発作業は進行中です。既存のコード構造をリファクタリングして、アプリケーション間のコード共有を簡素化し、FullNodeObservableWalletを更新し、「送信」画面の問題を修正して複数のトランザクションの一括送信を可能にしました。デスクトップアプリケーションに「Storybook」機能を追加しました。 

**Adrestia**チームは、cardano-js-sdkを本番環境にするための作業に取り組んだほか、cardano-walletのマルチシグ（ウォレット共有）と「ライト」モード機能の実装作業を続けました。

### スマートコントラクト

Plutusチームは今後のSECPリリースプロセスと、プログラム増分の主要な調査部分への取り組みを続けました。PlutusツールのBabbageサポート実装作業を進め、Marconi MVPに取り組み、マルチシナリオノードのテストフレームワークの設計を進めました。技術負債とオープンソースプロセスにも取り組みました。

**Marlowe**チームは、PS、Haskell、IsabelleのMarloweセマンティクスをレビュー、テストし、コードレビュー後にテストケースを追加しました。セマンティクスのメンテナンスに取り組み、検証コードのレビューと改良を行い、HaskellでMarlowe Extendedの最上位構造を作成し、支払いタイプの単一資産を追加しました。Marlowe RunのMarloweトランザクション作成用仕様を設計し、TransactionConstraintsモジュールを実装しました。Marlowe仕様をセマンティクスおよびバリデータードキュメントと同期しました。 

### Basho( スケーリング)

**Hydra**は、チームが運営するHydra Headで実行される、永続的なDAppホスト環境の作成に取り組みました。この結果、バグの修正、ドキュメントと説明書の改良を行い、設定例が得られました。

**Mithril**チームは、引き続きMithrilネットワークと新しいリリースプロセスバージョンで、SPOの登録認証に取り組みました。現行のMithrilテスト環境（SPOパイオニアが実行）の監視を続け、内部ストアの移行に続いてAggregatorデータベースで生じたロックを修正しました。

Cardano Docsに[Hydra](https://docs.cardano.org/development-guidelines/scalability-solutions/hydra)と[Mithril](https://docs.cardano.org/development-guidelines/scalability-solutions/mithril)の開発者用リソースが追加されました。

### ガバナンス

**Project Catalyst**はFund9の[最終結果](https://bit.ly/Fund9_Results)を公開しました。コミュニティの意思により選ばれた216の提案がCardano Treasuryファンドから資金を受け、Cardanoで構築および開発を行います。皆さんおめでとうございます。Fund9の終了に伴い、関心は11月2日に開始されるFund10に向けられています。  
  
Fund10では、1600万ADAが資金とエコシステムの報酬に充てられ、11月2日から取り組むチャレンジは10題用意されています。10のチャレンジをいち早く知りたい場合は、Catalyst [Telegramチャネル](https://t.me/cardanocatalyst)に登録して、毎週の[Town Halls](https://bit.ly/3rCicSR)（日本時間木曜午前4時）に参加してください。詳細はFund10が近づくにつれ公開されます。  
  
Project Catalystのすべての段階は、コミュニティが設定したチャレンジに提案を提出することによって対処することから、こうした提案のクオリティを確認し査定することや、どの提案が資金調達を受けるか投票することまで、コミュニティが管理しています。これは、自己決定サイクルでCardano Treasuryを活用する、ブロックチェーンの中でも他に類を見ない、公平なメカニズムです。
