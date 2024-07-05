---
title: Weekly development report as of 2024-07-05
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/792756a7-d4f5-4698-a1aa-6224810f3190/
image_text: Weekly development report as of 2024-07-05
---

### CORE TECHNOLOGY

Last week, the **core technology** teams released [Cardano node v.8.12.2](https://github.com/IntersectMBO/cardano-node/releases/tag/8.12.2), which improves the bootstrap peer networking feature.   

Over the last few weeks, the **ledger** team focused on constraint generator testing, conformance test plumbing, adding more scripts to the Alonzo UTXO specification, and other testing initiatives. In terms of infrastructure and releases, they bumped the `CHANGELOG` versions post-release, also updating the changelog files, worked on `cardano-node-8.12` ledger changelog, and bumped up the version for `cardano-data`. 

See the Voltaire section for Conway related details.   

### WALLETS AND SERVICES

The **Lace** team released Lace version 1.13, marking a significant advancement in the team's mission to become the leading wallet experience in the Cardano ecosystem. This update adds support for Trezor Safe 3, broadening user device compatibility.

For more details on the new features and improvements, read the official announcement on [the Lace blog](https://www.lace.io/blog/lace-1-13-0-release).

### SCALING

This week, the **Mithril** team continued implementing the certification of Cardano transactions in Mithril networks. They completed the low-latency certification with the retrieval of transactions using the chain sync mini-protocol and Pallas and worked on fixing some bugs occurring during the warmup phase of the signer and aggregator. They also worked on supporting the new Cardano node version 8.12 and kept [redacting a draft CIP for the diffusion](https://github.com/input-output-hk/mithril/issues/1775) of Mithril signatures through the Cardano network.

Finally, the team fixed a bug that prevented the parsing of some blocks in the SanchoNet network and made some optimizations on the databases of the signer and aggregator.

### VOLTAIRE & SANCHONET

This week, the **ledger** team implemented several changes to improve the resilience and safety of the Conway ledger era implementation:

*   Authorization of hot credentials for constitutional committee members is now restricted to cold credentials present in the ledger state, either in the current committee or in one of the proposals
    
*   DRep votes are removed whenever a DRep unregisters
    
*   The pricing model for the size of reference scripts was changed from linear to exponential, with additional limits on the total size of reference scripts being used.
    

Also, [last week’s Intersect update](https://www.intersectmbo.org/news/intersect-development-update-20-june-28th) covered the latest developments in the Cardano constitution journey, including the announcement of those selected to sit on the interim constitutional committee. Make sure to check this week’s [Intersect news](https://www.intersectmbo.org/news) for the latest details.

### CATALYST

[Town hall 169](https://www.youtube.com/watch?v=S0nKPaJ085Q) premiered, showcasing ongoing developments. The voting process is still underway, with over 1bn ada in voting power coming from more than 3,000 participating wallets, and over 99,000 individual votes cast. All issues with the voting app have been fixed, including the initial problem with a white screen. Voting will remain open until July 11, and the community is encouraged to support their favorite proposals to enhance the future of Cardano's governance. For more information on how to vote, please visit the [Catalyst GitBook](https://docs.projectcatalyst.io/current-fund/voting/how-to-vote).

### EDUCATION

This week, the **education** team continued preparing for the Cardano Developer course in Buenos Aires next month. They also worked on education content for Voltaire and Mastering Cardano.  
  
  
![](https://ucarecdn.com/2412662c-3b3c-4f29-930d-ff866f1ecbbb/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コアテクノロジー**チームは、ブートストラップピアネットワーキング機能を改良した[Cardanoノードv.8.12.2](https://github.com/IntersectMBO/cardano-node/releases/tag/8.12.2)をリリースしました。   

この数週間、 **台帳**チームは制約ジェネレーターのテスト、適合性テストの配管、AlonzoのUTXO仕様へのスクリプトの追加、その他のテストイニシアチブに注力してきました。インフラとリリースに関しては、リリース後のCHANGELOGバージョンを上げ、changelogファイルを更新し、Cardano-node-8.12台帳のchangelogに取り組み、Cardano-dataのバージョンを上げました。 

Conway関連の詳細は、Voltaireセクションを参照してください。 

### ウォレットとサービス

**Lace**チームはLaceバージョン1.13をリリースし、Cardanoエコシステムでウォレットエクスペリエンスをリードするというチームのミッションを大きく前進させました。この更新では、Trezor Safe 3のサポートが追加され、ユーザーデバイスの互換性が拡張されます。

新機能と改良点の詳細は、[Laceブログ](https://www.lace.io/blog/lace-1-13-0-release)の公式発表を参照してください。

### スケーリング

**Mithril**チームは、MithrilネットワークにCardanoトランザクション認証を実装する作業を継続しました。チェーン同期ミニプロトコルとPallasを使用したトランザクションの検索で低レイテンシー認証を完了し、サイナーとアグリゲーターのウォームアップフェーズで発生したバグの修正に取り組みました。Cardanoノードの新バージョン8.12のサポートにも取り組み、Cardanoネットワークを介したMithril署名[拡散用のCIP草案の編集](https://github.com/input-output-hk/mithril/issues/1775)を続けました。

SanchoNetネットワーク内のブロック解析を妨げるバグを修正し、サイナーとアグリゲーターのデータベースで最適化を行いました。

### VOLTAIRE & SANCHONET

**台帳**チームは、Conway期台帳の実装の回復力と安全性を向上させるために、いくつかの変更を実装しました。

*   憲法委員会のメンバーに対するホットクレデンシャルの承認は、現在の委員会または提案のいずれかにある台帳ステータスに存在するコールドクレデンシャルに制限されるようになりました。
    
*   DRepが登録を解除するたびにDRep投票は削除されます。
    
*   参照スクリプトのサイズの価格モデルが線形から指数関数型に変更され、使用される参照スクリプトの合計サイズに追加の制限が加えられました。
    

先週の[Intersect更新情報](https://www.intersectmbo.org/news/intersect-development-update-20-june-28th)では、暫定憲法委員会に選出された委員の発表を含む、Cardano憲法の旅の最新情報を取り上げました。今週の最新情報は、[Intersectニュース](https://www.intersectmbo.org/news)をチェックしてください。

### CATALYST

[タウンホール169](https://www.youtube.com/watch?v=S0nKPaJ085Q)が開催され、進行中の開発情報が紹介されました。投票プロセスはまだ進行中であり、3,000を超える参加ウォレットから10億以上のADAが議決権を得て、99,000を超える個別票が投票されています。初期に問題となったホワイト画面を含め、投票アプリのすべての不具合は修正されました。投票は7月11日まで受け付けられます。コミュニティは、Cardanoのガバナンスの将来を強化すると思われる提案を支持することが奨励されています。投票方法の詳細は、[Catalyst GitBook](https://docs.projectcatalyst.io/current-fund/voting/how-to-vote)をご覧ください。

### 教育

**教育**チームは来月ブエノスアイレスで開催されるCardano開発者コースの準備を続けました。VoltaireとCardanoの教育コンテンツにも取り組みました。
