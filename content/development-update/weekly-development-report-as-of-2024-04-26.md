---
title: Weekly development report as of 2024-04-26
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/a59c2618-d76c-41b2-aefa-31551ff73872/
image_text: Weekly development report as of 2024-04-26
---

### CORE TECHNOLOGY

This week, the **performance and tracing** team concluded benchmarking activities for nodes v.8.9.2 and v.8.10.0. They also started designing the implementation of quick queries in the analysis pipeline. Currently, they are finalizing new features for the reporting pipeline and enhancing Prometheus output to make the node's build information easily accessible as a label. Furthermore, the team updated their tooling to support benchmarks with non-empty chains for UTXO growth.

### SMART CONTRACTS

This week, the **Plutus** team combined three command line tools - `pir`, `plc`, and `uplc` – into a single unified executable with a common interface for interacting with the Plutus language pipeline. They also added new features and connections to other tools (for example, the in-progress Plutus debugger).

### SCALING

This week, the **Mithril** and **Hydra** teams attended [the Cardano Buidler Fest #1](https://buidl.2024.cardano.org/) in Toulouse, France.

The **Hydra** team refactored the heartbeat logic in preparation for the versioned network protocol and switched [http://explorer.hydra.family](http://explorer.hydra.family) to run on the `preview` network. Additionally, the team has added property tests to the `/commit` endpoint changes.

The **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks and worked on scaling the signature and proof generation for `mainnet` by compressing the transaction Merkle tree using sub-Merkle trees based on transaction block ranges. The team identified the source of an issue preventing proper memory release during the signing/proving of a large set of transactions and developed a fix for it. Additionally, they completed the prototype for decentralizing signer registration with the relay and a peer-to-peer (P2P) network.

Finally, the team implemented a configurable feature for test networks to log unparsable blocks instead of panicking and investigated some unexpected errors occurring on the Cardano node when the signer and aggregator connect to the mini-protocols.

### VOLTAIRE & SANCHONET

Over the past two weeks, the **ledger** team worked on updates to PlutusV3 in the genesis file to allow for the specification of `CostModel`, which is essential for guardrail scripts during the Conway era. They have also addressed bugs related to [inaccurate reporting of](https://github.com/IntersectMBO/cardano-ledger/pull/4247) `InsufficientCollateral` and `ValueNotConservedUTxO` predicate failures, [miscounting of votes for Constitutional committee members](https://github.com/IntersectMBO/cardano-ledger/pull/4281), and a bug that made functions like `redeemerPointer` [appear deprecated](http://pull-4259). In addition, the teams have enhanced constraint-based data generation and added more unit tests for Conway era functionality.

### CATALYST

This week, the **Catalyst** team is in Barcelona, launching in person the 12th round of community-led funding and the worldwide [Catalyst working groups](https://catalystwg.gitbook.io/docs) effort. The event will be live-streamed on [IO's YouTube channel](https://www.youtube.com/@IohkIo). Don't forget to hit the notification bell so you don't miss it.

As a reminder, proposal submissions begin on April 30 at the latest. Interested in helping to review proposals? Keep an eye on the announcement channels for when registration for specialty community roles opens.

The Catalyst team has launched a [dedicated X account](https://twitter.com/Catalyst_onX) which you can follow for regular updates. Also, join the [Telegram](https://t.me/cardanocatalyst) and [Discord](https://discord.gg/2RnUtK8) communities, sign up for the [Catalyst newsletter](https://mpc.projectcatalyst.io/newsletter-signup), and attend Catalyst [town halls](https://zoom.us/meeting/register/tJEtduyupzMvHNUczCQwfFJGcXzmw2lDwkIf#/registration).

### EDUCATION

This week, the **education** team has been reviewing the capstone projects for participants of the ABC Cardano Developer course. They are also working with the Voltaire tribe and the Intersect team planning for constitutional committee and DRep training.

![](https://ucarecdn.com/b63499f8-ebf6-4b4e-91f6-f099b05752b7/-/preview/-/format/auto/-/quality/smart/)

コアテクノロジー

**パフォーマンス＆トレース**チームはノードv.8.9.2とv.8.10.0のベンチマークを完了しました。解析パイプラインにおけるクイッククエリの実装の設計も開始しました。現在、レポートパイプラインの新機能を仕上げ、ノードのビルド情報にラベルとして簡単にアクセスできるよう、Prometheusの出力を強化しています。UTXOを成長させるための空でないチェーンのベンチマークをサポートするためにツールを更新しました。

### スマートコントラクト

**Plutus**チームは、pir、plc、uplcの3つのコマンドラインツールを、Plutus言語パイプラインと対話するための共通インターフェイスを備えた、単一の実行可能ファイルに統合しました。現在進行中のPlutusデバッガーなど、他のツールへ新機能や接続を追加しました。

### スケーリング

**Mithril**チームと**Hydra**チームは、フランスのトゥールーズで開催された[Cardano Buidler Fest #1](https://buidl.2024.cardano.org/)に参加しました。

**Hydra**チームは、バージョン管理されたネットワークプロトコルの準備としてハートビートロジックをリファクタリングし、[http://explorer.hydra.family](http://explorer.hydra.family)をpreviewネットワークで実行するように切り替えました。/commitエンドポイントの変更にプロパティテストを追加しました。

**Mithril**チームはMithrilネットワークにCardanoトランザクション認証を実装する作業を続け、トランザクションブロック範囲をベースにサブマークル木を用いてトランザクションマークル木を圧縮し、mainnetの署名と証明生成をスケーリングする作業に取り組みました。大量のトランザクションセットの署名や証明中に適切なメモリー解放を妨げる問題の原因を特定し、その修正を開発しました。リレーとピアツーピア（P2P）ネットワークの署名者登録を分散化するためのプロトタイプは完成しました。

テストネットワーク用に設定可能な機能を実装して、パニックに陥る代わりに解析不能なブロックをログに記録し、署名者とアグリゲーターがミニプロトコルに接続したときにCardanoノードで発生する予想外のエラーを調査しました。

### VOLTAIRE & SANCHONET

過去2週間にわたり、台帳チームはConway期のガードレールスクリプトに不可欠なCostModelの仕様を可能にするために、ジェネシスファイルのPlutusV3の更新に取り組んできました。[InsufficientCollateralの不正確なレポート](https://github.com/IntersectMBO/cardano-ledger/pull/4247)やValueNotConservedUTxO述語の失敗、[憲法委員会メンバー投票の誤集計](https://github.com/IntersectMBO/cardano-ledger/pull/4281)などのバグや、[redeemerPointerなどの機能が非推奨になっている](http://pull-4259)バグに対処しました。制約ベースのデータ生成を強化し、Conway期機能のユニットテストを追加しました。

### CATALYST

Catalystチームは、世界各地で[Catalystワーキンググループ](https://catalystwg.gitbook.io/docs)が取り組むコミュニティ主導の資金調達の第12ラウンドをライブで始動すべく、バルセロナ入りしています。イベントは、[IOのYouTube](https://www.youtube.com/%40IohkIo)チャネルでライブストリーミングされます。見逃さないための通知設定をお忘れなく。

提案の提出は遅くとも4月30日に開始されます。提案のレビューに参加を希望する場合は、案内チャネルに注意していてください。コミュニティの専門的な役割の登録が始まったら告知されます。

Catalystチームは定期的な更新情報をお届けするために[専用のXアカウント](https://twitter.com/Catalyst_onX)を立ち上げました。また、[Telegram](https://t.me/cardanocatalyst)や[Discord](https://discord.gg/2RnUtK8)コミュニティに参加し、Catalyst[ニュースレター](https://mpc.projectcatalyst.io/newsletter-signup)に登録し、Catalyst[タウンホール](https://zoom.us/meeting/register/tJEtduyupzMvHNUczCQwfFJGcXzmw2lDwkIf#/registration)に参加してください。

### 教育

**教育**チームはABC Cardano Developerコースの参加者のために、このキャップストーンプロジェクトをレビューしています。VoltaireトライブおよびIntersectチームと協力して、憲法委員会とDRepのトレーニング計画を立てています。
