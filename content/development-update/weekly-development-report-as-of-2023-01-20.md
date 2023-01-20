---
title: Weekly development report as of 2023-01-20
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/11a70edd-b0e2-4a6f-a856-9e3f3977c9c3/
image_text: ""
---

### CORE TECHNOLOGY

Over the past two weeks, the **ledger** team finalized work on tracking individual depots, built out the new Conway era transaction body (in line with [CIP-1694](https://github.com/cardano-foundation/CIPs/blob/3a0d2824fe502a8593d63bbf00bf8d9a7b5cbdeb/CIP-1694/README.md)), significantly reduced some problematically large calculations on the epoch boundary, and addressed technical debt.

The system test team worked on the test framework improvements and ran some sanity tests related to the P2P single relay functionality.

The teams also updated node and DB Sync synchronization tests to build with Nix and focused on integrating upstream changes and addressing technical debt.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team ran tests and released Daedalus v.5.2.0, which includes support for node v.1.35.4 and wallet 2022.12.14.

Work is ongoing on the **Lace** desktop development. The team worked on several refactoring tasks, including the implementation of support for internalization. They refined the local node status for it to be presented in UI, fixed some Linux and Ledger hardware wallet issues, and finally, upgraded to the new cardano-js-sdk v.0.7.0.

The **Adrestia** team released Cardano Rosetta 2.0.0. They're now working on getting cardano-js-sdk production-ready. This component is now in Beta stage.

Finally, they completed and documented a multi-signature (spending templates) feature in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team kept working on increasing script capacity, inliner optimization, and the Plutus debugger MVP. The Plutus tools team continued building Marconi indexers and worked on technical debt by supporting cardano-api in the emulator.

The **Marlowe** team implemented a new tool used to compare the chainseek database against cardano-db-sync, improved Nix configurations for the Marlowe repository, and fixed a problem that caused the `edit-marlowe-proofs` command failure. They also implemented tests for roundtrip serialization for all types, fixed a misleading redeemer type in the Runtime API, and set up the Marlowe integration testing environment. 

Finally, they created a table listing active ACTUS contracts.

### BASHO (SCALING)

The **Hydra** team worked on the Hydra Head technical specification, improved hydra-plutus scripts, made the unique `headId` available to Hydra clients through the API, allowed the hydra-node to explicitly synchronize from genesis (if configured), and fixed smaller log and build issues reported by new users.

The team also held the first sessions with Catalyst and the Cardano Foundation on the voting project.

Finally, see a retrospective [blog post](https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/) published by Matthias Benkort from the Cardano Foundation about Hydra, summarizing the teams’ progress made in 2022 and plans for 2023. You can also find a full monthly digest for December 2022 on the [Hydra website](https://hydra.family/head-protocol/monthly/2022-12).

The **Mithril** team released a new [2302.0](https://github.com/input-output-hk/mithril/releases/tag/2302.0) distribution that activates the optimization of the snapshot digest computation on the signer and aggregator nodes. They also started implementing a backward/forward compatibility mechanism for handling seamless soft updates of the Mithril networks without using synchronous updates when possible. The team kept working on the proof of concept to rely on an on-chain transaction to synchronously trigger the era switch of all the signer nodes for synchronous updates.

Finally, they finished upgrading the `devnet`, fixed the flakiness issues in the end-to-end tests of the CI, and upgraded the SPO documentation to set up a Mithril signer node.

### GOVERNANCE

This week, **Project Catalyst** launched its new website - [projectcatalyst.io](//projectcatalyst.io). It will be the home to learn how to get involved, review previous funds, and explore funded projects. 

Last week, the concept of Special Voting Events that will take place using Catalyst tooling was mentioned. As a reminder, a Special Voting Event (SVE) is a vote held outside of Project Catalyst fund cycles. Using Catalyst tooling, SVE acts as the vehicle for obtaining community consent for decisions that do not correspond to innovation or Project Catalyst community challenges.

In the age of Voltaire, SVEs are complementary to [CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md) and offer a path to achieve community consent on important decisions before CIP-1694 is live or for decisions that do not correspond to a governance action.  
  
The first Special Voting Event will be introduced as part of Fund10! More details coming soon.  

![](https://lh4.googleusercontent.com/y_sxqAL3ikDmI5pmi9OTlNsAeGpeA8h9qD7-kwRcxOe1FvndoMxhGpbsiph8YSxBYMRo08TC6dEVWqL9zv8gWJfYHcgRnZVXAyaE0lGNdeniqMVzUMS4I_Jszsj4bzBVXF73W64c8fquttyVCzcJfwUelC-KjfBtPmQcY5126ss1ND_0IXXNHoFiKxvU-edg)

### コアテクノロジー

この2週間、**台帳**チームは個別デポの追跡作業の仕上げ、新しいConway期のトランザクションボディ（[CIP-1694](https://github.com/cardano-foundation/CIPs/blob/3a0d2824fe502a8593d63bbf00bf8d9a7b5cbdeb/CIP-1694/README.md)に準拠）の構築、エポック境界で問題となるほど大規模な計算の大幅な削減、技術負債への対応に取り組んできました。

システムテストチームはテストフレームワークの改良に取り組み、P2Pシングルリレー機能に関する健全性テストを行いました。

ノードとDB Syncの同期テストをNixで構築して更新し、アップストリームの変更の統合と技術負債への対応に集中しました。

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームはDaedalus v.5.2.0のテストを実行し、リリースしました。これには、ノードv.1.35.4とウォレット2022.12.14のサポートが含まれます。

**Lace**デスクトップの開発作業は進行中です。内部化のサポートの実装を含む複数のリファクタリングタスクに取り組みました。これに関するローカルノードのステータスをUIに表示するよう変更し、LinuxとLedgerハードウェアウォレットに関する不具合を修正し、新しいcardano-js-sdk v.0.7.0にアップグレードしました。

**Adrestia**チームはcardano Rosetta 2.0.0をリリースしました。現在cardano-js-sdkを本番環境にするための作業に取り組んでいます。このコンポーネントは現在ベータ段階です。

cardano-walletのマルチシグ機能（送金テンプレート）を完了し、文書化しました。

### スマートコントラクト

**Plutus**チームは、引き続きスクリプト容量の拡大、インライナーの最適化、Plutus Debugger MVPにを取り組みました。Plutusツールチームは、Marconiインデクサーの構築を続けた他、エミュレーターでcardano-apiをサポートすることによって技術負債にも取り組みました。

**Marlowe**チームは、チェーンシークデータベースとcardano-db-syncとの比較に使用する新ツールを実装し、MarloweリポジトリのNix設定を改良し、edit-marlowe-proofsコマンドの失敗を引き起こした問題を修正しました。すべてのタイプのラウンドトリップシリアル化テストを実装し、Runtime APIの紛らわしいリディーマータイプを修正し、Marlowe統合テスト環境をセットアップしました。 

アクティブなACTUSコントラクトをリストアップした表を作成しました。

### Basho( スケーリング)

**Hydra**チームはHydra Headの技術仕様に取り組み、hydra-plutusスクリプトを改良し、HydraクライアントがAPI経由で一意のheadIdを利用できるようにし、hydra-nodeがジェネシスから明示的に同期できるようにし（設定されている場合）、新ユーザーから報告されたログやビルドに関する軽微な不具合を修正しました。

投票プロジェクトに関して、CatalystおよびCardano財団と初セッションをもちました。

Hydraのこれまでを振り返り、2022年の業績および2023年のプランについて概説した、Cardano財団のMatthias Benkortによる[ブログ記事](https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/)をご覧ください。2022年12月のマンスリーダイジェスト完全版は[Hydraサイト](https://hydra.family/head-protocol/monthly/2022-12)をご覧ください。

**Mithril**チームは新しい[2302.0](https://github.com/input-output-hk/mithril/releases/tag/2302.0)ディストリビューションをリリースしました。これは署名者ノードおよびアグリゲーターノードのスナップショットダイジェスト計算の最適化を有効化します。可能な場合に同期更新を使用せずにMithrilネットワークのシームレスなソフトアップデートを処理するための後方/前方互換性メカニズムの実装も始めました。引き続き、すべての署名者ノードが同時に開発期を切り替えるようトリガーする、オンチェーントランザクションに依存する概念実証の実装に取り組んでいます。

`devnet`のアップグレードを完了し、CIのエンドツーエンドテストにあった不安定な個所を修正し、Mithril署名者ノードをセットアップするためのSPO向けドキュメントをアップグレードしました。

### ガバナンス

**Project Catalyst**は新サイト[projectcatalyst.io](//projectcatalyst.io)を立ち上げました。今後、参加方法の確認、以前のファンドの閲覧、資金調達を受けたプロジェクトの詳細を知るための場所として機能します。 

先週、Catalystツールを使用して行われるスペシャル投票イベントのコンセプトについてお知らせしました。繰り返しますが、スペシャル投票イベント（SVE）はProject Catalystのファンドサイクルとは別に開催されます。Catalystツールを使用することで、SVEはイノベーションやProject Catalystのコミュニティチャレンジに対応しない決定に対してコミュニティの同意を得る手段として機能します。  
  

Voltaireの時代において、SVEは[CIP-1694](https://github.com/JaredCorduan/CIPs/blob/voltaire-v1/CIP-1694/README.md)を補完し、CIP-1694が公開される前に重要な決定、または、ガバナンスアクションに対応しない決定に関してコミュニティの同意を得るためのルートを提供します。  
  
初回SVEはFund10の一部として導入されます。近日中に詳細をお知らせします。
