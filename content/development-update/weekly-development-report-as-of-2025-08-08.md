---
title: Weekly development report as of 2025-08-08
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/50dd65d9-f9c4-46b7-a395-395ae211ee6d/
image_text: Weekly development report as of 2025-08-08
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano's ecosystem is experiencing steady growth. The number of projects being built stands at 2,005, while the number of delegated wallets increased to  1.34 million. Native tokens have reached 10.87 million, and token policies have grown by 0.23% to 219,442. Transactions now total 112.38 million, indicating growing on-chain activity.

In terms of governance, the number of delegated representatives (DReps) rose from 1,409 to 1,423, with 989 DReps remaining active. Lastly, GitHub commits increased from 356 to 358, reflecting continued weekly contributions from developers.

In other news:

*   [Midnight Network](https://x.com/MidnightNtwrk/status/1953204193365508133) announced a partnership with [Blockchain.com](//Blockchain.com)
    
*   [Zenkō Protocol](https://x.com/zenkoprotocol/status/1951630636139106558) acquired metaverse project Pavia
    
*   [Wanchain](https://x.com/MinswapIntern/status/1953367565436145851) built a bridge to connect Cardano and SUI Network
    
*   [Input | Output](https://x.com/InputOutputHK/status/1953214521046077940) will be showcasing a Hydra-powered vending machine at Rare Evo
    
*   [Finest](https://x.com/finest_tokenize/status/1952765281891238056) launched Silver fSLVR, a tokenized silver asset minted via NMKR.
    

### CORE TECHNOLOGY

The **consensus** team continued progressing across multiple workstreams over the past two weeks, including [LSM-tree integration](https://github.com/IntersectMBO/lsm-tree/pulls), [Peras](https://github.com/IntersectMBO/ouroboros-consensus/labels/peras) optimization, [KES agent](https://github.com/input-output-hk/kes-agent) integration, and [Leios](https://github.com/input-output-hk/ouroboros-leios) prototyping. The team developed a streaming mechanism for converting ledger snapshots and drafted a set of mini-protocols to support the cooperative implementation of [Linear Leios](https://github.com/input-output-hk/ouroboros-leios/pull/466), focusing on concurrency and resource usage bounds — areas not yet fully specified in the high-level design. They also released a stubbed version of the kes-agent and integrated it into the consensus version targeted for [Cardano node v.10.6](https://github.com/IntersectMBO/cardano-node/milestone/64). However, functionality will remain disabled until a formal audit is complete. Meanwhile, the team merged Peras-related optimizations into both the `main` and `peras-staging` branches, preparing the codebase for upcoming enhancements.

This week, the **SRE** team enhanced the Cardano infrastructure and performed ongoing maintenance, particularly:

*   Promoted `cardano-node` [v.10.5.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.1) to full mainnet release. The team has deployed it to all IOE-managed testnet and mainnet clusters.
    
*   Published a new Docker OCI tag [10.5.1-docker](https://github.com/IntersectMBO/cardano-node/pkgs/container/cardano-node/475786153?tag=10.5.1-docker), which includes the `snapshot-converter` binary located at `/usr/local/bin/snapshot-converter`. Future OCI releases will continue to include this tool to support ledger backend state transitions without requiring host-level tooling or full ledger replays.
    
*   Launched a new repository, [cardano-parameters](https://github.com/input-output-hk/cardano-parameters), which tracks protocol parameters for mainnet, pre-production, and preview environments. The repository receives daily updates sourced from the [Blockfrost](https://blockfrost.io/) Cardano API.
    

### SMART CONTRACTS

The **Plutus** team is expanding its support for case analysis beyond booleans, integers, and lists. They are currently working on adding support for units, pairs, and data types. To achieve this, the team has implemented necessary changes that allow all built-in functions, as well as sums of products, to work across all existing Plutus ledger languages (Plutus V1, V2, and V3) in preparation for the upcoming intra-era hard fork.

Additionally, the team has started developing a [benchmark for surface languages](https://github.com/IntersectMBO/UPLC-CAPE) targeting the Untyped Plutus Core (UPLC). The goal of this benchmark is to compare the performance of different surface languages that compile to UPLC. They have already introduced the first benchmarking scenario, which involves computing Fibonacci numbers, and they plan to add more scenarios soon.

Furthermore, the Plinth compiler now directly [compiles Haskell's](https://github.com/IntersectMBO/plutus/pull/7231) `Bool` type into UPLC's built-in boolean type, leading to smaller and faster scripts. The team is also planning additional improvements, including recursive binding inlining and clearer compilation errors with line numbers.

### WALLETS AND SERVICES

The **Lace** team recently launched Lace v.1.26. This release enhances DApp interactions by displaying transaction metadata on the confirmation screen, providing users with more clarity before signing. This feature enables secure registration for events such as the Midnight [Glacier Drop](https://www.midnight.gd/how-to-get-night), even when using Ledger hardware wallets.

Additionally, the release improves the experience for NFT collectors through [NFTPrintLab](https://nftprintlab.io). Users can now select an NFT directly from their Lace wallet and proceed to print it, easily bringing their on-chain assets into the physical world.

This release contributes to the ongoing development of Lace v2, with continued focus on Midnight support and mobile readiness.

### SCALING

In the past two weeks, the **Hydra** team has concentrated on supporting the Glacier Drop. They released several patched versions, with the latest being [v.0.22.4](https://github.com/cardano-scaling/hydra/releases/tag/0.22.4). These updates addressed persistent queue blocking, issues with event log rotation, and performance concerns with `etcd` under load. Additionally, the team reduced API load by ignoring duplicate snapshot signatures and resolved bugs that caused transaction heads to get stuck due to invalid transactions.

On the master branch, the team added a new [HTTP endpoint for transaction submissions](https://github.com/cardano-scaling/hydra/issues/2107), improved content-type handling in API responses, and introduced [support for partial ada commits](https://github.com/cardano-scaling/hydra/issues/2140).

Looking ahead, the team plans to investigate the [implementation of partial fanout](https://github.com/cardano-scaling/hydra/issues/1468), enable [deposit recovery](https://github.com/cardano-scaling/hydra/issues/1812) when the head is closed, and present [Hydra Doom](https://iohk.io/en/blog/posts/2024/08/16/running-doom-on-blockchain-a-landmark-moment-for-cardano-and-hydra/) at Rare Evo.

### VOLTAIRE

The community of ada owners is voting through DReps, along with the constitutional committee, on governance actions to approve withdrawals from the Cardano treasury.

The Intersect budget of 15.75m ada has been approved, as has the budget of 26.84m ada for Input | Output Research (IOR).

For more information, inspect the state of voting on the Cardano blockchain using [Adastat](https://adastat.net/governances) or [GovTool](https://gov.tools).

### EDUCATION

This week, members of the **education** team are on-site delivering workshops at [Rare Evo](https://rareevo.io/). They are also focusing on the Mastering Cardano book.   
Looking ahead, the team is excited to announce the next Cardano Days event. This two-day in-person education event will take place at the University of Wyoming on September 26-27, 2025, and will be a key component of the wider [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration is now officially open on the [Luma page](https://lu.ma/g436so6c).

![](https://ucarecdn.com/303b09a8-ce2e-4d9a-ab9e-72a390ee50af/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは着実に成長しています。構築中のプロジェクト数は2,005件、委任済みウォレット数は134万に増加しました。ネイティブトークンは1,087万に達し、トークンポリシーは0.23%増の21万9,442です。トランザクションは合計で1億1238万件に達し、オンチェーンの活動が増加していることを示しています。

ガバナンスに関しては、委任代表者（DRep）の数は1,409人から1,423人に増加し、989人がアクティブに活動しています。GitHubのコミット数は356から358へと増加し、開発者による週ごとの貢献が続いていることが示されています。

その他のニュース：

*   [Midnight Network](https://x.com/MidnightNtwrk/status/1953204193365508133)が[Blockchain.com](//Blockchain.com)との提携を発表
    
*   [Zenkō Protocol](https://x.com/zenkoprotocol/status/1951630636139106558)がメタバースプロジェクトPaviaを買収
    
*   [Wanchain](https://x.com/MinswapIntern/status/1953367565436145851)がCardanoとSUI Networkを接続するためのブリッジを構築
    
*   [Input | Output](https://x.com/InputOutputHK/status/1953214521046077940)がRare EvoでHydra搭載の自動販売機を展示
    
*   [FINEST](https://x.com/finest_tokenize/status/1952765281891238056)がNMKR経由でミントしたトークン化銀資産Silver fSLVRを立ち上げ
    

### コアテクノロジー

**コンセンサス**チームは、この2週間にわたり、複数の作業ストリームで進捗を続けました。これには、[LSM-treeの統合](https://github.com/IntersectMBO/lsm-tree/pulls)、[Peras](https://github.com/IntersectMBO/ouroboros-consensus/labels/peras)の最適化、[KESエージェント](https://github.com/input-output-hk/kes-agent)の統合、[Leios](https://github.com/input-output-hk/ouroboros-leios)のプロトタイプ作成が含まれます。台帳スナップショットを変換するストリーミングメカニズムを開発し、[Linear Leios](https://github.com/input-output-hk/ouroboros-leios/pull/466)の協調的な実装をサポートするための一連のミニプロトコルを起草しました。これらは、高レベルな設計ではまだ十分に特定されていなかった、並行性とリソース使用の制約に焦点を当てたものです。kes-agentのスタブ版をリリースし、[Cardano ノードv.10.6](https://github.com/IntersectMBO/cardano-node/milestone/64)のターゲットとなるコンセンサスバージョンに統合しました。ただし、正式な監査が完了するまでこの機能は無効のままとなります。Peras関連の最適化は`main`ブランチと`peras-staging` ブランチの両方にマージされ、今後の機能強化に備えてコードベースを準備しました。

SREチームはCardanoインフラの強化と継続的なメンテナンスを行いました。主な活動は以下の通りです。

*   `Cardano-node` [v.10.5.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.1)を正式なメインネットリリースに昇格し、IOEが管理するすべてのテストネットおよびメインネットクラスターにデプロイしました。
    
*   新しいDocker OCIタグ[10.5.1-docker](https://github.com/IntersectMBO/cardano-node/pkgs/container/cardano-node/475786153?tag=10.5.1-docker)を公開しました。これには、`/usr/local/bin/snapshot-converter`に配置された`snapshot-converter`バイナリが含まれています。今後もOCIリリースにはこのツールが継続的に含まれ、ホストレベルのツールや完全な台帳リプレイを必要とせずに、台帳バックエンドの状態遷移をサポートします。
    
*   メインネット、プリプロ、プレビュー環境のプロトコルパラメーターを追跡する新しいリポジトリ[cardano-parameters](https://github.com/input-output-hk/cardano-parameters)を立ち上げました。このリポジトリは、[Blockfrost](https://blockfrost.io/) Cardano APIから取得した情報で毎日更新されます。
    

### スマートコントラクト

Plutusチームは、ブール型、整数、リストに加えて、ケース分析のサポートを拡張しています。現在、ユニット型、ペア型、そしてデータ型へのサポートを追加する作業を進めています。これを実現するため、来る開発期内ハードフォークに備え、すべての組み込み関数と積和が、既存のPlutus台帳言語（Plutus V1、V2、V3）すべてで機能するように、必要な変更を実装しました。

Untyped Plutus Core（UPLC）を対象とした、[表層言語のためのベンチマーク](https://github.com/IntersectMBO/UPLC-CAPE)の開発を開始しました。このベンチマークの目的は、UPLCにコンパイルされる異なる表層言語のパフォーマンスを比較することです。すでに最初のベンチマークシナリオとして、フィボナッチ数の計算を導入しており、今後さらに多くのシナリオを追加していく予定です。

PlinthコンパイラーがUPLCの組み込みブール型に[Haskellの](https://github.com/IntersectMBO/plutus/pull/7231)`Bool`[型を直接コンパイル](https://github.com/IntersectMBO/plutus/pull/7231)できるようになり、より小さく、より高速なスクリプトが生成されるようになりました。再帰的な束縛のインライン化や、行番号付きでより分かりやすいコンパイルエラーの表示など、さらなる改善を計画しています。

### ウォレットとサービス

**Lace**チームは最近、レースv.1.26をリリースしました。このリリースでは、確認画面にトランザクションメタデータを表示することで、署名前のユーザーにより明確な情報を提供し、DAppとのやり取りを強化しています。この機能により、Ledgerハードウェアウォレットを使用している場合でも、Midnightの[Glacier Drop](https://www.midnight.gd/how-to-get-night)などのイベントに安全に登録できます。

さらに、このリリースでは[NFTPrintLab](https://nftprintlab.io)を通じてNFTコレクターの使用性が改善されました。ユーザーはLaceウォレットから直接NFTを選択して印刷に進むことができ、オンチェーンの資産を物理的な世界に簡単に持ち込むことができるようになりました。

このリリースは現在進行中であるLace v2の開発に貢献しています。なお、焦点は引き続きMidnightのサポートとモバイル対応に当てられています。

### スケーリング

この2週間、**HYDRA**チームはGlacier Dropの支援に集中しました。最新版の[v.0.22.4](https://github.com/cardano-scaling/hydra/releases/tag/0.22.4)を含むいくつかのパッチバージョンをリリースしています。これらの更新では、永続的なキューのブロック、イベントログのローテーションに関する問題、高負荷時の`etcd`のパフォーマンスに関する懸念に対処しました。重複するスナップショット署名を無視することでAPIの負荷を軽減し、無効なトランザクションが原因でトランザクションヘッドがスタックしてしまうバグも解決しました。

マスターブランチでは、[トランザクション送信用の新しいHTTPエンドポイント](https://github.com/cardano-scaling/hydra/issues/2107)を追加し、APIレスポンスのコンテンツタイプ処理を改善し、[部分的なADAコミットのサポート](https://github.com/cardano-scaling/hydra/issues/2140)を導入しました。

今後は、[部分的なファンアウトの実装](https://github.com/cardano-scaling/hydra/issues/1468)を調査し、ヘッドが閉じられた際の[デポジット回復](https://github.com/cardano-scaling/hydra/issues/1812)を可能にし、Rare EVOで[Hydra Doom](https://iohk.io/en/blog/posts/2024/08/16/running-doom-on-blockchain-a-landmark-moment-for-cardano-and-hydra/)を発表する予定です。

### VOLTAIRE

ADA保有者のコミュニティは、DRepと憲法委員会を通じて、Cardanoトレジャリーからの資金引き出しを承認するためのガバナンスアクションについて投票しています。

Intersectの予算1,575万ADA、Input | Output Research (IOR)の予算2,684万ADAが承認されました。

詳細は、[Adastat](https://adastat.net/governances)または[GovTool](https://gov.tools)を使用して、Cardanoブロックチェーンでの投票状況を確認してください。

### 教育

**教育**チームのメンバーは、[Rare Evo](https://rareevo.io/)でのワークショップのために現地入りしています。また、書籍『Mastering Cardano』にも注力しています。   
次回Cardano Daysイベントも予定されています。2025年9月26日と27日にワイオミング大学で開催されるこの2日間の対面教育イベントは、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)の主要イベントとなります。登録は現在[Lumaページ](https://lu.ma/g436so6c)で公式に受付中です。
