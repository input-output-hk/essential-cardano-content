---
title: Weekly development report as of 2025-09-19
tags:
  - Statistics
  - Development
  - Weekly development updates
url: ""
image: https://ucarecdn.com/4210e16a-d4cd-40d4-8751-007ed89cdb24/
image_text: Weekly development report as of 2025-09-19
---

### ECOSYSTEM UPDATES

Cardano's ecosystem continues to expand. The number of ongoing projects stands at 2,009, while the number of delegated wallets saw a slight increase to 1.34 million. Asset activity remains steady, with 10.90 million native tokens issued across 221,636 token policies. Smart contracts have also grown, with 142,838 Plutus scripts and 10,906 Aiken scripts now operational on the network.

On-chain activity has risen, as evidenced by 113.92 million transactions recorded. Governance participation has strengthened, with 1,485 Delegated Representatives (DReps), of which 1,009 are active. Development efforts continue with 320 GitHub commits logged over the past week.

In other news, Input | Output is kicking off its 2025 Asia Tour, a multi-city journey designed to engage with local community members, developers, and Cardano enthusiasts. Centered on the narrative that the future of blockchain is built ‘by the many, for the many,’ the tour is an opportunity to listen to local voices and help write the next chapter of the ecosystem together. 

The tour officially begins in **Seoul, South Korea,** with Charles Hoskinson’s keynote presentation at Korea Blockchain Week on **Tuesday, September 23**. Following the events in Seoul, the team will travel to **Ho Chi Minh City, Vietnam**, and then to **Osaka and Tokyo in Japan** to continue connecting with the communities building the future of Web3.

The Input | Output Research team released both the [Fundamental Research](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-mid-year-report-fundamental-research-draft/148920) and [Technology Validation](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-mid-year-report-technology-validation-draft/148921) draft reports on August 29, 2025, initiating the 3-week community review period that provides a valuable opportunity for community members to contribute insights and expertise that will shape the final publications. The feedback process ends this weekend.

### CORE TECHNOLOGY

