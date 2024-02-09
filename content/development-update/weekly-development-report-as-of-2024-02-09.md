---
title: Weekly development report as of 2024-02-09
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/6cd2fde3-25eb-4013-ae91-e2c1b2ae968b/
image_text: Weekly development report as of 2024-02-09
---

### CORE TECHNOLOGY

This week, the **networking** team merged changes related to bootstrap peers into the `ouroboros-network` [repository](https://github.com/IntersectMBO/ouroboros-network/pull/4790) and continued integration and testing using an early development version of `cardano-node`. In collaboration with [DripDropz](https://dripdropz.io/), the IOG team fixed a mistake in the CDDL specification that resulted in [misleading documentation](https://github.com/IntersectMBO/ouroboros-network/issues/4790). The team also provided clarity on the handshake protocol flag and decided to call it `initiatorOnlyDiffusionMode`.  

The team has advised library authors providing connectivity with other nodes via `node-to-node` protocol to review their implementation.

Additionally, they collaborated with the Cardano Foundation to refine `tx-submission` decision logic, implementing a debugging feature that dumps outbound governor state on the `SIGUSR1` event. The team ensured better monitoring and troubleshooting capabilities, with support extended to POSIX-compatible OSes (commit: [1](http://ouroboros-network#4730), [2](https://github.com/IntersectMBO/ouroboros-network/issues/4789)).

Lastly, the team [limited the rate at which one can discover nodes](https://github.com/IntersectMBO/ouroboros-network/issues/4778) through peer sharing.

The **consensus** team integrated the consensus version of the `UTXO-HD` prototype, which includes the second version of the Ledger DB API, into the node. Additionally, the team implemented a [change to the epoch structure for Conway](https://github.com/IntersectMBO/ouroboros-consensus/pull/927) and made progress in advancing the bootstrap state machine and Ouroboros Peras planning. On the support front, the team is currently investigating the impact of snapshots on missed leadership checks.

As always, see [this technical development report](https://updates.cardano.intersectmbo.org/archive) for more details from different teams.

### WALLETS & SERVICES

The **Lace** team have been working on minor fixes, and are now preparing for the upcoming v.1.9 release. [Add Lace](https://www.lace.io?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=email-registration) to your browser and join the email list – find the subscription in the footer of the website – for the latest updates.

### SMART CONTRACTS

The **Plutus** team improved error reporting when scripts fail to decode, due to reasons such as using a built-in function unsupported by the Plutus language version of the script, or the current protocol version.

### SCALING  

This week, the **Hydra** team published their [monthly report for January 2024](https://hydra.family/head-protocol/monthly/2024-01), enhanced user feedback for failed commands, updated `cardano-api` dependency and `GHC` to newer versions, reopened the persistent head in preparation for the hard fork, extended their model-based testing suite to cover the closing of heads, fixed a bug in `io-sim`, and actively contributed to the development of cardano-node.

The **Mithril** team kept implementing a new data type for certifying Cardano transactions within Mithril networks. They completed the aggregator routes responsible for [generating proofs of membership](https://github.com/input-output-hk/mithril/issues/1467) for a list of Cardano transactions and for [listing produced artifacts](https://github.com/input-output-hk/mithril/issues/1478). Additionally, they worked on extending the Mithril client library to support the [verification of Cardano transactions](https://github.com/input-output-hk/mithril/issues/1468), and on the [creation of the new Mithril network running on SanchoNet.](https://github.com/input-output-hk/mithril/issues/1173)

Finally, the team kept working on the threat modeling and risk analysis for the Mithril network and investigated some flakiness occurring in the CI end-to-end tests.

### VOLTAIRE & SANCHONET

SanchoNet is the testnet for rolling out governance features for the Cardano blockchain, aligning with the CIP-1694 specifications. If you're interested in testing these features, make sure to check out the [SanchoNet website](https://sancho.network/get-started/). The teams are now working on updating the FAQs and adding more to the 'Resources' section.

### CATALYST

This week in **Project Catalyst**, the Cardano community finished Fund11 voting on Thursday, February 8, 11 AM UTC. Huge thanks to the Cardano community for your engagement and support throughout the entire voting round. What’s next? Tally and results. These are expected to be published by February 15 directly on the [Project Catalyst website](http://projectcatalyst.io). Relevant outcomes will be auditable as per [official documentation](http://docs.projectcatalyst.io).

### EDUCATION

This week, the **education** team is preparing to deliver the second iteration of the online Cardano Developer course next week in collaboration with [the African Blockchain Center](https://www.theafricablockchaincenter.com/). They are preparing the developer environment and lectures.

![](https://ucarecdn.com/e8dcc792-cb5d-40ef-9f78-d1bbcdaf80ad/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**ネットワーキング**チームはブートストラップピアに関連する変更をouroboros-network[リポジトリ](https://github.com/IntersectMBO/ouroboros-network/pull/4790)にマージし、初期開発バージョンのcardano-nodeを使用して統合とテストを継続しました。IOGチームは[DripDropz](https://dripdropz.io/)と協力して、[ドキュメントが誤解を招く](https://github.com/IntersectMBO/ouroboros-network/issues/4790)ことがないようにCDDL仕様の間違いを修正しました。ハンドシェイクプロトコルフラグを明確にし、それをinitiatorOnlyDiffusionModeと名付けました。  

「ノード間」プロトコルを介して他のノードとの接続を提供しているライブラリ作成者に、実装をレビューするよう助言しました。

Cardano財団と協力してtx-submission決定ロジックを改良し、SIGUSR1イベントでアウトバウンドガバナーステータスをダンプするデバッグ機能を実装しました。POSIX対応のOSにサポートを拡張したことで（commit[1](http://ouroboros-network#4730)、[2](https://github.com/IntersectMBO/ouroboros-network/issues/4789)）、監視とトラブルシューティング機能の改良を保証しました。

ピア共有を通じて[ノードの検出速度を制限](https://github.com/IntersectMBO/ouroboros-network/issues/4778)しました。

**コンセンサス**チームは、Ledger DB APIのセカンドバージョンを含むUTXO-HDプロトタイプのコンセンサスバージョンをノードに統合しました。[Conwayのエポック構造の変更](https://github.com/IntersectMBO/ouroboros-consensus/pull/927)を実装し、ブートストラップステートマシンとOuroboros Perasの計画を進めました。サポート面では、現在欠落したリーダーシップチェックに対するスナップショットの影響を調査しています。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive)をご覧ください。

### ウォレット&サービス

**Lace**チームはマイナーな修正に取り組んできましたが、現在次のv.1.9リリースに向けた準備を進めています。[Laceをブラウザに追加](https://www.lace.io?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=email-registration)して、Webサイトのフッターからメールリストに参加し、最新情報を入手してください。

### スマートコントラクト

**Plutus**チームは、スクリプトのPlutus言語バージョンや現在のプロトコルバージョンでサポートされていない組み込み関数を使用するなどの理由で、スクリプトがデコードに失敗した場合のエラーレポートを改良しました。

### スケーリング  

**Hydra**チームは[2024年1月の月次レポート](https://hydra.family/head-protocol/monthly/2024-01)を公開しました。失敗したコマンドに対するユーザーフィードバックを強化し、cardano-apiの依存関係とGHCを新しいバージョンに更新し、ハードフォークに備えて永続的なヘッドを再開しました。モデルベースのテストスイートを拡張してヘッドクローズをカバーし、io-simのバグを修正し、cardano-nodeの開発に積極的に貢献しました。

**Mithril**チームは、Mithrilネットワーク内でのCardanoトランザクションを認証するための新しいデータ型の実装を継続しました。Cardanoトランザクションのリスト用の[メンバーシップ証明の生成](https://github.com/input-output-hk/mithril/issues/1467)と、[生成されたアーティファクトのリスト作成](https://github.com/input-output-hk/mithril/issues/1478)を担当するアグリゲータールートを完了しました。[Cardanoトランザクションの検証](https://github.com/input-output-hk/mithril/issues/1468)をサポートするためにMithrilクライアントライブラリを拡張し、[SanchoNetで動作する新しいMithrilネットワークの構築](https://github.com/input-output-hk/mithril/issues/1173)にも取り組みました。

Mithrilネットワークの脅威モデリングとリスク分析への取り組みを続け、CIエンドツーエンドテストで発生する脆弱性を調査しました。

### VOLTAIRE & SANCHONET

SanchoNetは、CIP-1694の仕様に沿って、Cardanoブロックチェーンのガバナンス機能をロールアウトするためのテストネットです。こうした機能のテストに参加をご希望の場合は、[SanchoNetのWebサイト](https://sancho.network/get-started/)を確認してください。現在、FAQの更新とResources（リソース）セクションへの追加に取り組んでいます。

### CATALYST

今週の**Project Catalyst**では 、Fund11の投票が日本時間2月8日木曜日の午後8時に締め切られました。投票全体を通してエンゲージ、サポートしてくださったCardanoコミュニティに感謝します。今後の予定は集計と結果発表ですが、2月15日までに[Project CatalystのWebサイト](http://projectcatalyst.io)で公開される予定です。関連する結果は、[公式文書](http://docs.projectcatalyst.io)に準じて監査可能となります。

### 教育

**教育**チームは[African Blockchain Center](https://www.theafricablockchaincenter.com/)と協力して、来週オンラインで開催予定の第2回Cardano開発者コースを準備しています。現在、開発者の環境や講義の準備を進めています。
