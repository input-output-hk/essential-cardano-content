---
title: Weekly development report as of 2025-08-15
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/98d7ff05-a9c1-406c-850b-fa3eafd0efc1/
image_text: Weekly development report as of 2025-08-15
---

### CORE TECHNOLOGY

The **ledger** team began work on [CIP-112 (Observe script type)](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0112), referred to internally as ‘Required Guards’. They also started refactoring the stake pool state to support future features and apply targeted performance optimizations. In addition, the team dedicated time to improving documentation and [reorganizing parts of the test suite](https://github.com/IntersectMBO/cardano-ledger/pull/5216).

The **performance and tracing** team concluded a productive period, focusing on benchmarking, system upgrades, and collaboration. The team released benchmark results for [Cardano node v.10.5](https://updates.cardano.intersectmbo.org/reports/2025-07-performance-10.5.0), including LMDB (UTXOs on-disk) benchmarks. They also began developing new memory-constrained benchmark families to further evaluate UTXO-on-disk behavior under limited resource conditions.

On the infrastructure side, the team completed the migration of the benchmarking cluster. In tracing, they finalized the deprecation of the legacy system, merged TCP forwarding, and improved the trace system’s self-documentation to simplify usage and integration.

Finally, the team hosted the 2025 in-person performance and tracing meetup in Cardiff, Wales. The event featured in-depth discussions, forward-looking planning, and collaborative sessions. 

### SCALING

This week, the **Leios** team made significant progress on the Cardano Improvement Proposal (CIP) documentation, conducted extensive Plutus validation experiments, and resolved outstanding discrepancies between simulation implementations. The team successfully demonstrated Linear Leios performance under various Plutus workloads and completed comprehensive protocol parameter analysis for CIP inclusion.

### VOLTAIRE

The vote to ratify an ‘update committee’ governance action is live on-chain.  
The [current proposal](https://gov.tools/governance_actions/47a0e7a4f9383b1afc2192b23b41824d65ac978d7741aca61fc1fa16833d1111#0) seeks to ratify the replacement of the interim constitutional committee (ICC), originally composed of founding entities and elected community members, with seven new members elected by delegated representatives (DReps) earlier this year. These new members have been assigned staggered terms to ensure continuity. This vote is open to both DReps and stake pool operators (SPOs). The current committee does not participate.

It's up to DReps and SPOs to ratify this decision on behalf of the community.

**Calling All SPOs - time to shine!** 

While SPOs do not always vote on governance actions, this is one of the actions where their vote is critical. Voting participation from SPOs will help to legitimize the transition and make it inclusive and representative of the broader Cardano ecosystem.

If you're an SPO and are unsure how to vote, check out this SanchoNet [step-by-step guide](https://sancho.network/tutorials/vote-action).

### EDUCATION

This week, the **education** team is reflecting on the [Rare Evo](https://rareevo.io/) workshops and events. They are also gathering community feedback on the launch of the [Mastering Cardano ebook](https://book.io/book/mastering-cardano/) last week. 

Looking ahead, the team is excited to announce the next **Cardano Days event** – a two-day in-person educational event, scheduled to take place at the **University of Wyoming on September 26-27, 2025**. This event is a key component of the wider [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration is officially open on the [Luma page](https://lu.ma/g436so6c).

### ![](https://ucarecdn.com/e3856a24-df47-4475-bc52-13a276eb0890/-/preview/-/format/auto/-/quality/smart/)コアテクノロジー

**台帳**チームは社内で「Required Guards」と呼ばれる[CIP-112（スクリプトタイプ監視）](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0112)の作業を開始しました。ステークプールステータスのリファクタリングも始めました。これは、将来の機能をサポートし、対象となるパフォーマンス最適化を適用するためです。ドキュメントの改善と[テストスイートの一部の再編成](https://github.com/IntersectMBO/cardano-ledger/pull/5216)にも取り組みました。

**パフォーマンス＆トレース**チームは、ベンチマーク、システムのアップグレード、コラボレーションに焦点を当てた、生産性の高い週となりました。LMDB（ディスク上のUTXOS）ベンチマークを含む[Cardanoノードv.10.5](https://updates.cardano.intersectmbo.org/reports/2025-07-performance-10.5.0)のベンチマーク結果をリリースしました。限られたリソース条件下でのディスク上のUTXOの振る舞いを評価するために、メモリーに制約のある新しいベンチマークファミリーの開発も始めました。

インフラ面では、ベンチマーククラスターの移行を完了しました。トレーシングでは、従来のシステムの廃止を完了させ、TCPフォワーディングをマージし、追跡システム自身のドキュメントを改善することで、利用と統合を簡素化しました。

ウェールズのカーディフで対面の2025年パフォーマンス＆トレーシングミートアップを主催しました。このイベントでは、踏み込んだ議論、将来を見据えた計画策定、協力的なセッションが行われました。 

### スケーリング

**Leios**チームは、CIP（Cardano改善提案）の文書化を大幅に進め、広範なPlutus検証実験を実施し、シミュレーション実装間の顕著な不一致を解決しました。さまざまなPlutusワークロード下でLinear Leiosの性能を実演し、CIPに包めるための包括的なプロトコルパラメーター解析を完了しました。

### VOLTAIRE

憲法委員会（CC）の移行を承認する投票が現在オンラインで実施されています。  
この投票は、暫定委員会から最初のコミュニティ主導のCC選挙で選出された新委員会へと、正式に移行させるためのものです。

[暫定憲法委員会（ICC）を置き換える](https://gov.tools/governance_actions/47a0e7a4f9383b1afc2192b23b41824d65ac978d7741aca61fc1fa16833d1111#0)現在の提案は、もともと設立団体と選出されたコミュニティメンバーで構成されていたICCを、今年初めにDRep（委任代表者）によって選出された7人の新しいメンバーに置き換えることに対する承認を目したものです。新しいメンバーに割り当てられた任期は、継続性を確保するためにずらしてあります。投票権は、DRepとSPO（ステークプールオペレーター）の両方に与えられています。現行委員会は参加しません。

コミュニティを代表してこの決定を批准するか否かは、DRepとSPOにかかっています。

**SPOの皆さん - 腕の見せ所です！** 

SPOはすべてのガバナンスアクションに投票するわけではありませんが、これはSPOの投票が重要となるアクションの1つです。SPOの投票参加は、移行が合法的で包摂的で、より広範なCardanoエコシステムを代表するものであることを保証するのに役立ちます。

SPOで投票方法がわからない場合は、[SanchoNet](https://sancho.network/tutorials/vote-action)のステップバイステップガイドをチェックしてみてください。

### 教育

**教育**チームは[Rare EVO](https://rareevo.io/)ワークショップやイベントについて振り返っています。先週発売された『[Mastering Cardano](https://book.io/book/mastering-cardano/)』についてのコミュニティからのフィードバックも収集しています。 

2日間にわたって行われる対面イベント**Cardano Daysイベント**に関しては、次回は**2025年9月26日、27日にワイオミング大学**で開催されます。これは、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)の主要イベントです。登録は[Lumaページ](https://lu.ma/g436so6c)で公式に受付中です。
