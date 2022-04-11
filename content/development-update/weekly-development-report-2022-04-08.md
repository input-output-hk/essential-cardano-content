---
title: Weekly development report as of 2022-04-08
tags:
  - Development
  - Weekly development updates
  - Cardano
  - Statistics
url: ""
image: ""
image_text: ""
---

### CORE TECHNOLOGY

This week, the team finalized the pipelining MVP in the Ouroboros consensus repository. They also inspected some memory consumption properties along with hard fork combinator functionality in regards to UTXO HD and updated two important sets of tests for UTXO HD, which include golden tests for ledger tables and ledger DB. The team are now assessing the tests to decide which to include for the MVP. 

Finally, they continued preparing for the Vasil hard fork in June, focusing on the implementation of node v.1.35 and the Gossip protocol.

The networking team finalized the performance analysis of IOSim and IOSimPOR and continued working on the reimplementation of timers in IOSim. They worked on IOSim timeouts API refactoring and optimization to improve network diffusion tests, and continued rewriting typed protocols. The team also updated all networking components to ouroboros-network-framework resolving some issues that occurred. 

### WALLETS AND SERVICES 

This week, the Daedalus team integrated the new cardano-ledger-js library that allows communication with the latest cardano-ledger-app, and are now running compatibility tests. The team also started implementing changes to the signing process for sending tokens with the latest cardano-ledger-js. They improved the ‘momoto’ integration in Daedalus, which simplifies the understanding of the application usage, and worked on the strategy on how to reuse common components with the mono-repository.

There is progress on the light wallet development - a ‘one-stop-shop’ for all blockchain operations. The engineering and QA teams worked on the front-end and back-end improvements, aiming for code freeze by the first week of May. They are now focused on improving core wallet features, including sending and receiving assets, funds staking, the NFT gallery, hardware wallet ledger support, DApp connector, and transaction history. The next big features coming in are identity, voting center, learn center, DEX, and sidechains. Every new version will add granular improvements to the UI/UX. 

