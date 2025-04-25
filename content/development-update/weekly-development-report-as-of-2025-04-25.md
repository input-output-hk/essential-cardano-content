---
title: Weekly development report as of 2025-04-25
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/7831b670-7292-4d42-8094-7312dde8fee3/
image_text: Weekly development report as of 2025-04-25
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to grow steadily, as evidenced by several key indicators. The number of projects building on the network has reached 1,993.

Token activity also remains strong, with 10.77 million native tokens issued and 212,489 token policies, a 0.22% increase since the last update. Smart contract adoption continues to grow, with 131,015 Plutus scripts and 6,492 Aiken scripts now deployed. The total number of transactions processed on the network stands at 108.73 million. 

On the governance side, 1,261 DReps are registered, including 935 actively participating, reflecting a 0.49% increase since last week in decentralized representation.

In other news:

*   DRep delegation is now live on [Yoroi Wallet](https://x.com/YoroiWallet/status/1912883792148381888), allowing users to participate in Cardano governance directly
    
*   [Kinka](https://x.com/kinka_gold/status/1914620812994470237) has officially minted the first batch of XNK tokens on Cardano, supported by Emurgo
    
*   [Emurgo](https://x.com/EMURGOLabs/status/1914258501339079155) announced a partnership with Anzens Official and Encryptus to accelerate USDA adoption
    
*   [ChadSwap](https://x.com/charles_thechad/status/1915129466243907988) is now live, offering peer-to-peer swaps with zero taker fees.
    

### CORE TECHNOLOGY

This week, the **ledger** team addressed technical debt to prepare for future era definitions, improved CI and tests, and added a duplicate-transaction check to the `MEMPOOL` rule to short-circuit processing when duplicates are detected. Additionally, the team completed integration work for the upcoming node v.10.3.0 release.

The **core technology** teams released node [v.10.3.1 pre-release](https://github.com/IntersectMBO/cardano-node/releases/tag/10.3.1), which primarily focuses on performance improvements, increasing execution speed, reducing memory usage, and providing faster synchronization times. Additionally, it offers several enhancements to the new tracing system, and provides support for lightweight checkpointing, which is necessary to enable `ouroboros-genesis`.

### SCALING

This week, the **Mithril** team focused on [signing ancillary files](https://github.com/input-output-hk/mithril/issues/2362) in the Cardano database snapshots using an IOG key and on the proof of concept for the Mithril/ALBA aggregation proof system. They also worked on simplifying the aggregator’s command configuration and dependency injection. Additionally, they continued to refactor the [STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369) to improve its clarity.

Finally, the team investigated a communication issue in the signer when the attached Cardano node is restarted, and worked on accelerating the [compilation time of the Rust nodes](https://github.com/input-output-hk/mithril/issues/2430) and libraries.

The **Leios** team made progress on both the Haskell and Rust simulations, refined cost estimates, and completed detailed analyses of the transaction lifecycle and Full Leios runs. The Haskell simulation now includes a first draft of new mini-protocols for Leios diffusion, covering IB/EB relays, vote relays, fetch protocols, and a Catch-Up protocol for older blocks. The `short-leios` command was also renamed to `leios` (with an alias retained for compatibility). On the Rust side, the shared trace format now conforms, a voting-logic bug has been fixed, and visualizations have been updated for smaller trace files. Additionally, the team made revisions to the [cost-dashboard](https://leios.cardano-scaling.org/cost-estimator/), worked on the [analysis of the transaction lifecycle, and](https://github.com/input-output-hk/ouroboros-leios/blob/leios-2025w17/analysis/tx-to-block.ipynb) Full Leios simulations, covering 648 scenarios of Full and Short Leios implementations with varied parameters. 

See this [development update](https://leios.cardano-scaling.org/news/2025/04/14/weekly-progress-summary) for more details.

### VOLTAIRE 

Voting for Intersect committee seats is in full swing, ending May 7. The participation level has already passed the required threshold.

More X Spaces are scheduled to allow candidates to promote themselves:

*   April 29, 4 pm UTC – [AMA/Applicants Spotlight](https://lu.ma/z47a2l41)
    
*   May 1, noon UTC – [AMA/Applicants Spotlight](https://lu.ma/5pa8dofe)
    
*   May 6, 4 pm UTC –  [AMA/Applicants Spotlight](https://lu.ma/5kx1vlyw) 
    

(Each link shows the event in your local time zone and includes a registration button – bookmark them!)

### CATALYST

This week featured the usual [X Town Hall](https://x.com/i/spaces/1jMKgkrdAYMKL), with updates and open community engagement. A [Japanese version](https://projectcatalyst.io/reports) of the Horizons report is now live. Stay tuned for new Catalyst content, including ‘Under The Hood’ and ‘Before and After’. Technical development continues toward the full transition from IdeaScale.

### EDUCATION

This week, the **education** team continues planning for May’s Cardano Days sessions as part of the Cardano community Azteca 2025 event in Mexico and at the [National Technical University of Athens](https://www.ntua.gr/en/) in Athens, Greece. They are also creating content for various modules of the Midnight Pioneer program and making further updates to the Cardano developer course.  
  
![](https://ucarecdn.com/afe30ade-9d0c-4aff-b0d3-dae6992582ec/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは堅調な成長を続けており、いくつかの重要な指標がそれを証明しています。ネットワークで構築されているプロジェクト数は1,993に達しました。

トークンアクティビティも依然活発であり、前回の更新情報から0.22%増の1,077万のネイティブトークン、212,489のトークンポリシーが発行されました。スマートコントラクトも増加を続け、現在13万1,015のPlutusスクリプトと6,492のAikenスクリプトがデプロイされています。ネットワークで処理されたトランザクションの総数は1億873万です。

ガバナンス面では、1,261のDRepが登録され、そのうち935がアクティブです。これは分散型代表が先週から0.49%増加したことを示しています。

### その他のニュース：

*    [Yoroiウォレット](https://x.com/YoroiWallet/status/1912883792148381888)でDRep委任機能導入によりユーザーによるCardanoガバナンスへの直接参加が可能に
    
*    [Kinka](https://x.com/kinka_gold/status/1914620812994470237)がEmurgoのサポートを受けて、CardanoでXNKトークンの初回バッチを公式にミント
    
*    [Emurgo](https://x.com/EMURGOLabs/status/1914258501339079155)がAnzens OfficialおよびEncryptusとの提携を発表し、USDAの普及を加速
    
*   [ChadSwap](https://x.com/charles_thechad/status/1915129466243907988)公開。テイカー手数料ゼロでピアツーピアのスワップを提供
    

### コアテクノロジー

**台帳**チームは、将来の開発期定義に備えて技術負債に対処し、CIとテストを改良し、重複トランザクションチェックを`MEMPOOOL`ルールに追加して重複が検知された際に処理を打ち切れるようにしました。予定されているノードv.10.3.0リリースは統合作業を完了しました。

**コアテクノロジー**チームはノード[v.10.3.1 pre-release](https://github.com/IntersectMBO/cardano-node/releases/tag/10.3.1)をリリースしました。これは、パフォーマンスと実行速度の向上、メモリー使用量の削減、同期時間の高速化に主眼を置いています。新しいトレースシステムにも拡張機能を提供し、`ouroboros-genesis`を有効にするために必要な軽量のチェックポイントもサポートしています。

### スケーリング

**Mithril**チームは、IOG鍵を使用したCardanoデータベーススナップショット内の[補助ファイルへの署名](https://github.com/input-output-hk/mithril/issues/2362)と、Mithril/ALBAアグリゲーション証明システムの概念実証に焦点を当てました。アグリゲーターのコマンド設定と依存性の注入の簡素化にも取り組みました。[STM暗号ライブラリー](https://github.com/input-output-hk/mithril/issues/2369)の明瞭さを高めるリファクタリングを続けました。

接続されたCardanoノードが再起動されたときの署名者の通信問題を調査し、ライブラリーと[Rustノードのコンパイル時間](https://github.com/input-output-hk/mithril/issues/2430)の短縮に取り組みました。

**Leios**チームはHaskellとRustの両方のシミュレーションを進め、コスト見積もりの精度を上げ、トランザクションのライフサイクルとLeiosのフル実行の詳細な分析を完了しました。Haskellシミュレーションには、Leios拡散のための新しいミニプロトコルの最初のドラフトが含まれており、IB/EBリレー、投票リレー、フェッチプロトコル、古いブロックのキャッチアッププロトコルをカバーしています。`short-leios`コマンドも`leios`に名前を変更しました（互換性のためにエイリアスは保持）。Rustでは、共有トレースフォーマットを準拠させ、投票ロジックのバグを修正し、小さなトレースファイル向けに視覚化を更新しました。[コストダッシュボード](https://leios.cardano-scaling.org/cost-estimator/)の改訂、[トランザクションライフサイクルの分析](https://github.com/input-output-hk/ouroboros-leios/blob/leios-2025w17/analysis/tx-to-block.ipynb) 、Leiosのフルシミュレーションに取り組み、Leiosのフル実装とショート実装でさまざまなパラメーターを使った648のシナリオをカバーしました。 

### 詳細は、[開発更新情報](https://leios.cardano-scaling.org/news/2025/04/14/weekly-progress-summary)を参照してください。

### VOLTAIRE 

Intersect委員会選挙の投票は活況を呈しており、締切りは5月7日です。参加レベルは必要なしきい値をすでに超えています。

候補者が自己アピールできるように、Xスペースが予定されています。

*   4月29日16:00（UTC）- [AMA/候補者スポットライト](https://lu.ma/z47a2l41)
    
*   5月1日12:00（UTC）- [AMA/候補者スポットライト](https://lu.ma/5pa8dofe)
    
*   5月6日16:00（UTC）- [AMA/候補者スポットライト](https://lu.ma/5kx1vlyw)
    

（各リンク先には登録ボタンがあり、ローカルタイムでイベントが表示されます。ぜひブックマークしてください）

### CATALYST

今週は、通常の[Xタウンホール](https://x.com/i/spaces/1jMKgkrdAYMKL)が開催され、最新情報が共有され、コミュニティとのオープンな交流が持たれました。Horizonsレポートの[日本語版](https://projectcatalyst.io/reports)が公開されました。『Under the Hood』や『Before and After』など、新しいCatalystコンテンツに注目してください。IdeaScaleからの完全な移行に向けて技術開発が続けられています。

### 教育

**教育**チームは、来月メキシコのCardanoコミュニティによるAzteca 2025イベントとギリシャの[アテネ国立工科大学](https://www.ntua.gr/en/)でのイベントの一環として5月に開催される、Cardano Daysセッションの企画を続けています。Midnightパイオニアプログラムのさまざまなモジュールのコンテンツを作成している他、Cardano開発者コースのさらなる更新も行っています。
