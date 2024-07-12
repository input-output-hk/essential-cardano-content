---
title: Weekly development report as of 2024-07-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/0272de89-8230-42ec-a468-3cfe81517954/
image_text: Weekly development report as of 2024-07-12
---

### CORE TECHNOLOGY

This week, the teams released [node version 9.0.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.0.0). This is a significant milestone for the Cardano network as it includes all the necessary changes to facilitate the Conway ledger era. Some key features include:

*   [On-chain governance via CIP-1694](https://cips.cardano.org/cip/CIP-1694) 
    
*   Plutus V1 reference scripts support
    
*   [Plutus script signature support through CIP-69](https://cips.cardano.org/cip/CIP-0069).
    

 This release is the first to support crossing the 9.0 hard fork (Chang) boundary on the mainnet and long-running testnets (eg, pre-production). The release currently supports entering the bootstrap phase of CIP-1694 and does not support the full transition to DRep voting and all governance actions.

Please refer to the [tag testing page](https://tests.cardano.intersectmbo.org/test_results/node/tag_9_0_0.html) for additional information on system testing results for the 9.0.0 release. 

The **performance and tracing** team released benchmarks for node version 8.12.0 and conducted DRep benchmarks with 100,000 DReps. They merged a performance fix for version 8.11 and began developing the governance action workload. Workbench automations were updated to match the latest v.8.12 Conway features and Plutus cost model, with CIP-69 and CIP-117 implementations entering the validation phase. Tracing efforts included ongoing metrics naming work and testing the factored-out RTView component. The team also presented two sessions and developed a community report on UTXO scaling benchmarks at the IOI tech meetup in Zurich.

The **consensus** team assisted with the release of node version 9.0. They performed security audits, collaborated with other teams, implemented improvements, and released consensus packages. The team is also conducting additional `NoThunks` tests to safeguard against memory leaks in the node. Furthermore, they reviewed milestone 13 of Genesis, which includes improvements to the code documentation and implements several fixes and optimizations.

### SMART CONTRACTS

This week, the **Plutus** team focused on enhancing the usability of Plutus contract blueprints for Plutus transactions, guided by user feedback. They also revamped the [Plutus documentation site](https://plutus.cardano.intersectmbo.org/docs/), giving it a fresh look for better user experience.

### WALLETS AND SERVICES

This week, the **Lace** team is focusing on addressing several important bug fixes for inclusion in their next release. This ongoing effort is part of their commitment to enhancing the functionality and reliability of the light wallet.

Stay tuned for updates on the upcoming release and improvements on the [official Lace blog](https://www.lace.io/blog/lace-1-13-0-release).

### SCALING

This week, the **Mithril** team worked on [supporting Cardano node version](https://github.com/input-output-hk/mithril/issues/1787) `9.0.0` and started working on a new Mithril distribution. They also continued implementing the certification of Cardano transactions in Mithril networks. They fixed some bugs blocking the REST API during transactions import, causing resource exhaustion on the aggregator Cardano node, and creating some exceptions in the explorer. They also kept redacting a [draft CIP for the diffusion of Mithril signatures](https://github.com/input-output-hk/mithril/issues/1775) through the Cardano network.

Finally, the team worked on enhancing the artifact production in the aggregator to avoid blocking the certification and finalized enforcing the linting of all the files in the repository with the CI.

### VOLTAIRE & SANCHONET

With the release of node v.9.0.0, all node users are encouraged to upgrade to this or a later version of the node in preparation for the Chang upgrade. 

For more details, read this [Intersect blog post](https://www.intersectmbo.org/news/node-9.0-enabling-a-new-era-of-decentralized-governance-on-cardano) and check the [latest Intersect news](https://www.intersectmbo.org/news). 

### CATALYST

[Town Hall 170](https://youtube.com/live/AxLezk7KBVc) took place on Wednesday, July 10. The voting for Fund12 closed yesterday, Thursday, July 11, at 11 AM UTC. 

Here are some statistics from the Catalyst voting period: 

*   Over 5,000 unique wallets were involved 
    
*   More than 200,000 individual votes were cast
    
*   Over 1.5bn ada was used for voting.
    

The community is eagerly awaiting the voting results in the coming week. Additionally, technical developments for Catalyst voices are progressing as usual.

### EDUCATION

This week, the **education** team is finalizing the content for the upcoming Cardano Developer course, scheduled for next week at [Universidad Tecnológica Nacional](https://utn.edu.ar/es/) in Buenos Aires, Argentina. Additionally, they are assisting the Voltaire tribe in preparing for the constitutional committee training sessions, ensuring all materials and resources are ready for effective learning experiences.

![](https://ucarecdn.com/9386bf2e-b069-4d3c-8697-716b4e37c3e1/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

[ノード9.0.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.0.0)がリリースされました。これにはConway台帳期を支えるために必要なすべての変更が含まれており、Cardanoネットワークにとって重要なマイルストンとなります。主要機能には以下が含まれます。

*   [CIP-1694によるオンチェーンガバナンス](https://cips.cardano.org/cip/CIP-1694) 
    
*   Plutus V1参照スクリプトのサポート
    
*   [CIP-69によるPlutusスクリプト署名のサポート](https://cips.cardano.org/cip/CIP-0069)
    

このリリースは、メインネットと長期にわたって稼働しているテストネット（プリプロなど）で、9.0ハードフォーク（Chang）の境界をまたいでサポートするための最初のリリースです。このリリースは現在、CIP-1694のブートストラップフェーズへの移行をサポートしており、DRep投票やすべてのガバナンスアクションへの完全な移行をサポートするものではありません。

9.0.0リリースのシステムテスト結果の詳細は、[タグテストページ](https://tests.cardano.intersectmbo.org/test_results/node/tag_9_0_0.html)を参照してください。 

**パフォーマンス＆トレース**チームは、ノードバージョン.8.12.0のベンチマークをリリースし、100,000のDRepでDRepベンチマークを実施しました。バージョン8.11のパフォーマンス修正をマージし、ガバナンスアクションワークロードの開発を開始しました。最新のv.8.12 Conway機能とPlutusのコストモデルに合わせてワークベンチの自動化を更新し、CIP-69とCIP-117の実装は検証フェーズに入りました。追跡作業には、継続的なメトリクスの命名作業と、ファクタリングしたRTViewコンポーネントのテストが含まれます。チューリッヒで開催されたIOI TECH MEETUPでは2セッションで発表し、UTXOスケーリングベンチマークに関するコミュニティレポートを作成しました。

**コンセンサス**チームは、ノードバージョン9.0のリリースをアシストしました。セキュリティ監査を実施し、他のチームと協力し、改善を実装し、コンセンサスパッケージをリリースしました。ノード内のメモリーリークを防ぐために、追加のNoThunksテストを実施しています。コードドキュメントの改善を含むGenesisのマイルストン13をレビューし、修正と最適化を実装しました。

### スマートコントラクト

**Plutus**チームは、ユーザーからのフィードバックに基づいて、Plutusトランザクション用のPlutusコントラクトブループリントのユーザビリティの向上に焦点を当てました。[Plutusのドキュメントサイト](https://plutus.cardano.intersectmbo.org/docs/)を刷新し、新しいデザインでユーザーエクスペリエンスを向上させました。

### ウォレットとサービス

**Lace**チームは、次のリリースに含める重要なバグの修正に焦点を当てています。進行中のこの取り組みは、ライトウォレットの機能性と信頼性を強化するための取り組みの一環です。

今後のリリースや改良点については、[Lace公式ブログ](https://www.lace.io/blog/lace-1-13-0-release)をご覧ください。

### スケーリング

**Mithril**チームは[Cardanoノードバージョン9.0.0のサポート](https://github.com/input-output-hk/mithril/issues/1787)に取り組み、新しいMithrilディストリビューションの開発を開始しました。MithrilネットワークにCardanoトランザクション認証を実装する作業も続けました。トランザクションのインポート中にREST APIがブロックされ、アグリゲーターのCardanoノードでリソースが枯渇し、エクスプローラーで例外が発生するバグを修正しました。Cardanoネットワークを経由した[Mithril署名拡散のCIPの草案](https://github.com/input-output-hk/mithril/issues/1775)の編集も続けました。

認証のブロックを回避するためにアグリゲーターでのアーティファクトの生成を強化し、リポジトリ内の全ファイルに対するCIを使用したリントの強制を完了しました。

### VOLTAIRE & SANCHONET

ノードv.9.0.0のリリースに伴い、すべてのノードユーザーは、Changアップグレードの準備としてこのバージョンまたはそれ以降のバージョンのノードにアップグレードすることが推奨されます。 

詳細は、[Intersectブログの記事](https://www.intersectmbo.org/news/node-9.0-enabling-a-new-era-of-decentralized-governance-on-cardano)と[最新のIntersectニュース](https://www.intersectmbo.org/news)をご覧ください。 

### CATALYST

[タウンホール170](https://youtube.com/live/AxLezk7KBVc)は7月10日水曜日に開催されました。Fund12の投票は、日本時間昨日7月11日木曜日20時で締め切られました。 

Catalyst投票期間における統計は以下の通りです。 

*   5,000を超える個別ウォレットが参加した 
    
*   200,000を超える個別票が投じられた
    
*   15億ADAが投票に使用された
    

コミュニティは、来週の投票結果を熱心に待っています。Catalyst Voicesの技術開発も通常通り進んでいます。

### 教育

**教育**チームは、来週アルゼンチンのブエノスアイレスにある[国立工科大学](https://utn.edu.ar/es/)で予定されているCardano開発者コースのコンテンツを仕上げています。憲法委員会のトレーニングセッションの準備でVoltaireトライブをサポートし、すべての資料とリソースを効果的な学習体験に役立つよう整えています。
