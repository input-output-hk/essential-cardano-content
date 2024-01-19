---
title: Weekly development report as of 2024-01-19
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/eb7b445e-8012-4f69-9324-966bb33e1603/
image_text: Weekly development report as of 2024-01-19
---

### CORE TECHNOLOGY

Over the past few weeks, the **ledger** team implemented many features, including new ledger events, increasing the limit of the URL length, enabling consensus queries, and JSON instances. This was required for implementation testing of a reliable transaction fee estimation function, which is also available for `cardano-cli` now. 

The team also addressed such important bug fixes as guarding against invalid protocol versions in hard fork initiation proposals, retaining failures during Plutus cost model updates, fixing the types of some protocol parameters to prevent too large values, and addressing serialization and CDDL fixes.

Find out more about Conway-related development in the Voltaire section below.

As always, see [this technical development report](https://updates.cardano.intersectmbo.org/archive) for more details from different teams.

### SMART CONTRACTS

This week, the **Marlowe** team implemented the benchmark for the [basic contract lifecycle](https://github.com/input-output-hk/marlowe-cardano/pull/797), carried out a block utilization [stress test](https://github.com/input-output-hk/marlowe-cardano/commit/842869719), and added the [initial state](https://github.com/input-output-hk/marlowe-cardano/pull/796) to the contract state response. They also added the Merkleized contract flow [example](https://github.com/input-output-hk/marlowe-ts-sdk/pull/136) to TS-SDK, removed the wallet/nodes/single address wallet [package](https://github.com/input-output-hk/marlowe-ts-sdk/pull/158), cited compatible [Runtime version(s)](https://github.com/input-output-hk/marlowe-ts-sdk/pull/160/files) in the TS-SDK readme, and established the [tooling for the integration test](https://github.com/input-output-hk/marlowe-ts-sdk/pull/142).

Finally, the team worked on the Marlowe Run web application wireframe and design along with the vesting contract UI updates and worked on Agda code (Commits: [1](https://github.com/input-output-hk/marlowe-agda/commit/f3358ee), [2](https://github.com/input-output-hk/marlowe-agda/commit/4e470e8), [3](https://github.com/input-output-hk/marlowe-agda/commit/72fb042), [4](https://github.com/input-output-hk/marlowe-agda/commit/2f88a74), [5](https://github.com/input-output-hk/marlowe-agda/commit/88dd7b0), [6](https://github.com/input-output-hk/marlowe-agda/commit/f3d6cc0), [7](https://github.com/input-output-hk/marlowe-agda/commit/08ea43c)).

### SCALING

This week, the **Hydra** team improved GitHub action workflows (issues [#1242](https://github.com/input-output-hk/hydra/pull/1242), [#1233](https://github.com/input-output-hk/hydra/pull/1233)), addressed protocol parameter [schema consistency](https://github.com/input-output-hk/hydra/issues/1234) in `hydra-node`, and made enhancements to [log schema tests](https://github.com/input-output-hk/hydra/pull/1244). They also created an [architectural decision record (ADR)](https://github.com/input-output-hk/hydra/pull/1215/files#diff-3a6c7dcfd58c753d4e2639cbfeeff78b09bdd0709a01e6658884de790590c702) for Cardano transaction serialization in APIs, moved the `hydra-chess` project to a dedicated [repository](https://github.com/cardano-scaling/hydra-chess), and resolved a bug in `quickcheck-dynamic` and model tests.

The **Mithril** team completed the [implementation of the client](https://github.com/input-output-hk/mithril/issues/1409) in the explorer, enabling direct certificate verification from the browser. They initiated the [implementation of a new entity type](https://github.com/input-output-hk/mithril/issues/1434) for signing to certify the Cardano transactions set in Mithril networks. The team also [upgraded the devnet](https://github.com/input-output-hk/mithril/issues/1425) to support the Conway era and activated the [Mithril era marker reader](https://github.com/input-output-hk/mithril/issues/1428) on the Cardano chain in the end-to-end test. Additionally, they kept implementing a [mock aggregator](https://github.com/input-output-hk/mithril/issues/1397) to strengthen Mithril client [tests in WASM](https://github.com/input-output-hk/mithril/issues/1434) and continued working on threat modeling and risk analysis for P2P networking.

Finally, they worked on enhancing node communications between Mithril and Cardano and started upgrading the infrastructure to support node version 8.7.3.

If interested, join the [monthly review meeting](https://meet.google.com/udc-zgyw-agd) featuring demos on Hydra, Mithril, and related projects happening on January 19, 2024, at 17:30 UTC.

### VOLTAIRE & SANCHONET

Work continues on Voltaire development. The **ledger** team continued working on the Conway era functionality through the refactoring of how Plutus language versions are distinguished in each era, which significantly improves type safety. With this, the team finalized Plutus v3 integration, which will be available in the Conway era.

The team also implemented the `protocolVersion` field in JSON instance for Babbage and Conway protocol parameters, ensured that the DRep registration certificate requires a witness, improved the new committee governance action ratification, and fixed some Conway-related issues. See more in [this technical development update](https://updates.cardano.intersectmbo.org/2024-01-10-ledger/#conway).

The core tech teams also updated the SanchoNet documentation with new [community video guides](https://github.com/input-output-hk/sanchonet/pull/124/files), updated the file naming convention, and [updated links](https://github.com/input-output-hk/sanchonet/pull/119/files) to reflect core Cardano code repo migration to Intersect.  

### CATALYST

This week, **Project Catalyst** is about to conclude the moderation period of the community review. More than 70,000 moderations have been submitted by about 250 active participants as level 2 moderators. This stage’s results should be  available within a week, and they will ultimately inform the voting app presentation. 

The community also held its [second town hall of the year](https://www.youtube.com/watch?v=Ux_Fc4LZ0eY). The next meeting is scheduled for the following week and then every Wednesday thereafter, always at 5 PM UTC. You can [register here](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform). 

Remember, voting is expected to start one week from now - on January 25, noon UTC and will remain open for two weeks until February 8, 11 AM UTC. We’re looking forward to your active participation in the upcoming Fund11 vote. You can also refer to the Catalyst Knowledge Base [GitBook pages here](https://docs.projectcatalyst.io/fund-documentation/fund11-docs/voting) to learn more about voting. 

The Catalyst team also published the latest blog elaborating the concept of Catalyst working groups and how these could come into action over the coming months. We encourage you to [read more about it here](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap).   

### EDUCATION

The **education** team is focused on planning activities for the year and also updating the Haskell Bootcamp course.

![](https://ucarecdn.com/19240cc8-6ea9-4c62-9cb4-eb540b986db9/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

過去数週間にわたり、**台帳**チームは新しい台帳イベント、URLの長さ制限の拡張、コンセンサスクエリの有効化、JSONインスタンスなど、多くの機能を実装しました。これは信頼性の高いトランザクション手数料見積もり機能をテストするための実装に必要とされるもので、現在Cardano-cliでも利用できます。 

ハードフォークの開始提案における無効なプロトコルバージョンからの保護、Plutusコストモデルの更新中の失敗の保持、一部のプロトコルパラメーターの型の値が大きくなりすぎるのを防ぐための修正、シリアル化とCDDLの修正などの重要なバグ修正にも取り組みました。

Conway関連の開発の詳細は、下記Voltaireセクションをご覧ください。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive)をご覧ください。

### スマートコントラクト

**Marlowe**チームは、[基本コントラクトのライフサイクル](https://github.com/input-output-hk/marlowe-cardano/pull/797)のベンチマークを実装し、ブロック使用率の[ストレステスト](https://github.com/input-output-hk/marlowe-cardano/commit/842869719)を実行し、コントラクトステータスの応答に[初期ステータス](https://github.com/input-output-hk/marlowe-cardano/pull/796)を追加しました。TS-SDKにマークル化コントラクトのフロー[例](https://github.com/input-output-hk/marlowe-ts-sdk/pull/136)を追加し、ウォレット/ノード/シングルアドレスウォレット[パッケージ](https://github.com/input-output-hk/marlowe-ts-sdk/pull/158)を削除し、TS-SDK readmeで互換性のある[Runtimeバージョン](https://github.com/input-output-hk/marlowe-ts-sdk/pull/160/files)を引用し、[統合テストのためのツール](https://github.com/input-output-hk/marlowe-ts-sdk/pull/142)を確立しました。

Marlowe Runウェブアプリケーションのワイヤーフレームと設計に加えて、べスティングコントラクトのUIの更新とAGDAコード（コミット[1](https://github.com/input-output-hk/marlowe-agda/commit/f3358ee)、[2](https://github.com/input-output-hk/marlowe-agda/commit/4e470e8)、[3](https://github.com/input-output-hk/marlowe-agda/commit/72fb042)、[4](https://github.com/input-output-hk/marlowe-agda/commit/2f88a74)、[5](https://github.com/input-output-hk/marlowe-agda/commit/88dd7b0)、[6](https://github.com/input-output-hk/marlowe-agda/commit/f3d6cc0)、[7](https://github.com/input-output-hk/marlowe-agda/commit/08ea43c)）に取り組みました。

### スケーリング

**Hydra**チームはGitHubのアクションワークフローを改善し（Issue：[#1242](https://github.com/input-output-hk/hydra/pull/1242)、[#1233](https://github.com/input-output-hk/hydra/pull/1233)）、hydra-nodeにおけるプロトコルパラメーターの[スキーマの一貫性](https://github.com/input-output-hk/hydra/issues/1234)に取り組み、[ログスキーマテスト](https://github.com/input-output-hk/hydra/pull/1244)を強化しました。APIでCardanoトランザクションのシリアル化のための[アーキテクチャー決定レコード（ADR）](https://github.com/input-output-hk/hydra/pull/1215/files#diff-3a6c7dcfd58c753d4e2639cbfeeff78b09bdd0709a01e6658884de790590c702)を作成し、hydra-chessプロジェクトを専用[リポジトリ](https://github.com/cardano-scaling/hydra-chess)に移動し、quickcheck-dynamicとモデルテストのバグを修正しました。

**Mithril**チームは、エクスプローラーでクライアントの実装を完了し、ブラウザーから直接証明書を検証できるようにしました。Mithrilネットワークで設定されたCardanoトランザクションを認証するための署名用に[新しいエンティティタイプの実装](https://github.com/input-output-hk/mithril/issues/1434)を開始しました。コンウェイ期のサポートのために[devnetをアップグレード](https://github.com/input-output-hk/mithril/issues/1425)し、エンドツーエンドテストでCardanoチェーン上で[Mithril期のマーカーリーダー](https://github.com/input-output-hk/mithril/issues/1428)をアクティブ化しました。[WASMでMithrilのクライアントテスト](https://github.com/input-output-hk/mithril/issues/1434)を強化するための[模擬アグリゲーター](https://github.com/input-output-hk/mithril/issues/1397)の実装を継続し、P2Pネットワーキングの脅威モデリングとリスク分析に取り組みました。

MithrilとCardano間のノード通信の強化に取り組み、ノードバージョン8.7.3をサポートするためにインフラのアップグレードを開始しました。

関心がある方は、2024年1月19日17:30UTC（日本時間20日4:30）に開催されるHydra、Mithril、および関連プロジェクトに関するデモを紹介する[月例レビュー会議](https://meet.google.com/udc-zgyw-agd)にご参加ください。

### VOLTAIRE & SANCHONET

Voltaireの開発作業は続いています。台帳チームは、Plutus言語バージョンが各期でどのように区別されるかをリファクタリングしてConway期の機能への取り組みを続け、型の安全性を大幅に向上させました。これとともに、Plutus v3統合を仕上げました。これはConway期に利用可能になります。

BabbageとConwayプロトコルパラメーターのJSONインスタンスにprotocolVersionフィールドを実装し、DRep登録証明書に証人が必要であることを確認し、委員会ガバナンスアクションの新しい批准を改良し、Conway関連の不具合を修正しました。詳細は、[技術開発更新情報](https://updates.cardano.intersectmbo.org/2024-01-10-ledger/#conway)を参照してください。

コアテックチームはSanchoNetのドキュメントを更新し、新しい[コミュニティ動画ガイド](https://github.com/input-output-hk/sanchonet/pull/124/files)を追加し、ファイル命名規則を更新し、 [リンクを更新](https://github.com/input-output-hk/sanchonet/pull/119/files)してCardanoコアコードリポジトリのIntersectへの移行を反映させました。  

### CATALYST

**Project Catalyst**は、コミュニティレビューのモデレーション期間をまもなく終了します。70,000の変更が、レベル2モデレーターとして登録された250人のアクティブな参加者から送信されています。このステージの結果は1週間以内に明らかになり、最終的に投票アプリのプレゼンテーションが通知されます。 

コミュニティは[今年2回目のタウンホール](https://www.youtube.com/watch?v=Ux_Fc4LZ0eY)を開催しました。次回のミーティングは来週予定されており、以降毎週水曜5時UTC（日本時間木曜午前2時）に開催されます。登録は[こちら](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform)から行えます。 

投票期間は、1週間後の1月25日正午（UTC：日本時間は同日21:00）に開始される予定であり、2月8日11:00（UTC：日本時間は同日20:00）までの2週間となります。Fund11の投票への積極的な参加を期待しています。投票の詳細は、Catalyst Knowledge Baseの[GitBookページ](https://docs.projectcatalyst.io/fund-documentation/fund11-docs/voting)でも参照できます。 

Catalystチームは、Catalystワーキンググループのコンセプトと、今後数か月の間にこれらをどのように行動に移すかを詳述したブログを公開しました。詳細は[こちら](https://projectcatalyst.io/blog/catalyst-working-groups-roadmap)をご覧ください。   

### 教育

**教育**チームは、今年の活動計画と、Haskell Bootcampコースの更新に焦点を当てています。
