---
title: Weekly development report as of 2024-01-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/caba1663-75e7-48e6-a058-03e7203b54e1/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **core technology** teams released node [v.8.7.3](https://github.com/IntersectMBO/cardano-node/releases/tag/8.7.3), which addresses a minor fix in `ouroboros-network`. This release resolves an issue in the `outbound-governor` where, under rare but reproducible conditions, the governor could lose track of certain outbound connections, such as a local root or another node. Benchmarking reports relevant to v.8.7.2 release remain applicable to v.8.7.3 and can be found in this [Cardano updates post](https://updates.cardano.intersectmbo.org/reports/2023-12-performance-8.7.2).

The **networking** team worked on some [issue analysis](https://updates.cardano.intersectmbo.org/2024-01-09-network/) and the \`[tx-submission](https://github.com/IntersectMBO/ouroboros-network/issues/3311)\` decision logic.

Over the past two weeks, the **consensus** team resumed work on [implementing](https://github.com/IntersectMBO/ouroboros-consensus/pull/858) the initialization and internals of the second iteration of the in-memory ledger database, and also on [integrating](https://github.com/IntersectMBO/ouroboros-consensus/pull/815) the new ledger database API for UTXO-HD.

Additionally, the team simplified [query](https://github.com/IntersectMBO/cardano-api/pull/403) [versioning](https://github.com/IntersectMBO/ouroboros-consensus/pull/863) for downstream users, [confirmed the cause](https://github.com/IntersectMBO/ouroboros-consensus/issues/868) of missed leadership checks due to ledger snapshots, and derived principles for the [versioning](https://github.com/IntersectMBO/ouroboros-consensus/issues/866)/[declaration](https://github.com/IntersectMBO/ouroboros-consensus/issues/864) of queries, since Conway complicates it. 

Finally, they unblocked the node team’s work on rollback-insensitive [leadership schedule queries](https://github.com/IntersectMBO/ouroboros-network/pull/4765) and drafted the (pre-Genesis) [bootstrap state machine](https://github.com/IntersectMBO/ouroboros-consensus/pull/808) for bootstrap peers.  

As always, see [this technical development report](https://updates.cardano.intersectmbo.org/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team released [version 1.8](https://x.com/lace_io/status/1744380684376924353?s=20), which resolves a bug with the `signData` method failing, provides stake pool rewards performance in a graph, and enables synchronization with other multi-address wallets. [Read this blog post](https://www.lace.io/blog/lace-1-8-0-release) for more details. The team has now regrouped after the holidays and are working on new exciting features.

### SMART CONTRACTS

This week, the **Plutus** tools team worked on [performances](https://github.com/input-output-hk/marconi/pull/287) to improve both the synchronization time and the memory footprint of Marconi to maintain the ledger state. At the same time, the team continued the effort of bundling Marconi with `cardano-node` to ease the indexation of ledger states and consensus events. They are now able to index ledger states using this solution, which is a huge milestone for the release of a queryable node using Marconi.

Finally, the team improved the tooling to [compare the indexers](https://github.com/input-output-hk/marconi/pull/282) with the indexation of DB Sync. 

The Plutus Core team merged two new primitives for bitwise operations: `integerToByteString` and `byteStringToInteger`. They will be made available in Plutus v3 after the Conway hard fork.

This week, the **Marlowe** team revised `marlowe-plutus` enhancements by publishing new `asData` [validators](https://github.com/input-output-hk/marlowe-cardano/pull/791) and [removing](https://github.com/input-output-hk/marlowe-plutus/pull/14) `PlutusTx.asData` for `Action`. They also [embedded validators](https://github.com/input-output-hk/marlowe-cardano/pull/793) by replacing the usages of data files with template Haskell, added `currentRange` to the `restClient#getContracts` response for Marlowe TS-SDK integration tests, and created the theme for [TS-SDK reference](https://github.com/input-output-hk/marlowe-ts-sdk/pull/122). 

Finally, the team queried [volume benchmarking](https://github.com/input-output-hk/marlowe-cardano/pull/795) for Marlowe Runtime.

### SCALING

Over the past couple of weeks, the **Hydra** team completed the implementation of the [Conway support feature](https://github.com/input-output-hk/hydra/pull/1227), fixed a [minor bug](https://github.com/input-output-hk/hydra/issues/1218) that was hindering tests running on MacOS, and addressed a [regression](https://github.com/input-output-hk/hydra/issues/1218) in the protocol-parameter formats used by the Hydra node. They also worked on off-chain code for incremental decommits, specifically focusing on transaction creation. Finally, they conducted a spike on implementing a chess game using Hydra, providing the [experience report](https://github.com/abailly/black-jack/blob/main/2023-experience-report.md).

The **Mithril** team worked on implementing the [client in the explorer](https://github.com/input-output-hk/mithril/issues/1409) to enable direct verification of certificates from the browser. They also addressed the [configuration issue](https://mithril.network/doc/dev-blog/2024/01/03/signer-service-new-configuration/) in the signer node service, which occasionally resulted in signers not registering their keys after a restart. Additionally, the team kept implementing a [mock aggregator](https://github.com/input-output-hk/mithril/issues/1397) to strengthen Mithril client tests in WASM, continued working on [threat modeling and risk analysis for P2P](https://github.com/input-output-hk/mithril/issues/1350) networking, and progressed with the [devnet upgrade](https://github.com/input-output-hk/mithril/issues/1425) to support the Conway era. 

Finally, they worked on enhancing [node communications](https://github.com/input-output-hk/mithril/issues/1315) between Mithril and Cardano and completed the upgrade of the [Cardano node topology](https://github.com/input-output-hk/mithril/issues/1405) used in the Mithril networks' infrastructure.

### VOLTAIRE & SANCHONET

Cardano’s momentum will continue requiring the community’s collective focus and participation this year, and the IOG Voltaire team will continue to contribute to the decentralized governance and decision making. The key moments in early 2024 will be the release of an interim constitution and technical guardrails for use during the Voltaire bootstrapping phase, laddering up to a constitutional convention later this year, where community-elected delegates will congregate and work together to pass a final version of the Cardano constitution to be ratified on-chain by the Cardano community.

Cardano’s core repositories have now been fully transitioned to Intersect’s stewardship. This marks a significant step toward decentralized governance. Explore the details of this crucial transition in [Intersect’s recent blog post](https://www.intersectmbo.org/news/open-horizons-cardano-migrates-to-intersect). If you are interested in joining any of the Intersect committees and working groups, you can reach out to the _membership and community_ committee directly by emailing [mcc@intersectmbo.org](mailto:mcc@intersectmbo.org). If you are interested in learning more about Intersect membership, [you can do so here](https://www.intersectmbo.org/).

SanchoNet continues to make good progress. It is now possible to use a testnet version of the Lace wallet, called Lace SanchoNet, to connect to the SanchoNet Voltaire [GovTool](https://www.intersectmbo.org/news/introducing-the-voltaire-govtool) and participate in [Cardano](https://twitter.com/hashtag/Cardano?src=hashtag_click) governance features from CIP-1694 in a controlled testnet environment. [Learn more here](https://buff.ly/3RPC8k1). [](https://t.co/aGSnn7tnWu)

### CATALYST

This week, **Project Catalyst** held its [first town hall of the year](https://www.youtube.com/watch?v=GdKlEAA3eCA). The next meeting is scheduled for the following week and then every Wednesday thereafter, always at 5 PM UTC. You can [register here](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform). 

Fund11 is progressing through the community review stage, now entering the moderation part where experienced community members help cross-check the output of the reviews. Results of this stage should be known within two weeks. 

In other news, Catalyst voter registration for Fund11 ends on January 15, and the snapshot of the voting power will take place at 21:45 UTC on that date. If you already have a valid voter registration from Fund10 – and access to your existing QR/PIN code – then you are already registered. For more information, please reference the [Catalyst GitBook here](https://docs.projectcatalyst.io/current-fund-basics/how-to-register-as-a-voter).  

### EDUCATION

This week, the **education** team focused on planning activities for the year and publication options for Mastering Cardano.

![](https://ucarecdn.com/3a2c26fa-08e4-4ce6-8fed-eea9adfe171f/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームはノード[v.8.7.3](https://github.com/IntersectMBO/cardano-node/releases/tag/8.7.3)をリリースしました。これは、ouroboros-networkのマイナー修正に対応しています。本リリースでは、まれではあるが再現可能な条件下で、ガバナーがローカルルートや別のノードなどの特定のアウトバウンド接続を追跡できなくなる可能性があるoutbound-governorの問題が解決されています。v.8.7.2リリースに関連するベンチマークレポートは、v.8.7.3に引き続き適用され、[こちらのCardano更新情報](https://updates.cardano.intersectmbo.org/reports/2023-12-performance-8.7.2)で確認できます。

**ネットワーキング**チームは、いくつかの[問題を分析](https://updates.cardano.intersectmbo.org/2024-01-09-network/)し、[tx-submission](https://github.com/IntersectMBO/ouroboros-network/issues/3311)決定ロジックに取り組みました。

過去2週間にわたり、**コンセンサス**チームは、インメモリー台帳データベース第2イテレーションの初期化と内容の[実装](https://github.com/IntersectMBO/ouroboros-consensus/pull/858)、およびUTXO-HD用の新しい台帳データベースAPIの[統合](https://github.com/IntersectMBO/ouroboros-consensus/pull/815)に関する作業を再開しました。

川下ユーザーの[クエリ](https://github.com/IntersectMBO/cardano-api/pull/403)の[バージョン管理](https://github.com/IntersectMBO/ouroboros-consensus/pull/863)を簡素化し、台帳スナップショットによるリーダーシップチェックの欠落の[原因を確認](https://github.com/IntersectMBO/ouroboros-consensus/issues/868)し、Conwayで複雑化したクエリの[バージョン管理](https://github.com/IntersectMBO/ouroboros-consensus/issues/866)や[宣言](https://github.com/IntersectMBO/ouroboros-consensus/issues/864)の原則を確認しました。ロールバックに影響されない[リーダーシップスケジュールクエリ](https://github.com/IntersectMBO/ouroboros-network/pull/4765)の作業でノードチームのブロックを解除し、ブートストラップピアのための（Genesis以前の）[ブートストラップステートマシン](https://github.com/IntersectMBO/ouroboros-consensus/pull/808)のドラフトを作成しました。  

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは新しいバージョン[1.8](https://x.com/lace_io/status/1744380684376924353?s=20)をリリースしました。これには、signDataメソッドの失敗によるバグの解消、ステークプール報酬パフォーマンスのグラフ表示、他のマルチアドレスウォレットとの同期が含まれます。詳しくは[こちらのブログ記事](https://www.lace.io/blog/lace-1-8-0-release)をご覧ください。年末年始の休暇を終え、チームはエキサイティングな新機能に取り組んでいます。

### スマートコントラクト

**Plutus**ツールチームは、Marconiの同期時間とメモリーフットプリントの両方を改善し、台帳ステータスを維持するための[パフォーマンス](https://github.com/input-output-hk/marconi/pull/287)に取り組みました。MarconiにCardano-nodeをバンドルして、台帳ステータスとコンセンサスイベントのインデックス作成を容易にする努力を続けました。現在は、このソリューションを使用して台帳ステータスのインデックスを作成できるようになりました。これは、Marconiを使用したクエリ可能なノードをリリースするための重要な通過ポイントとなります。

DB Syncのインデックス化で[インデクサーを比較](https://github.com/input-output-hk/marconi/pull/282)するためのツールを改良しました。 

Plutus Coreチームは、ビット演算用の2つの新しいプリミティブintegerToByteStringとbyteStringToIntegerをマージしました。これはConwayハードフォークの後のPlutus v3で有効になります。

**Marlowe**チームは、新しいasData[バリデーター](https://github.com/input-output-hk/marlowe-cardano/pull/791)を公開し、ActionのPlutusTx.asDataを[削除](https://github.com/input-output-hk/marlowe-plutus/pull/14)することで、marlowe-plutusの拡張を修正しました。データファイルの使用方法をテンプレートHaskellに置き換えて[バリデーターを埋め込み](https://github.com/input-output-hk/marlowe-cardano/pull/793)、Marlowe TS-SDK統合テストのresclient#getContractsレスポンスにcurrentRangeを追加し、[TS-SDK参照](https://github.com/input-output-hk/marlowe-ts-sdk/pull/122)用のテーマを作成しました。Marlowe Runtimeの[ボリュームベンチマーク](https://github.com/input-output-hk/marlowe-cardano/pull/795)を照会しました。

### スケーリング

**Hydra**チームは、この数週間で  [Conwayサポート機能](https://github.com/input-output-hk/hydra/pull/1227)の実装を完了し、MacOS上でテストの実行を妨げていた[軽微なバグ](https://github.com/input-output-hk/hydra/issues/1218)を修正し、Hydraノードで使用されているプロトコルパラメーター形式の[不具合](https://github.com/input-output-hk/hydra/issues/1218)に対処しました。インクリメンタルデコミットのためのオフチェーンコード、特にトランザクションの作成に焦点を当てて取り組みました。Hydraを使用したチェスゲームの実装でスパイクを実施し、経験レポートを提供しました。

**Mithril**チームは、ブラウザーから証明書を直接検証できるように、[エクスプローラーでクライアント](https://github.com/input-output-hk/mithril/issues/1409)を実装する作業に取り組みました。サイナーが再起動後に鍵を登録しないことがあるというサイナーノードサービスの[コンフィグ問題](https://mithril.network/doc/dev-blog/2024/01/03/signer-service-new-configuration/)にも対処しました。WASMでMithrilのクライアントテストを強化するための[模擬アグリゲーター](https://github.com/input-output-hk/mithril/issues/1397)の実装、[P2Pネットワーキングの脅威モデリングとリスク分析](https://github.com/input-output-hk/mithril/issues/1350)への取り組みを続け、Conway期をサポートするための[devnetアップグレード](https://github.com/input-output-hk/mithril/issues/1425)を進めました。 

MithrilとCardano間の[ノード通信](https://github.com/input-output-hk/mithril/issues/1315)の強化に取り組み、Mithrilネットワークインフラで使用されている[Cardanoノードトポロジー](https://github.com/input-output-hk/mithril/issues/1405)のアップグレードを完了しました。

### VOLTAIRE & SANCHONET

Cardanoの勢いは今年も引き続き、コミュニティ一丸となった注目、参加を必要としています。IOG Voltaireチームも引き続き、分散型のガバナンスおよび意思決定貢献していきます。2024年初頭の重要事項は、Voltaireのブートストラップ段階で使用する暫定憲法と技術ガードレールのリリースであり、今年後半には憲法制定会議に向けて準備が進められます。コミュニティで選出された代表者が集まり、Cardano憲法の最終版を可決したら、Cardanoコミュニティによる批准が求められます。

Cardanoのコアリポジトリは、Intersectの管理下に完全に移行されました。これは分散型ガバナンスへの重要な一歩となります。この重要な移行の詳細については、Intersectの[最近のブログ記事](https://www.intersectmbo.org/news/open-horizons-cardano-migrates-to-intersect)をご覧ください。Intersect委員会やワーキンググループへの参加に興味がある場合は、mcc@intersectmbo.orgに電子メールを送信して、メンバーシップおよびコミュニティ委員会に直接問い合わせてください。Intersectメンバーシップの詳細については、[こちら](https://www.intersectmbo.org/)をご覧ください。

SanchoNetは順調に進歩しています。現在は、Lace SanchoNetと呼ばれるLaceウォレットのテストネットバージョンを使用して、SanchoNet Voltaire [GovTool](https://www.intersectmbo.org/news/introducing-the-voltaire-govtool)に接続し、制御されたテストネット環境でCIP-1694の[Cardano](https://twitter.com/hashtag/Cardano?src=hashtag_click)ガバナンス機能に参加できます。[詳細はこちらをご覧ください](https://buff.ly/3RPC8k1)。 [](https://t.co/aGSnn7tnWu)

### CATALYST

**Project Catalyst**は今年最初のタウンホールを開催しました。次回のミーティングは来週予定されており、以降毎週水曜5時UTC（日本時間木曜午前2時）に開催されます。登録は[こちら](https://docs.google.com/forms/d/e/1FAIpQLSd4E8C01F-DEB3CaM7pBvw-J5NLQbO2pc7ORIUHda-oM9SI5Q/viewform)から行えます。 

Fund11はコミュニティレビューの段階にあり、経験豊富なコミュニティメンバーがレビュー結果をクロスチェックするモデレーションの段階に入っています。この段階の結果は2週間以内に告知されます。 

Fund11のCatalyst有権者登録は1月15日で終了し、議決権のスナップショットは同日21:45UTC（日本時間16日午前6:45）に実施されます。Fund10で有権者登録を行い、QR/PINコードにアクセスできる場合、登録は有効です。詳細は、[Catalyst GitBook](https://docs.projectcatalyst.io/current-fund-basics/how-to-register-as-a-voter)を参照してください。  

### 教育

**教育**チームは、年間の活動計画とMastering Cardanoの出版オプションに焦点を当てました。
