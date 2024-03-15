---
title: Weekly development report as of 2024-03-15
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/417ee2d1-6b04-4e90-a85f-f2f5b5108e5f/
image_text: Weekly development report as of 2024-03-15
---

### CORE TECHNOLOGY

This week, the **core technology** teams released node [v.8.9.0](https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.0), introducing [Genesis Lite bootstrap peers](https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/getting-started/understanding-config-files.md#genesis-lite-aka-bootstrap-peers). This version fixes a small bug in the dynamic block forging logic and also includes some overall improvements. Learn more about preparations for full P2P networking, an interim bootstrap network, and plans ahead in [this blog post](https://www.essentialcardano.io/article/approaching-full-p2p-node-operations). 

### WALLETS AND SERVICES 

The **Lace** team initiated the closed beta phase of DApp discovery, a provisional name for the DApp Store, with DApp developers. The team is currently in the second week of testing.

### SMART CONTRACTS

This week, the **Plutus** team added the ability to create [Plutus contract blueprints](https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0057/) for `Plutus Tx` in the latest 1.23.0.0 release. The feature is in the early alpha stage and may change.

### SCALING

This week, the **Hydra** team worked on a new library `cardano-api-classy`, which contains type class instances for era witnesses. Additionally, they switched the Nix code to use flake-parts. The team also made further improvements to the [Hydra Head explorer UI](http://explorer.hydra.family/), improved the error reporting on integration tests, and refactored the outcome algebra in the `hydra-node` protocol logic. Finally, they collaborated with researchers to review the incremental decommit specification.

This week, the **Mithril** team worked on implementing a data type to certify Cardano transactions within Mithril networks. They finished adapting  the Mithril explorer to support Cardano transaction verification, improved its user interface, fixed a bug that prevented the signature of some Conway-era transactions, [implemented a more robust transaction parser](https://github.com/input-output-hk/mithril/issues/1557), and began providing metadata about the point of the chain used during the verification process. They also optimized  communications between  Mithril and Cardano nodes and [finalized the Pallas chain observer](https://github.com/input-output-hk/mithril/issues/1557). Finally, the team improved the [handling of logs in the CLI](https://github.com/input-output-hk/mithril/issues/1515) of the Mithril nodes and investigated some remaining issues with the end-to-end test in the CI.

### VOLTAIRE & SANCHONET

The **ledger** team has been concentrating on Conway functionality, testing the various features, and improving the testing framework. They have also done some code [cleanup and reorganization](https://github.com/IntersectMBO/cardano-ledger/pull/4178) to make it more manageable and easier to release. Additionally, they have started working on hard fork initiation, which involves support for intra-era [hard fork initiation](https://github.com/IntersectMBO/cardano-ledger/pull/4140) and necessary updates to the SPO stake distribution calculation.

### CATALYST

This week, the Cardano community is in the process of casting their votes for the launch location of Fund12, which is a special event as it represents the first ever non-funding vote. What's exciting is that every wallet has a voting power of one, which means that all members have an equal say in the decision-making process. So, if you haven't voted yet, log into your Catalyst voting app and help choose from the six available options. The choice is entirely up to you, and the voting deadline is March 18 at 8 AM UTC. If you want to learn more,  [make sure to check out this Cardano Forum post](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326/4) with all the additional details. The results will follow soon after. The team is looking forward to sharing their thoughts with the rest of the community during a special Monday - March 18 - X space with Cardano Over Coffee. Keep an eye [on updates about it here](https://twitter.com/coc_space). 

In other news, Catalyst has recently held its second retrospective, which focused on the macro perspective of how Fund11 has transpired. During the retrospective, the group worked through the elements that helped propel the program further. They also analyzed the anchors and potential future risks on the horizon to be mindful of. [Catch the full recording of the session here](https://x.com/danny_cryptofay/status/1768331936949268745?s=20) to dive in deeper. If you enjoy retrospectives, you're invited to the next one that will take place during the usual Catalyst town hall, next Wednesday at 5 PM UTC.

Lastly, the onboarding of funded projects is nearing completion, and we would like to give a big shoutout to everyone who has lent their hand and support during this time. You can track the progress visually [via this link](https://x.com/danny_cryptofay/status/1768212123832782930?s=20).

### EDUCATION

This week, the **Education** team focused on writing content for Mastering Cardano and made updates to the Cardano Developer Course with ABC.  
  
  
![](https://ucarecdn.com/d8fa60d6-513a-4c3a-80dd-347bca325404/-/preview/-/format/auto/-/quality/smart/)  
  
コアテクノロジー

**コアテクノロジー**チームはノード[v.8.9.0](https://github.com/IntersectMBO/cardano-node/releases/tag/8.9.0)をリリースし、[Genesis Liteブートストラップピア](https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/getting-started/understanding-config-files.md#genesis-lite-aka-bootstrap-peers)を導入しました。このバージョンには、ダイナミックブロックフォージングロジックの軽微なバグの修正、全体的な改善も含まれています。完全なP2Pネットワーキング、暫定ブートストラップネットワーク、および今後の計画の詳細は、[こちらのブログ記事](https://www.essentialcardano.io/article/approaching-full-p2p-node-operations)をご覧ください。 

### ウォレットとサービス 

**Lace**チームはDAppの開発者と共に、DApp Storeの暫定名称であるDApp Discoveryのクローズドベータフェーズを開始しました。現在、テストの2週目に入っています。

### スマートコントラクト

**Plutus**チームは、最新の1.23.0.0リリースでPlutus Txの[Plutusコントラクトのブループリント](https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0057/)を作成する機能を追加しました。この機能は初期のアルファ段階にあり、変更される可能性があります。

### スケーリング

**Hydra**チームは新しいライブラリーCardano-api-classyに取り組みました。このライブラリーには、開発期witnessの型クラスインスタンスが含まれています。Nixコードをflake-partsを使うように切り替えました。[Hydra HeadエクスプローラーのUI](http://explorer.hydra.family/)をさらに改良しました。統合テストに関するエラー報告を改善し、hydra-nodeプロトコルロジックの結果代数をリファクタリングしました。研究者と協力して、インクリメンタルデコミットの仕様をレビューしました。

**Mithril**チームは、Mithrilネットワーク内でのCardanoトランザクションを認証するための新しいデータ型の実装に取り組みました。Cardanoトランザクションの検証をサポートするようにMithrilエクスプローラーを調整し、ユーザーインターフェイスを改良し、Conway期のトランザクション署名を妨げるバグを修正し、[より堅牢なトランザクションパーサーを実装](https://github.com/input-output-hk/mithril/issues/1557)し、検証プロセス中に使用されたチェーンのポイントに関するメタデータの提供を開始しました。MithrilノードとCardanoノード間の通信を最適化し、[Pallasチェーンオブザーバーを完成](https://github.com/input-output-hk/mithril/issues/1557)させました。Mithrilノードの[CLIでのログ処理](https://github.com/input-output-hk/mithril/issues/1515)を改善し、CIのエンドツーエンドテストで積み残した問題を調査しました。

### VOLTAIRE & SANCHONET

**台帳**チームは、Conwayの機能に集中し、さまざまな機能をテストし、テストフレームワークの改良を進めてきました。コードの管理とリリースを容易にするために、クリーンアップと再編成を行いました。ハードフォークの開始への取り組みも始めました。これには、開発期内の[ハードフォークの開始](https://github.com/IntersectMBO/cardano-ledger/pull/4140)のサポートと、SPOステーク分布計算に必要な更新が含まれます。

### CATALYST

Cardanoコミュニティは、Fund12のローンチ場所の投票を実施しています。これは、ファンド以外の初の投票となる特別なイベントです。エキサイティングなことに、すべてのウォレットには議決権が1つ与えられます。これは、すべてのメンバーが意思決定プロセスで同等の発言権を持っていることを意味します。まだ投票していない場合は、Catalyst投票アプリにログインして、6つのオプションから選択してください。選択は完全にあなた次第。投票の締め切りは、日本時間の3月18日午後5時です。詳細は、[こちらのCardanoフォーラムの投稿をチェック](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326/4)してください。結果は直後に発表されます。3月18日月曜日、Cardano Over CoffeeとのXスペースで、コミュニティの他のメンバーと意見を共有することを楽しみにしています。[最新情報はこちらから](https://twitter.com/coc_space)ご確認ください。 

Catalystは先般、Fund11の経緯をマクロな視点から捉えた、2回目の振り返りを開催しました。振り返りでは、グループはプログラムをさらに推進するのに役立つ要素を検討しました。また、留意すべき将来のアンカーと潜在的なリスクを分析しました。詳細は、[こちらのセッション全録画でご覧ください](https://x.com/danny_cryptofay/status/1768331936949268745?s=20) 。振り返りを楽しんだら、日本時間次週木曜日午前2時スタートの通常のCatalystタウンホールで開催される次回イベントにもぜひご参加ください。

資金提供を受けたプロジェクトのオンボーディングはほぼ完了しつつあります。この間手を貸し、支援してくれた皆様を、大きな声で讃えたいと思います。[このリンク](https://x.com/danny_cryptofay/status/1768212123832782930?s=20)から、進行状況を視覚的に追跡できます。

### 教育

**教育**チームはMastering Cardanoのコンテンツ作成に集中したほか、ABCとのCardano開発者コースの更新を行いました。
