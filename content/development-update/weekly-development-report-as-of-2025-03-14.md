---
title: Weekly development report as of 2025-03-14
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/dec006d5-ddf8-478d-b691-845e37fcdad7/
image_text: Weekly development report as of 2025-03-14
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to grow steadily. The number of delegated wallets has increased to 1.327 million, reflecting ongoing participation in staking. The total native tokens issued now stands at 10.71 million, with 210,370 token policies.

Smart contract adoption is progressing, with 129,108 Plutus scripts, reflecting a 1.20% increase since last week, while Aiken scripts have reached 5,504. On-chain activity remains stable, with 107.52 million transactions to date. Governance engagement has also expanded, with 1,205 DReps, including 917 active DReps, showing a 1.69% increase in decentralized representation since last week.

In other news:

*   Hoskinson Family Office has invested $1.5 million in [W3i Software, Inc.](https://x.com/USDMOfficial/status/1899816451311079720), the development company behind USDM.
    
*   Cardano has been named Blockchain [Project of the Year](https://x.com/Cardano_CF/status/1899847233446547732) at Crypto Expo EU.
    
*   [Sebastien Guillemot](https://x.com/SebastienGllmt/status/1898226507874697499), co-founder of Paima Studios, introduced Starstream – a new zkVM designed to reimagine UTXO smart contracts.
    

### CORE TECHNOLOGY

This week, the **performance and tracing** team introduced a new benchmark epoch timeline using `db-sync` and started storing raw benchmark data by default in the database storage layer, enabling faster queries. Infrastructure improvements include merging workbench playground profiles to streamline benchmark calibration. Following community feedback, new tracing features now include a direct Prometheus backend and simplified system dependencies. Additionally, the team participated in the first episode of the [Cardano Dev Pulse](https://www.youtube.com/watch?v=93elW8Ro8cI) podcast.

The **ledger** team continued reducing technical debt by restructuring how stake is computed, removing `Ptr` from stake distribution calculations in the Conway era, and making various minor serialization fixes and failure-reporting improvements. The team also added missing tests for block serialization roundtripping and [CDDL conformance](https://github.com/IntersectMBO/cardano-ledger/pull/4910), which revealed and resolved a bug in the Babbage CDDL specification.

### WALLETS AND SERVICES

[Wanchain Bridge](https://bridge.wanchain.org/AssetBridge) has [announced support](https://x.com/wanchain_org/status/1899414999791030334?s=46&t=KH7Ar_LX82ElBgTR404n8g) for Lace. This integration broadens Lace’s interoperability, helping Cardano users access Wanchain’s cross-chain capabilities for a more connected and versatile blockchain experience.

### SCALING

This week, the **Mithril** team continued [working on a prototype 'slave'](https://github.com/input-output-hk/mithril/issues/2334) mode of the aggregator to support signer registration across multiple aggregators. They also focused on implementing incremental certification of the Cardano database, emphasizing feature stabilization, production readiness, testing, and optimization. Additionally, [they worked on signing ancillary files](https://github.com/input-output-hk/mithril/issues/2362) in the Cardano database snapshots with an IOG key.

Finally, the team [fixed failing builds in the Hydra CI](https://github.com/input-output-hk/mithril/issues/2295) and kept working on supporting the upcoming Cardano node v.10.2.

This week in **Leios** development, the team focused on simulation analysis, formal methods, and documentation updates. Key accomplishments include in-depth analysis of simulations at tag `leios-2025w10`, advancements in formal methods through a working trace verifier, and the development of technical reports. For more details, see the latest [Leios updates](https://leios.cardano-scaling.org/news).

### VOLTAIRE 

As part of the continuous improvement of Voltaire processes, the voting and budgeting processes for Cardano have been reviewed and updated. Intersect MBO continues to facilitate elections of committee members with a new [voting page](https://members.intersectmbo.org/dashboard/voting) and help budgeting with [revised budgetary procedures](https://intersectmbo.org/news/intersect-development-update-52-march-7th) that enhance the role of DReps.

[Committee elections](https://x.com/IntersectMBO/status/1899505627530960967) will take place in April, with candidate applications opening on March 24. For more information, see this [elections blog post](https://intersectmbo.org/news/intersect-committee-elections-april-2025) from Intersect.

### CATALYST

The Cardano Foundation hosted an X space on Catalyst-funded Cardano Accelerators this week. Technical development is ongoing, with more X spaces planned for community engagement next week and additional _Under The Hood_ episodes coming soon.

### EDUCATION

This week, the **education** team is finalizing the updates and enhancements to the Cardano developer course. They are also preparing for a virtual presentation on Cardano for the Doctoral Consortium at Universidad Latinoamericana y del Caribe later this week. Additionally, they are organizing a Cardano Days event at [Florida International University](https://www.fiu.edu/) on March 31. Stay tuned for registration details.  
  
![](https://ucarecdn.com/c5ca7916-41a6-49fe-a7a8-2ca6fcf462d9/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは着実に成長を続けています。委任済みウォレット数は、ステーキングへの継続的なエンゲージメントを反映して、132万7000まで増加しました。現在発行されているネイティブトークンの総数は1,071万で、トークンポリシーは21万370です。

スマートコントラクトに関しては、Plutusスクリプトが前週比1.20%増の12万9,108、Aikenスクリプトが5,504に達するなど、普及が進んでいます。オンチェーンの活動は、現時点までのトランザクション数1億752万で安定しています。ガバナンスエンゲージメントも拡大し、DRepは先週から1.69パーセント増の1,205人（うちアクティブDRepは917人）と、分散型代議制への参加が増加しています。

その他のニュース： 

●    Hoskinson Family OfficeはUSDMの開発会社である[W3i Software, Inc.](https://x.com/USDMOfficial/status/1899816451311079720)に150万米ドルを投資。

●    Cardano、Crypto Expo EUでBlockchain [Project of the Year](https://x.com/Cardano_CF/status/1899847233446547732)を獲得。

●    Paima Studiosの共同創立者[Sebastien Guillemot](https://x.com/SebastienGllmt/status/1898226507874697499)が、UTXOスマートコントラクトを再構築するために設計された新しいzkVM Starstreamを発表。

### コアテクノロジー

**パフォーマンス＆トレース**チームはdb-syncを使用した新しいベンチマークエポックタイムラインを導入し、未加工ベンチマークデータのデータベースストレージ層へのデフォルト保存を始め、より高速なクエリを可能にしました。インフラの改善には、ベンチマークキャリブレーションの合理化を目的としたワークベンチのプレイグラウンドプロファイルのマージが含まれます。コミュニティからのフィードバックを受けて、新しいトレース機能にPrometheusのダイレクトバックエンドとシンプルなシステム依存関係を含めました。[Cardano Dev Pulse](https://www.youtube.com/watch?v=93elW8Ro8cI)ポッドキャストの第1回に参加しました。

**台帳**チームは、ステークの計算方法を再構築し、Conway期のステーク分布計算からPtrを削除し、さまざまな軽微なシリアル化修正と障害報告の改善を行うことで、技術債務の削減を続けました。ブロックシリアル化のラウンドトリップと[CDDL適合性](https://github.com/IntersectMBO/cardano-ledger/pull/4910)に関する欠落したテストを追加しましたが、この結果Babbage CDDL仕様にバグが見つかり、これを解決しました。

### ウォレットとサービス

[Wanchain Bridge](https://bridge.wanchain.org/AssetBridge)はLaceの[サポートを発表](https://x.com/wanchain_org/status/1899414999791030334?s=46&t=KH7Ar_LX82ElBgTR404n8g)しました。今回の統合により、Laceの相互運用性が拡大し、CardanoユーザーはWanchainのクロスチェーン機能にアクセスして、接続性と汎用性の高いブロックチェーンエクスペリエンスを得られるようになります。

### スケーリング

**Mithril**チームは、複数のアグリゲーター間で署名者登録をサポートするためのアグリゲーターの[プロトタイプslave](https://github.com/input-output-hk/mithril/issues/2334)モードの実装作業を続けました。機能の安定化と本番環境の準備、テスト、最適化に注力しながら、Cardanoデータベース増分認証の実装を続けました。Cardanoデータベーススナップショットの[補助ファイルにIOGキーで署名する作業](https://github.com/input-output-hk/mithril/issues/2362)にも取り組みました。

[Hydra CIで失敗したビルドを修正](https://github.com/input-output-hk/mithril/issues/2295)し、予定されているCardanoノードv.10.2のサポートに取り組みました。

**Leios**開発では、シミュレーション解析、形式手法、ドキュメントの更新に焦点を当てました。主な成果としては、タグleios-2025w10でのシミュレーションの詳細な解析、動作確認済みトレース検証器を使った形式手法の進展、テクニカルレポートの開発などがあります。詳細は、[Leois更新情報](https://leios.cardano-scaling.org/news)をご覧ください。

### VOLTAIRE 

ヴォルテールプロセスの継続的改善の一環として、Cardanoの投票および予算策定プロセスをレビュー、更新しました。Intersect MBOは、新しい[投票ページ](https://members.intersectmbo.org/dashboard/voting)で委員会メンバーの選挙を進めており、DRepの役割を強化するよう[改訂された予算手続き](https://intersectmbo.org/news/intersect-development-update-52-march-7th)で予算編成をサポートしています。

[委員会選挙](https://x.com/IntersectMBO/status/1899505627530960967)は4月に行われ、候補者申請は3月24日に開始されます。詳細は、Intersectの[選挙に関するブログ記事](https://intersectmbo.org/news/intersect-committee-elections-april-2025)を参照してください。

### CATALYST

Cardano財団は今週、Catalystで資金提供を受けたCardano AcceleratorsでXスペースを主催しました。技術開発は進行中であり、来週はコミュニティエンゲージメントを促すためにXスペースを増やす予定であり、Under the Hoodの追加エピソードも近日中に公開されます。  
  
教育  
**教育**チームは、Cardano開発者コースの更新と強化のまとめに入っています。今週後半、ラティノアメリカーナ・イ・デル・カリベ大学で開かれるDoctoralコンソーシアムのために、Cardanoについてのバーチャルプレゼンテーションの準備も進めています。3月31日には[フロリダ国際大学](https://www.fiu.edu/)でCardano Daysイベントを企画しています。登録の詳細は追って公開されます
