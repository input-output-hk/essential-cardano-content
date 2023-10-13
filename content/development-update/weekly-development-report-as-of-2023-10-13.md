---
title: Weekly development report as of 2023-10-13
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/12c65a5c-05d1-4af0-b7a3-7930c4a29369/
image_text: Weekly development report as of 2023-10-13
---

### CORE TECHNOLOGY

This week, the **networking** team focused on bootstrap peers' functionality review and typed protocols performance investigation. 

The **performance and tracing** team continued the benchmarking of UTXO-HD, performed benchmarks for the new tracing system, and developed strategies for future benchmarks of Plutus v3 and UTXO-HD on-disk backing storage.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team released [Lace v.1.6](https://www.lace.io/blog/lace-1-6-release), which allows users to customize their multi-staking ratios to the percentage of preference and view all the selected stake pools at the top of the ‘Browse Pools’ tab. The release also adds tooltips to each of the column names for better clarity and simplifies the setup of the recovery phrase. 

Additionally, the team resolved some UI responsiveness issues along with issues related to moving the sliders in the staking portfolio overview, and worked on integrating the new cardano-js-sdk version with Lace. 

### SMART CONTRACTS

This week, the **Plutus tools** team continued working on the new Marconi API, cardano-node-emulator testing, and transition of Marconi into a Cardano node.

The **Plutus Core** team published a new [Quick start guide](https://plutus.readthedocs.io/en/latest/quick-start.html). This guide provides an overview for new users on how to get started with setting up developer environments for a simple smart contract, using the on-chain validator written in Plutus Tx. 

The **Marlowe** team created an [API](https://github.com/input-output-hk/marlowe-ts-sdk/pull/39) compatible with the Playground TS, implemented the [MarloweBulkSync](https://github.com/input-output-hk/marlowe-cardano/pull/724) server, and reviewed and updated [marlowe-payouts readme](https://github.com/input-output-hk/marlowe-payouts/pull/10/files) file in the repository. They also worked on the vesting DApp functionality and implemented a new [vesting contract](https://github.com/input-output-hk/marlowe-vesting/commit/d68da14#diff-57d44988f569db57d32d32bbdb34612d820994645b7fb21ff66b9ac356e73007) along with a ‘cancel’ contract flow. Additionally, the team made a first draft of the [contract lifecycle API](https://github.com/input-output-hk/marlowe-ts-sdk/pull/31).

Work is ongoing on Runner development. The team made style updates, worked on withdrawal role selection options, introduced configuration files to simplify deployment processes, resolved some issues, and finally, worked on testing. 

### BASHO (SCALING)

The **Hydra** team released version [0.13.0](https://github.com/input-output-hk/hydra/releases/tag/0.13.0), which includes fixes and extensions for state persistency and the ability to draft a commit transaction using inline datums. They also delivered the first version of the [network resilience layer](https://github.com/input-output-hk/hydra/pull/1074), significantly increasing head availability, and worked on providing support to several funded Catalyst projects that want to build on Hydra.

Finally, the team updated and published security policy and vulnerability disclosure policy reports on how to handle security vulnerabilities within Hydra.

This week, the **Mithril** team worked on the distribution of the [Mithril client as a library](https://github.com/input-output-hk/mithril/issues/1141) that will be distributed on [crates.io](//crates.io), the Rust dependencies repository. The team also worked on the [deterministic computation](https://github.com/input-output-hk/mithril/issues/1283) of the transaction history of an address from the immutable files and started [fixing a bottleneck](https://github.com/input-output-hk/mithril/issues/1187) in the aggregator that limits the ingestion of signatures.

Finally, they kept working on the activation of [Cloudflare](https://github.com/input-output-hk/mithril/issues/1230) on the infrastructure and fixed some bugs in the [Nix CI](https://github.com/input-output-hk/mithril/issues/1282).

### VOLTAIRE

If you haven’t explored the [GovTool](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd) on SanchoNet yet, learn more now. This tool enables ada holders to register as delegate representatives (DReps) and delegate their voting power to other DReps. Community ownership is vital for such governance tools, which will be hosted and maintained by Intersect, in collaboration with committees and working groups, pending community approval. Together with community builders, the aim is to establish the foundational layer for off-chain governance processes, facilitating on-chain voting via CIP-1694. Once established, the community can further enhance these tools independently or with support from Intersect's awards and grants.

In case you missed it, read this [blog post](https://www.intersectmbo.org/news/the-advancement-of-cip-1694-to-a-ballot) to find out about the progress made on CIP-1694 development. 

To get involved in shaping the future of Cardano governance, make sure to [join Intersect](http://intersectmbo.org/), visit the [SanchoNet](https://sancho.network) website, and join the conversations on [Discord](https://sancho.network/get-started/discord). 

### CATALYST

This week, **Project Catalyst** continues onboarding 192 projects funded from Fund10, with more than half officially ready to receive their first payment installments. Each project team is now involved in formulating their 'Statement of Milestones,' using the first iteration of the [Milestone Module](https://milestones.projectcatalyst.io/), which will serve as critical checkpoints throughout the lifecycle of their delivery, thus improving overall accountability and feedback loops. 

This Fund, Catalyst community participation has grown 10 times from an initial cohort of about five pioneers in Fund9 to a class of 40+ milestone reviewers in Fund10, championing community-led accountability. To learn more about the entire onboarding process, visit the [Catalyst GitBook](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding).

Did you know that Project Catalyst recently celebrated its third birthday? Learn more about it in [this latest blog post](https://projectcatalyst.io/blog/project-catalyst-driving-innovation-and-real-world-impact-on-cardano).

Finally, to stay updated with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel. 

### EDUCATION

This week, the **Education** team delivered the Plutus portion of the Haskell course with ABC. They also continued working on Marlowe education content.

![](https://ucarecdn.com/86a067cd-b474-4951-8beb-8591c336c93d/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**ネットワーキング**チームは、ブートストラップピア機能のレビューと型付きプロトコルのパフォーマンス調査に焦点を当てました。 

**パフォーマンス＆トレーシング**チームは、UTXO-HDのベンチマークを継続し、新しいトレースシステムのベンチマークを実行し、Plutus v3とUTXO-HDのディスク上バッキングストレージの将来のベンチマークのための戦略開発に取り組みました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは[Lace v.1.6](https://www.lace.io/blog/lace-1-6-release)をリリースしました。これにより、ユーザーはマルチステーキングの割合を好みのパーセンテージにカスタマイズでき、選択したすべてのステークプールは\[Browse Pools\]（プールを表示する）タブの上部に表示されます。このリリースでは、各カラム名にツールチップを追加してわかりやすさを向上させ、復元フレーズの設定を簡素化しました。 

ステーキングポートフォリオの概要画面でスライダーを動かす際の不具合とUIの応答性の問題を解決し、Laceに新しいcardano-js-sdkバージョンを統合する作業に取り組みました。 

### スマートコントラクト

**Plutusツール**チームは、引き続き新しいMarconi API、cardano-node-emulatorのテスト、MarconiのCardanoノードへの移行に取り組みました。

**Plutus Core**チームは新しい[クイックスタートガイド](https://plutus.readthedocs.io/en/latest/quick-start.html)を公開しました。このガイドでは、Plutus Txで記述されたオンチェーンバリデーターを使用して、シンプルなスマートコントラクト用の開発者環境の設定を開始する方法について、新規ユーザー向けに概要を説明しています。 

**Marlowe**チームは、Playground TS対応の[API](https://github.com/input-output-hk/marlowe-ts-sdk/pull/39)を作成し、[MarloweBulkSync](https://github.com/input-output-hk/marlowe-cardano/pull/724)サーバーを実装し、リポジトリ内の[marlowe-payouts readme](https://github.com/input-output-hk/marlowe-payouts/pull/10/files)ファイルをレビューおよび更新しました。DAppの権利確定（べスティング）機能にも取り組み、「キャンセル」コントラクトフローとともに新しい[べスティングコントラクト](https://github.com/input-output-hk/marlowe-vesting/commit/d68da14#diff-57d44988f569db57d32d32bbdb34612d820994645b7fb21ff66b9ac356e73007)を実装しました。[コントラクトライフサイクルAPI](https://github.com/input-output-hk/marlowe-ts-sdk/pull/31)の最初のドラフトを作成しました。

Runnerの開発作業は進行中です。スタイルを更新し、引き出しロールの選択オプションに取り組み、デプロイプロセスを簡素化するための設定ファイルを導入し、不具合を解消し、テストに取り組みました。 

### Basho( スケーリング)

**Hydra**チームはバージョン[0.13.0](https://github.com/input-output-hk/hydra/releases/tag/0.13.0)をリリースしました。このバージョンには、ステータスの永続性の修正と拡張、インラインデータムを使用したコミットトランザクションのドラフト作成機能が含まれています。ネットワークの回復性レイヤーの最初のバージョンを提供し、ヘッドの可用性を大幅に向上させ、Hydraに構築希望で資金提供を受けたCatalystプロジェクトへのサポートの提供にも取り組みました。

Hydra内でセキュリティの脆弱性を処理する方法に関するセキュリティポリシーと脆弱性開示ポリシーレポートを更新し、公開しました。

**Mithril**チームは、Rust依存関係のリポジトリである[crates.io](//crates.io)上で配布される[ライブラリーとしてMithrilクライアント](https://github.com/input-output-hk/mithril/issues/1141)の配布に取り組みました。不変ファイルからのアドレスのトランザクション履歴の[決定的計算](https://github.com/input-output-hk/mithril/issues/1283)に取り組み、署名の取り込みを制限するアグリゲーターの[ボトルネックの修正](https://github.com/input-output-hk/mithril/issues/1187)に着手しました。

引き続きインフラ上での[Cloudflare](https://github.com/input-output-hk/mithril/issues/1230)のアクティベーションに取り組み、[Nix CI](https://github.com/input-output-hk/mithril/issues/1282)のバグを修正しました。

### VOLTAIRE

SanchoNetで[GovTool](https://www.loom.com/share/d92ff7ee4fb140f48643019e3dcdd5a9?sid=b991f8a6-450f-430f-8806-bcd48a716ffd)をまだ試していない場合は、ぜひ詳細を確認してください。このツールを使用すると、ADA保有者はDRep（デリゲーター代表）として登録したり、議決権を他のDRepに委任したりすることができます。コミュニティのオーナーシップは、コミュニティの承認を待つ間、委員会やワーキンググループと協力して、Intersectがホストおよび維持するこのようなガバナンスツールにとって不可欠です。その目的は、コミュニティビルダー達と協力して、オフチェーンガバナンスプロセスの基盤となるレイヤーを確立し、CIP-1694によるオンチェーン投票を提供するために不可欠なをサポートすることです。設立後、コミュニティは独自に、またはIntersectの賞や助成金から支援を受けて、これらのツールをさらに強化することができます。

CIP-1694開発の進捗状況については、この[ブログ記事](https://www.intersectmbo.org/news/the-advancement-of-cip-1694-to-a-ballot)をご覧ください。 

Cardanoガバナンスの未来を形作るために、ぜひ[Intersectに参加](http://intersectmbo.org/)し、[SanchoNet](https://sancho.network)のサイトにアクセスし、[Discord](https://sancho.network/get-started/discord)の会話に参加してください。 

### CATALYST

**Project Catalyst**は、Fund10で資金提供を受けた192のプロジェクトのオンボーディングが続いており、半分以上が分割払いの初回分を受け取る準備が公式に整いました。各プロジェクトチームは、[マイルストンモジュール](https://milestones.projectcatalyst.io/)の最初のイテレーションを使用して、「マイルストンステートメント」の策定に取り組んでいます。マイルストンモジュールは、配信ライフサイクル全体を通じて重要なチェックポイントとして機能し、全体的な説明責任とフィードバックループを向上させます。 

Catalystコミュニティの参加者は、Fund9のパイオニア約5人からなる初期コホートから、Fund10の40人以上のマイルストンレビュアーへと10倍に増加し、コミュニティ主導の説明責任を支えています。オンボーディングプロセス全体の詳細は、[Catalyst GitBook](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding)を参照してください。

Project Catalystは最近3周年を迎えました。詳細は、[最新のブログ記事](https://projectcatalyst.io/blog/project-catalyst-driving-innovation-and-real-world-impact-on-cardano)をご覧ください。

[Catalyst Telegram](https://t.me/cardanocatalyst)案内チャネルに登録して、Project Catalystの最新情報を入手してください。 

### 教育

**教育**チームは、ABCと協力してHaskellコースのPlutusパートを提供しました。Marloweの教育コンテンツにも取り組みました。
