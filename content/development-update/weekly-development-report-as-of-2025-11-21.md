---
title: Weekly development report as of 2025-11-21
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/7741136b-bf41-4271-9ff9-015083f2ba7d/
image_text: Weekly development report as of 2025-11-21
---

### CORE TECHNOLOGY

This week, the core tech team released `cardano-node` v.10.5.2, a bug-fix update addressing a hash-size inconsistency and a diffusion peer-selection issue in which the periodic churn mechanism could fail to demote enough warm peers, reducing long-term diversity among active peers. This was identified using \`[cardano-ignite](https://github.com/cardano-foundation/cardano-ignite)\` – a tool for orchestrating multi-region testnets with many stake pools.

**Action required: Stake pool operators should upgrade to v.10.5.2.**

The **ledger** team defined [sub-transactions](https://github.com/IntersectMBO/cardano-ledger/pull/5386) for nested transactions in the Dijkstra era. They also reduced duplication in the CDDL transaction specification, with further consolidation in progress. For Dijkstra, they hardened serialization to reject duplicate elements on the wire — an issue that could not be addressed retroactively for earlier eras.

In addition, the team [removed deprecated functionality](https://github.com/IntersectMBO/cardano-ledger/pull/5376), reduced ledger-state memory usage, improved performance at the epoch boundary, and [resolved several conformance test issues](https://github.com/IntersectMBO/cardano-ledger/pull/5423).

### SMART CONTRACTS

The **Plutus** team is finalizing work for the upcoming intra-era hard fork. They finalized the costing for four `Value` primitives, with the remaining three in progress. The final step will be end-to-end testing of all new features planned for activation. The team is also preparing a blog post on the UPLC 2025 event and continues working on other items, such as support for case analysis related to `Data`.

### WALLET AND SERVICES

This week, the **Lace** team released [Lace v.1.31](https://x.com/lace_io/status/1990827873939407224?s=46&t=KH7Ar_LX82ElBgTR404n8g). This update enables in-wallet token swaps for Cardano native assets via SteelSwap, brings Bitcoin wallets to general availability through a phased rollout, and improves responsiveness with optimized API request batching. For full details, setup guidance, and tips, see the [Lace v1.31 release post](https://www.lace.io/blog/1-31-release).

### SCALING

This week, the **Mithril** team completed the [first phase of decentralizing configuration parameters](https://github.com/input-output-hk/mithril/issues/2692) and made good progress on implementing a simple aggregator discovery mechanism. Additionally, they kept working on the [SNARK-friendly STM library](https://github.com/input-output-hk/mithril/issues/2763) by designing its architecture, implementing the Schnorr signature scheme, refactoring error handling, and [experimenting with a Jubjub](https://github.com/input-output-hk/mithril/issues/2772) curve implementation in the BLST library.

Finally, they fixed some bugs, made enhancements to the CI, and continued improving the protocol security page.

### CATALYST

Community feedback remains key for the **Project Catalyst** roadmap, ensuring that progress stays aligned with real needs across the ecosystem.

On November 20, Catalyst will be released ‘Milestone Module’ updates based on insights from the community to deliver focused enhancements to core functionality and governance processes. 

A major highlight of this release is the set of meaningful upgrades to the ‘Milestone Module’, highlighting commitment to transparency and accountability: 

*   A new homepage
    
*   ‘New Incoming Message’ notification
    
*   Better search and sort
    
*   Hidden reviews for unbiased feedback
    
*   Milestone and proof of achievement (PoA) templates
    
*   Mandatory approval checkboxes
    
*   Resubmission tracking
    
*   New tools for funded projects.
    

All updates will be shared on the [Catalyst documentation site](https://docs.projectcatalyst.io/).  
Catch up on the latest news during the recent [Project Catalyst town hall #216](https://youtube.com/live/6BQ_oYtCsP8?feature=share), or browse through the [slide deck](https://docs.google.com/presentation/d/1cJZ5PUwf4oLmy0f-2rNfwn5jhwNVHhASpFg-ANGHv9E/edit?usp=sharing). 

###   
EDUCATION

The **education** team is reflecting on the recent successful Cardano Developer course and hackathon in Buenos Aires, Argentina.  

Work continues on the translations for Mastering Cardano in both Spanish and Japanese, and preparations are underway to launch the self-paced Cardano education program.

### ![](https://ucarecdn.com/21429d83-d984-438c-8704-74c6517d71e1/-/preview/-/format/auto/-/quality/smart/)  
  
コアテクノロジー

コアテクノロジーチームは`Cardano-node` v.10.5.2をリリースしました。これは、バグ修正アップデートで、ハッシュサイズの不整合と、周期的なチャーンメカニズムが十分な数のウォームピアを降格できず、アクティブピア間の長期的な多様性を低下させる、拡散ピア選択の不具合に対処しています。このネットワークの不具合は、多数のステークプールを持つマルチリージョンテストネットをオーケストレーションするためのツール\`[cardano-ignite](https://github.com/cardano-foundation/cardano-ignite)\`を使用して特定されました。

**警告：ステークプールオペレーターは、直ちにv.10.5.2にアップグレードしてください。**

**台帳**チームはDijkstra（ダイクストラ）期におけるネストされたトランザクションの[サブトランザクション](https://github.com/IntersectMBO/cardano-ledger/pull/5386)を定義しました。CDDLトランザクション仕様の重複を減らし、さらなる統合を進めています。Dijkstraでは、ワイヤー上の重複する要素を拒否するようにシリアル化を厳格化しました。これは以前の開発期から積み残されている課題でした。

[非推奨の機能を削除](https://github.com/IntersectMBO/cardano-ledger/pull/5376)し、台帳ステートのメモリー使用量を減らし、エポック境界でのパフォーマンスを改善し、[コンフォーマンステストの不具合を解決](https://github.com/IntersectMBO/cardano-ledger/pull/5423)しました。

### スマートコントラクト

**Plutus**チームは、来る開発期内ハードフォークの最終作業を行っています。4つの`Value`プリミティブのコストを確定し、現在残りの3つを進めています。最後にアクティベーションが予定されているすべての新機能のエンドツーエンドテストを実施する予定です。UPLC 2025イベントに関するブログ記事も準備中です。また、`Data`に関するケース分析のサポートなど、他の作業も続けています。

### ウォレットとサービス

**Lace**チームは[Lace v.1.31](https://x.com/lace_io/status/1990827873939407224?s=46&t=KH7Ar_LX82ElBgTR404n8g)をリリースしました。今回の更新では、SteelSwapを介したCardanoネイティブ資産のウォレット内トークンスワップや、段階的なロールアウトによるビットコインウォレットの一般利用を可能にし、APIリクエストのバッチ処理を最適化して応答性を向上させました。詳細情報、セットアップガイダンス、役立つ情報については、[Lace v1.31リリース記事](https://www.lace.io/blog/1-31-release)を参照してください。

### スケーリング

**Mithril**チームは、[設定パラメーター分散化の第1フェーズ](https://github.com/input-output-hk/mithril/issues/2692)を完了し、単純なアグリゲーター検出メカニズムの実装を進めました。[SNARKに適した](https://github.com/input-output-hk/mithril/issues/2763)STMライブラリーのアーキテクチャー設計、Schnorr署名スキームの実装、エラー処理のリファクタリング、BLSTライブラリーにおけるJubjub曲線実装の実験などに関する作業も継続しました。

バグを修正し、CIを強化し、プロトコルセキュリティページの改善を続けました。

### Catalyst

Communityのフィードバックは、**Project Catalyst**のロードマップに欠かせません。これは、エコシステム全体の真のニーズに沿って進むために極めて重要です。

11月20日、Catalystはコミュニティからの洞察に基づいた「マイルストーンモジュール」のアップデートをリリースしました。これは、コア機能とガバナンスプロセスに焦点を当てた強化を提供するものです。 

今回のリリースの主なハイライトは、透明性と説明責任への取り組みを強調した、「マイルストーンモジュール」の有意義な一連のアップグレードです。 

*   新しいホームページ
    
*   「新しい着信メッセージ」通知
    
*   検索と並べ替えの改良
    
*   偏りのないフィードバックのためのレビュー非表示
    
*   マイルストーンと達成証明（PoA）テンプレート
    
*   必須承認チェックボックス
    
*   再提出の追跡
    
*   資金提供を受けたプロジェクトのための新ツール
    

すべてのアップデートは[Catalyst Documentationサイト](https://docs.projectcatalyst.io/)で共有されます。

先日行われた[第216回Project Catalystタウンホール](https://youtube.com/live/6BQ_oYtCsP8?feature=share)や[スライドデッキ](https://docs.google.com/presentation/d/1cJZ5PUwf4oLmy0f-2rNfwn5jhwNVHhASpFg-ANGHv9E/edit?usp=sharing)で最新情報を確認してください。 

###   
教育

**教育**チームはアルゼンチンのブエノスアイレスで成功を収めたCardano開発者コースとハッカソンを振り返っています。  

『Mastering Cardano』は日本語とスペイン語版の翻訳を続けているほか、自習型のCardano教育プログラムの開始準備を進めています。
