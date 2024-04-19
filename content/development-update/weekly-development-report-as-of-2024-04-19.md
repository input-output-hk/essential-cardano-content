---
title: Weekly development report as of 2024-04-19
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/bd34dd28-25e6-4bc3-b633-1147106bcc91/
image_text: Weekly development report as of 2024-04-19
---

### CORE TECHNOLOGY

This week, the **core technology** teams released node [v.8.9.2](https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.2). This version resolves an issue with the peer-sharing networking feature that prevented nodes from sharing peers with connected nodes.

Over the past few weeks, the **site reliability engineering** (SRE) team continued working on Cardano environment improvements and general maintenance.

Some of the improvements include:

*   re-spinning of the Voltaire private chain for Cardano node v.8.10.0-pre release and re-hard forking it into the Conway era.
    
*   updating SanchoNet for Cardano node v.8.10.0-pre release.
    
*   deploying one-third of IOG’s pre-production environment nodes and two-thirds of IOG’s preview environment nodes into Cardano node v.8.10.0-pre.
    

  
The **networking** team continued their work on Genesis support, which involved reviewing the churn policy for Genesis, implementing outbound governor support for Genesis, and providing support for `cardano-cli`. They also addressed some technical debt in churn extending EKG counters traced by the node. Finally, they updated [documentation about peer sharing](https://github.com/input-output-hk/cardano-node-wiki/wiki/understanding-config-files#the-p2p-topologyjson-file). For more updates from the team check the link [here](https://updates.cardano.intersectmbo.org/2024-04-15-network/).

The **consensus** team [implemented a new diffusion pipelining](https://github.com/IntersectMBO/ouroboros-consensus/pull/955) criterion. They presented, reviewed, and merged the [March milestone](https://github.com/IntersectMBO/ouroboros-consensus/pull/1015) for Genesis. Additionally, they [integrated the latest changes](https://github.com/IntersectMBO/cardano-node/pull/5774) into node v.8.10.

### SCALING

This week, the **Hydra** team fixed a bug in the smoke test and refactored the network functions to enable distinguishing between inbound and outbound traffic. Additionally, they prepared a `cardano-api v.8.44` branch for Cardano node v.8.10. The team also contributed to the `cardano-ledger-api` by undeprecating and exposing `redeemerPointer`.

The **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They worked on scaling the signature and proof generation for `mainnet` with the compression of the transaction Merkle tree by using sub-Merkle trees of transactions by block ranges. They also made progress in designing low latency certification, investigated a memory leak in the signature/proof process, and worked on retrieving the tip of the chain with the Pallas chain observer. The team almost completed the prototype for decentralizing signer registration with the relay and a peer-to-peer (P2P) network. Additionally, they completed the refactoring of the database providers of the aggregator and re-spun the `testing-sanchonet` mithril environment following the release of Cardano node v.8.10.0-pre.

Finally, the team made some optimizations on the compilation of their pre-built binaries to fix panics occurring on CPUs without ADX instructions, and created a network configuration file on the repository to facilitate automatic compatibility checks.

### VOLTAIRE & SANCHONET

This week, the teams are working on [updating the SanchoNet resources](https://github.com/input-output-hk/sanchonet/pull/137/files) documentation with new node releases and tools. Community members also provided [updates to the tutorials](https://github.com/input-output-hk/sanchonet/pull/136/files) for node v.8.10.0 and CLI v8.22.0.0. This includes updating the committee commands and query commands to get the value of the stake key deposit, the DRep key deposit, and the governance action deposit.

Finally, to learn more about updates from Intersect, follow [this news page](https://www.intersectmbo.org/news). 

### CATALYST

Fund12 launches on  April 26, and you are invited! This time, Cardano is coming to Barcelona, Spain to kickstart live the 12th round of community-led funding and worldwide [Catalyst working groups](https://catalystwg.gitbook.io/docs) effort.

In Barcelona at the time? Make sure [to register here](https://lu.ma/m5lq3loo) to save your ticket, as spaces are limited. The event will also be live-streamed on [IOG's YouTube](https://www.youtube.com/@IohkIo) channel. Hit the notification bell not to miss it.

What happens next? [Proposal submissions](https://projectcatalyst.io/funds/12) begin by April 30 and are expected to be open for two weeks.

Want to help review proposals? Keep an eye on the announcement channels when the registration for specialty community roles begins.

For regular updates, please join these [Telegram](https://t.me/cardanocatalyst) and [Discord](https://discord.gg/2RnUtK8) communities, sign up for the Catalyst [newsletter](https://mpc.projectcatalyst.io/newsletter-signup), and join the [town hall](https://zoom.us/meeting/register/tJEtduyupzMvHNUczCQwfFJGcXzmw2lDwkIf#/registration).

### EDUCATION

This week, the **education** team is wrapping up the online ABC Cardano Developer course and working on developing further Aiken content following a positive reception during the course. They are also working with the Voltaire tribe on training plans.  
  
  
![](https://ucarecdn.com/e88a3a9e-b833-4b03-99b8-28c733fa6d35/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームは、[node v. 8.9.2](https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.2)をリリースしました。このバージョンでは、ノードが接続したノードとピアを共有できないというピア共有ネットワーク機能の不具合が解消されました。

この数週間、**SRE**（サイト信頼性エンジニアリング）チームは、Cardanoの環境の改善と総合的なメンテナンスに取り組んできました。

以下に具体例を挙げます。

*   Cardanoノードv.8.10.0-preリリースに向けたVoltaireプライベートチェーンの再スピンとConway期への再ハードフォーク
    
*   Cardanoノードv.8.10.0-preリリースに向けたSanchoNetの更新
    
*   IOGプリプロ環境ノードの3分の1とIOGプレビュー環境ノードの3分の2をCardanoノードv.8.10.0-preにデプロイ
    

  
**ネットワーキング**チームは、Genesisサポートに関する作業を続けました。これには、Genesisの解約ポリシーの見直し、Genesisのアウトバウンドガバナーサポートの実装、cardano-cliのサポートの提供が含まれます。ノードがトレースするEKGカウンターを拡張するチャーンにおける技術負債にも対処しました。[ピア共有に関するドキュメント](https://github.com/input-output-hk/cardano-node-wiki/wiki/understanding-config-files#the-p2p-topologyjson-file)を更新しました。詳細は、[このリンク](https://updates.cardano.intersectmbo.org/2024-04-15-network/)からご覧ください。

**コンセンサス**チームは、[拡散パイプラインの新基準を実装](https://github.com/IntersectMBO/ouroboros-consensus/pull/955)しました。Genesisの[3月のマイルストン](https://github.com/IntersectMBO/ouroboros-consensus/pull/1015)を発表、レビュー、マージしました。ノードv.8.10に[最新の変更を統合](https://github.com/IntersectMBO/cardano-node/pull/5774)しました。

### スケーリング

**Hydra**チームはスモークテストのバグを修正し、受信トラフィックと送信トラフィックを区別できるようにネットワーク機能をリファクタリングしました。Cardanoノードv.8.10用のブランチ、cardano-api v.8.44を用意しました。redeemerPointerの非推奨を外して公開することで、cardano-ledger-apiに貢献しました。

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。ブロック範囲ごとにトランザクションのサブマークル木を用いてトランザクションマークル木を圧縮し、mainnetの署名と証明生成をスケーリングする作業を行いました。低レイテンシー認証の設計を進め、署名/証明プロセスのメモリーリークを調査し、Pallasチェーンオブザーバーでチェーントップを取り出す作業を行いました。リレーとピアツーピア（P2P）ネットワークの署名者登録を分散化するためのプロトタイプはまもなく完了します。アグリゲーターのデータベースプロバイダーのリファクタリングを完了し、Cardanoノードv.8.10.0-preのリリース後にMithrilのtesting-sanchonet環境を再スピンしました。

ADX命令を使用せずにCPUで発生するパニックを修正するために、事前に構築されたバイナリのコンパイルの最適化を行い、自動互換性チェックを容易にするために、リポジトリにネットワークコンフィグファイルを作成しました。

### VOLTAIRE & SANCHONET

チームは、[SanchoNetリソースドキュメント](https://github.com/input-output-hk/sanchonet/pull/137/files)に新しいノードリリースとツール情報を加える作業に取り組んでいます。コミュニティメンバーからも、ノードv.8.10.0とCLI v8.22.0.0の[チュートリアルの更新](https://github.com/input-output-hk/sanchonet/pull/136/files)が提供されました。これには、ステーク鍵デポジット、DRep鍵デポジット、ガバナンスアクションデポジットの値を取得するための委員会コマンドとクエリコマンドの更新が含まれます。

Intersectの詳細な更新情報は、[このニュースページ](https://www.intersectmbo.org/news)をフォローしてください。 

### CATALYST

Fund12のローンチは4月26日。誰でも参加大歓迎です。今回Cardanoは、スペインのバルセロナでコミュニティ主導の資金調達及び世界的な[Catalystワーキンググループ](https://catalystwg.gitbook.io/docs)の取り組みの第12ラウンドをライブで始動します。

バルセロナでイベントに参加する場合は、スペースに限りがありますので、必ず[ここで登録](https://lu.ma/m5lq3loo)してチケットを確保してください。イベントは、[IOGのYouTube](https://www.youtube.com/%40IohkIo)チャネルでライブストリーミングもされます。見逃さないように通知設定してください。

今後の予定としては、4月30日に[提案の提出](https://projectcatalyst.io/funds/12)が開始されます。受付期間は2週間を予定しています。

提案のレビューに参加を希望する場合は、案内チャネルに注意していてください。コミュニティの専門的な役割の登録が始まったら告知されます。

通常の更新情報は、[Telegram](https://t.me/cardanocatalyst)や[Discord](https://discord.gg/2RnUtK8)コミュニティに参加し、Catalyst[ニュースレター](https://mpc.projectcatalyst.io/newsletter-signup)に登録し、[タウンホール](https://zoom.us/meeting/register/tJEtduyupzMvHNUczCQwfFJGcXzmw2lDwkIf#/registration)に参加してください。

### 教育

**教育**チームは、ABCオンラインCardano開発者コースを終了し好意的な反応を得たあと、Aikenのコンテンツのさらなる開発に取り組んでいます。Voltaireトライブとトレーニングプランを作成しています。
