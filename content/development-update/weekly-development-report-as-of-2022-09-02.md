---
title: Weekly development report as of 2022-09-02
tags:
  - Weekly development updates
  - Development
  - Statistics
  - Cardano
url: ""
image: https://ucarecdn.com/e65dcc9b-6438-4457-aa46-6efe433b5f4f/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams continued preparing for the Vasil upgrade. 

Multiple stakeholders, including SPOs, exchanges, and DApp projects are upgrading their nodes, testing their code and other Cardano components ahead of the Vasil upgrade. To trigger the mainnet upgrade, IOG and the Cardano Foundation are targeting the following critical mass indicators:

*   75% of mainnet blocks are created by the final Vasil node candidate (v.1.35.3)
    
*   Approximately 25 exchanges are upgraded (representing 80% of ada liquidity)
    
*   Top 10 DApps by TVL confirm they have upgraded to v.1.35.3 on pre-production and are ready for mainnet 
    

These metrics are now being tracked and discussed daily. To track the latest status of updates for yourself, visit see [ecosystem readiness for the Vasil upgrade](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade).

The **networking** team continued working on the Gossip design and implementation plan, set the ouroboros-network repository for the single relay release, and fixed some network simulation issues. They also worked on tracing configurations, identified and worked on RTView issues, and improved the network-mux library. 

### WALLETS AND SERVICES 

This week, the **Daedalus** team did extensive testing of the preview and pre-production and released [Daedalus test versions](https://docs.cardano.org/cardano-testnet/daedalus-testnet) for these environments.

Development work is ongoing on the **Lace** desktop features. The team added multi-address support defined in [CIP-1852](https://cips.cardano.org/cips/cip1852/) and changed some UI components in the Lace browser version. They also created the Lace proof-of-concept component to handle requests for the full node and light mode models.

All **Adrestia** components have been updated and are now Vasil-compatible.

The Docker images and related documentation have been updated to reflect changes in the new pre-production and preview environments.

On top of that, the team is still working on the Cardano-js-sdk to get it ready for production.

Finally, they're working on the implementation of multisig (shared wallets) and "light" mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the support feature for multiple language versions along with testing and documentation improvements. They also progressed on the implementation of Babbage support for Plutus tools and ran tests on the constraints library. 

The **Marlowe** team created an on-chain transaction specification documentation for Marlowe. They also extended division proofs, wrote a lemma that specifies that money is paid out on ‘Close’, and fixed some broken links on the Marlowe Haddock website. The team upgraded the Playground to PureScript v.0.15, added an ability to follow the history of multiple contracts to Marlowe Runtime, and created a Marlowe example of a stabilization pool. 

Finally, they implemented generic SWAPS with ACTUS, and the SWAPS contract type.

### BASHO (SCALING)

This week, the **Hydra** team improved documentation with updated and translated timestamps. They also determined and published transaction fee benchmarks, merged the `run-tmux` bootstrap for the Hydra demo, and planned the development roadmap including an approximate scope for version 0.8.0.

### GOVERNANCE

This week, **Project Catalyst** is gearing up for Fund9 voting. The team continues testing the voting processes, fixing some minor bugs, and addressing usability concerns. Recognizing the importance of voting accuracy and having a bug-free environment to cast votes, the team is in the final stages of testing before launching the voting stage. It’s looking positive for voting to commence early next week. Voting is expected to last for two weeks to provide enough time for high levels of participation.  

![](https://lh5.googleusercontent.com/Aa5UKtjrzkh-imiKfGbmRIbk8bB8bpX2J01f6yvmNFga0gk4XpwdtWZFe1lEs2-lJ9ChHwcy0k_QEoHhDONdk1X0dcyoyR6lAdBjWgBUOCOZQ5cu7SW_REx3wqu8dgUkLlo9mJt1PIcZJlF1TNwCsWEDVerHCl26ltXkOfB5hBoSDfEC44gAxNApSg)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilアップグレードの準備を続けました。 

SPO、取引所、DAppsプロジェクトなど、さまざまな関係者がVasilアップグレードに先立ちノードをアップグレードし、コードやその他のCardanoコンポーネントをテストしています。メインネットのアップグレードをトリガーするために、IOGとCardano財団は次のクリティカルマス指標をターゲットにしています。

*   メインネットブロックの75%が最終Vasilノード候補版（v.1.35.3）で生成されること
    
*   およそ25の取引所がアップグレードされること（ADA流動性の80%を占める）
    
*   TVLによるトップ10DAppがプリプロでv.1.35.3へのアップグレードを確認し、メインネットへの準備が整っていること 
    

現在、毎日これらのメトリクスを追跡し、これについて話し合いをしています。更新状態の最新情報をチェックするには、[Ecosystem readiness for the Vasil upgrade](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade)（Vasilアップグレードのためのエコシステムの準備：現在英語のみ）をご覧ください。

**ネットワーキング**チームは、引き続きGossipの設計および実装計画に取り組み、シングルリレーリリースのためにouroboros-networkリポジトリを設定し、ネットワークシミュレーションの不具合を修正しました。設定の追跡への取り組み、RTView問題の特定と対応、network-muxライブラリーの改良も行いました。 

### ウォレットとサービス 

Daedalusチームはプレビュー環境とプリプロ環境の広範なテストを実施し、これらの環境で使用するためのDaedalusテストネットバージョンをリリースしました。

**Lace**デスクトップ機能の開発作業は進行中です。[CIP-1852](https://cips.cardano.org/cips/cip1852/)で定義されたマルチアドレスサポートを追加し、Laceブラウザーバージョンで一部のUIを変更しました。フルノードモデルとライトモードモデルのリクエストを処理するLace概念実証コンポーネントも作成しました。

すべての**Adrestia**コンポーネントは更新され、Vasil対応となっています。

Dockerイメージと関連ドキュメントは新しいプリプロ環境とプレビュー環境の変更を反映するよう更新されました。

Cardano-js-sdkの本番環境に向けた準備はまだ続いています。

cardano-walletへマルチシグ（ウォレットの共有）機能と「ライト」モード機能を実装する作業は進行中です。

### スマートコントラクト

**Plutus**チームは、テスト、ドキュメントの改良とともに、多言語バージョンをサポートする作業を続けました。PlutusツールのBabbageサポートの実装を進め、constraintsライブラリーのテストを実行しました。 

**Marlowe**チームはMarloweのオンチェーントランザクション仕様のドキュメントを作成しました。除算証明を拡張し、お金が「Close」で支払われるように指定する補題を作成し、Marlowe Haddockウェブサイドでリンク切れを修正しました。PlaygroundをPureScript v.0.15にアップグレードし、Marlowe Runtimeに複数のコントラクト履歴を辿る機能を追加し、安定化プールのMarlowe例を作成しました。 

ACTUSを使用した汎用SWAPSと、SWAPSコントラクトタイプを実装しました。

### Basho( スケーリング)

**Hydra**チームは月例開発報告を準備し、ドキュメントを更新および翻訳したタイムスタンプを含んで改善しました。トランザクション手数料ベンチマークを決定および公開し、Hydraデモの「run-tmux」ブートストラップをマージし、バージョン0.8.0の大まかな範囲を含む開発ロードマップを計画しました。

### ガバナンス

**Project Catalyst**はFund9の投票に向けて準備を進めています。テストおよび投票プロセスを続け、軽微なバグを修正し、操作性の懸念に対処しました。投票の精度とバグのない投票環境の重要性を認識しつつ、現在投票開始に向けたテストの最終段階に入っています。来週早々に投票開始が見込まれます。投票期間は、大量の参加者に十分な時間を提供できるよう、2週間をめどにしています。
