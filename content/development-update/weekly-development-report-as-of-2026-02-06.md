---
title: Weekly development report as of 2026-02-06
tags:
  - Development
  - Weekly development updates
  - Statistics
  - Ecosystem
url: ""
image: https://ucarecdn.com/b7920df5-7027-4453-a509-50e4123981e0/
image_text: Cardano weekly development report as of 2026-02-06
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   [Rare Network](https://x.com/RareNetworkWeb3/status/2011145485189530100) is offering event and marketing funding through the Amplify Cardano program
    
*   [CME Group](https://x.com/CMEGroup/status/2019063398013522208) will launch Cardano futures on February 9
    
*   [World Mobile](https://x.com/WorldMobileTeam/status/2019059553212473690) announced plans for a new phone, AirNode NFTs, and real-world asset (RWA) positioning as part of its 2026 roadmap
    
*   [CardanoThingsIO](https://x.com/CardanoThingsIO/status/2019437491095482834) launched a series of online workshops to help developers build their first Cardano IoT project
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/2019395306555904503) released the results of its 2025 State of the Cardano Ecosystem survey
    
*   The Catalyst program provides a Fund15 update – read [more here](https://projectcatalyst.io/blog/update-from-the-catalyst-team).
    

### CORE TECHNOLOGY

This week, the **performance and tracing** team worked on re-establishing performance baselines for node v.10.5 and v.10.6 branches, ensuring recent incremental changes are reflected so that future performance shifts can be accurately attributed. 

Additionally, the team advanced tooling and infrastructure, including adding native HTTPS support to `cardano-tracer`, progressing a PromQL-like query language and metrics timeseries engine for future alerting and dashboards, and [switching the reporting pipeline](https://github.com/IntersectMBO/cardano-node/pull/6418) to the Typst typesetting system for faster builds and more accessible outputs. They also backported changes to re-enable cluster [benchmarking on 10.5.x](https://github.com/IntersectMBO/cardano-node/pull/6421) and significantly [improved the performance](https://github.com/IntersectMBO/cardano-node/pull/6380) workbench’s profiling capabilities and Nix API.

Finally, the team continued tracing and node diversity work by aligning tracing between `cardano-node` and `dmq-node`, [migrating](https://github.com/IntersectMBO/cardano-node/pull/6326) `cardano-submit-api` to the new tracing system, improving default [tracing configurations](https://github.com/IntersectMBO/cardano-node/pull/6409), defining a formal schema for node trace messages, and prototyping trace forwarding in native Rust to support non-Haskell node implementations.

### SMART CONTRACTS

The **Cardano High Assurance** team is thrilled to announce the launch of the _early access program_ for the Cardano High Assurance [automatic formal verification tool](https://www.iog.io/news/a-new-era-of-smart-contract-verification-on-cardano)!

Five companies are already participating in this pilot phase, helping the team refine and enhance the tool for the entire Cardano developer ecosystem.

This is your opportunity to join the early access program to directly influence the development of critical security tooling for Cardano. The team is eager to:

*   Understand your specific development context
    
*   Learn about your pain points with smart contract verification
    
*   Gather your hands-on feedback as you use the tool.
    

Your input will directly shape the product roadmap and ensure the development of exactly what the Cardano developer community needs. Subscribe now: [afv\_earlyaccess@iohk.io](mailto:afv_earlyaccess@iohk.io). 

### SCALING

This week, the **Mithril** team released the [2603.1 distribution](https://github.com/input-output-hk/mithril/releases/tag/2603.1). This release adds support for the decentralized message queue (DMQ) protocol, preliminary decentralized configuration, a Blockfrost API integration to fetch stake pool operators’ tickers and names, along with various bug fixes and improvements.

The team also implemented pre-aggregation SNARK primitives in the STM library and continued developing the non-recursive SNARK circuit MVP, including golden tests.

In parallel, work progressed on the new certification for Cardano blocks and transactions, with implementation of the signable builder and artifact routes in the aggregator REST API. The team also completed [documentation proposals](https://github.com/input-output-hk/mithril/issues/2831) to increase the adoption of Mithril and DMQ nodes on Cardano.

Finally, they fixed several bugs in the DMQ publisher and follower aggregator and continued updating the protocol security page.

### RESEARCH

The **Input Output Research (IOR)** team has submitted final end-of-year 2025 reports to Intersect following a three-week consultation period with the community. The IOR team disseminated these Foundational Research and Technology Validation reports through January, achieving an estimated reach of over 24,000 across all ecosystem platforms. Work Package 25, the first under Cardano Vision, has now been formally closed, and the associated funding milestones have been completed.

Work Package 26 planning is well underway, and the team is assessing options following recent stakeholder interviews on research proposals.

![](https://ucarecdn.com/480856d2-ebda-4874-b431-15d6fb030a5c/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週のエコシステム更新情報

*   [Rare Network](https://x.com/RareNetworkWeb3/status/2011145485189530100)がAmplify Cardanoプログラムを通じてイベントおよびマーケティングの資金調達を提供
    
*   [CME Group](https://x.com/CMEGroup/status/2019063398013522208)が2月9日にCardano先物を上場
    
*   [World Mobile](https://x.com/WorldMobileTeam/status/2019059553212473690)が2026年ロードマップを公開。新型スマホやAirNode NFT、RWAへの注力を発表
    
*   [CardanoThingsIO](https://x.com/CardanoThingsIO/status/2019437491095482834)がCardano IoTプロジェクトを支援するオンラインワークショップを開始
    
*   [Cardano財団](https://x.com/Cardano_CF/status/2019395306555904503)が2025年Cardanoエコシステム現状調査の結果を発表
    

コアテクノロジー

**パフォーマンス＆トレース**チームは、 ノードv.10.5およびv.10.6ブランチのパフォーマンスベースラインの再確立に取り組みました。これにより、直近の微細な変更が反映され、将来的なパフォーマンスの変化を正確に特定できるようになります。 

ツールとインフラを強化しました。具体的には、`cardano-tracer`へのネイティブHTTPSサポートの追加、将来的なアラートやダッシュボード構築のためのPromQL風クエリ言語およびメトリクス時系列エンジンの開発、ビルドの高速化とアウトプットのアクセシビリティ向上のため、Typst組版システムへ[レポート作成パイプラインを移行](https://github.com/IntersectMBO/cardano-node/pull/6418)するなどの作業を行いました。[10.5.x におけるクラスターベンチマーク](https://github.com/IntersectMBO/cardano-node/pull/6421)を再有効化するための変更をバックポートし、パフォーマンスワークベンチのプロファイリング機能とNix APIを[大幅に改善](https://github.com/IntersectMBO/cardano-node/pull/6380)しました。

トレーシングとノードの多様化に関する作業を継続しました。`cardano-node`と`dmq-node`の間でのトレーシングの整合、`cardano-submit-api`の新トレーシングシステムへの[移行](https://github.com/IntersectMBO/cardano-node/pull/6326)、デフォルトの[トレーシング設定](https://github.com/IntersectMBO/cardano-node/pull/6409)の改善、ノードトレースメッセージの形式スキーマの定義を行い、Haskell以外のノード実装をサポートするため、ネイティブRustによるトレース転送のプロトタイプ作成を行いました。

### スマートコントラクト

**Cardano High Assurance**チームは、Cardano High Assurance[自動形式検証ツール](https://www.iog.io/news/a-new-era-of-smart-contract-verification-on-cardano)の早期アクセスプログラムの開始を喜びとともに発表します。

すでに5社がこのパイロットフェーズに参加しており、Cardano開発エコシステム全体に向けて、チームによるツールの洗練と強化を支援しています。

これは、早期アクセスプログラムに参加して、Cardanoの重要なセキュリティツールの開発に直接影響を与えるチャンスです。チームは以下に重点を置いています。

*   ユーザーの具体的な開発コンテキストの把握
    
*   スマートコントラクト検証における課題の特定
    
*   ツール使用時の直接的なフィードバックの収集
    

皆様の意見は、プロダクトロードマップを形作り、Cardano開発コミュニティが真に必要とするものを開発するために不可欠です。登録はこちらから：[afv\_earlyaccess@iohk.io](mailto:afv_earlyaccess@iohk.io)

### スケーリング

**Mithril**チームは[2603.1ディストリビューション](https://github.com/input-output-hk/mithril/releases/tag/2603.1)をリリースしました。このリリースでは、分散型メッセージキュー（DMQ）プロトコルのサポート、分散型設定の予備サポート、ステークプールオペレーターのティッカーと名称を取得するためのBlockfrost API統合のほか、さまざまなバグ修正と改善が追加されています。

STMライブラリーに集約前SNARKプリミティブを実装し、ゴールデンテストを含む非再帰型SNARK回路のMVPの開発を継続しました。

Cardanoのブロックおよびトランザクションの新しい認証に関する作業を進め、アグリゲーターREST APIにおける署名可能ビルダーとアーティファクトルートの実装を行いました。CardanoにおけるMithrilおよびDMQノードの普及を促進するための[ドキュメント草案の作成](https://github.com/input-output-hk/mithril/issues/2831)を完了しました。

DMQのパブリッシャーおよびフォロワーアグリゲーターのバグを修正し、プロトコルのセキュリティページの更新を継続しました。

### 研究

**Input Output Research（IOR）**チームは、コミュニティとの3週間にわたる協議期間を経て、2025年末の最終レポートをIntersectに提出しました。チームは1月を通じてこれらの「基礎研究」および「技術検証」レポートを公開し、あらゆるエコシステムプラットフォームを通じて推定24,000人以上にリーチしました。Cardano Visionの下での最初のワークパッケージであるWP25はこれで正式に終了し、関連する資金提供のマイルストーンも完了しました。

現在はWP26の計画が順調に進んでおり、研究案に関する最近のステークホルダーインタビューを踏まえて、チームは選択肢の評価を行っています。
