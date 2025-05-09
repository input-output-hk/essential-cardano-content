---
title: Weekly development report as of 2025-05-09
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/1a01d482-fa75-441e-b911-0669ac11ca0f/
image_text: Weekly development report as of 2025-05-09
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned.  
  
_Cardano’s ecosystem continues to grow with measurable gains across development, activity, and governance. There are now 1,998 projects building on the network, with 1.33 million delegated wallets. The network has reached 109.18 million transactions, a 0.18% increase since last week, while native token activity remains strong with 10.78 million native tokens and 214,153 token policies.

Smart contract development also continues its upward trend. There are now 132,771 Plutus scripts and 6,587 Aiken scripts deployed, reflecting a 0.65% increase since last week. Governance is steadily expanding, with 1,292 DReps, including 956 actively participating, marking a 0.78% rise. Developer activity remains solid, with 238 GitHub commits recorded over the period.

In other news:

*   [BitcoinOS](https://x.com/BTC_OS/status/1919376592146674001) demoed the first bridgeless transfer of BTC between the Bitcoin and Cardano mainnets
    
*   Sundial Protocol and Bitlayer Labs are collaborating to build a ZK bridge between Bitcoin and Cardano
    
*   [SundaeSwap](https://x.com/SundaeSwap/status/1919487034084757683) showcased a live example of their new permissioned pools, which require an 'Exclusive Swap Membership' NFT to trade
    
*   [dRepWatch](https://x.com/dRepWatch/status/1920154635425194153) launched this week, offering a platform for delegators to communicate with their DReps and submit questions.
    

### CORE TECHNOLOGY

This week, the **performance and tracing** team released [benchmarks for node v.10.4.1](https://updates.cardano.intersectmbo.org/reports/2025-05-performance-10.4.1/), including focused evaluations of UTXO-HD, GC settings, and socket I/O features. On the development side, the team abstracted over quick and trace queries to enable remote query processing. They also merged workbench simplification and resolved long-standing `GHC8.10` technical debt. Additionally, the team implemented a hotfix to address several issues in the new tracing metrics.

The **ledger** team began preparations for an intra-era hard fork by adding Conway-era support for protocol version 11. They also continued reducing technical debt, tightening code-safety measures, and further enhancing the constraint-based testing framework.

### WALLETS AND SERVICES

**Lace** wallet now fully supports Firefox with the [release of version 1.22.1](https://x.com/lace_io/status/1919368591729643619). This update allows users to manage ada, explore DApps, and use Bitcoin within the Lace environment on the Firefox browser, enhancing accessibility and flexibility.

### SCALING

This week, the **Mithril** team released the new distribution [2517.1](https://github.com/input-output-hk/mithril/releases/tag/2517.1), which addresses a client security issue discussed in this [developer blog post](https://mithril.network/doc/dev-blog/2025/05/07/client-security-advisory). This version supports Cardano node v.10.3.1 and allows for signing ancillary files in the Cardano database snapshots using an IOG key. It also includes various bug fixes and improvements.

The team continued progressing on the DMQ node implementation by adjusting the cadence of the signer and [aggregator state machines](https://github.com/input-output-hk/mithril/issues/2428) and developing the delayer and retrier decorators to support multiple signature publishers in the signer.

Finally, they worked on fixing some bugs in the infrastructure and kept [refactoring the STM](https://github.com/input-output-hk/mithril/issues/2369) cryptographic library for improved clarity.

### VOLTAIRE 

Voting in the Intersect committee elections closed this week, with results to be announced at noon UTC on May 12.

The next elections will be for the Cardano constitutional committee. This committee is a Cardano committee, not an Intersect one. Candidate registrations opened on May 5 and will close at noon UTC on May 31.

### CATALYST

This week will see the last town hall on X before moving to Zoom format with live stream options on X and Zoom to follow. You can join town halls [using this link](http://bit.ly/catalyst-townhall).  
  
Technical development and integration to the Catalyst platform continues.

### EDUCATION

This week, the **education** team is preparing for the Cardano Days sessions as part of the Cardano community Azteca 2025 event in Mexico and at the [National Technical University of Athens](https://www.ntua.gr/en/) in the Greek capital next month. They are also updating the Cardano developer course.  
  
![](https://ucarecdn.com/d16fc9f0-6958-4726-ada7-a3d6eb79344e/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは、開発、活動、ガバナンス全体で成長を続けており、それは数字に表れています。ネットワークで構築されているプロジェクト数は今や1,998に上り、133万ウォレットが委任されています。ネットワークが処理するトランザクション数は、前週比0.18%増の1億918万件に達し、ネイティブトークンアクティビティは1,078万トークンと依然として堅調で、トークンポリシーは21万4,153です。

スマートコントラクトの開発もいまだ上昇傾向にあります。現在、132,771のPlutusスクリプトと6,587のAikenスクリプトがデプロイされており、前週比0.65%増を示しています。ガバナンスも着実に拡大しており、DRepは0.78%増の1,292人、うち956人が積極的に活動しています。開発者の活動は安定しており、期間中に238件のGitHubコミットが記録されました。 

その他のニュース：

*   [BitcoinOS](https://x.com/BTC_OS/status/1919376592146674001)は、ビットコインとCardanoメインネット間で、初のBTCブリッジレス転送をデモ
    
*   Sundial ProtocolとBitlayer LabsがビットコインとCardano間のZKブリッジ構築で提携
    
*   [SundaeSwap](https://x.com/SundaeSwap/status/1919487034084757683)は取引に「Exclusive Swap Membership」NFTを必要とする新しいPermissioned Poolsのライブ例を紹介
    
*   [dRepWatch](https://x.com/dRepWatch/status/1920154635425194153)は今週ローンチされ、デリゲーターがDRepと連絡を取り、質問を提出するためのプラットフォームを提供
    

### コアテクノロジー

**パフォーマンス&トレース**チームは、UTXO-HD、GC設定、ソケットI/O機能の集中評価を含む、[ノードv.10.4.1のベンチマーク](https://updates.cardano.intersectmbo.org/reports/2025-05-performance-10.4.1/)をリリースしました。開発に関しては、クイッククエリとトレースクエリを抽象化し、リモートクエリ処理を可能にしました。ワークベンチの簡素化をマージし、長年の`GHC8.10`技術負債を解消しました。新しいトレースメトリクスの諸問題に対処するためのホットフィックスを実装しました。

**台帳**チームは期内ハードフォークの準備を始め、まずはプロトコルバージョン11用にConway期のサポートを追加しました。技術負債の削減、コードセーフティ対策の強化、制約ベースのテストフレームワークの更なる強化も継続しました。

### ウォレットとサービス

**Lace**ウォレットは[バージョン1.22.1のリリース](https://x.com/lace_io/status/1919368591729643619)でFirefoxのフルサポートを実現しました。この更新により、Firefoxブラウザー上のLace環境内でADAの管理、DAppの探索、ビットコインの使用が可能になり、アクセシビリティと柔軟性が向上しました。

### スケーリング

**Mithril**チームは新ディストリビューション[2517.1](https://github.com/input-output-hk/mithril/releases/tag/2517.1)をリリースしました。これは、この[開発者ブログ](https://mithril.network/doc/dev-blog/2025/05/07/client-security-advisory)で説明したクライアントのセキュリティ問題に対処したものです。このバージョンはCardanoノードv.10.3.1をサポートし、Cardanoデータベーススナップショット内の補助ファイルにIOG鍵を使用して署名することができます。また、さまざまなバグ修正や改良も含まれています。

引き続き署名者と[アグリゲーターステートマシン](https://github.com/input-output-hk/mithril/issues/2428)のケイデンスを調整し、署名者において複数の署名パブリッシャーをサポートするために、遅延処理と再試行処理を行うデコレーターを開発しています。

インフラのバグ修正に取り組み、明快さを向上させるための[STM](https://github.com/input-output-hk/mithril/issues/2369)暗号ライブラリーのリファクタリングを続けました。

### VOLTAIRE 

Intersect委員会の選挙は今週終了し、結果は日本時間5月12日午後9時に発表されます。

次の選挙はCardano憲法委員会選挙となります。この委員会はCardano委員会であり、Intersect委員会ではありません。候補者登録は5月5日に開始され、日本時間5月31日午後9時に締め切られます。

### Catalyst

今週のタウンホールは、Xで行われる最後のタウンホールになります。次回からはZoom形式に移りますが、XとZoomのライブストリームオプションでフォローできます。タウンホールには、[このリンク](http://bit.ly/catalyst-townhall)から参加できます。 

技術開発とCatalystプラットフォームへの統合は継続中です。

### 教育

**教育**チームは、来月CardanoコミュニティによるメキシコのAzteca 2025イベントと、ギリシャの[アテネ国立工科大学](https://www.ntua.gr/en/)でのイベントの一環として開催される、Cardano Daysセッションの準備のほか、Cardano開発者コースの更新も行っています。
