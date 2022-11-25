---
title: Weekly development report as of 2022-11-25
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/05b61cf9-ac73-4c5a-a633-0c420478939c/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **ledger** team released [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) for entering the Voltaire phase, and the community is encouraged to participate in its review and discussions. The team also found a way to version all serialization schemes in the ledger and merged the corresponding pull request. 

The node team is collaborating with other teams working on release process improvements. 

The **performance** team investigated P2P performance to support the networking team and worked on enabling SECP benchmarking - they created the script and are now working on Plutus V2 generation support. The team also worked on the new tracing system’s performance properties, added an integrated data dictionary, and collaborated with SRE to start publishing performance data. 

Finally, they started bringing the Nomad-based workbench backend closer to a Cloud deployment scenario.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team continued working on the migration from Buildkite to Cicero.

Work is ongoing on the **Lace** desktop development. The team is in the process of merging development streams for both the browser and desktop teams to work in a single environment. The team also progressed on Lace proof-of-concept development, which allows embedding DApps into the Lace desktop application. They also worked on the local Cardano node to enable transaction sending and resolved some hardware wallet issues. 

Finally, the QA team is running multiple end-to-end tests for the Lace browser and desktop applications. 

The **Adrestia** team remained focused on getting cardano-js-sdk ready for production. They released cardano-rosetta 2.0.0-beta.0, which includes some fixes and performance improvements.

