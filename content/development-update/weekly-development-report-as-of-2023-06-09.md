---
title: Weekly development report as of 2023-06-09
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/15e6c50a-ca1f-4930-b10e-23ceb37d2402/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on node, networking, consensus, and ledger components.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team continued working on multi-delegation scope, completing work on stake distribution reporting and a new input selection algorithm for partitioning UTXOs according to user staking preferences in cardano-js-sdk. They also continued working on UI components for a new staking page in the Lace browser, implementing Brave support, and finalizing work for the upcoming release of Lace v.1.2.

Make sure to read [a new blog post](https://www.lace.io/blog/unleashing-the-power-of-web3-lace-goes-open-source) about how Lace incorporates Web3's principles of collaboration, full transparency, and a decentralized ecosystem into an open source light wallet platform.

The **Adrestia** team focused on enhancing the DB layer and separating the balance tx library. They continued progressing with multi-signature wallet delegation and updating the cardano-wallet to support node v.8.0.x. Finally, they completed work on the MBO repo.

### SMART CONTRACTS

This week, the **Plutus** tools team worked on finalizing the Marconi EpochSDD and MintBurn indexer, designing the resuming strategy for Marconi indexers running in parallel, and separating the mocked node from the Plutus PAB.

The Plutus core team merged the PR that adds BLS12-381 primitives to Plutus Core as well as the formalization. This includes 17 built-in functions added to Plutus Core, which will be made available after the Conway hard fork.

The **Marlowe** team [added some new options](https://github.com/input-output-hk/marlowe-cardano/pull/595) to the Marlowe Runtime CLI and a [query](https://github.com/input-output-hk/marlowe-cardano/pull/594) for Merkle tree inputs for a contract. They also explored the use of web plugins in end-to-end automated testing and automated a range of [test scenarios](https://github.com/input-output-hk/marlowe-playground/pull/29/commits/ad365c454a69f3863c54ea85c67ff40fc03461db). The team fixed some JSON download errors, and options for marlowe-proxy along with broken links in the Marlowe Playground. 

Finally, they published the [document versioning policy](https://github.com/input-output-hk/marlowe-cardano/blob/main/RELEASE.md) for Marlowe.

### BASHO (SCALING)

This week, the **Hydra** team focused on finding solutions to various problems, including the investigation of issues with [a head on mainnet](https://github.com/input-output-hk/hydra/issues/897), monthly report publications on the website, and [implementing ‘Option A](https://github.com/input-output-hk/hydra/issues/215)’ for commits from external wallets. While most of these items are still being worked on, significant progress has been made. To expedite the investigation, the team improved their logging to provide more precise errors when a transition requirement fails and to reduce duplication in logged content. 

Finally, the team is exploring formal methods and attended a workshop on formalizing cryptographic protocols in Agda.

This week, the **Mithril** team worked on implementing a new sub-command for restoring [Mithril stake distribution](https://github.com/input-output-hk/mithril/issues/896) in the client. They also refactored the [dependency injection](https://github.com/input-output-hk/mithril/pull/963) of the client, worked on [infrastructure](https://github.com/input-output-hk/mithril/pull/957) enhancements for the Mithril network, and completed the performance tests of the new [stake distribution computation](https://github.com/input-output-hk/mithril/issues/962) on mainnet.

Finally, the team fixed some [failures in the CI](https://github.com/input-output-hk/mithril/pull/959) following the upgrade to Rust v.1.70.0, and investigated a [bug](https://github.com/input-output-hk/mithril/issues/953) on the aggregator state machine.

### VOLTAIRE

This week in **Voltaire**, conversations continue on [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) to establish an initial Minimum Viable Governance (MVG) framework. This framework is crucial for the advancement of participatory governance within the Cardano ecosystem. By collecting feedback from community members, diverse viewpoints can be incorporated to ensure the governance system aligns with the community’s needs and desires. 

The following workshops, hosted this week, yielded some valuable feedback:

*   Zug, Switzerland by the Cardano Foundation
    
*   Worcester, Massachusetts U.S. by jamesdunseith#3315
    
*   Virtual by Seo4u#6254 
    
*   Fukuoka, Japan  by Yuta#6370 (Jun 10)
    
*   Chicago, Illinois U.S. by NeoCornelius#2319 (Jun 10)
    
*   Prague, Czech Republic by mmahut#8044 (Jun 10)
    

[Check out workshops](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) happening near you and join the conversations.

[CIP-30](https://cips.cardano.org/cips/cip30/) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) are mechanisms proposed in [Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) to empower ada holders with voting capabilities. These proposals, once implemented by wallet providers, will enable community members to express their democratic consent for governance actions.

It's essential for community members to actively participate in providing feedback for [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). By voicing opinions and suggestions, you can help shape the future of governance within Cardano. This collaborative approach ensures that the governance mechanisms implemented best represent the community's needs.  

### CATALYST

During [this week’s town hall](https://youtu.be/tPwBbKl2P5k?t=1958) the Catalyst team provided an in-depth analysis of the progress made during the extended Fund9 cooldown. They also highlighted some exciting new updates to anticipate in Fund10. Be sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).

The team also published a [Fund10 blog post](https://projectcatalyst.io/blog/co-building-the-gears-of-innovation-through-the-relaunch-of-project-catalyst-with-fund10) announcing the relaunch of Project Catalyst hot on the heels of its 500th completed project! This blog post explains the vision, mission, and values of Project Catalyst and the new features and improvements introduced in Fund10. 

Some of these features include:

*   Milestone-based funding module - UI and workflow for transparency and security
    
*   The continuous testnet - enabling a running fund to test new iterations of Project Catalyst
    
*   A new challenge-setting process that allows the community to propose and vote for each fund's most relevant and impactful challenges
    
*   A new process that simplifies and streamlines the steps for creating and submitting a proposal
    
*   Voting app improvements that enable secure and convenient voting on mobile devices
    
*   A new feedback mechanism that allows proposers and voters to communicate and collaborate more effectively
    
*   A new governance framework that defines the roles and responsibilities of different stakeholders in Project Catalyst.
    

Watch out for more information on how you can participate, which will be shared in the coming days!

Finally, to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter. Check them [out here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

### EDUCATION

This week, the **Education** team focused on the delivery of the Cardano Days workshops at the University of Celaya, Mexico, scheduled for next week. Several members of the team will present these workshops to showcase Cardano, with a mix of in-person and remote delivery.

The team is also continuing with updates to the Haskell Bootcamp and Mastering Cardano. Preparations are being made for an in-person Haskell course later this summer, as well as their participation in the EMURGO hackathon in July.

  
![](https://ucarecdn.com/32a48ad9-15f9-41d6-9109-e6df8e55e9b1/)

### コアテクノロジー

コアテクノロジーチームは、ノード、ネットワーク、コンセンサス、台帳コンポーネントへの取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームはマルチ委任のスコープへの取り組みを続け、ステーク分布レポートと、cardano-js-sdkのユーザーステーキング設定に従ってUTXOを分割する新しいインプット選択アルゴリズムを完了しました。Laceブラウザーの新しいステーキングページ用UIコンポーネントへの取り組みを続け、Braveサポートを実装し、来るLace v.1.2リリースの準備を終えました。

Laceがコラボレーション、完全な透明性、分散型エコシステムというWeb3の原則をオープンソースのライトウォレットプラットフォームにどのように組み込んでいるかについて、[新着ブログ](https://www.lace.io/blog/unleashing-the-power-of-web3-lace-goes-open-source)をご覧ください。

**Adrestia**チームは、DB層の強化とbalance txライブラリーの分離に重点を置きました。マルチシグウォレット委任の作業を続け、cardano-walletをノードv.8.0.xをサポートするよう更新しました。MBOリポジトリの作業は完了しました。

### スマートコントラクト

**Plutus**ツールチームは、Marconi EpochSDDとMintBurnインデクサーの仕上げ、並行して実行されるMarconiインデクサーの再開戦略の設計、Plutus PABからのモックノードの分離に取り組みました。

Plutus Coreチームは、BLS12-381プリミティブをPlutus Coreに追加するPRと形式化をマージしました。これには、Plutus Coreに追加された17の組み込み関数が含まれますが、これはConwayハードフォーク後に利用可能になります。

**Marlowe**チームは、Marlowe Runtime CLIに[新オプション](https://github.com/input-output-hk/marlowe-cardano/pull/595)と、コントラクトのマークルツリーインプットの[クエリ](https://github.com/input-output-hk/marlowe-cardano/pull/594)を追加しました。エンドツーエンドの自動化テストにウェブプラグインを使用し、さまざまな[テストシナリオ](https://github.com/input-output-hk/marlowe-playground/pull/29/commits/ad365c454a69f3863c54ea85c67ff40fc03461db)を自動化しました。JSONダウンロードとmarlowe-proxyのオプションに関するエラー、Marlowe Playgroundのリンク切れを修正しました。 

Marloweの[ドキュメントバージョンポリシー](https://github.com/input-output-hk/marlowe-cardano/blob/main/RELEASE.md)を公開しました。

### Basho( スケーリング)

**Hydra**チームは、[メインネットのヘッド](https://github.com/input-output-hk/hydra/issues/897)に関する不具合の調査、ウェブサイトへの月次報告書の公開、外部ウォレットからのコミット用である[Option Aの実装](https://github.com/input-output-hk/hydra/issues/215)など、さまざまな問題の解決策を見つけることに注力しました。これらの案件のほとんどがいまだ取り組み中ですが、大きく前進しています。調査の迅速化を目指し、移行要件が失敗した際により正確なエラー情報を提供しログに記録されたコンテンツの重複を減らすために、ログを改良しました。 

現在形式手法を検討しており、Agdaでの暗号プロトコルの形式化に関するワークショップに参加しました。

**Mithril**チームは、クライアントで[Mithrilステーク分布](https://github.com/input-output-hk/mithril/issues/896)を復元する新しいサブコマンドの実装に取り組みました。クライアントの[依存性の注入](https://github.com/input-output-hk/mithril/pull/963)をリファクタリングし、Mithrilネットワークの[インフラ](https://github.com/input-output-hk/mithril/pull/957)強化に取り組み、新しい[ステーク分布計算](https://github.com/input-output-hk/mithril/issues/962)のパフォーマンステストを完了しました。

Rust v.1.70.0へのアップグレード後の[CIの障害](https://github.com/input-output-hk/mithril/pull/959)を修正し、アグリゲーターステートマシンの[バグ](https://github.com/input-output-hk/mithril/issues/953)を調査しました。

### VOLTAIRE

**Valtaire**に関しては、初期MVG（最小実行可能ガバナンス）フレームワークを確立するための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)に関する話し合いが続いています。このフレームワークは、Cardanoエコシステムの参加型ガバナンスを進めるうえで不可欠です。コミュニティメンバーからフィードバックを収集することで、多様な視点を取り入れ、コミュニティのニーズと要望に沿ったガバナンスシステムを構築することができます。 

今週は以下のワークショップが開催され、貴重なフィードバックが得られました。

*   スイス、ツーク - Cardano財団主催
    
*   米国マサチューセッツ州ウースター - jamesdunseith#3315主催
    
*   仮想ワークショップ - Seo4u#6254主催 
    
*   福岡 - Yuta#6370主催（6月10日）
    
*   米国イリノイ州シカゴ - NeoCornelius#2319主催（6月10日）
    
*   チェコ共和国プラハ - mmahut#8044主催（6月10日）
    

近くで開催される[ワークショップをチェック](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)して、話し合いに参加してください。

[CIP-30](https://cips.cardano.org/cips/cip30/)および[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)は、[CIP（Cardano改善提案）](https://cips.cardano.org/)でADA保有者に投票権を与えるべく提案されたメカニズムです。この提案がウォレットプロバイダーにより実装されると、コミュニティメンバーはガバナンスアクションについて民主的に同意を表明することができるようになります。

コミュニティメンバーが、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)や[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)に積極的にフィードバックを提供することは極めて重要です。意見や提案を表明することは、Cardanoのガバナンスの未来を形作るのに役立ちます。この協調的なアプローチにより、実装されたガバナンスメカニズムがコミュニティのニーズを代表するようになります。  

### CATALYST

[今週のタウンホール](https://youtu.be/tPwBbKl2P5k?t=1958)で、Catalystチームは延長したFund9クールダウン期間中に進捗した事項について、詳細な分析を報告しました。また、Fund10で予定されているエキサイティングな新しい更新情報も紹介しました。[今後のタウンホール](http://bit.ly/catalyst-townhall)へ参加登録を行い、最新情報を入手してください。

Project CatalystのFund10開始と500番目に完了したプロジェクトを紹介する[ブログ記事](https://projectcatalyst.io/blog/co-building-the-gears-of-innovation-through-the-relaunch-of-project-catalyst-with-fund10)も公開されました。本記事では、Project Catalystのビジョン、使命、バリュー、そしてFund10で導入される新機能と改良点について説明しています。 

新機能には以下が含まれます。

*   マイルストンベースの資金調達モジュール - 透明性とセキュリティを確保するUIとワークフロー
    
*   継続的テストネット - ファンドを実行してProject Catalystの新イテレーションのテストを可能に
    
*   コミュニティが各ファンドで最も関連性が高くインパクトのあるチャレンジを提案、投票できるようにする新チャレンジ設定プロセス
    
*   提案の作成や提出の手順を簡素化、合理化する新プロセス
    
*   モバイルデバイスで安全かつ便利な投票を可能にするよう改良された投票アプリ
    
*   提案者と有権者がより効果的にコミュニケーション、コラボレーションできるようにする新しいフィードバックメカニズム
    
*   Project Catalystにおけるさまざまな利害関係者の役割と責任を定義した新しいガバナンスフレームワーク
    

参加方法の詳細は、近日中にお知らせします。

週刊ニュースレターの過去の号をブックマークして、Project Catalystのすべての情報を入手してください。アクセスは[こちら](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)から。

### 教育

**教育**チームは、来週メキシコのセラヤ大学で開催されるCardano Daysワークショップの準備に焦点を当てました。チームから数人が対面とリモートの両方でこのワークショップに出席し、Cardanoを紹介します。

Haskellブートキャンプと『Mastering Cardano』の更新作業も続けています。今夏行われる対面のHaskellコース、7月EMURGOが開催するハッカソンへの参加準備も進んでいます。
