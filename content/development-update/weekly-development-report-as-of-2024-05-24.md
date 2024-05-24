---
title: Weekly development report as of 2024-05-24
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/a2ae9bf7-9cb3-4921-b716-1b1521964990/
image_text: Weekly development report as of 2024-05-24
---

### CORE TECHNOLOGY

This week, the **ledger** team focused primarily on conformance testing. Significant progress was made as the team completed conformance tests for the \`[CERT](https://github.com/IntersectMBO/cardano-ledger/pull/4320) `and` [RATIFY](https://github.com/IntersectMBO/cardano-ledger/pull/4334)\` rules and advanced other tests. These efforts also led to [improvements in the](https://github.com/IntersectMBO/cardano-ledger/pull/4325) `constraint-generators` framework. Additionally, the team fixed the stake pool operator stake distribution calculation for voting by including proposal deposits currently locked in the system.

### SMART CONTRACTS

This week, the **Plutus** team completed the development of guardrail scripts for Conway governance actions. They have also been fine-tuning the PlutusV3 cost model parameters to ensure optimal performance. Additionally, the team collaborated with MLabs on the implementation of new bitwise primitives.

### SCALING

This week, the **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They worked on scaling proof generation for `mainnet` by prototyping optimizations and benchmarking performance improvements. They also made progress on low-latency certification by completing the retrieval of the chain tip and importing transactions from the Cardano mini-protocol with Pallas. Additionally, they worked on a new explorer page to display newly registered and deregistered SPOs for the latest Cardano epochs.

Finally, the team upgraded the `testing-sanchonet` network following the `SanchoNet` network respin, created a module for building test transactions, and began removing the deprecated `snapshot` command from the client CLI.

### VOLTAIRE & SANCHONET

This week, work is ongoing on SanchoNet documentation. The community members together with Intersect are working on updating DRep Pioneer program participation requirements. Find out more [about the program here](https://sancho.network/drep-pioneer-program/drep-pp/overview).

As always, follow [Intersect development updates](https://www.intersectmbo.org/news) for more details. 

### CATALYST

This week in Catalyst, Fund12 reached the proposal finalization stage. Town hall 163 took place, and the team successfully moved proposals to the community review stage.

The community review stage is divided into two phases:

*   LV0/LV1 review period: lasting from May 23 until June 6
    
*   LV2 moderation period: taking place from June 13 to June 20.
    

The Catalyst network session for funded projects is scheduled for May 28, featuring guest speaker Anthony Day, head of strategy and marketing at Midnight. Furthermore, development progress for Hermes and Catalyst voices is advancing well, with the POA for milestone 2 reached and presented to the community after the town hall session.

### EDUCATION

This week, the **Education** team is planning the next Cardano Developer course and making progress on the Mastering Cardano series. Additionally, they are preparing an educational video about the constitutional committee in collaboration with the Voltaire tribe.

![](https://ucarecdn.com/82e67ff0-675c-4251-bf90-72114e96ae0d/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは主に適合性テストに焦点を当てました。[CERT](https://github.com/IntersectMBO/cardano-ledger/pull/4320)ルールと[RATIFY](https://github.com/IntersectMBO/cardano-ledger/pull/4334)ルールの適合性テストを完了し、その他のテストを進めて、大きく進展させました。これらの取り組みはまた、[constraint-generatorsフレームワークの改良](https://github.com/IntersectMBO/cardano-ledger/pull/4325)にもつながりました。投票のためのステークプールオペレーターのステーク分配計算を、現在システムにロックされている提案デポジットを含めて修正しました。

最新のcardano-node-8.11リリースを促進するために、台帳チームのメンバーの1人がリリースエンジニアを担当することになりました。 

### スマートコントラクト

**Plutus**チームは、Conwayガバナンスアクションのガードレールスクリプトの開発を完了しました。PlutusV3コストモデルパラメーターを微調整して、最適なパフォーマンスを確保しました。新しいビット単位プリミティブの実装に関してMLabsと協力しました。

### ウォレットとサービス 

### スケーリング

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。mainnetのスケーリング証明生成への取り組みの一環として、最適化のプロトタイピングと性能向上のベンチマークを行いました。チェーンチップの取得を完了し、CardanoミニプロトコルからPallasでトランザクションをインポートすることで、低レイテンシーの認証も進展させました。最新のCardanoエポックのために新しく登録されたSPOと登録を解除したSPOを表示するための新しいエクスプローラーページに取り組みました。

SanchoNetネットワークのリスピンに続いてtesting-sanchonetネットワークをアップグレードし、テストトランザクションを構築するためのモジュールを作成し、クライアントCLIから非推奨のsnapshotコマンドの削除を始めました。

### VOLTAIRE & SANCHONET

SanchoNetのドキュメント作成作業が進行中です。コミュニティメンバーはIntersectと共同で、DRepパイオニアプログラム参加要件の更新に取り組んでいます。プログラムの詳細は、[こちら](https://sancho.network/drep-pioneer-program/drep-pp/overview)をご覧ください。

通常通り、詳細は、Intersectの[開発更新情報](https://www.intersectmbo.org/news)を参照してください。  

### CATALYST

Catalystでは、Fund12が提案の最終段階に達しました。第163回タウンホールが開催され、提案は無事にコミュニティレビュー段階に移行されました。

コミュニティレビュー段階はさらに次の2段階に分かれます。

*   LV0/LV1レビュー期間：5月23日～6月6日
    
*   LV2調整期間：6月13日～6月20日
    

資金提供されたプロジェクトのためのCatalystネットワークセッションは5月28日、Midnightの戦略およびマーケティング責任者であるAnthony Dayをゲストスピーカーに迎えて開催される予定です。HermesとCatalyst Voicesの開発は順調に進んでおり、マイルストーン2のPOAに到達し、タウンホールセッション後にコミュニティに提示されました。

### 教育

**教育**チームは、次回Cardano開発者コースを企画し、Mastering Cardanoシリーズを進めました。Voltaireトライブと協力して憲法委員会についての教育用動画も準備しています
