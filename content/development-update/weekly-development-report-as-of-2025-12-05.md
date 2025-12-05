---
title: Weekly development report as of 2025-12-05
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2d7c2e01-9bdb-4329-a590-85aca666b5f7/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week, Cardano native tokens increased to 11.03m, token policies reached 224,455, and transactions climbed to 116.32m. Delegated wallets held strong at 1.34m, while DReps rose to 1,538. The builder ecosystem remained active with 2,020 projects (836 non-NFT, 1,184 NFT) building, and development activity recorded 323 GitHub commits.

In other news:

*   The [Cardano Foundation’s](https://x.com/Cardano_CF/status/1993606467711095090) accelerator program is now open for applications
    
*   [Midnight](https://x.com/MidnightNtwrk/status/1996224902404218968) is now an enterprise member of Intersect
    
*   [Midnight’s native token](https://x.com/midnightfdn/status/1996569677418385720), NIGHT, is now officially live as a Cardano native asset.
    

### CORE TECHNOLOGY

This week, the **ledger** team completed the full Haskell definition and binary representation of nested transactions, along with the corresponding CDDL specification. Additionally, they addressed technical debt, added the ability to inject a cost model for any Plutus version at startup for testing and benchmarking, optimized memory accounts representation, and improved the usability of several predicate failures.

The team also made good progress on enhancing the CDDL specification with cuddle, which will help reduce code duplication and strengthen property-based testing of CDDL conformance.

### WALLETS AND SERVICES

This week, the **Lace** team launched [v.1.32](https://x.com/lace_io/status/1995803382754542058?s=46&t=KH7Ar_LX82ElBgTR404n8g), introducing the new notification center. This feature delivers real-time, cryptographically verified updates from Lace and key ecosystem partners directly in the wallet, helping users stay informed about governance activities and ecosystem news.

This version also enables the Midnight Foundation to share updates with NIGHT holders as the ecosystem grows. The team is now preparing broader subscription options, expanded Web3 coverage, and future mobile support.

Learn more in this [blog post](https://www.lace.io/blog/lace-v1-32).

### SCALING

This week, the **Mithril** team kept focusing on the SNARK-friendly STM library, completing the [Schnorr signature scheme](https://github.com/input-output-hk/mithril/issues/2756) and modules [reorganization](https://github.com/input-output-hk/mithril/issues/2793), and implementing some wrappers for the Jubjub backend. They also progressed on specifying the non-recursive SNARK circuit, assessing constraints on Halo2 verification keys, prototyping the [recursive SNARK](https://github.com/input-output-hk/mithril/issues/2767) solution, and prototyping the [Bitcoin DeFi](https://github.com/input-output-hk/mithril/issues/2818) prover with RISC Zero.

Additionally, they continued implementing a simple aggregator discovery mechanism, worked on improvements to the [protocol security page](https://github.com/input-output-hk/mithril/issues/2703), and completed enhancements to the [end-to-end tests](https://github.com/input-output-hk/mithril/issues/2781) to better support the introduction of new features and improve the reliability of the backward-compatibility test.

Finally, they worked on the second phase of the common aggregator client implementation and kept upgrading to Cardano node v.10.6.

The **Hydra** team implemented the ‘SafeClose’ [feature](https://github.com/cardano-scaling/hydra/issues/2330) and continued working on the [partial fanout](https://github.com/cardano-scaling/hydra/issues/1468) and [chain following approach](https://github.com/cardano-scaling/hydra/issues/2206). They also [ran a Hydra node](https://github.com/cardano-scaling/hydra/issues/2353) on a Raspberry Pi, added an API to r[etrieve the head start timestamp](https://github.com/cardano-scaling/hydra/issues/2316), and added [Blockfrost support](https://github.com/cardano-scaling/hydra/issues/2032) to the TUI. 

Finally, the team released [Hydra v.1.2.0](https://github.com/cardano-scaling/hydra/releases/tag/1.2.0). Hydra was also featured as a bonus track at the Cardano Hackathon 2025 during India Blockchain Week, where the winning team of the main Cardano track was a Hydra project. This marked Hydra’s first hackathon, with an impressive turnout of 400 participants.

### CATALYST

This week, the **Catalyst** town hall offered timely insights as the Fund15 process enters the review period. A _community reviewer_ and a _proposer_ were invited to share perspectives from both sides of the process, outlining what reviewers typically look for, how proposers can strengthen their submissions, and how each role supports a healthier evaluation ecosystem.

The Catalyst team also shared **key Fund15 updates** to help the community prepare for the next phase. Catch up with the video [here](https://youtube.com/live/jfz6DWrVNcA) or see the [deck](https://docs.google.com/presentation/d/1YnxazMS18Y5b1TSqFDEZZ4P8m_1A5kJF47uvoUauvKk/edit?usp=sharing).

Fund15 has officially wrapped up submissions, and the numbers reflect another strong round of community momentum. 540 proposers submitted a total of **761 proposals** across all challenge categories, showcasing the breadth of ideas driving innovation on Cardano.

The next phase is the community review period, where reviewers assess proposals, identify strengths and weaknesses, and provide clear insights to support informed voting. This stage plays a critical role in ensuring transparency, accountability, and effective community-driven decision making. Read more about the [review period here](https://forum.cardano.org/t/catalyst-weekly-126-761-proposals-from-540-proposers-whats-next/151679).

### VOLTAIRE

**Intersect** held its 2025 Annual Members’ Meeting as a 23-hour event spanning 12 time zones, using an interactive virtual space developed in cooperation with Clay Nation.

The event was livestreamed for its full runtime on the Intersect YouTube account, with over 200 live views on the day.

The virtual space had six dedicated breakout rooms, where participants could connect and discuss the year that had passed and the year ahead.

While this was a pilot of this new tool, with the expected bugs and learnings, it achieved something important. It created a shared space for members across time zones to connect, participate, and help shape the future of Intersect.

This pilot is not only a foundation for next year’s AMM but also a foundation for how Intersect will regularly connect with the community. The Intersect Virtual Hub will remain open and accessible to members via the Intersect members' area.

### EDUCATION

This week, the **education** team are on the ground at Florida International University delivering lectures on smart contracts and a Cardano node demonstration. Work is progressing on the self-paced content, which will be launching very soon.

![](https://ucarecdn.com/1b7f6622-7b7c-4333-9a05-e2b0308d2951/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週、Cardanoネイティブトークンは1.103万に増加し、トークンポリシーは22万4,455に達し、トランザクションは1億1.632万に上りました。委任済みウォレット数は134万と引き続き堅調で、DRepは1,538人に上昇しました。ビルダーのエコシステムも引き続きアクティブで、プロジェクト数は2,020（非NFT 836、NFT 1,184）を構築中であり、開発活動に関しては323のGitHubコミットを記録しました。

その他のニュース：

*   [Cardano財団](https://x.com/Cardano_CF/status/1993606467711095090)のアクセラレータープログラムは現在申請受付中
    
*   [Midnight](https://x.com/MidnightNtwrk/status/1996224902404218968)がIntersectのエンタープライズメンバーに
    
*   [Midnightのネイティブトークン](https://x.com/midnightfdn/status/1996569677418385720)NIGHTは、Cardanoのネイティブアセットとして正式に稼働中
    

### コアテクノロジー

**台帳**チームは、対応するCDDL仕様と共に、ネストされたトランザクションの完全なHaskell定義とバイナリ表現を完了しました。技術負債に対処し、テストとベンチマーキング用に、起動時に任意のPlutusバージョンのコストモデルを注入する機能を追加したほか、メモリー勘定の表現を最適化し、述語失敗のユーザビリティを改善しました。

コードの重複を減らし、CDDL適合性のプロパティベーステストの強化に役立つcuddleを使用したCDDL仕様の強化で大きな進捗を遂げました。

### ウォレットとサービス

**Lace**チームは[v.1.32](https://x.com/lace_io/status/1995803382754542058?s=46&t=KH7Ar_LX82ElBgTR404n8g)をリリースし、新しい通知センターを導入しました。この機能は、Laceと主要なエコシステムパートナーからのリアルタイムで暗号的に検証された更新情報をウォレットに直接配信し、ユーザーがガバナンス活動やエコシステムのニュースについて最新の情報を得られるようにします。

このバージョンでは、エコシステムが成長する中で、Midnight FoundationがNIGHT保有者と更新情報を共有することもできます。現在、サブスクリプションオプションの拡大、Web3カバレッジの拡張、将来のモバイルサポートを準備しています。

詳細は、こちらの[ブログ記事](https://www.lace.io/blog/lace-v1-32)をご覧ください。

### スケーリング

**Mithril**チームはSNARKに適したSTMライブラリーに引き続き焦点を当て、[シュノア署名スキーム](https://github.com/input-output-hk/mithril/issues/2756)とモジュールの[再編成](https://github.com/input-output-hk/mithril/issues/2793)を完了し、Jubjubバックエンド用のいくつかのラッパーを実装しました。非再帰的なSNARK回路の指定を進め、Halo2検証キーに対する制約を評価し、[再帰的なSNARK](https://github.com/input-output-hk/mithril/issues/2767)ソリューションのプロトタイプを作成し、RISC Zeroを使用して[Bitcoin DeFi](https://github.com/input-output-hk/mithril/issues/2818)プルーバーのプロトタイプを作成しました。

シンプルなアグリゲーター発見メカニズムの実装を継続し、プロトコルセキュリティページの改善に取り組み、新機能の導入サポート改善、後方互換性テストの信頼性向上を目指した[エンドツーエンドテスト](https://github.com/input-output-hk/mithril/issues/2781)の強化を完了しました。

共通アグリゲータークライアント実装の第2フェーズに取り組み、Cardanoノードv.10.6へのアップグレードを続けました。

**Hydra**チームは‘SafeClose’[機能](https://github.com/cardano-scaling/hydra/issues/2330)を実装し、[部分的なファンアウト](https://github.com/cardano-scaling/hydra/issues/1468)と[チェーン追従アプローチ](https://github.com/cardano-scaling/hydra/issues/2206)に関する作業を継続しました。Raspberry Piで[Hydraノードを実行](https://github.com/cardano-scaling/hydra/issues/2353)し、[headの開始タイムスタンプを取得](https://github.com/cardano-scaling/hydra/issues/2316)するためのAPIを追加し、TUIに[Blockfrostのサポート](https://github.com/cardano-scaling/hydra/issues/2032)を追加しました。 

[Hydra v.1.2.0](https://github.com/cardano-scaling/hydra/releases/tag/1.2.0)をリリースしました。HydraはIndia Blockchain Week期間中のCardano Hackathon 2025でボーナストラックとして紹介されました。このとき、Cardanoのメイントラックの優勝チームがHydraプロジェクトでした。これはHydraにとって初めてのハッカソンであり、400人もの参加者がありました。

### CATALYST

**Catalyst**タウンホールでは、Fund15のプロセスがレビュー期間に入るにあたり、時宜を得た洞察が提供されました。プロセスの両サイドからの視点を共有するため、「コミュニティレビュアー」と「提案者」が招待されました。レビュアーが通常何を求めているか、提案者が提出物をどのように強化できるか、それぞれの役割がより健全な評価エコシステムをどのようにサポートしているかを概説しました。

コミュニティが次のフェーズの準備をするのに役立つFund15の重要な更新情報も共有されました。[この](https://youtube.com/live/jfz6DWrVNcA)動画でキャッチアップするか、[デッキ](https://docs.google.com/presentation/d/1YnxazMS18Y5b1TSqFDEZZ4P8m_1A5kJF47uvoUauvKk/edit?usp=sharing)をご覧ください。

Fund15の提出は正式に締め切られました。その数字は、このラウンドがまたしてもコミュニティの勢いを反映する強力なものであることを示しています。すべてのチャレンジカテゴリーを通じて**540人の提案者**が合計**761の提案**を提出しました。これは、Cardanoのイノベーションを推進するアイデアの幅広さを物語っています。

次のフェーズはコミュニティレビュー期間です。ここでは、レビュアーが提案を評価し、強みと弱みを特定し、情報に基づいた投票をサポートするために明確な洞察を提供します。この段階は、透明性、説明責任、コミュニティ主導による効果的な意思決定を確実にする上で、重要な役割を果たします。レビュー期間についての詳細は[こちら](https://forum.cardano.org/t/catalyst-weekly-126-761-proposals-from-540-proposers-whats-next/151679)をご覧ください。

### VOLTAIRE

**Intersect**は、Clay Nationと協力して開発したインタラクティブな仮想空間を使用し、12のタイムゾーンにまたがる23時間のイベントとして2025年年次総会（AMM）を開催しました。

このイベントは、IntersectのYouTubeアカウントですべて生配信され、当日は200以上のライブ視聴がありました。

この仮想スペースには6つの専用ブレイクアウトルームが設けられ、参加者はつながり、行く年と来る年について議論することができました。

これはこの新しいツールのパイロットであり、想定していたようにバグや教訓を得ただけでなく、重要なことを達成しました。さまざまなタイムゾーンからのメンバーがアクセスし、参加し、Intersectの未来を形作るための共有スペースを創出したのです。

この試験運用は、来年のAMMのための基盤となるだけでなく、Intersectがコミュニティと定期的につながる方法の基盤にもなります。Intersectの仮想ハブは、Intersectメンバーエリアを介して開かれたままとなっており、メンバーがアクセス可能です。

### 教育

**教育**チームはフロリダ国際大学（FIU）に現地入りし、スマートコントラクトに関する講義とCardanoノードのデモンストレーションを実施しています。自習型コンテンツに関する作業は進行中で、まもなく配信される予定です。
