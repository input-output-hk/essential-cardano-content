---
title: Weekly development report as of 2024-06-28
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/6b588de0-26f0-4488-b21a-0368b5673365/
image_text: Weekly development report as of 2024-06-28
---

### CORE TECHNOLOGY

This week, the **consensus** team supported debugging activities related to bootstrap nodes and merged various improvements to the `db-X` tools. In particular, they [significantly optimized](https://github.com/IntersectMBO/ouroboros-consensus/pull/1143) the `db-truncater`, which is regularly used by community members on SanchoNet, in terms of speed.

The **performance and tracing** team released benchmarks for node v.8.12.0 and conducted DRep benchmarks with 100,000 DReps. They also merged a performance fix for node v.8.11, started working on the governance action workload, and updated automations for Conway features in node v.8.12 and the latest Plutus cost model. The `CIP-69` and `CIP-117` implementations are now in the validation phase. 

Finally, they completed factoring out the RTView component, delivered two presentations in Zurich, and developed a community report on UTXO scaling benchmarks.

### WALLETS AND SERVICES

This week, the **Lace** team is finalizing the details for the Lace v.1.13 release, which will be accompanied by a blog post. The blog will highlight the team's achievements in 2024 and provide a direct outlook on their immediate plans.

### SMART CONTRACTS

This week, the **Plutus** team [wrote](https://github.com/IntersectMBO/plutus/pull/6245) a high-level overview of the cost model, [completed](https://github.com/IntersectMBO/plutus/issues/5711) the initial design of faster pattern matching for built-in types, and implemented multiple documentation and CI improvements.

### SCALING

This week, the **Mithril** team released the [threat modeling explainer](https://mithril.network/doc/next/mithril/threat-model) for the documentation website. They also continued implementing the certification of Cardano transactions in Mithril networks and the low-latency certification with the retrieval of transactions using the chain sync mini-protocol and Pallas. Additionally, the team started [redacting a draft CIP for the diffusion](https://github.com/input-output-hk/mithril/issues/1775) of Mithril signatures through the Cardano network.

Finally, they fixed a bug that prevented the verification of transactions included in the last certified block and improved the WASM client's documentation.

### CATALYST

This week in Catalyst, an exciting list for the ‘Partners and Real World Integration’ track was released ahead of the voting period, featuring 12 global tier-one companies, including FC Barcelona, Brave Browser, and TechStars. For more details, see the [shortlist here](https://docs.projectcatalyst.io/current-fund/proposal-submission/cardano-partners-and-real-world-integrations-category/cardano-partners-short-list).

[Town hall 168](https://youtube.com/live/rirQw9cAikA) was conducted on Wednesday, June 26, showcasing 168 consecutive weeks of Catalyst town halls. Voting begins on Thursday, June 27, and continues until July 11. Get an overview of Fund12 projects to [vote for here](https://projectcatalyst.io/funds/12).

### EDUCATION

This week, the **education** team focused on updating the Mastering Cardano series and preparing for next month's Cardano developer course. They were also actively involved in company-wide planning sessions.  
  
  
![](https://ucarecdn.com/b92dbfd6-2837-4d34-a7b0-892f9e926193/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、ブートストラップノードに関連するデバッグ作業をサポートし、db-Xツールのさまざまな改善点をマージしました。特に、SanchoNetのコミュニティメンバーが定期的に使用しているdb-truncaterの速度を[大幅に最適化](https://github.com/IntersectMBO/ouroboros-consensus/pull/1143)しました。

**パフォーマンス＆トレース**チームは、ノードv.8.12.0のベンチマークをリリースし、100,000のDRepでDRepベンチマークを実施しました。ノードv.8.11のパフォーマンス修正をマージし、ガバナンスアクションワークロードの作業を開始し、ノードv.8.12のConway機能の自動化と最新のPlutusコストモデルを更新しました。CIP-69とCIP-117の実装は現在検証段階にあります。 

RTViewコンポーネントのファクタリングを完了し、チューリッヒで2つのプレゼンテーションを行い、UTXOスケーリングベンチマークに関するコミュニティレポートを作成しました。

### ウォレットとサービス

**Lace**チームはLace v.1.13リリースの詳細を詰めています。リリース時にはブログ記事も公開されます。このブログでは、2024年のチームの成果のハイライトと、当面の計画についての率直な見通しを提供します。

### スマートコントラクト

**Plutus**チームはコストモデルの概要を[記述](https://github.com/IntersectMBO/plutus/pull/6245)し、高速化した組み込み型パターンマッチングの初期設計を[完了](https://github.com/IntersectMBO/plutus/issues/5711)し、複数のドキュメントとCIの改善を実装しました。

### スケーリング

**Mithril**チームは、ドキュメントサイトの[脅威モデリングの説明](https://mithril.network/doc/next/mithril/threat-model)を公開しました。MithrilネットワークへのCardanoトランザクション認証、チェーン同期ミニプロトコルとPallasを使用したトランザクション取得による低レイテンシー認証の実装も継続しました。Cardanoネットワークを経由したMithril署名拡散のCIPの草案の編集を始めました。

最後に認証されたブロックに含まれるトランザクションの検証を妨げるバグを修正し、WASMクライアントのドキュメントを改良しました。

### CATALYST

Catalystでは、投票期間に先立ってPartners and Real World Integrationトラックのエキサイティングなリストがリリースされました。FCバルセロナ、Braveブラウザー、TechStarsなど、12のティア1グローバル企業が参加しています。詳細は、[こちらのショートリスト](https://docs.projectcatalyst.io/current-fund/proposal-submission/cardano-partners-and-real-world-integrations-category/cardano-partners-short-list)をご覧ください。

6月26日水曜日に[タウンホール168](https://youtube.com/live/rirQw9cAikA)が開催され、連続する168週のCatalystタウンホールが紹介されました。投票は6月27日木曜日に開始され、7月11日まで続きます。投票対象となるFund12プロジェクトの概要は[こちら](https://projectcatalyst.io/funds/12)をご覧ください。

### 教育

**教育**チームはMastering Cardanoシリーズの更新と来月のCardano開発者コースの準備に焦点を当てました。全社的な企画会議にも積極的に参加しました。