Finally, the team is still working on implementing the multisig (shared wallets) feature and creating the first implementation of build-balance library (balanceTx) in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team worked on completing SECP-256k1 builtin for Plutus. You can learn more about [SECP in this blog post](https://www.essentialcardano.io/article/what-is-secp-and-how-it-drives-cross-chain-development-on-cardano). They also worked on increasing script capacity, the Plutus Debugger MVP, and finalized the implementation of full Babbage support in the Plutus tools prior to its release. 

Finally, the team continued building Marconi indexers and worked on the technical debt supporting `cardano-api` in the emulator. 

The **Marlowe** team implemented `GET /:walletName` and `GET /contracts` endpoints and removed Marlowe dependency from Playground commons. They also fixed a bug that caused some contract failures, wrote end-to-end test scripts for `marlowe ls` commands, and implemented PAM, NAM, LAM, and ANN transformation to Marlowe in Purescript. 

Finally, the team held a Marlowe workshop at the Cardano Summit in Lausanne.

### BASHO (SCALING)

The **Hydra** team released version [0.8.1](https://github.com/input-output-hk/hydra/releases/tag/0.8.1), which includes several fixes and an extension of the persistence (introduced by version 0.8.0) of replaying server outputs to make clients like the hydra-tui aware of the latest hydra-node state. The team also worked on the specification and closing gaps in the on-chain scripts, collaborated with the education team on a Hydra tutorial, and renamed the repository from `hydra-poc` to \`[hydra](https://github.com/input-output-hk/hydra)\`.

The **Mithril** team released a new distribution [2246.1](https://github.com/input-output-hk/mithril/releases/tag/2246.1). They upgraded the Mithril test networks infrastructure to make them more resilient and kept on refining the release process fixing some minor bugs. The team also worked on the second phase of implementing the automatic store upgrade of the signer and aggregator nodes. 

Finally, they continued working on the CIP design that proposes connecting the Mithril network to the Cardano network layer so that the latter will handle the main networking capabilities. 

### GOVERNANCE

**Project Catalyst** and Cardano are heading into the age of **Voltaire**. [CIP-1694](https://github.com/cardano-foundation/CIPs/blob/75c7c93a0ce8c1811d28857e7630681ff56d7495/CIP-1694/README.md#an-on-chain-decentralized-governance-mechanism-for-voltaire) was published last week, laying down the foundations for decentralized decision making. CIP-1694 describes a mechanism for on-chain governance that will underpin the Voltaire phase of Cardano. 

The document builds on and extends the original Cardano governance scheme that was based on a fixed number of governance keys. It aims to provide a first step that is both valuable and technically achievable in the near term as part of the proposed Voltaire governance system.

It also seeks to act as a jumping-off point for continuing community input, including appropriate threshold settings and other on-chain settings. Subsequent proposals may adapt and extend this proposal to meet emerging governance needs.

It’s now open for public review and contributions [here](https://github.com/cardano-foundation/CIPs/pull/380).

IOG and a snippet of the **Project Catalyst** community hosted a workshop at last week’s Cardano Foundation Summit to help define and shape the future direction of Project Catalyst. This started by identifying a need for a charter that provides a framework to empower the community to self-determine the next era of Project Catalyst. It was one of the most popular workshops across the Summit, with over 50 participants engaging in thought-provoking discussions. The outcomes and next steps will be shared at the next Town Hall on November 30, and you can register [here](https://bit.ly/3rCicSR) to join.

![](https://lh5.googleusercontent.com/HffqM_992wCA2dJ-tVtrBUffAFLvWcGDcWMWrdWem4qRrAYQnGiGfkodiUbV3CPRszCNvnQDX6t5enb3ZifAUi4TOwhjuQwkqROL4N7aWSAAoj2c9LHCZ3lLIY7Uy0kEXRqqfH1zeI_ox8G4_Arf4iR6iI7OdkoJlPB6uLmnpHOMAH5ytEdmVn8cU-a--HdR)

### コアテクノロジー

**台帳**チームはVoltaire期に入るための[CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380)をリリースしました。コミュニティはそのレビューと話し合いに参加することが奨励されています。台帳内のすべてのシリアル化スキームをバージョン管理する方法を見つけ、対応するプルリクエストをマージしました。 

ノードチームはリリースプロセスの改良について他チームと協力しています。 

**パフォーマンス**チームはネットワークチームをサポートするためにP2Pの調査を行ったほか、SECPのベンチマークを有効化する作業を行いました。スクリプトを作成し、現在Plutus V2の生成をサポートしています。新しい追跡システムのパフォーマンスプロパティにも取り組んでおり、統合データ辞書を加え、SREと協力してパフォーマンスデータの公開を始めました。 

Nomadベースのワークベンチバックエンドをクラウドデプロイシナリオに近づけ始めました。

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームはBuildkiteからCiceroへの移行作業を続けました。

**Lace**デスクトップの開発作業は進行中です。ブラウザーチームとデスクトップチームが単一の環境で作業できるよう、開発ストリームをマージさせています。Laceの概念実証開発も、DAppをLaceデスクトップアプリケーションに組み込むことができるよう進展させました。ローカルのCardanoノードでトランザクション送信が可能になるよう取り組み、ハードウェアウォレットの問題を一部解消しました。 

QAチームはLaceブラウザーアプリケーションとデスクトップアプリケーションのエンドツーエンドテストを複数実行しました。 

**Adrestia**チームは、引き続きcardano-js-sdkを本番環境にすることに集中しました。cardano-rosetta 2.0.0-beta.0をリリースしました。ここには、若干の修正とパフォーマンスの改良が施されています。

マルチシグ（ウォレットの共有）機能と、cardano-walletへのbuild-balanceライブラリー（balanceTx）初回実装の作成も続けています。

### スマートコントラクト

**Plutus**チームは、PlutusのSECP-256k1ビルトインの仕上げに取り組みました。SECPの詳細は[こちらのブログ記事](https://www.essentialcardano.io/article/what-is-secp-and-how-it-drives-cross-chain-development-on-cardano)をご覧ください。スクリプト容量の増加、Plutus Debugger MVPにも取り組み、リリース前にPlutusツールでの完全なBabbageサポートの実装を完了しました。 

Marconiインデクサーの構築を続け、エミュレーターでcardano-apiをサポートする技術負債に取り組みました。 

**Marlowe**チームはGET /:walletNameとGET /contractsエンドポイントを実装し、Playground commonsからMarlowe依存関係を削除しました。コントラクトを失敗させるバグを修正し、marlowe lsコマンド用にエンドツーエンドテストスクリプトを作成し、PAM、NAM、LAM、ANN変換をPurescriputでMarloweに実装しました。 

ローザンヌのCardanoサミットでMarloweワークショップを主催しました。

### Basho( スケーリング)

**Hydra**チームはバージョン[0.8.1](https://github.com/input-output-hk/hydra/releases/tag/0.8.1)をリリースしました。これには複数の修正と、サーバー出力のリプレイの持続性の拡張（バージョン0.8.0で導入）が含まれており、hydra-tuiのようなクライアントがhydra-nodeの最新ステータスを認識できるようにします。オンチェーンスクリプトの仕様とギャップの解消に取り組み、教育チームと協力してHydraチュートリアルを作成し、リポジトリの名称をhydra-pocから[hydra](https://github.com/input-output-hk/hydra)に変更しました。

**Mithril**チームは新ディストリビューション[2246.1](https://github.com/input-output-hk/mithril/releases/tag/2246.1)をリリースしました。Mithrilテストネットワークインフラをアップグレードして回復性を高め、軽微なバグを修正するリリースプロセスの改良を続けました。署名者ノードとアグリゲーターノードの自動ストアアップグレード実装の第2段階に取り組みました。 

引き続きCIPの作成に取り組みました。これは、MithrilネットワークをCardanoネットワーク層に接続して後者が主要なネットワーキング機能を処理することを提案するものです。 

### ガバナンス

**Project Catalyst**とCardanoは**Voltaire**期に向かっています。[CIP-1694](https://github.com/cardano-foundation/CIPs/blob/75c7c93a0ce8c1811d28857e7630681ff56d7495/CIP-1694/README.md%23an-on-chain-decentralized-governance-mechanism-for-voltaire)は先週公開され、分散型意思決定の基礎を敷きました。CIP-1694は、CardanoのVoltaire期を支えるオンチェーンガバナンスのメカニズムを説明しています。 

このドキュメントは、一定数のガバナンスキーに基づいたオリジナルのCardanoガバナンススキームを基に構築および拡張されています。これは、提案されているVoltaireガバナンスシステムの一部として、価値があり、技術的にも近い将来達成可能な最初のステップを提供することを目的としています。

また、適切な閾値設定やその他のオンチェーン設定など、コミュニティからのインプットを継続するための出発点として機能することも目指しています。今後の提案では、新たなガバナンスのニーズを満たすために、この提案を適応および拡張する可能性があります。

現在、[こちらで](https://github.com/cardano-foundation/CIPs/pull/380)レビューと投稿のため公開されています。

IOGとProject Catalystコミュニティの一部は、先週のCardano財団サミットでワークショップを主催し、Project Catalystの将来の方向性を定義、形成する手助けをしました。これは、コミュニティがProject Catalystの次の時代を自分たちで決定できるようにするためのフレームワークを提供する憲章の必要性を特定することから始めました。50人以上の参加者が示唆に富む議論に参加し、サミット全体でも人気の高いワークショップとなりました。結果と次のステップは、次回11月30日のタウンホールで発表されます。参加は[こちら](https://bit.ly/3rCicSR)から登録してください。
