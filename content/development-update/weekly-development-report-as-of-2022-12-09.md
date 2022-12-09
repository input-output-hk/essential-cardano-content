---
title: Weekly development report as of 2022-12-09
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d67c63a6-3ef2-4564-9a16-e9e4097d4271/
image_text: ""
---

### CORE TECHNOLOGY

This week, the core technology teams continued working on ledger, consensus, and networking improvements. 

The DB Sync team also worked on a 13.1.0.0-rc2 release, which includes many DB Sync improvements, makes rollbacks and synchronization faster, simplifies schemas, fixes several bugs, and introduces migrations. This release finalizes the objectives set for DB Sync over the previous three months and is part of the syncing speed objective set for the next period. 

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team enhanced analytics tracking for CPU/RAM and Byron wallet usage and tested the new cardano-app on Ledger and Trezor firmware. Work is also ongoing on Cicero migration with support from the developer experience (DevX) team.

The team also continued polishing DApp integration with the Lace desktop application. They made some fixes to the application’s UI and tested the local node implementation. Finally, they started working on adding the possibility of opening the Lace desktop app by listening to magic links interaction. 

The **Adrestia** team kept working on getting cardano-js-sdk ready for production. The team is also working on implementing the multisig (shared wallets) feature and the first implementation of the build-balance library (balanceTx) in cardano-wallet.

Finally, the team is doing CI/CD changes and preparing the next cardano-wallet release supporting node v.1.35.4.

### SMART CONTRACTS

This week, the **Plutus** team continued working on increasing script capacity and on the Plutus Debugger MVP. They also kept on building Marconi indexers and addressing technical debt, supporting cardano-api in the emulator.

The **Marlowe** team planned Marlowe Runtime testing, wrote different unit tests, and enabled Marlowe Playground to use Nix Flakes. They also replaced ‘PK’ with ‘Address’ in the Playground, removed some dependencies, and added the following endpoints to the Marlowe REST API: GET/contracts/:contractId/withdrawals; PUT/contracts/:contractId/transactions/:transactionId; GET/contracts/:contractId/transactions/:transactionId. 

Finally, the team fixed default validity interval calculations in marlowe-tx, wrote end-to-end test scripts for `marlowe ls` commands, and implemented the ACTUS test framework in PureScript. 

### BASHO (SCALING)

