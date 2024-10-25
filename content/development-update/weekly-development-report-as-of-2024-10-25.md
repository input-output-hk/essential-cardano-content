---
title: Weekly development report as of 2024-10-25
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/7654ea73-18b6-4dd3-bea5-3a4965617109/
image_text: Weekly development report as of 2024-10-25
---

### CORE TECHNOLOGY

This week, the **ledger** team finalized changes for the upcoming hard fork to protocol `version 10.0`. Key changes include ensuring the ability to unregister a reward account and withdraw funds in the same transaction, as well as fixing a bug to verify DRep existence for all stake credential delegations. The team continued testing Conway features and made progress on conformance tests.

This week, the **performance and tracing** team focused on benchmarking, development, and tracing improvements.

The team started benchmarking node version `10.0`, the latest pre-release that will fully support Chang #2 features. In development, they focused on calibrating governance action voting workloads within the `tx-generator` submission service. Due to the complexity of this task, they developed an interim solution using `nix` and `bash`, which leveraged `cardano-cli` to create and submit proposals and votes. This solution is currently undergoing testing and will soon be used for real-world voting benchmarks. Despite its limitations, a more flexible and adaptable workload definition is under development for future use.

In tracing, the team worked on components forwarding metrics and traces to `cardano-tracer`, involving peers defined by the `typed-protocols` package. As version `0.3` introduces breaking changes, they have started adapting downstream packages to align with the new API requirements, ensuring compatibility and continued reliability.

### SCALING

This week, the **Mithril** team released the new distribution [2442.0](https://github.com/input-output-hk/mithril/releases/tag/2442.0), which offers stable support for decentralized signature orchestration in both the signer and aggregator, along with the Cardano transaction client library, CLI, WASM, and the Pythagoras Mithril era. This release also includes bug fixes and performance improvements.

The team continued implementing usage metrics by adding a Prometheus endpoint and a Grafana dashboard for the aggregator, and completed preparations for the [Pythagoras Mithril era](https://github.com/input-output-hk/mithril/issues/1946). They also refactored the [node logs](https://github.com/input-output-hk/mithril/issues/1981) to enhance readability.

Additionally, they optimized the CI pipeline, deprecated `macOS 12` builders, and updated the decentralized message queue CIP pull request, which has now been assigned the CIP number [CIP-0137](https://github.com/input-output-hk/mithril/issues/1775).

### VOLTAIRE

In October 2024, Intersect held the first [full-scale elections](https://2024elections.docs.intersectmbo.org/overview/2024-october-election-results) for seven committees and the Intersect board. The election campaign was held as a series of community hubs worldwide. Two board members and 29 committee members were elected from a total of 140 candidates. There will be a second round of elections in April 2025.

Intersect will run general onboarding sessions for successful candidates from October 28 to November 8. These sessions will cover Intersect’s mission and structure and introduce the newly elected members to the committee support team. Each committee will also hold specific onboarding sessions to elect new chairs to facilitate a smooth handover and maintain continuity.

### CATALYST

The finalization period has now closed, and Fund13 is advancing into the community review stage, with registration for community reviewers concluded on October 20. Catalyst marks 180 weeks of town halls and is nearing 1,000 completed projects. The Catalyst Voices technical development team presented the first minimum viable experience during town hall 180, offering insights into design concepts, ecosystem principles, and a demo.

### EDUCATION

This week, members of the **education** team traveled to support the Cardano Summit event in Argentina. They also reflected on the outcomes of their team meetup last week. Work continues on the Mastering Cardano book.

![](https://ucarecdn.com/bab5fcf8-9873-47b4-971e-a082912cdf6f/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは近日予定されているプロトコルバージョン10.0へのハードフォークの変更を確定しました。主な変更点には、同じトランザクションでの報酬アカウントの登録解除と資金の出金機能の確保、すべてのステーククレデンシャル委任のためのDRepの存在検証に生じたバグの修正が挙げられます。Conway機能のテストを続け、適合性テストを進めました。

**パフォーマンス&トレース**チームは、ベンチマーク、開発、トレーシングの改良に焦点を当てました。

Chang #2の機能を完全にサポートする最新プレリリースであるノードバージョン10.0のベンチマークを開始しました。開発では、tx-generator送信サービス内のガバナンスアクション投票ワークロードの調整に焦点を当てました。このタスクの複雑さのため、nixとbashを使用した暫定的なソリューションを開発し、cardano-cliを利用して提案と投票を作成、提出しました。このソリューションは現在テスト中であり、近い将来実際の投票ベンチマークに使用される予定です。制限があるものの、現在将来使用するための、より柔軟で適応可能なワークロード定義を開発中です。

トレーシングでは、typed-protocolsパッケージで定義されたピアを含めて、メトリクスとトレースをcardano-tracerに転送するコンポーネントに取り組みました。バージョン0.3で画期的な変更が導入されたため、互換性と信頼性を確保するために新しいAPI要件に合わせてダウンストリームパッケージを適応させる作業を始めました。

### ウォレットとサービス

### スケーリング

**Mithril**チームは新しいディストリビューション[2442.0](https://github.com/input-output-hk/mithril/releases/tag/2442.0)をリリースしました。このディストリビューションは、Cardanoトランザクションクライアントライブラリー、CLI、WASM、Pythagoras Mithril期とともに、署名者とアグリゲーターの両方で分散型署名オーケストレーションを安定してサポートします。このリリースにはバグ修正とパフォーマンスの改良も含まれています。

アグリゲーター用にPrometheusエンドポイントとGrafanaダッシュボードを追加するなど使用状況メトリックスの実装を続け、[Pythagoras Mithril期](https://github.com/input-output-hk/mithril/issues/1946)の準備を完了しました。読みやすさを向上させるために[ノードログ](https://github.com/input-output-hk/mithril/issues/1981)をリファクタリングしました。

CIパイプラインの最適化、macOS 12ビルダーの廃止、分散型メッセージキューCIPプルリクエストの更新を行いました。このCIPは [CIP-0137](https://github.com/input-output-hk/mithril/issues/1775)とナンバリングされました。

### VOLTAIRE

2024年10月、Intersectは7つの委員会と理事会という[全面的な選挙](https://2024elections.docs.intersectmbo.org/overview/2024-october-election-results)を初開催しました。選挙運動は世界各地で一連のコミュニティハブとして実施されました。候補者140名の中から理事2名と委員29名が選出されました。第2回選挙は2025年4月に行われます。

Intersectは10月28日から11月8日まで、当選者を対象とした一般的なオンボーディングセッションを実施します。これらのセッションでは、Intersectのミッションと構造をカバーし、新しく選出されたメンバーを委員会サポートチームに紹介します。各委員会ごとにもオンボーディングセッションを行い、新しい議長を選出して、スムーズな引き継ぎと継続性の維持を促進します。

### CATALYST

最終案の決定期間は終了し、Fund13はコミュニティレビュー段階に進みました。コミュニティレビュー担当者の登録は10月20日に終了しました。Catalystは180週目のタウンホールを記録し、完成したプロジェクトは1,000件近くに上ります。Catalyst Voiceの技術開発チームは、第180回タウンホールで最初の最小実行可能な体験を提示し、設計コンセプト、エコシステム原則、デモに関する洞察を提供しました。

### 教育

**教育**チームのメンバーはアルゼンチンのCardanoサミットに出席しました。先週のチームミートアップの成果についても振り返りました。書籍『Mastering Cardano』の作業も続いています。
