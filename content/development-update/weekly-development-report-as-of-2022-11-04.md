---
title: Weekly development report as of 2022-11-04
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/b9a46f34-3cf6-4fcf-9715-9a7a60f5b482/
image_text: Cardano updates November
---

### CORE TECHNOLOGY

During the past two weeks, the **consensus** team continued working on UTXO HD prototype testing. They completed work on era transitions and backing store tests, and are steadily advancing mempool tests. The team collaborated with the research and networking teams on the Genesis design. 

Finally, they kept investigating strategies for improving the speed of the ChainSync jumping prototype. 

The **ledger** team decided to use the [formal ledger repository](https://github.com/input-output-hk/formal-ledger-specifications) instead of the LaTeX specification for the next ledger era and added many basic infrastructure components to the model. Particularly, there is substantial support for the axiomatic set theory. While the next ledger era is still in the design phase, most of the team continued working on technical debt. They moved more code from the Shelley-specific modules into a ledger core module, finalized benchmarking around the problematic ledger transition (while improving ledger performance), enhanced the development environment, and cleaned up all the recent changes to the cost model. 

Finally, the team improved documentation, fixed some Flaky tests, and removed outdated code.

The **networking** team focused on issue resolution for the P2P single relay release. This included diagnosing, fixing, and writing bug tests in peer-state-actions, and diagnosing and preventing DNS misconfiguration. Finally, they focused on peer sharing development and discussed Eclipse evasion with the research team.

For more details from different teams, see this [technical development report](https://input-output-hk.github.io/cardano-updates/).

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on the upcoming Daedalus mainnet release, which includes UI and code base improvements.

Work is ongoing on **Lace** desktop development. The team migrated all UI components to use cardano-js-sdk only and started working on regression testing to achieve feature parity and singular user experience between desktop and extension applications. 

Finally, they worked on enabling hardware wallet support for the Lace desktop application.

The **Adrestia** Haskell team began introducing balance transaction functionality within the endpoints, preparing for its introduction as a standalone library. They also introduced the first implementation of multi-signature functionalities.

The Adrestia TypeScript team made refactoring to replace the CSL with the CML, continued improving Lace backend services, and are now engineering a wallet manager that will allow Lace users to seamlessly switch between wallets and networks.

### SMART CONTRACTS

This week, the **Plutus** team continued working on SECP implementation, the main exploratory parts of process increment, and Babbage support implementation for the transaction builder library. 

Finally, they progressed on the implementation of the stake pool delegation indexer for Marconi.

The **Marlowe** team continued working on Marlowe Run. They tested the ‘notify’ and ‘choice’ features, fixed script compilation and role-based contract creation problems, resolved the balancing issue with the ‘create’ feature, and wrote end-to-end tests for `marlowe add` and `marlowe rm` commands. 

Finally, they documented the achievements of the ‘Minimum Viable Marlowe’ and defined an initial list of features for the ACTUS labs prototype.

### BASHO (SCALING)

This week, the **Hydra** team made several UX improvements to the hydra-tui and hydra-node, and delivered the first version of persisted Head states by publishing release [v.0.8.0](https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0). They also met with researchers to discuss the HeadV1 specification and started working on the request for proposals (RFP) for an external audit of the Hydra Head protocol and implementation.

The **Mithril** team worked on finalizing the new continuous integration and delivery (CI/CD) pipelines and the automated deployment of environments for testing, pre-release, and release distributions. They also coordinated the migration of the pioneer SPO nodes to these new Mithril networks.

Finally, they continued implementing the automatic data storage upgrade of the signer and the aggregator nodes.

### GOVERNANCE

As Fund9 in **Project Catalyst** draws to a close, there’s a broad recognition that processes need to mature, be simplified, become more autonomous, remain inclusive, and continue demonstrating value to the broader Cardano ecosystem. As a result, some crucial changes and updates are on the horizon.

Slowing down allows Catalyst participants to look at the processes, reflect upon improvement opportunities, and iterate forward meaningfully. One of the significant reasons to have a cooldown is to allow for the collective clarity without rushing toward the next deadline and focusing on a set of outcomes instead.

Considering the above, Fund10 has no start date yet. Instead, Project Catalyst will take stock of all signals and experiences before moving on to the next funding cycle. Upcoming blogs will discuss changes and lay out future plans.

![](https://lh4.googleusercontent.com/NhbEeiVpqAhI4Cbb-dNyu5gJbg3idQgxQhwBmRbYDAeInDunWwZXcfG3Tgt5dm8qMBEaeMvmSfPhVJguaiZwtEFctEAEoc0jBdj4AxCvKCwHoYFWuubjCWh8DjUKHIxmwcAuhRsC9eDWsPCePJi-M2SrovlamHAHlV8KOs9I8oNI2ZXucd6uowNndotiSq1d)

### コアテクノロジー

この2週間、**コンセンサス**チームは、UTXO HDプロトタイプのテストに取り組んできました。開発期の遷移とバッキングストアのテストを終え、メモリープールのテストを着実に進めています。Genesisの設計で、研究チームおよびネットワーキングチームと協力しました。 

ChainSyncのジャンププロトタイプを高速化する戦略の調査も続けています。 

**台帳**チームは、次の台帳期にLaTeX仕様の代わりに[formal ledgerリポジトリ](https://github.com/input-output-hk/formal-ledger-specifications)を使用することにし、このモデルに多くの基本的なインフラコンポーネントを追加しました。とくに、公理的集合論に関するサポートは充実しています。次の台帳期はいまだ設計段階にあり、チームのほとんどが技術負債への取り組みを続けています。さらに多くのコードをShelley専用モジュールから台帳のコアモジュールに移動させ、問題のある台帳遷移に関するベンチマークを仕上げ（台帳パフォーマンスを向上させつつ）、開発環境を強化し、コストモデルに関する最近の変更をすべてクリーンアップしました。 

さらに、ドキュメントを改訂し、Flakyテストを修正し、古いコードを削除しました。

**ネットワーキング**チームはP2Pシングルリレーリリースの問題解決に焦点を当てました。これには、peer-state-actionsの診断、修正、バグテストの作成、および、DNSの設定ミスの診断と防止が含まれます。ピア共有の開発に注力し、研究チームとExlipse回避について話し合いました。

他チームサイドの詳細は[技術開発レポート](https://input-output-hk.github.io/cardano-updates/)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、予定されているDaedalusメインネットリリースに取り組みました。ここには、UIとコードベースの改良が含まれます。

**Lace**デスクトップの開発作業は進行中です。すべてのUIコンポーネントを移行してcardano-js-sdkのみを使うようにし、デスクトップアプリと拡張アプリ間で機能の一致と単一のユーザーエクスペリエンスを実現するため、リグレッションテストへの取り組みを始めました。 

Laceデスクトップアプリケーションでハードウェアウォレットのサポートの有効化に取り組みました。

**Adrestia** Haskellチームは、エンドポイント内に残高トランザクション機能の導入を開始し、スタンドアロンライブラリーとして導入する準備を行いました。マルチシグ機能の初回実装を導入しました。

Adrestia TypeScriptチームは、CSLをCMLに置き換えるためのリファクタリングを行い、Laceバックエンドサービスの改良を続け、現在、Laceユーザーがウォレットとネットワークをスムーズに切り替えられるようにするウォレットマネージャーのエンジニアリングを行っています。

### スマートコントラクト

**Plutus**チームは、SECPの実装、プロセス増分の主要調査部分、transaction builderライブラリーのBabbageサポート実装への取り組みを続けました。 

Marconi用ステークプール委任インデクサーの実装を進めました。

**Marlowe**チームは、引き続きMarlowe Runに取り組みました。「notify（通知）」機能と「choice（選択）」機能をテストし、スクリプトのコンパイルと役割ベースのコントラクト作成の問題を修正し、「create（作成）」機能の残高の問題を解消し、「marlowe add」コマンドと「marlowe rm」コマンドのエンドツーエンドテストを作成しました。 

「Minimum Viable Marlowe」の成果を文書化し、ACTUSラボプロトタイプの最初の機能リストを定義しました。

### Basho( スケーリング)

**Hydra**チームは、hydra-tuiとhydra-nodeのUXに改良を加え、 リリース[v.0.8.0](https://github.com/input-output-hk/hydra-poc/releases/tag/0.8.0)を公開することによって、永続化したHeadステータスの初回バージョンを配信しました。研究者と会ってHeadV1の使用を議論し、Hydra Headプロトコルと実装の外部監査用のRFP（提案リクエスト）への取り組みを開始しました。

**Mithril**チームは、パイプラインの新しい継続的統合とデリバリー（CI/CD）、および、テスト、プレリリース、リリース配布用の環境の自動デプロイに取り組みました。パイオニアSPOノードをこれらの新しいMithrilネットワーク移行する調整を行いました。

データストレージの署名者とアグリゲーターノードの自動アップグレードの実装を続けました。

### ガバナンス

Project CatalystのFund9が終了するにつれ、プロセスを成熟させ、簡素化し、より自律的にし、包括性を維持し、より広範なCardanoエコシステムに価値を示し続ける必要があるという認識が広まっています。その結果、いくつかの重要な変更と更新が予定されています。

スローダウンすることにより、Catalystの参加者たちはプロセスを確認し、改善の機会を熟考し、意味のあるイテレーションを行うことができるようになります。クールダウンを設ける重要な理由の1つは、次の締め切りに急いで向かうことなく、一連の結果に集中して、集団的明確性を得ることができることです。

これを考慮して、Fund10の開始日はまだ設定されていません。その代わり、Project Catalystは次の資金調達サイクルに移る前に、すべてのシグナルや経験を検討します。今後のブログで、変更についてと、将来の計画を説明します。
