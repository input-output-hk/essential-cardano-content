---
title: Weekly development report as of 2024-08-23
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/dc0c069a-b33f-4f3a-81ff-80bac49633a8/
image_text: Weekly development report as of 2024-08-23
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team conducted several key activities:

*   **Benchmarking**. The team released `node v.9.1` benchmarks, conducted `UTXO-HD` in-memory benchmarks, and evaluated typed-protocols feature benchmarks.
    
*   **Development**. They improved resource trace emission for the CPU 85% spans metric and continued working on governance action benchmarking.
    
*   **Workbench**. Prepared for an update to `nixpkgs`, began removing the container-based `podman` backend, and added support for GHC 9.8 `nix` shells.
    
*   **Infrastructure**. The team tested and validated changes in the `node-to-node` submission protocol.
    
*   **Tracing**. They integrated support for non-`systemd` Linux in `cardano-tracer` and implemented a safe restart for internal monitoring servers.
    

The **consensus** team worked on enhancements to the [\`ChainSync](https://github.com/IntersectMBO/ouroboros-consensus/issues/529)\` client test and documented tasks for a [caught-up node](https://github.com/IntersectMBO/ouroboros-consensus/pull/1215), offering useful insights for SPOs. Tweag also presented the final Genesis statement of work to the consensus team, which is now reviewed and planned for a phased rollout.

In UTXO-HD benchmarks, a [race condition](https://github.com/IntersectMBO/ouroboros-consensus/pull/1208) was resolved. However, a proposed fix for [increased heap size](https://github.com/IntersectMBO/ouroboros-consensus/issues/1192) did not yield improvements and will not be merged.

### WALLETS AND SERVICES

Following a successful presence at Rare Evo 2024, the **Lace** team is now reviewing feedback received during the event. This feedback will be considered for future releases of the Lace wallet to enhance user experience and functionality.

### SMART CONTRACTS

This week, the **Plutus** team further enhanced Plinth (formerly Plutus Tx) user documentation. New content has been added, including sections on '[Different notions of version](https://plutus.cardano.intersectmbo.org/docs/essential-concepts/versions),' '[Plutus ledger language version (Plutus V1/V2/V3](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/ledger-language-version)),' and an '[Overview of languages compiling to UPLC](https://plutus.cardano.intersectmbo.org/docs/delve-deeper/languages).' These updates aim to clarify and enrich the resources available for developers working with Plinth.

### SCALING

The **Hydra** team launched the [Hydra Doom](https://doom.hydra.family/) project at [Rare Evo](https://rareevo.io/). Alongside this launch, they updated their landing page and released a minor version update that included a crucial bug fix. Moving forward, the team will continue focusing on incremental commits, network testing, and ensuring general API compatibility.

The **Mithril** team has completed their work on certifying Cardano's stake distribution. They implemented the [client library](https://github.com/input-output-hk/mithril/issues/1842), [client CLI](https://github.com/input-output-hk/mithril/issues/1880), client NPM package, and [drafted a CIP](https://github.com/cardano-foundation/CIPs/pull/876) for the diffusion of Mithril signatures through the Cardano network. Additionally, they introduced a mechanism for supporting evolutive configuration options in the client, began a proof of concept for integrating [signature diffusion](https://github.com/input-output-hk/mithril/issues/1837) with the Cardano network layer, created a new runbook in the documentation, and made progress on external contributions to the repository.

### VOLTAIRE

The **Chang** hard fork working group has been meeting every day this week to decide the final date for triggering the first stage of the Chang upgrade.  This upgrade marks Cardano's entry into the Conway ledger era and sets the stage for the Voltaire development phase – a self-sustaining and community-governed blockchain.

The pre-production testnet executed the hard fork on August 22 in preparation. August 27 and September 1 are the dates considered for the mainnet upgrade. 

In line with the longstanding practice of Cardano developers, who prefer safety and stability over speed, the hard fork working group is meeting today at 13:00 UTC to decide the most appropriate date. 

Follow the progress on [Intersect’s knowledge base](https://docs.intersectmbo.org/cardano/cardano-hardforks-and-upgrades/chang-upgrade/chang-upgrade-1-readiness#community-readiness) and watch [IOG X announcements](https://x.com/InputOutputHK). 

### CATALYST

Town halls are paused until the launch of Fund13, allowing the community to refresh during the cool-down period after an active Fund12. Onboarding and due diligence processes for new projects progress smoothly, ensuring a seamless transition as the community gears up for the next phase.

### EDUCATION

This week, the **education** team is collating survey feedback from participants of the recent Cardano Developer course at the [UTN](https://utn.edu.ar/es/) in Buenos Aires. Additionally, they are focusing on developing new Plutus education topics and updating content for the ‘Mastering Cardano’ series.  
  
![](https://ucarecdn.com/23991881-2389-4844-a365-16c0671687a9/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**パフォーマンス＆トレース**チームによる主要な取り組みは以下のとおりです。

*   **ベンチマーク**：node v.9.1ベンチマークをリリースし、UTXO-HDインメモリーベンチマークを実施し、型付きプロトコル機能のベンチマークを評価しました。
    
*   **開発**：CPUの85%スパンメトリクスのリソーストレース排出量を改善し、ガバナンスアクションベンチマークに取り組みました。
    
*   **ワークベンチ**：nixpkgsへの更新準備をし、コンテナーベースのpodmanバックエンドの削除を開始し、GHC 9.8 nixシェルのサポートを追加しました。
    
*   **インフラ**：node-to-node送信プロトコルの変更をテストし、検証しました。
    
*   **追跡**：cardano-tracerに非systemd Linuxのサポートを統合し、内部監視サーバーの安全な再起動を実装しました。
    

**コンセンサス**チームは、[ChainSync](https://github.com/IntersectMBO/ouroboros-consensus/issues/529)クライアントテストの強化に取り組み、[追いついたノード](https://github.com/IntersectMBO/ouroboros-consensus/pull/1215)のタスクを文書化し、SPOに有用な洞察を提供しました。Tweagはまた、Genesisの最終作業報告書をコンセンサスチームに提示しましたが、これは現在レビュー中であり、段階的なロールアウトが計画されています。

UTXO-HDベンチマークでは、[競合状態](https://github.com/IntersectMBO/ouroboros-consensus/pull/1208)が解決されました。[ヒープサイズを大きくする](https://github.com/IntersectMBO/ouroboros-consensus/issues/1192)修正案では成果が表れなかったため、マージは見送られます。

### ウォレットとサービス

Rare EVO 2024で活躍した**Lace**チームは、イベント中に受け取ったフィードバックのレビュー中です。このフィードバックは、ユーザーエクスペリエンスと機能性を強化するために、Laceウォレットの今後のリリースで検討されます。

### スマートコントラクト

**Plutus**チームはPlinth（旧Plutus Tx）のユーザードキュメントをさらに強化し、「[Different notions of version](https://plutus.cardano.intersectmbo.org/docs/essential-concepts/versions)（さまざまなバージョン概念）」、「[Plutus ledger language version (Plutus V1/V2/V3)](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/ledger-language-version)（Plutus台帳言語バージョン）」、「[Overview of languages compiling to UPLC](https://plutus.cardano.intersectmbo.org/docs/delve-deeper/languages)（UPLCにコンパイルした言語の概要）」などの新たなセクションを追加しました。この更新は、Plinthを使用する開発者が利用できるリソースを明確にし、充実させることを目的としています。

### スケーリング

**Hydra**チームは[Rare Evo](https://rareevo.io/)で[Hydra Doom](https://doom.hydra.family/)プロジェクトを立ち上げました。この立ち上げと並行してランディングページを更新し、重要なバグ修正を含むマイナーバージョン更新をリリースしました。今後は、インクリメンタルコミット、ネットワークテスト、汎用APIとの互換性の確保に引き続き注力します。

**Mithril**チームは、Cardanoのステーク分布の認証に関する作業を完了しました。[クライアントライブラリー](https://github.com/input-output-hk/mithril/issues/1842)、[クライアントCLI](https://github.com/input-output-hk/mithril/issues/1880)、クライアントNPMパッケージを実装し、Cardanoネットワークを経由したMithril署名拡散のCIPの草案をまとめました。クライアントに進化的な設定オプションをサポートするメカニズムを導入し、[署名拡散](https://github.com/input-output-hk/mithril/issues/1837)をCardanoネットワーク層と統合するための概念実証を開始し、ドキュメントに新しいランブックを作成し、リポジトリへの外部からの貢献に関する作業を進めました。

### VOLTAIRE

Changハードフォークワーキンググループは、Changアップグレードの第一段階開始日の最終決定のために、今週毎日会合を開いています。  このアップグレードは、CardanoがConway台帳期に入ったことを示し、自律的でコミュニティが管理するブロックチェーンであるVoltaire開発フェーズの舞台を整えるものです。

プリプロテストネットは準備のために8月22日にハードフォークを実行しました。メインネットのアップグレードの候補日としては、8月27日と9月1日が検討されています。 

スピードよりも安全性と安定性を好むCardano開発者の長年の慣行に沿って、ハードフォークワーキンググループは日本時間本日22:00に最も適切な日付を決定するために会議を開きます。 

[Intersectのナレッジベース](https://docs.intersectmbo.org/cardano/cardano-hardforks-and-upgrades/chang-upgrade/chang-upgrade-1-readiness#community-readiness)で進捗状況を追跡し、IOG Xの発表をチェックしてください。 

### CATALYST

タウンホールはFund13の立ち上げまで休止されるため、コミュニティは活発に行われたFund12後のクールダウン期間中にリフレッシュすることができます。コミュニティが次のフェーズに向けて準備を進めていく中でシームレスな移行を可能にするための、新規プロジェクトのオンボーディングとデューデリジェンスのプロセスはスムーズに進んでいます。

### 教育

**教育**チームはブエノスアイレスの[UTN](https://utn.edu.ar/es/)で開催されたCardano開発者コースに関するアンケート結果を照合しています。Plutusの新しい教育トピックの開発とMastering Cardanoシリーズのコンテンツの更新にも焦点を当てています。
