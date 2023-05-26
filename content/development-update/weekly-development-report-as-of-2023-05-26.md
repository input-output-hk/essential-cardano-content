---
title: Weekly development report as of 2023-05-26
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/1b56aa4e-e686-47f3-ad15-9ea11ede0332/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on node, networking, and ledger improvements.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Lace** team added the capability to the cardano-js-sdk backend to import multi-address wallets (eg, Daedalus) into the Lace wallet. The team also progressed in preparing the foundation for adding multi-delegation UI components. 

The **Adrestia team** is continuing to work on separating out the balance TX library, progressing enhancements to the database layer, and working on multi-signature wallet delegation functionality.

### SMART CONTRACTS

This week, the **Plutus** tools team worked on a bug fix in the EpochState indexer, verification of the correctness of the AddressUtxo indexer by comparing it with cardano-db-sync, and on getting burned tokens events from the MintBurn indexer exclusively. They also investigated how to integrate the standalone emulator with Atlas, and the creation of a standalone emulator with a Haskell interface. 

The Plutus core team completed the formalization of sums-of-products in Untyped Plutus Core, and the design for the support of polymorphic built-ins in the metatheory.

The **Marlowe** team created a test suite for the [Marlowe validator](https://github.com/input-output-hk/marlowe-cardano/pull/580) and `.flat` files for Plutus validator measurements. They improved the [Marlowe Runtime docker](https://github.com/input-output-hk/marlowe-cardano/pull/583) and the JS version of the call for differences with oracle in the Marlowe Playground. The team also added the health check endpoint to Marlowe Explorer, improved marlowe-playground setup, and ensured that its test suite passes. 

Finally, they made test DSL improvements, fixed some CLI bugs, and made updates related to the Marlowe Runtime changes.  

### BASHO (SCALING)

The **Hydra** team worked on several workflows, including improvements to their CI build process speed, logs, and documentation. They wrote a section about how to operate a Hydra node, updated the ‘Coding Standards’ for the project, and improved the troubleshooting page on their website. 

Finally, the team completed a feature request that allows clients to submit and validate transactions to their Hydra nodes using time validity ranges, which ensures isomorphism with layer 1.

This week, the **Mithril** team worked on the implementation of the framework to [sign generic types of data](https://github.com/input-output-hk/mithril/issues/895) in the client node. They also made some refactoring and optimization on the [runtime state machines](https://github.com/input-output-hk/mithril/pull/934) of the aggregator and the signer nodes, and refactored the [Signed Entity service](https://github.com/input-output-hk/mithril/pull/929) of the aggregator.

Finally, the team completed the implementation of the new [stake distribution computation](https://github.com/input-output-hk/mithril/pull/921) and the [upgrade of the Mithril networks](https://github.com/input-output-hk/mithril/pull/922) to Cardano node v.8.0.0.

### VOLTAIRE

This week in **Voltaire**, CIP-1694 community workshops continue with the first two hosted last weekend in Buenos Aires and Mexico City. If you want to contribute to Cardano’s on-chain governance design, read and comment directly in GitHub and join the conversation wherever you are. [See events](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up).

Also, see [May Essential Cardano360](https://input-output.atlassian.net/browse/LO-2185) to hear more about the workshops.  
  
There are two co-hosted events in [Zug](https://cardanofoundation.org/forms/cip1694-workshop-zug) and [Tokyo](https://lu.ma/CARDANO.CIP1694), hosted by the Cardano Foundation and EMURGO respectively. To join and register your interest, see the attached links.

### CATALYST

This week in **Project Catalyst,** a number of teams presented their projects to the community during the Catalyst town hall. During this week’s town hall, a special announcement was made, indicating that the launch of Fund10 is set to start on June 21st.

You can rewatch the segment from the town hall [here](https://youtu.be/PMGH37nCbdk?t=2620). There will be more information shared in the coming weeks, make sure to stay tuned and register your attendance for the [upcoming town hall](http://bit.ly/catalyst-townhall).  
  
Lastly, if you’re trying to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter. Check [it out here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

### EDUCATION

This week, the **Education** team completed the feedback survey for participants of the 4th Plutus Pioneer program, and worked on the course certification. They are also busy preparing content for the Cardano Days workshops happening next month and working on Mastering Cardano.

  
![](https://ucarecdn.com/e97af539-3111-45f0-bd47-811fcfa1f6b2/)

### コアテクノロジー

コアテクノロジーチームは、ノード、ネットワーク、台帳改良への取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、マルチアドレスウォレット（Daedalusなど）をLaceウォレットにインポートする機能を、cardano-js-sdkバックエンドに追加しました。マルチ委任UIコンポーネントを追加するための基礎準備を進めました。 

**Adrestia**チームは、Balance TXライブラリーの分離、データベース層の拡張、マルチシグウォレットの委任機能に引き続き取り組んでいます。

### スマートコントラクト

**Plutus**ツールチームは、EpochStateインデクサーのバグ修正、cardano-db-syncとの比較によるAddressUtxoインデクサーの正確性の検証、MintBurnインデクサーのみからBurnトークンイベントを取得する作業に取り組みました。スタンドアロンエミュレーターをAtlasと統合する方法や、Haskellインターフェイスを備えたスタンドアロンエミュレーターの作成も検討しました。 

Plutus Coreチームは、型なしPlutus Coreにおけるsums-of-productsの形式化と、メタ理論におけるポリモーフィックな組み込みをサポートするための設計を完了しました。

**Marlowe**チームは、[Marloweバリデーター](https://github.com/input-output-hk/marlowe-cardano/pull/580)用のテストスイートとPlutusバリデーター測定用の.flatファイルを作成しました。[Marlowe Runtime Docker](https://github.com/input-output-hk/marlowe-cardano/pull/583)とMarlowe PlaygroundでのOracleとの違いを求めるJSバージョンを改良しました。Marloweエクスプローラーにヘルスチェックエンドポイントを追加し、marlowe-playgroundのセットアップを改善し、テストスイートが確実に合格するようにしました。 

DSL改良版をテストし、CLIのバグを修正し、Marlowe Runtimeの変更に関連した更新を行いました。  

### Basho( スケーリング)

**Hydra**チームは、CIビルドの処理速度、ログ、ドキュメントの改善など、複数のワークフローに取り組みました。Hydraノードの操作方法に関するセクションを作成し、プロジェクトの「コーディング標準」を更新し、ウェブサイトのトラブルシューティングページを改善しました。 

クライアントが有効期限範囲を使用してHydraノードにトランザクションを送信および検証できるようにする機能リクエストを完了しました。これにより、レイヤー1との同型性が保証されます。

**Mithril**チームは、クライアントノードで[汎用データ型に署名する](https://github.com/input-output-hk/mithril/issues/895)ためのフレームワークの実装に取り組みました。アグリゲーターノードと署名者ノードの[ランタイムステートマシン](https://github.com/input-output-hk/mithril/pull/934)でリファクタリングと最適化を行い、アグリゲーターの[署名済みエンティティ](https://github.com/input-output-hk/mithril/pull/929)サービスをリファクタリングしました。

新しい[ステーク分配計算](https://github.com/input-output-hk/mithril/pull/921)の実装とMithrilネットワークのCardanoノードv.8.0.0への[アップグレード](https://github.com/input-output-hk/mithril/pull/922)を完了しました。

### VOLTAIRE

**Voltaire**に関しては、CIP-1694コミュニティワークショップが、先週末のブエノスアイレスとメキシコシティを皮切りに開催されています。Cardanoオンチェーンガバナンスの設計に参加を希望する場合は、直接GitHubで読んだりコメントしたりするなどして、議論に参加してください。[イベント詳細](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up)

ワークショップの詳細については、5月のCardano360 <INSERT 360 LINK>でも紹介されています。  
  
[ツーク](https://cardanofoundation.org/forms/cip1694-workshop-zug)と[東京](https://lu.ma/CARDANO.CIP1694)では、Cardano財団とEMURGOがそれぞれ主催する2つの共催イベントが開催されます。参加登録は以下のリンクをご利用ください。

### CATALYST

**Project Catalyst**では、Catalystタウンホールで多くのチームによるプロジェクトの発表がコミュニティに向け行われました。また、Fund10が6月21日に開始されることが発表されました。

[ここ](https://www.youtube.com/watch?v=PMGH37nCbdk)からタウンホールのセグメントを再視聴できます。今後数週間のうちに、さらに情報が更新される予定です。[今後のタウンホール](http://bit.ly/catalyst-townhall)への参加登録は受付中です。  
  
週刊ニュースレターの過去の号をブックマークに登録して、Project Catalystの最新情報を入手してください。詳しくは、[こちら](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)をご覧ください。

### 教育

**教育**チームは、第4回Plutusパイオニアプログラム参加者のフィードバックアンケートを完了し、コース認定に取り組みました。来月開催されるCardano Daysワークショップのコンテンツの準備や、『Mastering Cardano』にも取り組んでいます。
