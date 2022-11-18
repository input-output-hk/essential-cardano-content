---
title: Weekly development report as of 2022-11-18
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/e66ab0b7-f247-4030-acb6-0bdb5e545eae/
image_text: ""
---

### CORE TECHNOLOGY

During the past two weeks, the **ledger** team made significant progress on the new versioning of CBOR serialization, which resolves numerous serialization issues lingering since the Shelley era. This work is now in review and will also require effort to integrate new serialization with downstream components. They also made a new CIP proposing a deprecation cycle for transaction serialization schemes. 

Finally, the team worked on deposit tracking, continued addressing the technical debt, and improved the code base ensuring a coherent and consistent naming convention. 

The **consensus** team started documenting the implementation of the UTXO HD feature and continued developing relevant tests. They improved the Haskell support for LMDB and spent time working on the LSM tree prototype and its parameter-tuning algorithm design. 

Work is ongoing on Genesis development. The team investigated the [‘plateaus’](https://input-output-hk.github.io/cardano-updates/tags/consensus/#benchmarking-the-csj-prototype) issue, which appeared as a result of the `TICKF` slowdown on era boundaries. This led to the development of a caching strategy to remove mentioned ‘plateaus’, which will help alleviate the growing block production delay on epoch switch. 

Additionally, the team helped review the block forge credential hot swap feature (which is intended for use in the adoption of P2P), worked on technical debt, and collaborated with the networking team to improve the `io-sim` framework, which is crucial for testing and simulation of Cardano components. They also removed thunks that appeared on era translations and improved the diffusion pipelining feature. 

Finally, the team is working on a presentation about Praos and Genesis.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team made several changes to `build` scripts to enable the migration of build CI from Buildkite to Cicero.

Work is ongoing on the **Lace** desktop development. The team planned further functionality improvements, worked on user stories creation, and continued investigating ways to enable the interaction between the desktop application and other DApps. They also started investigating the addition of Trezor hardware wallet support. The QA team ran 95% of existing Lace browser end-to-end tests on the desktop application. 

The Lace team will be at IO ScotFest this week, read more about [the event here](https://iohk.io/en/blog/posts/2022/11/04/announcing-io-scotfest-the-age-of-voltaire/) and join IOG to celebrate the age of Voltaire. 

The **Adrestia** team was focused on getting cardano-js-sdk ready for production.

They released cardano-rosetta 2.0.0-beta.0, which includes some fixes and performance improvements.

Finally, the team is still working on implementing the multisig (shared wallets) feature and creating the first implementation of build-balance library (balanceTx) in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team worked on PI planning defining epics and stories for the next five sprints. The team will be prioritizing work on the Plutus Debugger MVP, the implementation of SECP-256k1 built-in function in Plutus, and increasing the script capacity. The Plutus tools team is focused on the Marconi MVP finalization, Plutus application multi-scenario testing design, and contributions to Cardano API. 

The **Marlowe** team implemented an endpoint to show users’ available wallets and created the Marlowe Actus Labs project. They also added tests for marlowe-protocol messages serialization along with annotation to protocol tags, created a skeleton for a semantics test oracle driver, and fixed a bug that hid values from specific oracles.

### BASHO (SCALING)

The **Hydra** team worked with the Obsidian Systems team on Hydra Head use cases and published a litepaper about [Hydra for Payments](https://iohk.io/en/blog/posts/2022/11/10/hydra-for-payments-introducing-developer-tooling-to-unlock-micropayments-on-cardano/). They also created a draft scope RFP for the external audit of the Hydra Head V1 specification & implementation. 

Finally, the team fixed a bug related to the chain-following when using persistence and improved logs for better observability of hydra-node processes.

The **Mithril** team has worked on an enhanced mechanism for node versioning,  storage, and communication protocol. They implemented version detections for the signer and aggregator nodes, designed the automatic store upgrade feature for these nodes, and enhanced the documentation of the configuration parameters of the several Mithril networks. 

Finally, the team continued working on the elaboration of the CIP that will allow the decentralization of Mithril by relying on the Cardano node network layer.

### GOVERNANCE

**Project Catalyst** continues the cooldown phase while planning and looking ahead to Fund10. After a brief pause, Project Catalyst Town Halls will return on November 30, you can register to join [here](https://bit.ly/3rCicSR).  
  
At next week's Cardano summit, IOG's Project Catalyst team is running a workshop to help define and shape the future direction of Project Catalyst. To start, Project Catalyst needs a charter providing a framework to empower the community to self-determine the next era of Project Catalyst.

The workshop will be an opportunity to discuss and propose statements to be included in the first charter draft, with the ambition to complete V.01. This will then head on a virtual roadshow for much more deliberation and iterations with the whole community to have a fully-fledged V1.

If you're heading to Lausanne next week, we'd love you to join the conversation.  
  
**The project Catalyst team speaks on Day 1 (20.11.2022) and the workshop starts at 13:30 CET. If you'd like to join the working group,** [RSVP here](https://forms.gle/Yra3xMHwp65W8brC8) **(space is limited so please RSVP in advance).**

  

![](https://lh5.googleusercontent.com/UQEHg-LiJy6lsXZBYfqB3UMHuPlHUgHA7KzNth-3Xb1Wg1hc_vtpfUkj2B_92HZjspoOIHlJpLYXZberdMn_V8HYUiDPGnx5hxIVVfTFhXqtOmqSZ0cbRU3RVEDa0lx7yo3AA02sXJQTsGDm4GSffJ0vPzo2xlz9IxOpKSiv3lmXXGRQErE2vjJnM99Oi4-i)

### コアテクノロジー

この2週間、**台帳**チームはCBORシリアル化の新バージョンに関して大幅に前進しました。これは、Shelley期から続くシリアル化に関する多くの問題を解消します。この作業は現在レビュー中であり、また、ダウンストリームコンポーネントとの新しいシリアル化と統合する必要もあります。さらに、トランザクションシリアル化スキームの非推奨サイクルを提案する新しいCIPを作成しました。 

デポジットの追跡に取り組み、技術負債への対処を続け、コードベースを改良して、命名規則との一貫性を確保しました。 

**コンセンサス**チームは、UTXO HD機能の実装の文書化を始め、関連するテストの開発を続けました。LMDBのHaskellサポートを改良し、LSMツリーのプロトタイプとパラメーター調整アルゴリズム設計への取り組みに時間を割きました。 

Genesisの開発作業は進行中です。開発期の境界でTICKFスローダウンの結果としてあらわれた[「プラトー」](https://input-output-hk.github.io/cardano-updates/tags/consensus/%23benchmarking-the-csj-prototype)問題を調査しました。これにより、「プラトー」を取り除くためのキャッシュ戦略が開発されました。これは、エポック切り替えで増大するブロック生成の遅延を軽減するのに役立ちます。 

ブロックフォージクレデンシャルのホットスワップ機能（P2Pの普及に使用することを目的とする）のレビューを手伝い、技術負債に取り組み、Cardano コンポーネントのテストとシミュレーションに欠かせない「io-sim」フレームワークの改良でネットワークチームと連携しました。開発期の翻訳に現れるサンクを削除し、拡散パイプライン機能を改良しました。 

PraosとGenesisのプレゼンテーションにも取り組んでいます。

通常通り、異なるチームからの詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームはbuildスクリプトに変更を加え、BuildkiteからCiceroへのビルドCIの移行を可能にしました。

**Lace**デスクトップの開発作業は進行中です。さらなる機能改良を計画し、ユーザーストーリーの作成に取り組み、デスクトップアプリケーションと他のDApp 間の相互作用を可能にする方法を引き続き調査しました。Trezorハードウェアウォレットサポートの追加に関する調査も始めました。QAチームは、デスクトップアプリケーションで既存のLaceブラウザーのエンドツーエンドテストの95%を実行しました。 

Laceチームは今週IO ScotFestに参加します。イベントの詳細は[こちらから](https://iohk.io/jp/blog/posts/2022/11/04/announcing-io-scotfest-the-age-of-voltaire/)。IOGと一緒にVoltaire期の到来を祝いましょう。 

**Adrestia**チームはcardano-js-sdkを本番環境にすることに集中しました。

cardano-rosetta 2.0.0-beta.0をリリースしました。ここには、若干の修正とパフォーマンスの改良が施されています。

マルチシグ（ウォレットの共有）機能と、cardano-walletへのbuild-balanceライブラリー（balanceTx）初回実装の作成も続けています。

### スマートコントラクト

**Plutus**チームは、次の5スプリントのエピックとストーリーを定義するPI計画に取り組みました。Plutus Debugger MVP、PlutusへのSECP-256k1ビルトイン機能実装、スクリプト容量拡大に関する作業を優先する予定です。PlutusツールチームはMarconi MVPの仕上げ、Plutusアプリケーションのマルチシナリオテストの設計、Cardano APIへの貢献に集中しました。 

**Marlowe**チームは、ユーザーが利用できるウォレットを表示するエンドポイントを実装し、Marlowe Actus Labsプロジェクトを作成しました。marlowe-protocolメッセージのシリアル化のテストとプロトコルタグへの注釈を追加し、セマンティクステストのオラクルドライバーのスケルトンを作成し、特定のオラクルから値を隠していたバグを修正しました。

### Basho( スケーリング)

**Hydra**チームは、Obsidian Systemsチームと協力してHydra Headのユースケースを検討し、[Hydra for Payments](https://iohk.io/jp/blog/posts/2022/11/10/hydra-for-payments-introducing-developer-tooling-to-unlock-micropayments-on-cardano/)に関するライトペーパーを公開しました。また、Hydra Head V1の仕様と実装の外部監査のためにスコープRFPのドラフトを作成しました。 

永続性を使用する際のチェーンフォローに関連するバグを修正し、ログを改良してhydra-nodeプロセスの可観測性を向上させました。

**Mithril**チームは、ノードのバージョン管理の拡張メカニズム、ストレージ、通信プロトコルに取り組んできました。署名者ノードとアグリゲーターノードのバージョン検出を実装し、これらのノードの自動ストアアップグレード機能を設計し、複数のMithrilネットワークで設定パラメーターのドキュメントを強化しました。 

Cardanoノードネットワーク層に依存することでMithrilの分散化を可能にするCIPの精緻化に引き続き取り組みました。

### ガバナンス

**Project Catalyst**はいまだクールダウン期間にあり、Fund10の企画と展望を進めています。短い小休止の後、Project Catalystのタウンホールは11月30日に再開します。参加登録は[こちら](https://bit.ly/3rCicSR)から。  
  
来週のCardanoサミットで、IOGのProject Catalystチームはワークショップを主宰し、Project Catalystの将来の方向性の定義、形成をサポートします。まず、Project Catalystには、コミュニティがProject Catalystの次の時代を自分たちで決定できるようにするためのフレームワークを提供する憲章が必要です。

このワークショップは、V.01を完成させるという野心を持って、最初のドラフトに含めるステートメントについて話し合い、提案する機会となります。そして、V1を完全に完成させるために、コミュニティ全体と審議や反復を深めるための仮想ロードショーへと向かいます。

来週ローザンヌに行かれる方は、ぜひ会話に参加してください。  
  
**Project Catalystチームによる発表は初日（2022年11月20日）、ワークショップは13:30 CETに開始します。ワーキンググループに参加を希望する場合は、**[こちらから、RSVP](https://forms.gle/Yra3xMHwp65W8brC8)**（参加確認）を行ってください（スペースに限りがあるため、事前にRSVPを行ってください）。**
