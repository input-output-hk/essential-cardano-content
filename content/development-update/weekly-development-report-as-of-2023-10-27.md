---
title: Weekly development report as of 2023-10-27
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/a8387292-e964-4e1e-9f88-6b1fa6886b36/
image_text: Weekly development report as of 2023-10-27
---

### CORE TECHNOLOGY

This week, the **core technology** teams continued working on node, networking, and consensus improvements.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### SMART CONTRACTS

This week, the **Plutus** tools team continued working on the Marconi API queries, Cardano node emulator for integration testing, and kept experimenting with the transition of Marconi to become the Cardano node. They also worked on updating user documentation. 

The **Marlowe** team introduced a flat version of the functions for submitting transactions from  ts-sdk, implemented health checks to verify the validity of [runtime URLs](https://github.com/input-output-hk/marlowe-payouts/pull/17), and allowed consumers to access their wallet-associated contracts, enhancing user convenience and accessibility.

Furthermore, the team conducted extensive user testing for the Runner MVP, focused on creating a [proof of concept](https://github.com/input-output-hk/marlowe-ts-sdk/pull/50) (POC) of the survey contract in  ts-sdk, and added several key functions, such as [getTransactionById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/42) and [getTransactionsForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/40). They also published the [TS-SDK explainer](https://github.com/input-output-hk/marlowe-doc/pull/177/files), [integrated](https://github.com/input-output-hk/marlowe-ts-sdk/pull/51) ts-sdk with the vesting contract, and added the `ts-sdk` [test suite](https://github.com/input-output-hk/marlowe-ts-sdk/pull/45). 

Finally, the team worked on documentation [improvements](https://github.com/input-output-hk/marlowe-cardano/pull/733), made [protocol adjustments](https://github.com/input-output-hk/marlowe-cardano/pull/730) in the Runtime by propagating remote errors to peers, and introduced functionality for disconnecting wallets in the Runner, improving the overall user experience. 

### SCALING

The **Hydra** team focused on preparing a masterclass and a workshop for the Cardano Summit 2023. They also worked on enhancing the Hydra node API submit-transaction workflow, so that it accepts three different encoding types (Base16 encoded CBOR string, TextEnvelope type, and JSON). Additionally, they continued upgrading the TUI brick to v.1.10. 

This week, the **Mithril** team released a new distribution [2342.0](https://github.com/input-output-hk/mithril/releases/tag/2342.0). This release includes support for SPO tickers displayed in the [Mithril explorer](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator) and the ability to produce slim Docker images for Mithril nodes.

They also kept working on decentralizing the Mithril networks with the [peer-to-peer (P2P) networking proof of concept](https://github.com/input-output-hk/mithril/issues/1300), progressed with the adaptation of the [Mithril client as a library](https://github.com/input-output-hk/mithril/issues/1141), and worked on the deterministic [computation](https://github.com/input-output-hk/mithril/issues/1283) of the UTXO set from the immutable files. 

Finally, they fixed the [bottleneck](https://github.com/input-output-hk/mithril/issues/1187) of the key registration in the aggregator, investigated some unreachability on the release-mainnet aggregator, and enhanced the Mithril explorer UI.

### VOLTAIRE

Collaboration and democratic decision making will soon be a streamlined process for the entire community to enjoy. The Voltaire GovTool serves as a valuable resource for advancing community building on Cardano. It provides a user-friendly interface that enables ada holders to directly interact with CIP-1694, easily register as delegate representatives (DReps), delegate voting power to DReps, and review governance actions. Register [here](https://forms.gle/Sw4vZaga68b2Ps8p7) if you’re interested in testing the Voltaire GovTool.

Work on SanchoNet governance phase 5 continues being iterated after the latest node v.8.5.0-pre release. It has key elements that contribute to the adaptability and resilience of Cardano’s network as it continues to evolve. Visit the [SanchoNet](https://sancho.network) website, and join the conversations on [Discord](https://sancho.network/get-started/discord). Contribute to SanchoNet today by testing the governance processes of CIP-1694.  

To get involved in shaping the future of Cardano, make sure to [join Intersect](http://intersectmbo.org/).

### CATALYST

176 of 192 (92%) funded projects, approved in Fund10 back in September, have their statement of milestones (SoM) now signed off by community members, meaning those teams are beginning to receive their initial funding distributions. Six projects have already submitted their first milestone proof of achievements (PoA) for the community to publicly verify that the deliverables were met and the project can progress to receiving funds for the next milestone. This is a tremendous achievement given that this is the first time milestone-based accountability is being verified by a significant number of community members.

The open-source setup of both Catalyst Voices and Catalyst Ecosystem Accelerator funded projects is underway, the public repos are in an advanced state of readiness, and the team anticipates that proof of achievement will have been verified by the next development update.  

Dry-run testing of the Fund11 Voting App begins this week, with new UI updates that include new filters to help voters get to the proposals they care about quicker.     

The Catalyst Team are also finalizing preparations for Cardano Summit workshops which will zoom in on the plans for the next 12 months, starting with the imminent launch of Fund11 during November, the first announcement from the team since IOG was given the mandate from the community to continue as Project Catalyst’s fund operators. Stop by the booth and sign up to the workshops to find out more. 

### EDUCATION

This week, the **Education** team is wrapping up the last week of teaching the Haskell course with ABC. They also launched the internal IOG Maths Academy and are preparing for the Cardano Summit next week.

![](https://ucarecdn.com/14a0554e-8f94-4f0b-baaa-b824431f8c78/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コアテクノロジー**チームは、ノード、ネットワーク、コンセンサス改良への取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### スマートコントラクト

**Plutus**ツールチームは、Marconi APIクエリや統合テスト用のCardanoノードエミュレーターの開発を続け、MarconiをCardanoノードに移行させるための実験を続けました。ユーザードキュメントの更新にも取り組みました。 

**Marlowe**チームは、ts-sdkからトランザクションを送信する機能のフラットバージョンを導入し、[ランタイムURL](https://github.com/input-output-hk/marlowe-payouts/pull/17)の妥当性を検証するヘルスチェックを実装し、消費者が自分のウォレットに関連するコントラクトにアクセスできるようにし、ユーザーの利便性とアクセシビリティを向上させました。

Runner MVPのユーザーテストを広範に実施し、ts-sdkで調査コントラクトの[概念実証](https://github.com/input-output-hk/marlowe-ts-sdk/pull/50)（POC）を作成することに焦点を当て、[getTransactionById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/42)や[getTransactionsForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/40)など主要な機能を複数追加しました。[TS-SDKの説明書](https://github.com/input-output-hk/marlowe-doc/pull/177/files)を公開し、ts-sdkとべスティングコントラクトを[統合](https://github.com/input-output-hk/marlowe-ts-sdk/pull/51)し、ts-sdk[テストスイート](https://github.com/input-output-hk/marlowe-ts-sdk/pull/45)を追加しました。 

ドキュメントの[改訂](https://github.com/input-output-hk/marlowe-cardano/pull/733)に取り組み、リモートエラーをピアに伝播することによりRuntimeで[プロトコルを調整](https://github.com/input-output-hk/marlowe-cardano/pull/730)し、Runnerにウォレットを切断する機能を導入して、全体的なユーザーエクスペリエンスを向上させました。 

### スケーリング

**HYDRA**チームは、Cardanoサミット2023に向けたマスタークラスとワークショップの準備に焦点を当てました。HydraノードAPIの送信トランザクションワークフローの強化にも取り組み、3種類のエンコーディングタイプ（Base16エンコードCBOR文字列、TextEnvelope型、JSON）を受け入れるようにしました。TUIブリックのv.1.10へのアップグレード作業を続けました。 

**Mithril**チームは新ディストリビューション[2342.0](https://github.com/input-output-hk/mithril/releases/tag/2342.0)をリリースしました。このリリースには、[Mithrilエクスプローラー](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator)に表示されるSPOティッカーのサポートと、Mithrilノード用のスリムなDockerイメージの作成機能が含まれています。

[P2P（ピアツーピア）ネットワークの概念実証](https://github.com/input-output-hk/mithril/issues/1300)を用いたMithrilネットワーク分散化への取り組みを続け、[ライブラリーとしてのMithrilクライアント](https://github.com/input-output-hk/mithril/issues/1141)の適用を進め、不変ファイルから得られるUTXOセットの決定的[計算](https://github.com/input-output-hk/mithril/issues/1283)に取り組みました。 

アグリゲーターにおける鍵登録の[ボトルネック](https://github.com/input-output-hk/mithril/issues/1187)を修正し、release-mainnetアグリゲーターでの到達不能性を調査し、MithrilエクスプローラーのUIを強化しました。

### VOLTAIRE

コラボレーションと民主的な意思決定は、まもなくコミュニティ全体が享受できる合理化されたプロセスになります。Voltaire GovToolは、Cardanoでコミュニティ構築を進めるための貴重なリソースとして機能します。ADA保有者がCIP-1694と直接やり取りしたり、DRep（デリゲーター代表）として簡単に登録したり、議決権をDRepに委任したり、ガバナンスアクションをレビューしたりできるユーザーフレンドリーなインターフェイスを提供します。Voltaire GovToolのテストに参加を希望する場合は、[こちら](https://forms.gle/Sw4vZaga68b2Ps8p7)から登録してください。

最新ノードv.8.5.0-preのリリース後、SanchoNetガバナンスのフェーズ5ではイテレーションが続いています。これには、Cardanoのネットワークが進化し続ける中で適応性と回復性に貢献する重要な要素が含まれます。[SanchoNet](https://sancho.network)のサイトにアクセスし、[Discord](https://sancho.network/get-started/discord)の会話に参加してください。今すぐCIP-1694のガバナンスプロセスをテストして、SanchoNetにご協力ください。  

Cardanoの未来を形作るために、ぜひ[Intersectに参加して](http://intersectmbo.org/)ください。

### CATALYST

現時点で9月にFund10で承認された192プロジェクトのうち176プロジェクト（92%）のSOM（マイルストンステートメント）にコミュニティが署名し、これらのチームには最初の資金分配が始まっています。すでに6つのプロジェクトが成果物を出し、プロジェクトが次のマイルストンの資金を受け取ることができることを公に検証するために、コミュニティに最初のPOA（マイルストン達成証明）を提出しています。これは、多くのコミュニティメンバーによってマイルストンに基づく説明責任が検証されるのは初めてであることを考えると、大きな成果です。

Catalyst VoicesとCatalyst Ecosystem Acceleratorが資金提供するプロジェクトのオープンソースセットアップが進行中です。公開リポジトリはすでに準備が整っており、次の開発更新時には達成証明が検証されることが予想されます。 

Fund11の投票アプリのドライランテストが今週始まりましたが、ここには投票者が関心のある提案にすばやくアクセスできるようにするための新しいフィルターを含む新しいUI更新が含まれています。 

Catalystチームは、11月に予定されているFund11の開始を皮切りに、今後12か月間の計画に重点を置くCardanoサミットワークショップの準備の最終段階に入っています。これは、IOGがProject Catalystのファンド運営を継続するというコミュニティからの委任を受けて以来、チームからの最初の発表となります。ぜひブースに立ち寄り、ワークショップに参加して詳細を確認してください。

### 教育

**教育**チームに関しては、ABCとの提携によるHaskellバーチャルコースが最終週を迎えました。IOG数学アカデミーを立ち上げたほか、来週のCardanoサミットに向けて準備を進めています。
