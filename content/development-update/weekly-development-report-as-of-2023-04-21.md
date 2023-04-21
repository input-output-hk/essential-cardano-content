---
title: Weekly development report as of 2023-04-21
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f20741f3-44ed-476b-8eb5-fb77e0d7a31f/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **networking** team published `io-sim` and five other packages to [Hackage](https://hackage.haskell.org/package/io-classes) along with a [blog post](https://engineering.iog.io/2023-04-14-io-sim-annoucement) about this on IOG’s engineering website. `io-sim` was developed along with `ouroboros-network`, and its functionality has been growing with more features added upon requirement.

The **consensus** team continued working on the improved DB lock mechanism for UTXO-HD, and modifications to the mempool benchmarks that this prototype requires.

On the Ouroboros Genesis front, the team validated that the fragment size calculation in BlockFetch is a major performance sink for ChainSync jumping. Its removal will yield performance that is acceptably close to the baseline. They also started investigating a performance fix that does not alter the existing baseline behavior too much, and also reviewed Genesis attack vector calculations.

The team also released Consensus v.0.4, and are now working on improving the release process to support Cardano-wide efforts in this area. 

Finally, they performed an analysis of the number of file descriptors used by consensus. Node operators can use this information to check if the number of file descriptors they want to support is enough.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

The **Lace** team are focused on improving the application’s code by performing thorough refactoring, which includes addressing the CIP-30 error handling issue. They also worked on fixing several UI issues and implemented a new feature that allows users to view and manage multiple DApps easily by placing them in tabs at the top of the application. Overall, the team made significant progress during their innovation sprint.

The **Adrestia team** released an update for cardano-wallet, including new endpoints for shared wallets, bug fixes, and performance and memory usage improvements.

The team is also working on extracting the transaction balancing library, and they are going through the community feedback after the Lace launch, while planning the next cardano-js-sdk update.

### SMART CONTRACTS

The **Plutus** tools team continued adding ‘add correctness’ test for Marconi indexers by comparing them with cardano-db-sync, making the `MintBurn` indexer of Marconi available for querying in the HTTP server, and adding better support for logging in the standalone emulator. The Plutus Core team enhanced the Plutus costing scripts, improving performance and usability. They also made progress adding Plutus built-in functions for BLS12-381 curves, which are expected to be made available in Plutus V3. See [CIP-0381](https://github.com/cardano-foundation/CIPs/pull/506) for more details.

The **Marlowe** team added [integration tests](https://github.com/input-output-hk/marlowe-cardano/pull/562) for `ApplyInputs` along with [state pretty-print choices](https://github.com/input-output-hk/marlowe-explorer/pull/42) and bindings in the Marlowe Explorer prototype. They also added property-based tests of `computeTransaction` work, `timedOutTransaction_closes_contract`, and `closeIsSafe` theorems. 

Finally, the team implemented `SemiArbitrary` instances for relevant Marlowe types.

### BASHO (SCALING)

The **Hydra** team focused on the smoke test improvements, fixing developer tooling, and improving the API for voting use cases. They also reviewed progress on Hydra for auctions, payments, and voting, and worked on reproducing a bug with handling rollbacks to find a fix. The team now plans to update dependencies.

The **Mithril** team released a new [2315.0](https://github.com/input-output-hk/mithril/releases/tag/2315.0) distribution that implements the first migration of the aggregator stores along with minor improvements and bug fixes. They finished the migration of the aggregator stores to a relational design by completing the adaptation and migration of the signer and single signature stores. Additionally, the team continued implementing the new certifier service of the aggregator that is in charge of producing certificates for multi-signatures.

Finally, they completed the definition of the interfaces that must be implemented to provide certification for a new type of data in the Mithril network.

### VOLTAIRE

[CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694) marks the first iteration of Cardano’s on-chain governance. Given its importance, achieving broad consensus is vital as Cardano looks to the future. To make that happen, it’s equally important the community conducts its own governance discussions and events. 

There's an open invitation for global community leaders and groups to run their own workshops, with financial support made available. This is _your_ chance to bring Cardano and discussions on governance to your local community. The community-led events should welcome everyone wanting to participate and contribute to Cardano’s governance. If you are interested in running a workshop on CIP-1694, read further and apply [here](https://www.essentialcardano.io/article/cip-1694-community-workshops).

### CATALYST

Earlier in the year, **Project Catalyst** launched the Ariob incubator program in collaboration with Iceaddis, a pan-African incubator and accelerator.

The Ariob program is designed to elevate the most promising and impactful startups whose primary focus is tackling real-life challenges in Africa and that had initially received funding through Project Catalyst, the direct innovation engine of the Cardano blockchain.

In the initial cohort, Ariob helped eight early-stage ventures refine their businesses and prepare for presentations to pitch for either further funding or collaboration opportunities. To mark the completion of the initial cohort, Ariob ran a [Demo day](https://bit.ly/ARIOBDD) where the projects presented what they’d been working on. To find out more, [learn](https://ariob.io/) about Ariob and [Project Catalyst](https://projectcatalyst.io/), sign up for [Catalyst announcements](https://t.me/cardanocatalyst), [join](https://t.me/ProjectCatalystChat) the leading Telegram group or [Discord](https://discord.gg/2RnUtK8), and [subscribe](https://bit.ly/3dSZJvx) to the mailing list.

![](https://ucarecdn.com/a365c3a3-4246-4396-84cd-5ceb4c856580/)

### コアテクノロジー

**ネットワーキング**チームは、io-simと他の5つのパッケージを[Hackage](https://hackage.haskell.org/package/io-classes)に公開し、IOGのエンジニアリングウェブサイトに[ブログを投稿](https://hackage.haskell.org/package/io-classes)しました。io-simはouroboros-networkとともに開発され、その機能は要件に応じて追加されてきました。

**コンセンサス**チームは、UTXO-HDのDBロックメカニズムの改良と、このプロトタイプに必要なメモリープールベンチマークの修正に引き続き取り組みました。

Ouroboros Genesisに関しては、BlockFetchのフラグメントサイズ計算がChainSyncジャンプの主要なパフォーマンスシンクであることを検証しました。これを除去することで、ベースラインに十分近いパフォーマンスが得られます。パフォーマンス修正で既存のベースライン動作があまり変更されない問題について調査を開始したほか、Genesis攻撃ベクトル計算のレビューも行いました。

Consensus v.0.4をリリースし、現在はこの分野におけるCardano全体の取り組みをサポートするためにリリースプロセスの改善に取り組んでいます。 

コンセンサスが使用するファイル記述子数を分析しました。ノードオペレーターはこの情報を使用して、サポートしたいファイル記述子数が十分かどうかを確認できます。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Lace**チームは、CIP-30エラー処理の問題への対処を含む徹底的なリファクタリングを実行することで、アプリケーションコードを改良することに焦点を当てています。UIに関する問題の修正に取り組み、アプリケーション上部のタブに複数のDAppを配置することで、ユーザーが複数のDAppを簡単に表示および管理できるようにする新機能を実装しました。全体として、イノベーションスプリント中に大幅に前進しました。

**Adrestiaチーム**は、cardano-walletの更新をリリースしました。これには、共有ウォレットの新しいエンドポイント、バグの修正、パフォーマンスとメモリ使用量の改善が含まれます。

トランザクション残高ライブラリーの抽出にも取り組んでおり、Laceリリースに伴うコミュニティからのフィードバックを受けながら、cardano-js-sdkの次回更新を計画しています。

### スマートコントラクト

**Plutus**ツールチームは、Marconiインデクサーをcardano-db-syncと比較することで、add correctnessテストを追加する作業を続け、MarconiのMintBurnインデクサーをHTTPサーバでクエリできるようにし、スタンドアロンエミュレーターのロギングサポートを改良しました。Plutus Coreチームは、Plutus原価計算スクリプトを強化し、パフォーマンスとユーザビリティを向上させました。Plutus V3で利用可能となる予定のBLS12-381曲線用Plutus組み込み関数を追加する作業も進展しました。詳細は、[CIP-0381](https://github.com/cardano-foundation/CIPs/pull/506)を参照してください。

**Marlowe**チームは、MarloweエクスプローラープロトタイプにApplyInputsの[統合テスト](https://github.com/input-output-hk/marlowe-cardano/pull/562)と、[pretty-printingの選択肢](https://github.com/input-output-hk/marlowe-explorer/pull/42)とバインディングを追加しました。computeTransactionワーク、timedOutTransaction\_closes\_contract、closeIsSafe定理のプロパティベースのテストも追加しました。 

関連するMarlowe型のSemiArbitraryインスタンスを実装しました。

### Basho( スケーリング)

**Hydra**チームは、スモークテストの改良、開発者ツールの修正、投票ユースケース用APIの改良に焦点を当てました。オークション、支払い、投票用のHydraの進捗状況を確認し、ロールバックを処理するバグを再現して修正方法を見つけました。現在、依存関係の更新を計画しています。

**Mithril**チームは、アグリゲーターストアの初回移行を実装した新しい[2315.0](https://github.com/input-output-hk/mithril/releases/tag/2315.0)ディストリビューションをリリースしました。これには、軽微な改良とバグ修正が含まれています。署名者ストアと単一署名ストアの適応と移行の完了に伴い、アグリゲーターストアのリレーショナル設計への移行が終了しました。マルチシグ認証の生成を担当するアグリゲーターの新しい認証サービスの実装を続けました。

Mithrilネットワークの新しいデータ型の認証を提供するために実装する必要があるインターフェイスの定義を完了しました。

### VOLTAIRE

[CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694) は、Cardanoのオンチェーンガバナンスの最初のイテレーションです。その重要性を考えると、Cardanoは将来を見据えて幅広いコンセンサスを達成することが不可欠です。この実現には、コミュニティが独自のガバナンスに関する議論やイベントを実施することも同様に重要です。 

グローバルコミュニティのリーダーやグループには、独自のワークショップを開催することが奨励されており、財政的な支援も提供されています。これは、各自がCardanoとガバナンスに関する議論を地域社会にもたらすチャンスです。コミュニティ主導のイベントは、Cardanoのガバナンスへの参加、貢献を望むすべての人を歓迎する必要があります。CIP-1694のワークショップ運営に関心がある場合は、[ここ](https://www.essentialcardano.io/article/cip-1694-community-workshops)で詳細を参照のうえ、申請してください。

### イノベーション

今年の初め、**Project Catalyst**はアフリカ全土のインキュベーターかつアクセラレーターであるIceaddisと共同でAriobインキュベータープログラムを立ち上げました。

Ariobプログラムは、アフリカでの現実の課題に取り組むことに主眼を置く最も有望でインパクトのあるスタートアップを支援するよう設計された、Cardanoブロックチェーンの直接的なイノベーションエンジン、Project Catalystを通じて最初に資金提供を受けたプログラムです。

Ariob最初のコホートでは、8つのアーリーステージベンチャー企業がビジネスを磨き、さらなる資金調達やコラボレーションの機会を提案するプレゼンテーションの準備を支援しました。Ariobは最初のコホート終了を記念して[Demo Day](https://bit.ly/ARIOBDD)を開催し、プロジェクトの取り組みを発表しました。[Ariob](https://ariob.io/)と[Project Catalyst](https://projectcatalyst.io/)についての詳細を確認し、[Catalystの通知](https://t.me/cardanocatalyst)に登録し、[Telegram](https://t.me/ProjectCatalystChat)のグループまたは[Discord](https://discord.gg/2RnUtK8)に参加し、メーリングリストに[登録](https://bit.ly/3dSZJvx)してください。
