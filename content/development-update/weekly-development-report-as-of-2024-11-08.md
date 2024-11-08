---
title: Weekly development report as of 2024-11-08
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5a439ef4-d6f4-4df4-9f83-98d7b73c30f2/
image_text: Weekly development report as of 2024-11-08
---

### CORE TECHNOLOGY

This week, the **core technology** teams released node [v.10.1.2](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.2) – an update to the v.10.1.1 release.

The **DB Sync** team focused on a pre-release of version 13.6.0.0 compatible with node v.10.1.0 and are in the process of testing before the mainnet release.

The **ledger** team focused on improving internal code quality. The main feature introduced was a new query that allows users to determine the default vote for a specific stake pool operator.

The **performance and tracing** team focused on benchmarking, development, and tracing improvements.

**Benchmarking**

The team conducted governance action and voting benchmarks on node `v.10.0` to assess the performance cost of voting in the Conway ledger era. Simulating 10,000 DReps voting on up to five governance actions simultaneously, they observed a slight but acceptable performance impact. Detailed [results are available here](https://updates.cardano.intersectmbo.org/reports/2024-10-performance-10.1.1).

They also benchmarked the `RIPEMD-160` function in PlutusV3, confirming no performance risks and consistent performance relative to other CPU-intensive operations.

**Development**

The team implemented the governance action workload using decentralized submission via `cardano-cli`, proving reliable and moderately scalable. Efforts are underway to reduce submission overhead and achieve linear performance scaling when increasing votes per transaction.

Work continues on implementing this workload using the centralized `tx-generator` submission service to enhance scalability.

**Tracing**

The new tracing system is now production-ready with the release of \`**cardano-tracer-0.3\`**. Final consistency checks on metrics naming are in progress to align with the legacy system, including addressing documentation and defining additional metrics.

Finally, the team is focused on providing user-friendly resources to facilitate community adoption.

### SCALING

The **Mithril** team worked on creating the new distribution pre-release [2445.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2445.0-pre). Additionally, they completed recording the aggregator metrics in the event store and implemented stable support for Cardano node v.10.1. The team also kept exploring solutions for [signer registration](https://github.com/input-output-hk/mithril/issues/2029) when multiple aggregators are running on a Mithril network.

Finally, they implemented a nightly workflow in the CI to check [backward compatibility](https://github.com/input-output-hk/mithril/issues/2027) with previous distributions and started implementing a new status route in the aggregator.

### VOLTAIRE

The release of Cardano node v.10.1.2 has brought changes to commands based on community feedback, particularly from stake pool operators. Functionally, this version mirrors node v.10.1.1, so users should refer to the release notes from [v.10.1.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.1) when utilizing either version.

Since  Friday, November 1, 2024: 

*   Unique delegators increased by 3,067 (13,835 -> 16,902)
    
*   Vote delegations increased by 3,306 (15,060 -> 18,366)
    
*   Delegate representative (DRep) votes increased by 25 (371 -> 396)
    
*   DRep registrations increased by 21 (603 -> 624)
    
*   DReps who have attached metadata increased by 92 (301 -> 393).
    

### CATALYST

This week in **Catalyst**, the community review stage is progressing well. Catalyst celebrated reaching over 1,000 completed projects during town hall 182, where some project teams shared insights about their journey from funding to completion. The deadline for submissions to the partner track is approaching this week, and new voter registration is ongoing until November 20. Meanwhile, the technical development of Catalyst Voices is advancing, with the team now focusing on minimum viable experience (MVE) 2. They are taking the community along on this journey to experience the UX/UI of the product as it evolves through different stages of the development lifecycle.

### EDUCATION

This week, the **education** team is continuing to plan events to support the [Cardano Tech Week](https://lu.ma/jcsgq39k) community event later this month and the constitutional convention in December. They are also finalizing plans for the next Cardano Days event in Santander, Spain, on November 23.

![](https://ucarecdn.com/4b92462a-7561-4265-b317-3166d8f6df5b/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームは、v.10.1.1リリースを更新したノード[v.10.1.2](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.2)をリリースしました。

**DB Sync**チームは、ノードv.10.1.0対応のバージョン13.6.0.0プレリリースに焦点を当て、メインネットへのリリース前にテストを実施しています。

**台帳**チームは内部コードの品質向上に注力しました。導入された主な機能は新しいクエリで、ユーザーが特定のステークプールオペレーターへのデフォルト投票を決定できるようにするものです。

**パフォーマンス&トレース**チームは、ベンチマーク、開発、トレーシングの改良に焦点を当てました。

**ベンチマーク**

Conway台帳期の投票のパフォーマンスコストを評価するために、ノードv.10.0でガバナンスアクションと投票のベンチマークを実施しました。10,000人のDRepが最大5つのガバナンスアクションに同時に投票する場合をシミュレートしたところ、許容可能な軽度の影響がパフォーマンスに見られました。詳しい[結果はこちら](https://updates.cardano.intersectmbo.org/reports/2024-10-performance-10.1.1)を参照してください。

PlutusV3でRIPEMD-160関数のベンチマークを行い、他のCPU負荷の高い操作と比較してパフォーマンスリスクがないこと、パフォーマンスが一貫していることを確認しました。

**開発**

信頼性と適度なスケーラビリティを誇るcardano-cliを介した分散型送信を使用してガバナンスアクションワークロードを実装しました。送信オーバーヘッドを削減し、トランザクションあたりの投票数を増やす際に線形パフォーマンススケーリングを実現する取り組みが進行中です。

スケーラビリティを強化するために、集中型のtx-generator送信サービスを使用してこのワークロードを実装する作業が続けられています。

**追跡**

**cardano-tracer-0.3**のリリースとともに、新しいトレースシステムのリリース準備が整いました。メトリクス名に関してレガシーシステムとの整合性の最終チェックが進行中ですが、これには、ドキュメントへの対応や追加メトリクスの定義も含まれます。

コミュニティへの普及を促進するために、使用性の高いリソースの提供に焦点を当てています。

### スケーリング

**Mithril**チームは、新しいディストリビューションプレリリース版[2445.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2445.0-pre)に取り組みました。イベントストアにアグリゲーターメトリクスを記録し、Cardanoノードv.10.1の安定したサポートを実装しました。複数のアグリゲーターがMithrilネットワーク上で実行されている場合の[署名者登録](https://github.com/input-output-hk/mithril/issues/2029)のソリューションの調査を続けました。

以前のディストリビューションとの[下位互換性](https://github.com/input-output-hk/mithril/issues/2027)をチェックするためにCIに夜間ワークフローを実装し、アグリゲーターで新しいステータスルートの実装を開始しました。

### VOLTAIRE

Cardano node v.10.1.2のリリースでは、コミュニティ、特にステークプールオペレーターからのフィードバックに基づいてコマンドに変更が加えられています。機能的には、このバージョンはノードv.10.1.1をミラーリングしているため、いずれのバージョンを利用する場合もv.10.1.1のリリースノートを参照してください。

2024年11月1日金曜日以来 

*   ユニークデリゲーターが3,067人増加（13,835->16,902）
    
*   議決権委任数が3,306人増加（15,060->18,366）
    
*   DRep投票数が25増加（371->396）
    
*   DRep登録数が21増加（603->624）
    
*   メタデータを添付したDRepが92増加（301->393）
    

### CATALYST

**Catalyst**では、コミュニティレビュー段階が順調に進んでいます。Catalystは、第182回タウンホールで完成プロジェクトが1,000件に達したことを祝い、プロジェクトチームが資金調達から完成までの道のりについての洞察を共有しました。今週はパートナートラックへの提出期限が迫っており、新しい有権者登録は11月20日まで受け付けられています。Catalyst Voicesの技術開発は進んでおり、現在MVE（実用最小限の体験）2に焦点が当てられています。本製品が開発ライフサイクルのさまざまな段階を経て進化するなかで、コミュニティには製品のUX/UIを体験してもらえるよう案内をしています。

### 教育

**教育**チームは、今月後半の[Cardano Tech Week](https://lu.ma/jcsgq39k)コミュニティイベントと12月の憲法制定会議をサポートするためのイベントの企画を続けています。11月23日にスペインのサンタンデールで開催される次回Cardano Daysの最終案をまとめています。
