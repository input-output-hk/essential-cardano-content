---
title: Weekly development report as of 2022-05-06
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: ""
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node** (ledger, consensus, node API & CLI) and Plutus teams continued preparing for June’s Vasil hard fork. The upcoming [pipelining upgrade](https://github.com/input-output-hk/ouroboros-network/pull/3688) is undergoing benchmarking before being merged into master.

The **DevOps** team worked on a Genesis generator that creates Byron and Shelley files with the same parameters. They also improved the cardano-world repository, enhancing endpoints and OCI images for node, submit-api, wallet, and db-sync. Finally, the team performed materialization of the Cardano node Nix build, which speeds up the evaluation time.

The **networking** team continued working on diffusion tests, typed-protocols refactorization, and resolved some test suite performance issues. They are now in the process of enabling dynamic block production and re-deploying eight nodes on the testnet to enable 50 new SPOs to join the testnet for evaluation and feedback purposes.

### WALLETS AND SERVICES 

This week, the **Daedalus** team started running regression tests for the upcoming Daedalus v.4.10.0 and made compatibility adjustments for the new cardano-wallet API. The team made progress in creating the base boilerplate for the new desktop-wallet, which allows reusing most of the existing UI components from the light-wallet-browser-extension.

### SMART CONTRACTS

This week, the **Plutus** team updated the release, branching, and dependency management policy of plutus-apps in the README file. They also worked on new tools, created the foundation for the Conformance test suite, and completed a range of bug fixes. 

The **Marlowe** team modified the Marlowe Playground to pass Marlowe contracts in JSON format from the Haskell editor to PureScript, and fixed developer environments for Mac and Windows users. They also rewrote the follower contract without using arbitrary timeouts, updated the Playground to make contract nicknames editable, and fixed an issue when showing multiple choices with the same name.

Additionally, they opened the registration for the new [Marlowe Pioneers](https://pioneers.marlowe-finance.io/) training course and are managing incoming sign-ups. 

### BASHO (SCALING)

This week, the **Hydra** team finalized implementing the usage of ‘proper’ ed25519 signatures and are currently preparing a 0.5.0 release. The team cooperated with IOG research on aligning the ways of Coordinated Head protocol audit. Finally, they updated dependencies in preparation for updating to PlutusV2 and evaluating CIP-42 (serializeData).

### GOVERNANCE

This week, voting finished on **Project Catalyst’s** Fund8. Vote tallying is underway to reveal successful projects. Every three months, Project Catalyst produces a fresh pipeline of technical, business, creative, and community-focused projects - funded to deliver their proposed ideas that have been voted for by the Cardano Catalyst community. Fund9 opens in early June. As always, proposers are invited to submit their proposals again.

Also, startups building on Cardano can now fill out an [application for the FT x Cardano Blockchain Challenge](https://airtable.com/shrnocNC0ehP2Llu1) by May 31, 2022. This will allow to:

*   Be part of a 3-day bootcamp with 1-1 mentorship sessions
    
*   Get to know the Cardano community better
    
*   Get access to Seedstars network of mentors and investors
    
*   Get short-track to Seedstars International Ventures Fund
    
*   Receive tech perks
    
*   Get a visibility package from FT Talent by Financial Times
    

More information about the program can be found on its [website](https://seedsta.rs/ftcbc). 

### STATISTICS TO DATE

![](https://lh5.googleusercontent.com/jOF97aYecUfKFrp8bqOWNmSSBut7G1NKUaKz8Hv39fNXyinJwH6nloffeDIvku4LNgETQoF95m42vUU52HM4PZUJmve-MZHseSPp2WVEcz0bmszQuS9a6UfgEngNSHyR3OJPphunZ9LXDb-sLw)

### 週刊開発レポート　2022年05月06日

### コアテクノロジー

**ノード**（台帳、コンセンサス、ノードAPI、CIL）＆Plutusチームは6月のVasilハードフォークの準備を続けました。予定されている[パイプラインのアップグレード](https://github.com/input-output-hk/ouroboros-network/pull/3688)は、マスターにマージする前にベンチマークを進めています。

**DevOps**チームはByronとShelleyのファイルを同じパラメーターで作成するGenesisジェネレーターに取り組みました。cardano-worldリポジトリを改良し、node、submit-api、wallet、db-syncのエンドポイントとOCI画像を強化しました。CardanoノードのNixビルドの具体化を実行し、評価時間を短縮しました。

**ネットワーキング**チームは、拡散テスト、型付きプロトコルのリファクタリングの作業を続け、テストスイートのパフォーマンスの不具合を解消しました。現在、動的ブロック生成の有効化する作業、また、50の新たなSPOが評価とフィードバックのためにテストネットに参加できるようにするため、8ノードをテストネットに再デプロイする作業を進めています。

### ウォレットとサービス 

**Daedalus**チームは、予定されているDaedalus v.4.10.0の回帰テストを始め、新しいcardano-wallet APIの互換調整を行いました。また、主にlight-wallet-browser-extensionの既存UIコンポーネントを再利用するかたちで、新しいデスクトップウォレットのベースボイラー版の作成を進めました。

### スマートコントラクト

**Plutusチーム**は、READMEファイルのplutus-appsのリリース、分岐、および依存関係管理ポリシーを更新しました。新ツールにも取り組み、Conformanceテストスイートの基礎を作成し、複数のバグの修正を完了しました。 

**Marlowe**チームはJSON形式のMarloweコントラクトをHaskellエディターからPureScriptにパスできるようMarlowe Playgroundを変更し、MacとWindowsユーザー向けに開発者環境を修正しました。任意のタイムアウトを使用せずにフォロワーコントラクトを書き換え、コントラクトニックネームを編集できるようにPlaygroundを更新し、同名で複数の選択肢を表示したときの不具合を修正しました。

[Marloweパイオニア](https://pioneers.marlowe-finance.io/)の新トレーニングコース登録受付を開始し、応募の管理を行いました。 

### Basho( スケーリング)

**Hydra**チームは適切なed25519署名の使用法を実装し、現在0.5.0リリースの準備をしています。Coordinated Headプロトコル監査の方法を調整するためのIOGの研究に協力しました。PlutusV2への更新とCIP-42（serializeData）に備えて依存関係を更新しました。

### ガバナンス

Project Catalyst Fund8の投票が終わり、現在集計を進めています。Project Catalystは３か月ごとに、技術、ビジネス、クリエイティブ、コミュニティに焦点を当てたプロジェクトの新しいパイプラインを作り、Cardano Catalystコミュニティが投票した提案を実現するために資金提供します。Fund9は6月初頭に始まります。通常通り、提案者は提案を再提出することができます。

Cardanoを基盤とするスタートアップに向けた、[FT x Cardano Blockchain Challengeの申請](https://airtable.com/shrnocNC0ehP2Llu1)受付が始まりました。締め切りは2022年5月31日です。このプログラムでは以下が可能です。

*   個人指導レッスン付きブートキャンプ3日間に参加
    
*   Cardanoコミュニティをよりよく知る
    
*   Seedstarsのメンターと投資者ネットワークにアクセス
    
*   Seedstars International Ventures Fundへのショートトラックを取得
    
*   技術特典を取得
    
*   FT Talent by Financial Timesから可視性パッケージを取得
    

プログラムの詳細は、[ウェブサイト](https://seedsta.rs/ftcbc)をご覧ください。 

### 現時点の統計

![](https://lh3.googleusercontent.com/V2eNZmd1Ne6Sjqgf5XPjKJl79W_kI0X8vT_Rdho0DYh-pe3Sp07H156MYlzrR5SxBn_AR7Pax9KOdfVewHVD2oqK4OLjO1VvL5TyE7nALKmU0qO4gOqLks4vVZkDA2jRQ3XyUwFmzcZcrIw0vw)
