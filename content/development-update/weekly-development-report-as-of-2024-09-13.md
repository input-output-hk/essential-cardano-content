---
title: Weekly development report as of 2024-09-13
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/5c0a79ab-4dcb-4bf0-b8be-ac3c048c9f69/
image_text: Weekly development report as of 2024-09-13
---

### CORE TECHNOLOGY

This week, the **ledger** team implemented a new Conway-related feature that disallows stake credentials from withdrawing rewards if they are backed by a key hash and not delegated to any DRep. This feature will become effective after the bootstrap phase. The team also worked on additional tests and fixed several minor bugs, including `GovInfoEvent` ledger event and ledger state deserialization bugs, which was necessary for the node v.9.1.1 release. The team also addressed technical debt by cleaning up unnecessary predicate failures and fixing flaky tests from Byron and Alonzo ledger eras.

The **performance and tracing** team released benchmarks for node v.9.1.1. They also created a local tool to replicate the observed increase in UTXO-HD RAM usage, established a new performance baseline named 'Age of Voltaire', and started testing the adjusted Nomad backend. Infrastructure improvements include removing the requirement for `Vault` and optimizing cluster setups. In the tracing area, the team integrated a new metrics naming schema and continued working on routing adjustments to internal monitoring servers along with eliminating some dependencies.

### SCALING

