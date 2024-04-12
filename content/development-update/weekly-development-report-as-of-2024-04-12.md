---
title: Weekly development report as of 2024-04-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/48b9488f-3550-4ac5-b74a-2d90feb334bf/
image_text: Weekly development report as of 2024-04-12
---

### CORE TECHNOLOGY

Over the past two weeks, the **ledger** team has made significant progress in testing. They have improved data generation for [conformance tests](https://github.com/IntersectMBO/cardano-ledger/pull/4212) and ensured that the implementation is much more organized. Also, the team worked on infrastructure enhancements, implementing fixes for node v.8.10, making some post-release updates, and updating tooling. 

### WALLETS AND SERVICES

This week, the **Lace** team has released Lace v.1.10. This version features the following updates:

*   A much simpler onboarding user experience. The team has worked on reducing the time required for wallet creation, recovery and hard wallet onboarding.
    
*   Revamped DApp-wallet interaction. The team is rolling out phase 1 of a 3-phase plan that will add new layers of protection to transaction representation through a better DApp-wallet interaction model.
    
*   Enhanced stacking views. The team has added sorting options, an improved search, and a revamped stake pool view.
    

For more information, check out the [Lace blog](https://www.lace.io/blog/lace-1-10-0-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog).

### SMART CONTRACTS

This week, the **Plutus** team updated the Plutus Tx compiler. This update ensures that `PlutusTx.Bool.&&` and `PlutusTx.Bool.||` short-circuit whenever possible. Previously they did not reliably short-circuit, which meant that `&&` could evaluate the second argument even if the first argument was `False`. The team will release this update in version 1.26.0.0.

### SCALING

This week, the **Hydra** team released Hydra v.0.16.0. This version supports `cardano-node` v.8.9.0 along with the corresponding Conway block format. Additionally, the team updated some Hydra clients - `hydraw` and `kupo` - to be compatible with the new Hydra API format.

The **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They focused on [scaling the signature and proof generation](https://github.com/IntersectMBO/cardano-updates/pull/373/files#:~:text=https%3A//github.com/input%2Doutput%2Dhk/mithril/issues/1591) for mainnet, completed the incremental storage of transactions, activated the signature of the transactions on the `testing-preview` network, and prepared a new network to test the scaling on `mainnet` data. The team also made progress on a prototype for decentralizing [signer registration with the relay and a peer-to-peer](https://github.com/IntersectMBO/cardano-updates/pull/373/files#:~:text=https%3A//github.com/input%2Doutput%2Dhk/mithril/issues/1587) (P2P) network. Additionally, they worked on [refactoring the database](https://github.com/IntersectMBO/cardano-updates/pull/373/files#:~:text=https%3A//github.com/input%2Doutput%2Dhk/mithril/issues/1583) providers of the aggregator.

Finally, the team delivered a community-requested feature that displays in a machine-readable format the minimum versions of the Cardano node that the signer supports. They also provided a [manual setup guide for the relay in the SPO user guide](https://github.com/input-output-hk/mithril/issues/1610).

### VOLTAIRE & SANCHONET

The **ledger** team worked on  adding  various Conway-related

unit and property tests in line with CIP-1694 on-chain governance mechanisms. These include some fixes to ledger states and adding several `ToJSON` instances needed by the Cardano node. 

As always, if you are interested in helping test governance functionality, join [SanchoNet](https://sancho.network/get-started/) – Cardano’s testnet environment to collaboratively create a governance system that is robust, decentralized, and truly community-driven.

### CATALYST

This week in **Project Catalyst**, the team continues full speed with preparations for Fund12, which is set to launch with an in-person event in Barcelona, Spain on April 26. Will you be there in person? Make sure to register via [lu.ma registration portal](https://lu.ma/m5lq3loo) and get your ticket. Unable to come? No problem! The whole event will be livestreamed. Even more so, the Catalyst working groups initiative offers additional opportunities to engage with local Cardano communities globally or participate in online groups in multiple locations and dates in weeks to come. See [the full schedule of events](https://catalystwg.gitbook.io/docs/cwg-schedule) for more information.

### EDUCATION

This week, the **education** team is supporting the Voltaire tribe with the interim constitutional committee training. They also published [Lesson 18](https://github.com/input-output-hk/haskell-course/blob/main/lessons/18-Functor.ipynb) of the Haskell Bootcamp, which covers \`\_functors\_\`.

### ![](https://ucarecdn.com/0352fd82-e64a-44e2-8c2d-6c5a0a3e6259/-/preview/-/format/auto/-/quality/smart/)

コアテクノロジー

**台帳**チームは、この2週間でテストを大きく前進させました。[適合性テスト](https://github.com/IntersectMBO/cardano-ledger/pull/4212)のためのデータ生成を改善し、実装を整理しました。インフラの強化、ノードv.8.10の修正の実装、リリース後の更新の作成、ツールの更新に取り組みました。 

### ウォレットとサービス

**Lace**チームはLace v.1.10をリリースしました。このバージョンでは、以下が更新されています。

*   オンボーディングのユーザーエクスペリエンスを大幅に簡素化。チームはウォレットの作成、復元、およびハードウォレットの接続に必要な時間の短縮に取り組んできました。
    
*   DAppとウォレットのインタラクションを改良。より良いDApp-ウォレットインタラクションモデルを通じて、トランザクションの表現に新しい保護層を追加する3段階計画のフェーズ1を展開しています。
    
*   スタックビューの拡張。ソートオプションを追加し、検索機能を改善し、ステークプールビューを刷新しました。
    

詳細は、[Laceのブログ](https://www.lace.io/blog/lace-1-10-0-release?utm_source=essentialcardano.io&utm_medium=referral&utm_campaign=weekly-dev-report&utm_content=link-blog)をご覧ください。

### スマートコントラクト

**Plutus**チームはPlutus Txコンパイラーを更新しました。この更新により、PlutusTx.bool.&&およびPlutusTx.bool.||が可能な限り短絡することが保証されます。これまでは短絡がなかったため、最初の引数がFalseであっても、&&は2番目の引数を評価できていました。この更新プログラムは、バージョン1.26.0.0でリリースされます。

### スケーリング

**Hydra**チームはHydra v.0.16.0をリリースしました。このバージョンでは、Cardano-node v.8.9.0を対応するConwayブロックフォーマットとともにサポートしています。Hydraクライアント、hydrawとkupoを更新し、新しいHydra APIフォーマットに対応させました。

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。[メインネットの署名と証明生成のスケーリング](https://github.com/IntersectMBO/cardano-updates/pull/373/files#:~:text=https%3A%20//%20github.com/input%2Doutput%2Dhk/mithril/issues/1591)に焦点を当て、トランザクションの増分ストレージを完了し、testing-previewネットワークでトランザクションの署名を有効にし、mainnetデータのスケーリングをテストするための新しいネットワークを準備しました。[リレーとピアツーピア（P2P）ネットワークの署名者登録](https://github.com/IntersectMBO/cardano-updates/pull/373/files#:~:text=https%3A%20//%20github.com/input%2Doutput%2Dhk/mithril/issues/1587)を分散化するためのプロトタイプの作業を進めました。アグリゲーターの[データベースプロバイダーのリファクタリング](https://github.com/IntersectMBO/cardano-updates/pull/373/files#:~:text=https%3A%20//%20github.com/input%2Doutput%2Dhk/mithril/issues/1583)にも取り組みました。

署名者がサポートしているCardanoノードの最小バージョンを機械読み取り可能な形式で表示する、コミュニティから要求された機能を提供しました。[SPOユーザーガイドにリレーの手動設定ガイド](https://github.com/input-output-hk/mithril/issues/1610)も追加しました。

### VOLTAIRE & SANCHONET

**台帳**チームは、CIP-1694オンチェーンガバナンスメカニズムに沿って、さまざまなConway関連のユニットテストとプロパティテストの追加に取り組みました。これには、台帳ステータスの修正や、Cardanoノードに必要なToJSONインスタンスの追加などが含まれます。 

通常通り、ガバナンス機能テストへの協力を希望する場合は、堅牢、分散型かつ真にコミュニティ主導のガバナンスシステムを共同で創り出すためのCardanoのテストネット環境、SanchoNetに参加してください。

### CATALYST

**Project Catalyst**では 、Fund12の準備を進めています。Fund12は、4月26日にスペインのバルセロナで開催される対面イベントで封切られます。イベントに参加する場合は、必ず[lu.ma登録ポータル](https://lu.ma/m5lq3loo)から登録し、チケットを確保してください。参加できなくても心配ありません。イベント全体がライブ配信されます。Catalystワーキンググループイニシアチブは、今後数週間以内に、世界各地のCardanoコミュニティと交流したり、さまざまな場所や日程でオンライングループに参加する機会を提供します。詳細は、[イベントのフルスケジュール](https://catalystwg.gitbook.io/docs/cwg-schedule)を参照してください。

### 教育

**教育**チームは暫定憲法委員会トレーニングでVoltaireトライブをサポートしています。Haskellブートキャンプの[レッスン18](https://github.com/input-output-hk/haskell-course/blob/main/lessons/18-Functor.ipynb)を公開しました。ここでは関手がカバーされています。
