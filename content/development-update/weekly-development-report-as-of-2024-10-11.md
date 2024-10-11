---
title: Weekly development report as of 2024-10-11
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/26e8e0bd-8efb-45fe-b521-ee2fc4a20c43/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **DB Sync** team addressed issues from the latest release, including [off-chain data fixes](https://github.com/IntersectMBO/cardano-db-sync/pull/1860), incorrect `pool-stat` [fields](https://github.com/IntersectMBO/cardano-db-sync/pull/1874), and [invalidated votes](https://github.com/IntersectMBO/cardano-ledger/pull/4661). They also added a [new feature](https://github.com/IntersectMBO/cardano-db-sync/pull/1820) that optionally creates a separate `address` table, separating it from the `tx_out` table. Finally, they collaborated with the ledger team on [memory improvements](https://github.com/IntersectMBO/cardano-ledger/pull/4632) and ledger events for DB Sync.

The **performance and tracing** team worked on new GHC9 benchmarks for node v.9.2 and governance action advancements. They also launched cardano-tracer-0.3, with ongoing metrics alignment, and completed the automation setup and implementation for the beacon, which is now ready for testing. See this [update](https://updates.cardano.intersectmbo.org/2024-10-07-performance-and-tracing#low-level-overview) for more details.

### SCALING

This week, the **Mithril** team continued working on decentralizing the signature orchestration of the Mithril network. They completed the implementation of the autonomous computation of the messages to be signed by the signer and worked on adapting the way some signing configuration is broadcast to the signers. The team also kept working on preparing for the new Pythagoras Mithril era.

Finally, they started refactoring the Prometheus metrics in the signer, fixed some minor bugs, implemented some optimizations on the node logs and the aggregator REST API, and made the Cardano transaction client stable.

### VOLTAIRE

Elections for Intersect committee members and board seats are in full swing, with voting closing on October 20.

Intersect has also partnered with enterprise member Bitergia to enhance open-source insights.

Development contributions to Cardano core by organizations other than Input | Output have increased by 179% – from 16.45% in 2023 to 45.97% in 2024.

Finally, planning is underway for the Chang #2 hard fork that will make Cardano fully compliant with [CIP-1694](https://cips.cardano.org/cip/CIP-1694) on-chain governance features.

### CATALYST

This week in **Project Catalyst**, [town hall](https://www.youtube.com/live/32WXRlfCuZk?si=iw2sO-SGEte5C69l) 178 premiered. Fund13 proposal submissions are now closed, and the finalization window closure is set for October 16. Community review registrations are open until October 20, and if you’re interested in registering, fill out the form on [IdeaScale](https://cardano.ideascale.com/c/landing). 

Additionally, alternative voting schemes with new crypto protocols by IO Research, Photrek, and the Catalyst team, funded in Fund11, reached the third milestone and were showcased at the recent town hall meeting. Work is ongoing on the technical development of Catalyst Voices wallet integration, as the team prepares for proof of achievement, and the delivery of the third milestone for Hermes essential modules. 

### EDUCATION

This week, the **education** team is preparing for their upcoming team meeting and the Cardano Summit in Argentina. They are also involved in planning for the remainder of the year, including education events to support the Cardano constitution event in December.

![](https://ucarecdn.com/a32e907a-c4c3-4718-a483-00543685a4da/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**DB Sync**チームは、[オフチェーンデータの修正](https://github.com/IntersectMBO/cardano-db-sync/pull/1860)、誤った[pool-statフィールド](https://github.com/IntersectMBO/cardano-db-sync/pull/1874)、[無効票](https://github.com/IntersectMBO/cardano-ledger/pull/4661)など、最新リリースで生じた問題に対処しました。オプションでaddressテーブルをtx\_outテーブルから分離して新規作成する[新機能](https://github.com/IntersectMBO/cardano-db-sync/pull/1820)を追加しました。DB Syncの[メモリー改善](https://github.com/IntersectMBO/cardano-ledger/pull/4632)と台帳イベントについて、台帳チームと協力しました。

**パフォーマンス＆トレーシング**チームは、ノードv.9.2の新しいGHC9ベンチマークとガバナンスアクションに取り組みました。継続的なメトリクス調整を伴うCardano-tracer-0.3を立ち上げ、ビーコンの自動化のセットアップと実装を完了し、テストの準備を整えました。詳細は、[この更新情報](https://updates.cardano.intersectmbo.org/2024-10-07-performance-and-tracing#low-level-overview)を参照してください。

### スケーリング

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化への取り組みを続けました。署名者が署名するメッセージの自律計算の実装を完了し、署名者に一部の署名設定をブロードキャストする方法の適応に取り組みました。新しいPythagoras Mithril期に向けての準備を続けました。

署名者のPrometheusメトリクスのリファクタリングを開始し、軽微なバグを修正し、ノードログとアグリゲータREST APIに最適化を実装し、Cardanoトランザクションクライアントを安定化させました。

### VOLTAIRE

Intersectの委員と理事の選挙は実施中で、投票は10月20日に締め切られます。

Intersectはまた、オープンソースのインサイトを強化するために、エンタープライズメンバーであるBitergiaと提携しました。

Input | Output以外の組織によるCardanoコアへの開発貢献は、2023年の16.45%から2024年には45.97%へと179%増加しました。

CardanoをCIP-1694オンチェーンガバナンス機能に完全に準拠させるChang #2ハードフォークの計画が進行中です。

### CATALYST

今週の**Project Catalyst**では、[タウンホール](https://www.youtube.com/live/32WXRlfCuZk?si=iw2sO-SGEte5C69l)178が開催されました。Fund13提案書の提出は締め切られ、最終案の提出締切は10月16日に設定されています。コミュニティレビューの登録は10月20日まで受け付けています。登録に興味がある場合は、[IdeaScale](https://cardano.ideascale.com/c/landing)のフォームに記入してください。 

Fund11で資金提供を受けたIO Research、Photrek、Catalystチームによる新しい暗号プロトコルを備えた代替投票スキームは、3番目のマイルストンに達し、最近のタウンホールミーティングで紹介されました。現在Catalyst Voicesウォレット統合の技術開発に取り組んでおり、達成証明とHermes必須モジュール第3マイルストンの提出準備を進めています。 

### 教育

**教育**チームは、予定されているチームミーティングとアルゼンチンでのCardanoサミットに向けて準備を進めています。12月のCardano憲法イベントを支援する教育イベントを含む、年末の計画にも取り組んでいます。