Over the past two weeks, the **consensus** team drafted an [architectural design](https://github.com/cardano-foundation/CIPs/pull/1078) aligned with Leios CIP-0164. A working [draft of the design](https://github.com/input-output-hk/ouroboros-leios/blob/nfrisby/draft-DESIGN/docs/DESIGN.md) document is now available. The team also updated the [hard fork combinator](https://github.com/IntersectMBO/ouroboros-consensus/pull/1681) to be Peras-aware.

### SMART CONTRACTS

The **Plutus** team has made progress on implementing [CIP-0153](https://cips.cardano.org/cip/CIP-0153), which introduces the `Value` built-in type and corresponding built-in functions that operate on these values. This work is expected to be completed in the coming weeks, with these new features set to be enabled during the upcoming intra-era hard fork.

Additionally, the team has advanced the UPLC-CAPE benchmark, which is designed to compare the performance of surface languages that target UPLC. They have added a third scenario, focusing on a two-party escrow.

Moreover, the team has merged the multi-scalar multiplication primitives from CIP-0133, which will also be enabled at the upcoming intra-era hard fork.

Finally, they are continuing to explore more efficient approaches to case analysis on `Data` in UPLC.

### SCALING

This week, the **Mithril** team created the pre-release for the \`[2537.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2537.0-pre)\` distribution, which provides support for Cardano node v.10.5.1, stabilizes commands of the client CLI, provides support for ARM pre-built binaries, and includes various bug fixes and improvements.

They kept updating the CIP of the DMQ protocol and its implementation in Pallas and Mithril nodes, introducing changes to the [message structure and the n2c](https://github.com/input-output-hk/mithril/issues/2673) local notification mini-protocol. They also completed the prototyping of a SNARK proving circuit for Mithril certificates in collaboration with the innovation team. Additionally, the team completed a prototype of a Mithril/Cardano bundle within a Docker image, which allows for a seamless start of a Mithril signer when starting a Cardano node in block producer mode.

Finally, they began working on the preparatory phase of [decentralizing configuration parameters](https://github.com/input-output-hk/mithril/issues/2691) and started implementing support for multiple proof systems in the [STM library](https://github.com/input-output-hk/mithril/issues/2568).

### VOLTAIRE

Voting in the Intersect board elections is open until September 26. Four board members will be elected from a candidate pool of 20 applicants. For the first time after this election, the majority of the Intersect board members will be directly elected by members of the member-based organization.

### CATALYST

At town hall #206, the team celebrated Catalyst’s 5th birthday by highlighting one of their most ambitious initiatives: the ‘alternative voting mechanism’ proposal.

Initially, Catalyst voting was a simple choice between yes, no, or abstain. However, as the community grew into the world’s largest decentralized innovation fund, new challenges emerged. These included concerns about the influence of large holders, fairness, and privacy (for example, public visibility of individual vote details).

To address these challenges, IOG Research, Photrek, and the Catalyst team collaborated to reimagine the voting process. They explored options such as quadratic voting, ranked-choice voting, and spend-voting to offer more nuanced ways for the community to express their opinions. They also investigated private voting or concealed participation while maintaining full transparency of results.

Over the past year, the team achieved six milestones. They studied global voting systems, modeled potential outcomes, and developed cryptographic protocols and early prototypes that offer insights into the future of Catalyst governance.

👉 If you missed this town hall, you can catch up [here](https://youtube.com/live/xdac6mUeX2Q) or read more about the proposal [here](https://projectcatalyst.io/funds/11/catalyst-systems-improvements-discovery/alternative-catalyst-voting-schemes-with-new-crypto-protocols-by-iog-research-photrek-and-the-catalyst-team).

### EDUCATION

This week, the **education** team analyzed community feedback on [Mastering Cardano](https://book.io/book/mastering-cardano/) and began planning the translation efforts for the book. They also finalized more content for the self-paced Cardano education program.

Furthermore, the team is preparing for the upcoming two-day in-person Cardano Days event at the University of Wyoming, scheduled for September 26-27, 2025. This event is a significant part of the larger [Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration for [Day 1](https://luma.com/vxkw94l7) and [Day 2](https://luma.com/re789k86) is officially open on the Luma pages.  
  
![](https://ucarecdn.com/f42a5745-1034-478a-9239-0e12e73db0ad/-/preview/-/format/auto/-/quality/smart/)  
  
エコシステム

統計

Cardanoエコシステムは拡大し続けています。進行中のプロジェクト数は2,009件、委任済みウォレット数は134万に増加しました。資産の活動も堅調で、22万1,636のトークンポリシー下で、1,090万のネイティブトークンが発行されました。スマートコントラクトも成長し、14万2,838のPlutusスクリプトと1万906のAikenスクリプトがネットワークで稼働しています。

オンチェーンの活動も増加し、トランザクション数は1億1392万を記録しました。ガバナンスへの参加は強化され、DRepは1,485人、うち1,009人がアクティブです。開発活動も続き、この1週間に320件のGitHubコミットが記録されました。

その他のニュース：

Input | Outputは、2025年アジアツアーを開始します。これは、現地のコミュニティメンバー、開発者、Cardanoの熱心なファンと交流するために企画された、複数の都市を巡る旅です。ブロックチェーンの未来は「多くの人々によって、多くの人々のために」築かれるという物語を中心に据え、このツアーは現地の声に耳を傾け、エコシステムの次の章を共に書き進める機会となります。ツアーは、**9月23日火曜日**に**韓国のソウル**で開催される韓国ブロックチェーンウィークでのCharles Hoskinsonによる基調講演から公式に始まります。ソウルでのイベントに続いて、チームは**ベトナムのホーチミン、** **そして大阪、東京**を訪れ、Web3の未来を構築するコミュニティとのつながりを深めていきます。

Input | Output Researchチームは、2025年8月29日に[Fundamental Research（基礎研究）](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-mid-year-report-fundamental-research-draft/148920)と[Technology Validation（技術検証）](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-mid-year-report-technology-validation-draft/148921)のドラフトレポートを公開しました。これにより、コミュニティメンバーが最終レポートを形成するための貴重な知見や専門知識を提供できる、3週間のレビュー期間が始まりました。フィードバックの募集は今週末で終了します。

### コアテクノロジー

この2週間、**コンセンサス**チームはLeiosのCIP-0164に沿った[構造設計](https://github.com/cardano-foundation/CIPs/pull/1078)を起草しました。作業中の[設計ドラフト](https://github.com/input-output-hk/ouroboros-leios/blob/nfrisby/draft-DESIGN/docs/DESIGN.md)は現在利用可能です。[ハードフォークコンビネーター](https://github.com/IntersectMBO/ouroboros-consensus/pull/1681)をPerasで認識できるように更新しました。

### スマートコントラクト

**Plutus**チームは、`Value`組み込み型と、その値で動作する対応する組み込み関数を導入するCIP-0153の実装を進めています。この作業は今後数週間で完了する見込みで、これらの新機能は次の開発期内ハードフォーク中に有効化される予定です。

UPLCをターゲットとするサーフェス言語のパフォーマンスを比較するために設計された、UPLC-CAPEベンチマークを進めました。二者間のエスクローに焦点を当てた3つめのシナリオを追加しました。

CIP-0133からの多倍長スカラー乗算プリミティブをマージしました。これも次の期内ハードフォークで有効化される予定です。

UPLCの`Data`に対するケース分析について、より効率的なアプローチの探求を続けています。

### スケーリング

**Mithril**チームは[2537.0-pre](https://github.com/input-output-hk/mithril/releases/tag/2537.0-pre)ディストリビューションのプレリリースを作成しました。これはCardanoノードv.10.5.1のサポート、クライアントCLIのコマンドの安定化、ARMプレビルドバイナリへのサポートを提供し、さまざまなバグ修正と改善を含んでいます。

DMQプロトコルのCIPとそのPallasおよびMithrilノードでの実装の更新を続け、[メッセージ構造とn2c](https://github.com/input-output-hk/mithril/issues/2673)ローカル通知ミニプロトコルに変更を加えました。イノベーションチームと協力して、Mithril証明書用のSNARK証明回路のプロトタイプを完成させました。Dockerイメージ内のMithril/Cardanoバンドルのプロトタイプも完成させました。これにより、ブロック生成者モードでCardanoノードを開始する際に、Mithril署名者をシームレスに起動できるようになります。

[設定パラメーターの分散化](https://github.com/input-output-hk/mithril/issues/2691)に向けた準備段階の作業を開始し、[STMライブラリー](https://github.com/input-output-hk/mithril/issues/2568)おける複数の証明システムのサポートの実装を始めました。

### VOLTAIRE

Intersect理事会選挙の投票は9月26日まで受け付けています。候補者20名の中から4名の理事が選出されます。今回の選挙後、初めてIntersectの理事の過半数が、この会員制組織の会員によって直接選出されることになります。

### CATALYST

第206回タウンホールでは、チームは最も野心的な取り組みの一つである「代替投票メカニズム」の提案を取り上げ、Catalystの5周年を祝いました。

当初、Catalystの投票は、賛成、反対、棄権という単純な選択肢でした。しかし、コミュニティが世界最大の分散型イノベーションファンドへと成長するにつれて、新たな課題が浮上しました。これには、大口保有者の影響力、公平性、プライバシーに関する懸念（個別の投票詳細が公になることなど）が含まれていました。

これらの課題に対処するため、IOGリサーチ、Photrek、Catalystチームは共同で投票プロセスを再考しました。コミュニティがより微妙なニュアンスの意見を表明できるように、二次投票、ランク選択投票、支出投票といった選択肢を検討しました。結果の完全な透明性を維持しつつ、プライベート投票や秘匿参加についても調査しました。

この1年で、チームは6つのマイルストーンを達成しました。世界の投票システムを研究し、潜在的な結果をモデル化し、Catalystガバナンスの未来に関する洞察を提供する暗号プロトコルや初期のプロトタイプを開発しました。

👉このエピソードを見逃した場合は、[ここ](https://youtube.com/live/xdac6mUeX2Q)で内容を確認できます。また、提案の詳細は[こちら](https://projectcatalyst.io/funds/11/catalyst-systems-improvements-discovery/alternative-catalyst-voting-schemes-with-new-crypto-protocols-by-iog-research-photrek-and-the-catalyst-team)をご覧ください。

### 教育

**教育**チームは、『[Mastering Cardano](https://book.io/book/mastering-cardano/)』に関するコミュニティのフィードバックを分析し、翻訳版の企画を始めました。自習型のCardano教育プログラムのさらなるコンテンツをまとめました。

2025年9月26日、27日にワイオミング大学で開催される2日間の対面イベント、Cardano Daysイベントの準備も進めています。これは、より大規模な[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)イベントで重要な位置を占めています。[1日目](https://luma.com/vxkw94l7)と[2日目](https://luma.com/re789k86)の登録はLumaページで公式に受付中です。