The **Mithril** team continued working on decentralizing the signature orchestration of the Mithril network. In this preliminary phase, they kept implementing a [buffer store for individual signatures](https://github.com/input-output-hk/mithril/issues/1900) that may arrive before being processed by an aggregator. They also worked on [refactoring the state machine](https://github.com/input-output-hk/mithril/issues/1922) of the signer and addressed panics occurring in both the signer and aggregator during rollbacks of Cardano transactions. Additionally, they modified the [pre-loading mechanism](https://github.com/input-output-hk/mithril/issues/1920) for importing Cardano transactions, ensuring it repeats indefinitely in the signer.

Finally, the team continued preparing the next distribution and investigated a breaking change introduced in a Hydra CI dependency.

### VOLTAIRE

During the Voltaire development phase, the Cardano blockchain is led and overseen by [Intersect MBO](http://intersectmbo.org) members (including Input | Output), which enables the whole community to shape Cardano's future through the governing board and committees.

You now have the opportunity to participate. Applications for committee and board seats are currently open and will close on September 27.

**_Please be aware that only full members (those with paid memberships) are eligible to stand for election and vote._**  
  
For inquiries regarding your membership status or any questions, please refer to Intersect's [knowledge base](https://docs.intersectmbo.org/intersect-overview/intersect-committees/intersect-elections-2024) or join the dedicated [Discord channel](https://discord.com/channels/1136727663583698984/1270677346743222337).

These resources can be accessed through your [member portal](https://members.intersectmbo.org/) or the following links:

*   [Application form for committee elections](https://mpc.intersectmbo.org/committee-election-application)
    
*   [Application form for board seat elections](https://mpc.intersectmbo.org/intersect-board-election).
    

The team is excited to announce that they have already received several applications, which can be accessed through the links below. They will be publishing new applications daily, as long as they are from verified paid members:

*   [Candidate bios for the committee elections](https://committees.docs.intersectmbo.org/v/intersect-elections-2024/committee-elections/candidates-for-committee-elections-2024)
    
*   [Candidate bios for the board seat elections](https://committees.docs.intersectmbo.org/v/intersect-elections-2024/board-elections/candidates-for-membership-board-seat-election).
    

If you or someone else can make a meaningful contribution, please consider applying for a seat or encouraging others to do so.

### CATALYST

This week in **Catalyst**, town hall 174 provided a preview of Fund13's categories and guardrails. Catalyst Japan is gearing up to showcase regional impacts alongside the IO tour. Onboarding for Fund12 winners is almost complete, and development of the Hermes and Catalyst Voices projects is ongoing.

### EDUCATION

This week, the **education** team is preparing content for the upcoming [Cardano Days event at the University of Wyoming](https://www.uwyo.edu/acct-fin/cbdi/stampede/) next week and the Cardano Days event in Santander, Spain. Stay tuned for more details on the dates and location of the Santander event! The team also worked on updates to the Mastering Cardano book and supported the [constitutional committee workshop in Mongolia](https://lu.ma/282924xd).

![](https://ucarecdn.com/de29f79a-c1d8-46f8-a96a-cbed89192daf/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは、キーハッシュによって裏付けられた、どのDRepにも委任されていないステーククレデンシャルを使って報酬を引き出すことを禁止する、Conway関連の新機能を実装しました。この機能はブートストラップフェーズの後に有効になります。ノードv.9.1.1リリースに必要であったGovInfoEventの台帳イベントと台帳ステータス非シリアル化のバグを含み、いくつかのマイナーなバグを修正しました。不必要な述語の失敗を一掃し、ByronやAlonzo台帳期のフレーキーテストを修正することで技術負債に対処しました。

**パフォーマンス＆トレース**チームはノードv.9.1.1のベンチマークをリリースしました。UTXO-HDのRAM使用量の増加を再現するためのローカルツールを作成し、Age of Voltaireと名付けた新しいパフォーマンスベースラインを確立し、調整したNomadバックエンドのテストを開始しました。インフラの改善には、Vault要件の削除やクラスター設定の最適化が含まれます。トレース領域では、新しいメトリクス命名スキーマを統合し、一部の依存関係を排除するとともに、内部監視サーバーへのルーティング調整への取り組みを続けました。

### スケーリング

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化への取り組みを続けました。この準備段階では、引き続きアグリゲーターで処理される前に到着する可能性のある[個々の署名用のバッファストア](https://github.com/input-output-hk/mithril/issues/1900)の実装作業を行いました。署名者の[ステートマシンのリファクタリング](https://github.com/input-output-hk/mithril/issues/1922)にも取り組み、Cardanoトランザクションのロールバック中に署名者とアグリゲーターの両方で発生するパニックに対処しました。Cardanoトランザクションをインポートするための[プリロードメカニズム](https://github.com/input-output-hk/mithril/issues/1920)を修正し、これが署名者で無期限に繰り返されるようにしました。

次のディストリビューションの準備を続け、Hydra CI依存関係に導入された最新の変更を調査しました。

### VOLTAIRE

Voltaire開発段階では、Cardanoブロックチェーンは[Intersect MBO](http://intersectmbo.org)メンバー（Input|Outputを含む）によって主導、監督され、コミュニティ全体が理事会や委員会を通じてCardanoの未来を形作ることができるようになります。

まさに今、参加する機会が開かれています。委員と理事の候補申請は現在受付中で、9月27日に締め切られます。  

**_候補資格、投票資格は正会員（有給会員）に限られていますのでご注意ください。_**  
  
会員資格に関する疑問は、Intersectの[ナレッジベース](https://docs.intersectmbo.org/intersect-overview/intersect-committees/intersect-elections-2024)を参照するか、専用の[Discordチャネル](https://discord.com/channels/1136727663583698984/1270677346743222337)に参加してください。

これらのリソースには、[メンバーポータル](https://members.intersectmbo.org/)または以下のリンクからアクセスできます。

*   [委員選挙の申請書](https://mpc.intersectmbo.org/committee-election-application)
    
*   [理事選挙の申請書](https://mpc.intersectmbo.org/intersect-board-election)
    

嬉しいことに、すでにいくつかの申請を受け取っています。以下のリンクからアクセスできます。有料メンバーとして検証済みの新候補者を毎日公開します。

*   [委員選挙の候補者経歴](https://committees.docs.intersectmbo.org/v/intersect-elections-2024/committee-elections/candidates-for-committee-elections-2024)
    
*   [理事選挙の候補者経歴](https://committees.docs.intersectmbo.org/v/intersect-elections-2024/board-elections/candidates-for-membership-board-seat-election)
    

自分でも別の人でも、有意義な貢献をすることができる場合は、立候補をするか、立候補を薦めてください。

### CATALYST

**Catalyst**では、タウンホール174でFund13のカテゴリーとガードレールのプレビューが提供されました。IOツアーと並行して、Catalyst Japanは現地の影響力を紹介する準備を進めています。Fund12を獲得したプロジェクトのオンボーディングはほぼ完了しており、HermesとCatalyst Voicesプロジェクトの開発は進行中です。

### 教育

**教育**チームは来週開催の[ワイオミング大学Cardano Daysイベント](https://www.uwyo.edu/acct-fin/cbdi/stampede/)とスペインのサンタンデールで開催されるCardano Daysイベントのコンテンツを準備しています。サンタンデールイベントの開催日と開催場所の詳細情報にご期待ください。書籍『Mastering Cardano』の更新に取り組み、[モンゴルで開催された憲法委員会ワークショップ](https://lu.ma/282924xd)をサポートしました。
