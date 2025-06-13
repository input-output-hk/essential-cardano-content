---
title: Weekly development report as of 2025-06-13
tags:
  - Development
  - Weekly development updates
  - Statistics
  - Ecosystem
url: ""
image: https://ucarecdn.com/cb3fdd26-0cd5-409d-9bac-ca27a5315ad9/
image_text: Weekly development report as of 2025-06-13
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

There are currently 2,004 projects building on Cardano, with 820 focused on non-NFT use cases and 1,184 related to NFTs. The number of delegated wallets reached 1.33 million, up 0.04% since last week. Native tokens total 10.83 million, with 216,879 token policies – both showing slight weekly growth.

The number of Plutus scripts stands at 138,365, among which 7,213 are Aiken scripts. Transactions on the network reached 110.43 million, a 0.20% increase since the previous week. There are now 1,352 DReps registered, up 0.44%. GitHub activity also rose, with 278 commits recorded – a 32% increase from the previous week.

In other news:

*   [NBX](https://x.com/nbxcom/status/1932805570735845618), a Norwegian exchange, has launched a $USDC/$USDM trading pair
    
*   [Yoroi Wallet](https://x.com/YoroiWallet/status/1930895763262910604) has announced changes to its governance UI in the next release, based on community feedback
    
*   [Flow DeFi](https://x.com/flowdefi/status/1932075519887261780) has released the public testnet for its lending protocol
    
*   Voting is now open for the constitutional committee elections and will close on July 2
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1933147976530059367) has launched Originate, an open-source traceability solution for verifying authenticity.
    

### CORE TECHNOLOGY

Over the past few weeks, the **site reliability engineering** (SRE) team continued working on Cardano environment improvements and regular maintenance. They updated the `cardano-parts`, `cardano-playground`, and `cardano-mainnet` clusters to Nix packages `25.05` and Nix `2.29.1`, with all machines now deployed. The `cardano-airgap` repository now provides an ISO download via the Hydra continuous integration (CI) server.

They also prepared for the integration of the new tracing system in `cardano-node`. Several related pull requests listed in the ‘[repository work in progress](https://updates.cardano.intersectmbo.org/2025-06-06-sre#repository-work-in-progress----prs-and-branches)’ section are planned for merging before the node v.10.6.0 release tagging. This will make the new tracing system the default in binary artifacts, Docker images, and book configurations.

The **consensus** team focused on catching up with the Leios ledger and protocol design, planning to add transactions to the Haskell Leios simulator. They fixed issues in the ledger CDDLs, corrected the encoding of `WithOrigin` in the TPraos ledger state snapshot, and addressed a race condition in the LedgerDB v2 snapshotting process. They also [implemented](https://github.com/input-output-hk/cuddle/pull/68) a CDDL validator in Cuddle and released [version 0.5.0.0](https://chap.intersectmbo.org/package/cuddle-0.5.0.0/).  

Finally, the team evaluated a proposed change to the VRF [tiebreaker](https://github.com/IntersectMBO/ouroboros-consensus/pull/1548) and [published an analysis](https://hackmd.io/hX7q5s8JSKSP-j3525J0bA) for community review. Community members who wish to discuss this change are encouraged to join the upcoming technical working group meeting on Thursday, June 19, at 14:30 UTC.

### SMART CONTRACTS

Over the past two weeks, the **Plutus** Core team completed the implementation of case analysis for booleans and integers. 

The Plinth team added support for evaluating `CompiledCode` using the CEK machine – see the [new guide for details](https://plutus.cardano.intersectmbo.org/docs/using-plinth/evaluating-plinth). They also improved `ToData` and `FromData` instance generation by using the `List` constructor for product types, and expanded the built-in list API with additional utility functions.

Finally, the team completed the Plutus section of the [blueprint](https://github.com/cardano-scaling/cardano-blueprint/pull/46) to support developers implementing alternative evaluators and began releasing `plutus-metatheory` on CHaP, a step toward integrating the certifier into the Plinth compiler.

### SCALING

This week, the **Hydra** team completed the final key security check for the [deposit logic](https://github.com/cardano-scaling/hydra/pull/1978). They also implemented several usability improvements, including enhanced logging, clearer error messages, and more informative [APIs for the head state](https://github.com/cardano-scaling/hydra/issues/1957).

A new release is planned soon, which will include these improvements along with fixes for minor bugs. Finally, the team continues to support work on the Glacier drop.

The **Mithril** team released the pre-release version of the [2524.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2524.0-pre) distribution. This version supports Cardano node v.10.4.1 and introduces a new Mithril client CLI command for [converting UTXO-HD ledger state snapshots](https://github.com/input-output-hk/mithril/issues/2492). It also includes various bug fixes and improvements.

The team completed the extension of aggregator metrics to track different client types and finalized preparations to [stabilize the Cardano DB v2 client commands](https://github.com/input-output-hk/mithril/issues/2493) in both the CLI and API for production use. They also worked on [implementing the publisher](https://github.com/input-output-hk/mithril/issues/2539) using the `n2c local message submission` mini-protocol from the Pallas library for the DMQ node, and continued transitioning protocol message encoding to binary.

Finally, they refactored parts of the standard library and continued refactoring the [STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369).

The **Leios** team focused on infrastructure, formal methods, and large-scale network simulation. In the formal specification, they added Full-Short Leios as a special case of Short Leios and implemented trace verification for it.

The team launched simulations using a new pseudo-mainnet topology with 10,000 nodes, including 2,657 block producers and a realistic global distribution. Simulations ranged from 1 to 300 transactions per second (TPS), revealing some performance bottlenecks, particularly in the Haskell simulation and higher TPS in the Rust version. Enhancements included transaction sampling, reference-based input blocks (IBs), and improved handling under high load.

Additionally, they completed an in-depth analysis of transaction conflicts and fee incentives. Findings highlighted the inevitability of honest conflicts, the role of memory pool rules in reducing duplicates, and the need to balance collateral requirements with Cardano’s guarantees. The team also proposed endorser block (EB)-level optimizations to minimize the storage of duplicate transactions.

See [Leios weekly updates](https://leios.cardano-scaling.org/news) for more details.

### CATALYST

**Catalyst** town hall 192 marked the completion of the weekly Catalyst projects. Find [town hall recordings here](https://projectcatalyst.io/news/town-hall) and explore the latest [Catalyst Horizons report](https://projectcatalyst.io/reports) and [interactive global map](https://projectcatalyst.io/global-map). On the engineering side, efforts are now focused on transitioning to the native Catalyst application.

### EDUCATION

This week, the **education** team turned its attention to developing the Cardano Education Program (CEP). This program will consist of a set of self-paced learning modules that teach all aspects of Cardano and include suggested learning paths and additional optional modules.

They are also preparing for the Cardano Days event at the Institute of Science Tokyo at the end of the month. Watch out for the registration page and further details coming soon.

  
![](https://ucarecdn.com/3b9847e9-010e-428c-a8ff-ee5f937bc981/)

### **エコシステム**

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

現在Cardanoで構築されているプロジェクトは2,004で、うち820は非NFTユースケースに焦点が当てられており、1,184はNFTに関係しています。委任済みウォレット数は、前週比0.04%増の133万に達しました。ネイティブトークンの総数は1083、トークンポリシー数は21万6,879となり、この1週間で両方ともわずかに増加しています。

Plutusスクリプト数は13万8,365、うち7,213がAikenスクリプトです。ネットワークのトランザクション数は、前週から0.20%増加して1億1043万に達しました。DRep登録数は0.44%アップの1,352人です。GitHubアクティビティも増加し、278コミットが記録されています。これは、前週から32%上昇しています。

その他のニュース：

*   ノルウェーの取引所[NBX](https://x.com/nbxcom/status/1932805570735845618)が、$USDC/$USDM取引ペアの取り扱いを開始
    
*    [Yoroiウォレット](https://x.com/YoroiWallet/status/1930895763262910604)が次回リリースでコミュニティフィードバックに基づくガバナンスUIの変更を発表
    
*    [Flow DeFi](https://x.com/flowdefi/status/1932075519887261780)がレンディングプロトコル用のパブリックテストネットをリリース
    
*   憲法委員会選挙の投票開始、締め切りは7月2日
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1933147976530059367)が真正性検証のためのオープンソース追跡ソリューションOriginateを立ち上げ
    

### コアテクノロジー

この数週間、**SRE**（サイト信頼性エンジニアリング）チームは、Cardanoの環境の改善と定期メンテナンスに取り組んできました。`cardano-parts`、`cardano-playground`、`cardano-mainnet`クラスターをNixパッケージ`25.05`とNix `2.29.1`に更新し、すべてのマシンは現在デプロイされています。`cardano-airgap`リポジトリは、Hydra CI（継続的統合）サーバー経由でISOダウンロードを提供するようになりました。

`cardano-node`で新しいトレースシステムの統合準備も行いました。‘[repository work in progress](https://updates.cardano.intersectmbo.org/2025-06-06-sre#repository-work-in-progress----prs-and-branches)’セクションに挙がっている複数の関連するプルリクエストが、ノードv.10.6.0リリースのタグ付け前にマージされる予定です。これにより、新しいトレースシステムがバイナリーアーティファクト、Dockerイメージ、ブック構成でデフォルトになります。

**コンセンサス**チームはLeiosの台帳およびプロトコル設計の最新状況の把握に注力し、Haskell Leiosシミュレーターにトランザクションを追加する計画を立てています。台帳CDDLの不具合、TPraos台帳ステータススナップショットにおける`WithOrigin`のエンコーディングを修正し、LedgerDB v2のスナップショットプロセスにおける競合状態に対処しました。CuddleにCDDLを[実装](https://github.com/input-output-hk/cuddle/pull/68)し、[version 0.5.0.0](https://chap.intersectmbo.org/package/cuddle-0.5.0.0/)をリリースしました。

VRF[タイブレーカー](https://github.com/IntersectMBO/ouroboros-consensus/pull/1548)の変更を評価し、コミュニティレビュー用に[分析を公開](https://hackmd.io/hX7q5s8JSKSP-j3525J0bA)しました。変更について議論したいコミュニティメンバーは、日本時間6月19日木曜23:30から開催される技術ワーキンググループミーティングに参加してください。

### スマートコントラクト

この2週間で、**Plutus** Coreチームはブール値と整数のケース分析の実装を完了しました。

Plinthチームは、CEKマシンを使用した`CompiledCode`評価のサポートを追加しました。詳細は[新しいガイド](https://plutus.cardano.intersectmbo.org/docs/using-plinth/evaluating-plinth)をご覧ください。積型に`List`コンストラクターを使用することで`ToData`と`FromData`インスタンス生成を改良し、組み込みリストAPIをユーティリティ関数で拡張しました。

[blueprint](https://github.com/cardano-scaling/cardano-blueprint/pull/46)のPlutusセクションを完了して代替評価機能を実装する開発者をサポートし、CHaPの`plutus-metatheory`をリリースしてPlinthコンパイラーへの証明器統合を一歩進めました。

### スケーリング

**Hydra**チームは[デポジットロジック](https://github.com/cardano-scaling/hydra/pull/1978)の最後の主要セキュリティチェックを完了しました。ロギングの強化、エラーメッセージの明確化、[ヘッドステータスの情報を強化したAPI](https://github.com/cardano-scaling/hydra/issues/1957)など、ユーザービリティの改良も複数実装しました。

次回リリースはまもなく予定されています。これには、こうした改良および軽微なバグの修正が含まれます。Glacierドロップのサポート作業も続けています。

**Mithril**チームは[2524.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2524.0-pre)ディストリビューションのプレリリース版をリリースしました。このバージョンはCardanoノードv.10.4.1をサポートし、[UTXO-HD台帳ステータススナップショットを変換](https://github.com/input-output-hk/mithril/issues/2492)するための新しいMithrilクライアントCLIコマンドを導入しています。また、さまざまなバグ修正や改良も含まれています。

異なるクライアントタイプを追跡するアグリゲーターメトリクスの拡張を完了し、本番環境での使用に向けてCLIとAPIの両方で[Cardano DB v2クライアントコマンドを安定化](https://github.com/input-output-hk/mithril/issues/2493)させる準備を整えました。DMQノード用にPallasライブラリーから`n2c local message submission`ミニプロトコルを使用する[パブリッシャーの実装](https://github.com/input-output-hk/mithril/issues/2539)に取り組み、プロトコルメッセージエンコーディングをバイナリーに移行する作業を続けました。

標準ライブラリーの一部をリファクタリングし、[STM暗号ライブラリー](https://github.com/input-output-hk/mithril/issues/2369)のリファクタリングを続けました。

**Leios** チームはインフラ、形式手法、大規模なネットワークシミュレーションに焦点を当てました。形式仕様記述では、Short Leiosの特別なケースとしてFull-Short Leiosを追加し、そのためのトレース検証を実装しました。

2,657のブロック生成者とリアリスティックなグローバルディストリビューションを備えた10,000ノードからなる新しい疑似メインネットトポロジーを使ったシミュレーションを立ち上げました。毎秒1～300トランザクション（TPS）の範囲で行われたシミュレーションで、特にHaskellシミュレーションと高TPSのRustバージョンでパフォーマンスボトルネックが明らかになりました。強化には、トランザクションサンプル、参照ベースのインプットブロック（IB）、高負荷時の処理の改良などが含まれます。

トランザクションの競合と手数料インセンティブの詳細な分析も完了しました。調査結果からは、正直な競合の不可避性、重複を減らすうえでのメモリープールルールの役割、担保要件とCardanoの保証とのバランスをとる必要性が浮き彫りになりました。重複するトランザクションのストレージを最小化するため、エンドーザーブロック（EB）レベルの最適化を提案しました。

詳細は、[Leios週刊更新情報](https://leios.cardano-scaling.org/news)をご覧ください。

### CATALYST

第192回**Catalyst**タウンホールはCatalystウィークリープロジェクトの完了を記念しました。[タウンホール録画をここ](https://projectcatalyst.io/news/town-hall)で視聴し、最新の[Catalyst Horizonsレポート](https://projectcatalyst.io/reports)と[インタラクティブグローバルマップ](https://projectcatalyst.io/global-map)をご覧ください。エンジニアリングの面では、Catalystネイティブアプリへの移行に焦点があてられています。

### 教育

**教育**チームはCEP（Cardano教育プログラム）の開発に注力しました。このプログラムは自分のペースで学習できる一連のモジュールで構成されており、教育内容はCardanoのあらゆる側面にわたり、学習パスの提案や追加的なオプションモジュールも含まれています。

今月末に東京科学大学で開催されるCardano Daysの準備も行っています。登録ページや詳細情報は近日中に公開されます。
