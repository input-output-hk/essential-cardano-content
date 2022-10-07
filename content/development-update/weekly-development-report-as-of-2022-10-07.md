---
title: Weekly development report as of 2022-10-07
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/fa61e901-fc4b-4784-8456-85f704458ced/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team worked on improving the performance of the ChainSync jumping logic, which is needed for Genesis. They also rewrote the mempool implementation in the UTXO HD prototype that solved the issues preventing the team from running system-level benchmarks. Finally, the team improved the implementation of the sequence of differences (a crucial piece of UTXO HD) and elaborated a test sign-off list for the UTXO HD feature.

The **ledger** team removed ledger dependencies and coordinated this with the cardano-base and Plutus repositories, which resolved cost model serialization issues and will further improve the process of cost model releases. They also improved the interface of the ‘Value’ multi-asset type and the ledger compilation process, and kept working on the codebase re-organization.

For more details, see this [technical weekly development report](https://input-output-hk.github.io/cardano-updates/).

With the Vasil upgrade now on mainnet, IOG development teams continue adding resources to the Cardano node tests GitHub repository, which provides creators and builders with the tools to continue building on Cardano. See the latest [documentation here](https://input-output-hk.github.io/cardano-node-tests/). 

WALLETS AND SERVICES 

This week, the **Daedalus** team worked on regression tests for the upcoming Daedalus v.5.1.0 release. They also fixed some issues in the ‘StoryBook’, which is a frontend workshop for building the wallet’s UI components and pages in isolation.

Work is ongoing on **Lace** desktop development. The team implemented refinements in the fee calculation, investigated how to get missing network protocol parameters from cardano-wallet, and made some improvements to multi-address usage. Finally, they improved cardano-wallet error handling for error submission and made progress on the migration of lace-browser’s end-to-end tests to lace-desktop. 

The **Adrestia** team focused on getting cardano-js-sdk production-ready, and also worked on post-Vasil improvements and bug-fixing. The team is also working on the implementation of multisig (shared wallets) and ‘light’ mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the SECP release process and started working on the main exploratory parts of the program increment (PI), also defining its release process. The team continued implementing Babbage support in Plutus tools, worked on the Marconi MVP by designing a multi-scenario node testing framework, and addressed some technical debt.

The **Marlowe** team tagged Marlowe validators as ‘release candidates’ and designed the specification of the CIP-30 client for Marlowe Runtime. They also designed Marlowe Runtime CLI architecture, fixed some validator issues, and created and submitted a loan contract script through marlowe-hydra-tui. 

Finally, the team executed two Marlowe contracts with Babbage capabilities on mainnet: a token drop, which is the first Plutus V2 validator to run on mainnet, and a token swap with the use of reference scripts.

### BASHO (SCALING)

This week, the **Hydra** team set up a four-party Hydra Head for testing purposes, which allowed improving the tangible user interface (TUI) to show logs better and inform about pending transitions. The team also checked the Hydra Head protocol implementation using quickcheck-dynamic simulations. Work is ongoing on the integration of test suites, and the team completed the implementation of the handling time. Finally, they extended [Hydra user documentation](https://hydra.family/head-protocol/docs/getting-started).

This week, the **Mithril** team worked on the implementation of a hybrid registration mode for the SPOs in the Mithril network (with or without certification). This will allow for a smooth transition in the test environment, which is run with pioneer SPOs. The team also continued designing the new version of the release process. 

Finally, they worked on improvements to the Mithril nodes’ CLI and documentation enhancements. 

### GOVERNANCE

This week, **Project Catalyst** enters its regular cooldown period between funds. During this period, the community has the chance to reflect on Fund9 outcomes, and look ahead to improvements, and the launch of Fund10. 

To date, Catalyst has grown from a fund size of $250k in Fund1 to $16m in Fund9, smashing all previous participation records combined. Across all funds hitherto, Catalyst has received and processed more than 4,5k proposals and cast over 1.5 million votes. The active Catalyst community currently stands at over 60k members across 91 countries. The success and explosive growth of Project Catalyst not only reaps rewards for Cardano and the broader community, but also reveals new challenges to address. 

As we move into Fund10, there is wide recognition that processes need to mature, simplify, become more autonomous, remain inclusive, and continue to demonstrate value to the broader Cardano ecosystem. As a result, there are some important changes and updates on the horizon. We’ll be sharing the details ahead of Fund10’s launch.  

![](https://lh3.googleusercontent.com/5t9cInuKpvGiSL10ZFL-Cm_fQctX7x2hRDIKwevE1p3nBlrT85lxsyzaxCt4FQieGzczEMSg3ShMueiiMSjBxmc__NJHpNyfYzuIjs4SBaOTuunpYhsRzd8r7UHazij454IUbXd-1JI2BqYwSu7KLRa7QHLuhr9nNJfoZX-ThxC1DkZ_5x9NehOvzuzE)

### コアテクノロジー

**コンセンサス**チームは、Genesisに必要なChainSyncジャンプロジックのパフォーマンスの改良に取り組みました。UTXO HDプロトタイプのメモリープール実装を書き換え、システムレベルのベンチマークの実行を妨げていた問題を解消しました。差異のシーケンスの実装（UTXO HDの重要パーツ）を改良し、UTXO HD機能のテストのサインオフリストを作成しました。

**台帳**チームは台帳の依存関係を削除し、これをcardano-baseおよびPlutusリポジトリと調整しました。これにより、コストモデルのシリアル化の問題が解消され、コストモデルのリリースプロセスがさらに改良されます。「Value」マルチアセット型のインターフェイスと台帳コンパイルプロセスを改良し、コードベースの再組織の取り組みを続けました。

詳細は[週刊技術開発レポート](https://input-output-hk.github.io/cardano-updates/)をご覧ください。

メインネットでVasilアップグレードが有効になり、IOG開発チームはCardanoノードテストGitHubリポジトリへリソースの追加を続けています。これにより、クリエーターやビルダーにCardanoで構築するために必要なツールが提供されます。最新の[ドキュメント](https://input-output-hk.github.io/cardano-node-tests/)をご覧ください。 

ウォレットとサービス 

**Daedalus**チームは、リリース予定のDaedalus v.5.1.0のリグレッションテストに取り組みました。ウォレットのUIコンポーネントとページを分離して構築するためのフロントエンドワークショップ、「StoryBook」の不具合を修正しました。

**Lace**デスクトップの開発作業は進行中です。手数料計算を改良し、不足しているネットワークプロトコルパラメーターをcardano-walletから取得する方法を調査し、マルチアドレス使用状況に改良を加えました。cardano-walletのエラー送信の処理を改善し、lace-browserのエンドツーエンドテストをlace-desktopへ移行する作業を進めました。 

**Adrestia**チームはcardano-js-sdkを本番環境にする作業に集中したほか、Vasil後の改良とバグの修正に取り組みました。cardano-walletへマルチシグ（ウォレットの共有）機能と「ライト」モード機能を追加する作業にも取り組んでいます。

### スマートコントラクト

**Plutus**チームは引き続きSECPリリースプロセスに取り組み、プログラム増分（PI）の主要な調査部分への取り組みを始め、そのリリースプロセスを定義しました。PlutusツールにBabbageサポートを実装する作業を続け、Marconi MVPのマルチシナリオノードテストのフレームワークを設計し、技術負債に取り組みました。

**Marlowe**チームは、Marloweバリデーターを「リリース候補版」としてタグ付けし、Marlowe Runtime用にCIP-30クライアントの仕様を設計しました。Marlowe Runtime CLIアーキテクチャを設計し、バリデーターの不具合を修正し、marlowe-hydra-tuiを使ってローンコントラクトスクリプトを作成し送信しました。 

2つのMarloweコントラクトをメインネットのBabbage機能で実行しました。メインネットで実行する最初のPlutus V2バリデーターであるトークンドロップと参照スクリプトを使用したトークンスワップです。

### Basho( スケーリング)

**Hydra**チームは、テスト用に4パーティHydra Headをセットアップしました。これにより、TUI（タンジブルユーザーインターフェイス）を改良してログ表示を向上させ、保留中の遷移について通知できるようになります。  Hydra Headプロトコル実装をquickcheck-dynamicシミュレーションを使って確認しました。テストスイートの統合作業は進行中です。また、処理時間の実装を完了しました。[Hydraユーザードキュメント](https://hydra.family/head-protocol/docs/getting-started)を拡張しました。

**Mithril**チームは、MithrilネットワークのSPO登録ハイブリッドモード（認証有りまたは無し）の実装に取り組みました。これにより、パイオニアSPOが実行しているテスト環境のスムーズな遷移が可能になります。リリースプロセスの新バージョンの設計も続けました。MithrilノードCLIとドキュメントの改良にも取り組みました。 

### ガバナンス

今週、**Project Catalyst**はファンド間の通常のクールダウン期に入ります。この期間は、コミュニティにとってFund9の結果を省察し、改善とFund10の立ち上げに臨む機会となります。 

Fund1で25万ドルだったCatalystの資金規模は、Fund9で1600万ドルに拡大し、過去の全参加記録の合計を凌駕しています。これまでのすべてのファンドで、Catalystは4500を超える提案を受け付け、処理し、150万を超える票が投じられました。活発なCatalystコミュニティは、現在91か国にわたり60000を超えるメンバーを有しています。Project Catalystの成功と爆発的な成長は、Cardanoとより広範なコミュニティに利益をもたらすだけでなく、取り組むべき新たな課題を明らかにします。 

Project CatalystのFund10に移行するにつれ、プロセスが成熟し、簡素化され、より自律的になり、包括的であり続け、より広範なCardanoエコシステムに価値を示し続ける必要があるという認識が広まっています。その結果、いくつかの重要な変更と更新が予定されています。詳細は、Fund10の立ち上げに先立ってお知らせします。
