---
title: Weekly development report as of 2025-02-07
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/45be9d27-822d-40e7-97e0-149fb3f8e43c/
image_text: Weekly development report as of 2025-02-07
---

### CORE TECHNOLOGY

The **performance and tracing** team released new benchmarks and performance baselines for node v.10.2 for UTXO-HD, the new Glasgow Haskell Compiler (GHC), and Genesis, including benchmarks for a 'Periodic tracer'. They also labeled threads throughout the node to improve trace clarity and fixed a race condition in the `ekg-wai` monitoring dependency. On infrastructure, the Haskell profile definition successfully passed testing and is ready for merging. The C library for trace forwarding reached the prototype stage, and the latest updates to the [developer portal](https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/cardano-tracer) are ready for publication.

The **consensus** team began drafting [pull requests to remove EBBs from the historical chain](https://github.com/cardano-foundation/CIPs/pull/974) and [address scenarios with low participation](https://github.com/cardano-foundation/CIPs/pull/982). They identified [unlabeled threads in the Cardano node](https://github.com/IntersectMBO/cardano-node/issues/6086) and are adding missing labels to enhance debugging efforts. A run of the UTXO-HD V2 `InMemory` cluster revealed a regression in mempool snapshotting, which is now under investigation.

The team also fixed the [block replay tracer](https://github.com/IntersectMBO/cardano-node/pull/6091) in the new tracing system and [adapted UTXO-HD to utilize forward-deserializable TxOuts](https://github.com/IntersectMBO/ouroboros-consensus/pull/1360). They also merged upstream changes, enabling the new `QueryStakePoolDefaultVote`. Additionally, they integrated changes from `LocalTxMonitor` into `network-protocols` as a preliminary step toward expanded transaction size reporting. 

Finally, the team completed a script to catalog consensus symbols in downstream packages, contributing to the Cardano blueprint initiative.

### SMART CONTRACTS

The **Plutus** team is finalizing several items related to Plinth (formerly known as Plutus Tx). This includes a new logo, an introductory blog post, a more efficient data-encoded script context API, and a user guide to help migrate scripts to the new API. They are also actively working on new primitives and language constructs that will be introduced at the hard fork following Plomin.

### SCALING

The **Hydra** team has released [Hydra v.0.20.0](https://github.com/cardano-scaling/hydra/releases/tag/0.20.0), which includes [incremental commits](https://github.com/cardano-scaling/hydra/issues/199). They are focusing on enhancing memory usage and improving overall stability and resilience. Additionally, the team has introduced a [new project](https://github.com/orgs/cardano-scaling/projects/6) to track ongoing work, along with a [revised Hydra Head roadmap](https://github.com/orgs/cardano-scaling/projects/7).

In the future, they plan to continue working on [memory usage enhancements](https://github.com/cardano-scaling/hydra/issues/1618), complete support for [multiple versions in the Hydra explorer](https://github.com/cardano-scaling/hydra/issues/1282), develop an API command to clear pending transactions, and start implementing a new networking stack.

The **Mithril** team created the transaction to activate the switch to the next ‘Pythagoras’ Mithril era, which will occur at the transition to Cardano epoch 539. They also started [communicating the upcoming bump in the minimum version of](https://mithril.network/doc/dev-blog/2025/02/04/glibc-minimum-requirement-change) `glibc` required to run Mithril pre-built binaries on Linux.

The team continued implementing [incremental certification](https://github.com/input-output-hk/mithril/issues/2212) of the Cardano database, working on the client library, client CLI, and WASM client. They also began implementing monitoring and dashboarding. Additionally, they started refactoring the ‘mithril-common’ library and simplifying the dependency builder in the aggregator.

Finally, the team worked on dropping [support for pre-built binaries for macOS x64](https://github.com/input-output-hk/mithril/issues/2250) architecture and attempted to [fix some flakiness](https://github.com/input-output-hk/mithril/issues/2222) in end-to-end tests in the CI.

The **Leios** team has been experimenting with utilizing the [Fait Accompli](https://iohk.io/en/research/library/papers/fait-accompli-committee-selection-improving-the-size-security-tradeoff-of-stake-based-committees/) method following discussions with other IOG researchers and cryptographers. This approach helps reduce certificate sizes from over 75 kB to around 15 kB, significantly boosting Leios’ performance. It's beneficial that the research program can generate results like this ahead of specific applications like Leios, therefore the team are now exploring using Fait Accompli with ALBA.

The team also continued refining the Haskell and Rust simulations by standardizing the inputs, outputs, and event logging to improve comparability. They introduced uniform formats for [configuration parameters](https://github.com/input-output-hk/ouroboros-leios/blob/main/data/simulation/config.schema.json) and [network topology](https://github.com/input-output-hk/ouroboros-leios/blob/main/data/simulation/topology.d.ts), which enabled consistent operation of the Leios protocol. Additionally, they focused on logging identical simulation events to better align with the DeltaQ model and the executable specification, strengthening the use of formal methods.

In Haskell, the `short-leios` simulation now outputs diffusion latency data, supports various input block (IB) diffusion strategies (such as freshest-first or peer-order), and manages both the `Vote (Send)` and `Vote (Recv)` stages.

Meanwhile, the Rust simulation has introduced an ‘organic’ topology generator that better matches mainnet stake and relay distribution while considering real-world operator configurations. The team also produced a [report for January 2025](https://github.com/input-output-hk/ouroboros-leios/blob/main/delta_q/docs/Report%202025-01.md), outlining progress made since September 2024. 

### VOLTAIRE 

On Thursday, January 30, a significant milestone was reached in Cardano's **governance** journey. Intersect submitted a governance action to ratify the delegate-approved Cardano constitution on-chain. Since this submission, the activity of delegated representatives (DReps) has been outstanding, and the vote is rapidly moving towards ratification. This swift progress highlights the strong engagement of the community.

### CATALYST

This week in **Catalyst**, the onboarding for Fund13 continues to progress smoothly, and the second round of town hall retro sessions has concluded. Additional updates on upcoming events will be announced soon, maintaining momentum for community engagement. Meanwhile, the technical development of the Catalyst platform remains a priority, streamlining the transition as IdeaScale is phased out ahead of Fund14 for a more seamless experience.

For full access to GitHub branches and deliverables, see [Project Catalyst](https://docs.projectcatalyst.io/welcome-to-project-catalyst/catalyst-team-deliverables) documentation.

### EDUCATION

The **education** team is updating the code base and content for the Cardano developer course to reflect changes to Plinth and Aiken. They are also working on plans for Midnight education.  
  
![](https://ucarecdn.com/69f7f9a5-3503-44b7-bf21-62e4c757dea3/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**パフォーマンス＆トレースチーム**チームは、UTXO-HD、新しいGHC（Glasgow Haskell Compiler）、Genesisのために、ノードv.10.2の新しいベンチマークとパフォーマンスベースラインをリリースしました。ここにはPeriodic tracerのベンチマークをも含まれます。トレースの明瞭性を向上させるためにノード全体にスレッドのラベル付けを行い、ekg-wai監視依存関係の競合状態を修正しました。インフラに関しては、Haskellプロファイル定義がテストにパスし、マージの準備が整いました。トレース転送用のCライブラリーがプロトタイプステージに到達し、[開発者ポータル](https://developers.cardano.org/docs/get-started/cardano-node/new-tracing-system/cardano-tracer)の最新更新情報の公開準備が整いました。

**コンセンサス**チームは、[ヒストリカルチェーンからEBBを削除](https://github.com/cardano-foundation/CIPs/pull/974)する、また、[参加率の低いシナリオに対処する](https://github.com/cardano-foundation/CIPs/pull/982)[プルリクエスト](https://github.com/cardano-foundation/CIPs/pull/974)の起草を始めました。デバッグ作業を強化するために、[Cardanoノードでラベルのないスレッド](https://github.com/IntersectMBO/cardano-node/issues/6086)を識別し、欠落しているラベルを追加しています。UTXO-HD V2のInMemoryクラスターを実行したところ、メモリープールのスナップショットに不具合が見られました。

新しいトレースシステムで[ブロックリプレイトレーサー](https://github.com/IntersectMBO/cardano-node/pull/6091)を修正し、[前方逆シリアル化可能なTxOutを利用するようにUTXO-HDを適応させました。](https://github.com/IntersectMBO/ouroboros-consensus/pull/1360)上流側の変更もマージし、新しいQueryStakePoolDefaultVoteを有効にしました。トランザクションサイズのレポートを拡張する準備段階として、LocalTxMonitorからnetwork-protocolsに変更を統合しました。 

下流パッケージのコンセンサスシンボルをカタログ化するスクリプトを完成させ、Cardanoのブループリントイニシアチブに貢献しました。

### スマートコントラクト

**Plutus**チームは、Plinth（旧Plutus Tx）に関連する複数の項目を仕上げています。これには、新しいロゴ、ブログの紹介記事、より効率的なデータエンコードスクリプトコンテキストAPI、スクリプトを新しいAPIに移行するのに役立つユーザーガイドが含まれます。Plominに続くハードフォークで導入される新しいプリミティブや言語構造にも積極的に取り組んでいます。

### スケーリング

**Hydra**チームは、[インクリメンタルコミット](https://github.com/cardano-scaling/hydra/issues/199)を含む[Hydra v.0.20.0](https://github.com/cardano-scaling/hydra/releases/tag/0.20.0)をリリースしました。ここでは、メモリー使用率の向上と、全体的な安定性と回復力の向上に焦点が当てられています。[修正版Hydra Headロードマップ](https://github.com/orgs/cardano-scaling/projects/7)に沿って進行中の作業を追跡する[新しいプロジェクト](https://github.com/orgs/cardano-scaling/projects/6)を導入しました。

将来的には、[メモリー使用量の改善](https://github.com/cardano-scaling/hydra/issues/1618)、[Hydraエクスプローラーの複数バージョン](https://github.com/cardano-scaling/hydra/issues/1282)のフルサポート、保留中のトランザクションをクリアするAPIコマンドの開発、新しいネットワークスタックの実装を開始する予定です。

**Mithril**チームは、Cardanoエポック539への移行時に予定されている次のPythagoras Mithril期への切り替えを有効にするトランザクションを作成しました。LinuxでMithrilのビルド済みバイナリを実行するために必要な[glibc最小バージョンで、今後のバンプについてのコミュニケーション](https://mithril.network/doc/dev-blog/2025/02/04/glibc-minimum-requirement-change)も始めました。

Cardanoデータベースの[増分認証](https://github.com/input-output-hk/mithril/issues/2212)の実装を続け、クライアントライブラリー、クライアントCLI、WASMクライアントに取り組みました。監視とダッシュボードの実装も開始しました。mithril-commonライブラリーのリファクタリングを開始し、アグリゲーターの依存関係ビルダーを簡素化しました。

[macOS x64アーキテクチャ用のビルド済みバイナリのサポート](https://github.com/input-output-hk/mithril/issues/2250)を終了し、CI内のエンドツーエンドテストで[脆弱性の修正](https://github.com/input-output-hk/mithril/issues/2222)を試みました。

**Leios**チームは、他のIOG研究者やクリプトグラファーとの議論を経て、[既成事実化](https://iohk.io/en/research/library/papers/fait-accompli-committee-selection-improving-the-size-security-tradeoff-of-stake-based-committees/)手法の活用を試しています。このアプローチにより、証明書のサイズを75KB以上から15KB程度に縮小し、Leiosのパフォーマンスを大幅に向上させることができます。Leiosのような特定のアプリケーションに先立ってこのような結果を得られる研究プログラムは有益であるため、現在、ALBAで既成事実化を使用した研究を進めています。

HaskellとRustのシミュレーションを改良し、インプット、アウトプット、イベントログを標準化して比較可能性を向上させました。[設定パラメーター](https://github.com/input-output-hk/ouroboros-leios/blob/main/data/simulation/config.schema.json)と[ネットワークトポロジー](https://github.com/input-output-hk/ouroboros-leios/blob/main/data/simulation/topology.d.ts)に統一フォーマットを導入し、Leiosプロトコルの一貫した動作を可能にしました。DeltaQモデルと実行可能仕様との整合性を保つために同一のシミュレーションイベントをログに記録することに焦点を当て、形式手法の使用を強化しました。

Haskellでは、short-leiosシミュレーションが拡散遅延データを出力し、さまざまなインプットブロック（IB）拡散戦略（freshest-firstやpeer-orderなど）をサポートし、Vote (Send)ステージとVote (Recv)ステージの両方を管理するようになりました。

Rustシミュレーションでは、実世界のオペレーター設定を考慮しながら、メインネットのステークとリレーの分配によりマッチする「有機的」なトポロジージェネレーターを導入しました。2024年9月以降の進捗状況をまとめた[2025年1月の報告書](https://github.com/input-output-hk/ouroboros-leios/blob/main/delta_q/docs/Report%202025-01.md)も作成しました。 

### VOLTAIRE 

1月30日木曜日、Cardanoの**ガバナンス**において重要なマイルストンが達成されました。Intersectは、代表が承認したCardano憲法をチェーン上で批准するためのガバナンスアクションを提出しました。この提出以来、委任代表者（DRep）は精力的に活動しており、投票は急速に批准に向かっています。この迅速な進展は、コミュニティの強力な関与を浮き彫りにしています。

### CATALYST

今週の**Catalyst**では、Fund13のオンボーディングが順調に進み、タウンホールはレトロセッションの第2ラウンドが終了しました。コミュニティの関与の勢いを維持するべく、今後のイベントに関する追加情報は近日中に発表される予定です。Catalystプラットフォームの技術開発は引き続き優先事項であり、よりシームレスな体験のためにFund14に先立ってIdeaScaleを段階的に廃止し、移行を合理化しています。

GitHubブランチと成果物へのフルアクセスは、[Project Catalyst](https://docs.projectcatalyst.io/welcome-to-project-catalyst/catalyst-team-deliverables)のドキュメントを参照してください。

### 教育

**教育**チームは、PlinthとAikenの変更を反映するために、Cardano開発者コースのコードベースとコンテンツを更新しています。Midnightの教育プランにも取り組んでいます。
