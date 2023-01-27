---
title: Weekly development report as of 2023-01-27
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/e7ed6e3a-d520-4d35-abf0-ff6d31d6175e/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **ledger** team completed some preliminary groundwork in preparation for [CIP-1694](https://github.com/cardano-foundation/CIPs/blob/3a0d2824fe502a8593d63bbf00bf8d9a7b5cbdeb/CIP-1694/README.md), fixed the PDF hosting problem with formal specifications, and continued working on the new user-friendly ledger API. The team also finished a proof of concept of constraint-based generators for running property tests, which should hopefully replace the current trace generators. Finally, they addressed technical debt.

During the past two weeks, the **consensus** team finished the testing activities around the UTXO-HD prototype. This is a very important milestone that will enable running system-level tests and benchmarks, as well as start refactoring and cleaning the prototype. Work is ongoing on Genesis development; the team elaborated a roadmap that gives an indication of the remaining work. They also continued working on chain-sync-jumping benchmarking. Finally, the team progressed in improving the way they handle blocks from the future and advancing the integration of the new [VRF and KES](https://docs.cardano.org/development-guidelines/operating-a-stake-pool/creating-keys-and-certificates) crypto.

Last week, IOG also announced the date of the [upcoming SECP upgrade](https://www.essentialcardano.io/article/new-cardano-cryptographic-primitives-will-bring-greater-interoperability-and-secure-cross-chain-dapp-development), which will drive greater interoperability and secure, cross-chain DApp development. The mainnet upgrade is proposed tentatively for February 14, 2023 at 21:44:51 UTC. On that basis, IOG is targeting the update to the [pre-production test environment](https://docs.cardano.org/cardano-testnet/getting-started/#environments) on February 11, 2023 at 00:00:00 UTC.

The **networking** and **node** teams, with the help of members of the SPO community, have been investigating the root cause of the anomalous network behavior this week, which briefly affected a number of network and relay nodes at the weekend. Positive progress has been made. Thanks as ever to all the Cardano SPO community for their support in this.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

Work is ongoing on the **Lace** desktop development. The team addressed their technical debt, which included refactoring, developer tools improvements, and folder structure changes. They also added an internationalization feature to support more languages in the future, improved the local [node](https://www.essentialcardano.io/glossary/node) shutdown process, and fixed some [hardware wallet](https://www.essentialcardano.io/glossary/hardware-wallet) issues.

The **Adrestia** team kept working on updating Rosetta and GraphQL to the latest versions of the node and DBSync. See the latest [release notes here](https://docs.cardano.org/tools/release-notes).

They also continued preparing cardano-js-sdk to release it into production, and finally, they are currently working on extending the multi-signature feature with delegation functionality in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team planned their work for the next five sprints. The main goals of the Plutus core team are to finalize the debugger MVP, increase script capacity, add property testing with the Plutus intermediate representation generators, and add formal methods for the Plutus builtins. 

The Plutus tools team aims to finalize work on the Marconi MVP, which is a lightweight, customizable chain follower application and library for DApp developers to index parts of the Cardano blockchain for fast querying. They will also continue working on the cardano-ledger-api package documentation and the prototype of the Plutus testing infrastructure.

The **Marlowe** team added long polling support for contracts to the API, tested [CIP-30](https://cips.cardano.org/cips/cip30/) wallet integration against Nami, and created a test-spec for [marlowe-cardano](https://github.com/input-output-hk/marlowe-cardano#readme). They also added some unit tests, fixed bugs, improved some constructs, and added support for the application of inputs to the Actus Lab.

### BASHO (SCALING)

The **Hydra** team focused on the [Hydra Head](https://hydra.family/head-protocol/) V1 specification – its first version is now finalized and in review. The team also aligned the on-chain scripts for funds reimbursement to work as defined in the specification and improved the mutation test framework to have more control when testing Plutus scripts.

The added `HeadId` in the API and the TUI example client make `hydra-node` easier to integrate and a first experiment of a Hydra Head explorer shows the utility of this on the [preview test environment.](http://explorer.hydra.family/)

Last week, the teams also published a paper on ‘[Implementing auction projects using Hydra](https://www.essentialcardano.io/article/implementing-auction-projects-using-hydra)’, which is a collaborative project by IOG and MLabs. Read the linked paper or this [summary blog post](https://www.essentialcardano.io/article/iog-and-mlabs-cooperate-to-develop-a-reference-implementation-of-an-auction-using-hydra-protocols) for more details.

The **Mithril** team completed the implementation of the backward/forward compatibility mechanism of their API messages for handling seamless soft updates of the [Mithril networks](https://mithril.network/doc/category/mithril-network). They also completed the proof of concept to rely on an on-chain transaction to synchronously trigger the era switch of all the [signer](https://mithril.network/doc/mithril/mithril-network/signer) nodes for synchronous updates, and updated the enforcement of the API version by assessing compatibility using Semver.

Finally, the team started implementing the era behavior switch mechanism that will be used to handle breaking changes that require synchronous updates of the signers.

### GOVERNANCE

**Project Catalyst’s** new home, [projectcatalyst.io](//projectcatalyst.io), is not only a window into Project Catalyst but a database shining a light on all funded projects and Fund specifics. You can track projects’ progress with reports, payments received, and learn more about the teams that are delivering behind the scenes. 

Last year, a new [milestones-based reporting requirement](https://iohk.io/en/blog/posts/2022/11/01/repositioning-project-catalyst-ahead-of-the-next-funding-round/) launched that a large group of funded projects needs to follow. This created greater oversight and transparency for every project, and further demonstrates the great work being done on Cardano. A community audit working group was also launched, in which anyone can participate and support the value Project Catalyst delivers for Cardano. If you are interested in participating, email [catalyst@iohk.io](mailto:catalyst@iohk.io).  

![](https://lh3.googleusercontent.com/NTRb7sXG3QWCmuekz2NJEW-W4K-AZVoiTiHf-weqiB-9WsAxLLzfDVTOHD4gErI519v6wzRlfFZQZNAIyMH7jRb3ocLzOAO28GZ1Lt65tyqh28RjuKFU46SE-bB9h7K8kE14nNkLnTj9_wEP3co-naT4ajLziyBHvviFT5z3zDmChBgYCZA-cwyFlAelqcl8)

### コアテクノロジー

**台帳**チームは、[CIP-1694](https://github.com/cardano-foundation/CIPs/blob/3a0d2824fe502a8593d63bbf00bf8d9a7b5cbdeb/CIP-1694/README.md)の下準備を終えました。PDFのホスティング問題を形式的仕様記述を使用して解消し、新しいユーザーフレンドリーの台帳APIに関する作業を続けました。プロパティテスト実行用の制約ベースのジェネレーターの概念実証を完了しました。これは、現在のトレースジェネレーターと置き換えることになります。また、技術負債に対処しました。

先週、IOGは[予定されているSECPアップグレード](https://www.essentialcardano.io/article/new-cardano-cryptographic-primitives-will-bring-greater-interoperability-and-secure-cross-chain-dapp-development)の日付を発表しました。これは、より優れた相互運用性と、安全なクロスチェーンのDApp開発を促進するものです。メインネットのアップグレードは暫定的に日本時間2023年2月15日06:44:51が提案されています。これに基づき、IOGは[プリプロテスト環境](https://docs.cardano.org/cardano-testnet/getting-started/%23environments)の更新を日本時間2023年2月12日09:00:00に予定しています。

**ネットワーキング**チームと**ノード**チームは、SPOコミュニティの協力を得て、ネットワークの動作異常を引き起こした原因を調査しました。これにより、週末に多くのネットワークおよびリレーノードが一時影響を受けました。これは順調な進捗を見せています。ご協力いただいたCardano SPOコミュニティに感謝します。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**デスクトップの開発作業は進行中です。リファクタリング、開発ツールの改良、フォルダー構造の変更を含む技術負債に取り組みました。将来に向けてより多くの言語をサポートするための国際化機能を追加し、ローカル[ノード](https://www.essentialcardano.io/glossary/node)強制終了プロセスを改良し、[ハードウェアウォレット](https://www.essentialcardano.io/glossary/hardware-wallet)の不具合を修正しました。

**Adrestia**チームは、RosettaとGraphQLを最新バージョンのノードとDBSyncに更新する作業を続けました。最新の[リリースノートはこちら](https://docs.cardano.org/tools/release-notes)をご覧ください。

cardano-js-sdkを本番環境にリリースするための作業を続けたほか、現在マルチシグ機能をcardano-walletの委任機能で拡張する作業を行っています。

### スマートコントラクト

**Plutus**チームは、次の5スプリントの作業を計画しました。Plutus Coreチームの主要目標は、デバッガーMVPを仕上げ、スクリプト容量を増やし、Plutus中間表現ジェネレーターを使ったプロパティテストを追加し、Plutusビルトインの形式手法を追加することです。 

Plutusツールチームは、DApp開発者がCardanoブロックチェーンの一部にインデックスを付けて高速クエリを実現するための、軽量でカスタマイズ可能なチェーンフォロワーアプリケーションおよびライブラリであるMarconi MVPの作業を仕上げることを目指しました。cardano-ledger-apiパッケージの文書化と、Plutusテストインフラのプロトタイプに関する作業も続けました。

**Marlowe**チームは、APIにコントラクト用のロングポーリングサポートを追加し、Namiに対して[CIP-30](https://cips.cardano.org/cips/cip30/)ウォレットの統合をテスト行い、[marlowe-cardano](https://github.com/input-output-hk/marlowe-cardano%23readme)のテスト仕様を作成しました。ユニットテストを追加し、バグを修正し、構造を改良し、Actus Labへの入力の適用のサポートを追加しました。

### Basho( スケーリング)

**Hydra**チームは、[Hydra Head](https://hydra.family/head-protocol/) V1の仕様に集中しました。初回バージョンは現在完了しレビュー中です。仕様の定義通りに機能するよう資金払い戻し用のオンチェーンスクリプトを調整し、Plutusスクリプトをテストする際の制御を強化するようミューテーションテストフレームワークを改良しました。

APIに追加した`HeadId`とTUIサンプルクライアントにより、`hydra-node`の統合が容易になり、Hydra Headエクスプローラーの初回実験は、[プレビューテスト環境](http://explorer.hydra.family/)での有用性を示しました。

先週は、 IOGとMLabsとの共同プロジェクトである「[Hydraを使用したオークションプロジェクトの実装](https://iohk.io/jp/blog/posts/2023/01/20/implementing-auction-projects-using-hydra/)」に関する論文を発表しました（日本語版は後日アップ予定）。詳細は、リンク先の論文または[こちらの概要ブログ](https://iohk.io/jp/blog/posts/2023/01/20/implementing-auction-projects-using-hydra-1/)（日本語版有り）をご覧ください。

**Mithril**チームは、[Mithrilネットワーク](https://mithril.network/doc/category/mithril-network)のシームレスなソフトアップデートを処理するためのAPIメッセージの前方/後方互換性メカニズムの実装を完了しました。また、同時更新のためにすべての[署名者](https://mithril.network/doc/mithril/mithril-network/signer)ノードの開発期切り替えを同時にトリガーするオンチェーントランザクションに依存する概念実証を完了し、Semverを使って互換性を査定することによりAPIバージョンの適用を更新しました。

署名者の同時更新を必要とする重要な変更を処理するために使用されることになる、開発期動作切り替えメカニズムの実装を始めました。

### ガバナンス

**Project Catalyst**の新拠点、[projectcatalyst.io](//projectcatalyst.io)は、Project Catalystへの窓口となるだけでなく、資金調達を受けたすべてのプロジェクトとファンドの詳細に光を当てるデータベースです。プロジェクトの進捗状況はレポート、支払い状況で追跡することができます。また、舞台裏で活躍するチームについて知ることもできます。 

昨年、新たに資金調達を受けたプロジェクトの大グループが提出すべき[マイルストンベースのレポート要件](https://iohk.io/jp/blog/posts/2022/11/01/repositioning-project-catalyst-ahead-of-the-next-funding-round/)が導入されました。  これにより、すべてのプロジェクトの監視と透明性が向上し、Cardanoで行われている素晴らしい作業がより詳しく示されることになりました。また、誰でも参加可能なコミュニティ監査ワーキンググループが立ち上がり、Project CatalystがCardanoに提供する価値を支えています。参加をご希望の方は、catalyst@iohk.ioへメールでご連絡ください。
