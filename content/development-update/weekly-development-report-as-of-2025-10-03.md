---
title: Weekly development report as of 2025-10-03
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/d56264e6-e6dd-4a9f-9a27-3ae68574e5ae/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **consensus** team added a [Linear Leios draft impact analysis](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/ImpactAnalysis.md) for consensus and reported steady progress on Peras. Tweag showcased the first Peras milestone; [the first PR](https://github.com/IntersectMBO/ouroboros-consensus/pull/1673) introducing the foundational types has been merged into `main`, and [a second PR](https://github.com/IntersectMBO/ouroboros-consensus/pull/1674) is currently under review.

KES agent code changes have been integrated as part of the upcoming node v.10.6 version. The KES agent is not yet active; release remains pending the results of audit and integration testing.

### SCALING

This week, the **Mithril** team focused on integrating the [Haskell DMQ node](https://github.com/input-output-hk/mithril/issues/2674) with Mithril nodes. They also finished the preparatory phase and started the first phase of [decentralizing configuration parameters](https://github.com/input-output-hk/mithril/issues/2692). Work continued on supporting multiple proof systems and developing an implementation plan for Mithril succinct proofs using a SNARK-friendly version of the STM cryptographic library.

Finally, the team replaced vulnerable Rust dependencies for YAML parsing and made progress refactoring the STM cryptographic library.

### VOLTAIRE

Intersect is pleased to present the results of the 2025 board of directors election, with 269 unique members participating in the vote, representing 22% of all eligible members. Four of the seven elected board members were chosen from a pool of 20 candidates, a result that exceeded the required threshold of 10% and underscored the strength of member engagement.  
  
The four elected members will take their places on the board, bringing fresh perspectives and strengthening a member-led, member-backed future for Intersect.

[Adam Rusch](https://x.com/AdamRusch), [Kavinda Kariyapperuma](https://x.com/OfficialKavinda), [Mercy Fordwoo](https://x.com/M3RSEE), and [Rand McHenry](https://x.com/RareRandCorp) have been elected by their peers. Their election brings meaningful change to the leadership of Intersect, with a majority of non-executive directors now chosen directly by Intersect’s global membership, further strengthening the community’s journey to build decentralized governance at scale. 

**Board member terms**
 
In the 2025 election, four seats were available for election to the board. By design, the two highest-voted candidates would receive two-year terms, while the next two would serve one-year terms.

However, re-elected board members Adam Rusch and Kavinda Kariyapperuma, despite being the two with the most votes, have chosen to take the one-year seats, serving until October 2026. This decision allows newly elected members Mercy Fordwoo and Rand McHenry to take the two-year seats, which will serve until October 2027.

### CATALYST

This week's town hall #208 highlighted **Catalyst Explorer**, a versatile tool designed to empower both voters and proposers within the Catalyst ecosystem.

*   **For voters** – simplify your voting experience with intuitive features that help you navigate proposals with confidence.
    
*   **For proposers** – access tools to amplify your project’s reach and connect with the community, all in one place.
    

Catch up on [the recording](https://www.youtube.com/live/8GjaCj-5frc?si=Xu43s4OT8qetmdU9) or revisit [the presentation](https://docs.google.com/presentation/d/1Nd8PZTojKEL_l4rSsUiEbIvk_T8o4XClrE0vpGCuyOg/edit?usp=sharing).

The voting window is closing soon!

*   **Deadline –** October 6, 11 AM UTC
    
*   **Action –** if you haven’t cast your votes yet, don’t miss this chance to help shape the future of Cardano.
    

Your vote is your voice — make it count.

### EDUCATION

The team is at Token2049 showcasing the Mastering Cardano book. They brought the first physical printed copy and sample translation chapters in Spanish and Japanese. Additionally, the team successfully hosted the Cardano Days event last weekend at the University of Wyoming.

  
![](https://ucarecdn.com/e111020a-b3a9-4002-9128-ed01ff28f7ee/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_  

*   [Input | Output (IO)](https://iohk.io/jp/about/)は先週末、アジアツアーの一環として[ベトナムのホーチミン市でCardanoコミュニティイベント](https://www.youtube.com/watch?v=srSIJmRsi84)を後援しました。
    
*   ADA保有者は[Near Intents](https://www.near.org/intents)プロトコル上で20以上のブロックチェーン間のクロスチェーンスワップを実行できるようになりました。この相互運用性におけるマイルストーンは、IOと[Near Foundation](https://www.near.org/roadmap-history)の協力で実現したものです。
    
*   今週、Intersectは[2025年の理事会選挙の結果](https://www.intersectmbo.org/news/intersect-announces-results-of-2025-board-elections)を発表しました。当選したAdam Rush、Kavinda Kariyapperuma、Mercy Fordwoo、Rand McHenryの各氏にお祝い申し上げます。
    
*   10月はToken2049で幕を開け、IO、Intersect、Quantum Hosky、Project Catalyst、Midnightがエコシステムを代表してトレジャリーから資金を受けたIO Villageブースに集結しました。シンガポールのハイライトは[IO on Xをフォロー](https://x.com/IntersectMBO)してください。
    
*   今週の土曜日、IOのアジアツアーは大阪に入り、[ガバナンスワークショップ](https://luma.com/5p589eh6)と[コミュニティイベント](https://luma.com/lpn92ne5)を主催します。IOチームは、日本のCardanoコミュニティメンバーやエコシステムビルダーとの関わりを楽しみにしています。
    
*   [Brave WalletはCardanoを統合](https://brave.com/blog/cardano-in-brave-wallet/)し、ADA保有者はプライバシー優先のブラウザーから直接資産を管理し、オンチェーンガバナンスに参加できるようになりました。
    

### コアテクノロジー

**コンセンサス**チームは、[Linear Leiosのコンセンサスに対する影響分析の草案](https://github.com/input-output-hk/ouroboros-leios/blob/main/docs/ImpactAnalysis.md)を追加し、Perasにおける着実な進捗を報告しました。TweagはPerasの最初のマイルストーンを提示しました。基礎型を導入した[最初のPR](https://github.com/IntersectMBO/ouroboros-consensus/pull/1673)は`main`に統合され、 [2番目のPR](https://github.com/IntersectMBO/ouroboros-consensus/pull/1674)は現在確認中です。  

KESエージェントコードの変更は、次期ノードv.10.6の一部として統合されていますが、KESエージェントはまだ有効化されていません。リリースは監査および統合テストの結果がでるまで保留されます。  

### スケーリング

**Mithril**チームは、[Haskell DMQノード](https://github.com/input-output-hk/mithril/issues/2674)とMithrilノードの統合に焦点を当てました。[設定パラメーターの分散化](https://github.com/input-output-hk/mithril/issues/2692)に向けた準備フェーズを完了し、第一フェーズを開始しました。複数の証明システムのサポートと、STM暗号ライブラリーのSNARKに適したバージョンを用いたMithril簡潔証明の実装計画策定も続けました。

YAML解析用の脆弱なRust依存関係を置き換え、STM暗号ライブラリーのリファクタリングを進めました。

### VOLTAIRE

Intersectは、2025年度理事会選挙の結果を発表できることを嬉しく思います。今回の投票には269のユニークなメンバーが投票に参加しましたが、これは、すべての適格メンバーの22%に相当します。選出された7人の理事のうち4人は20人の候補者から選ばれました。必要とされる10%というしきい値を上回った結果は、メンバーのエンゲージメントの強さを際立たせるものとなりました。  
  
選出された4名のメンバーは理事の席に着き、斬新な視点をもたらすとともに、Intersectのメンバーが主導し、メンバーが支援する未来をより強固なものにします。

[Adam Rusch](https://x.com/AdamRusch)、[Kavinda Kariyapperuma](https://x.com/OfficialKavinda)、[Mercy Fordwoo](https://x.com/M3RSEE)、[Rand McHenry](https://x.com/RareRandCorp)が仲間たちによって選出されました。彼らの選出はIntersectのリーダーシップに有意義な変化をもたらします。これにより、非業務執行理事の過半数がIntersectのグローバルメンバーシップによって直接選ばれたことになり、大規模な分散型ガバナンスを構築するというコミュニティの道のりがさらに強化されます。 

  
**理事の任期**  
2025年の選挙では、理事会の4議席が改選対象となりました。規定では、得票数が最も高かった2人の候補者が2年間の任期となり、次に得票が多かった2人が1年間の任期を務めることになっていました。

しかし、再選された委員のAdam RuschとKavinda Kariyapperumaは最多得票者であったにもかかわらず、2026年10月までの1年間の任期を努めることを選びました。この決定により、新たに選出されたMercy FordwooとRand McHenryが、2027年10月までの2年間議席につくことになりました。

### CATALYST

第208回タウンホールでは、Catalystエコシステム内の投票者と提案者の双方を支援するために設計された多用途ツール、**Catalystエクスプローラー**に焦点が当てられました。

*   **投票者** – 直感的な機能で投票体験を簡素化し、安心して提案を吟味できます。
    
*   **提案者** – プロジェクトのリーチを拡大し、コミュニティとつながるためのツールを一か所で利用できます。
    

[録画](https://www.youtube.com/live/8GjaCj-5frc?si=Xu43s4OT8qetmdU9)や[プレゼンテーション](https://docs.google.com/presentation/d/1Nd8PZTojKEL_l4rSsUiEbIvk_T8o4XClrE0vpGCuyOg/edit?usp=sharing)で内容を確認してください。

まもなく投票は締め切られます。

*   **締切 –** 10月6日20時（日本時間）
    
*   **行動 –** まだ投票が済んでいない場合は、Cardanoの未来を形作るのに役立つこの機会を逃さないでください。
    

投票はあなたの声です。確実に届けましょう。

### 教育

チームはToken2049で書籍『Mastering Cardano』ブックを展示しています。ここでは、初回印刷版、およびスペイン語と日本語の翻訳版サンプル章が紹介されています。先週末にワイオミング大学で開催されたCardano Daysイベントのホストも無事努めました。
