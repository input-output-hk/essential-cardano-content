---
title: Weekly development report as of 2023-03-10
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5c398a94-2970-45ea-8285-5e69e90a92e4/
image_text: ""
---

### CORE TECHNOLOGY

Over the last two weeks, the **ledger** team focused on CIP-1694 making [a major update to the Conway era](https://github.com/input-output-hk/cardano-ledger/pull/3291) to ensure that the implementation follows the specification for the ratification and enactment logic. They also integrated ledger updates into consensus and node and worked on the Conway infrastructure testing. 

The **networking** team ​​focused on bug fixing, the implementation of Eclipse Evasion, simulation testing improvements, and mini-protocol extensions. They also published ouroboros-network-0.4.0.1 and ouroboros-network-protocols-0.3.0.0 to [CHaP](https://github.com/input-output-hk/cardano-haskell-packages/pull/147), and [fixed a bug](https://github.com/input-output-hk/cardano-node/pull/4902) in cardano-node (failure to configure inbound connection limits). 

Finally, they implemented stricter validation of DNS names, IP addresses, and ports on cardano-cli to prevent common on-chain mistakes when registering a stake pool.

The **consensus** team continued working on refactoring and improving the UTXO-HD prototype, and introducing improvements to lmdb-related packages. In particular, they identified an opportunity to gain performance by handling locks more optimally.

On the Genesis front, the team sketched a mitigation for an issue caught by PNSol and researchers. They also came up with a roadmap for testing the Genesis prototypes and enriching the existing tests.

The team also addressed the technical debt, made some minor improvements, and created component-level micro-benchmarks for adding transactions to the mempool. The results of these benchmarks will be published in the ouroboros-consensus web page.

Finally, they finished moving the consensus documentation to the [ouroboros-consensus](https://github.com/input-output-hk/ouroboros-consensus#readme) repository, released ouroboros-consensus 0.3.0.0, and reduced the time GitHub actions take in ouroboros-network.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team finished implementing support for Ledger v.6.0.3, and are now planning a regression test for next week.

Work is ongoing on the **Lace** desktop development. The team added collateral support for the CIP-30 implementation of the DApp browser and a grace waiting time for the cardano-node process to be shut down before closing Lace desktop. Finally, they solved incompatibility issues with some UI components shared with Lace browser extension.

The [Lace](https://www.lace.io/) team have been busy fixing bugs and adding new features before the browser extension release on mainnet. The new v.0.6.0 release brings CIP-30 implementation to Lace, which enables trying out the DApp connector and interacting with Cardano DApps. The team also fixed some bugs with Ledger hardware wallet support to connect Ledger with the DApp connector. The switch between the preview and pre-production networks is now ready too. Get the Lace extension at [lace.io](//lace.io) today and stay tuned for updates!

### SMART CONTRACTS

This week, the **Plutus** team kept working on the Plutus debugger, script capacity increase, documentation improvements, and Marconi development. 

The **Marlowe** team [addressed resource exhaustion](https://github.com/input-output-hk/marlowe-cardano/pull/501) in marlowe-chain-sync. They also updated multiple components to use the Marlowe Runtime protocol:  [marlowe-apps](https://github.com/input-output-hk/marlowe-cardano/pull/500), [marlowe-integration](https://github.com/input-output-hk/marlowe-cardano/pull/503), [marlowe-web-server](https://github.com/input-output-hk/marlowe-cardano/pull/504), and [Marlowe CLI](https://github.com/input-output-hk/marlowe-cardano/commit/d8b59409c). The team implemented the Runtime proxy server, added four [endpoints](https://github.com/input-output-hk/marlowe-cardano/pull/508) for withdrawals to REST API, and rewrote the withdrawal query to accept an optional set of role currencies to filter the results by different parameters. The team improved and automated different end-to-end tests, assessed options for replacing Plutus association map in validator, and added support for Merkleization of Marlowe contracts generated from ACTUS contract terms.

Finally, they fixed a discrepancy with division rounding between the Isabelle specification and PureScript.

### BASHO (SCALING)

The **Hydra** team released hydra-node version [0.9.0](https://github.com/input-output-hk/hydra/releases/tag/0.9.0), which includes fully specified behavior of on-chain scripts and off-chain head-logic, decreased costs for opening or closing a head, scalable contestation deadline semantics, and more. See the [release notes](https://github.com/input-output-hk/hydra/releases/tag/0.9.0) for details.

They also published the February [monthly report](https://hydra.family/head-protocol/monthly/2023-02/) reflecting on the Hydra project development and further plans. The team is now planning to extend review meetings with a wider audience by inviting more participants through the new [Hydra #announcements Discord](https://discord.gg/Bwdy2jNdm2) channel. Stay tuned for updates!

The **Mithril** team finished deploying the era activation mechanism in the preview testing environment as well as preparing the upgrade procedure for the SPOs. They are actively working on deploying this mechanism on the `pre-release-preview` and `release-preprod` networks where signers are run by the SPOs. The team also completed the refactoring of the handling of critical errors in the signer and aggregator state machines. Additionally, they continued the deployment of a new test network that runs on Cardano mainnet and computes the stake distribution with the optimized unreleased Cardano CLI command.

Finally, they finished designing the [certification](https://mithril.network/doc/mithril/mithril-protocol/certificates) of generic types of data by a Mithril network and started implementing its first phase.

![](https://lh3.googleusercontent.com/AKxrE5UJIAlcZJZmsKVy6Pbysr-x70Obku_QfnUmEkIleDpQLYoD41pqn2HtD9itiCZ1ltyGbkq6kCxa-37nFmLEZ8SEz2ItKH1Ce4XTmmcf9BDWTyIvrmKhyUPNYaS-9pDpmHg8oMrs)

### コアテクノロジー

この2週間、**台帳**チームはCIP-1694に焦点を当て、[Conway期を大幅に更新](https://github.com/input-output-hk/cardano-ledger/pull/3291)し、実装が承認および制定ロジックの仕様に準拠するようにしました。台帳の更新をコンセンサスとノードに統合し、Conwayインフラのテストに取り組みました。 

**ネットワーキング**チームは  バグの修正、Eclipse回避の実装、シミュレーションテストの改善、ミニプロトコルの拡張に焦点を当てました。ouroboros-network-0.4.0.1とouroboros-network-protocols-0.3.0.0を[CHAP](https://github.com/input-output-hk/cardano-haskell-packages/pull/147)に公開し、cardano-nodeの[バグ（着信接続制限の設定失敗）を修正](https://github.com/input-output-hk/cardano-node/pull/4902)しました。 

ステークプールを登録する際の一般的なオンチェーンミスを防止するために、cardano-cliでDNS名、IPアドレス、ポートの検証の厳密性を上げて実装しました。

**コンセンサス**チームは、UTXO-HDプロトタイプのリファクタリングと改良に引き続き取り組み、lmdb関連パッケージの改善を導入しました。特に、ロック処理の最適化を高めることでパフォーマンスを向上させる機会を特定しました。

Genesisに関しては、PNSolと研究者によって発見された問題の緩和策をスケッチしました。Genesisプロトタイプのテストと、既存のテストを充実させるためのロードマップも作成しました。

技術負債に対処し、軽微な改良を行い、メモリープールにトランザクションを追加するためのマイクロベンチマークをコンポーネントベルで作成しました。ベンチマークの結果は、ouroboros-consensusウェブページで公開されます。

コンセンサスドキュメントを[ouroboros-consensus](https://github.com/input-output-hk/ouroboros-consensus%23readme)リポジトリに移動し、ouroboros-consensus 0.3.0.0をリリースし、ouroboros-networkでのGitHubアクションの実行時間を短縮しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームはLedger v. 6.0.3のサポートの実装を完了しました。現在来週の回帰テストを計画しています。

**Lace**デスクトップの開発作業は進行中です。DAppブラウザーのCIP-30実装のための付随的なサポートと、Laceデスクトップを閉じる前にcardano-nodeプロセスがシャットダウンされるまでの猶予待機時間を追加しました。Laceブラウザー拡張機能で共有されている一部のUIコンポーネントの非互換性の問題を解決しました。

[Lace](https://www.lace.io/)チームは、ブラウザー拡張機能のメインネットリリース前に、バグの修正と新機能の追加に追われました。新しいv.0.6.0リリースでは、LaceにCIP-30が実装され、DAppコネクターの試用やCardano DAppsとのインタラクションが可能になりました。LedgerをDAppコネクターに接続するために、Ledgerハードウェアウォレットサポートのバグを修正しました。プレビューネットワークとプリプロネットワークの切り替えも可能になりました。[lace.io](//lace.io)でLace拡張機能を今すぐ入手して、更新情報をお楽しみください。

### スマートコントラクト

**Plutus**チームは、Plutusデバッガー、スクリプト容量増加、ドキュメントの改良、Marconi開発への取り組みを続けました。 

**Marlowe**チームは、Marlowe-chain-syncの[リソースの枯渇に対処](https://github.com/input-output-hk/marlowe-cardano/pull/501)しました。また、Marlowe Runtimeプロトコルを使用するために、[marlowe-apps](https://github.com/input-output-hk/marlowe-cardano/pull/500)、[marlowe-integration](https://github.com/input-output-hk/marlowe-cardano/pull/503)、[marlowe-web-server](https://github.com/input-output-hk/marlowe-cardano/pull/504)、[Marlowe CLI](https://github.com/input-output-hk/marlowe-cardano/commit/d8b59409c)の各コンポーネントを更新しました。Runtimeプロキシサーバーを実装し、REST APIに引き出し用の4つの[エンドポイント](https://github.com/input-output-hk/marlowe-cardano/pull/508)を追加し、引き出しクエリを書き直して、さまざまなパラメーターで結果をフィルタリングする機能を持つオプションの通貨セットを受け入れるようにしました。さまざまなエンドツーエンドテストを改良および自動化し、バリデーターでPlutusアソシエーションマップを置き換えるためのオプションを評価し、ACTUSコントラクト条件から生成されたMarloweコントラクトのマークル化サポートを追加しました。

Isabelle仕様とPureScript間の除算の丸めに関する不一致を修正しました。

### Basho( スケーリング)

**Hydra**チームは、hydra-node [0.9.0](https://github.com/input-output-hk/hydra/releases/tag/0.9.0)をリリースしました。このバージョンには、オンチェーンスクリプトとオフチェーンヘッドロジックの動作の完全指定、ヘッドの開閉にかかるコストの削減、スケーラブルな競合デッドラインセマンティクスなどが含まれています。詳細は[リリースノート](https://github.com/input-output-hk/hydra/releases/tag/0.9.0)をご覧ください。

Hydraプロジェクトの開発と今後の計画を反映した2月の月次報告書を[公開](https://hydra.family/head-protocol/monthly/2023-02/)しました。現在、新しい[Hydra #announcements Discord](https://discord.gg/Bwdy2jNdm2)チャネルを使ってより多くの参加者を招待することで、レビューミーティングをより多くのユーザーに拡大することを計画しています。更新情報をお見逃しなく。

**Mithril**チームは、プレビューテスト環境に開発期アクティベーションメカニズムを導入し、SPOの更新手順の準備を完了しました。SPOによって署名者が実行される「プレリリースプレビュー」および「リリースプリプロ」ネットワークにこのメカニズムを導入することに積極的に取り組んでいます。署名者ステートマシンとアグリゲーターステートマシンのクリティカルエラー処理のリファクタリングも完了しました。Cardanoメインネット上で動作し、最適化された未リリースのCardano CLIコマンドを使用してステーク分布を計算する新しいテストネットワークのデプロイを継続しました。

Mithrilネットワークによる汎用型データ認証の設計を完了し、実装の第1段階を開始しました。
