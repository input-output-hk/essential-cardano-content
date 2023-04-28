---
title: Weekly development report as of 2023-04-28
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/9435721f-1930-4ca8-9adb-b910c31159b7/
image_text: Weekly development report as of 2023-04-28
---

### CORE TECHNOLOGY

Over the last two weeks, the **ledger** team continued making progress on CIP-1694 and the Conway ledger era development. In particular, they added [Plutus V3](https://github.com/input-output-hk/cardano-ledger/pull/3365) support to Conway, modified [delegation certificates](https://github.com/input-output-hk/cardano-ledger/pull/3372), and added some [governance ledger states](https://github.com/input-output-hk/cardano-ledger/pull/3369). The team also made small improvements to the ledger API and now host the Haskell code documentation (Haddocks) on [GitHub pages](https://input-output-hk.github.io/cardano-ledger/).

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team removed Catalyst fund information from the wallet because of API issues. They also worked on a solution to enable Daedalus users to fetch the ada price without relying on the CoinGecko API, and improved the auto-generation of TSL certificates, making it easier to debug the application using cardano-wallet.

The team continued working on the **Lace** desktop development. They addressed technical debt by improving the `webpack` bundler, enhancing `eslint` and `tslint` rules for code quality, and adding support for the Wallaby.js tool to enhance unit-test development. They also added a new feature to manage authorized DApp whitelisting, and resolved some end-to-end test failures together with the QA team. 

The **Adrestia team** worked on the community feedback following the Lace launch, and continued planning for the next cardano-js-sdk update.

Finally, the team is still working on extracting the transaction balancing library and wrapping up the multi-signature wallet delegation functionality.

### SMART CONTRACTS

The **Plutus** team continued working on Marconi indexers and on Plutus built-in functions for BLS12-381 curves, which are expected to be made available in Plutus v3. See [CIP-0381](https://github.com/cardano-foundation/CIPs/blob/c594d0a10ff8bb9c2b82e8520494eb3c05348d4d/CIP-0381/README.md) for more details.

The **Marlowe** team updated the structure and Haskell part of [the report](https://github.com/input-output-hk/marlowe/pull/172) responding to the final audit, updated some [links](https://github.com/input-output-hk/marlowe-playground/commit/e3c4cf72825411a649323ee0cbe1f3d55c1fe292) in the Playground, and simplified linorder [instances](https://github.com/input-output-hk/marlowe/pull/169). They also made minor [fixes](https://github.com/input-output-hk/marlowe/pull/168) to the Isabelle specification, enhanced the Marlowe Runtime submit flow to handle CIP-30 signing strategy, added more property tests, tested precise trace-based failure for Marlowe Validators, and updated the documentation. 

### BASHO (SCALING)

The **Hydra** team worked on fixing state machine continuity on-chain, discussed voting project solutions, explored the addition of [Hydra support to Kupo](https://github.com/CardanoSolutions/kupo/pull/117), and improved API reference navigation by adding a sidebar. The team also updated several dependencies and fixed some issues in the test suites in preparation for the 0.10.0 release.

This week, the **Mithril** team continued implementing the new certifier service of the aggregator, which is in charge of producing certificates for multi-signatures. They also started implementing the interfaces defined to provide certification of a new type of data applied to the Mithril stake distribution and the fully immutable Cardano files snapshot.

Finally, they worked on fixing a bug in the signer registration that sometimes prevented some of the signers from participating in the signature process during an epoch.

### VOLTAIRE

CIP-1694 marks the first iteration of Cardano’s on-chain governance. Given its importance, achieving broad consensus is vital as Cardano looks to the future. To make that happen, it’s equally important the community conducts its own governance discussions and events. 

There's an open invitation for global community leaders and groups to run their own workshops, with financial support made available. This is _your_ chance to bring Cardano and discussions on governance to your local community. Applications close on Monday, May 1st at 23:00 UTC - to read more and apply [see here](https://www.essentialcardano.io/article/cip-1694-community-workshops).

### CATALYST

This week in **Project Catalyst**, several teams presented their projects to the community during the Catalyst town hall. You can rewatch the segment from the main town hall [here](https://www.youtube.com/watch?v=VDBtXirldxw). The Catalyst community hosts a town hall every week. If you haven’t registered for next week’s yet, you can register your attendance for the [upcoming town hall here](https://zoom.us/meeting/register/tJEtduyupzMvHNUczCQwfFJGcXzmw2lDwkIf#/registration).

Lastly, if you’re trying to stay up to date with everything happening in Project Catalyst, bookmark the past issues of the weekly newsletter. Check [it out here](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07).

![](https://ucarecdn.com/8fe333af-4eef-4e6b-a3ca-c27669610039/)  

### コアテクノロジー

この2週間、**台帳**チームはCIP-1694とConway台帳期の開発に取り組んでいます。具体的には、Conwayに[Plutus V3](https://github.com/input-output-hk/cardano-ledger/pull/3365)のサポートを追加し、[委任証明書](https://github.com/input-output-hk/cardano-ledger/pull/3372)を変更し、[ガバナンス台帳ステータス](https://github.com/input-output-hk/cardano-ledger/pull/3369)を追加しました。台帳APIにマイナーな改良を加え、現在[GitHubページ](https://input-output-hk.github.io/cardano-ledger/)でHaskellコードドキュメント（Haddocks）をホストしています。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、APIの不具合のためにウォレットからCatalystファンド情報を削除しました。DaedalusユーザーがCoinGecko APIに依存せずにADA価格をフェッチできるようにするソリューションにも取り組み、TSL証明書の自動生成を改良し、cardano-walletを使用してアプリケーションのデバッグを簡易化しました。

**Lace**デスクトップの開発作業は進行中です。webpackバンドラーを改良し、eslintルールとtslintルールを強化してコードの質を上げ、ユニットテスト開発を強化するためのWallaby.jsツールのサポートを追加することで、技術負債に対処しました。認定DAppのホワイトリストを管理する新機能を追加し、QAチームと協力してエンドツーエンドのテストの失敗の一部を解決しました。 

**Adrestia**チームは、Laceのリリース後にコミュニティから寄せられたフィードバックと、cardano-js-sdkの次回更新計画に取り組みました。

現在、トランザクション残高ライブラリーの抽出とマルチシグウォレットの委任機能の仕上げに取り組んでいます。

### スマートコントラクト

Marconiインデクサー、およびPlutus v3で利用可能となる予定のBLS12-381曲線用Plutus組み込み関数への取り組みを続けました。詳細は、[CIP-0381](https://github.com/cardano-foundation/CIPs/blob/c594d0a10ff8bb9c2b82e8520494eb3c05348d4d/CIP-0381/README.md)を参照してください。

**Marlowe**チームは、最終監査に応じた[レポート](https://github.com/input-output-hk/marlowe/pull/172)の構造とHaskell部分、Playgroundの[リンク](https://github.com/input-output-hk/marlowe-playground/commit/e3c4cf72825411a649323ee0cbe1f3d55c1fe292)を更新し、linorder[インスタンス](https://github.com/input-output-hk/marlowe/pull/169)を簡素化しました。Isabelleの仕様にマイナーな[修正](https://github.com/input-output-hk/marlowe/pull/168)を加え、Marlowe Runtimeのsubmitフローを拡張してCIP-30署名戦略の処理を可能にし、プロパティテストを追加し、Marlowe Validatorsのトレースベースの正確な失敗をテストし、ドキュメントを更新しました。 

### Basho( スケーリング)

**Hydra**チームは、ステートマシンの連続性をチェーン上で修正し、投票プロジェクトソリューションについて話し合い、[KupoにHydraサポート](https://github.com/CardanoSolutions/kupo/pull/117)を追加し、サイドバーを追加してAPIリファレンスナビゲーションを改善しました。0.10.0リリースの準備として、依存関係を一部更新し、テストスイートの不具合を修正しました。

**Mithril**チームは、マルチシグ認証の生成を担当するアグリゲーターの新しい認証サービスの実装を続けました。インターフェイスの実装も開始しました。これは、Mithrilステークディストリビューションに適用される新しいデータ型の認証と、完全に不変のCardanoファイルスナップショットを提供するよう定義されています。

一部の署名者がエポック中に署名プロセスに参加できない場合があるという、署名者登録のバグの修正に取り組みました。

### VOLTAIRE

CIP-1694 は、Cardanoのオンチェーンガバナンスの最初のイテレーションです。その重要性を考えると、Cardanoは将来を見据えて幅広いコンセンサスを達成することが不可欠です。この実現には、コミュニティが独自のガバナンスに関する議論やイベントを実施することも同様に重要です。 

グローバルコミュニティのリーダーやグループには、独自のワークショップを開催することが奨励されており、金銭的な支援も提供されています。これは、各自がCardanoとガバナンスに関する議論を地域社会にもたらすチャンスです。申請締め切りは日本時間5月2日（火）午前8:00です。詳細および申請は[こちら](https://www.essentialcardano.io/article/cip-1694-community-workshops)をご覧ください。

### CATALYST

**Project Catalyst**では、Catalystタウンホールで複数のチームによるプロジェクトの発表がコミュニティに向け行われました。[ここ](https://youtu.be/Xk-FRLQT6v8?t=2345)で、メインタウンホールからセグメントを再視聴できます。Catalystコミュニティは、毎週タウンホールミーティングを主催しています。来週のタウンホールに登録を済ませていない場合は、[ここ](http://bit.ly/catalyst-townhall)から次回の参加登録を行ってください。

週刊ニュースレターの過去の号をブックマークに登録して、Project Catalystの最新情報を入手してください。詳しくは、[こちら](https://us20.campaign-archive.com/home/?u=26d3b656ecc43aa6f3063eaed&id=2451b43b07)をご覧ください。
