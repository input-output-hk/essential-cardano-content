---
title: Weekly development report as of 2022-06-03
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/ec34aed2-4de8-4167-8025-765c5777db40/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus teams** continued preparing for the Vasil hard fork. Work is proceeding well. Getting into the final mile prior to the Vasil hard fork, the team’s focus now shifts towards tracking weekly milestones which will inform the next steps.

The next key milestone is to achieve a new node release for the Vasil upgrade, with the first release of the new CLI that includes the new Plutus capabilities. The teams are currently addressing the remaining critical issues that have been caught in the extensive ongoing testing program (including those that have been identified by internal auditors). The teams are expecting to be able to report positively on this in the next few days.

To ensure that ecosystem partners (including developers and third-party component providers) have the time they need prior to hard-forking the main Cardano testnet, the plan next week is to spin up a new Vasil developer testnet and collaborate closely with an extended group of developers and ecosystems partners (c. 40) on final testing.

Given the breadth of the ecosystem and the many dependencies, it is important to allocate sufficient time to this stage of the process so that DApp and other developers have full confidence in the deployment ahead of the Vasil hard fork. This developer testnet is planned to be run and assessed for around one week based on the findings and feedback.

The **networking** team continued working on the P2P functionality. They resolved several bugs, made progress modeling TCP traffic for input endorsers, improved the DNS testing code, and made IO-SIM library compatible with GHC v.9.2. Finally, they improved typed-protocols documentation. 

### WALLETS AND SERVICES 

The **Daedalus** team worked on the modification of the Mnemonic entry component that will improve the user experience for right-to-left writing systems. They continued working on the Trezor v.2.5.1 firmware compatibility and fixed several bugs. The team made progress on the Desktop wallet project - it is now possible to use the same light-wallet-UI components from the 'Balance page' by fetching data from the full node. 

The **Adrestia** team released updates for cardano-wallet and cardano-addresses to add support token minting and burning.

They are currently preparing Adrestia components for the upcoming hard fork combinator event, and also working on the cardano-js-sdk to get it production-ready, and designing a new simple HTTP API on top of db-sync.

