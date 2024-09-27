---
title: Weekly development report as of 2024-09-27
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/12dcb48f-5b36-42f6-8c33-98f226ec6dc5/
image_text: Weekly development report as of 2024-09-27
---

### CORE TECHNOLOGY

Last week, the **core technology** teams released node [v.9.2.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.2.0), bringing several improvements and bug fixes:

*   Script-based DRep support in the `update certificate` CLI command
    
*   Improved `transaction view` CLI command
    
*   Governance-related ledger state queries
    
*   Improved Plutus debugging functionality
    
*   A new method for calculating CBOR-encoded transaction size
    
*   Fixes for DRep registration expiration and the DRep threshold for ratifying `NoConfidence` votes
    
*   New `GetProposals` and `GetRatifyState` consensus queries
    
*   A major overhaul of the tracing metrics naming schema.
    

This week, the team released a minor update to the previous version – Cardano node [v.9.2.1](https://github.com/IntersectMBO/cardano-node/releases/tag/9.2.1) that enhances the performance of certificate validation. 

The **performance and tracing** team released benchmarks for node `v.9.2.0` and validated the new ‘Age of Voltaire’ performance baseline. Other developments include:

*   **Development - new tracing system**. They fixed a space leak in the forwarding mechanism and continued investigating log rotation.
    
*   **Workbench**. The team worked on a major refactoring of the workbench, optimizing the size of the Nix closure and adding profile flake outputs. An adjusted Nomad backend was also merged.
    
*   **Infrastructure**. The team tested and merged dropping `Vault` for the Nomad cluster.
    
*   **Tracing**. They worked on further aligning of metric names to comply with OpenMetrics specifications, the addition of annotations to Prometheus metrics, and testing of the internal monitoring server routing.
    

The **ledger** team focused on enhancing the ledger test suite with better improvements and more rigorous testing. The team implemented several important features set to activate after the next intra-era hard fork:

*   Correct translation of `RegTxCert` and `UnRegTxCert` to `PlutusV3` scripts context, ensuring accurate handling of deposits and refunds.
    
*   Prohibition of treasury withdrawals that are empty or sum to zero to improve transaction integrity. 
    

Finally, they made some performance optimizations and fixed a ledger event bug. 

### WALLETS AND SERVICES

**Lace** v.1.16 is now live, bringing enhanced features for managing multiple addresses, improving DApp security, and fixing bugs. Users can now easily manage multiple addresses from the _Receive_ screen, with the ability to generate fresh addresses as needed. Additionally, new functionality allows for seamless message signing directly within Lace without connecting to a DApp, improving trustless message verification. Bug fixes include a proper display for [CIP-68](https://cips.cardano.org/cip/CIP-68) NFTs and improvements to the DApp connector for smoother transactions.

### SCALING

This week, the **Mithril** team released the [new distribution](https://github.com/input-output-hk/mithril/releases/tag/2437.1) `2437.1`. This release includes stable support for Cardano transaction certification and stake distribution certification in both the signer and aggregator, a breaking change in the Mithril client WASM related to handling unstable features, along with bug fixes and performance improvements.

The team also continued working on decentralizing the signature orchestration of the Mithril network. They completed the [implementation of a buffer store](https://github.com/input-output-hk/mithril/issues/1900) for individual signatures that may arrive before being processed by an aggregator and finished [refactoring the signer state machine](https://github.com/input-output-hk/mithril/issues/1922). They also worked on developing a mechanism to support specific configurations for signing Cardano transactions and focused on the autonomous computation of the messages to be signed by the signer.

Finally, they worked on a [refactoring of the service](https://github.com/input-output-hk/mithril/issues/1941) that computes the messages to certify in the signer and aggregator, and fixed the problem preventing the consistent certification of Cardano transactions in the `pre-release-preview` network.

### VOLTAIRE

The governance organization, [Intersect MBO](http://intersetcmbo.org), is growing fast, with individual and enterprise memberships exceeding expectations and the community embracing the governance model. 

Applications have now closed for candidates to be elected to seats on committees and the membership board. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXexpRbk0leZiHoz-ZQ2n8ptqL5qQf_3jFsM2vxt6qNeLJi_cgU_AJ1Lb1_R8u4wgH6zJsGzCPwDD1XgcDJ-MUe6PcJI2AhLnjUE9Y6HhROMgpWfkQl--Sa7DIFRNxI4Q-gzyHcv0vrLzF4Z1mo2myghbds?key=ZZQiZdW6I4EcL-PXhCsumw)

The applications yet to be validated are from associates who still need to upgrade their membership.

Voting can only be done online via the [member portal](https://members.intersectmbo.org/dashboard), where every member has one vote. 

### CATALYST

**Catalyst** Fund13 [launch town hall](https://bit.ly/3BktWlV) took place on September 25. The community can now access the [launch guide](http://projectcatalyst.io/f13launchguide), and proposal submissions will begin on September 26. Additionally, the [Catalyst website](http://projectcatalyst.io/) has been updated with new features, and technical development on Hermes and Catalyst Voices is progressing.

![](https://ucarecdn.com/e1c9eb7b-29ca-4a90-968c-661741379bc9/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームは、次の改良およびバグ修正を施したノード[v.9.2.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.2.0)をリリースしました。

*   CLIコマンド「update certificate 」でスクリプトベースのDRepサポート
    
*   CLIコマンド「transaction view」を改良
    
*   ガバナンス関連の台帳ステータスクエリ
    
*   Plutusデバッグ機能を改良
    
*   CBORエンコードしたトランザクションサイズ計算の新手法
    
*   DRep登録の有効期限およびNoConfidence投票を承認するためのDRep閾値の修正
    
*   新しいGetProposalsおよびGetRatifyStateコンセンサスクエリ
    
*   トレースメトリクス命名スキーマの大幅な見直し
    

前バージョンのマイナー更新であるCardanoノード[v.9.2.1](https://github.com/IntersectMBO/cardano-node/releases/tag/9.2.1)をリリースしました。これは、証明書検証のパフォーマンスを強化します。 

**パフォーマンス＆トレース**チームはノードv.9.2.0のベンチマークをリリースし、新しいAge of Voltaireパフォーマンスのベースラインを検証しました。その他の開発には以下が含まれます。

*   **開発 - 新しいトレースシステム：**転送メカニズムのスペースリークを修正し、ログローテーションの調査を継続
    
*   **ワークベンチ**：ワークベンチの大幅なリファクタリングに取り組み、Nixクロージャーのサイズを最適化し、プロファイルフレーク出力を追加。調整したNomadバックエンドもマージ。
    
*   **インフラ**：Nomadクラスター用のVaultをテストしてマージ。
    
*   **トレース**：OpenMetrics仕様に準拠するためのメトリクス名のさらなる調整、Prometheusメトリクスへの注釈の追加、内部監視サーバールーティングのテストに取り組む。
    

**台帳**チームは、台帳テストスイートのさらなる改良とより厳格なテストで強化することに焦点を当てました。期内の次回ハードフォーク後に有効化するよう設定された重要な機能を実装しました。

*   RegTxCertとUnRegTxCertをPlutusV3スクリプトコンテキストに正しく変換し、デポジットと返金を確実に処理
    
*   トランザクションの整合性を向上させるために、空または合計がゼロのトレジャリー引き出しを禁止 
    

パフォーマンスを最適化し、台帳イベントのバグを修正しました。 

### ウォレットとサービス

**Lace** v.1.16をリリースしました。ここでは、複数のアドレス管理などの拡張機能が追加されたほか、DAppのセキュリティ向上、バグ修正が実施されました。_入金_画面で複数のアドレスを簡単に管理できるようになり、必要に応じて新しいアドレスを生成できるようになりました。新機能により、DAppに接続することなく、Lace内で直接シームレスなメッセージ署名が可能になり、トラストレスなメッセージ検証が改善されました。バグ修正には、[CIP-68](https://cips.cardano.org/cip/CIP-68) NFTの適切な表示と、よりスムーズなトランザクションのためのDAppコネクターの改良が含まれます。

### スケーリング

**Mithril**チームは新ディストリビューション[2437.1](https://github.com/input-output-hk/mithril/releases/tag/2437.1)をリリースしました。このリリースには、署名者とアグリゲーターの両方におけるCardanoトランザクション認証とステーク分布認証の安定したサポートが含まれており、不安定な機能の処理に関するMithrilクライアントWASMの最新の変更、バグ修正、パフォーマンスの改善が含まれています。

Mithrilネットワークの署名オーケストレーションの分散化への取り組みも続けました。アグリゲーターが処理する前に到着する可能性のある個々の署名の[バッファストアの実装](https://github.com/input-output-hk/mithril/issues/1900)、[署名者のステートマシンのリファクタリング](https://github.com/input-output-hk/mithril/issues/1922)を完了しました。Cardanoトランザクションに署名するための特定の設定をサポートするメカニズムの開発に取り組み、署名者が署名するメッセージの自律的な計算に焦点を当てました。

署名者とアグリゲーターで認証するメッセージを計算する[サービスのリファクタリング](https://github.com/input-output-hk/mithril/issues/1941)に取り組み、pre-release-previewネットワークでCardanoトランザクションの一貫した認証を妨げる問題を修正しました。

### VOLTAIRE

ガバナンス組織[Intersect MBO](http://intersetcmbo.org/)は急速に成長しており、個人や企業の会員数は予想を上回り、コミュニティはこのガバナンスモデルを歓迎しています。

委員会員と理事会員として選出される候補者の申請は締め切られました。

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJh_R_1-6EE8CjTdiTmPX0TIhVjekalnaD40SmKje25TqAkp8KdhaZvPwoBHfIqE5s1E6ZhacqQmq9KQdQiijPEoQyLaftGQQX9_g3VO4WqMZtbv3KOsEjRDL96yM8GKGX9OU2i5Od_iOtYqfjV-hZ70Q?key=7gN3pVjCCL5TQOf-2L8vyw)

まだ検証が済んでいないのは、メンバーシップをアップグレードする必要があるアソシエイトからの申請です。

投票は[会員ポータル](https://members.intersectmbo.org/dashboard)を通じてのみオンラインで行うことができ、各会員は1票を持っています。

### CATALYST

**Catalyst** Fund13[ローンチタウンホール](https://bit.ly/3BktWlV)が9月25日に開催されました。現在、コミュニティは[ローンチガイド](http://projectcatalyst.io/f13launchguide)にアクセスでき、提案書の受け付けは9月26日に開始されます。[Catalystサイト](http://projectcatalyst.io/)は更新して新機能が追加され、HermesとCatalyst Voicesの技術開発が進められています。

### 教育

**教育**チームは週末にワイオミング大学でCardano Daysイベントを開催しました。これは成功を収め、フィードバックは全体的に肯定的でした。10月19日にスペインのサンタンデールで開催される次回のCardano Daysに向けた準備も進めています。
