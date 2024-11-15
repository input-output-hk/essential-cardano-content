---
title: Weekly development report as of 2024-11-15
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/cc2054f6-aab7-437c-b274-0f4c5aea6e04/
image_text: ""
---

### CORE TECHNOLOGY

This week, IO started collaborating with Sundae Labs and Well-Typed to validate Ouroboros Leios’ feasibility, impact, trade-offs, and implementation costs. To dive deeper into Ouroboros Leios, see this video about ['Near-optimal throughput'](https://www.youtube.com/watch?v=YEcYVygdhzU), and stay tuned for more details.

The **networking** team announced that support for the non-P2P network stack will end after the next hard fork. Feedback is welcome on this [pull request](https://github.com/IntersectMBO/ouroboros-network/pull/5007). They also dropped support for [node-to-client versions](https://github.com/IntersectMBO/ouroboros-network/pull/5002) earlier than version 16. For the Mithril design, the team has [reviewed how to integrate \`ouroboros-network](https://github.com/IntersectMBO/ouroboros-network/wiki/Reusable-Diffusion-Investigation)\` and started experimenting with it.

For the next Cardano node release, the networking team has integrated ouroboros-network-0.18 with [typed-protocols-0.3](https://github.com/IntersectMBO/ouroboros-consensus/pull/1223) and merged changes for `cardano-cli` and `cardano-api`. 

The team also worked on support for Genesis, enabling big ledger peer snapshots and new query functionalities in `cardano-api` and \`[cardano-cli\`](https://github.com/IntersectMBO/cardano-cli/pull/727). Additionally, they’ve completed a [documentation review](https://github.com/IntersectMBO/ouroboros-network/pull/5001) for the connection manager and are experimenting with Functional Reactive Programming (FRP) for the outbound governor to improve maintainability.

The **consensus** team worked on the [UTXO-HD pull request](https://github.com/IntersectMBO/ouroboros-consensus/pull/1267) review and engaged with the research team on the discussion of the hard hork combinator simplification proposal. They also reverted the Babbage to Conway ledger era transition [workaround](https://github.com/IntersectMBO/ouroboros-consensus/pull/1297), clarifying the stake semantics from pointer addresses, and worked on minor [tech debt issues](https://github.com/IntersectMBO/ouroboros-consensus/pull/1269). 

Finally, Well-Typed contributed by working on two `lsm-tree` features – snapshots (for persisting ledger snapshots) and table union (for storing more parts of the ledger state on disk).

### SMART CONTRACTS

This week, the **Plutus** team wrapped up their work on serializing Agda proof objects, moving them closer to providing a usable tool for certified compilation. They also continued advancing towards the release of the Data-encoded ScriptContext API.

### SCALING

This week, the **Mithril** team released the new distribution [2445.0](https://github.com/input-output-hk/mithril/releases/tag/2445.0). This distribution offers stable support for Cardano node v.10.1, the Cardano stake distribution client library, CLI and WASM, and the aggregator's Prometheus endpoint. It also includes bug fixes and performance improvements.

The team also continued implementing the new status route in the aggregator. Additionally, they reorganized the user manual section of the documentation website and started working on the new version of the Protocol Insights dashboard.

Finally, they implemented a new command in the aggregator CLI to generate genesis key pairs and refactored the signer and aggregator's store pruning implementations.

Over the past few weeks, the **Hydra** team focused on [incremental commits](https://github.com/cardano-scaling/hydra/issues/199), [rewriting validators in Aiken](https://github.com/cardano-scaling/hydra/pull/1734), and addressing changes resulting from increased Hydra scripts’ size. They continued prioritizing work on incremental commits, the 0.20.0 release, repository cleanup, and adding functionality based on user requests.

### VOLTAIRE

For the first time, the Intersect budget committee will decide which initiatives the Cardano treasury should [fund for 2025 and beyond](https://www.intersectmbo.org/news/demystifying-cardanos-first-annual-budget-process-how-to-get-involved). Several members of the Input | Output engineering team have also been involved in various Intersect committees and working groups (including technical steering committee, smart contract, and product working groups) offering input to the program. This includes core infrastructure enhancements, research and development, community grants, marketing efforts, and more. Discussions on how to allocate treasury funds will no doubt generate lively debate.

Intersect is facilitating the creation of Cardano’s 2025 budget proposal, which members will develop from seven core committees. As part of this process, the budget committee will compile the input from these committees to create a proposed budget for on-chain community review.

### EDUCATION

This week, the **education** team is working on content for the education sessions of the [Cardano Tech Week](https://lu.ma/jcsgq39k) community event later this month and the constitutional convention in December. They are also preparing for the Cardano Days event in Santander, Spain, on November 23.

![](https://ucarecdn.com/e69701ab-8ec5-4686-9cc4-6386ad6ff1d6/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

IOはOuroboros Leiosの実現可能性、影響、トレードオフ、実装コストの検証を目的とした、SundaeSwapおよびWell-Typedとのコラボレーションを開始しました。動画「[Near optimal throughput](https://www.youtube.com/watch?v=YEcYVygdhzU)（ほぼ最適なスループット）」で、Ouroboros Leiosの詳細をご覧ください。

**ネットワーキング**チームは、次回ハードフォーク後における非P2Pネットワークスタックのサポート終了を発表しました。この[プルリクエスト](https://github.com/IntersectMBO/ouroboros-network/pull/5007)に対するフィードバックを歓迎します。バージョン16より前の[node-to-clientバージョン](https://github.com/IntersectMBO/ouroboros-network/pull/5002)のサポートも終了しました。Mithrilの設計に関しては、[ouroboros-networkの統合方法をレビュー](https://github.com/IntersectMBO/ouroboros-network/wiki/Reusable-Diffusion-Investigation)し、実験を開始しました。

次のCardanoノードリリースに向けてouroboros-network-0.18と[typed-protocols-0.3](https://github.com/IntersectMBO/ouroboros-consensus/pull/1223)を統合し、Cardano-cliとCardano-APIの変更をマージしました。 

Genesisのサポートにも取り組み、[cardano-api](https://github.com/IntersectMBO/cardano-api/pull/521)と[cardano-cli](https://github.com/IntersectMBO/cardano-api/pull/521)で大きな台帳ピアスナップショットと新しいクエリ機能を有効にしました。接続マネージャーの[ドキュメントレビュー](https://github.com/IntersectMBO/ouroboros-network/pull/5001)を完了し、保守性を向上させるべくアウトバウンドガバナーのFRP（関数型リアクティブプログラミング）を試みました。

**コンセンサス**チームは[UTXO-HDプルリクエスト](https://github.com/IntersectMBO/ouroboros-consensus/pull/1267)のレビューに取り組み、ハードフォークコンビネーターの簡素化案について研究チームと議論しました。BabbageからConway台帳期への移行[回避策](https://github.com/IntersectMBO/ouroboros-consensus/pull/1297)を元に戻し、ポインターアドレスからステークセマンティクスを明確にし、軽微な[技術負債問題](https://github.com/IntersectMBO/ouroboros-consensus/pull/1269)に取り組みました。 

Weill-Typedは、2つのlsm-tree機能、すなわちスナップショット（永続的な台帳スナップショット）とテーブルユニオン（ディスクに格納する台帳ステータスのパーツを増やすため）に取り組むことで貢献しました。

### スマートコントラクト

**Plutus**チームはAgda証明オブジェクトのシリアル化作業を終え、認定コンパイルに使用できるツールの提供に近づきました。Data-Encoded ScriptContext APIのリリースに向けた作業を進めました。

### スケーリング

**Mithril**チームは新ディストリビューション[2445.0](https://github.com/input-output-hk/mithril/releases/tag/2445.0)をリリースしました。このディストリビューションは、Cardanoノードv.10.1、Cardanoステーク分布クライアントライブラリー、CLIとWASM、アグリゲーターのPrometheusエンドポイントの安定サポートを提供するほか、バグ修正とパフォーマンスの改良も実施されています。

アグリゲーターに新しいステータスルートを実装する作業を続けました。ドキュメントサイトのユーザーマニュアルのセクションを再編し、Protocol Insightsダッシュボードの新バージョンに関する作業を開始しました。

アグリゲーターCLIにジェネシスキーペアを生成する新しいコマンドを実装し、署名者とアグリゲーターのストアプルーニング実装をリファクタリングしました。

ここ数週間、**Hydra**チームはインクリメンタルコミット、[Aikenでのバリデーターの書き換え](https://github.com/cardano-scaling/hydra/pull/1734)、Hydraスクリプトのサイズアップに伴う変更への対処に注力してきました。引き続き、インクリメンタルコミット、0.20.0リリース、リポジトリクリーンアップ、ユーザーリクエストに基づく機能追加の作業に優先的に取り組みました。

### VOLTAIRE

Intersect予算委員会は初めて、Cardanoトレジャリーが[2025年以降どのイニシアチブに資金を提供](https://www.intersectmbo.org/news/demystifying-cardanos-first-annual-budget-process-how-to-get-involved)すべきかを決定します。Input | Outputエンジニアリングチームのメンバー数名が、技術運営委員会、スマートコントラクト、製品ワーキンググループなど、さまざまなIntersect委員会やワーキンググループに関与し、プログラムへのインプットを提供しています。これには、コアインフラの強化、研究開発、コミュニティ助成、マーケティング活動などが含まれます。トレジャリーの資金割り当てについての議論は、白熱したものになるでしょう。

Intersectは、[Cardanoの2025年度予算案](https://www.intersectmbo.org/news/demystifying-cardanos-first-annual-budget-process-how-to-get-involved)の作成を支援しており、7つのコア委員会のメンバーが予算案を作成します。このプロセスの一環として、予算委員会はこれらの委員会からのインプットをまとめ、オンチェーンコミュニティレビューのための予算案を作成します。

### 教育

**教育**チームは、今月後半の[Cardano Tech Week](https://lu.ma/jcsgq39k)コミュニティイベントと12月の憲法制定会議における教育セッションのコンテンツに取り組んでいます。11月23日にスペインのサンタンデールで開催されるCardano Daysイベントの準備も進めています。