Finally, the team is still working on tech debt, adding multisig features, and a ‘light’ mode to cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team added the [Plutus streaming package](https://github.com/input-output-hk/plutus-apps/commit/3f76a9706f8c7e2f5ab8f46e660d79829d51e3b3) with examples, which allows developers to use it if they want to react to blockchain events, and fixed some bugs. They also improved documentation about built-ins and ran CBOR stability tests. 

The **Marlowe** team enabled the possibility to switch from time-based waits to slot-based ones in Marlowe Run. They also improved development start scripts and fixed timed-out contracts and transaction confirmation issues. Finally, they published the Marlowe CLI lecture and quiz questions, and worked on instructions for Pioneers on how to install Marlowe Run. 

### BASHO (SCALING)

This week, the **Hydra** team completed working on the contest protocol logic. They also reviewed and incorporated some early user feedback onto the [roadmap](https://github.com/orgs/input-output-hk/projects/21/views/7). If you’re considering to use Hydra, [contributions and feedback are welcome here](https://github.com/input-output-hk/hydra-poc#handshake-contributing). The team also performed another smoke test of a hydra-node on the Vasil testnet and experimented with ways to do property-based testing of security properties from the paper. 

### GOVERNANCE

This week, **Project Catalyst** launched Fund9 with Charles Hoskinson kicking the Town Hall off with a bang. Submissions for proposals formally open on June 9th. [Cardashift](https://cardashift.com/) will be joining [Fund9](https://bit.ly/Fund9-Launch-Guide) through the [Catalyst Natives](https://iohk.io/en/blog/posts/2021/11/10/introducing-catalyst-natives-how-any-business-can-leverage-the-cardano-innovation-engine) program, with a challenge centered around value creation through positive impact-oriented projects. Cardashift offers up to $200K of $CLAP tokens for selected proposals. This is on top of 12 other challenges in Fund9 where $16M ada is available for funded proposals and community incentives for contributions during the process. The team have also held the first workshop on dReps, their role and how liquid democracy will work for Project Catalyst. The recordings and workshop materials will be published next week. For more information, check out Project Catalyst’s Discord.

### STATISTICS TO DATE

![](https://lh3.googleusercontent.com/3v_S7phmIaX20xdFisyh3wIR1A71SjR9xF4Ib8K8v7Ty2X9hO8teWGLLUuo1eniXRlGOKPA30LBg-7_xQ9sHU0TDVu_poOtoqQUwvMQhxgztHEJfAalotnOOt9oovOFEdYa7KX7fgqTZKu207g)

### 週刊開発レポート　2022年6月3日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilハードフォークの準備を続けました。これは順調に進んでいます。Vasilハードフォークへ向けて最終段階に入る中、現在は次のステップを見極めるため週ごとにマイルストンの追跡に重点を置いています。

次の重要なマイルストンは、Visilアップグレードに向けた新ノードのリリースです。これには、新しいPlutus機能を含む新CLIの初回リリースも伴います。現在は、進行中の大規模なテストプログラムで特定された残りの重要な問題（内部監査で見つかったものも含む）に対処しています。これに関しては、数日内にいい報告が期待されます。

エコシステムのパートナーたち（開発者やサードパーティコンポーネントプロバイダーを含む）がメインのCardanoテストネットのハードフォーク前に必要な時間が確保できるよう、来週は新しいVasil開発者テストネットを展開し、およそ40の開発者やエコシステムパートナーからなるグループの協力のもとで最終テストを予定しています。

エコシステムの規模と多くの依存関係を考えると、プロセスのこの段階で十分な時間を割き、Vasilハードフォーク前にDAppやその他の開発者がデプロイを完全に信頼できるようにすることが重要です。この開発者テストネットは、結果やフィードバックに応じて、1週間程度の実行および査定を予定しています。

**ネットワーキング**チームは、引き続きP2P機能に取り組みました。複数のバグを修正し、インプットインドーザーのTCPトラフィックのモデリングを進め、DNSのテストコードを改良し、IO-SIMライブラリーをGHC v.9.2に対応させました。型付きプロトコルのドキュメントの改訂も行いました。 

### ウォレットとサービス 

**Daedalus**チームはニーモニック入力コンポーネントで、右から左に書く言語使用者の操作性を高めるための変更に取り組みました。Trezor v.2.5.1ファームウェアの互換性への取り組みを続け、複数のバグを修正しました。デスクトップウォレットプロジェクトを進め、フルノードからデータをフェッチすることによって、「Balance page」から同じlight-wallet-UIコンポーネントを使用することを可能にしました。 

**Adrestia**チームはcardano-walletとcardano-addressesの更新をリリースして、トークンミントとバーンのサポートを追加しました。

現在、予定されているハードフォークコンビネーターイベントに向けてAdrestiaコンポーネントを準備しているほか、cardano-js-sdkを本番環境にする取り組みと、db-sync上に構築する新しいシンプルなHTTP APIの設計を行っています。

技術負債への取り組み、cardano-walletへマルチシグ機能と「ライト」モードを追加する作業は継続中です。

### スマートコントラクト

**Plutus**チームは、開発者がブロックチェーンイベントに反応したいときに使用できるサンプル付きの[Plutusストリーミングパッケージ](https://github.com/input-output-hk/plutus-apps/commit/3f76a9706f8c7e2f5ab8f46e660d79829d51e3b3)を追加し、いくつかのバグを修正しました。ビルトインについてのドキュメントを改訂し、CBORの安定性テストを実行しました。 

**Marlowe**チームは、Marlowe Runで、タイムベースの待機からスロットベースの待機に切り替えることができるようにしました。開発開始スクリプトを改良し、タイムアウトコントラクトとトランザクションの確認に関する不具合を修正しました。Marlowe CLIの講義とクイズ問題を公開し、パイオニア向けMarlowe Runのインストールガイドに取り組みました。 

### Basho( スケーリング)

**Hydra**チームはContestプロトコルロジックに関する作業を完了しました。初期ユーザーフィードバックを確認し、[ロードマップ](https://github.com/orgs/input-output-hk/projects/21/views/7)に組み込みました。Hydraの使用を検討している場合、ご協力とフィードバックを[こちら](https://github.com/input-output-hk/hydra-poc%23handshake-contributing)で受け付けています。Vasilテストネットで別のhydra-nodeスモークテストを実行し、論文に基づくセキュリティプロパティのプロパティベーステストの諸方法を実験しました。 

### ガバナンス

**Project Catalyst**チームはタウンホールでCharles HoskinsonとともにFund9の開始を宣言しました。提案の受付は６月９日公式にスタートします。 [Cardashift](https://cardashift.com/)が[Catalyst Natives](https://iohk.io/jp/blog/posts/2021/11/10/introducing-catalyst-natives-how-any-business-can-leverage-the-cardano-innovation-engine)プログラムを通じて[Fund9](https://bit.ly/Fund9-Launch-Guide)に参加します。これは、ポジティブなインパクトを重視したプロジェクトによる価値創造を中心としたチャレンジです。Cardashiftは最大20万ドル相当の$CLAPトークンを、選ばれた提案に提供します。Fund9には他に12のチャレンジが設定されており、1600万ADAが提案への資金調達と、プロセス中に貢献したコミュニティへのインセンティブとして用意されています。 dReps、その役割、Project Catalystに液体民主主義がどう機能するかに関する最初のワークショップも開催しました。録画とワークショップの資料は来週公開されます。詳細は、Project CatalystのDiscordをご覧ください。

### 現時点の統計

![](https://lh4.googleusercontent.com/sGx-aFrkenwoL2YAYorGwim4bCpPkRMul1Ck9D8P_48s8lq11-gE1NBsfLYtvDnOf2siQxDofwrOCqTGzeBZbT5YXOLHIouwJrUXLSDCj8d8jwSFm_V4XhlKz_Dnygdp_vZa_LRhngZXsq_Oxw)
