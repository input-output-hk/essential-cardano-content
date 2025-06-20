---
title: Weekly development report as of 2025-06-20
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/ef718614-6d16-4000-87df-36daf648ece7/
image_text: Weekly development report as of 2025-06-20
---

### ECOSYSTEM UPDATES

Cardano continues to show consistent growth across key ecosystem metrics. The number of projects has reached 2,003, while the total number of delegated wallets has also grown. The network has processed 110.63 million transactions, reflecting a 0.19% week-on-week increase in on-chain activity.

Smart contract development also continues to grow, with 138,544 Plutus scripts and 7,350 Aiken scripts now live, representing a 0.14% increase since last week. Governance participation has reached a new high with 1,365 DReps, including 972 active DReps. Developer contributions also remain strong, with 210 GitHub commits, marking a notable 24% increase since last week.

In other news:

*   [Flow DeFi](https://x.com/flowdefi/status/1935701097353527405) completed its presale, raising 7.5 million ada
    
*   The [Cardano Foundation](https://x.com/Cardano_CF/status/1935316644051517530) has launched a new governance voting tool to support community participation
    
*   Cardano is now a supported network in the beta version of [Brave Wallet](https://x.com/StakeWithPride/status/1935719586202276249)
    
*   [Iagon](https://x.com/IagonOfficial/status/1935413139128074282) has partnered with the Ford Motor Company to explore using the Cardano blockchain and Iagon's decentralized cloud storage for managing legal documents and data
    
*   [Surance Plus](https://x.com/SurancePlus/status/1934863843211247849) announced plans to integrate Midnight as one of its partnered blockchain networks.
    

### CORE TECHNOLOGY

Over the past four weeks, the **ledger** team focused on modernizing the codebase, reducing technical debt, and preparing for an upcoming intra-era hard fork. A major emphasis was placed on [CDDL improvements](https://github.com/IntersectMBO/cardano-ledger/pull/4996), resulting in improved readability and the correction of long-standing errors dating back to the Byron era. 

The team further enhanced readability by refining the CDDL-generation tool. The decision to drop `ghc-8.10` support enabled the integration of safety checks that leverage advanced compiler features, alongside numerous performance optimizations and other critical technical debt cleanups.

Looking ahead, preparations have commenced for an intra-era hard fork later this year.

Additionally, one more bug has been eliminated in anticipation of the hard fork, and preliminary work on nested transactions is now underway.

### SCALING

This week, the **Mithril** team [released the](https://github.com/input-output-hk/mithril/releases/tag/2524.0) `2524.0` [distribution](https://github.com/input-output-hk/mithril/releases/tag/2524.0). This version supports Cardano node v.10.4.1 and introduces a new Mithril client CLI command for converting UTXO-HD ledger state snapshots. It also includes various bug fixes and improvements.

The team completed the first phase of the [switch to binary encodings](https://github.com/input-output-hk/mithril/issues/2536) and continued working on the second phase of the standard library refactoring. They also implemented a new command in the client CLI to verify an existing Cardano database using Mithril. Additionally, they worked on implementing the [publisher](https://github.com/input-output-hk/mithril/issues/2539) and [consumer](https://github.com/input-output-hk/mithril/issues/2540) for the DMQ network, using the `n2c local message submission` and `n2c local message notification` mini-protocols from the Pallas library.

Finally, they enhanced the ledger state snapshot converter in the client CLI and continued [refactoring the STM cryptographic library](https://github.com/input-output-hk/mithril/issues/2369).

The **Leios** team focused on improving simulation analysis tools and creating more practical network topologies. Key achievements include enhancing the trace processor with additional data extraction capabilities and developing a smaller, more efficient 'miniature mainnet' topology for repeated experimentation.

See [Leios weekly updates](https://leios.cardano-scaling.org/news/2025/06/10/weekly-progress-summary) for more details.

### CATALYST

**Project Catalyst** just held its [194th town hall](https://x.com/Catalyst_onX/status/1935383828845232539), edging ever closer to the 200 mark. The team examined the recent project [close-out video in more detail](https://www.youtube.com/watch?v=bSXbTjhCLAc), sharing key highlights and lessons learned from the last three funding rounds.

In addition, the team released Episode 3 of the [Under the Hood series.](https://x.com/Catalyst_onX/status/1935744390762574163) In this episode, senior product designer Niels Kijf joined the discussion for a deep dive into user experience, how Catalyst shapes the future of a decentralized world, and how that vision is coming to life in Project Catalyst.

With nearly 50 projects wrapping up each month, Catalyst will highlight some of the recently completed and funded projects at the end of this week – stay tuned.

### EDUCATION

This week, the **education** team is preparing for next week’s Cardano Days event at the Institute of Science Tokyo, which will be held on June 24-25. [Registration](https://t.co/RCNjzyABoW) is now open.

Additionally, work is continuing on the Cardano Education Program (CEP). This program will offer a series of self-paced learning modules covering all aspects of Cardano, complete with suggested learning paths and optional supplementary modules.  
  
![](https://ucarecdn.com/1de31fd9-256e-4435-87ac-c7c94064419b/-/preview/-/format/auto/-/quality/smart/)  
  
エコシステム

Cardanoは主要なエコシステム指標全体で着実に成長を続けています。プロジェクト数は2,003に達し、委任済みウォレット数も増加しています。ネットワークが処理したトランザクション数は1億1063万となり、これはオンチェーンアクティビティにおける週0.19%の増加を反映しています。

スマートコントラクトの開発も成長を続けており、Plutusスクリプトは13万8,544、Aikenスクリプトは7,350と、前週比0.14%の増加を見せています。ガバナンスへの参加もDRep数が1,365と過去最高となり、内972がアクティブDRepです。開発者の貢献も堅調で、GitHubのコミット数は前週比24%増の210と、目覚ましい成長を見せています。

その他のニュース：

*   [Flow DeFi](https://x.com/flowdefi/status/1935701097353527405)はプレセールを終了、750万ADAを資金調達
    
*   [Cardano財団](https://x.com/Cardano_CF/status/1935316644051517530)はコミュニティの参加をサポートする新しいガバナンスツールをリリース
    
*   [Brave Wallet](https://x.com/StakeWithPride/status/1935719586202276249)がベータ版でCardanoネットワークをサポート
    
*   [Iagon](https://x.com/IagonOfficial/status/1935413139128074282)がFord Motor Companyと提携して、法律文書とデータの管理のためにCardanoブロックチェーンとIagonの分散型クラウドストレージの活用を模索
    
*   [Surance Plus](https://x.com/SurancePlus/status/1934863843211247849)が提携ブロックチェーンネットワークの1つとしてMidnightの統合を発表
    

### コアテクノロジー

この4週間、**台帳**チームはコードベースの更新、技術負債の減少、中間期ハードフォークの準備に取り組んできました。[CDDLの改良](https://github.com/IntersectMBO/cardano-ledger/pull/4996)に主眼を置いた結果、可読性が向上し、Byron期にまでさかのぼる長期にわたるエラーが修正されました。 

CDDL生成ツールの改良により、可読性をさらに向上させました。`ghc-8.10`のサポート終了を決定したことで、高度なコンパイラー機能を活用した安全性チェックの統合が可能になりました。これに伴い、多数のパフォーマンス最適化や、その他の重要な技術負債の解消も実行されました。

今年後半に予定されている中間期ハードフォークの準備も始めました。

ハードフォークに備えてもう1つバグを修正し、現在ネストされたトランザクションに関する予備的な作業を行っています。

### スケーリング

**Mithril**チームは`2524.0`ディストリビューションをリリースしました。このバージョンはCardanoノードv.10.4.1をサポートし、UTXO-HD台帳ステータススナップショットを変換するための新しいMithrilクライアントCLIコマンドを導入しています。また、さまざまなバグ修正や改良も含まれています。

[バイナリーエンコーディングへの切り替え](https://github.com/input-output-hk/mithril/issues/2536)の第一段階を完了し、引き続き第二段階の標準ライブラリーリファクタリングに取り掛かりました。Mithrilを使って既存のCardanoデータベースを検証する新しいコマンドをクライアントCLIに実装しました。Pallasライブラリーの`n2c local message submission`と`n2c local message notification`を使って、DMQネットワーク用の[publisher](https://github.com/input-output-hk/mithril/issues/2539)と[consumer](https://github.com/input-output-hk/mithril/issues/2540)を実装しました。

クライアントCLIの台帳ステータススナップショットを改良し、[STM暗号ライブラリーのリファクタリング作業](https://github.com/input-output-hk/mithril/issues/2369)を続けました。

**Leios**チームはシミュレーション分析ツールの改良ともっと実用的なネットワークトポロジーの作成に注力しました。主な成果には、高度なデータ抽出機能によるトレースプロセッサーの強化、繰り返し実験を行うためのより小さく効率的な「ミニチュアメインネット」トポロジーの開発が挙げられます。

詳細は、[Leios週刊更新情報](https://leios.cardano-scaling.org/news/2025/06/10/weekly-progress-summary)をご覧ください。

### CATALYST

**Project Catalyst**は[第194回タウンホール](https://x.com/Catalyst_onX/status/1935383828845232539)を開催しました。まもなく200回に達する勢いです。[プロジェクトクローズアウトに関する最近の動画](https://www.youtube.com/watch?v=bSXbTjhCLAc)を詳しく検証し、過去3回の資金調達ラウンドから得られた主要なハイライトと教訓を共有しました。

[「Under the Hood」シリーズ](https://x.com/Catalyst_onX/status/1935744390762574163)のエピソード3をリリースしました。このエピソードでは、シニアプロダクトデザイナーのNiels Kijfが議論に参加し、ユーザーエクスペリエンス、Catalystが分散型世界の未来をどのように形作るか、そしてそのビジョンがProject Catalystでどのように実現されているかについて深く掘り下げました。

毎月50近いプロジェクトが完了しています。Catalystでは今週末に最近完了し、資金調達を受けたプロジェクトの一部をハイライトします。どうぞお楽しみに。

### 教育

教育チームは来週東京科学大学で開催されるCardano Daysイベントの準備をしています。開催日は6月24日、25日です。現在[登録](https://t.co/RCNjzyABoW)を受け付けています。

CEP（Cardano教育プログラム）の作業も進んでいます。このプログラムは自分のペースで学習できるモジュールをシリーズで提供しており、Cardanoのあらゆる側面をカバーし、学習パスの提案やオプションモジュールも含まれています。
