---
title: Weekly development report as of 2025-07-11
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/704cf1f3-ed69-4a6d-bd58-10a2be89b2c7/
image_text: Weekly development report as of 2025-07-11
---

### ECOSYSTEM UPDATES

Cardano continues to demonstrate consistent progress across multiple dimensions of its ecosystem. Currently, there are 2,005 projects actively building on the blockchain, while delegated wallets reached 1.33 million, reflecting steady staking participation. Transaction volume increased modestly, now totaling 111.26 million.

Cardano now supports 10.84 million native tokens across 217,780 distinct token policies, highlighting ongoing asset creation and deployment. Smart contracts also maintain solid growth, with 139,225 Plutus scripts and 7,888 Aiken scripts live on the network. Governance activity is stable, with 1,378 DReps (including 975 active representatives) contributing to decentralization. Developer engagement remains robust, shown by 306 GitHub commits, marking an 18% increase in technical contributions since last week.

In other news:

*   [The Cardano Foundation](https://x.com/Cardano_CF/status/1942569390282584380) has launched Reeve, an open-source tool designed for on-chain financial reporting, and also published their 2024 [Financial Insights Report](https://x.com/Cardano_CF/status/1943309576691990904) using this new solution
    
*   [Intersect](https://x.com/IntersectMBO/status/1942532537911304195) announced a partnership with SundaeSwap to manage treasury oversight for the upcoming 39 withdrawal governance actions
    
*   [Input Output](https://iohk.io/en/newsroom/input-output-and-txpipe-partner-to-accelerate-developer-growth-in-argentina-1) has partnered with TxPipe to accelerate developer community growth in Argentina, strengthening regional blockchain innovation
    
*   The [Ouroboros Leios](https://iohk.io/en/newsroom/input-output-and-txpipe-partner-to-accelerate-developer-growth-in-argentina-1) research has been accepted at Crypto 2025, a highly prestigious cryptography conference, showcasing Cardano’s ongoing research excellence
    
*   [Vespr Wallet](https://x.com/vesprwallet/status/1942935270887944458) has open-sourced its SDKs, providing developers with powerful tools to seamlessly integrate wallets into their decentralized applications (DApps).
    

### CORE TECHNOLOGY

This week, the **consensus** team introduced [mempool optimizations](https://github.com/IntersectMBO/ouroboros-consensus/pull/1565), fixed a [bug in the Byron deserialization of ledger tables](https://github.com/IntersectMBO/ouroboros-consensus/pull/1577), and added [node-to-node CDDL specifications](https://github.com/IntersectMBO/ouroboros-consensus/pull/1571). They also started work on extending the Haskell simulator to support individual transaction additions and implemented support for [taking ledger snapshots at predictable intervals](https://github.com/IntersectMBO/ouroboros-consensus/pull/1575).

### SMART CONTRACTS

This week, the **Plutus Core** team made significant progress, merging [support for case analysis on booleans](https://github.com/IntersectMBO/plutus/pull/7029) and integers, and initiating its extension to [built-in lists](https://github.com/IntersectMBO/plutus/pull/7188). They also refined the Plutus Core specification by rectifying [constructor tag encodings](https://github.com/IntersectMBO/plutus/pull/7154) and released a new tool to output cost model parameters in a node-compatible format, streamlining the integration of new primitives and updates.

In the Plinth project, the team introduced and merged a new compiler optimization, pushing `force` nodes into `case` branches. They also [reimplemented the linear vesting script](https://github.com/IntersectMBO/plutus/pull/7166) in `plutus-benchmarks` to benchmark compiler performance and pinpoint further optimization opportunities.

Finally, the formal methods team integrated the [plutus-metatheory package](https://github.com/IntersectMBO/plutus/pull/7144) into the CHaP release process, in preparation for the release of the compiler certifier alongside the Plinth compiler.

### SCALING

This week, the **Leios** team demonstrated the 1,000 TPS experiment, validating the protocol’s ability to operate at extremely high throughput levels. They also completed a comprehensive attack surface analysis and made substantial improvements to simulation and verification tools. Read this [report](https://leios.cardano-scaling.org/news/) for more details.

The **Mithril** team continued implementing the mock DMQ node to support end-to-end testing of decentralized signature diffusion and worked on certificate chain synchronization in the follower aggregator. They also completed era transition support in the clients, enabled [Linux ARM binary](https://github.com/input-output-hk/mithril/issues/2178) support in the CI, and began preparing for the upgrade to Cardano node v.10.5.

Finally, they upgraded the repository to the [Rust 2024 edition](https://github.com/input-output-hk/mithril/issues/2582) and made progress refactoring the STM cryptographic library.  
  
The **Hydra** team has been focused on supporting Midnight Glacier Drop, specifically by fixing a bug related to replaying large state files. They are preparing to include this fix in Hydra version 0.22.2. Additionally, the team is continuing to enhance the system's resilience during restarts, particularly when processing high transaction volumes.

### VOLTAIRE 

**Intersect** has developed a new [smart contract framework](https://www.intersectmbo.org/news/automating-accountability-cardanos-smart-contract-framework) to manage Cardano’s treasury securely, transparently, and auditably on-chain. It uses treasury and vendor contracts to hold funds and release them based on milestone delivery, with a multi-signature system ensuring Intersect initiates actions while an independent oversight committee verifies key steps. This prevents unilateral fund movement and strengthens trust, accountability, and scalability in treasury operations. The framework will serve as the destination for all treasury withdrawal governance actions, with 39 proposals set for submission in epoch 569/570. (Learn more about [Intersect's role as administrator](https://www.intersectmbo.org/news/intersects-role-as-budget-administrator-enabling-accountable-decentralization)).

### CATALYST

The **Catalyst** team has recently hosted town hall #196, nearing their 200th session. This event celebrated completed projects and showcased the ongoing progress of the ecosystem. If you missed it, the [recording is available here](https://www.youtube.com/live/2kevE4WrHqE?si=H-5r4Pw4Gw66ad2b).

Next week's town hall will feature a guest from the Draper University × Cardano Founder Residency. This five-week in-person program in Silicon Valley offers 20 early-stage Cardano startups entrepreneurial training, technical mentorship, and investor access. Mark your calendars.

[Register for the town hall here](https://bit.ly/catalyst-townhall) if you haven't already done so.

Finally, with Fund14 on the horizon, the Catalyst team has prepared a [launch guide](https://projectcatalyst.io/f14launchguide.pdf) to assist you.

### EDUCATION

This week, the **education** team has been focused on content and graphics for the Mastering Cardano book, as well as updates to the Cardano education program, including a new zero-knowledge (ZK) proofs module.  
  
![](https://ucarecdn.com/9d17ae62-200d-4f5d-bcbf-3bf74ff8f873/-/preview/-/format/auto/-/quality/smart/)  
エコシステム

Cardanoはエコシステムのさまざまな面で一貫した進歩を示し続けています。現在、ブロックチェーンで積極的に構築されているプロジェクトは2,005件、委任済みウォレットは133万に達し、安定したステーキング参加を反映しています。トランザクション数は現在1億1,1063万と、緩やかな上昇を見せています。

トークン化に関しては、プラットフォームは21万7,780の異なるトークンポリシーで1,084万のネイティブトークンをサポートしており、アセットの作成とデプロイが継続的に行われていることが示されています。スマートコントラクトも堅調な成長を維持しており、13万9,225のPlutusスクリプトと7,888のAikenスクリプトがネットワークで稼働しています。ガバナンス活動は安定しており、1,378人のDRep（うちアクティブDRepは975人）が分散化に貢献しています。開発者のエンゲージメントは引き続き強固であり、GitHubのコミット数は306件と、技術的貢献が18%増加していることが示されています。

その他のニュース：

*   [Cardano財団](https://x.com/Cardano_CF/status/1942569390282584380)がオンチェーン財務報告用に設計されたオープンソースツール、Reeveを立ち上げ、これを使用して2024年版[Financial Insights Report](https://x.com/Cardano_CF/status/1943309576691990904)を発行
    
*   [Intersect](https://x.com/IntersectMBO/status/1942532537911304195)は、今後予定されている39件の引き出しガバナンスアクションのトレジャリー監視管理のためにSundaeSwapとの提携を発表
    
*   [Input Output](https://iohk.io/jp/newsroom/input-output-and-txpipe-partner-to-accelerate-developer-growth-in-argentina-1)は、アルゼンチンでの開発者コミュニティの成長を加速し、地域のブロックチェーンイノベーションを強化するためにTxPipeと提携
    
*   [Ouroboros Leios](https://iohk.io/en/blog/posts/2025/06/27/leios-takes-the-stage-at-crypto-2025-1/)の研究が非常に権威のある暗号会議Crypto 2025に採択され、Cardanoの現在の卓越した研究を紹介
    
*   [Vespr Wallet](https://x.com/vesprwallet/status/1942935270887944458)はSDKをオープンソース化し、ウォレットを分散型アプリケーションにシームレスに統合する強力なツールを開発者に提供
    

### コアテクノロジー

**コンセンサス**チームは[メモリープールの最適化](https://github.com/IntersectMBO/ouroboros-consensus/pull/1565)を導入し、[Byron台帳テーブルの逆シリアル化におけるバグ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1577)を修正し、[ノードツーノードCDDL仕様](https://github.com/IntersectMBO/ouroboros-consensus/pull/1571)を追加しました。個々のトランザクション追加をサポートするためのHaskellシミュレーターの拡張作業を開始し、[予測可能な間隔で台帳スナップショットを実行](https://github.com/IntersectMBO/ouroboros-consensus/pull/1575)するためのサポートを実装しました。

### スマートコントラクト

Plutus Coreチームは、整数型と[ブール型のケース分析のサポート](https://github.com/IntersectMBO/plutus/pull/7029)をマージし、[組み込みリスト](https://github.com/IntersectMBO/plutus/pull/7188)への拡張を開始しました。[コンストラクタータグのエンコーディング](https://github.com/IntersectMBO/plutus/pull/7154)を修正してPlutus Core仕様を改良し、コストモデルパラメーターをノード互換形式で出力する新しいツールをリリースし、新しいプリミティブと更新の統合を合理化しました。

Plinthプロジェクトでは、新しいコンパイラー最適化を導入してマージし、`force`ノードを`case`ブランチにプッシュしました。コンパイラーパフォーマンスのベンチマークを実施し、さらなる最適化の機会を特定するために、`plutus-benchmarks`に[リニアべスティングスクリプトを再実装](https://github.com/IntersectMBO/plutus/pull/7166)しました。

形式手法チームは、Plinthコンパイラーと並行してコンパイラー認証プログラムをリリースする準備として、[plutus-metatheoryパッケージ](https://github.com/IntersectMBO/plutus/pull/7144)をCHAPリリースプロセスに統合しました。

### スケーリング

**Leios**チームは1000 TPS実験を行い、非常に高いスループットレベルで動作するプロトコルの能力を検証しました。包括的な攻撃対象領域の分析を完了し、シミュレーションと検証ツールを大幅に改善しました。詳細は、この[レポート](https://leios.cardano-scaling.org/news/)をご覧ください。

  
**Mithril**チームは、分散型署名拡散のエンドツーエンドテストをサポートするために模擬DMQノードの実装を続け、フォロワーアグリゲーターで証明書チェーン同期に取り組みました。クライアントで開発期移行サポートを完了し、CIでは[Linux ARMバイナリー](https://github.com/input-output-hk/mithril/issues/2178)サポートを有効にし、Cardanoノードv.10.5へのアップグレードの準備を始めました。

リポジトリを[Rust 2024エディション](https://github.com/input-output-hk/mithril/issues/2582)へアップグレードし、STM暗号ライブラリーのリファクタリングを進めました。  
  
**Hydra**チームは、Midnight Glacierドロップのサポート、特に大きなステータスファイルの再生に関連するバグの修正に集中しました。この修正はHydraバージョン0.22.2に含める予定です。再起動時、特に大量のトランザクションを処理するという状況下での再起動時のシステム回復力の強化も続けています。

### VOLTAIRE 

**Intersect**は、Cardanoトレジャリーをオンチェーンで安全に透明性を保ちながら監査可能な形で管理するための新しい[スマートコントラクトフレームワーク](https://www.intersectmbo.org/news/automating-accountability-cardanos-smart-contract-framework)を開発しました。資金を保有し、マイルストンデリバリーに基づいてそれらをリリースするためにトレジャリーコントラクトとベンダーコントラクトを使用し、Intersectがアクションを開始し、独立した監視委員会が重要な手順を検証することを保証するマルチシグシステムを備えています。これは一方的な資金移動を防ぎ、トレジャリー業務における信頼、説明責任、スケーラビリティを強化します。このフレームワークは、すべてのトレジャリー引き出しガバナンスアクションが向かう先として機能し、39の提案がエポック569/570で提出される予定です。（[Intersectの管理者としての役割](https://www.intersectmbo.org/news/intersects-role-as-budget-administrator-enabling-accountable-decentralization)について詳細をご覧ください）。

### Catalyst 

**Catalyst**チームは第196回タウンホールを開催しました。200回目までもうまもなくです。このイベントでは完成したプロジェクトを祝い、現在進行中のエコシステムの進歩が紹介されました。見逃した場合でも、[ここ](https://www.youtube.com/live/2kevE4WrHqE?si=H-5r4Pw4Gw66ad2b)で録画が視聴できます。

来週のタウンホールでは、ドレイパー大学×Cardano Founder Residencyからゲストが登場します。シリコンバレーで行われるこの5週間の対面プログラムでは、初期段階にある20のCardanoスタートアップ企業の起業トレーニング、技術的な指導、投資家へのアクセスが提供されます。カレンダーに印を付けてください。

まだタウンホールへの登録が済んでいない場合は、[ここ](https://bit.ly/catalyst-townhall)から登録できます。

Fund14が目前に迫った今、Catalystチームは役に立つ[ローンチガイド](https://projectcatalyst.io/f14launchguide.pdf)を準備しました。

教育

**教育**チームは、書籍Mastering Cardanoのコンテンツとグラフィックに焦点を当てた他、新しいゼロ知識（ZK）証明モジュールなど、Cardano教育プログラムの更新も行いました。
