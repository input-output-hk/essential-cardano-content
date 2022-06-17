---
title: Weekly development report as of 2022-06-17
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/7b95087a-a83e-4671-8327-d78981ad6993/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus teams** continued preparing for the Vasil hard fork. They progressed on upgrading DB Sync, Rosetta, GraphQL, wallet backend, and other components to be Vasil-compatible. The teams worked on the CLI functionality, V2 test scripts, and updated the node to v.1.35.0-rc3. Finally, they continued addressing occurring issues in the testing program.

The **networking** team continued working on Stake Driven Peer Selection (P2P) and the dynamic block production feature. They also made progress working on the TCP model for input endorses, which can now produce animated visualization of message diffusion, updated documentation, and ran a workshop on io-sim at [ZuriHac2022](https://zfoh.ch/zurihac2022/).

### WALLETS AND SERVICES 

The **Daedalus** team finished the upgrade implementation of Webpack 5. They continued working on the implementation of Matomo for collecting analytics data and worked on electron-rebuild to allow specifying [Node.js](Node.js) versions. On the **Lace Desktop**, the team finished implementing Nix and resumed the API abstraction layer between the Lace UI components and the Cardano wallet backend. 

The **Lace** light wallet platform was presented at Consensus in Austin, TX last week. In case you missed it, make sure to watch its [presentation](https://www.youtube.com/watch?v=Q4Z83TSdEfg) by Charles Hoskinson and Alex Apeldoorn. You can also [sign up for updates](https://www.lace.io/?utm_campaign=Lace%20Platform&utm_source=IOG&utm_medium=blog&utm_term=lace&utm_content=registration%20is%20live) to find out when Lace becomes available. 

The **Adrestia** team upgraded Adrestia components to be Vasil-compatible, continued preparing cardano-js-sdk for production, and made some improvements to a new HTTP API on top of DB Sync.

### SMART CONTRACTS

This week, the **Plutus** and **Marlowe** teams held ‘Zero to Hero’ and ‘Plutus Challenge’ tracks at [Austin Hackathon](https://iogmeetups2022.co.uk/). The Marlowe team also published a new Marlowe Pioneers lecture on financial contracts. 

### GOVERNANCE

This week, **Project Catalyst** continued accepting new proposals for both challenge settings and projects. With $16m ada available for innovation grants and ecosystem rewards, over 1,000 ideas and projects are expected to come through. The submission close date is June 30th. Proposal Assessors will then start evaluating all the proposals. If you’re interested in becoming a Proposal Assessor, tune into next week’s [Town Hall](https://bit.ly/3rCicSR).

Below, Harris Warren, IOG’s Group Product Manager for Governance, sums up what Project Catalyst is and how to get involved:

[Fund9 is live and open for submissions](https://youtu.be/pOdOWDuoOlM?__ec_inline=1)

### STATISTICS TO DATE

![](https://lh5.googleusercontent.com/c3jDRgiDCgdYhOM7V9EKgAsw8p2--ecWRWdXOxuaNRfbn2g8vrXNR6T2K_3nYTFop0SXCf6FrCRXA8OgnJt1booInZsZ3F9eNAXJWZN4sUVwOX2OrOnVapT-tNY85fFpcVLX8Fn0-TTAgIPQnQ)

### 週刊開発レポート　2022年06月17日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilハードフォークの準備を続けました。 DB Sync、Rosetta、GraphQL、ウォレットバックエンド、その他のコンポーネントをVasil対応にアップグレードする作業を進めました。CLIの機能性、V2テストスクリプトに取り組み、ノードをv.1.35.0-rc3に更新しました。テストプログラムで発生する問題への対応を続けました。

**ネットワーキング**チームは、Stake Driven Peer Selection（P2P）と動的ブロック生成機能への取り組みを続けました。引き続きインプットエンドーザー用TCPモデルに取り組みメッセージ拡散のアニメーションによる視覚化を生成できるようにし、ドキュメントを更新し、[ZuriHac2022](https://zfoh.ch/zurihac2022/)でio-simに関するワークショップを実施しました。

### ウォレットとサービス 

**Daedalus**チームはWebpack [5のアップグレードを完了しました。分析データ収集用のMatomo実装作業を続け、Node.jsのバージョン指定を可能にするelectron](5のアップグレードを完了しました。分析データ収集用のMatomo実装作業を続け、Node.jsのバージョン指定を可能にするelectron)\-rebuildに取り組みました。**Lace Desktop**は、Nix実装を終え、Lace UIコンポーネントとCardanoウォレットバックエンドの間のAPI抽象化レイヤーを再導入しました。 

**Lace**ライトウォレットプラットフォームは、先週テキサス州オースティンで開催されたConsensusで紹介されました。見逃した方は、Charles HoskinsonとAlex Apeldoornによる[プレゼンテーション](https://www.youtube.com/watch?v=Q4Z83TSdEfg)をご覧ください。Lace配信の最新情報を受信するには、[こちらで登録](https://www.lace.io/?utm_campaign=Lace%20Platform&utm_source=IOG&utm_medium=blog&utm_term=lace&utm_content=registration%20is%20live)してください。 

**Adrestia**チームはAdrestiaコンポーネントをVasil対応にアップグレードし、cardano-js-sdkを本番環境にする準備を進め、新しいDB Sync上のHTTP APIの一部に改良を加えました。

### スマートコントラクト

Plutusチームと**Marlowe**チームは、[オースティンで開催されたハッカソン](https://iogmeetups2022.co.uk/)で「Zero to Hero」と「Plutusチャレンジ」のトラックを開催しました。Marloweチームは、金融コントラクトに関するMarloweパイオニアの新講座を公開しました。 

### ガバナンス

**Project Catalyst**は、チャレンジ設定とプロジェクト両方の新提案の受付を続けました。1600万ドル相当のADAがイノベーション資金とエコシステムへの報酬として用意されており、1,000を超えるアイデアとプロジェクトが期待されています。受付締め切りは6月30日です。その後提案査定担当者が提案の評価を始めます。提案査定担当に関心がある方は、次週の[タウンホール](https://bit.ly/3rCicSR)をご覧ください。

IOGのガバナンスグループプロダクトマネージャーのHarris Warrenは、下の動画でProject Catalystについて、そしてその参加方法についてまとめています。

[Fund9 is live and open for submissions](https://youtu.be/pOdOWDuoOlM?__ec_inline=1)

### 現時点の統計

![](https://lh6.googleusercontent.com/GbY3oAR-UkJdbGQJ5Bt_oFStYUMc6u32zmKWUlr01hWyemD9_y_gd_CPjKHe1yqCJ6SVBYXItWDhPTjvBtazxLT2GTEaumQAwWFWAqhHp58XEFX9re9pjfjnugnzhp-JoUyV3Rrvon6rVtrTgA)
