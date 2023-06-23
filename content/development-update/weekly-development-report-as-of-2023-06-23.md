---
title: Weekly development report as of 2023-06-23
tags:
  - Cardano
  - Weekly development updates
url: ""
image: https://ucarecdn.com/50fac486-9bba-476e-87bf-4741db9ddf08/
image_text: Weekly development report on Cardano as of 2023-06-23
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on node, networking, consensus, and ledger components.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team released the wallet’s latest version, [Lace v.1.2](https://www.lace.io/blog/lace-1-2-release), which brings new browser support, new ways to organize your NFTs, a new privacy feature, increased speed, and more. The Lace product design team also published a [blog post](https://docs.google.com/document/d/1Au8v9SMC_YIY_c_aHHxxaHxZYTbRnDkKMUG9hQtxJNE/edit) on the design differences between Web3 and the traditional web.

The **Adrestia** team focused on updating cardano-wallet to support node v.8.1.1, enhancing the database layer, and multi-signature wallet delegation functionality.

### SMART CONTRACTS

This week, the **Plutus Tools** team worked on:

*   Finalizing the Marconi GetUtxoFromAddress and GetTokenBurnEvent indexers for the Sidechain Tribe.
    
*   Comparing the GetTokenBurnEvent indexer result with cardano-db-sync.
    
*   Updating the marconi-sidechain JSON-RPC request and response to reflect the API specification.
    
*   Adding an AssetId filter on the marconi-sidechain's CLI.
    

The **Plutus Core** team worked on:

*   Improving the callsite inliners used to wrap the function body of a function variable in 'Dupable', making it possible to independently rename the function body, creating free variables. This is being [fixed](https://github.com/input-output-hk/plutus/pull/5395).
    
*   Ensuring that the [callsite inliners](https://github.com/input-output-hk/plutus/pull/5385) in PIR and UPLC no longer require the function to be fully applied for inlining, allowing for more optimization to happen.
    
*   Changing the builtins machinery in the metatheory and updating the executable to the new design, to ensure the executable is reliable to test against during future changes to the builtins machinery. The change was requested [here](https://github.com/input-output-hk/plutus/issues/4781). 
    
*   Switching from `Nat` to `Word` in the \`Flat Index’ to speed up deserialization by an estimated 5% and make smart contract validation faster.
    
*   Adding useful conformance tests to the builtins’ syntax, as requested [here](https://github.com/input-output-hk/plutus/issues/5064).
    
*   Removing [dead golden files](https://github.com/input-output-hk/plutus/pull/5396). 
    
*   Ensuring [trivial scripts compile to trivial programs](https://github.com/input-output-hk/plutus/pull/5394).
    
*   Renaming [misspelled conformance tests](https://github.com/input-output-hk/plutus/pull/5392).
    

The **Marlowe** team worked on Marlowe Runtime improvements by [allowing tracing to be disabled](https://github.com/input-output-hk/marlowe-cardano/pull/607), [fixing console logging](https://github.com/input-output-hk/marlowe-cardano/pull/606), and [upgrading Runtime to v0.0.2](https://github.com/input-output-hk/marlowe-starter-kit/pull/20).

The team also [implemented an automated test scenario](https://github.com/input-output-hk/marlowe-playground/pull/41) for the Marlowe Playground. 

Marlowe Run Lite was improved with a redesigned landing page, a UI for withdrawal with Role tokens, and a graphical flow of the contract prototype.

### BASHO (SCALING)

This week, the **Hydra** team focused on investigating and experimenting with how to operate a head on mainnet. They addressed several bugs and issues. The team will soon release a new version, 0.11.0, which will bring many improvements and bug fixes.

This week, the **Mithril** team worked on the [signer deployment model](https://github.com/input-output-hk/mithril/issues/961) for SPOs to run Mithril on their Cardano mainnet infrastructure. They started working on the design and implementation of a [stress test tool](https://github.com/input-output-hk/mithril/issues/991) to benchmark the aggregator. They also worked on [refactoring](https://github.com/input-output-hk/mithril/issues/967) the Mithril Stake Distribution entity and the [uniformization of the date types](https://github.com/input-output-hk/mithril/issues/946) in the nodes. Additionally, they fixed the bugs that prevented the aggregator from detecting [new signed entity types](https://github.com/input-output-hk/mithril/issues/953) from time to time, and from restarting when a [critical error](https://github.com/input-output-hk/mithril/issues/993) is raised.

Finally, the team completed the [Mithril networks upgrade](https://github.com/input-output-hk/mithril/issues/973) to Cardano node v.8.1.1 and kept investigating [flaky end-to-end tests](https://github.com/input-output-hk/mithril/issues/954) on the CI.

### VOLTAIRE

This week in **Voltaire**, conversations continued on [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) to establish an initial Minimum Viable Governance (MVG) framework. This framework is crucial for the advancement of participatory governance within the Cardano ecosystem. By collecting feedback from community members, diverse viewpoints can be incorporated to ensure the governance system aligns with the community’s needs and desires. 

The following workshops, hosted this week, yielded some valuable feedback:

*   Minneapolis, USA by \[lidonation\]#0849 6/23
    
*   Accra, Ghana by mercyA1#1150 (6/24)
    
*   Hanyang University or Belgium Jazz Cafe, Seoul, South Korea by Oscar west#6547 (6/24)
    
*   Midgard Vikingsenter, Horten, Norway by Krypto Labs#0504, ANP#2862
    
*   La Plata, Argentina by MauAndreo#5309
    
*   Virtual by Jennycita#0721, patrick\_#3434 (6/24)
    

[Check out workshops](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) happening near you and join the conversations.

[CIP-30](https://cips.cardano.org/cips/cip30/) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509) are mechanisms proposed in [Cardano Improvement Proposals (CIPs)](https://cips.cardano.org/) to empower ada holders with voting capabilities. These proposals, once implemented by wallet providers, will enable community members to express their democratic consent for governance actions.

It's essential for community members to actively participate in providing feedback for [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) and [CIP-95](https://github.com/cardano-foundation/CIPs/pull/509). By voicing opinions and suggestions, you can help shape the future of governance within Cardano. This collaborative approach ensures that the governance mechanisms implemented best represent the community's needs.    

### CATALYST

The **Project Catalyst** team kicked off the official launch of Fund10 at [this week’s town hall](https://youtu.be/1PrFWGHFA4w). The celebration started with riveting talks by two people whom you may already know very well, Tamara Haasen - President and Chief of Staff at IOG, and Tim Harrison - VP of Community and Ecosystem. The team gave an overview of all the Fund10 changes you will need to know about and showed some of Fund10’s supporting documentation ([Fund10 launch guide](https://projectcatalyst.io/catalyst-fund-10-launch-guide.pdf), [Catalyst gitbooks](http://docs.projectcatalyst.io)). 

Finally, the challenge teams gave the community a walkthrough of the different Fund10 Catalyst categories. If you aren’t already, make sure to stay tuned and register your attendance for the [upcoming town hall](https://bit.ly/catalyst-townhall).

Moving on to the technical side of Catalyst last week:

*   Finalized environments to support Fund10 (prod), dry runs (preprod), continuous testnet (testnet), and development (dev) for the duration of the next fund.
    
*   Initiated final dry run for registration release in 2 weeks.
    
*   Started load testing with new fixes to the node.
    
*   Continued implementing test coverage for the new Catalyst Data Services APIs.
    
*   Created plan for sunsetting the old vit-servicing-station with minimal disruption post-F10.
    
*   Continued investigation of tally tools and aligned on approach for developing tools to enable community verification of tally in F10.
    
*   Continued work to merge snapshots from both preprod and mainnet, and aligned on approach for the "check my voting power" UX.
    
*   Beta of continuous delivery was finished and is being tested.
    

Watch out for more information on how you can participate, which we will share in the coming days!

Lastly if you’re trying to stay up to date with everything happening in Project Catalyst, join the Catalyst Telegram announcement channel. Check [it out here](https://t.me/cardanocatalyst).

### EDUCATION

This week, the **Education** team reflected on the recent delivery of a successful _Cardano Days_ event, which received very positive feedback. They also worked on updates to the Haskell Bootcamp and made progress with planning for an in-person Haskell course later this year. Additionally, they focused on certification for the Plutus Pioneer Program.

  
![Weekly development report on Cardano as of 2023-06-23, in Japanese](https://ucarecdn.com/6cc166f4-d62c-497c-a181-809f5e3fe623/)

### コアテクノロジー

コアテクノロジーチームは、ノード、ネットワーク、コンセンサス、台帳コンポーネントへの取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは最新バージョン[Lace v.1.2](https://www.lace.io/blog/lace-1-2-release)をリリースしました。これは、新しいブラウザーサポート、NFTの新しい整理機能、新プライバシー機能、速度の向上などをもたらします。Lace製品設計チームはWeb3とWeb2の設計上の違いに関するブログ記事を公開しました。

**Adrestia**チームは、ノードv.8.1.1をサポートするためにcardano-walletを更新し、データベース層を強化し、マルチシグウォレットの委任機能を強化することに焦点を当てました。

### スマートコントラクト

**Plutusツール**チームは以下に取り組みました。

*   Sidechain Tribe用のMarconi GetUtxoFromAddressとGetTokenBurnEventの各インデクサーを完了
    
*   GetTokenBurnEventインデクサーの結果をcardano-db-syncと比較
    
*   API仕様を反映するようにmarconi-sidechain JSON-RPCのリクエストとレスポンスを更新
    
*   AssetIdフィルターをmarconi-sidechainのCLIに追加
    

**Plutus Core**チームは以下に取り組みました。

*   関数変数の関数本体をdupableでラップするために使用されるコールサイトのインライナーを改良し、関数本体の名前を独立して変更し、自由変数を作成できるようにする（現在[修正中](https://github.com/input-output-hk/plutus/pull/5395)）
    
*   PIRおよびUPLCの[コールサイトインライナー](https://github.com/input-output-hk/plutus/pull/5385)でインライン化に関数を完全に適用する必要をなくし、より多くの最適化を可能にする
    
*   メタ理論の組み込みマシンを変更し、実行可能ファイルを新しい設計に更新して、将来の組み込みマシンの変更時に実行可能ファイルが確実にテスト可能となるようにする（変更リクエストは[こちら](https://github.com/input-output-hk/plutus/issues/4781)） 
    
*   Flat IndexのNATをWordに切り替えて、逆シリアル化を推定5%高速化し、スマートコントラクトの検証を高速化する
    
*   [ここ](https://github.com/input-output-hk/plutus/issues/5064)でリクエストされているように、組み込み構文に有用な適合性テストを追加する
    
*   [デッドゴールデンファイル](https://github.com/input-output-hk/plutus/pull/5396)を削除する 
    
*   [自明なスクリプトが自明なプログラムにコンパイル](https://github.com/input-output-hk/plutus/pull/5394)されるようにする
    
*   [スペルミスした適合性テスト](https://github.com/input-output-hk/plutus/pull/5392)の名前を変更する
    

**Marlowe**チームは、[トレースの無効化を可能にし](https://github.com/input-output-hk/marlowe-cardano/pull/607)、[コンソールログを修正し](https://github.com/input-output-hk/marlowe-cardano/pull/606)、[Runtimeをv0.0.2にアップグレード](https://github.com/input-output-hk/marlowe-starter-kit/pull/20)することによって、Marlowe Runtimeを改善しました。

Marlowe Playgroundの[自動テストシナリオを実装](https://github.com/input-output-hk/marlowe-playground/pull/41)しました。 

Marlowe Run Liteを、ランディングページの再設計、Roleトークンを引き出すUI、コントラクトプロトタイプのグラフィカルなフローで改善しました。

### Basho( スケーリング)

**Hydra**チームは、メインネットでヘッドを操作する方法の調査、実験に焦点をあてました。いくつかのバグと不具合に対処しました。まもなく、多くの改良とバグの修正をもたらす0.11.0をリリースする予定です。

**Mithril**チームは、SPOが自分のCardanoメインネットインフラでMithrilを実行するための[署名者デプロイモデル](https://github.com/input-output-hk/mithril/issues/961)に取り組みました。アグリゲーターのベンチマークを行うための、[ストレステストツール](https://github.com/input-output-hk/mithril/issues/991)の設計と実装に着手しました。Mithril Stake Distributionエンティティの[リファクタリング](https://github.com/input-output-hk/mithril/issues/967)と、ノード内の[日付タイプの均一化](https://github.com/input-output-hk/mithril/issues/946)にも取り組みました。アグリゲーターが時おり新しい署名済みエンティティタイプを検出すること、重大なエラーが発生したときに再起動することを妨げるバグを修正しました。

MithrilネットワークをCardanoノードv.8.1.1に[アップグレード](https://github.com/input-output-hk/mithril/issues/973)し、[不安定なCIエンドツーエンドテスト](https://github.com/input-output-hk/mithril/issues/954)の調査を続けました。

### VOLTAIRE

**Valtaire**に関しては、初期MVG（最小実行可能ガバナンス）フレームワークを確立するための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)に関する話し合いを続けました。このフレームワークは、Cardanoエコシステムの参加型ガバナンスを進めるうえで不可欠です。コミュニティメンバーからフィードバックを収集することで、多様な視点を取り入れ、コミュニティのニーズと要望に沿ったガバナンスシステムを構築することができます。 

今週は以下のワークショップが開催され、貴重なフィードバックが得られました。

*   米国ミネアポリス - \[lidonation\]#0849主催、6月23日
    
*   ガーナ、アクラ - mercyA1#1150主催、6月24日
    
*   韓国ソウル漢陽大学またはBelgium Jazz Cafe - Oscar west#6547、6月24日
    
*   ノルウェー、ホルテン、Midgard Vikingsenter - Krypto Labs#0504、ANP#2862主催
    
*   アルゼンチン、ラ・プラタ - MauAndreo#5309主催
    
*   仮想ワークショップ - Jennycita #0721、Patrick\_#3434主催、6月24日
    

近くで開催される[ワークショップをチェック](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)して、話し合いに参加してください。

[CIP-30](https://cips.cardano.org/cips/cip30/)および[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)は、[CIP（Cardano改善提案）](https://cips.cardano.org/)でADA保有者に投票権を与えるべく提案されたメカニズムです。この提案がウォレットプロバイダーにより実装されると、コミュニティメンバーはガバナンスアクションについて民主的に同意を表明することができるようになります。

コミュニティメンバーが、[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)や[CIP-95](https://github.com/cardano-foundation/CIPs/pull/509)に積極的にフィードバックを提供することは極めて重要です。意見や提案を表明することは、Cardanoのガバナンスの未来を形作るのに役立ちます。この協調的なアプローチにより、実装されたガバナンスメカニズムがコミュニティのニーズを代表するようになります。    

### CATALYST

**Project Catalyst**チームは、[今週のタウンホール](https://youtu.be/1PrFWGHFA4w)でFund10のオフィシャルオープニングを行いました。式典は、お馴染みの二人、IOGプレジデント兼スタッフチーフのTamara Haasen、コミュニティ＆エコシステムバイスプレジデントのTim Harrisonによる講演で幕を開けました。チームはFund10で知っておくべきすべての変更点の概要とともに、Fund10のサポートドキュメントの一部（[Fund10ローンチガイド](https://projectcatalyst.io/catalyst-fund-10-launch-guide.pdf)と[Catalystガイドブック](http://docs.projectcatalyst.io)）を紹介しました。 

チャレンジチームはコミュニティにFund10のさまざまなCatalystカテゴリーを紹介しました。[今後のタウンホールへ](https://bit.ly/catalyst-townhall)の参加未登録の場合は、ぜひ登録して最新情報を入手してください。

Catalystの技術的側面は以下の通りです。

*   Fund10（本番）、ドライラン（プリプロ）、継続的テストネット（テストネット）、次回ファンド期間中の開発（dev）をサポートする各環境を完了
    
*   2週間後の登録リリースに向けた最終ドライランを開始
    
*   新しい修正を使用したノードの負荷テストを開始
    
*   新しいCatalyst Data Services APIのテストカバレッジ実装を継続
    
*   F10後の中断期間を最小限に抑えつつ、古いvit-servicing-stationを終了させるプランを作成
    
*   タリーツールの調査を継続し、F10の集計のコミュニティ検証を可能にするツール開発のアプローチに合わせて調整
    
*   プリプロとメインネットからスナップショットをマージする作業を継続し、「check my voting power」UXのアプローチに合わせて調整
    
*   連続配信のベータ版完了、現在テスト中
    

参加方法の詳細は、近日中にお知らせします。

Project Catalystの最新情報を入手するには、Catalyst Telegram案内チャネルへ参加してください。詳しくは、[こちら](https://t.me/cardanocatalyst)をご覧ください。

### 教育

**教育**チームは、最近成功をおさめ、非常に肯定的なフィードバックを受けたCardano Daysイベントを振り返りました。Haskellブートキャンプの更新に取り組み、今年後半に予定されている対面型のHaskellコースの企画を進めました。Plutusパイオニアプログラムの認定証にも取り組みました。
