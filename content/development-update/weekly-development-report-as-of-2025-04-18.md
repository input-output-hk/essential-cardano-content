---
title: Weekly development report as of 2025-04-18
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/50f489d1-ebb9-493d-9a31-014f48a9ba8f/
image_text: Weekly development report as of 2025-04-18
---

### CORE TECHNOLOGY

This week, the **consensus** team made progress on the Genesis tests by developing a centralized chain-sync-jumping model for troubleshooting. This model proved to be more effective than the previously used approach. They also initiated collaboration with the Ouroboros Phalanx anti-grinding innovation team as an initial step to provide engineering input on the design.

The **networking** team continued work on the transaction submission feature and are currently analyzing a test failure before merging the pull request. Additionally, Armando Santos from Well-Typed opened a draft pull request ([ouroboros-network#5109](https://github.com/IntersectMBO/ouroboros-network/pull/5109)) to implement the DMQ node, and the teams are collaborating on it. Finally, they are reviewing a [pull request](https://github.com/IntersectMBO/ouroboros-network/pull/5104) focused on inbound governor performance improvements.

The **performance and tracing** team focused on benchmarking node v.10.3.1. They also progressed with updates to the Plutus script calibration tool and profile maintenance and are about to merge a workbench simplification in terms of infrastructure improvements. The team also addressed system dependencies and are preparing the 'periodic tracer' feature for production.

Finally, several core technology team members attended the node diversity workshop last week — see [this report](https://forum.cardano.org/t/node-diversity-workshop-april-2025/145248) for a detailed overview.

### SMART CONTRACTS

This week, the **Plutus** team delivered several improvements to Plinth (formerly Plutus Tx). Compiler enhancements include a new `inline-callsite-growth` flag that allows developers to set an inlining threshold (0 disables growth; _n_ permits inlining if the AST expands by ≤ _n_ nodes). Additionally, `PlutusTx.Lift.liftCode` now applies default PIR and UPLC optimizations during code lifting, which yields leaner on-chain scripts. Library upgrades include a new `PlutusTx.BuiltinList` module, expanded helpers in `PlutusTx.Data.List` (for example, `destructList`, `caseList`, `caseList'`), and additional utilities in `PlutusTx.Data.AssocMap`. Two new user-guide sections explain [lifting values into CompiledCode](https://plutus.cardano.intersectmbo.org/docs/using-plinth/lifting) and [Compile-Time evaluation](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/compile-time-evaluation).

Plutus Core work for the next hard fork continued: costing, conformance testing, and metatheory for the `dropList` primitive; costing plus metatheory for built-in arrays and modular exponentiation; a review of the CIP on built-in value; and exploration of pattern-matching on built-in types. The team also added tests to the certifier and addressed the issues revealed during the certified compilation effort.

### SCALING

This week, the **Hydra** team enabled the [withdraw‑zero trick](https://github.com/cardano-scaling/hydra/issues/1795), published [snapshot side‑loading documentation](https://github.com/cardano-scaling/hydra/issues/1912), and fixed several deposit‑related bugs ([1](https://github.com/cardano-scaling/hydra/issues/1915), [2](https://github.com/cardano-scaling/hydra/issues/1895), [3](https://github.com/cardano-scaling/hydra/pull/1924)). 

The team is now preparing the next major release, which will feature a Blockfrost‑based chain layer and Glacier‑drop support.

The **Mithril** team started rolling out incremental certification of the Cardano database (also known as Cardano node database v2), which has been activated on the `pre-release-preview` test network.

They also completed adapting the infrastructure to support the aggregator’s prototype ‘follower’ mode and focused on [signing ancillary files](https://github.com/input-output-hk/mithril/issues/2362) in the Cardano database snapshots using an IOG key. Work also continued on the proof of concept for the [Mithril/ALBA aggregation](https://github.com/input-output-hk/mithril/issues/2403) proof system.

Finally, the team continued refactoring the STM cryptographic library to improve clarity and started refactoring the aggregator’s command configuration.

The **Leios** team continued refining the protocol and its simulations. In the Haskell simulation, they began specifying a new relay protocol for IB header diffusion without the body, and improved the shared log format by removing redundancies and harmonizing naming conventions. They also added support for additional events – including `SlotEvent` and `NoBlockEvent` – which can be enabled via the `--conformance-events` flag in conjunction with `--shared-log-format`. Meanwhile, they updated the Rust simulation to match the new standardized trace format and resolved a critical bug in CPU scheduling that allowed nodes to exceed their allocated cores.

The team also streamlined workflow optimization for both Haskell and Rust simulations. They replaced MongoDB with more efficient `jq` map-reduce queries, created reusable library functions for plotting with R, and revised scripts to simplify creation, execution, and analysis of simulations. A more generic and reusable Jupyter notebook further accelerates analysis turnaround times. These enhancements were successfully tested on the `leios-2025w15` tag, revealing several discrepancies between the two simulations that have been documented as GitHub issues for future investigation.

### VOLTAIRE

Intersect committee elections voting opened at noon UTC on Wednesday, April 16. The response to the call for candidates has been outstanding, with over 100 distinct candidates for 36 available positions, and competition for seats in every committee.

Voting will continue until May 7. Detailed voting instructions are available on the [Intersect website](https://www.intersectmbo.org/news/voting-in-intersect-committee-elections).

Intersect members can directly influence the quality of expertise that informs critical decisions by participating in committee elections. Active engagement in these elections reinforces Cardano’s decentralized vision, ensuring the ecosystem remains transparent, innovative, and aligned with community values.

To support candidates in their campaigns, Intersect has established a series of X Spaces where members can meet the candidates. Each of the following links leads to a page with a registration button that shows the event in your local time zone.

April 21, 7 pm UTC  -  [Applicants Spotlight](https://lu.ma/694vok02)

April 23, 11 am UTC - [Applicants Spotlight](https://lu.ma/1jy5dy3z)

April 29, 4 pm UTC - [Applicants Spotlight](https://lu.ma/z47a2l41)

May 1, 12 pm UTC - [Applicants Spotlight](https://lu.ma/5pa8dofe)

May 6, 4 pm UTC - [Applicants Spotlight](https://lu.ma/5kx1vlyw)

If you are an Intersect member, join an X Space, make your decision, and vote for your selected candidates.

### CATALYST

This week, the **Catalyst** team continued to emphasize the [Horizons report](https://projectcatalyst.io/reports/horizons2025.pdf) and engage the community through X Spaces discussions around the [2025 budget proposal](https://x.com/Catalyst_onX/status/1910350489968955727) released last week. The team also participated in the Blockchain4Good virtual summit, where human-centered technology met sustainable development.

The regular Catalyst [town hall on X](https://x.com/Catalyst_onX/status/1912546750700618075) took place on Wednesday at 5 PM UTC. Ongoing content efforts include a soon-to-be-launched ‘Before and After’ impact series and new ‘Under The Hood’ episodes. The technical development of the Catalyst stack remains a primary focus.

### EDUCATION

This week, the **education** team is planning further Cardano Days sessions as part of the Cardano community Azteca 2025 event in Mexico and at the [National Technical University of Athens](https://www.ntua.gr/en/) in Athens, Greece. They are also creating content for various modules of the Midnight Pioneer program and are updating the Cardano developer course.

### ![](https://ucarecdn.com/237391a3-ed6e-4b36-9f17-631f13eb7e32/-/preview/-/format/auto/-/quality/smart/)コアテクノロジー

**コンセンサス**チームは、トラブルシューティングのための集中型チェーン同期ジャンプモデルを開発し、Genesisテストを前進させました。このモデルは以前に用いられたアプローチよりも効果的であることが証明されました。設計上のエンジニアリングインプットを提供するための最初のステップとして、Ouroboros Phalanxグラインディング対策イノベーションチームとのコラボレーションを開始しました。

**ネットワーキング**チームはトランザクション送信機能の作業を継続し、現在プルリクエストをマージする前にテストの失敗結果を分析しています。Well-TypedのArmando SantosがDMQノードを実装するためのプルリクエストのドラフト（[ouroboros-network#5109](https://github.com/IntersectMBO/ouroboros-network/pull/5109)）をオープンし、チームは共同で作業にあたっています。インバウンドのガバナーパフォーマンス改善に焦点を当てた[プルリクエスト](https://github.com/IntersectMBO/ouroboros-network/pull/5104)のレビューも行っています。

**パフォーマンス＆トレース**チームはノードv.10.3.1のベンチマークに集中しました。Plutusスクリプトキャリブレーションツールの更新やプロフィールメンテナンスも進めており、インフラの改善という観点からワークベンチの簡素化をマージするところです。システムの依存性にも対処し、「定期的なトレーサー」機能を本番環境に導入するための準備を進めています。

コアテクノロジーチームの一部のメンバーは先週のノードダイバーシティワークショップに参加しました。詳細は、[このレポート](https://forum.cardano.org/t/node-diversity-workshop-april-2025/145248)を参照してください。

### スマートコントラクト

**Plutus**チームはPlinth（旧Plutus Tx）に複数の改善を施しました。コンパイラーの拡張には、開発者がインライン展開しきい値を設定できる新しい`inline-callsite-growth`フラグが含まれます（0は成長を無効化、ASTが\_n\_個以下のノード増加であればインライン展開を許可）。`PlutusTx.Lift.LiftCode`はコードのリフティング中にデフォルトのPIRとUPLCの最適化を適用するようになりました。これで、より無駄のないオンチェーンスクリプトが得られます。ライブラリーのアップグレードには、新しい`PlutusTx.BuiltinList`モジュール、`PlutusTx.Data.List`の拡張ヘルパー（destroktList、caseList、caseListなど）、`PlutusTx.Data.AssocMap`の追加ユーティリティが含まれます。ユーザーガイドの2つの新しいセクションでは、[CompiledCode](https://plutus.cardano.intersectmbo.org/docs/using-plinth/lifting)および[Compile-Time評価への](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/compile-time-evaluation)[値のリフティング](https://plutus.cardano.intersectmbo.org/docs/using-plinth/lifting)について説明しています。

次回ハードフォークへ向けたPlutus Coreの作業は継続しており、`dropList`プリミティブのためのコスト計算、適合性テスト、メタ理論、組み込み配列とモジュラー指数のためのコスト計算とメタ理論、組み込み値に関するCIPのレビュー、組み込み型でのパターンマッチングの調査が行われました。認証プログラムにテストを追加し、認証コンパイル作業中に明らかになった問題に対処しました。

### スケーリング

Hydraチームは[withdraw-zeroトリック](https://github.com/cardano-scaling/hydra/issues/1795)を有効にし、[スナップショットサイドローディングドキュメント](https://github.com/cardano-scaling/hydra/issues/1912)を公開し、デポジット関連のバグ（[1](https://github.com/cardano-scaling/hydra/issues/1915)、[2](https://github.com/cardano-scaling/hydra/issues/1895)、[3](https://github.com/cardano-scaling/hydra/pull/1924)）を修正しました。 

現在、BlockfrostベースのチェーンレイヤーとGlacier-dropサポートを備えた次のメジャーリリースの準備を進めています。

**Mithril**チームは、`pre-release-preview`テストネットワーク上で有効化されたCardanoデータベース（Cardanoノードデータベースv2）の増分認証のロールアウトを開始しました。

アグリゲーターのプロトタイプ「フォロワー」モードをサポートするためのインフラの調整を完了し、IOG鍵を使用したCardanoデータベーススナップショット内の[補助ファイルへの署名](https://github.com/input-output-hk/mithril/issues/2362)に注力しました。[Mithril/ALBAアグリゲーション](https://github.com/input-output-hk/mithril/issues/2403)証明システムの概念実証の作業も続けました。

明快さを向上させるためのSTM暗号ライブラリーのリファクタリングを続け、アグリゲーターのコマンド設定のリファクタリングを開始しました。

**Leios**チームはプロトコルとシミュレーションの改良を続けました。Haskellシミュレーションでは、IBヘッダー拡散の新しいリレープロトコルをボディを使わずに指定し始め、共有ログ形式を、冗長性を取り除き、命名規則を調和させることで改善しました。`SlotEvent`や`NoBlockEvent`などの追加イベントのサポートも追加しました。これは、`--conformance-events`フラグと`--shared-log-format`を併用することで有効にできます。Rustシミュレーションは新たに標準化したトレースフォーマットに合わせて更新し、CPUスケジューリングにおいてノードが割り当てられたコアを超えることを許可してしまうという重大なバグを解決しました。

HaskellシミュレーションとRustシミュレーションのワークフロー最適化を合理化しました。MongoDBをより効率的な`jq`map-reduceクエリに置き換え、Rでプロットするための再利用可能なライブラリー関数を作成し、シミュレーションの作成、実行、解析を簡素化するためにスクリプトを改訂しました。より汎用的で再利用可能なJupyterノートブックは、分析の所要時間をさらに短縮します。これらの拡張機能を`leios-2025w15`タグでテストした結果、2つのシミュレーション間でいくつか不一致がみつかり、後の調査のためにGitHubイシューとして文書化しました。

### VOLTAIRE

Intersect委員会の選挙投票は日本時間4月16日水曜日午後9時に始まりました。候補者募集への反応は非常に高く、36議席の募集に100人以上の候補者が応募し、各委員会の議席を巡って競っています。

投票は5月7日まで続きます。投票方法の詳細は[Intersectのウェブサイト](https://www.intersectmbo.org/news/voting-in-intersect-committee-elections)で案内しています。

Intersectメンバーは、委員会の選挙に参加することによって重要な決定に情報を提供する専門知識の質に直接影響を与えることができます。これらの選挙への積極的な関与は、Cardanoの分散化ビジョンを後押しし、エコシステムの透明性と革新性、コミュニティの価値観との整合性を保証します。

候補者のキャンペーンを支援するために、Intersectは メンバーが候補者と会うことができるXスペースシリーズを主催しています。次の各リンク先は登録ページで、自分のタイムゾーンでイベント時間が確認できます。

4月22日19:00（UTC）- [候補者スポットライト](https://lu.ma/694vok02)

4月23日11:00（UTC）- [候補者スポットライト](https://lu.ma/1jy5dy3z)

4月29日16:00（UTC）- [候補者スポットライト](https://lu.ma/z47a2l41)

5月1日12:00（UTC）- [候補者スポットライト](https://lu.ma/5pa8dofe)

5月6日16:00（UTC）- [候補者スポットライト](https://lu.ma/5kx1vlyw)

Intersectメンバーの場合は、Xスペースに参加して判断し、選択した候補者に投票してください。

CATALYST

**Catalyst**チームは、引き続き[Horizonsレポート](https://projectcatalyst.io/reports/horizons2025.pdf)に重点を置き、先週発表された[2025年予算案](https://x.com/Catalyst_onX/status/1910350489968955727)をめぐるXスペースでコミュニティを議論に巻き込みました。Blockchain4Goodバーチャルサミットにも参加しました。そこでは、人間中心のテクノロジーが持続可能な開発と結びつきました。

通常のCatalyst[タウンホール on X](https://x.com/Catalyst_onX/status/1912546750700618075)は、日本時間の木曜日2:00に開催されました。現在進行中のコンテンツの取り組みには、間もなく開始される『Before and After』インパクトシリーズや新しい『Under the Hood』エピソードが含まれます。Catalystスタックの技術開発も主要事項です。

### 教育

**教育**チームは、メキシコのCardanoコミュニティによるAzteca 2025イベントとギリシャの[アテネ国立工科大学](https://www.ntua.gr/en/)でのイベントの一部として開催する、Cardano Daysセッションの企画を進めています。Midnightパイオニアプログラムのさまざまなモジュールのコンテンツを作成している他、Cardano開発者コースの更新も行っています。
