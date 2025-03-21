---
title: Weekly development report as of 2025-03-21
tags:
  - Development
  - Statistics
  - Weekly development updates
url: ""
image: https://ucarecdn.com/cc3bd524-c357-4861-ac38-6849253d953b/
image_text: Weekly development report as of 2025-03-21
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano’s ecosystem continues to progress, with 1,989 projects currently building on the network. The number of delegated wallets has increased to 1.328 million, showing a 0.07% growth in staking participation since last week. The issuance of native tokens has reached 10.72 million, with 210,662 token policies, reflecting a 0.14% increase from the previous week.

Smart contract adoption remains steady, with 129,374 Plutus scripts and 5,691 Aiken scripts now deployed. Transaction activity continues to rise, reaching 107.69 million transactions, marking a 0.16% increase since last week. Governance participation also remains active, with 1,217 DReps, including 923 active DReps, contributing to decentralized decision-making.

In other news:

*   [Anzens platform](https://x.com/AnzensOfficial/status/1902359886307930367) is now live
    
*   [USD Hunt stablecoin](https://x.com/DexHunterIO/status/1900198133348323397) aggregator is now live
    
*   [Coinbase derivatives](https://x.com/CoinbaseInsto/status/1900646303446835406) has filed with the CFTC to self-certify Cardano futures
    
*   [AMINA Bank](https://x.com/F_Gregaard/status/1900996421404553605) has launched Cardano staking services
    
*   [Dex Hunter](https://x.com/DexHunterIO/status/1900198133348323397) has launched a stablecoin aggregator, allowing users to trade Cardano stablecoins.
    

### CORE TECHNOLOGY

This week, the **core technology** teams released [node v.10.2.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.2.1), which introduces support for the new tracing system and initial integration of Ouroboros Genesis – a new feature that enables nodes to bootstrap from the network. It also provides a number of bug fixes and enhancements, including improvements to a number of CLI commands.

This week, the **consensus** team [published an overview](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/Genesis) of adding Ouroboros Genesis to the existing Cardano implementation of Ouroboros Praos. They also fixed a chain sync jumping test, introduced minor improvements, merged a [first draft describing era transition governance](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/EraTransitionGovernance), and added a new [full block](https://github.com/IntersectMBO/ouroboros-consensus/blob/37a0fd56f85fa8f19b056e960d1bfeda7ee44991/docs/website/contents/for-developers/BlockBlockDiagram.md) diagram for further clarity.

The **SRE** team continues to enhance Cardano environments and perform general maintenance. Recent updates include cleaning and optimizing the `cardano-node` [flake closure](https://github.com/IntersectMBO/cardano-node/pull/6144), resulting in approximately an 18% reduction in size. Additionally, they merged [improvements to OCI images](https://github.com/IntersectMBO/cardano-node/pull/6110), which will be included in the next cardano-node release. The Nix Hydra machine for building `cardano-node` now runs on upgraded hardware, increasing development CI concurrency. Initial investigations into the long evaluation times in the Nix CI suggest that significant improvements can be achieved in the near future.

### WALLETS AND SERVICES

The **Lace** wallet is expanding its capabilities by becoming multichain, starting with Bitcoin. This allows Lace users to store, manage, and interact with bitcoin directly from their wallet. This move enhances Web3 interoperability and positions Lace to support the growth of Bitcoin Layer 2 protocols and decentralized finance (DeFi). Users can now securely manage Bitcoin through an intuitive interface, highlighting Lace’s commitment to simplifying the multi-chain experience.

Additionally, Lace will be attending MERGE Buenos Aires from March 24 to 26. Brandon Wolf, Lace’s general manager, will share insights into the platform's future, discussing topics such as wallets, staking, and multi-chain expansion. The Lace team will be present to engage with the community. Attendees can look forward to live discussions, opportunities to meet the team, and potential surprises and giveaways on Lace’s social media channels.

### SMART CONTRACTS

This week, the **Plutus** team enhanced the Plinth libraries in the `plutus-ledger-api` and `plutus-tx` packages. Work has begun on enabling casing for built-in `Data` – a feature that could greatly improve data processing efficiency. Additionally, the team continues developing Plutus features for the upcoming hard fork.

### SCALING

The **Hydra** team finalized work on [reducing the Hydra node’s memory footprint](https://github.com/cardano-scaling/hydra/issues/1618), significantly improving performance for long-running nodes with many transactions. Community members are encouraged to test these enhancements and provide feedback. The team also introduced a few hotfixes and made [documentation improvements](https://github.com/cardano-scaling/hydra/pull/1899).

This week, the **Mithril** team continued working on the aggregator's prototype 'slave' mode to support signer registration across multiple aggregators. This feature is being stabilized and tested. They also focused on implementing incremental certification of the Cardano database, emphasizing feature stabilization, production readiness, testing, and optimization. Additionally, the team started refactoring the cryptographic library to improve clarity and maintainability and kept [working on signing ancillary files](https://github.com/input-output-hk/mithril/issues/2362) in the Cardano database snapshots with an IOG key.

Finally, they enhanced the database tooling for migration and maintenance and [fixed some flakiness in the CI](https://github.com/input-output-hk/mithril/issues/2360).

This week, the **Leios** team made significant progress in simulation capabilities, successfully comparing Rust and Haskell simulations across [90 scenarios](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w11/analysis.ipynb). A [mainnet-scale analysis](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w11xl/analysis.ipynb) of Leios on a [realistic 3,000-node network](https://github.com/input-output-hk/ouroboros-leios/blob/leios-2025w11/sim-rs/test_data/realistic.yaml) revealed unexpected performance benefits from network topology. Insights from [sharding performance analysis](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/shard-performance.ipynb) provided important optimization strategies. Finally, the team refined both simulation implementations for greater realism and comparability, while the formal methods team developed initial trace verification tools for Short Leios.

For more details, see [Leios weekly updates](https://leios.cardano-scaling.org/news/2025/03/10/weekly-progress-summary).

### CATALYST

This week, the **Catalyst** X town hall returns with a collaborative [X Space](https://x.com/Catalyst_onX/status/1902415512417542388) featuring Cardano Spot and CV Labs, discussing the upcoming accelerator program and networking event. More _Under the Hood_ episodes, focusing on upcoming features for the new Catalyst platform, are coming shortly. Technical development of the Catalyst platform continues as a priority ahead of Fund14.

### EDUCATION

This week, the **education** team is finalizing the updates to the Cardano developer course. They also delivered a virtual presentation on Cardano for the Doctoral Consortium at Universidad Latinoamericana y del Caribe. Additionally, they are organizing a Cardano Days event at [Florida International University](https://www.fiu.edu/) on March 31. Stay tuned for registration details.

### ![](https://ucarecdn.com/697bab32-85d6-4d85-95df-34b7cc05d01e/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoのエコシステムは進展し続けており、現在ネットワーク上に1,989のプロジェクトが構築されています。委任されたウォレットの数は132万8,000に増加し、先週以来、ステーキング参加者が0.07%増加しました。ネイティブトークンの発行は、先週から0.14パーセント増の1,072万に達し、トークンポリシーは210,662です。

スマートコントラクトも着実に普及しており、現在12万9,374のPlutusスクリプトと5,691のAikenスクリプトがデプロイされています。トランザクション活動も増加を続け、前週比0.16%増の1億769万件に達しました。ガバナンスへの参加も依然活発であり、923のアクティブDRepを含む1,217のDRepが分散型の意思決定に貢献しています。

その他のニュース：

●    [Anzensプラットフォーム](https://x.com/AnzensOfficial/status/1902359886307930367)が稼働

●    [USD Huntステーブルコイン](https://x.com/DexHunterIO/status/1900198133348323397)アグリゲーターが稼働

●    [Coinbaseデリバティブ](https://x.com/CoinbaseInsto/status/1900646303446835406)が、Cardano先物を自己証明でCFTCに申請

●    [AMINA銀行](https://x.com/F_Gregaard/status/1900996421404553605)、Cardanoステーキングサービスを開始

●    [Dex Hunter](https://x.com/DexHunterIO/status/1900198133348323397)は、Cardanoステーブルコインの取引を可能にするステーブルコインアグリゲーターを立ち上げ

### コアテクノロジー

**コアテクノロジー**チームは[ノードv.10.2.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.2.1)をリリースしました。これは、新しいトレースシステムのサポートと、ノードがネットワークからブートストラップできるようにする新機能、Ouroboros Genesisの初期統合を導入しています。また、多くのCLIコマンドの改善を含む、さまざまなバグ修正と拡張も提供しています。

**コンセンサス**チームは、既存のCardano Ouroboros Praosの実装にOuroboros Genesisを追加する[概要を発表](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/Genesis)しました。チェーン同期ジャンプテストを修正し、マイナーな改善を導入し、[開発期移行ガバナンスを記述した最初のドラフト](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/EraTransitionGovernance)をマージし、明確さを高めるために新しい[フルブロック](https://github.com/IntersectMBO/ouroboros-consensus/blob/37a0fd56f85fa8f19b056e960d1bfeda7ee44991/docs/website/contents/for-developers/BlockBlockDiagram.md)図を追加しました。

**SRE**チームはCardano環境の強化と総合メンテナンスを継続しています。最近の更新では、Cardano-node[フレーククロージャー](https://github.com/IntersectMBO/cardano-node/pull/6144)のクリーニングと最適化を行い、サイズを約18%縮小しました。次のCardanoノードリリースに含まれる[OCIイメージの改善点](https://github.com/IntersectMBO/cardano-node/pull/6110)もマージしました。Cardano-nodeを構築するためのNix Hydraマシンは現在アップグレードしたハードウェア上で動作しており、開発CIの並行性を向上させます。Nix CIの長い評価時間の初期調査は、近い将来に大幅な改善が達成されることを示唆しています。

### ウォレットとサービス

**Lace**ウォレットはマルチチェーンになることで機能を拡大しています。まずはビットコインからで、Laceのユーザーは自分のウォレットから直接ビットコインを保存、管理、操作することができるようになります。この動きはWeb3の相互運用性を強化し、Bitcoin Layer 2プロトコルと分散型金融（DeFi）の成長をサポートするものとしてLaceを位置付けます。ここではマルチチェーンエクスペリエンスを簡素化するというLaceのコミットメントが重視され、ユーザーは直感的なインターフェイスを通じてビットコインを安全に管理できます。

Laceは3月24日から26日までブエノスアイレスで開催されるMERGEに参加します。LaceのジェネラルマネージャーBrandon Wolfが、ウォレット、ステーキング、マルチチェーン展開などのトピックで、プラットフォームの将来に関する洞察を共有します。Laceチームも出席してコミュニティと交流します。参加者は、ライブディスカッション、チームに会う機会、Laceのソーシャルメディアチャネルでのサプライズや景品の可能性に期待できます。

### スマートコントラクト

**Plutus**チームは、plutus-ledger-apiおよびplutus-txパッケージのPlinthライブラリーを強化しました。データ処理効率を大幅に向上させることができるビルトインDataのケーシングを可能にする作業を始めました。今後のハードフォークのためのPlutus機能の開発も続けています。

### スケーリング

**Hydra**チームは[Hydraノードのメモリフットプリントを削減](https://github.com/cardano-scaling/hydra/issues/1618)し、多くのトランザクション処理で長時間実行するノードのパフォーマンスを大幅に改善する作業を完了しました。コミュニティメンバーにはこれらの機能強化のテスト、フィードバック提供への協力が求められています。修正プログラムの導入、[ドキュメントの改訂](https://github.com/cardano-scaling/hydra/pull/1899)も行いました。

**Mithril**チームは、複数のアグリゲーター間で署名者登録をサポートするためのアグリゲーターのプロトタイプslaveモードの実装作業を続けました。この機能は現在安定化、テストを行っています。機能の安定化と本番環境の準備、テスト、最適化に注力しながら、Cardanoデータベース増分認証の実装を続けました。明確さと保守性を向上させるために暗号ライブラリーのリファクタリングを開始し、IOG鍵を使用してCardanoデータベーススナップショット内の[補助ファイルに署名する作業](https://github.com/input-output-hk/mithril/issues/2362)を続けました。

移行とメンテナンスのためのデータベースツールを強化し、[CIの一部のフレークを修正](https://github.com/input-output-hk/mithril/issues/2360)しました。

**Leios**チームはシミュレーション機能において大きく進展し、[90のシナリオ](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w11/analysis.ipynb)でRustとHaskellのシミュレーションを比較することに成功しました。[現実的な3,000ノードのネットワーク](https://github.com/input-output-hk/ouroboros-leios/blob/leios-2025w11/sim-rs/test_data/realistic.yaml)上でLeiosを[メインネット規模で分析](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/sims/2025w11xl/analysis.ipynb)したところ、ネットワークトポロジーからパフォーマンスに関して予想外の利点が得られたことが明らかになりました。[シャーディングのパフォーマンス分析](https://github.com/input-output-hk/ouroboros-leios/blob/main/analysis/shard-performance.ipynb)から得られた洞察から、重要な最適化戦略が得られました。リアリズムと比較可能性を高めるために両方のシミュレーション実装を洗練させる中、形式手法チームがShort Leiosのための初期トレース検証ツールを開発しました。

詳細は、[Leios週刊更新情報](https://leios.cardano-scaling.org/news/2025/03/10/weekly-progress-summary)をご覧ください。

### CATALYST

**Catalyst**では、Cardano SpotとCV Labsをフィーチャーした[Xスペースコラボ](https://x.com/Catalyst_onX/status/1902415512417542388)でタウンホールが再開され、今後のアクセラレータープログラムとネットワーキングイベントについて話し合います。新しいCatalystプラットフォームの今後の機能に焦点を当てた、\_Under the Hood\_のエピソードもまもなく公開されます。Catalystプラットフォームの技術開発は、Fund14に先立って優先的に続けられています。

### 教育

**教育**チームは、Cardano開発者コースの更新を仕上げています。ラティノアメリカーナ・イ・デル・カリベ大学で開かれたDoctoralコンソーシアムで、Cardanoについてのバーチャルプレゼンテーションを行いました。3月31日には[フロリダ国際大学](https://www.fiu.edu/)でCardano Daysイベントを企画しています。登録の詳細は追って公開されます。
