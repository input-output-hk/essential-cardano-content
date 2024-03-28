---
title: Weekly development report as of 2024-03-29
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/aad665fd-b63f-4cbd-870d-9434d427201f/
image_text: Weekly development report as of 2024-03-29
---

### CORE TECHNOLOGY

This week, the **consensus** team has been working on the final integration of node v.8.10.0-pre release to bring the latest changes to SanchoNet for governance testing.

The **ledger** team enhanced test frameworks and data quality in `Newconstraints phase3` by adding constraints and new types like `Size`, `SizeSpec`, and `Sized`. The team [introduced](https://github.com/IntersectMBO/cardano-ledger/pull/4197) `unsafeMkProposals` for testing, [resolved issues for](https://github.com/IntersectMBO/cardano-ledger/pull/4200) `prop_GOV` functionality, and [improved the](https://github.com/IntersectMBO/cardano-ledger/pull/4216) `GOV` generator for improved signal generation  
  
The **performance and tracing** team conducted comprehensive release benchmarks for node v.8.9.1 and shared their results. For further information, refer to the [performance and tracing updates](https://updates.cardano.intersectmbo.org/2024-03-27-performance-and-tracing).

### WALLETS AND SERVICES

The **Lace** team is all set for the upcoming release of Lace v.1.9, which brings some exciting new features and improvements.

### SMART CONTRACTS

The **Plutus** team has [added a new guide](https://plutus.readthedocs.io/en/latest/howtos/asdata.html) to the documentation that explains how to use the `AsData` functionality to optimize scripts. They also merged a UPLC optimization pass that reduces the number of `forces` and `delays` in the script.

### SCALING

This week, the **Hydra** team restored test [compatibility with all networks](https://github.com/input-output-hk/hydra/pull/1355) and [reviewed and merged streaming plugins](https://github.com/input-output-hk/hydra/issues/1325). The team also [fixed tutorial instructions](https://docs.google.com/document/d/1FIa0HaN8nVuP7-WfXhOOmuYx3OTk5SO_y4LJlJ2nKFQ/edit#1367) for downloading the latest cardano-node, resolved the observed contesters bug, prepared a pull request for downstream clients to implement the new API format for transactions (this change will require a release with a breaking change), and recorded a [walkthrough video on how they run the Hydra project](https://www.youtube.com/watch?v=JGUeO7A6mMU).

The **Mithril** team released a new `Mithril distribution 2412.0`. This release includes several critical updates and enhancements, such as support for the Prometheus metrics endpoint in signer, deprecation of the `snapshot` command in the client CLI, full Pallas-based implementation of the chain observer, and support for Cardano node v.8.9.0.

The team continued implementing the certification of Cardano transactions in Mithril networks. They focused on scaling the signature and proof generation for `mainnet`, kept implementing a more versatile beaconing mechanism, reducing the latency of transaction signature, and continued investigating a bug in the block parser that prevents some Conway transactions from being signed. Additionally, they started working on a relay signer registration prototype as part of the peer-to-peer (P2P) network workstream. For more details on the progress of the P2P rollout, check out the segment in March’s [Essential Cardano 360](https://www.youtube.com/watch?v=kJIFjCZUfQ8).

Finally, the team completed the implementation of some community-requested features to verify the output folder structure made by the client, and kept investigating a source of flakiness in the CI end-to-end test.

### VOLTAIRE & SANCHONET

This week, the teams [disabled constitutional committee ratification](https://github.com/IntersectMBO/cardano-ledger/pull/4205) if the `ppCommitteeMinSize` falls below the minimum required. They [also introduced a new](https://github.com/IntersectMBO/cardano-ledger/pull/4169) `GovInfoEvent` along with event testing capabilities in `ImpTest`, which includes sets with expired and enacted governance actions and a set with all unclaimed governance action IDs.

The team also [removed the](https://github.com/IntersectMBO/cardano-ledger/pull/4208) `missingScriptsSymmetricDifference` [functionality](https://github.com/IntersectMBO/cardano-ledger/pull/4208) to improve efficiency and focus on forward compatibility, as this function had been associated with a specific predicate failure since the Babbage release.

### CATALYST

This week, **Project Catalyst** held its last informal get together session and will pause weekly town halls until the official launch of Fund12. The launch date is currently scheduled for April 26 and will be a hybrid - in person and online event. Location? Barcelona. Stay tuned for more details around the ecosystem for additional announcements. For now, you can check out the full suite of scheduled events [here](https://catalystwg.gitbook.io/docs/cwg-schedule). Planning to be in Barcelona in person? Register [here.](https://lu.ma/m5lq3loo) You can also follow [Rare Evo](https://twitter.com/RareEvo) and [Sustainable Ada](https://twitter.com/SustainableADA) for more updates when information becomes available.

In other news, Project Catalyst introduced the first iteration of a formal cancellation policy that will bring clarity on approaches for projects requiring change of scope or adjustments on their deliverables, potentially even sunsetting. You can review [the announcement](https://x.com/danny_cryptofay/status/1772996381952590093?s=20)  or jump right into the [documentation](https://docs.projectcatalyst.io/current-fund-basics/suspension-and-termination-of-catalyst-grants). This policy becomes effective on May 1, 2024. With now nearly [800 projects complete and about 1.3K funded in total](https://projectcatalyst.io/funds), this represents another opportunity to level Catalyst up. This implementation follows extensive feedback loops and addresses the community's desire to continue elevating accountability of past, present, and future outcomes. 

### EDUCATION

This week, the **education** team continued teaching the Cardano Developer course. They also worked on Lesson 18 of the Haskell Bootcamp course.  
  
  
![](https://ucarecdn.com/b9bcb61f-2034-4c23-a376-2785ad05897f/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、ガバナンステストのためにSanchoNetに最新の変更をもたらすノードv.8.10.0-preリリース統合の最終段階に取り組んでいます。

**台帳**チームは、[Newconstraintsフェーズ3](https://github.com/IntersectMBO/cardano-ledger/pull/4121)のテストフレームワークとデータ品質を、制約とSize、SizeSpec、Sizedなどの新しい型を追加することによって強化しました。テスト用に[unsafeMkProposalsを導入](https://github.com/IntersectMBO/cardano-ledger/pull/4197)し、[prop\_Gov機能の不具合を解消](https://github.com/IntersectMBO/cardano-ledger/pull/4200)し、信号生成を改善するために[Govジェネレーターを改良](https://github.com/IntersectMBO/cardano-ledger/pull/4216)しました。

**パフォーマンス＆トレーシング**チームは、ノードv.8.9.1の包括的なリリースベンチマークを実施し、その結果を発表しました。詳細は、[パフォーマンス＆トレーシングの更新情報](https://updates.cardano.intersectmbo.org/2024-03-27-performance-and-tracing)を参照してください。

### ウォレットとサービス

**Lace**チームは、次回Lace v.1.9リリースに向けて準備を進めています。

### スマートコントラクト

**Plutus**チームは、スクリプトを最適化するためにAsData機能の使用方法を説明する[新しいガイドをドキュメントに追加](https://plutus.readthedocs.io/en/latest/howtos/asdata.html)しました。スクリプト内のforceとdelayの数を減らすUPLC最適化パスをマージしました。

### スケーリング

**Hydra**チームは[すべてのネットワークとのテスト互換性](https://github.com/input-output-hk/hydra/pull/1355)を復元し、[ストリーミングプラグインをレビューしてマージ](https://github.com/input-output-hk/hydra/issues/1325)しました。最新のcardano-nodeをダウンロードするための[チュートリアルを修正](https://docs.google.com/document/d/1UrBWOUFvQhi9UzPraQQHl7kzHeJn3Hi7bj-dJqL2Pe0/edit#bookmark=id.4d34og8)し、検知されたコンテストのバグを解決し、トランザクション用の新しいAPIフォーマットを実装するための下流クライアント向けのプルリクエストを準備し（この変更には、ブレーク変更を伴うリリースが必要）、[hydraプロジェクトの運営方法を紹介する動画](https://www.youtube.com/watch?v=JGUeO7A6mMU)を撮影しました。 

**Mithril**チームはMithrilディストリビューション2412.0をリリースしました。このリリースには、署名者でのPrometheusメトリクスエンドポイントのサポート、クライアントCLIでのsnapshotコマンドの廃止、チェーンオブザーバーのPallasベースのフル実装、Cardanoノードv.8.9.0のサポートといった重要な更新と拡張が含まれています 。

MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。mainnetの署名と証明生成のスケーリングに焦点を当て、より汎用性の高いビーコンメカニズムの実装を続け、トランザクション署名のレイテンシーを削減し、Conwayトランザクションに署名できないというブロックパーサのバグの調査を続けました。ピアツーピア（P2P）ネットワークワークストリームの一環としての、リレー署名者登録のプロトタイプへの取り組みを開始しました。P2Pロールアウトの進捗状況の詳細は、3月の[Essential Cardano 360](https://www.youtube.com/watch?v=kJIFjCZUfQ8)のセグメントをご覧ください。

コミュニティからリクエストされた、クライアントが作成した出力フォルダー構造を検証するための機能の実装を完了し、CIエンドツーエンドテストでの脆弱性の原因調査を続けました。

### VOLTAIRE & SANCHONET

各チームは、ppCommitteeMinSizeが必要最小限を下回った場合、[憲法委員会の批准を無効](https://github.com/IntersectMBO/cardano-ledger/pull/4205)としました。新しいGovInfoEvent、さらにImpTestにイベントテスト機能を導入しました。これには、施行された期限切れのガバナンスアクションのセットと、すべての要求されていないガバナンスアクションIDのセットが含まれます。

効率を改善し、前方互換性に焦点を当てるために[missingScriptsSymmetricDifference機能を削除](https://github.com/IntersectMBO/cardano-ledger/pull/4208)しました。これは、この機能がBabbageリリース以来、特定の述語の失敗に関連していたためです。

### CATALYST

**Project Catalyst**は最後のインフォーマルな集まりを開催しました。これで毎週開催されていたタウンホールは、Fund12が正式に開始されるまで一旦休止されます。再開は現在4月26日に予定されており、対面とオンラインのハイブリッドイベントになります。場所はバルセロナです。エコシステムの更新情報をお見逃しなく。現在、予定されているイベントのスケジュールは[ここ](https://catalystwg.gitbook.io/docs/cwg-schedule)で確認できます。バルセロナに直接行く予定の方は、[ここ](https://lu.ma/m5lq3loo)で登録してください。[Rare Evo](https://twitter.com/RareEvo)と[Sustainable Ada](https://twitter.com/SustainableADA)をフォローして、最新情報を確認することもできます。

Project Catalystでは、公式キャンセルポリシーの初回バージョンを導入しました。これにより、中止の可能性も含むプロジェクトのスコープの変更や成果物の調整に対するアプローチを明確化します。[発表内容](https://x.com/danny_cryptofay/status/1772996381952590093?s=20)を確認、または、直接[ドキュメント](https://docs.projectcatalyst.io/current-fund-basics/suspension-and-termination-of-catalyst-grants)にジャンプできます。本方針は、2024年5月1日に発効します。現在、800プロジェクトが完了し、合計で約1300が資金提供を受けています。これはCatalystをレベルアップするさらなる機会を表しています。この実装は、広範なフィードバックループに従い、過去、現在、未来の結果に対する説明責任を高め続けるというコミュニティの願望に応えます。 

### 教育

**教育**チームは引き続きCardano開発者コースを提供しました。Haskell Bootcampコースのレッスン18にも取り組みました。
