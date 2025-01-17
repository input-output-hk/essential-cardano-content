---
title: Weekly development report as of 2025-01-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/0284acbc-4ec9-4fb0-b346-3f17c8bb8f1d/
image_text: Weekly development report as of 2025-01-17
---

### CORE TECHNOLOGY

Over the past few weeks, the **ledger** team focused on polishing Conway ledger features in preparation for this month’s Plomin hard fork and continued testing to increase confidence in this transition. As part of this effort, the team discovered and resolved several bugs. All stake pool operators (SPOs) are encouraged to upgrade to Cardano node v.10.1.4, which includes all these fixes. 

The team also addressed technical debt by [removing crypto parameterization](https://github.com/IntersectMBO/cardano-ledger/pull/4788) from every era definition in the ledger, simplifying the codebase, and enabling a switch to a newer GHC compiler version that addresses a known performance regression. Another major change involved updating how UTXO serialization occurs within the ledger state, mitigating missed blocks due to garbage collection during ledger snapshot creation, and providing a substantial performance boost for UTXO-HD. 

Additionally, the team released and integrated an updated cryptographic library that had been undergoing revisions for the past few years. They also finalized work on defining CDDL specifications in Haskell — now fully generated for every era — improving confidence in correctness through additional type checking and reducing duplication and complexity by eliminating manual serialization definitions.

### WALLETS AND SERVICES 

The **Lace** team released **Lace v.1.18.2**, which includes the following updates and improvements:

*   **Crash recovery**. Enhanced recovery methods have been implemented to reduce wallet crashes.
    
*   [CIP-95](https://cips.cardano.org/cip/CIP-0095) `signData` **bug fix**. Interactions are now smoother for decentralized applications (DApps) using the `signData` method.
    
*   **Blockfrost migration**. Progress continues toward making Blockfrost the primary wallet data provider.
    
*   **Performance boost**. There are improvements in account bootstrapping and application startup, resulting in faster performance and reduced resource demands.
    

### SCALING

This week, the **Mithril** team activated the certification of the [Cardano stake distribution](https://github.com/input-output-hk/mithril/issues/2218) for the mainnet and upgraded all Mithril networks to Cardano node v.10.1.4. They also continued implementing the incremental certification of the Cardano database. They completed the artifacts creation and synchronization engine, [completed the digests route](https://github.com/input-output-hk/mithril/issues/2174) for the incremental Cardano database in the aggregator REST API, and started working on the cloud synchronization of the artifacts.

Finally, they enhanced the [golden tests implementations](https://github.com/input-output-hk/mithril/issues/2217) of the messages, worked on the split of the mithril-common crate, and investigated a bug in the client on Windows Power Shell.

**Ouroboros Leios** is another research and development project that the IO teams are working on. Leios aims to increase Cardano’s throughput by optimizing available network resources and enabling faster transaction processing and confirmation. 

Last week, the Leios team focused on enhancing the Rust simulation and updating the cost dashboard. They added a basic simulation for CPU usage and latency, configured nodes with four simulated cores, and incorporated ‘lottery won’ events to track CPU processing. The team worked on the DeltaQ workstream, updating it with new MIN/MAX combinators for best- and worst-case results. Cost dashboard improvements include updated CPU costs, revised input/output operations per second values, and adjustments to the endorser block rate. 

Additionally, the team benchmarked BLS signatures, provided CPU time estimates, and continued refining technical report sections on BLS and MUSEN certificates. 

Finally, they progressed with sortition analysis for input and endorser blocks, contributing findings to the draft of the technical report.

### VOLTAIRE 

Voting is currently in progress for the approval of the Plomin hard fork, which is the second hard fork in the Chang upgrade. The constitution sets three thresholds for approval:

*   Block-producing nodes: 85% must be operating the required Cardano node (v.10.1.4).
    
*   SPOs: 51% approval required.
    
*   Interim constitutional committee: 66.7% approval required.
    

**All SPOs are encouraged to vote, even if they choose to abstain. If they take no action, their vote will count as ‘NO’. However, if they abstain, that vote will be excluded from the total required for approval.** 

For more details, please refer to the [latest Plomin hard fork bulletin](https://x.com/IntersectMBO/status/1879839473422459009).

The governance action for the Plomin hard fork will expire on January 24 (end of epoch 535).

### CATALYST

**Project Catalyst** town halls are on break until January 22, when the Fund13 retrospective session is scheduled. In the meantime, onboarding for Fund13 winners is progressing steadily. Currently, 93% of onboarding forms have been completed, 85% of milestone statements have been submitted, and 45% of those have already been approved. The technical development of the Catalyst stack is also moving forward. Furthermore, the first primary funding distribution for 2025 is expected to take place this week, as Catalyst resumes its regular cadence for the new year.

### EDUCATION

This week, the **education** team is planning for the next Haskell course and updating the Cardano Developer course to incorporate recent Aiken development updates. They are also outlining their plans for Midnight education.  
  
![](https://ucarecdn.com/eb1becbb-92f6-4398-a654-006d94829bf5/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

この数週間、**台帳**チームは、今月予定されているPlominハードフォークに備えてConway台帳の機能の向上に焦点を当て、この遷移の信頼性を高めるためにテストを続けてきました。この取り組みの一環で、バグが発見され、修正されました。すべてのステークプールオペレーター（SPO）は、修正がすべて含まれているCardanoノードv.10.1.4へのアップグレードが推奨されます。 

台帳の各期定義から[暗号パラメーター化を削除](https://github.com/IntersectMBO/cardano-ledger/pull/4788)し、コードベースを簡素化して技術負債にも対処し、既知のパフォーマンス低下に対処する新しいGHCコンパイラーバージョンへの切り替えを可能にしました。もう1つの大きな変更には、台帳ステータス内でUTXOのシリアル化がどのように行われるかの更新、台帳スナップショット作成中のガベージコレクションによる見逃しブロックの軽減、UTXO-HDのパフォーマンスの大幅な向上が関係します。 

更新版暗号ライブラリーをリリース、統合しました。これは、過去数年間改訂を行っていたものです。HaskellでCDDL仕様を定義する作業も完了し（現在は全期対応で完全生成）、型検査を追加することで正確性に対する信頼性を向上させ、手動のシリアル化定義を削除して重複と複雑さを軽減しました。

### ウォレットとサービス 

**Lace**チームは**Lace** **v.1.18.2を**リリースしました。これには、以下の改良が含まれます。

*   **クラッシュからの復旧**：強化した復旧メソッドを実装してウォレットのクラッシュを軽減。
    
*   [CIP-95](https://cips.cardano.org/cip/CIP-0095) **signDataバグを修正**：signDataメソッドを使用して分散型アプリケーション（DApp）のインタラクションをよりスムーズに。
    
*   **Blockfrostの移行**：Blockfrostを主要ウォレットのデータプロバイダーにする取り組みは継続。
    
*   **パフォーマンスの向上**：アカウントのブートストラップとアプリケーションの起動改善により、パフォーマンスが向上、リソース需要が減少。  
    

### スケーリング

**Mithril**チームはメインネット向けの[Cardanoステーク分布](https://github.com/input-output-hk/mithril/issues/2218)の認証を有効化し、すべてのMithrilネットワークをCardanoノードv.10.1.4にアップグレードしました。Cardanoデータベースの増分認証の実装作業も継続しました。アーティファクトの作成および同期エンジンを仕上げ、アグリゲーターREST APIで増分Cardanoデータベースの[ダイジェストルートを完了](https://github.com/input-output-hk/mithril/issues/2174)し、アーティファクトのクラウド同期への取り組みを始めました。

メッセージの[ゴールデンテスト実装](https://github.com/input-output-hk/mithril/issues/2217)を強化し、mithril-commonクレートの分割に取り組み、Windows Power Shell上のクライアントのバグを調査しました。

**Ouroboros Leios**は、IOチームが取り組んでいるもう1つの研究開発プロジェクトです。Leiosは、利用可能なネットワークリソースを最適化し、トランザクション処理と承認の高速化を可能にすることで、Cardanoのスループットを向上させることを目指しています。 

先週、LeiosチームはRustシミュレーションの強化とコストダッシュボードの更新に注力しました。CPU使用率とレイテンシーの基本的なシミュレーションを追加し、4つのシミュレートされたコアでノードを設定し、CPU処理を追跡するための「抽選」イベントを組み込みました。DeltaQワークストリームに取り組み、最良および最悪の結果を得るために新しいMIN/MAXコンビネーターで更新しました。コストダッシュボードの改良には、CPUコストの更新、1秒あたりの入出力操作の値の修正、エンドーサーのブロックレートの調整が含まれます。 

BLS署名のベンチマークを行い、CPU時間の見積もりを提供し、BLSとMUSENの証明書に関する技術報告セクションの改訂を続けました。 

インプットブロックとエンドーサーブロックの区分分析を進め、その結果で技術報告書の草案に貢献しました。

### VOLTAIRE 

Changアップグレードの2回目のハードフォーク、Plominハードフォークの承認に向けた投票が進行中です。憲法は承認に3つの閾値を設定しています。

*   ブロック生成ノード：85%が必要なCardanoノード（v.10.1.4）を稼働させていること
    
*   SPO：51%の承認が必要
    
*   暫定憲法委員会：66.7%の承認が必要
    

**すべてのSPOは、たとえ「棄権」を選択したとしても、投票することが奨励されます。何もしない場合、投票は「いいえ」でカウントされます。棄権の場合には、その投票は承認に必要な総数から除外されます。** 

詳細は、[Plominハードフォークの最新情報](https://x.com/IntersectMBO/status/1879839473422459009)を参照してください。

Plominハードフォークのガバナンスアクションは1月24日（エポック535の終了時）に期限切れとなります。

### CATALYST

**Project Catalyst**のタウンホールは、Fund13のレトロスペクティブが予定されている1月22日までお休みです。Fund13受賞者のオンボーディングは着実に進んでいます。現在、オンボーディングフォームの93%が完了し、マイルストンステートメントの85%が提出され、そのうち45%がすでに承認されています。Catalystスタックの技術開発も進んでいます。Catalystが今年も定期的なケイデンスを再開するにあたり、今週2025年最初の資金分配が行われる予定です。

### 教育

**教育**チームは次のHaskellコースを計画しています。最近のAiken開発の更新を組み込んでCardano開発者コースを更新しています。Midnightの教育計画の概要を作成しています。