As the team progresses with light wallet testing, they are reaching out to internal and external users to try out light wallet functionality and share their feedback. The light wallet is planned to be presented at the [Consensus 2022](https://www.coindesk.com/consensus2022/) event on June 9-12.

The Adrestia team continued working on a new transaction workflow to add token minting and burning, and also worked on DB layer redesign and the addition of a ‘light’ mode to cardano-wallet. Finally, work is still ongoing on cardano-js-sdk MVP.

### SMART CONTRACTS

This week, the Plutus team worked on benchmarking results and improving chain index performance. They also updated parsers to accept text rather than bytestring and added customizable unlifting that propagates all the way up to \`EvaluationContext’ which now has two sets of parameters. 

The Marlowe team added integration testing for the create contract flow and investigated which platform to use for error reporting and log aggregation. They made updates to ensure all global errors are logged in Marlowe Run and updated the CI script of the Marlowe repository to work with Isabelle2021 formats. They also added some new accessibility attributes to user interface elements in the Marlowe Playground.

Additionally, they fixed issues where the contract action showed the wrong review dialog as well as a problem that caused a card to hang when a contract action failed. 

### GOVERNANCE

In less than a year, [Project Catalyst](https://iohk.io/en/blog/posts/2021/02/12/our-million-dollar-baby-project-catalyst) has become the world’s largest decentralized innovation fund. It is a focal point for ongoing development and sustainable innovation, driven by the Cardano community. Fund8 had nearly 1,000 proposals put forward, and Catalyst is now on track to fund over 2,100 proposals during 2022. That is staggering!

Fund8 is entering its voting stage this week, where ada holders will vote on hundreds of incredible projects ranging from big to small, spanning dozens of countries. It’s the largest fund to date ($16m) and continues to demonstrate how community-driven innovation can flourish. 

Aside from Fund8, invitations are being reopened to join the first cohort of Delegate Representatives (dReps). The introduction of dReps is another exciting step forward as the community continues to learn and grow. There will be more to share and discuss over the weeks and months ahead as we roll out delegation into future Project Catalyst funds. To bolster inclusion and diversity, **we are reopening interest** in [joining the first dRep cohort](https://bit.ly/3rSyHvP).

### STATISTICS TO DATE

![](https://lh4.googleusercontent.com/7rJ3ItxH3nUZn4FCfh2PQAW7G8vqDrVO4cfDQYNofWbCnRY2D3DY-70BkVW7t4GbMrAmgVE2XrLTJnfHEcq0m7JNqKWhm6Eg8LZFq5_Nwh99EtIDhw9T6NemPcMiB1iqbGG0u03B)

### 週刊開発レポート　2022年04月08日

### コアテクノロジー

OuroborosコンセンサスリポジトリでパイプラインMVPを完了しました。UTXO HDに関し、メモリー消費プロパティとハードフォークコンビネーターの機能を検査し、2つの重要なテストを更新しました。これには、台帳テーブルと台帳DBのゴールデンテストが含まれます。現在は、どちらをMVPに含めるかを判断するために、テストを評価しています。 

6月のVasilハードフォークの準備も継続し、ノードv.1.35とゴシッププロトコルの実装に重点を置きました。

ネットワーキングチームはIOSimとIOSimPORのパフォーマンス分析を完了し、IOSimでタイマーを再実装する作業を続けました。ネットワークの拡散テストを改善するためにIOSimタイムアウトAPIのリファクタリングと最適化に取り組み、型付きプロトコルのリライトを続けました。すべてのネットワーキングコンポーネントをouroboros-network-frameworkに更新し、発生した問題を解消しました。 

### ウォレットとサービス 

Daedalusチームは新しいcardano-ledger-jsライブラリーを統合しました。これは、最新のcardano-ledger-appとの通信を可能にするもので、現在互換性テストを実行しています。最新のcardano-ledger-jsでトークンを送信するための署名プロセスの変更の実装も始めました。アプリケーション使用量の理解を簡素化するDaedalusのmomoto統合を改良し、monoリポジトリで共通コンポーネントを再利用する方法についての戦略に取り組みました。

すべてのブロックチェーン操作のための「ワンストップショップ」であるライトウォレット開発は進展しました。エンジニアリングチームとQAチームは、5月第一週までのコードフリーズを目標として、フロントエンドとバックエンドの改良に取り組みました。現在は、資産の送受信、ファンドステーキング、NFTギャラリー、ハードウェアウォレット台帳サポート、DAppコネクター、トランザクション履歴など、コアウォレット機能の改良に重点を置いています。次にくる主要な機能は、ID、投票センター、DEX、サイドチェーンです。新しいバージョンごとに、UIやUXに細かな改良が加えられます。 

ライトウォレットのテストの進行に応じて、社内外のユーザーにライトウォレット機能の試用を依頼し、フィードバックを共有しています。ライトウォレットは、6月9～12日に開催される[Consensus 2022](https://www.coindesk.com/consensus2022/)で発表される予定です。

Adrestiaチームは、トークンのミントとバーンを加えた新しいトランザクションワークフローに関する作業を続け、DB層の再設計とcardano-walletへの「ライト」モードを追加する作業に取り組みました。cardano-js-sdk MVPへの取り組みはいまだ進行中です。

### スマートコントラクト

Plutusチームは、ベンチマークの結果とチェーンインデックスパフォーマンスの改良に取り組みました。バイト文字列よりもテキストを受け付けるようにパーサーを更新し、現在2組のパラメーターのあるEvaluationContextまで伝播するカスタマイズ可能なアンリフティングを追加しました。 

Marloweチームは、コントラクトフローの作成のための統合テストを追加し、エラー報告とログ集約に使うプラットフォームについて調査しました。Marlowe Runですべてのグローバルエラーがログされるよう更新し、MarloweリポジトリのCIスクリプトをIsabelle2021形式で動作するように更新しました。Marlowe Playgroundのユーザーインターフェイスエレメントに、いくつかのアクセシビリティ属性を新たに追加しました。

コントラクトアクションが間違ったレビューダイアログを表示する問題、コントラクトアクションが失敗した場合にカードがハングする問題も修正しました。 

### ガバナンス

[Project Catalyst](https://iohk.io/jp/blog/posts/2021/02/12/our-million-dollar-baby-project-catalyst)は一年足らずで世界最大の分散型イノベーションファンドになりました。これは、Cardanoコミュニティにより推進される、進行中の開発と持続可能なイノベーションの中心となります。Fund8では1,000近くの提案が提出され、Catalystは現在2022年に2,100を超える提案に資金を提供する予定です。これは驚くべきことです。

Fund8は今週投票段階に入り、ADA保有者は数十か国にもわたる大小合わせて数百もの素晴らしいプロジェクトに投票することになります。これは現時点で最大のファンド（1600万米ドル相当）で、コミュニティ主導型のイノベーションがいかに繫栄するかを示し続けています。 

Fund8とは別に、最初の委任者代表（dReps）の第1コホートへの参加案内が再開されています。dRepsの導入は、コミュニティが学び、成長し続ける中で、もう1つのエキサイティングな前進となります。今後数週間、数か月、代表が今後のProject Catalystファンドで活動を展開していくにつれ、より多くのお知らせ、話題をお届けします。包括性と多様性を高めるために、[最初のdRepコホートへの参加](https://bit.ly/3rSyHvP)申請受付を再開しました。

### 現時点の統計

![](https://lh4.googleusercontent.com/llubSz-kdJE4nKsNymJlUG-X4n-evRQuvhbI4qci6cS10557uRVL9z4zwjpu2dnPU894t6mq5mKLm4z0hnGJKA3l8kvrTwbIK9lUS44IJTvmunKRjaWrZ9N_0BQHRU9yCRnXvpqR)
