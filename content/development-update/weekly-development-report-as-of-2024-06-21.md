---
title: Weekly development report as of 2024-06-21
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f08a90b2-aeaa-4342-9b3c-792798c0130a/
image_text: Weekly development report as of 2024-06-21
---

### CORE TECHNOLOGY

This week, the **ledger** team reached a major milestone by [implementing CIP-0069](https://github.com/IntersectMBO/cardano-ledger/pull/4374), which enhances `PlutusV3` functionality by making spending datums optional and enforcing all scripts to have exactly one argument. This feature allows spending scripts to be used for other purposes, such as minting.

Additionally, they fixed several important bugs, including:

*   correcting script execution for certificates using the same Plutus script.
    
*   preventing delegation to non-existent pools.
    

### WALLETS AND SERVICES

This week, the **Lace** team is preparing for  v1.13 release, which includes new functionality and some important bug fixes. Keep an eye on the [Lace blog](https://www.lace.io/blog) for updates.

### SMART CONTRACTS

This week, the **Plutus** team released version 1.30.0.0 of the Plutus libraries. This release includes the implementation of CIP-0122, a new `Value` type backed by `Data`, and a refactoring of the ledger API.

### SCALING

This week, the **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They [implemented a warm-up](https://github.com/input-output-hk/mithril/issues/1692) strategy for the signer and aggregator to begin importing transactions as early as possible, thus minimizing the impact of network activation on certification. They also significantly improved the throughput of the aggregator's prover route by addressing database access bottlenecks. Additionally, the team made progress on low-latency certification by completing the handling of chain rollbacks and nearly completing the retrieval of transactions using the chain sync mini-protocol and Pallas.

Finally, they made final modifications to [the threat modeling explainer](https://github.com/input-output-hk/mithril/issues/1350) for the documentation website, which will be released shortly, and addressed a bug that occurs when parsing some blocks of the SanchoNet network.

### VOLTAIRE & SANCHONET

Last week’s [Intersect update](https://www.intersectmbo.org/news/intersect-development-update-18-june-14th) covered some member-experience improvements, including Discord enhancements and changes to working groups. Voting opens for the interim constitutional committee seats, DRep Pioneer program, community hubs, and more. 

Make sure to check [Intersect news](https://www.intersectmbo.org/news) for the latest updates.

With the ledger team’s work on CIP-0069 and other improvements, the Conway era and [CIP-1694](https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694) are now marked as feature-complete and ready for release. Testing of the Conway era will continue up to the hard fork.

### CATALYST

This week in **Project Catalyst**, town hall 167 was conducted on Thursday, marking the end of the community moderation phase for Fund12. The voting period for the F12 proposals will begin on June 27, and community members are encouraged to participate and vote for their favorite proposals. Progress is being made in the technical development of Hermes and Catalyst voices.

Furthermore, the ‘Partners and Real World Integration’ category setup is underway, and a shortlist will be discussed in detail with the community in the coming days.

### EDUCATION

This week, the **education** team is preparing their lectures for next month's Cardano Developer course. Work is also progressing on Mastering Cardano.  
  
  ![](https://ucarecdn.com/9af17437-efb3-4486-b220-d1d343cf503d/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは[CIP-0069を実装](https://github.com/IntersectMBO/cardano-ledger/pull/4374)して主要なマイルストンを達成しました。これは、支払いデータムをオプションにし、すべてのスクリプトに1つの引数を指定することで、PlutusV3の機能を強化しています。この機能により、支払いスクリプトをマイニングなどの他の目的に使用できるようになります。

以下を含む重要なバグを修正しました。

*   同じPlutusスクリプトを使用した証明書の実行スクリプトの修正
    
*   存在しないプールへの委任の防止
    

### ウォレットとサービス

**Lace**チームはv1.13のリリース準備をしています。これには新機能と重要なバグの修正が含まれます。最新情報は、[Laceのブログ](https://www.lace.io/blog)をご覧ください。

### スマートコントラクト

**Plutus**チームはPlutusライブラリーのバージョン1.30.0.0をリリースしました。このリリースには、CIP-0122の実装、Dataに裏打ちされた新しいValueタイプ、台帳APIのリファクタリングが含まれています。

### スケーリング

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。サイナーとアグリゲーターができるだけ早くトランザクションのインポートを開始してネットワークアクティベーションによる認証への影響を最小限に抑えるための[ウォームアップ戦略を実装](https://github.com/input-output-hk/mithril/issues/1692)しました。データベースアクセスのボトルネックに対処して、アグリゲーターの証明ルートのスループットを大幅に向上させました。チェーンロールバックの処理を完了し、チェーン同期ミニプロトコルとPallasを使用したトランザクションの検索をほぼ完了するなど、低レイテンシー認証に関する作業を進めました。

ドキュメントサイトの[脅威モデリングの説明](https://github.com/input-output-hk/mithril/issues/1350)の最終調整を行いました。これは近日公開予定です。SanchoNetネットワークのブロックを解析する際に発生するバグにも対処しました。

### VOLTAIRE & SANCHONET

先週の[Intersect更新情報](https://www.intersectmbo.org/news/intersect-development-update-18-june-14th)では、Discordの機能強化やワーキンググループの変更など、メンバーエクスペリエンスの改善点をいくつか取り上げました。憲法委員会の暫定議席、DRepパイオニアプログラム、コミュニティハブなどの投票が開始されました。 

今週の最新情報は、[Intersectニュース](https://www.intersectmbo.org/news)をチェックしてください。

台帳チームによるCIP-0069とその他の改善への取り組みの結果、Conway期と[CIP-1694](https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694)の機能は完了し、リリース準備が整いました。コンウェイ期のテストはハードフォークまで続きます。

### CATALYST

Project Catalystでは 、木曜日にタウンホール167が行われ、Fund12のコミュニティ調整フェーズは終了しました。F12の提案への投票は6月27日に開始されます。コミュニティメンバーには、参加して気に入った提案に投票することが奨励されます。HermesとCatalyst Voicesの技術開発が進んでいます。

Partners and Real World Integrationカテゴリーのセットアップは進行中で、近日中にコミュニティとショートリストを詳細に検討する予定です。

### 教育

**教育**チームは来月のCardano開発者コースに向けた講義の準備を進めています。Mastering Cardanoに関する作業も進んでいます。
