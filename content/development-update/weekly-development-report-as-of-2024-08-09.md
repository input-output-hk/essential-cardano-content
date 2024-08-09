---
title: Weekly development report as of 2024-08-09
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/7bf467c8-7922-484c-8448-deee19a5840c/
image_text: Weekly development report as of 2024-08-09
---

### CORE TECHNOLOGY

This week, the **consensus** team started working on its [goals for Q3 2024](https://github.com/IntersectMBO/ouroboros-consensus/milestone/4), focusing on several key improvements.

Key updates include:

*   Improved behavior of [\`db-truncater](https://github.com/IntersectMBO/ouroboros-consensus/pull/1203)\`
    
*   Additional details exposed on `EmptySlot` [error](https://github.com/IntersectMBO/ouroboros-consensus/pull/1196)
    
*   New [trace message](https://github.com/IntersectMBO/ouroboros-consensus/pull/1198) for unclean Consensus databases
    
*   Support for [storing immutable and volatile databases](https://github.com/IntersectMBO/ouroboros-consensus/pull/1199) in different paths.
    

The team is also rebasing the UTXO-HD feature branch atop node v.9.1.0. Benchmarks revealed a [heap size increase](https://github.com/IntersectMBO/ouroboros-consensus/issues/1192) and a [race condition](https://github.com/IntersectMBO/ouroboros-consensus/issues/1193). Proposed fixes include a [heap size increase mitigation](https://github.com/IntersectMBO/ouroboros-consensus/pull/1194) and a [forkers race condition fix](https://github.com/IntersectMBO/ouroboros-consensus/pull/1208).

### WALLETS AND SERVICES

Lace is now ready for the Chang upgrade, operating on the preview network. The platform is gearing up for DRep registration, delegation, and voting on the `mainnet`, offering users a chance to test these features. You can try out the new functionalities now at [preview.gov.tools](https://preview.gov.tools/).

### SMART CONTRACTS

This week, the **Plutus** team completed conformance testing for all remaining bitwise primitives (CIP-0122 and CIP-0123), including `integerToByteString` and `byteStringToInteger`. These primitives will be enabled at Chang+1. Additionally, the team began improving the user documentation for Plinth (formerly known as Plutus Tx).

### SCALING

This week, the **Hydra** team made significant progress on several bug fixes and moved the spec into a repository for transitioning to Agda. They made minor improvements to tests and considered the details of implementing incremental commits and the Blockfrost chain layer idea. The team will continue to address remaining bugs and prepare for Rare Evo with a new landing page.

The **Mithril** team continued their work on the certification of Cardano stake distribution. They completed the implementation of new routes for the [aggregator REST API](https://github.com/input-output-hk/mithril/issues/1841) and worked on the verification steps in the client library. The draft CIP for the diffusion of Mithril signatures through the Cardano network is nearly complete. Also, they finished benchmarking the signer's footprint for Cardano transactions on the [SPO infrastructure](https://github.com/input-output-hk/mithril/issues/1826).

The team also fixed a bug in the transaction importer that prevented some transactions from being imported near the chain tip and resolved an issue on the documentation website.

### VOLTAIRE & SANCHONET

With the release of [node v.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0), all users are encouraged to upgrade to this or a later version in preparation for the Chang upgrade. 

For more details, read this Intersect blog post and check the latest [Intersect news](https://updates.cardano.intersectmbo.org/).

### CATALYST

Onboarding for Fund12 is progressing smoothly, with 93 percent of onboarding forms submitted, 86 percent of statements of milestones (SOMs) completed, and 65 percent of SOMs signed off. The first retrospective town hall session was held on Wednesday, August 7, 2024 to gather feedback and insights about Fund12 from the community.

### EDUCATION

The **education** team recently hosted a successful Cardano developer course at the National Technological University of Argentina (UTN). Aspiring developers and blockchain enthusiasts gathered to learn about Cardano's blockchain technology and smart contract development. The team is conducting a retrospective analysis and gathering attendee feedback to refine the curriculum, aiming to replicate the course in other regions and languages.

Looking ahead, the team is organizing the highly anticipated Cardano Days event in Wyoming, which will offer participants foundational knowledge of blockchain technology, Cardano, and smart contracts through interactive workshops and expert-led sessions.

![](https://ucarecdn.com/50174942-4913-40c6-9d28-bf876395bc91/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、[2024年第3四半期の目標](https://github.com/IntersectMBO/ouroboros-consensus/milestone/4)設定を始めました。ここでは、いくつかの重要な改善点に焦点を当てています。

主な更新は次のとおりです。

*   [db-truncater](https://github.com/IntersectMBO/ouroboros-consensus/pull/1203)の動作の改善
    
*   [EmptySlotエラー](https://github.com/IntersectMBO/ouroboros-consensus/pull/1196)に関する詳細情報
    
*   Consensusデータベースがクリーンでない場合のための新しい[トレースメッセージ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1198)
    
*   異なるパスに[不変データベースと変動性データベースを格納](https://github.com/IntersectMBO/ouroboros-consensus/pull/1199)するためのサポート
    

ノードv.9.1.0上のUTXO-HD機能ブランチのリベースも行っています。ベンチマークでは、[ヒープサイズの増加](https://github.com/IntersectMBO/ouroboros-consensus/issues/1192)と[競合状態](https://github.com/IntersectMBO/ouroboros-consensus/issues/1193)が明らかになりました。提案されている修正には、[ヒープサイズの増加の緩和](https://github.com/IntersectMBO/ouroboros-consensus/pull/1194)と[フォーカーの競合状態修正](https://github.com/IntersectMBO/ouroboros-consensus/pull/1208)が含まれます。

### ウォレットとサービス

LaceはChangアップグレードに向けた準備が整い、プレビューネットワーク上で作動しています。このプラットフォームは、現在mainnetでDRepの登録、委任、投票の準備を進めており、ユーザーにこれらの機能をテストする機会を提供しています。新機能は、[preview.gov.tools](https://preview.gov.tools/)から試すことができます。

### スマートコントラクト

**Plutus**チームは、integerToByteStringとbyteStringToIntegerを含む、残りのすべてのビット単位プリミティブ（CIP-0122とCIP-0123）の適合性テストを完了しました。これらのプリミティブはChang+1で有効になります。Plinth（旧称Plutus Tx）のユーザードキュメントの改訂を始めました。

### スケーリング

**Hydra**チームはバグ修正で大きく前進し、AGDAへ移行すべくリポジトリに仕様を移動しました。テストをわずかに改良し、インクリメンタルコミットの実装の詳細とブロックフロストチェーン層のアイデアを検討しました。今後は残りのバグに対処し、新しいランディングページを設けてRare Evoを準備します。

**Mithril**チームはCardanoステーク分布の認証に関する作業を続けました。[アグリゲーターREST API](https://github.com/input-output-hk/mithril/issues/1841)の新ルートの実装を完了し、クライアントライブラリーでの検証手順に取り組みました。Cardanoネットワークを介したMithril署名拡散のCIP草案はほぼ完成しています。[SPOインフラ](https://github.com/input-output-hk/mithril/issues/1826)におけるCardanoトランザクション署名者のフットプリントベンチマークも完了しました。

チェーンチップ付近で一部のトランザクションがインポートされないというトランザクションインポーターのバグを修正し、ドキュメントサイトの不具合を解決しました。

### **VOLTAIRE & SANCHONET**

### [ノードv.9.1.0](https://github.com/IntersectMBO/cardano-node/releases/tag/9.1.0)のリリースに伴い、すべてのユーザーはChangアップグレードの準備としてこのバージョンまたはそれ以降のノードにアップグレードすることが推奨されます。

### 詳細は、Intersectブログの記事と最新の[Intersectニュース](https://www.essentialcardano.io/development-update/weekly-development-report-as-of-2024-07-26#:~:text=Chang%20upgrade%2C%20follow-,Intersect%20news,-.)をご覧ください。

### CATALYST

Fund12のオンボーディングは順調に進んでおり、93%のオンボーディングフォームが提出され、86%のマイルストーンステートメント（SOM）が完成し、65%のSOMが承認されました。2024年8月7日水曜日に最初のタウンホール振り返りセッションが開催され、コミュニティからFund12に関するフィードバックと洞察が得られました。

### 教育

**教育**チームは最近、アルゼンチン国立工科大学（UTN）でCardano開発者コースを開催し、成功を収めました。意欲的な開発者とブロックチェーン好きが集まり、Cardanoのブロックチェーン技術とスマートコントラクト開発について学びました。現在、コースを他の地域や言語で再現することを目指して、カリキュラムを改善するために過去の分析と参加者からのフィードバック収集を行っています。

今後の予定としては、ワイオミング州で待望されているCardano Daysイベントを開催します。このイベントでは、インタラクティブなワークショップや専門家が主導するセッションを通じて、ブロックチェーン技術、Cardano、スマートコントラクトの基礎知識が提供されます。
