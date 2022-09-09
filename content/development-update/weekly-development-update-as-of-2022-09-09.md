---
title: Weekly development update as of 2022-09-09
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/ab464ff3-a248-41b8-a168-4e6913f53889/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams continued preparing for the Vasil upgrade. 

Last Friday, the team announced that the Vasil hard fork would be triggered on September 22, which means that the Vasil capability will become available at the start of epoch 366 on September 27.

In preparation for the hard fork, DApp projects, exchanges, and SPOs continue upgrading their systems to ensure compatibility. Artano, a community-driven non-fungible token (NFT) marketplace, recently shared a [blog post with its key development takeaways](https://www.essentialcardano.io/article/upgrading-to-vasil-key-development-takeaways). Artano’s testing results show up to 76-77% fee reduction and up to 92% decrease in transaction size.

For the Vasil readiness updates, see the [Ecosystem readiness tracker](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade). 

The consensus team also implemented property tests for the UTXO HD backing store API implementations, benchmarked the anti-difference prototype to increase the UTXO HD functionality, and elaborated a draft specification for the Genesis implementation and ChainSync jumping optimization.

### WALLETS AND SERVICES 

This week, the **Daedalus** team fixed several issues found in regression tests and released Daedalus v.5.0.0 for pre-production and preview environments. They also ran additional tests in preparation for the upcoming mainnet release.

Development work is ongoing on the **Lace** desktop features. The team worked on the component that enables the switch between cardano-wallet instances (light and full nodes). They also completed the proof of concept to convert the cardano-wallet API into TypeScript types. 

Finally, they completed work on the adapter that enables light-mode communication with the cardano-wallet.

The **Adrestia** team released a performance improvement update for Rosetta. They're also working on getting cardano-production-ready. 

Finally, they continue working on the implementation of multisig (shared wallets) and "light" mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the support feature for multiple language versions as well as on testing and documentation improvements. They also made progress on the implementation of Babbage support for Plutus tools and library constraints testing. 

Finally, the team is working on Marconi - a new tool for indexing blockchain information in a database for fast querying. They worked on the Marconi design and planned for setting up the Marconi testing infrastructure. 

The **Marlowe** team improved property-based testing, removed marlowe-web-commons in favor of purescript-marlowe, and replaced ‘PK’ with ‘Address’ in the specification and Isabelle proofs. They also updated all Marlowe repositories to use Flakes and upgraded the Cardano node dependency to v.1.35. 

Finally, they continued working on the exploratory design of the ‘Transaction Creation’ component in Marlowe. 

### BASHO (SCALING)

This week, the **Hydra** team created Hydra tools to improve the user experience of running Hydra nodes. They also completed a significant refactoring of the ‘Direct’ chain layer, which makes it easier to maintain the node and prepare for adding persistence to the hydra-node. 

Finally, the team created smoke tests to (optionally) re-use already published Hydra scripts and improved the Hydra node log output for easier reading and parsing. 

The **Mithril** team has recently released the first [Mithril proof of concept](https://iohk.io/en/blog/posts/2022/08/29/mithril-proof-of-concept-is-now-open-source/). Mithril is a stake-based signature scheme used to improve the speed and efficiency of syncing times for nodes joining the network. If you’re interested to get involved, see the [Mithril repository, which is now open-source](https://github.com/input-output-hk/mithril), [Mithril proof-of-concept documentation](https://mithril.network/doc/), and join the [Discord channel](https://discord.gg/WmSVtQ5PjZ) for more discussions.

### GOVERNANCE

The voting period for **Project Catalyst** Fund9 is now open! Don’t miss your chance to help define which projects receive funding and what challenges are put forward into Fund10. Voting closes at 3 pm UTC on Sep 19, 2022. Please read the [voting guide](https://iohk.us20.list-manage.com/track/click?u=26d3b656ecc43aa6f3063eaed&id=d7ec44bda9&e=9d493361de) to help you get started for a detailed breakdown of the proposals and challenges.

If you did not register to vote before the snapshot in early August, then, unfortunately, you’ve missed the opportunity to vote in Fund9. You will be able to participate in Fund10 voting by downloading the Catalyst Voting App ([Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&gl=US) and [iOS](https://apps.apple.com/us/app/catalyst-voting/id1517473397)) and registering today.

The second workshop for dReps was hosted, where interested participants got a sneak peek at the registration process and the new Voting Center, which is due for release by the end of this year. More information on the workshop will be shared next week.

  

![](https://lh5.googleusercontent.com/dhfRtVhyqRE1ND0332cZR86n9u1k2IjHB2YB2zH1C2G0fWQxr_86EHmtYNvk7HrnL_U5SbDTiAq0aGj_3K5XF9Ca7VHwozNANNOlNaNa18GiY1XCpHdoPOjNOAqwPNzQzIWW7AMWf9PUYkd_IO203QDGCmgHg2wpsdG5RDh_HB-6EogjdIUMNmmp2uQt)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilアップグレードの準備を続けました。 

先週金曜、Vasilハードフォークが9月22日に実施されることが発表されました。これは、Vasil機能が9月27日のエポック366開始とともに利用可能となることを意味しています。

DAppプロジェクト、取引所、SPOはハードフォークに向けて、システムを完全に対応させるためのアップグレードを続けています。コミュニティ主導のNFTマーケットプレイスArtanoは、最近[開発の主要な進捗状況についてのブログ](https://www.essentialcardano.io/article/upgrading-to-vasil-key-development-takeaways)をアップしました。Artanoのテスト結果は76～77%の手数料削減およびトランザクションサイズの最大92%縮小を示しています。

Vasilの進捗状況の詳細については、[エコシステムの進捗トラッカー](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade)（現在英語のみ）をご覧ください。 

コンセンサスチームはまた、UTXO HDバッキングストアAPI実装のプロパティテストを実装し、UTXO HDの機能を強化する差異防止プロトタイプのベンチマークを行い、Genesis実装とChainSyncジャンピングの最適化のドラフト仕様を作成しました。

### ウォレットとサービス 

**Daedalus**チームはリグレッションテストで見つかった複数の不具合を修正し、プリプロ環境とプレビュー環境用のDaedalus v.5.0.0をリリースしました。メインネットリリースに向けた追加テストも実行しました。

**Lace**デスクトップ機能の開発作業は進行中です。cardano-walletインスタンス（ライトおよびフルノード）間の切り替えを有効にするコンポーネントに取り組んでいます。cardano-wallet APIをTypeScript型に変換する概念実証も仕上げました。 

ライトモードとcardano-walletとの通信を可能にするアダプターに関する作業は完了しました。

**Adrestia**チームはRosettaのパフォーマンス改良更新をリリースしました。cardano-production-readyにも取り組んでいます。 

cardano-walletへマルチシグ（ウォレットの共有）機能と「ライト」モード機能を実装する作業は継続しています。

### スマートコントラクト

**Plutus**チームは、テスト、ドキュメントの改良とともに、多言語バージョンをサポートする作業を続けました。PlutusツールのBabbageサポートとライブラリー制約テストを実装する作業を進めました。 

データベースのブロックチェーン情報をインデックス化して高速クエリを可能にするための新ツール、Marconiに取り組みました。Marconiの設計に取り組み、Marconiテストインフラのセットアップを計画しました。 

**Marlowe**チームはプロパティベースのテストを改良し、purescript-marloweのためにmarlowe-web-commonsを削除し、仕様とIsabelle証明で「PK」を「Address」に置き換えました。すべてのMarloweリポジトリをFlakeを使用するように更新して、Cardanoノードの依存関係をv.1.35にアップグレードしました。 

引き続き、Marloweの「Transaction Creation」コンポーネントの試験的設計に取り組みました。 

### Basho( スケーリング)

**Hydra**チームはHydraノードの実行における操作性を向上させるHydraツールを作成しました。「Direct」チェーン層の大幅なリファクタリングを終えました。これで、ノードの保守とhydra-nodeへ永続性を追加する準備が容易になります。 

すでに公開されているHydraスクリプトを（オプションで）再利用するためのスモークテストを作成し、読みやすく解析しやすいようにHydraノードのログ出力を改善しました。 

**Mithril**チームは最近最初の[Mithril概念実証](https://iohk.io/jp/blog/posts/2022/08/29/mithril-proof-of-concept-is-now-open-source/)をリリースしました。Mithrilはステークベースの署名スキームで、ネットワークに参加するノードの同期時間と効率の向上に使用されます。関心のある方は、現在オープンソースとなった[Mithrilリポジトリ](https://github.com/input-output-hk/mithril)、[Mithril proof-of-conceptドキュメント](https://mithril.network/doc/)をご覧ください。また、[Discordチャネル](https://discord.gg/WmSVtQ5PjZ)にもご参加ください。

ガバナンス

**Project Catalyst** Fund9の投票が始まりました。どのプロジェクトが資金調達を受けるのか、そしてFund10でどのようなチャレンジが設定されるのか、その判断を支援する機会をどうぞお見逃しなく。投票は、日本時間2022年9月20日午前0時に締め切られます。[投票ガイド](https://iohk.us20.list-manage.com/track/click?u=26d3b656ecc43aa6f3063eaed&id=d7ec44bda9&e=9d493361de)（英語のみ）で提案やチャレンジの詳細をご覧ください。

8月初頭に実施されたスナップショットまでに登録を済ませていなかった場合は、残念ながらFund9へ投票する機会は失われました。Fund10の投票に参加するには、今すぐCatalyst Votingアプリ（[Android](https://play.google.com/store/apps/details?id=io.iohk.vitvoting&gl=US)、[iOS](https://apps.apple.com/us/app/catalyst-voting/id1517473397)）をダウンロードして登録を行ってください。

dRepsの2回目のワークショップが開催され、関心のある参加者は、登録プロセスと、今年の終わりまでにリリースされる予定の新しい投票センターについてさわりを紹介されました。ワークショップについては来週情報をお届けします。
