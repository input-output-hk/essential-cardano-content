---
title: Weekly development report as of 2024-05-03
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/3ee3cc61-a046-4225-bb36-10de1d6003d4/
image_text: Weekly development report as of 2024-05-03
---

### CORE TECHNOLOGY

Over the past few weeks, the **site reliability engineering** (SRE) team continued working on Cardano environment improvements and general maintenance.

Some of the improvements include the deployment of Cardano node v.8.9.2 to mainnet, pre-production, preview, and shelley-qa environments along with the deployment of Cardano node v.8.10.1-pre to SanchNet. They have also rewritten the `ouroboros-network-ops` machine cluster using the cardano-parts stack, upgrading from the previous `nixops/terraform/niv` stack.

The **consensus** team [reworked the argument](https://github.com/IntersectMBO/ouroboros-consensus/pull/1059) for the different databases used in consensus to prepare for UTXO-HD. They also reviewed the first draft of the Peras innovation report and [continued working on the VRF restriction](https://github.com/IntersectMBO/ouroboros-consensus/pull/1047) based on slot distance. Additionally, the team supported the networking team in reviewing their [work on querying big ledger peers](https://github.com/IntersectMBO/ouroboros-consensus/pull/1067), continued working on open-sourcing `fs-api` and `fs-sim`, and performed minor refactorings in the codebase (commits: [1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1073), [2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1070)).

### WALLETS AND SERVICES 

The Lace team is working on developing exciting updates for Lace v.1.11. Check the [Lace blog](https://www.lace.io/blog) for the latest announcements.

### SCALING

This week, the **Mithril** team prepared a new pre-release distribution [2418.1-pre](https://github.com/input-output-hk/mithril/releases/tag/2418.1-pre), which includes broader CPU support for pre-built binaries and a new memory allocator for the signer and aggregator nodes to prevent memory fragmentation. They also continued implementing the certification of Cardano transactions in Mithril networks and worked on scaling the signature and proof generation for `mainnet` by leveraging the compression of the transaction Merkle tree using sub-Merkle trees based on transaction block ranges during signature and proving. Additionally, they implemented a stream mechanism for importing transactions into the signer and aggregator stores.

Finally, the team started implementing a global Mithril networks configuration file and continued investigating some unexpected error logs occurring on the Cardano node when the signer and aggregator connect to the mini-protocols.

### VOLTAIRE & SANCHONET

The node and CLI team released Cardano node v.8.10.1-pre to SanchoNet. The team is focusing on implementing tests for the Conway era in the cardano-node repository. Additionally, they made various improvements to the CI pipelines on `cardano-cli`. They implemented `build-estimate` to enable automatic transaction balancing without access to a live node, and added `minFeeRefScriptCostPerByte` as an option to the `create-protocol-parameters-update` command.

### CATALYST

After last week’s [launch of Fund12 in Barcelona](https://www.youtube.com/watch?v=y0vhzU5QfuQ) (check the [video reel here](https://x.com/Catalyst_onX/status/1786063423861576146)) - the program has entered the **submissions phase**. Deadline for submissions into general categories is May 13, 11am UTC. Want to learn more? Make sure to navigate [to the Catalyst website](https://projectcatalyst.io/funds/12) or access [the official Fund12 launch guide](https://projectcatalyst.io/f12launchguide.pdf) to get all the details. There are a variety of exciting categories including brand-new [Cardano Partners and Real World Integrations](https://projectcatalyst.io/funds/12/cardano-partners-and-real-world-integrations). 

The registration process for becoming a [community reviewer](https://docs.projectcatalyst.io/current-fund-basics/community-review-guidelines-fund-12) also started this week. This process allows anyone in the ecosystem to offer reviews based on various criteria, which, in turn, assists proposers in improving their submissions and helps voters prioritize their attention.

### EDUCATION

The **education** team is working on the curriculum for the DRep Pioneer program. Additionally, some members of the team attended the recent Cardano Buidler fest and the Catalyst Fund12 launch.  
  
  
![](https://ucarecdn.com/97d716d4-1a0a-4e22-ac77-b5f7648a9ce4/-/preview/-/format/auto/-/quality/smart/)

コアテクノロジー

この数週間、SRE（サイト信頼性エンジニアリング）チームは、Cardanoの環境の改善と総合的なメンテナンスに取り組んできました。

具体的には、Cardanoノードv.8.9.2をメインネット、プリプロ、プレビュー、shelley-qaの各環境にデプロイしたほか、Cardanoノードv.8.10.1-preをSanchNetにデプロイしました。nixops/terraform/nivスタックをアップグレードしたcardano-partsスタックを使用して、マシンクラスターouroboros-network-opsを書き直しました。

コンセンサスチームは、UTXO-HDの準備のために、コンセンサスで使用されているさまざまなデータベースの引数を見直しました。Peras Innovationレポートの草案をレビューし、スロットの距離に基づくVRF制限に関する作業を継続しました。ネットワーキングチームによる大きな台帳ピアのクエリに関する作業をレビューし、オープンソースのfs-apiとfs-simへの取り組みを続け、コードベースでマイナーなリファクタリングを行いました（コミット：1、2）。

ウォレットとサービス

Laceチームは、エキサイティングなLace v.1.11の更新の開発に取り組んでいます。最新情報は、Laceのブログをチェックしてください。

スケーリング

Mithrilチームは、新しいプレリリースディストリビューション2418.1-preの準備を行いました。これには、ビルド済みバイナリに対する幅広いCPUサポートと、メモリの断片化を防ぐための署名者ノードおよびアグリゲーターノード用の新しいメモリーアロケーターが含まれています。MithrilネットワークにCardanoトランザクション認証を実装する作業を続け、署名および証明中のトランザクションブロック範囲をベースに、サブマークル木を用いたトランザクションマークル木の圧縮を活用した、mainnetの署名と証明生成をスケーリングする作業に取り組みました。さらに、署名者ストアとアグリゲーターストアにトランザクションをインポートするためのストリームメカニズムを実装しました。

グローバルなMithrilネットワークの設定ファイルの実装を開始し、署名者とアグリゲーターがミニプロトコルに接続したときにCardanoノードで発生する予期しないエラーログの調査を継続しました。

VOLTAIRE & SANCHONET

ノード＆CLIチームはSanchoNetにCardanoノードv.8.10.1-preをリリースしました。現在cardano-nodeリポジトリにConway期のテストを実装することに焦点を当てています。cardano-cliのCIパイプラインにさまざまな改良を加えました。ライブノードにアクセスせずに自動でトランザクション残高を表示できるようにするためにbuild-estimateを実装し、create-protocol-parameters-updateコマンドのオプションとしてminFeeRefScriptCostPerByteを追加しました。

CATALYST

先週バルセロナで開始されたFund12は（ビデオリールはこちら）、提出フェーズに入りました。一般カテゴリーへの提出期限は、日本時間の5月13日20時です。詳細は、Catalystのウェブサイト、または、Fund12公式ローンチガイドを参照してください。新しいCardano Partners and Real World Integrations（Cardanoパートナーと現実世界の統合）など、数多くのエキサイティングなカテゴリーがあります。

コミュニティレビュアーになるための登録プロセスも今週開始されました。これにより、エコシステム内の誰もがさまざまな基準に基づいてレビューを提供できるようになり、提案者が提案を練り上げ、有権者がどの提案を優先的に検討するかを判断するのに役立ちます。

教育

教育チームは、DRepパイオニアプログラムのカリキュラムに取り組んでいます。先日行われたCardano Builder FestやCatalyst Fund12のローンチイベントにも参加しました。
