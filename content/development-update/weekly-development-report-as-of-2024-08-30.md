---
title: Weekly development report as of 2024-08-30
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/92f576b1-10de-4772-bb5b-9c1eaf0bf494/
image_text: Weekly development report as of 2024-08-30
---

### CORE TECHNOLOGY

This week, the **ledger** team focused on conformance tests and improvements to the ledger test suite. They communicated extensively with the community and other core teams about the upcoming hard fork. They also documented key changes specific to Conway that could affect DApp developers. These changes include the lack of [visibility within](https://github.com/IntersectMBO/cardano-ledger/issues/4571) `PlutusV3` of deposit and refund amounts in stake credentials certificates, the [impact of empty redeemers](https://github.com/IntersectMBO/cardano-ledger/pull/4554) on data integrity hashes, and changes to transaction fee computation due to [reference scripts](https://github.com/IntersectMBO/cardano-ledger/blob/master/docs/adr/2024-08-14_009-refscripts-fee-change.md).

Additionally, they discovered and fixed a minor bug related to DRep expiration initialization, although it won't impact Chang.

The **site reliability engineering (SRE)** team continued enhancing Cardano environments and conducting general maintenance. Key updates include:

*   The pre-production network has been successfully upgraded to the Conway era
    
*   Improvements to the `profile-blockperf` `nixosModule` now include Prometheus metrics and automated scraping with `grafana-agent`
    
*   The `profile-tcpdump` `nixosModule` in `cardano-parts` can now push ongoing `pcaps` to S3 for historical reference
    
*   Old development environments were cleaned up after the migration to the `cardano-parts` stack
    
*   Adjustments improved mainnet relay performance and addressed `mempool` log volume issues
    
*   Scaling capability was added to the mainnet bootstrap cluster.
    

### WALLETS AND SERVICES

The **Lace** team is gearing up to release version 1.15, which will introduce enhanced governance capabilities to the wallet. This update aims to further empower users by integrating new features that support Cardano's evolving governance framework.

### SCALING

The **Mithril** team started working on decentralizing the signature orchestration of the Mithril network. In this preliminary phase, they are moving signer registrations to the aggregator's [epoch settings](https://github.com/input-output-hk/mithril/issues/1897) route. They also [optimized memory usage](https://github.com/input-output-hk/mithril/issues/1903) for signers when signing Cardano transactions and completed a proof of concept for diffusing Mithril signatures with the Cardano network layer.

Finally, they added support for retrieving [database snapshots](https://github.com/input-output-hk/mithril/pull/1885) from local files in the client and fixed a bug related to the certification of Cardano stake distribution.

### VOLTAIRE

On August 28, the Intersect hard fork working group held a meeting, during which representatives from the community, Emurgo, the Cardano Foundation, and Input | Output voted unanimously to initiate the hard fork known as Chang #1. This hard fork will take effect on the Cardano mainnet on September 1, and it is the first of two hard forks in the Chang upgrade. The Intersect working group has been working closely with stake pool operators (SPOs), exchanges, and developers of decentralized applications (DApps) to prepare for this.

The SPOs are ready, as 92% of stake is on pools running Cardano node v.9.1.0. Exchanges are also prepared, with 92% of liquidity held by exchanges upgraded to v.9.1.0. Most DApps are ready, and no high-severity issues have been raised.

There will be [a special X Space](https://x.com/i/spaces/1gqGvNPloAeGB) to highlight the event as we cross the epoch boundary.

In addition, contingency plans are in place, with technical first responders on standby to offer support in case of unexpected events around the hard fork.  
For more information, see [Intersect’s blog](https://www.intersectmbo.org/news/the-chang-upgrade-1-date-confirmed).

### CATALYST

This week in **Catalyst**, the Fund12 onboarding process is advancing into its next phases, ensuring smooth integration for new projects. Additionally, the Hermes project has reached significant progress with the successful delivery of Milestone 3.

### EDUCATION

The **education** team is preparing content and organizing logistics for Cardano Days events next month. The first event will be delivered as part of the [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/) and takes place on Saturday, September 21. [Registration](https://uwyo.sjc1.qualtrics.com/jfe/form/SV_4Gu3YKHydsD8aSW) is now open. We would love to see you there!

![](https://ucarecdn.com/3104ddb2-8d29-49c1-8046-0f7d7fcd7eff/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは、適合性テストおよび台帳テストスイートの改良に注力しました。予定されているハードフォークについてコミュニティや他のコアチームと広範囲に連絡を取り合いました。DApp開発者に影響を与える可能性のあるConwayに関する重要な変更を文書化しました。変更には、ステーククレデンシャル証明書のデポジットと返金額が「[PlutusV3」内で可視化](https://github.com/IntersectMBO/cardano-ledger/issues/4571)されていないこと、データ整合性ハッシュに[空のリディーマーが与える影響](https://github.com/IntersectMBO/cardano-ledger/pull/4554)、[参照スクリプト](https://github.com/IntersectMBO/cardano-ledger/blob/master/docs/adr/2024-08-14_009-refscripts-fee-change.md)によるトランザクション手数料計算の変更が含まれます。

DRepの有効期限の初期化に関する軽微なバグを発見し修正ました。Changへの影響はありません。

**SRE**（サイト信頼性エンジニアリング）チームは引き続きCardano環境の強化と総合メンテナンスに取り組みました。主な更新は次のとおりです。

*   プリプロネットワークのConway期へのアップグレード成功
    
*   profile-blockperf、nixosModuleの改良は、Prometheusメトリクスとgrafana-agentによる自動スクレイピングを含むようになった
    
*   cardano-partsのprofile-tcpdumpとnixosModuleは、履歴参照のために進行中のpcapsをS3にプッシュできるようになった
    
*   cardano-partsスタックへの移行後に古い開発環境をクリーンアップ
    
*   調整によってメインネットリレーのパフォーマンスを向上させmempoolログサイズの問題に対応
    
*   メインネットブートストラップクラスタにスケーリング機能を追加
    

### ウォレットとサービス

**Lace**チームはバージョン1.15のリリースに向けて準備を進めています。このリリースでは、ウォレットに強化されたガバナンス機能が導入されます。この更新は、進化するCardanoのガバナンスフレームワークをサポートする新機能を統合することで、ユーザーのさらなるエンパワメントを目的としています。

### スケーリング

**Mithril**チームは、Mithrilネットワークの署名オーケストレーションの分散化に取り組んでいます。この予備フェーズでは、署名者登録をアグリゲーターの[エポック設定](https://github.com/input-output-hk/mithril/issues/1897)ルートに移動します。Cardanoトランザクションに署名するときの署名者の[メモリー使用量を最適化](https://github.com/input-output-hk/mithril/issues/1903)し、Cardanoネットワーク層でMithril署名を拡散するための概念実証を完了しました。

クライアントのローカルファイルから[データベーススナップショット](https://github.com/input-output-hk/mithril/pull/1885)を取得するためのサポートを追加し、Cardanoステーク分布の認証に関するバグを修正しました。

### VOLTAIRE

8月28日、ハードフォークワーキンググループは会議を開き、コミュニティ、Intersect、Emurgo、Cardano財団、Input | Outputの代表者は、全員一致でChang #1として知られるハードフォークの開始に同意しました。このハードフォークは9月1日にCardanoメインネットで有効化される予定であり、Changアップグレードで2回行われるハードフォークの1回目となります。 

Intersectは、ステークプールオペレーター（SPO）、取引所、分散型アプリケーション（DApp）の開発者と緊密に協力して、このための準備を進めてきました。

SPOは準備完了で、ステークの92%がCardanoノードv.9.1.0を実行しているプールにあります。取引所も準備ができており、流動性の92%はv.9.1.0にアップグレードした取引所が保有しています。ほとんどのDAppは準備ができており、深刻な問題は提起されていません。

エポック境界を越える際には、このイベントにスポットを当てた[Xスペース](https://x.com/i/spaces/1gqGvNPloAeGB)が開かれます。

緊急時対応計画も策定されており、ハードフォーク周辺で予期しない事態が発生した場合に備えて、救急技術対応者が待機します。

詳しくは、[Intersectのブログ](https://www.intersectmbo.org/news/the-chang-upgrade-1-date-confirmed)をご覧ください。

### CATALYST

**Catalyst**では、Fund12の新しいプロジェクトを円滑に統合できるようにするためのオンボーディングプロセスが次の段階に進んでいます。Hermesプロジェクトはマイルストン3を提出し、著しい進捗を示しました。

### 教育

**教育**チームは、来月のCardano Daysイベントのためのコンテンツの準備と手配を行っています。最初のイベントは9月21日土曜日に、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/)の一環として配信されます。現在[登録](https://uwyo.sjc1.qualtrics.com/jfe/form/SV_4Gu3YKHydsD8aSW)受付中です。現地で会いましょう。
