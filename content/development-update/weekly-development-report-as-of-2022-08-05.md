---
title: Weekly development report as of 2022-08-05
tags:
  - Weekly development updates
  - Development
  - Statistics
  - "101"
url: ""
image: https://ucarecdn.com/ddf967ac-7cca-4468-8ee7-14b5666f379d/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams worked on node improvements and released node v.1.35.3-rc1 to support Vasil testing. The new node version can be now tested in the Vasil devnet. 

A new dedicated pre-production environment has been spun up for the final stages of Vasil functionality testing. This environment offers improved chain density and a better developer experience.

It is recommended that all developers, SPOs, and exchanges use this environment rather than the main Cardano testnet. For more details, see [Vasil testnet introduction](https://docs.cardano.org/cardano-testnet/about/testnet-introduction).

The **ledger** team continued working on UTXO HD storage. They identified parts of the code that need additional testing and worked on the prototype performance improvements. They also investigated Genesis model assumptions and reviewed ChainSync rate-limiting optimizations for P2P, Eclipse, and Genesis.

### WALLETS AND SERVICES

This week, the **Daedalus** team worked on quality assurance for node stability issues troubleshooting.

Work is ongoing on **Lace** desktop development. The team implemented a WebDriverIO testing framework for end-to-end testing purposes. They also explored options for using the local storage in the Electron environment, continued implementing the ‘Coin selection’ option, and worked on the stake pool search feature.

The **Adrestia** team worked on updating Adrestia components in preparation for the upcoming hard fork.

They also finished the implementation of the cardano-services HTTP API on top of db-sync, and kept preparing the Cardano-js-sdk for production.

Finally, the team is still working on the implementation of multisig (shared wallets) and ‘light’ mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team worked on technical debt, improving the debugging experience, and on new Plutus built-in functions. They also made progress updating Plutus tools to the node v.1.35.3-rc1 and the Plutus contract emulator to support Babbage transactions. 

Finally, they implemented Babbage support in the transaction builder library and continued working on testing and documentation improvements.  

The **Marlowe** team created special-purpose test cases for the known Marlowe vulnerabilities, and reviewed, completed, and tested the universal validator implementation. They mitigated some issues in Marlowe and built a domain-specific language for the marlowe-cli testing framework covering ‘Initialize’ and ‘Prepare’ commands. Finally, the team made the division property more usable and removed the ‘Scale’ option both from Blockly and Isabelle. 

### BASHO (SCALING)

This week, the **Hydra** team continued working on the time handling fixes. They also resolved a race condition issue in the faucet and factored out Head logic into functions. Finally, the team updated relevant documentation along with the Hydra Head specification, which now provides more about on-chain and off-chain functionality. 

### GOVERNANCE

This week, **Project Catalyst** wallet snapshot took place, finalizing all participating wallets for voting in Fund9. The voting starts one week from now, soft launching on August 11 and closing on August 24. With over 1,000 projects pitching for a slice of the $16m Fund9 pie, participating wallets will vote across domains such as Dapps and products, to localized projects in Latin America and Africa.

![](https://lh4.googleusercontent.com/uOjvjAiqylBIRecqvxcV6e1dCWPtEwExLvflh2IxTR0PLH7ZlodmNh3rqovu4-q0hVS_2tB4KOwBRB733gzr8P1LCg52LPDnVY3WFfdkP30I3PlWsKZ-d0Qx9W0yX91C0bATtdP99jRQeaRcwSE4R2Q)

### コアテクノロジー

**ノード、台帳、コンセンサスチーム**はノードの改良に取り組み、Vasilテストをサポートするノードv.1.35.3-rc1をリリースしました。新ノードバージョンはVasil DevNetでテストできるようになりました。 

Vasil機能テストの最終段階のために、新たに専用のプリプロ環境が作成されました。この環境では、チェーン密度と開発者の操作性が向上しています。

すべての開発者、SPO、取引所には、メインのCardanoテストネットでなく、この環境を使用することが推奨されます。詳細は、[Vasil testnet introduction](https://docs.cardano.org/cardano-testnet/about/testnet-introduction)（Vasilテストネット紹介）をご覧ください。

**台帳**チームは、引き続きUTXO HDに取り組みました。追加テストが必要なコードを特定し、プロトタイプのパフォーマンス向上に取り組みました。Genesisモデルの仮説を調査し、P2P、Eclipse、GenesisのChainSyncレート制限の最適化をレビューしました。

### ウォレットとサービス

**Daedalus**チームはノードの安定性問題のトラブルシューティングのQAに取り組みました。

**Lace**デスクトップの開発作業は進行中です。エンドツーエンドテスト用にWebDriverIOテストフレームワークを実装しました。Electron環境でローカルストレージを使用するオプションを検討し、「コイン選定」オプションの実装を続け、ステークプール検索機能に取り組みました。

**Adrestia**チームはハードフォークの準備の一環として、Adrestiaコンポーネントの更新に取り組みました。

db-sync上にcardano-services HTTP APIを実装する作業を仕上げ、Cardano-js-sdkを本番環境にする準備を続けました。

cardano-walletへマルチシグ（ウォレットの共有）機能と「ライト」モード機能を追加する作業は継続中です。

### スマートコントラクト

**Plutus**チームは技術負債に取り組み、デバッグの操作性を改良したほか、Plutusビルトイン機能にも取り組みました。Plutusツールをノードv.1.35.3-rc1に更新する作業、PlutusコントラクトエミュレーターにBabbageトランザクションのサポートを加える作業を進めました。 

トランザクションビルダーライブラリーにBabbageサポートを実装し、テストとドキュメントの改良作業を続けました。  

**Marlowe**チームはMarloweの既知の脆弱性に特化したテストケースを作成し、ユニバーサルバリデーター実装のレビュー、仕上げ、テストを行いました。Marloweの問題を一部軽減し、「Initialize」と「Prepare」コマンドをカバーするmarlowe-cliテストフレームワーク用ドメイン固有言語を構築しました。分割プロパティの使いやすさを高め、BlocklyとIsabelleから「Scale」オプションを削除しました。 

### Basho( スケーリング)

**Hydra**チームは時間処理の修正作業を続けました。フォーセットの競合状態の問題を解消し、Headロジックを関数に分解しました。Hydra Headの仕様とともに関連ドキュメントを更新し、オンチェーン機能とオフチェーン機能についての説明を充実させました。 

### ガバナンス

**Project Catalyst**のウォレットスナップショットが実施され、Fund9に投票するすべてのウォレットが確定されました。投票は1週間後の8月11日に始まり、8月24日に締め切られます。Fund9の1600ドルをめぐって1,000を超える提案が売り込みを行っており、参加ウォレットはDAppや製品から、南米やアフリカなど地域に特定されたプロジェクトなど、さまざまな分野にわたって投票することになります。