This week, the **Hydra** team worked on some current tasks, extended their model-based testing (MBT) approach to [transaction creation and observation](https://github.com/input-output-hk/hydra/issues/410), and resolved \`[AcquirePointTooOld](https://github.com/input-output-hk/hydra/issues/439)\` issues of the hydra-node by changing the wallet initialization. Hydra researchers also updated security proofs of the Coordinated Hydra Head protocol, which are bound to be included in the Hydra Head V1 specification. 

The **Mithril** team released a new [2248.1](https://github.com/input-output-hk/mithril/releases/tag/2248.1) distribution. They published the first version of the Mithril cryptographic library on [crates.io](//crates.io) – the Rust community’s crate registry. The team also completed editing the first draft version of the ‘Mithril decentralized network’ CIP, which is currently being reviewed by the Cardano network team.

Finally, they started simplifying the aggregator node's multi-signer by removing the certificate creation from its responsibilities.

### GOVERNANCE

This week **Project Catalyst** is holding elections for the Circle V4, which will remain open until December 16th (23:45 UTC). Please take a look [here](https://news.dripdropz.io/catalyst-circle-v4-voting-c8863e5697d6) to learn more about what the Circle is and how to cast your vote. As we draw 2022 to a close, we recap a little on what's to come for Project Catalyst in 2023.

What started as an experiment in grassroots innovation has evolved into a community-led organism. The Cardano community continues to be the heart of Project Catalyst, expressing their views, steering from the helm, and influencing the overall direction.

For 2023, the community is facing some critical decisions on how they would like to see the funding mechanism and governance structure work. Specifically, how that structure should function given the required transparency throughout the entire funding process and how the funding mechanism becomes entirely self-sustaining within the ecosystem.

Some of this work has already started. For example, IOG and representatives from the Catalyst community hosted a workshop at the Cardano Foundation Summit to discuss how to make Catalyst more inclusive. The attendees recognized the need for a charter empowering the community to self-determine the next era of Project Catalyst. Having a Project Catalyst charter could be the bedrock for engagement and how each community member participates in the overall governance of Project Catalyst.

Additionally, Project Catalyst and Cardano are heading into the age of Voltaire, and much of the technical aspects of how Cardano will be governed on the chain are available to [read in CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694). With the release of the Voltaire CIP and all the announcements at IO ScotFest, next year promises to be full of evolution - with Project Catalyst playing a significant role in the innovation and growth of Cardano.
  
![](https://ucarecdn.com/e58d5923-2c46-4175-a365-6d2891ab78d6/)

### コアテクノロジー

コアテクノロジーチームは、台帳、コンセンサス、ネットワークの改良への取り組みを続けました。 

DB Syncチームは13.1.0.0-rc2リリースにも取り組みました。これには多くのDB Syncの改善、ロールバックと同期の高速化、スキーマの簡素化、バグの修正、移行の導入が含まれます。本リリースは、この3か月間にわたりDB Syncに対して設定されていた目標を完了させ、次の期間用に設定した同期速度の目標の一部となっています。 

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームはCPU/RAMの追跡とByronウォレット使用量の分析を強化し、新しいcardano-appをLedgerとTrezorファームウェアでテストしました。Cicero移行作業も、開発者エクスペリエンス（DevX）チームのサポートを得ながら進行中です。

DAppとLaceデスクトップアプリケーションとの統合作業は、調整を継続しています。アプリケーションのUIに修正を加え、ローカルノードの実装をテストしました。マジックリンクのインタラクションをリッスンすることによってLaceデスクトップアプリを起動する可能性を追加する取り組みを始めました。 

**Adrestia**チームは、引き続きcardano-js-sdkを本番環境にするための作業を進めています。マルチシグ（ウォレットの共有）機能の実装と、cardano-walletへのbuild-balanceライブラリー（balanceTx）初回実装作業にも取り組んでいます。

CI/CDの変更を行い、ノードv.1.35.4をサポートするcardano-walletの次回リリースを準備しています。

### スマートコントラクト

**Plutus**チームは、引き続きスクリプト容量の増加とPlutus Debugger MVPに取り組みました。Marconiインデクサーの構築を続け、エミュレーターでcardano-apiをサポートする技術負債に対処しました。

**Marlowe**チームはMarlowe Runtimeのテストを計画し、さまざまなユニットテストを作成し、Marlowe PlaygroundでNix Flakesを使用可能にしました。PlaygroundでPKをAddressに置き換え、いくつかの依存関係を削除し、Marlowe REST APIに次のエンドポイントを追加しました。GET/contracts/:contractId/withdrawals、PUT/contracts/:contractId/transactions/:transactionId、 GET/contracts/:contractId/transactions/:transactionId 

marlowe-txのデフォルトの有効期間計算を修正し、「marlowe ls」コマンドのエンドツーエンドテストスクリプトを作成し、ACTUSテストフレームワークをPureScriptに実装しました。 

### Basho( スケーリング)

**Hydra**チームは現行のタスクに取り組み、モデルベースのテスト（MBT）アプローチを[トランザクションの作成と観察](https://github.com/input-output-hk/hydra/issues/410)に拡張し、hydra-nodeの[AcquirePointTooOld](https://github.com/input-output-hk/hydra/issues/439)問題を、ウォレットの初期化を変更することによって解消しました。Hydra研究者は、Coordinated Hydra Headプロトコルのセキュリティ証明を更新しました。これは、Hydra Head V1の仕様に含まれる予定です。 

**Mithril**チームは新ディストリビューション[2248.1](https://github.com/input-output-hk/mithril/releases/tag/2248.1)をリリースしました。Mithril暗号理論ライブラリー初回バージョンを、Rustコミュニティのクレートレジストリ、[crates.io](//crates.io)に公開しました。Mithril decentralized network CIPの初回ドラフトの編集を完了しました。これは現在Cardanoネットワークチームのレビュー中です。

アグリゲーターノードのマルチ署名者の責任から証明書の作成を取り除くことで、そのマルチ署名者を簡素化する作業を開始しました。

### ガバナンス

**Project Catalyst**はCircle V4の選挙を行っています。これは、日本時間12月17日（8:45）に締め切られます。Circleと投票方法の詳細は[こちら](https://news.dripdropz.io/catalyst-circle-v4-voting-c8863e5697d6)をご覧ください。2022年も終わりに近づく中、2023年のProject Catalystについて少しまとめます。

草の根イノベーションの実験として始まったものが、コミュニティ主導の有機体に進化しました。CardanoコミュニティがProject Catalystの中心であることは変わりません。意見を表明し、実権を握り、全体的な方向性に影響を与えています。

 2023年、コミュニティは資金調達メカニズムとガバナンス構造をどのように作用させたいかについて、重要な決定に向き合います。具体的には、資金調達プロセス全体を通じて必要な透明性を考慮して、その構造がどのように機能するか、および資金調達メカニズムがエコシステム内でどのようにして完全に自立するか、といったことです。

この作業の一部はすでに始まっています。例えば、IOGとCatalystコミュニティの代表者はCardano財団サミットでワークショップを主宰し、Catalystの包摂性を高める方法を話し合いました。参加者は、コミュニティがProject Catalystの次の時代を自分たちで決定できるようにするための憲章が必要であることを認識しました。Project Catalyst憲章を持つことは、エンゲージメントと、各コミュニティメンバーがProject Catalystの全体的なガバナンスへの参加の仕方の基盤となります。

Project CatalystとCardanoはVoltaireの時代に入っています。Cardanoがチェーン上でいかに管理されるかについての技術的側面は、[CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694)をご覧ください。Voltaire CIPのリリースとIO ScotFestでのすべての発表から、来年は多くの進化が見込まれます。Project CatalystはCardanoのイノベーションと成長に重要な役割を果たします。
