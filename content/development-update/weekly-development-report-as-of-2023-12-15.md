---
title: Weekly development report as of 2023-12-15
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/afe73d68-7264-43fc-8802-5be255a71538/
image_text: Weekly development report as of 2023-12-15
---

Dear community members, please note that this is the last development update in 2023. We will resume publishing on January 12, 2024. 

Wishing you all joyful holidays and a fantastic New Year! 🎄🎉 May the coming year bring new achievements, exciting developments, and continued success. 

### CORE TECHNOLOGY

This week, the **core technology** teams released [node v.8.7.2](https://github.com/input-output-hk/cardano-node/releases/tag/8.7.2) bringing CLI refactoring from [SanchoNet](https://sancho.network/get-started/) to mainnet to provide teams with time to update their components in preparation for v.9.0 release. Version 8.7.2 also brings P2P networking layer improvements. Additionally, the node team focused on [bug fixing and code optimizations](https://updates.cardano.intersectmbo.org/2023-12-08-node-cli-api/) in preparation for a mainnet-suitable release.

The **networking** team [worked on](https://updates.cardano.intersectmbo.org/2023-12-08-network/) peer sharing, bootstrap peers, transaction submission application, and fixed a `PeerSelection` bug.

As always, see [this technical development report](https://updates.cardano.intersectmbo.org/archive/) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team released [Lace 1.8](https://www.lace.io/blog/lace-1-8-0-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog), bringing improved stake pool rewards performance in a graph, synchronization with other multi-address wallets, and several bug fixes.

### SMART CONTRACTS

This week, the **Plutus** Core team implemented common subexpression elimination (CSE) for Untyped Plutus Core, resulting in moderate - and sometimes significant - improvements to the costs and sizes of most scripts.

This week, the **Marlowe** team worked on improving [Marlowe validators](https://github.com/input-output-hk/marlowe-plutus/pull/12), updated the [starter kit lesson 10](https://github.com/input-output-hk/marlowe-cardano/pull/766), ensured that the generated schema [targets OpenAPI 3.1.0](https://github.com/input-output-hk/marlowe-cardano/pull/769) in marlowe-cardano, aligned the current docs with the latest release, [removed some filters](https://github.com/input-output-hk/marlowe-order-book-swap/pull/79) from the marlowe-order-book-swap, and [fixed CI failures](https://github.com/input-output-hk/marlowe-ts-sdk/pull/121). Additionally, the team created [a version document for TS-SDK](https://github.com/input-output-hk/marlowe-ts-sdk/pull/111), added [support](https://github.com/input-output-hk/marlowe-ts-sdk/pull/114) for Deno and NodeJS, and [reorganized](https://github.com/input-output-hk/marlowe-doc/pull/196) and edited the new version of the [TS-SDK overview](https://github.com/input-output-hk/marlowe-doc/pull/197).

Finally, the team automated Marlowe Runner [test scenarios](https://github.com/input-output-hk/marlowe-runner/commit/69626f7) and improved multi-wallet handling, and set up a [Cabal project](https://github.com/input-output-hk/marlowe-agda/commit/774e1bd) for the marlowe-agda repository. 

### SCALING

This week, the **Hydra** team released version [0.14.0](https://github.com/input-output-hk/hydra/releases/tag/0.14.0), which makes the Hydra network more resilient, simplifies the layer 1 protocol using inline datums, and includes a hydra-chain-observer executable. They also [updated dependencies](https://github.com/input-output-hk/hydra/issues/1114) in preparation for Conway support and completed substantial refactoring in hydra-node using [stateless observation](https://github.com/input-output-hk/hydra/issues/1096), aiming to enhance system efficiency and performance. Finally, they investigated regressions related to JSON serialized transactions and considered dropping this in favor of CBOR-only submission.

The **Mithril** team completed the adaptation of the [Mithril client library](https://github.com/input-output-hk/mithril/issues/1336) for WASM compilation by providing a JavaScript API. They also completed the [proof of concept](https://github.com/input-output-hk/mithril/issues/1393) to demonstrate that a subset of Cardano transactions is part of the entire transactions set. The refactoring of the [Mithril client CLI](https://github.com/input-output-hk/mithril/issues/1335) with the Mithril client library was also finalized. Additionally, the team kept working on the [threat modeling and risk analysis for P2P networking](https://github.com/input-output-hk/mithril/issues/1350), along with progressing in the implementation of a [testing Mithril network for SanchoNet](https://github.com/input-output-hk/mithril/issues/1173). Finally, they started implementing an expiration mechanism for the open messages in the aggregator and completed the upgrade of Rust dependencies with breaking changes.

### VOLTAIRE

It’s closing in on the end of the year, and what a year it’s been for the Voltaire team. This year, the community building and collaboration advanced Cardano closer to its final developmental phase — Voltaire. Designed as the infrastructure for the Cardano community to collaborate around, Intersect continues to serve as the scaffolding for distributed community building.  This year saw the launch of the Intersect Member-based organization, the beta launch of [GovTool](https://docs.sanchogov.tools/about/what-is-sanchonet-govtool) on [SanchoNet](https://sancho.network/), the testnet version of Lace ([Lace SanchoNet](https://t.co/aGSnn7tnWu)), various community and committee workshops, the Cardano Summit, town halls, ballots, and so much more.

Ultimately, the future of governance in Cardano is what its members want it to be. The Cardano community has the opportunity to define their roles and help shape the ongoing evolution of Cardano and how it supports the development of the protocol.

2023 was a busy year for Cardano, and 2024 will be even more eventful. In early 2024, the consultation period for the constitution will begin to accelerate. Led by the Cardano civics committee (CCC) at Intersect, the initial consultation period will last 12 months and include many workshops, allowing Cardano's global community to have their voice heard and their input recorded. 

Next year, the Chang hard fork will be initiated, marking a significant milestone on Cardano's roadmap and concluding the initial roadmap. The implementation of [CIP-1694](https://www.1694.io) advances minimum-viable governance and institutes on-chain community consensus.

The Voltaire team would like to express their greatest appreciation for all the hard work the community has put into the progress made toward realizing the vision of CIP-1694.

### CATALYST

This week, **Project Catalyst** is transitioning into Fund11 community review stage, where community members help review and provide their feedback on submitted proposals against three main criteria: impact, feasibility/capability, and, finally, value for money. 

More than 2,500 people have expressed interest in participating in this stage. The schedule for the remainder of the fund remains unchanged with voting set to begin in the second half of January. 

Also - the [last town hall number 150](https://www.youtube.com/watch?v=FgTiHQy5NK8) took place this week wrapping up events for the year and will resume on January 10, 2023. Did you know that there are now more than [700 completed projects](https://docs.google.com/presentation/d/1kVPNaEpnDRAVXBkMxIIv7kZFRc4TSiCAV_HbXUq6nkM/edit#slide=id.g2a0501d164d_0_13) in the program? 

Happy building and holidays ahead!

![](https://ucarecdn.com/f83c561c-a9c1-47fb-b7ac-9648bc02a396/-/preview/-/format/auto/-/quality/smart/)

コミュニティの皆様、本レポートは2023年最後の開発レポートです。新年は、2024年1月12日より公開を再開します。 

どうぞ、良いお年をお迎えください。🎄🎉 来年も、新たな成果、エキサイティングな発展、そして継続的な成功がもたらされますように。 

### コアテクノロジー

**コアテクノロジー**チームは[ノードv.8.7.2](https://github.com/input-output-hk/cardano-node/releases/tag/8.7.2)をリリースし、メインネットに[SanchoNet](https://sancho.network/get-started/)からCLIリファクタリングを導入しました。これにより、v.9.0リリースに向けてコンポーネントを更新する時間ができました。バージョン8.7.2では、P2Pネットワーキング層も改良されています。ノードチームは、メインネットリリース版の準備として[バグの修正とコードの最適化](https://updates.cardano.intersectmbo.org/2023-12-08-node-cli-api/)に焦点を当てました。

**ネットワーキング**チームは、ピア共有、ブートストラップピア、トランザクション送信アプリケーションに[取り組み](https://updates.cardano.intersectmbo.org/2023-12-08-network/)、PeerSelectionのバグを修正しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive/)をご覧ください。

### ウォレットとサービス 

**Lace** チームはLace 1.8をリリースしました。ここでは、ステークプール報酬パフォーマンスのグラフ表示、他のマルチアドレスウォレットとの同期、バグ修正を行っています。

### スマートコントラクト

**Plutus** Coreチームは型指定されていないPlutus CoreのCSE（共通部分式除去）を実装し、ほとんどのスクリプトのコストとサイズをある程度、場合によっては大幅に改善しました。

**Marlowe**チームは、[Marloweバリデーター](https://github.com/input-output-hk/marlowe-plutus/pull/12)の改良に取り組み、[スターターキットレッスン10](https://github.com/input-output-hk/marlowe-cardano/pull/766)を更新し、生成されたスキーマがmarlowe-cardanoの[OpenAPI 3.1.0をターゲット](https://github.com/input-output-hk/marlowe-cardano/pull/769)にしていることを確認し、現在のドキュメントを最新リリースに調整し、marlowe-order-book-swapから[いくつかのフィルターを削除](https://github.com/input-output-hk/marlowe-order-book-swap/pull/79)し、[CIの障害を修正](https://github.com/input-output-hk/marlowe-ts-sdk/pull/121)しました。[TS-SDKのバージョンドキュメント](https://github.com/input-output-hk/marlowe-ts-sdk/pull/111)を作成し、DENOとNodeJSの[サポート](https://github.com/input-output-hk/marlowe-ts-sdk/pull/114)を追加し、[TS-SDKの概要](https://github.com/input-output-hk/marlowe-doc/pull/196)の新バージョンを[再編](https://github.com/input-output-hk/marlowe-doc/pull/196)および編集しました。

Marlowe Runnerの[テストシナリオ](https://github.com/input-output-hk/marlowe-runner/commit/69626f7)を自動化し、マルチウォレットの処理を改善し、marlowe-agdaリポジトリ用に[Cabalプロジェクト](https://github.com/input-output-hk/marlowe-agda/commit/774e1bd)をセットアップしました。 

### スケーリング

**Hydra**チームはバージョン0.14.0をリリースしました。これは、Hydraネットワークの回復力を高め、インラインデータムを使用してレイヤー1プロトコルを簡素化し、hydra-chain-observer実行可能ファイルを含んでいます。Conwayサポートに備えて[依存関係を更新](https://github.com/input-output-hk/hydra/issues/1114)し、システムの効率とパフォーマンスを向上させることを目指しhydra-nodeでのステートレス観測を用いた実質的なリファクタリングを完了しました。JSONシリアル化トランザクションに関連する回帰を調査し、CBORのみの提出を支持するためにこれを取り下げることを検討しました。

**Mithril**チームは、JavaScript APIを提供することで[Mithrilクライアントライブラリー](https://github.com/input-output-hk/mithril/issues/1336)をWASMコンパイル用に適応させる作業を完了しました。Cardanoトランザクションのサブセットがトランザクションセット全体の一部であることを実証するための[概念実証](https://github.com/input-output-hk/mithril/issues/1393)を完了しました。Mithrilクライアントライブラリーを使用した[MithrilクライアントCLI](https://github.com/input-output-hk/mithril/issues/1335)のリファクタリングも完了しました。P2Pネットワークの脅威モデリングとリスク分析への取り組みを続け、SanchoNet用Mithrilテストネットワークの実装を進めました。最後に、Aggregatorで開いているメッセージの有効期限メカニズムの実装を開始し、最新の変更を反映させたRust依存関係のアップグレードを完了しました。

### VOLTAIRE

Voltaireチームにとって素晴らしい年となった今年も終わりに近づきました。今年、コミュニティの構築とコラボレーションにより、Cardanoは最後の開発フェーズ、Voltaireにより一層近づきました。Cardanoコミュニティが協働するためのインフラとして設計されたIntersectは、分散型コミュニティ構築の足場として機能し続けています。  今年は、メンバーベース組織であるIntersectの立ち上げ、[SanchoNet](https://sancho.network/)での[GovTool](https://docs.sanchogov.tools/about/what-is-sanchonet-govtool)ベータ版の立ち上げ、Laceのテストネットバージョン（[Lace SanchoNet](https://t.co/aGSnn7tnWu)）、コミュニティや委員会のさまざまなワークショップ、Cardanoサミット、タウンホール、投票などがありました。

Cardanoのガバナンスの未来は、究極的にはメンバーが望むものです。Cardanoコミュニティには、自らの役割を定義し、進行中であるCardanoの進化とプロトコルの開発をどのようにサポートするかを形作る機会があります。

2023年はCardanoにとって忙しい年でしたが、2024年はさらにイベントが盛りだくさんとなるでしょう。2024年初頭には、憲法の協議期間が加速し始めます。CCC（Cardano市民委員会）が率いる最初の協議期間は12か月です。これには多くのワークショップが含まれており、Cardanoのグローバルコミュニティは意見を表明することができ、その意見は記録されます。 

来年はChangハードフォークが開始されます。これはCardanoのロードマップの重要なマイルストン、最初のロードマップを締めくくりとなります。[CIP-1694](https://www.1694.io)の実施は、最小実行可能なガバナンスを推進し、オンチェーンのコミュニティコンセンサスを形成します。

Voltaireチームは、CIP-1694のビジョンの実現に向けてコミュニティが尽力してきたすべての努力に敬意を表します。

### CATALYST

**Project Catalyst**はFund11コミュニティレビュー段階に移行しています。コミュニティメンバーは、インパクト、実現可能性/能力、金額に見合う価値という3つの主要な基準に基づいて、提出された提案に対するレビューとフィードバックを提供します。 

2,500以上の人々がこの段階に参加することに関心を示しています。ファンドの残りのスケジュールは変更なく、1月後半に投票が開始される予定です。 

[今年最後の第150回タウンホールが](https://www.youtube.com/watch?v=FgTiHQy5NK8)今週開催され、今年のイベント締めくくります。再開は、2023年1月10日です。現時点で、本プログラムでは[完了済みプロジェクトが700](https://docs.google.com/presentation/d/1kVPNaEpnDRAVXBkMxIIv7kZFRc4TSiCAV_HbXUq6nkM/edit#slide=id.g2a0501d164d_0_13)に上ります。 

構築と休暇が楽しいものとなることをお祈りします。
