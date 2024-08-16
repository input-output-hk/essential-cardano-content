---
title: Weekly development report as of 2024-08-16
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/18e87190-df57-4965-8c5f-293dc915e6f8/
image_text: Weekly development report as of 2024-08-16
---

This week, some IO teams are attending Rare Evo 2024 in Las Vegas, Nevada from August 15-17, 2024. See this [blog post](https://iohk.io/en/blog/posts/2024/08/14/input-output-io-at-rare-evo-2024-blockchain-innovation-and-demon-slaying-in-the-neon-city/) for more details.

### CORE TECHNOLOGY

The **ledger** team added new minor features. These include [ledger state queries](https://github.com/IntersectMBO/cardano-ledger/pull/4514) for voting on current proposals and [functionality](https://github.com/IntersectMBO/cardano-ledger/pull/4521) for computing transaction sizes necessary for network communication. The primary focus remains on improving Conway testing coverage and adding [conformance tests](https://github.com/IntersectMBO/cardano-ledger/pull/4496).

### WALLETS AND SERVICES

This week, the **Lace** team released version 1.14, which includes support for CIP-95 along with various bug fixes. This update enhances the wallet's functionality, ensuring improved user experience.

### SCALING

This week, the **Hydra** team [fixed a bug](https://github.com/cardano-scaling/hydra/issues/1545) related to keeping a `head` active during the Conway hard fork on the preview network by adding code to handle cost calculations. The team [released Hydra version 0.18.0](https://github.com/cardano-scaling/hydra/releases/tag/0.18.0), which includes incremental decommits. They also worked on supporting Hydra Doom and ensuring compatibility with upstream dependencies. The team also released a [new landing page](https://hydra.family/head-protocol/), and now continue working on network testing and performing general upgrades to the ledger and dependencies.

### VOLTAIRE & SANCHONET

The governance tool GovTool is now active on the preview and SanchoNet testnets. Seven major wallets have indicated their readiness for the Chang hard fork stage 1 in a survey conducted by the wallets working group. Many stake pool operators have upgraded to node v.9.1.0, so 67% of stake is now at the latest Cardano node version, ready for the Chang upgrade. Development work is progressing well at many exchanges, and some have already reported as 'Ready'. Important information about the new cost model has been provided for Cardano DApp developers. Intersect’s July Q&A session  was [recorded](https://www.youtube.com/watch?v=LRxy-BkaonY), and an [upgrade guide](https://github.com/cardanoapi/hardfork-testing/blob/main/migration.md) was made available. Another Q&A session will be held on August 15 from 13:00 – 14:00 UTC. For more details, see [Intersect weekly development updates](https://www.intersectmbo.org/news).

### CATALYST

This week, the **Catalyst** team announced the release of the [Catalyst Horizons report](https://projectcatalyst.io/reports/horizons.pdf). Additionally, a new section for future reports has been added to the [Project Catalyst website](https://projectcatalyst.io/reports).

The team is also gearing up for a dynamic weekend at Rare Evo in Las Vegas, featuring several engagements:

*   **Talks**: notable presentations include ‘Project Catalyst: An Innovation Engine at Work and its Global Impact’ by Kriss Baird and Tim Harrison on Saturday at noon PDT, followed by ‘Co-creating the Future of Project Catalyst’ with Michael McNulty at 1pm PDT.
    
*   **Workshops and chats**: ongoing Catalyst workshops and casual discussions will be available at the IO booth throughout the event.
    

### EDUCATION

This week, the education team is reflecting on the recently concluded Cardano Developer course at the [UTN](https://utn.edu.ar/es/) in Buenos Aires. They are conducting a retrospective on the course and collecting data from participant feedback surveys. Additionally, they are working on updates to ‘Mastering Cardano’, and some members of the team are attending Rare Evo.  
  
![](https://ucarecdn.com/7380257e-5e1d-4061-b643-766c7d4ecc6a/-/preview/-/format/auto/-/quality/smart/)

複数のIOチームが、2024年8月15日から17日までネバダ州ラスベガスで開催されているRare EVO 2024に参加しています。詳しくは、[こちらのブログ記事](https://iohk.io/jp/blog/posts/2024/08/14/input-output-io-at-rare-evo-2024-blockchain-innovation-and-demon-slaying-in-the-neon-city/)をご覧ください。

### コアテクノロジー

**台帳**チームは軽微な機能を追加しました。これには、現在の提案に投票するための[台帳ステータスクエリ](https://github.com/IntersectMBO/cardano-ledger/pull/4514)や、ネットワーク通信に必要なトランザクションサイズを計算するための[機能](https://github.com/IntersectMBO/cardano-ledger/pull/4521)が含まれます。重点は、Conwayテストカバレッジの改善と適合性テストの追加に置かれたままです。

### ウォレットとサービス

### **Lace**チームはバージョン1.14をリリースしました。これには、CIP-95のサポートとさまざまなバグ修正が含まれています。この更新により、ウォレットの機能が強化され、ユーザーエクスペリエンスが向上します。

### スケーリング

**Hydra**チームは、コスト計算を処理するコードを追加することによって、Conwayハードフォーク中にプレビューネットワークでheadをアクティブに保つことに関連した[バグを修正](https://github.com/cardano-scaling/hydra/issues/1545)しました。[Hydraバージョン0.18.0をリリース](https://github.com/cardano-scaling/hydra/releases/tag/0.18.0)しましたが、これにはインクリメンタルデコミットが含まれています。Hydra Doomのサポートとアップストリーム依存の互換性の確保にも取り組みました。[新しいランディングページ](https://hydra.family/head-protocol/)をリリースし、現在ネットワークテストと、台帳と依存関係の総合的なアップグレードに引き続き取り組んでいます。

### VOLTAIRE & SANCHONET

ガバナンスツールGovToolがプレビューテストネットとSanchoNetテストネットで公開されました。7つの主要なウォレットは、ウォレットワーキンググループが実施した調査で、Changハードフォークのステージ1の準備ができていることを示しています。多くのステークプールオペレーターがノードv.9.1.0にアップグレードしているため、ステークの67%は最新のCardanoノードバージョンであり、Changアップグレードへの準備が整っています。開発作業は多くの取引所で順調に進んでおり、すでに準備完了と報告されているものもあります。Cardano DAppの開発者には新しいコストモデルに関する重要な情報が提供されました。Intersectの7月のQ&Aセッションは[録画](https://www.youtube.com/watch?v=LRxy-BkaonY)され、[アップグレードガイド](https://github.com/cardanoapi/hardfork-testing/blob/main/migration.md)も利用可能です。Q&Aセッションは日本時間8月15日22:00～23:00にも開催されます。詳細は、[Intersect週刊開発更新情報](https://www.intersectmbo.org/news)をご覧ください。

### CATALYST

**Catalyst**チームは[Catalyst Horizonsレポート](https://projectcatalyst.io/reports/horizons.pdf)のリリースを告知しました。[Project Catalystサイト](https://projectcatalyst.io/reports)には、今後のレポート用に新しいセクションが追加されました。

ラスベガスで開催されるRare Evoでのダイナミックな週末に向けた準備も進めています。

*   **講演**：注目すべきプレゼンテーションとしては、土曜日正午（PDT）にKriss BairdとTim Harrisonによる「Project Catalyst: An Innovation Engine at Work and Its Global Impact（Project Catalyst：イノベーションエンジンの機能と、その世界的な影響力）」、続いて午後1時（PDT）にMichael McNultyによる「Co-creating the Future of Project Catalyst（Project Catalystの未来を共に創造する）」 が予定されてます。
    
*   **ワークショップとチャット**：イベントを通じて、IOブースでは継続的なCatalystワークショップとカジュアルなディスカッションが行われます。
    

### 教育

教育チームはブエノスアイレスの[UTN](https://utn.edu.ar/es/)で開催されていたCardano開発者コースを振り返っています。コースのレトロスペクティブを行い、参加者のフィードバックアンケートからデータを収集しています。Mastering Cardanoの更新にも取り組んでいる他、メンバーの一部はRare Evoに参加しています。
