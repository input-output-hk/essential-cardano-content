---
title: weekly development report as of 2024-07-26
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f11e1e7c-9ced-4b40-987a-6ec975ea47a8/
image_text: weekly development report as of 2024-07-26
---

### CORE TECHNOLOGY

Cardano [node v.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0) has been released, bringing crucial features necessary for the upcoming Chang upgrade. This version includes a Conway genesis file needed to facilitate the Chang transition. This update includes several enhancements and bug fixes, particularly to the CLI and API, such as a new ‘query treasury’ command and updates for compatibility with [CIP-69](https://cips.cardano.org/cip/CIP-0069) and [CIP-119](https://cips.cardano.org/cip/CIP-0119).

For access to the necessary Conway genesis and other configuration files, and more details on the upgrade, visit the [Cardano operations book](https://book.play.dev.cardano.org/).

This week, the **performance and tracing** team completed and published a comprehensive set of release benchmarks for node v.9.0.0, noting significant improvements in block fetch duration and finding no performance regressions compared to mainnet release v.8.12.1. Additionally, they conducted scaling benchmarks on Plutus execution budgets to test the impacts of changes to CPU and memory budgets under various script conditions. In terms of development, the team has merged improved shutdown behavior for the `tx-generator` to `master` and is currently working on governance action benchmarking workload. The Haskell profile content definition has been merged to `master` in the workbench. In the tracing department, factoring out RTView has been merged to `master`, and work on metrics naming is ongoing to minimize migration efforts.

The **networking** team held the network working group (NWG) meeting, sharing recordings ([1](https://drive.google.com/file/d/1J_o2iGy4jeIR6X1x9D6p_nHKLCNjgX6h/preview), [2](https://drive.google.com/file/d/1CsqC1R_GMliWkKJaeSCf-xrZG6F6yvMv/preview), [3](https://drive.google.com/file/d/1QV46QqmpkfPVcoKxueYHg4Qe7rPQzOer/preview)) aimed at a technical audience, covering basic concepts of ouroboros-network. In addition to this, the team made progress on the new design of tx-submission, including the development of a new tx-submission server and plans for simulation testing. Furthermore, all outstanding pull requests related to Genesis have been reviewed and accepted, with imminent merges. Lastly, integration ideas with `cardano-node` were presented for Mithril integration, considering system risks, to be part of a CIP for evaluation by the technical steering committee (TSC).

### WALLETS AND SERVICES

This week, the **Lace** team is in the final stages of preparing for the Lace version 1.14 release, which includes improvements and bug fixes. For more information about the new features and enhancements, stay tuned for an official announcement on the [Lace blog](https://www.lace.io/blog).

### SMART CONTRACTS

The **Plutus** team has rebranded Plutus TX as Plinth, a decision made to clarify terminology within the ecosystem. This change, approved during the Plutus working group meeting, aims to distinguish between Plutus Tx and Plutus Core more effectively. ‘Plutus’ has often been confusingly used for both modules. User documentation will be updated soon to reflect this change.

### SCALING

This week, the **Hydra** team [merged incremental decommits](https://github.com/cardano-scaling/hydra/pull/1344) and successfully ran the latest Hydra head on the preview network. Additionally, they provided a [new NixOS configuration](https://github.com/cardano-scaling/hydra/pull/1506) for running a Hydra node. Next, the team will focus on incremental commits, follow-ups to the incremental decommit work, and improvements/tests for network reliability.

The **Mithril** team focused on preparing for the upcoming release of Cardano transaction certification in Mithril networks. They fixed a bug that was preventing the import of transactions close to the tip of the chain, investigated performance issues on imports from mainnet and SanchoNet, refactored some types used for block and slot numbers, and thoroughly benchmarked performance and tested edge cases.

Finally, the team continued working on the certification of the Cardano stake distribution and redacting a CIP for the diffusion of Mithril signatures through the Cardano network.

### VOLTAIRE & SANCHONET

With the release of [node v.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0), SPOs and other critical node users (exchanges, explorers, wallets, etc.) are strongly encouraged to upgrade. When sufficient SPOs and exchanges have upgraded, an update proposal to trigger the Chang hard fork will be submitted.

For more details related to the Chang upgrade, follow [Intersect news](https://www.intersectmbo.org/news).

### CATALYST

The onboarding process for 258 new Fund12 projects has begun, marking an exciting new phase for these initiatives. Town Hall 172 was also held on Wednesday, July 24, providing updates and community engagement.

### EDUCATION

This week, members of the **education** team are on the ground in Argentina, teaching a two-week-long _Cardano Developer_ course at the [UTN](https://utn.edu.ar/es/). Students attending the course are learning how to build on Cardano.

![](https://ucarecdn.com/7e81ef7d-d917-4e34-b85a-8924fb17ffb4/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

Cardano[ノードv.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0)がリリースされ、来るChangアップグレードに必要な重要な機能が追加されました。このバージョンには、Changへの遷移を容易にするために必要なConwayジェネシスファイルが含まれています。このアップデートには、新しいquery treasuryコマンドや[CIP-69](https://cips.cardano.org/cip/CIP-0069)および[CIP-119](https://cips.cardano.org/cip/CIP-0119)へ対応させるための更新など、特にCLIとAPIの機能強化とバグ修正が含まれています。

Conwayジェネシスやその他の設定ファイル等必要なファイルへのアクセスやアップグレードの詳細は、[Cardanoの操作ガイド](https://book.play.dev.cardano.org/)をご覧ください。  
  
**パフォーマンス＆トレース**チームは、ノードv.9.0.0の包括的なリリースベンチマークを完成させ、公開しました。これには、ブロックフェッチ時間が大幅に改善され、メインネットリリースv.8.12.1と比較してパフォーマンスの低下が見られないことが示されています。Plutusの実行バジェットのスケーリングベンチマークを実施し、さまざまなスクリプト条件下でCPUとメモリーのバジェットが変更された場合の影響をテストしました。開発面では、tx-generatorのシャットダウン動作の改善をmasterにマージし、現在ガバナンスアクションのベンチマークワークロードに取り組んでいます。Haskellプロファイルのコンテンツの定義も、ワークベンチのmasterにマージしました。トレーシング部門では、RTViewのファクタリングをmasterにマージし、移行作業を最小限に抑えるためにメトリクスの命名作業を進めています。  
**ネットワーキング**チームはNWG（ネットワークワーキンググループ）会議を開催し、技術者を対象にouroboros-networkの基本的な概念をカバーした録音（[1](https://drive.google.com/file/d/1J_o2iGy4jeIR6X1x9D6p_nHKLCNjgX6h/preview)、[2](https://drive.google.com/file/d/1CsqC1R_GMliWkKJaeSCf-xrZG6F6yvMv/preview)、[3](https://drive.google.com/file/d/1QV46QqmpkfPVcoKxueYHg4Qe7rPQzOer/preview)）を公開しました。tx-submissionの新しい設計も進めました。これには、新たなtx-submissionサーバーの開発やシミュレーションテストの計画も含まれます。Genesisに関連するすべての未解決のプルリクエストをレビューし、承認し、即マージしました。Mithrilの統合について、システムリスクを考慮し、TSC（技術運営委員会）による評価のためのCIPの一環として、Cardano-nodeとの統合のアイデアが発表されました。

### ウォレットとサービス

**Lace**チームはLaceバージョン1.14リリース準備の最終段階にあります。このリリースには、改良とバグの修正が含まれています。新機能と改良点の詳細は、[Laceブログ](https://www.lace.io/blog)の公式発表をご覧ください。

### スマートコントラクト

**Plutus**チームは、エコシステムにおける用語の明確化を目指して、Plutus TXをPlinthに改名しました。Plutusワーキンググループ会議で承認されたこの変更は、Plutus TxとPlutus Coreをより明確に区別することを目的としています。Plutusは、両方のモジュールでしばしば混同されて使用されてきました。この変更を反映するために、ユーザーマニュアルが近日中に更新されます。

### スケーリング

**Hydra**チームは[インクリメンタルデコミットをマージ](https://github.com/cardano-scaling/hydra/pull/1344)し、プレビューネットワークで最新のHydraヘッドを正常に実行しました。Hydraノードを実行するための[新しいNixOS設定](https://github.com/cardano-scaling/hydra/pull/1506)も提供しました。今後は、インクリメンタルコミット、インクリメンタルデコミットのフォローアップ、ネットワークの信頼性の改良およびテストに焦点を当てます。

**Mithril**チームは、MithrilネットワークのCardanoトランザクション認証のリリース準備に注力しました。チェーンの先端に近いトランザクションのインポートを妨げるバグを修正し、メインネットとSanchoNetからのインポートのパフォーマンス問題を調査し、ブロック番号とスロット番号に使用される型をリファクタリングし、パフォーマンスを徹底的にベンチマークし、エッジケースをテストしました。

Cardanoステーク分布認証の取り組みと、Cardanoネットワークを介したMithril署名拡散のCIPの編集を継続しました。

### VOLTAIRE & SANCHONET

[ノードv.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0)のリリースに伴い、SPOやその他の重要なノードユーザー（取引所、エクスプローラ、ウォレットなど）にはアップグレードが強く推奨されます。十分なSPOと取引所がアップグレードされると、Changハードフォークをトリガーする更新提案が提出されます。

Changアップグレードに関する詳細は、[Intersectニュース](https://www.intersectmbo.org/news)をご覧ください。

### CATALYST

Fund12からの新しい258プロジェクトのオンボーディングプロセスが開始され、このイニシアチブのエキサイティングな新しいフェーズが始まりました。7月24日水曜日にはタウンホール172が開催され、最新情報やコミュニティエンゲージメントが提供されました。

### 教育

**教育**チームのメンバーはアルゼンチンに赴き、[UTN](https://utn.edu.ar/es/)で2週間のCardano開発者コースの教鞭をとっています。受講生は、Cardanoに構築する方法を学びます。
