---
title: Weekly development report as of 2025-03-07
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/9da01383-6ed2-4649-80a3-0e5a3ddf8fee/
image_text: Weekly development report as of 2025-03-07
---

### ECOSYSTEM UPDATES

The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned.

Cardano’s ecosystem continues to grow with 1,988 projects currently building on the network. The number of delegated wallets has increased to 1.326 million, reflecting steady engagement in staking. The issuance of native tokens has reached 10.71 million, with 209,546 token policies, marking a 0.55% increase since last week.

Smart contract adoption is progressing, with 127,578 Plutus scripts deployed. On-chain activity remains stable, with 107.21 million transactions. Governance participation has also expanded, with 1,185 DReps, including 905 active DReps, showing a 3.31% increase since last week in decentralized decision-making participation.

In other news:

*   [Begin wallet](https://x.com/BeginWallet/status/1897291605738192959) has introduced a feature allowing users to delegate to a DRep within the app.
    
*   [USDM](https://x.com/USDMOfficial/status/1896572565633806500) is now live in beta, with applications open for testing participation.
    
*   [Emurgo](https://x.com/emurgo_io/status/1896546100183736648) has officially registered as a DRep.
    
*   [Intersect](https://x.com/IntersectMBO/status/1895517788741181783) has submitted the proposed roadmap as an on-chain info action.
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1897625557296173113) is now running nodes for Oraclecharli3 and orcfax.
    
*   [Draper University](https://x.com/draper_u/status/1895535918284784102) has partnered with the CF to launch a five-week residency program for 20 builders in Silicon Valley.
    

### CORE TECHNOLOGY

This week, the **consensus** team updated the c[onsensus blueprint documentation](https://cardano-scaling.github.io/cardano-blueprint/) to explain different aspects of the consensus layer, including chain selection, ledger queries, the storage layer, and the mempool. Additionally, team members Javier Sagredo and Nick Frisby featured on the [Cardano Dev Pulse Podcast](https://www.youtube.com/watch?v=93elW8Ro8cI), where they discussed UTXO-HD and Genesis.

The **SRE** team continued improving Cardano environments and performing general maintenance. Recent updates include setting the `cardano-node` and `cardano-cli` pre-release (-ng) to v.10.2.1 and v.10.4.0.0 respectively in cardano-parts. The SanchoNet environment was retired, freeing up resources, and module and template support for SRV DNS records was added to cardano-parts in preparation for an upcoming cardano-node release that will leverage these records.

### SMART CONTRACTS

This week, the **Plutus** team released `plutus-ledger-api-1.42` and `plutus-tx-plugin-1.42`, which include several features discussed in this [blog post](https://iohk.io/en/blog/posts/2025/02/20/plutus-tx-gets-a-makeover-meet-plinth/). The team is also continuing work on Plutus features for the upcoming hard fork.

### WALLETS AND SERVICES

The **Lace** team has launched Lace v.1.21.0, which enhances the transparency and reliability of the Web3 experience. Users can now view raw CBOR data during DApp transaction confirmations, similar to Nami mode, providing deeper insight into each transaction. The latest update includes improved error handling for tab API interactions, self-transaction displays, and transaction submissions, making Lace more stable and user-friendly. These enhancements ensure that Lace remains a leader in Web3 innovation for both newcomers to cryptocurrency and experienced DeFi users.

### SCALING

This week, the **Mithril** team continued implementing incremental certification of the Cardano database, focusing on feature stabilization, production readiness, testing, and optimization. They also [worked on implementing a prototype 'slave' mode](https://github.com/input-output-hk/mithril/issues/2334) of the aggregator to support the signer registration across multiple aggregators. Additionally, they kept working on supporting the upcoming Cardano node v.10.2.

Finally, the team continued [investigating the source of failing builds in the Hydra CI](https://github.com/input-output-hk/mithril/issues/2295) and worked on setting up code ADRs in the repository.

This week in **Leios** development, the team focused on simulation analysis and formal methods. Key accomplishments include detailed analyses of both Haskell and Rust simulations, initial work on a protocol dashboard, and advancements in formal methods through trace verification in Agda.

The **Hydra** team merged the [etcd-based networking stack](https://github.com/cardano-scaling/hydra/issues/1720) into master (not yet released) and invited community testing. They continue working on [memory usage enhancements](https://github.com/cardano-scaling/hydra/issues/1618) and are investigating potential stuck-head resolutions by progressing on [side-loading a snapshot](https://github.com/cardano-scaling/hydra/issues/1858). Next steps include finishing the snapshot side-loading process, tightening security options for the new networking layer, and [publishing scripts with Blockfrost](https://github.com/cardano-scaling/hydra/issues/1668).

### CATALYST

A recent [blog post](https://projectcatalyst.io/blog/cardano-accelerators-driving-innovation-in-catalyst-) highlighted the Cardano accelerator programs funded in Fund13 to keep the community informed about how to get involved. In addition, Catalyst hosted a town hall event on [X Spaces](https://x.com/Catalyst_onX/status/1896874847344746599), where key insights from the latest ‘[Under The Hood](https://x.com/Catalyst_onX/status/1894812548958167102)’ episode were discussed. This episode explored upcoming features and changes moving toward Fund14.

The community can look forward to more product demonstrations and updates from Catalyst as development continues. The onboarding of Fund13 projects is nearing completion. Meanwhile, the team is focused on phasing out Ideascale and advancing the development of a Catalyst app to enhance the overall user experience.

### EDUCATION

This week, the **education** team are continuing with refactoring updates and enhancements to the Cardano developer course and are completing additional lectures for the Haskell Bootcamp. They are also preparing for a virtual presentation about Cardano for Venezuela’s Doctoral Consortium at Universidad Latinoamericana y del Caribe later this month. Additionally, they are planning several Cardano Days events, stay tuned for more details.

### ![](https://ucarecdn.com/c7336a51-a9d5-47e1-b895-0f0f0a58ac4c/-/preview/-/format/auto/-/quality/smart/)エコシステム

本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。

Cardanoのエコシステムは成長を続けており、現在ネットワーク上に1,988のプロジェクトが構築されています。委任済みウォレット数は、ステーキングへの着実なエンゲージメントを反映して、133万2600万に増加しました。ネイティブトークンの発行は、先週から0.55%増の1,071万に達し、トークンポリシーは209,546です。

 スマートコントラクトの普及は進んでおり、127,578のPlutusスクリプトがデプロイされています。オンチェーンの活動は、トランザクション数1億721万で安定しています。ガバナンスへの参加も拡大し、DRepは先週から3.31%増の1,185人（うちアクティブDRepは905人）と、分散型の意思決定への参加が増加しています。

その他のニュース：

●    [Begin Wallet](https://x.com/BeginWallet/status/1897291605738192959)は、ユーザーがアプリ内でDRepに委任できる機能を導入。

●    [USDM](https://x.com/USDMOfficial/status/1896572565633806500)は現在ベータ版を公開し、テスト参加者を募集中。

●    [Emurgo](https://x.com/emurgo_io/status/1896546100183736648)がDRepとして公式登録。

●    [Intersect](https://x.com/IntersectMBO/status/1895517788741181783)がロードマップ案をオンチェーン情報アクションとして提出。

●    [Cardano財団](https://x.com/Cardano_CF/status/1897625557296173113)は現在、Oraclecharli3とorcfaxのノードを実行。

●    [ドレイパー大学](https://x.com/draper_u/status/1895535918284784102)はCFと提携し、20人のビルダーを対象にシリコンバレーで5週間のレジデンスプログラムを開講。

### コアテクノロジー

**コンセンサス**チームは、コンセンサス層のさまざまな側面を説明するために、[コンセンサスブループリントドキュメント](https://cardano-scaling.github.io/cardano-blueprint/)を更新しました。これには、チェーン選択、台帳クエリ、ストレージ層、メモリープールが含まれます。チームメンバーのJavier SagredoとNick Frisbyが[Cardano Dev Pulseポッドキャスト](https://www.youtube.com/watch?v=93elW8Ro8cI)に出演し、UTXO-HDとGenesisについて語りました。

**SRE**チームは、引き続きCardano環境の強化と総合メンテナンスに取り組みました。最新の更新には、Cardano-partsのcardano-nodeおよびcardano-cliプレリリース（-ng）をそれぞれv.10.2.1およびv.10.4.0.0に設定することも含まれます。SanchoNet環境は廃止され、リソースが解放されたほか、SRV DNSレコードを活用することになるcardano-nodeのリリースに備えて、Cardano-partsにSRV DNSレコードのモジュールとテンプレートのサポートが追加されました。

### スマートコントラクト

**Plutus**チームはplutus-ledger-api-1.42とplutus-tx-plugin-1.42をリリースしました。このリリースには、この[ブログ記事](https://iohk.io/jp/blog/posts/2025/02/20/plutus-tx-gets-a-makeover-meet-plinth/)で説明されている機能も含まれています。予定されているハードフォークに向けたPlutus機能に関する作業も継続しています。

### ウォレットとサービス

**Lace**チームは、Web3エクスペリエンスの透明性と信頼性を強化するLace v.1.21.0をリリースしました。NAMIモードに似た、DAppトランザクションの確認中に生のCBORデータを表示する機能など、各トランザクションに関するより深い情報が提供されています。最新の更新では、タブAPIインタラクション、自己トランザクション表示、トランザクション送信のエラー処理が改善され、Laceの安定性と操作性が向上しました。これらの強化により、Laceは暗号資産の新規参入者と経験豊富なDeFiユーザーの両方にとって、Web3イノベーションのリーダーであり続けることが保証されます。

### スケーリング

**Mithril**チームは、機能の安定化と本番環境の準備、テスト、最適化に焦点を当てながら、Cardanoデータベース増分認証の実装を続けました。複数のアグリゲーター間で署名者登録をサポートするためのアグリゲーターの[プロトタイプ「スレーブ」モードの実装](https://github.com/input-output-hk/mithril/issues/2334)に取り組みました。Cardanoノードv.10.2のサポートにも取り組んでいます。

[Hydra CIで失敗したビルドのソースの調査](https://github.com/input-output-hk/mithril/issues/2295)を続け、リポジトリにあるコードADRの設定に取り組みました。

**Leios**開発では、シミュレーション解析と形式手法に焦点を当てました。主な成果としては、HaskellシミュレーションとRustのシミュレーションの詳細な解析、プロトコルダッシュボードの初期作業、AGDAでのトレース検証による形式手法の前進などがあります。

**Hydra**チームは[etcdベースのネットワークスタック](https://github.com/cardano-scaling/hydra/issues/1720)をmasterにマージし（未リリース）、コミュニティにテストを呼びかけました。[メモリ使用量の改善](https://github.com/cardano-scaling/hydra/issues/1618)、[スナップショットのサイドロード](https://github.com/cardano-scaling/hydra/issues/1858)を進めることによるスタックヘッドの潜在的な解決策の調査を継続しました。次のステップには、スナップショットのサイドロードプロセスの終了、新しいネットワーク層のセキュリティオプションの強化、[Blockfrostを使用したスクリプトの公開](https://github.com/cardano-scaling/hydra/issues/1668)が含まれます。

### CATALYST

最近の[ブログ](https://projectcatalyst.io/blog/cardano-accelerators-driving-innovation-in-catalyst-)で、参加方法についての情報をコミュニティに提供するために、Fund13で資金提供を受けたCardanoアクセラレータープログラムが取り上げられました。Catalystは[X Space](https://x.com/Catalyst_onX/status/1896874847344746599)でタウンホールイベントを開催しましたが、ここでは、最新の[Under the Hood](https://x.com/Catalyst_onX/status/1894812548958167102)エピソードからの重要な洞察について議論がなされました。このエピソードでは、Fund14に向けて予定されている機能と変更について検討しています。

コミュニティには、開発の進行が進むにつれて、Catalystからさらなる製品デモンストレーションや更新情報が配信されます。Fund13プロジェクトのオンボーディングはほぼ完了しています。Ideascaleの段階的廃止、全体的なユーザーエクスペリエンス向上のためのCatalystアプリ開発にも焦点が当てられています。

教育

**教育**チームは、Cardano開発者コースのリファクタリング、更新、強化を継続し、Haskell Bootcampの追加講義をまとめています。今月後半、ラティノアメリカーナ・イ・デル・カリベ大学で開かれるベネズエラ博士コンソーシアムのために、Cardanoについてのバーチャルプレゼンテーションの準備も進めています。複数のCardano Daysイベントを計画しています。
