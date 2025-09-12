---
title: Weekly development report as of 2025-09-12
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/f6dfe598-8cbd-4068-ba01-6bbecaf53a7e/
image_text: Weekly development report as of 2025-09-12
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continued to experience steady growth, highlighted by several key metrics. The number of projects being built on Cardano remained at 2,009, while the number of delegated wallets increased to 1.34 million. There was significant expansion in smart contract development, with 142,485 Plutus scripts and 10,772 Aiken scripts created. On-chain activity also saw an increase, with total transactions rising to 113.68 million. Developer activity stayed consistent, as evidenced by 320 GitHub commits made this week.

In other news:

*   [Yoroi](https://x.com/YoroiWallet/status/1966143456121860282) Extension v.5.13.0 was released, introducing a new success screen for Midnight claims and improved localization for Japanese speakers.
    
*   [Sundial Protocol](https://x.com/SundialProtocol/status/1965706912650973588) announced a partnership with USDM to explore integrations between the stablecoin and Sundial’s Bitcoin layer 2.
    
*   [MuesliSwap](https://x.com/MuesliSwapTeam/status/1966231896418824306) launched the pilot phase of their open-source, developer-focused wallet — DevX Cardano.
    
*   [Midnight Network](https://x.com/MidnightNtwrk/status/1963947481672368315) partnered with Webisoft to build an institutional-grade dark pool trading platform.
    
*   [Fluid Tokens](https://x.com/FluidTokens/status/1962553691782672500) released the audit report for version 3 of their decentralized lending platform.
    
*   The Cardano Tech Summit LATAM 2025 will take place on October 15, 2025, in Rio de Janeiro.
    
*   Input | Output Launches [2025 Asia Tour](https://iohk.io/en/newsroom/input-output-launches-2025-asia-tour)_._
    

### CORE TECHNOLOGY

The **ledger** team made progress on the Dijkstra-era tasks needed to implement the guards outlined in [CIP-112](https://cips.cardano.org/cip/CIP-0112) and completed work on features for the upcoming intra-era hard fork. Additionally, the team delivered structural improvements, which included a rework of stake pool representation and the organization of the test suite. Finally, they released all ledger packages and prepared them for the upcoming cardano-node v.10.6 release.

### SCALING

This week, the **Mithril** team updated the CIP of the DMQ protocol and its implementation in Pallas and Mithril nodes, introducing changes to the message structure and the [n2c local notification](https://github.com/input-output-hk/mithril/issues/2673) mini-protocol. They also worked on preparing the pre-release of the [2537 distribution](https://github.com/input-output-hk/mithril/issues/262) and continued collaborating with the innovation team on prototyping a SNARK-proving circuit for Mithril certificates. Additionally, the team continued prototyping a Mithril/Cardano bundle within a [Docker image](https://github.com/input-output-hk/mithril/issues/2616).

Finally, they enhanced the CI workflows used to verify the integrity of a restored Cardano database and made progress refactoring the STM cryptographic library.

### VOLTAIRE

Cardano has reached a major milestone with the first fully community-elected constitutional committee now in place. Seven members were chosen through a DRep-led vote, marking the transition from an interim committee (which included founding entities) to one governed entirely by the community.

This shift strengthens Cardano’s decentralization, ensures constitutional oversight of governance actions, and sets a precedent for transparent, accountable decision-making.

A new election season begins at Intersect with the board elections in September, followed by the committee elections in October. 

The number of elected board members increases from two to four. Doesn’t sound very important until you realize that the board has seven seats, so for the first time, the majority of the board is directly elected by Intersect members.

Then, in October, about half the seats in each of Intersect’s seven committees will be up for election. The partial changeover allows the existing members to pass on the corporate knowledge to the new ones, who will bring fresh ideas and perspectives.

Key dates:

**Board**

*   Application opens September 1, noon UTC
    
*   Application closes September 12, noon UTC
    
*   Voting opens September 15, noon UTC
    
*   Voting closes September 26, noon UTC
    
*   Audit starts September 27, noon UTC
    
*   Audit results September 29, noon UTC
    
*   Results shown September 30.
    

**Committees**

*   Application opens October 1, noon UTC
    
*   Application closes October 14, noon UTC
    
*   Voting opens October 16, noon UTC
    
*   Voting closes October 29, noon UTC
    
*   Audit starts October 30, noon UTC
    
*   Audit results November 2, noon UTC 
    
*   Results shown November 3.
    

### CATALYST

Project **Catalyst** has recently held town hall #205, featuring guests from [Digifarm](https://digifarm.io/about) who presented their [Fund12 project](https://projectcatalyst.io/funds/12/cardano-use-cases-mvp/satellite-agriculture-dapps-with-digifarm-and-nmkr). This initiative utilizes satellite imagery, AI, and Cardano NFTs to integrate smallholder farms into the digital economy. By creating on-chain field identities, Digifarm facilitates fairer access to credit and insurance, promoting long-term, sustainable growth. If you missed the session, you can [watch the recording](https://www.youtube.com/live/O6X6N6zM_Gs?si=doyxFsH5m3aIxzkf).

Additionally, the moderation period has officially started, with 172 level 2 moderators now active. Together, they are tackling an impressive  1,033 reviews. The moderation phase will continue until September 17 at 6 AM UTC, which marks the next significant milestone in the Fund14 process.

### EDUCATION

This week, the **education** team analyzed community feedback on [Mastering Cardano](https://book.io/book/mastering-cardano/) and finalized more content for the self-paced Cardano education program.

The team is also preparing for the next Cardano Days event – a two-day in-person education event at the University of Wyoming on September 26-27, 2025. This event is a key component of the wider [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration is officially open on the[Luma page](https://lu.ma/g436so6c).  
  
![](https://ucarecdn.com/fa165115-6e9a-4454-a2e8-3401700ed333/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは、複数の主要メトリクスが示すように着実な進歩を続けています。Cardanoで構築中のプロジェクト数は2,009件、委任済みウォレット数は134万と横ばいでした。スマートコントラクトの開発は大幅に拡大し、14万2,485のPlutusスクリプトと1万772のAikenスクリプトが作成されました。オンチェーン活動も増加し、総トランザクション数は1億1,368万に達しました。今週のGitHubコミット数320件に示されるように、開発者の活動は一貫しています。

その他のニュース：

*   [Yoroi](https://x.com/YoroiWallet/status/1966143456121860282) がExtension v.5.13.0リリース。Midnight の請求のための新しい完了画面が導入されたほか、日本語ローカライズが向上
    
*   [Sundial Protocol](https://x.com/SundialProtocol/status/1965706912650973588)は、ステーブルコインとSundialのBitcoin Layer 2の統合を目指してUSDMとの提携を発表
    
*   [MuesliSwap](https://x.com/MuesliSwapTeam/status/1966231896418824306)がオープンソースの開発者向けウォレット、DevX Cardanoのパイロット版を公開
    
*   [Midnight Network](https://x.com/MidnightNtwrk/status/1963947481672368315)は、機関投資家向けのダークプール取引プラットフォームを構築するためにWebisoftと提携
    
*   [Fluid Tokens](https://x.com/FluidTokens/status/1962553691782672500)は分散型貸付プラットフォームのバージョン3の監査レポートをリリース
    
*   2025年10月15日リオデジャネイロでCardano Tech Summit LATAM 2025開催。
    
*   Input | Output、[2025アジアツアー](https://iohk.io/en/newsroom/input-output-launches-2025-asia-tour)開始
    

### コアテクノロジー

台帳チームは、[CIP-112](https://cips.cardano.org/cip/CIP-0112)で概説されているガードを実装するために必要なDijkstra期のタスクを進め、次回開発期内ハードフォークの機能に関する作業を完了しました。ステークプールの表現の再構築とテストスイートの整理を含む構造的な改善を行いました。すべての台帳パッケージをリリースし、次回Cardano-node v.10.6リリースに向けての準備を行いました。

### スケーリング

**Mithril**チームはDMQプロトコルのCIPと、PallasノードとMithrilノードのその実装を更新し、メッセージ構造と[n2cローカル通知](https://github.com/input-output-hk/mithril/issues/2673)ミニプロトコルに変更を加えました。[2537ディストリビューション](https://github.com/input-output-hk/mithril/issues/262)のプレリリース版の準備に取り組み、引き続きイノベーションチームと協力して、Mithril証明書のためのSNARK証明回路のプロトタイプ作成に取り組みました。[Dockerイメージ](https://github.com/input-output-hk/mithril/issues/2616)内でのMithril/Cardanoバンドルのプロトタイプ作成を続けました。

復元されたCardanoデータベースの整合性を検証するためのCIワークフローを強化し、STM暗号ライブラリーのリファクタリングを進めました。

### VOLTAIRE

Cardanoは、100%コミュニティ選出による初の憲法委員会が設置され、大きなマイルストーンを達成しました。7名のメンバーはDRep主導の投票によって選ばれ、これにより、創設機関を含んでいた暫定委員会から、完全にコミュニティによって統治される委員会への移行が実現しました。

この移行は、Cardanoの分散性を強化し、ガバナンスアクションに対する憲法面からの監督を確実なものにするとともに、透明性と説明責任のある意思決定の先例を確立します。

Intersectでは、9月に理事会選挙、続いて10月に委員会選挙と、新たな選挙シーズンが始まります。 

選出される理事の数は2人から4人に増加します。理事会の席が7席であることを考えると、この数字の重要性がわかるでしょう。そう、今回初めて、理事会の過半数がIntersectのメンバーによって直接選出されることになるのです。

続いて10月には、Intersectの7つの各委員会で、およそ半数の席が選挙の対象となります。この部分的な交代により、既存のメンバーは組織の知識を新しいメンバーに引き継ぐことができ、新しいメンバーは新鮮なアイデアと視点をもたらすことができます。

主要日程（すべて日本時間）

**理事会**

*   応募受付開始：9月1日午後9時
    
*   応募締切：9月12日午後9時
    
*   投票開始：9月15日午後9時
    
*   投票締切：9月26日午後9時
    
*   監査開始：9月27日午後9時
    
*   監査結果：9月29日午後9時
    
*   結果発表：9月30日
    

**委員会**

*   応募受付開始：10月1日午後9時
    
*   応募締切：10月14日午後9時
    
*   投票開始：10月16日午後9時
    
*   投票締切：10月29日午後9時
    
*   監査開始：10月30日午後9時
    
*   監査結果：11月2日午後9時 
    
*   結果発表：11月3日
    

### CATALYST

Project **Catalyst**は先日、ゲストに[Digifarm](https://digifarm.io/about)を迎えて第205回タウンホールを開催しました。Digifarmは、[Fund12のプロジェクト](https://projectcatalyst.io/funds/12/cardano-use-cases-mvp/satellite-agriculture-dapps-with-digifarm-and-nmkr)について紹介しました。このイニシアチブは、衛星画像、AI、Cardano NFT を活用して、小規模農家をデジタル経済に統合するものです。Digifarmは、オンチェーンで農地のIDを作成することで、信用や保険へのより公平なアクセスを促進し、長期にわたる持続可能な成長を促しています。このセッションを見逃した場合は、[録画](https://www.youtube.com/live/O6X6N6zM_Gs?si=doyxFsH5m3aIxzkf)をご覧ください。

モデレーションが公式に開始され、172人のレベル2モデレーターが現在1,033のレビューに取り組んでいます。モデレーション段階は日本時間9月17日午後3時まで続き、Fund14プロセスの次の重要なマイルストーンとなります。

### 教育

**教育**チームは、『[Mastering Cardano](https://book.io/book/mastering-cardano/)』に関するコミュニティのフィードバックを分析し、自習型のCardano教育プログラムのさらなるコンテンツをまとめています。

2025年9月26日、27日にワイオミング大学で開催される2日間の対面イベント、Cardano Daysイベントの準備も進めています。これは、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)の主要イベントです。登録は[Lumaページ](https://lu.ma/g436so6c)で公式に受付中です。
