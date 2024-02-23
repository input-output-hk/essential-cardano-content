---
title: Weekly development report as of 2024-02-23
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/bd57d326-a5ba-4e12-b4e5-60273cbfacf6/
image_text: Weekly development report as of 2024-02-23
---

### CORE TECHNOLOGY

This week, the **networking** team worked on the [integration of bootstrap peers](https://github.com/IntersectMBO/cardano-node/pull/5485) with `cardano-node` to improve network connectivity. `cardano-node-8.9` will be the first node to support this feature with more improvements to come gradually. The team also [improved connections](https://github.com/IntersectMBO/ouroboros-network/pull/4800) related to remote destinations, continued working on the [tx-submission](https://github.com/IntersectMBO/ouroboros-network/issues/3311) decision logic, and updated the networking documentation including the node-to-node protocol version details.

The **consensus** team worked on an [issue](https://github.com/IntersectMBO/ouroboros-consensus/issues/952) involving unnecessary block downloads and created a prototype for a partial solution. They also discovered a bug in the [io-sim](https://github.com/input-output-hk/io-sim) while working on the [Genesis state machine tests](https://github.com/IntersectMBO/ouroboros-consensus/pull/808), which had already been fixed upstream. Additionally, the team added support for [configuring the number of ledger state snapshots](https://github.com/IntersectMBO/ouroboros-consensus/pull/943) to be retained pending integration into the node.

### SCALING

This week, the **Hydra** team made significant progress with the model-based testing framework, successfully reproducing a bug and resolving issues related to fully validating Cardano transactions. The team enhanced code quality by integrating Haskell linting into their CI workflow and implemented a user-requested conversion of `HeadId` to `CurrencySymbol`.

The **Mithril** team continued developing a new data type for certifying Cardano transactions within Mithril networks and enhanced [client CLI](https://github.com/input-output-hk/mithril/issues/1469) output. The team made progress in supporting the verification of Cardano transactions in the browser with the [WASM client](https://github.com/input-output-hk/mithril/issues/1470). Additionally, they worked on a new feature of the Pallas chain observer to support stake distribution retrieval and addressed [flakiness in CI](https://github.com/input-output-hk/mithril/issues/1147) end-to-end tests. They successfully deployed the new [Mithril network on SanchoNet](https://github.com/input-output-hk/mithril/issues/1503) and completed a new tool for automatic documentation [generation for the CLIs](https://github.com/input-output-hk/mithril/issues/1471).

### VOLTAIRE & SANCHONET

Work on SanchoNet functionality is ongoing. The teams are working on governance actions, tutorial updates, and expanding the list of frequently asked questions. To get involved, see [SanchoNet documentation](https://sancho.network/get-started/) and [join the community](https://sancho.network/get-started/discord) to test CIP-1694 on-chain governance functionality.

### CATALYST

This week the **Project Catalyst** team, along with [Rare Evo](https://twitter.com/RareEvo) and [Sustainable Ada](https://twitter.com/SustainableADA) -  announced during the 157th town hall ([recording here](https://www.youtube.com/live/klvMc8YfCJg?feature=shared&t=2177)) that a special fun voting event will take place to determine where Fund12 is going to be launched. This will be the continuation of [the funded Fund11 proposal](https://projectcatalyst.io/funds/11/catalyst-systems-improvements-discovery/catalyst-working-groups-research-and-scoping-analysis-by-iog-catalyst-team-rare-evo-and-sustainable-ada) that outlines the concept of Catalyst working groups. Have you caught the blog about this from a few weeks back? If not, [here it is](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap). 

The in-person event will kick start this several months-long community-sensing journey that will seek to better understand and evolve Project Catalyst as a whole. How does it all begin? Within the next two weeks, the Catalyst team plans to launch a new voting round via the Catalyst Voting app that will list six cities around the world: Barcelona, Buenos Aires, Nairobi, Sydney, Tokyo, and Toronto. And YOU - the Cardano community will be deciding which will be the official launch location for Fund12. This decision will be based on 1-wallet-1 vote and set the minimum participation threshold at 50 ada. The snapshot already took place and will be the same as the one for the Fund11 vote. Stay tuned via [announcement channels](https://t.me/cardanocatalyst) for more information. 

In other developments, [300 projects voted in Fund11](https://projectcatalyst.io/funds/11) are now being onboarded into the [Catalyst network](https://docs.projectcatalyst.io/current-fund-basics/catalyst-network) and are progressing through formulation and approvals of their statement of milestones – the accountability framework that each funded project must follow. You can learn more about that [here](https://docs.projectcatalyst.io/current-fund-basics/project-onboarding).

### EDUCATION

This week, the **education** team is delivering the second week of their online Cardano Developer course and also working on updates to the Haskell Bootcamp course.  
  
  
![](https://ucarecdn.com/c55d8dc0-74f8-48d9-b35b-a38aea87b383/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**ネットワーキング**チームは、ネットワーク接続を改善するために、cardano-nodeと[ブートストラップピアとの統合](https://github.com/IntersectMBO/cardano-node/pull/5485)に取り組みました。この機能をサポートする最初のノードはcardano-node-8.9となり、徐々に改良が加えられていきます。リモート接続先に関連する[接続を改善し](https://github.com/IntersectMBO/ouroboros-network/pull/4800)、[tx送信](https://github.com/IntersectMBO/ouroboros-network/issues/3311)決定ロジックの作業を継続し、ノードツーノードプロトコルバージョンの詳細を含むネットワーキングドキュメントを更新しました。

**コンセンサス**チームは、ブロックの不要なダウンロードに関する[問題](https://github.com/IntersectMBO/ouroboros-consensus/issues/952)に取り組み、部分的な解決策のプロトタイプを作成しました。アップストリームですでに修正されている[Genesisステートマシンテスト](https://github.com/input-output-hk/io-sim)に取り組んでいる際に、[io-sim](https://github.com/input-output-hk/io-sim)のバグを発見しました。ノードへの統合保留を保持する台帳ステータススナップショットの数を設定するためのサポートを追加しました。

### スケーリング

**Hydra**チームはモデルベースのテストフレームワークで大きく前進し、バグの再現に成功し、Cardanoトランザクションの完全な検証に関連する問題を解決しました。HaskellリントをCIワークフローに統合することでコード品質を向上させ、ユーザーから要請されたHeadIdからcurrencySymbolへの変換を実装しました。

**Mithril**チームはMithrilネットワーク内でCardanoトランザクションを認証するための新しいデータタイプの開発を続け、[クライアントCIL](https://github.com/input-output-hk/mithril/issues/1469)アウトプットを強化しました。[WASMクライアント](https://github.com/input-output-hk/mithril/issues/1470)を使用したブラウザーでのCardanoトランザクション検証サポートで前進しました。ステーク分布の取得をサポートするためのPallasチェーンオブザーバーの新機能に取り組み、[CIエンドツーエンドテストの脆弱性](https://github.com/input-output-hk/mithril/issues/1147)に対処しました。[SanchoNetに新しいMithrilネットワーク](https://github.com/input-output-hk/mithril/issues/1503)をデプロイし、[CLIのドキュメント生成](https://github.com/input-output-hk/mithril/issues/1471)を自動化する新しいツールを完成させました。

### VOLTAIRE & SANCHONET

SanchoNet機能に関する作業は進行中です。ガバナンスアクション、チュートリアルの更新、よくある質問のリストの拡大に取り組んでいます。参加するにはSanchoNetのドキュメントを参照し、 [コミュニティに参加](https://sancho.network/get-started/discord)してCIP-1694オンチェーンガバナンス機能をテストしてください。

### CATALYST

**Project Catalyst**チームは、[Rare EVO](https://twitter.com/RareEvo)と[Sustainable Ada](https://twitter.com/SustainableADA)とともに、第157回タウンホール（[録画はこちら](https://www.youtube.com/live/klvMc8YfCJg?feature=shared&t=2177)）で、Fund12のローンチ場所を決定するための楽しいスペシャル投票イベントが行われることを発表しました。これは、Catalystワーキンググループのコンセプトを概説した[Fund11で資金提供された提案](https://projectcatalyst.io/funds/11/catalyst-systems-improvements-discovery/catalyst-working-groups-research-and-scoping-analysis-by-iog-catalyst-team-rare-evo-and-sustainable-ada)の続きとなります。数週間前にはこの件についてブログ記事が投稿されました。未読の場合は、[こちらからご覧ください](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap)。 

対面式のイベントでは、Project Catalyst全体をよりよく理解し、進化させることを目指した、数か月にわたるコミュニティセンシングが始まります。今後の予定ですが、Catalystチームは、今後2週間以内にCatalyst Votingアプリを使って新しい投票ラウンドを開始する予定です。ここでは、バルセロナ、ブエノスアイレス、ナイロビ、シドニー、東京の6都市がリストアップされます。そのうちのどこでFund12の公式ローンチとなるかを決定するのはあなた、Cardanoコミュニティです。この決定は、1ウォレット1票をベースに行われ、最小参加閾値は50ADAです。スナップショットはすでに行われており、Fund11の投票と同じです。詳細は、[案内チャネル](https://t.me/cardanocatalyst)をご覧ください。 

その他の開発では、[Fund11で投票された300プロジェクト](https://projectcatalyst.io/funds/11)が現在、[Catalystネットワーク](https://docs.projectcatalyst.io/current-fund-basics/catalyst-network)にオンボーディング中であり、マイルストンステートメントの策定と承認を通じて進行しています。これは、資金提供された各プロジェクトが従うべき説明責任フレームワークです。詳細は[こちら](https://docs.projectcatalyst.io/current-fund-basics/project-onboarding)をご覧ください。

### 教育

**教育**チームはCardano Developerオンラインコースの第2週目を配信し、Haskell Bootcampの更新に取り組んでいます。
