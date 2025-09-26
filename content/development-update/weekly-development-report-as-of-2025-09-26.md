---
title: Weekly development report as of 2025-09-26
tags:
  - Weekly development updates
  - Development
  - Statistics
  - Ecosystem
url: ""
image: https://ucarecdn.com/7f4e7599-accc-478e-a58f-030bd629bfe0/
image_text: Weekly development report as of 2025-09-26
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to expand, with 2,013 projects building, including 828 non-NFT and 1,185 NFT projects. Delegated wallets remained steady at 1.34 million, while on-chain activity reached 10.92 million native tokens and 221,898 token policies. Transactions increased to 114.15 million, and the number of registered DReps rose to 1,495. Development activity was particularly strong, with 378 GitHub commits, reflecting an 18.13% increase week-on-week.

In other news:

*   Input | Output (IO) was in South Korea this week, taking part in the Korea Blockchain week. IO’s next stop on the Asia tour is Hồ Chí Minh City, Vietnam, with a [Cardano community event](https://luma.com/2o93sm3s) taking place on September 27. The team will then head to Singapore for Token2049, from October 1 to 2, where there will be a dedicated Cardano booth presence funded by the community.
    
*   This week, the IO Research team submitted its finalized mid-year [Fundamental Research](https://static.iohk.io/ior/IOR_Mid-Year_Fundamental_Research_Report_2025.pdf) and [Technology Validation](https://static.iohk.io/ior/IOR_Mid-Year_Technology_Validation_Report_2025.pdf) reports to Intersect, following a three-week community consultation.
    

### CORE TECHNOLOGY

This week, the **benchmarking** team implemented feature benchmarks for the new transaction submission logic and generalized on-disk benchmark profiles. They also introduced a new tracing system for `cardano-submit-api` and laid the groundwork for node conformance testing, now applied to metrics. Additionally, the team worked on incorporating support for the upcoming Dijkstra era into the benchmark tooling and created a library package and API from cardano-tracer to support dedicated trace consumer applications.

The **ledger** team improved withdrawal predicate failure reporting, which will become available with the next intra-era hard fork. The team also explored a potential Haskell representation for transaction levels related to CIP-118, comparing sub-transactions with top-level transactions. Additionally, they performed code cleanup and enhanced the test suite. Beyond development, the ledger team participated in the Node Diversity Workshop, which brought together contributors from all alternative node implementations currently in progress.

### WALLETS AND SERVICES 

This week, the **Lace** team released [Lace v1.29](https://x.com/lace_io/status/1970489515484574190?s=46&t=KH7Ar_LX82ElBgTR404n8g), extending Trezor integration to support all master key generation schemes for Cardano, including ICARUS (the standard scheme used by software wallets), ICARUS\_TREZOR (a Trezor-specific variant required for 24-word mnemonics), and LEDGER (Ledger’s implementation for hardware wallets). This update ensures accurate restoration and smooth migrations across devices and wallet software.

### SMART CONTRACTS

The UPLC Programming Language Conference 2025 is coming soon! From October 27–30, [UPLC 2025](https://services.iohk.io/uplc) will feature keynotes and sessions that dive deep into the foundation, current status, and future of Cardano’s programming languages. Highlights include Philip Wadler’s keynote on the history of Plutus Core, workshops on Aiken, Plutarch, and the UPLC-CAPE benchmark, along with a variety of presentations and panel discussions. Developers will explore topics such as UPLC costing, compilation to RISC-V, debugging tools, certified compilation, and the evolution of Cardano’s high-assurance mission.

Cardano’s programming language ecosystem has reached a point of exciting momentum, with multiple languages, tools, and approaches flourishing. UPLC 2025 provides a space to bring everyone involved together to learn from each other, celebrate achievements, exchange insights, and inspire the next wave of tools.

### SCALING

This week, the **Mithril** team released the `2537.0` [distribution](https://github.com/input-output-hk/mithril/releases/tag/2537), which provides support for Cardano node v.10.5.1, stabilizes commands of the client CLI, provides support for ARM pre-built binaries, and includes various bug fixes and improvements.

The team also completed updating the CIP of the DMQ protocol and its implementation in Pallas and Mithril nodes, introducing changes to the message structure and the [n2c local notification](https://github.com/input-output-hk/mithril/issues/2673) mini-protocol. They continued working on the preparatory phase of decentralizing configuration parameters and on supporting multiple proof systems in the [STM library](https://github.com/input-output-hk/mithril/issues/2680).

Finally, a part of the team attended the Node Diversity Workshop #2 event in Toulouse, France, and began testing the integration of the [Haskell DMQ node](https://github.com/input-output-hk/mithril/issues/2674) with the Mithril nodes.

The **Hydra** team enabled [recovering deposits](https://github.com/cardano-scaling/hydra/issues/1812) when a head is closed and made progress on [staying in sync](https://github.com/cardano-scaling/hydra/issues/2206) with the chain, even without head logic events. They improved Blockfrost [error reporting](https://github.com/cardano-scaling/hydra/issues/2194) following a user-reported issue and added configurable wait times for Blockfrost. The team also introduced [partial commits](https://github.com/cardano-scaling/hydra/issues/2180) for tokens, fixed an issue where the TUI did not list committed UTXOs, and implemented more permissive statefile reading to handle cases with invalid JSON.

### VOLTAIRE

The voting period for the Intersect board elections has ended. An independent audit is now underway, and results will be announced on Tuesday, September 30.

The next elections to be held are for the seven Intersect committees, with about half the seats on each committee up for election. This process ensures that core business knowledge is preserved and passed on to new members.

Applications open on Wednesday, October 1, and close on Wednesday, October 15. Voting will open on Friday, October 17, and close on Wednesday, October 29, with results announced on Monday, November 3.

### CATALYST

The recent Catalyst **town hall #207** turned the spotlight on the [EMURGO LM × UNDP Accelerator](https://projectcatalyst.io/funds/13/cardano-partners-growth-and-acceleration/emurgo-lm-x-undp-accelerator-piloting-undps-project-pipeline-through-the-cardano-blockchain), giving the community a closer look at this exciting partnership.

The session featured:

*   An update on the accelerator and its progress so far
    
*   Stories from the **Solution Makers’ projects**, sharing their journey and experiences inside the program
    
*   A lively **fireside chat** with both proposers and participants, offering insights into how the accelerator is helping projects scale real-world impact
    
*   And finally, a **Fund14 update**, keeping the community aligned on what’s ahead for Catalyst.
    

It was a rich discussion showcasing how Catalyst continues to connect global innovation with blockchain-driven solutions. If you missed it, be sure to watch the [recording](https://youtube.com/live/s1qe9FPYOYE?feature=share) and see how these initiatives are shaping the future.

Besides this, it was also announced that the Catalyst team will embark on their own Asia tour. Check out where to catch them below and register for the events:

*   **Vietnam, Ho Chi Minh City** \- Sept 26–29 – [register here](https://luma.com/2o93sm3s)
    

*   **Singapore · Token 2049**  \- Sept 30–Oct 3 – register [here](https://luma.com/5ceh7zuh?tk=Tsia5h)
    

*   **Osaka & Tokyo, Japan** \- Oct 3–9 – Tokyo Side Event: register [here](https://luma.com/3hpbbt0p)**.**
    

### EDUCATION

This week, the team is delivering the two-day in-person Cardano Days event at the University of Wyoming, on September 26-27. This event is a significant part of the larger [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration for [Day 1](https://luma.com/vxkw94l7) and [Day 2](https://luma.com/re789k86) is open on the Luma pages.

Additionally, the team is preparing for [Token2049](https://www.asia.token2049.com/) in Singapore next week.

![](https://ucarecdn.com/6b72daa6-7dc2-492f-8e1f-bb63dbf62360/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは拡大を続けており、2,013のプロジェクトが構築されています。そのうち828が非NFT、1,185がNFT関連です。委任済みウォレット数は134万で安定しており、オンチェーンアクティビティはネイティブトークンが1,092万、トークンポリシーが22万1,898に達しました。トランザクション数は1億1,415万件、DRep登録者数は1,495に上ります。開発活動は特に活発で、GitHubのコミット数は前週比18.13%増の378件を示しています。

その他のニュース：

*   Input | Output (IO)は今週韓国でKorea Blockchain Weekに参加しました。アジアツアーの次の目的地は、ベトナムのホーチミン市で、9月27日に[Cardanoコミュニティイベント](https://luma.com/2o93sm3s)が開催されます。その後チームは10月1日から2日までシンガポールのToken2049に参加します。ここには、コミュニティから資金提供を受けたCardano専用ブースが設えられています。
    
*   今週、IO Researchチームは、3週間のコミュニティ協議を経て、基礎研究および技術検証中間報告書の最終版をIntersectに提出しました。
    

### コアテクノロジー

**ベンチマーク**チームは新しいトランザクション送信ロジックの機能ベンチマークを実装し、オンディスクベンチマークプロファイルを汎用化しました。`cardano-submit-api`に新しいトレースシステムを導入し、ノード適合性テストの基礎を築きました。これは現在メトリクスに適用されています。今後登場するDijkstra期のサポートをベンチマークツールに組み込む作業を始め、専用のトレースコンシューマーアプリケーションをサポートするためにcardano-tracerからライブラリーパッケージとAPIを作成しました。

**台帳**チームは、引き出し述語の失敗報告を改善しました。これは次の開発期内ハードフォークで利用できるようになる予定です。CIP-118に関連するトランザクションレベルのHaskellでの表現方法を探求し、サブトランザクションとトップレベルトランザクションを比較しました。コードのクリーンアップとテストスイートの強化も実施しました。開発以外では、Node Diversityワークショップに参加しました。このワークショップには、現在進行中のすべての代替ノード実装の貢献者が集まりました。

### ウォレットとサービス 

**Lace**チームは[Lace v1.29](https://x.com/lace_io/status/1970489515484574190?s=46&t=KH7Ar_LX82ElBgTR404n8g)をリリースし、Trezorとの統合を拡張しました。これにより、Cardanoで利用可能なすべてのマスターキー生成スキーム（ICARUS - ソフトウェアウォレットで使われる標準スキーム、ICARUS\_TREZOR - 24単語のニーモニックに必要なTrezor特有の派生スキーム、LEDGER - Ledgerハードウェアウォレットの実装）をサポートします。この更新により、デバイスやウォレットソフトウェアをまたいだ、正確な復元とスムーズな移行が保証されます。

### スマートコントラクト

UPLC Programming Language Conference 2025がまもなく開催されます。10月27日から30日まで開催される[UPLC 2025](https://services.iohk.io/uplc)では、Cardanoのプログラミング言語の基礎、現状、将来について深く掘り下げる基調講演やセッションが行われます。ハイライトとして、Philip WadlerによるPlutus Coreの歴史に関する基調講演、Aiken、Plutarch、UPLC-CAPEベンチマークに関するワークショップ、多岐にわたるプレゼンテーションやパネルディスカッションが予定されています。開発者は、UPLCのコスト計算、RISC-Vへのコンパイル、デバッグツール、証明付きコンパイル、Cardanoの高保証ミッションの進化などのトピックを探求する予定です。

Cardanoのプログラミング言語エコシステムは、複数の言語、ツール、アプローチが発展し、目覚ましい勢いに達しています。UPLC 2025は、関係者全員が一堂に会し、互いに学び、成果を祝い、洞察を交換し、次なるツールの波を鼓舞するための場を提供します。

### スケーリング

**Mithril**チームは[2537.0ディストリビューション](https://github.com/input-output-hk/mithril/releases/tag/2537)をリリースしました。これはCardanoノードv.10.5.1のサポート、クライアントCLIのコマンドの安定化、ARM向けプレビルドバイナリへのサポートを提供し、さまざまなバグ修正と改善を含んでいます。

[DMQプロトコルのCIPとそのPallasおよびMithrilノードでの実装の更新を完了](https://github.com/input-output-hk/mithril/issues/2673)し、メッセージ構造とn2cローカル通知ミニプロトコルに変更を加えました。設定パラメーターの分散化に向けた準備段階の作業と、[STMライブラリー](https://github.com/input-output-hk/mithril/issues/2680)おける複数の証明システムのサポートの作業を続けました。

チームの一部はフランスのトゥールーズで開催されたNode Diversity Workshop #2イベントに参加し、[Haskell DMQノード](https://github.com/input-output-hk/mithril/issues/2674)とMithrilノードの統合テストを開始しました。

**Hydra**チームは、ヘッドがクローズされた際に[デポジットを回復](https://github.com/cardano-scaling/hydra/issues/1812)できるようにし、ヘッドロジックイベントが発生しなくてもチェーンと[同期を保つ](https://github.com/cardano-scaling/hydra/issues/2206)ための進捗を遂げました。ユーザーから報告された問題を受けて、Blockfrostの[エラー報告](https://github.com/cardano-scaling/hydra/issues/2194)を改善し、Blockfrost用に設定可能な待機時間を追加しました。トークンの[部分的なコミット](https://github.com/cardano-scaling/hydra/issues/2180)も導入し、TUIでコミットされたUTXOがリストされない問題を修正し、無効なJSONを含むケースを処理するためにより肝要なステートファイル読み取りを実装しました。

### VOLTAIRE

Intersectの理事会選挙の投票期間が終了しました。現在、独立監査が実施されており、結果は9月30日火曜日に発表される予定です。

次に実施される選挙は、Intersectの7つの委員会に関するもので、各委員会の議席の約半数が選挙対象となります。このプロセスによって、中核となる業務知識が確実に保持され、新メンバーに引き継がれます。

立候補の受付は10月1日水曜日から10月15日水曜日までとなります。投票は10月17日金曜日から10月29日水曜日までで、結果発表は11月3日月曜日です。

### CATALYST

**第207回タウンホール**では、[EMURGO LM×UNDPアクセラレーター](https://projectcatalyst.io/funds/13/cardano-partners-growth-and-acceleration/emurgo-lm-x-undp-accelerator-piloting-undps-project-pipeline-through-the-cardano-blockchain)に注目が集まり、このエキサイティングなパートナーシップの現状がコミュニティに詳しく紹介されました。

このセッションでは、以下の内容が特集されました。

*   アクセラレーターの最新情報と、これまでの進捗報告
    
*   **Solution Makersのプロジェクト**の事例。プログラムでのプロセスや経験を共有
    
*   提案者と参加者による活発な**ファイアサイドチャット**。アクセラレーターがプロジェクトの現実世界への影響をどのように拡大しているかについての洞察を提供
    
*   **Fund14の最新情報**。コミュニティにCatalystの今後の展望を提供
    

これは、Catalystがいかにグローバルなイノベーションとブロックチェーンを活用したソリューションを結びつけ続けているかを示す、実り豊かな議論となりました。見逃した方は、ぜひ[録画](https://youtube.com/live/s1qe9FPYOYE?feature=share)を視聴し、これらのイニシアチブがどのように未来を形作っているかをご覧ください。

Catalystチームが独自のアジアツアーに乗り出すことも発表されました。彼らに会える場所を以下でチェックし、イベントに登録してください。

*   **ベトナム、ホーチミン市** \- 9月26日～29日 – [登録はこちら](https://luma.com/2o93sm3s)
    

*   **シンガポール、Token 2049** \- 9月30日～10月3日 – 登録は[こちら](https://luma.com/5ceh7zuh?tk=Tsia5h)
    

*   **大阪&東京** - 10月3日～9日 – Tokyo Side Event：登録は[こちら](https://luma.com/3hpbbt0p)
    

### 教育

2025年9月26日、27日にワイオミング大学で2日間の対面イベント、Cardano Daysイベントが開催されます。これは、より大規模な[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)イベントで重要な位置を占めています。[1日目](https://luma.com/vxkw94l7)と[2日目](https://luma.com/re789k86)の登録はLumaのページで受け付けています。

来週シンガポールで開催される[Token2049](https://www.asia.token2049.com/)の準備にも取り組んでいます。
