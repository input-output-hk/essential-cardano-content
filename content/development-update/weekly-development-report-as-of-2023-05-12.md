---
title: Weekly development report as of 2023-05-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/800a8dbd-a2fe-4f58-9156-507776241c6f/
image_text: Weekly development report as of 2023-05-12
---

### CORE TECHNOLOGY

This week, the **core technology** teams released [node v.8.0.0](https://github.com/input-output-hk/cardano-node/releases/tag/8.0.0). This release brings a new governance action that facilitates conducting on-chain SPO polls, a fairness improvement in the mempool logic, and query commands that allow inspection of metrics and data in the mempool. Additionally, the CLI command query tip now provides more detailed output. Another enhancement is the introduction of versioned serialization formats for the ledger. 

The **ledger** team primarily focused on improving the Conway ledger era and node integration. Regarding Conway, they accomplished a significant structural change that now permits the parameterization of delegation certificates by era. This change has introduced [new certificates](https://github.com/input-output-hk/cardano-ledger/pull/3387) for the first time since Shelley. They also continued developing constraint-based generators that would be utilized for property tests in the Conway era. Specifically, these generators will be able to produce a complete ledger state and a transaction that is balanced according to the ledger state.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on the creation of a proxy server to improve reliability of the currency conversion feature.

The team released **Lace 1.1.0**, which brings several improvements and features for a better user experience. Users can now recover their wallets using a 12- or 15-word recovery phrase, and view the prices of their available native tokens. Pricing is now displayed in 11 fiat currencies with compact number notation for large numbers. Users can switch between networks with ease and regain access to their wallets using a recovery phrase if they forget their password. Finally, a bug fix ensures that NFTs display correctly in the ‘Tokens’ list and NFT gallery.

The team also continued working on the **Lace** desktop development. They started defining ways for introducing Hierarchical Deterministic (HD) wallet support in cardano-js-sdk to allow Daedalus users to import multi-address wallets into Lace. They also worked on the definition of UI/UX of the multi-delegation page on Lace, and on multi-browser support for Brave, Edge, and Safari.

The **Adrestia team** worked on separating the balance TX library, and also did some database enhancements. The team is now preparing to move into MBO repo and finishing the multi-signature wallet delegation functionality. 

Finally, they are updating cardano-wallet to support node 8.0.x.

### SMART CONTRACTS

This week, the **Plutus** tools team continued documenting the marconi-sidechain architecture, worked on profiling performance regression with the address-utxo indexer, and verified the correctness of indexed Epoch-StakePoolDelegationDistribution. Finally, they continued working on the redesign of resuming capabilities to resolve the encountered issues. The Plutus core team made some improvements to the Plutus Tx standard library, significantly boosting the efficiency of a number of functions that operate on lists.

The **Marlowe** team added library functions for contracts’ safety checks, ran [QA testing](https://github.com/input-output-hk/marlowe-starter-kit/pull/13) of the Marlowe starter kit, and automated the testing of various [REST scenarios](https://github.com/input-output-hk/marlowe-cardano/pull/549). They also paginated [queries for fetching transactions](https://github.com/input-output-hk/marlowe-explorer/pull/44) from Marlowe Runtime by Marlowe Explorer, fixed the [tag type](https://github.com/input-output-hk/marlowe-explorer/pull/43) to match JSON format used by Runtime in the Explorer, and [tested](https://github.com/input-output-hk/marlowe-cardano/pull/561) individual CLI features.

### BASHO (SCALING)

This week, the **Mithril** team released a new [2318.0](https://github.com/input-output-hk/mithril/releases/tag/2318.0) distribution that implements the last migration phase of the aggregator stores and embeds the bug fix for the signer registration. They also completed the implementation of the interfaces defined to provide certification for the immutable full snapshot of Cardano files and Mithril stake distribution. Additionally, they continued implementing the mechanism to sign generic types of data in the aggregator and the signer.

Finally, the team worked on preparing the roadmap toward releasing a Mithril network on mainnet, and started designing an on-chain decentralized signer registration process.

### VOLTAIRE

Following on from the launch of a global workshop grant fund, Input Output Global (IOG), EMURGO, and the Cardano Foundation are thrilled to announce the successful applicants to run a workshop to discuss [CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694). Over 75 quality and diverse applications from around the world were received. Submissions from North America, LATAM, and Africa made up over 80% of all applications, evidencing the strength of Cardano’s roots and interest in the future of on-chain governance.

The workshops, which will take place from May to July, will explore the latest developments in Cardano's on-chain governance proposed in CIP-1694. The in-person workshops will take place in over 20 locations worldwide, giving attendees the opportunity to network, confer, and collaborate with their local Cardano communities. On top of that, there will be over 25 virtual workshops, further opening opportunities to those who cannot attend in-person.  
  
An [interactive map](https://voltaire.essentialcardano.io/) and [further details](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up) are available on Essential Cardano. 

### CATALYST

This week in **Project Catalyst,** the Catalyst team hosted its 125th town hall. You can catch the [full recording here](https://www.youtube.com/watch?v=h3VMfe_hCfg) for your review. Several completed projects were presented, including a token gating funded proposal and challenge team reports. If you would like to join the next town hall - these are regular weekly broadcasts - every Wednesday at 5PM UTC - [invitation link here](http://bit.ly/catalyst-townhall). If you are curious to see how funded projects are doing - you can review current funding status via [projectcatalyst.io/funds.](//projectcatalyst.io/funds.) 

### EDUCATION

This week, the **Education** team wrapped up a successful 4th cohort of the Plutus Pioneer program (PPP4). This course has received very positive feedback from the community. They liked the easier setup, the new resources, and practical lectures. With over 3,000 registered participants, the course involved a 10-week interactive training program focusing on new Plutus features and showcasing some community tools. They published [weekly lectures](https://github.com/input-output-hk/plutus-pioneer-program), an accompanying [Playbook](https://iog-academy.gitbook.io/plutus-pioneers-program-fourth-cohort/), and a [blog](https://github.com/input-output-hk/plutus-pioneer-program/wiki), held interactive Q&A sessions, and supported the dedicated Discord channels. Thank you to the entire Education team who planned and delivered PPP4 with lots of new faces in front of the camera and working hard behind the scenes. If you participated in this program, we want to hear your thoughts, so watch out for a feedback survey landing in your inbox soon.

  
![](https://ucarecdn.com/108eb292-5abb-4d99-8d17-b98f67f33d80/)

### コアテクノロジー

**コアテクノロジー**チームは、[node v. 8.0.0](https://github.com/input-output-hk/cardano-node/releases/tag/8.0.0)をリリースしました。本リリースでは、SPOのオンチェーンポーリングの実行を容易にする新しいガバナンスアクション、メモリープールロジックの公平性の向上、メモリープール内のメトリックとデータの検査を可能にするクエリコマンドが提供されます。また、CLIコマンドクエリのヒントで、より詳細なアウトプットが提供されるようになりました。さらなる強化ポイントとして、台帳のバージョン付きシリアル化形式が導入されています。 

**台帳**チームは、主にConway台帳期とノード統合の改良に焦点を当てました。Conwayに関しては、大規模な構造的変更を完了して、開発期ごとの委任証明書のパラメーター化を可能にしました。この変更により、Shelley以来初めての[新しい証明書](https://github.com/input-output-hk/cardano-ledger/pull/3387)が導入されました。Conway期のプロパティテストに利用される制約ベースのジェネレーターの開発も続けました。具体的には、これらのジェネレーターは、完全な台帳ステータスと、これに応じたトランザクションを生成することができます。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス 

**Daedalus**チームは、CoinGeckoの詳細を使用せずにADAの価格を反映するプロキシサーバーの作成に取り組みました。

**Lace 1.1.0**がリリースされました。これには、ユーザーエクスペリエンスを向上させるための改良と新機能が加えられています。ユーザーは、12ワードまたは15ワードの復元フレーズを使用してウォレットを復元し、利用可能なネイティブトークンの価格を表示できるようになりました。価格は11種類の法定通貨で表示でき、桁の大きい数字はコンパクトな数字表記で表されます。ユーザーは簡単にネットワークを切り替えることができ、パスワードを忘れた場合には復元フレーズを使用してウォレットに再びアクセスできます。NFTSがトークンリストとNFTギャラリーに正しく表示されるようバグを修正しました。

**Lace**デスクトップの開発作業は進行中です。DaedalusユーザーがマルチアドレスウォレットをLaceにインポートできるようにするために、cardano-js-sdkで階層的決定性（HD）ウォレットのサポートを導入する方法の定義に着手しました。Laceのマルチ委任ページのUI/UXの定義や、Brave、Edge、Safariのマルチブラウザーサポートにも取り組みました。

Adrestiaチームは、Balance TXライブラリーの分離に取り組み、データベースの強化も行いました。現在、MBOリポジトリへの移行準備を進めるとともに、マルチシグウォレットの委任機能を仕上げています。 

ノード8.0.xをサポートするようcardano-walletを更新しています。

### スマートコントラクト

**Plutus**ツールチームは、Marconiサイドチェーンアーキテクチャーの文書化を続け、address-utxoインデクサーを使用したパフォーマンス低下のプロファイリングに取り組み、インデックスを付けたEpoch-StakePoolDelegationDistributionの正確性を検証しました。遭遇した問題を解決する、再開機能の再設計への取り組みを続けました。Plutus Coreチームは、Plutus Tx標準ライブラリーに改良を加え、リスト上で動作する多くの関数の効率を大幅に向上させました。

**Marlowe**チームは、契約の安全性をチェックするライブラリー機能を追加し、Marloweスターターキットの[QAテスト](https://github.com/input-output-hk/marlowe-starter-kit/pull/13)を実行し、さまざまな[RESTシナリオ](https://github.com/input-output-hk/marlowe-cardano/pull/549)のテストを自動化しました。MarloweエクスプローラーによるMarlowe Runtimeから[トランザクションをフェッチするためのクエリ](https://github.com/input-output-hk/marlowe-explorer/pull/44)をページ化し、エクスプローラーでRuntimeが使用するJSON形式に一致するように[タグタイプ](https://github.com/input-output-hk/marlowe-explorer/pull/43)を修正し、個々のCLI機能を[テスト](https://github.com/input-output-hk/marlowe-cardano/pull/561)しました。

### Basho( スケーリング)

**Mithril**チームは、アグリゲーターストアの最後の移行フェーズを実装し、署名者登録のためのバグ修正を埋め込んだ新しい[2318.0](https://github.com/input-output-hk/mithril/releases/tag/2318.0)ディストリビューションをリリースしました。不変なCardanoファイルのフルスナップショットとMithrilステーク分布の認証を提供するために定義されたインターフェイスの実装は完了しました。アグリゲーターと署名者で汎用データ型に署名するメカニズムの実装を続けました。

メインネットにMithrilネットワークをリリースするためのロードマップの作成に取り組み、オンチェーンの分散型署名者登録プロセスの設計を開始しました。

### VOLTAIRE

グローバルなワークショップ助成金ファンドの立ち上げに続き、Input Output Global（IOG）、EMURGO、Cardano財団が、[CIP-1694](https://github.com/JaredCorduan/CIPs/tree/voltaire-v1/CIP-1694)のワークショップ開催に選ばれた応募者を発表しました。75を超える優れた多彩な応募が寄せられました。北米、中南米、アフリカからの応募が全応募の80%以上を占めており、Cardanoのルーツとオンチェーンガバナンスの将来への関心の強さを証明しています。

5月から7月まで開催されるワークショップでは、CIP-1694で提案されたCardanoのオンチェーンガバナンスの最新の動向を探ります。対面式のワークショップは、世界各地の20拠点で開催され、参加者は地元のCardanoコミュニティとのネットワーク作り、協議、コラボレーションの機会を得ることができます。さらに、25の仮想ワークショップも開催され、直接参加できない方々にもさらなる機会を提供します。  
  
[インタラクティブマップ](https://voltaire.essentialcardano.io/)と[詳細](https://www.essentialcardano.io/article/cip-1694-community-workshops-the-line-up-community-workshops-the-line-upunity-workshops-the-line-up)は、Essential Cardanoで公開されています。 

### CATALYST

**Project Catalyst**に関しては、Catalystチームが第125回タウンホールを主催しました。その模様は[フル録画](https://www.youtube.com/watch?v=h3VMfe_hCfg)で確認できます。トークンゲーティングの資金提供を受けた提案やチャレンジのチームレポートなど、一部の完了したプロジェクトが発表されました。日本時間毎週木曜日の午前2時に開催されるタウンホールへの次回参加を希望する場合は、こちらの[招待リンク](http://bit.ly/catalyst-townhall)[からお申し込みください。資金提供されたプロジェクトの進捗状況を知りたい場合は、projectcatalyst.io/fundsで現在の資金調達状況を確認できます。](//からお申し込みください。資金提供されたプロジェクトの進捗状況を知りたい場合は、projectcatalyst.io/fundsで現在の資金調達状況を確認できます。) 

### 教育

**教育**チームによるPlutusパイオニアプログラム（PPP4）第4コホートは盛況のうちに修了しました。本コースは、コミュニティから非常に好意的なフィードバックを受けています。高評価のポイントは、セットアップが簡単であること、新しいリソース、実践的な講義でした。参加登録が3,000を超えたこのコースは、Plutusの新機能に焦点を当て、コミュニティツールを紹介する10週間のインタラクティブトレーニングプログラムでした。[毎週の講義](https://github.com/input-output-hk/plutus-pioneer-program)、付随する[プレイブック](https://iog-academy.gitbook.io/plutus-pioneers-program-fourth-cohort/)、[ブログ](https://github.com/input-output-hk/plutus-pioneer-program/wiki)に加え、対話型のQ&Aセッションを開催し、Discordの専用チャンルをサポートしました。カメラの前で多くの新顔とともにPPP4を企画、提供し、舞台裏で懸命に働いてくれた教育チーム全員に感謝します。このプログラムに参加された方は、ご意見をお聞かせください。フィードバックアンケートは、まもなく受信トレイに届きますのでご注意ください。
