---
title: Weekly development report as of 2025-11-07
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/cb4f42bb-6a7d-4c6b-a5b2-2200f8c1e91a/
image_text: ""
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The number of projects building remains consistent at 2,014, while delegated wallets grew to 1.34 million, and token policies have reached 222,378.

Smart contract deployment continues to rise, with 143,150 Plutus scripts and 12,714 Aiken scripts now active, underscoring ongoing developer engagement. The total transaction count has surpassed 115.48 million, showing sustained on-chain usage. On the governance front, 1,521 DReps, including 1,019 active, demonstrate continued participation as Cardano advances toward full community-led governance.

In other news:

*   [VietnamCardano](https://x.com/overguildOG/status/1986662707245052326) partnered with Over Guild to support developers through a series of community meetups and workshops
    
*   The [Midnight Foundation](https://x.com/MidnightNtwrk/status/1986154758516974076) teamed up with Catalyst to introduce a new Compact DApps category for Fund15, encouraging lightweight Dapp development
    
*   [Cardano Nigeria](https://x.com/Cardano_Nigeria/status/1986141374429778340) announced a partnership with FuchaWeb3 aimed at promoting blockchain education and community growth locally
    
*   [Input | Output](https://x.com/InputOutputHK/status/1984328412098675193) revealed the Ouroboros Phalanx upgrade, designed to enhance Cardano’s security while boosting transaction speeds across the network.
    

### SMART CONTRACT

This week, the **Plutus** team organized and attended [UPLC 2025](https://services.iohk.io/uplc) in Edinburgh. Session recordings will be available soon. 

To address the community feedback, they added a new `Value` primitive, `scaleValue`, and made refinements to other `Value` primitives for activation at the upcoming intra-era hard fork. The team also improved UPLC evaluator performance by optimizing the inlining of the `geq` function and progressed work on costing for all `Value` primitives.  
  
### SCALING

This week, the **Mithril** team [released the](https://github.com/input-output-hk/mithril/releases/tag/2543.0) `2543.0` [distribution](https://github.com/input-output-hk/mithril/releases/tag/2543.0), which adds support for the default incremental backend (v2) for Cardano database restoration, introduces enhanced integrity verification that reports any tampered or missing files in case of failure, and includes various bug fixes and improvements.

The team also continued implementing a simple aggregator discovery mechanism and advanced work on the first phase of [decentralizing configuration parameters](https://github.com/input-output-hk/mithril/issues/2692). Additionally, they made progress implementing the SNARK-friendly STM library by designing its architecture and implementing the Schnorr signature scheme.

Finally, the team completed the implementation of a common HTTP client for the aggregator and made improvements to the protocol security page.

  
The **Hydra** team released [Hydra v.1.1.0](https://github.com/cardano-scaling/hydra/releases), completed the [HTLC demo](https://github.com/cardano-scaling/hydra/issues/2080) in Hydra, merged documentation for [committing a script UTXO](https://github.com/cardano-scaling/hydra/issues/1906), and stabilized CI by fixing [Blockfrost tests](https://github.com/cardano-scaling/hydra/issues/2218). They also made progress on [partial fanout](https://github.com/cardano-scaling/hydra/issues/1468). Looking ahead, the team is working on [implementing a ‘SafeClose’](https://github.com/cardano-scaling/hydra/issues/2330) client input feature to prevent closing while having unburned minted tokens.

### VOLTAIRE

Voting closed today, November 7, in the Intersect committee elections. There will be an independent external audit, concluding on November 12, with election results announced on November 14.

### EDUCATION

This week, the **education** team is teaching the first week of the blended learning Cardano developer course to over 60 participants. The two-week course began on Monday, November 3. 

The course is structured for maximum flexibility and engagement. Week one is entirely online, followed by the second week, which will be held in-person at the UBA (Universidad de Buenos Aires) and recorded for future access. The team will also support the local hackathon.

Additionally, work is ongoing to translate 'Mastering Cardano' into both Spanish and Japanese.  
  
![](https://ucarecdn.com/7b617130-060a-4c4d-8039-fb270e4a54bf/-/preview/-/format/auto/-/quality/smart/)  
  
エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

構築しているプロジェクト数は2,014件と安定している一方、委任済みウォレットは134万件に増加し、トークンポリシーは22万2,378に達しました。

スマートコントラクトのデプロイも引き続き増加傾向にあり、現在14万3,150のPlutusスクリプトと1万2,714のAikenスクリプトが稼働中であるなど、開発者エンゲージメントが継続していることが強調されています。トランザクション総数は1億1,548万件を超え、オンチェーン利用が持続していることが示されています。ガバナンス面では、1,521人のDRep（うち1,019人がアクティブ）が引き続き参加し、Cardanoがコミュニティ主導のガバナンスに向けて前進していることを示しています。

その他のニュース：

*   [VietnamCardano](https://x.com/overguildOG/status/1986662707245052326)はOver Guildと提携して、コミュニティミートアップやワークショップを通じて開発者をサポート
    
*   [Midnight Foundation](https://x.com/MidnightNtwrk/status/1986154758516974076)はCatalystと協力してFund15にCompact DAppsカテゴリを新たに導入、軽量のDApp開発を奨励
    
*   [Cardano Nigeria](https://x.com/Cardano_Nigeria/status/1986141374429778340)が地元でのブロックチェーン教育とコミュニティ成長促進を目的としたFuchaWeb3とのパートナーシップを発表
    
*   [Input Output](https://x.com/InputOutputHK/status/1984328412098675193)が、Cardanoのセキュリティを強化しつつネットワーク全体のトランザクション速度向上を目指したOuroboros Phalanxアップグレードを発表
    

###   
スマートコントラクト

**Plutus**チームはエディンバラで[UPLC 2025](https://services.iohk.io/uplc)を開催しました。セッションの録画はまもなく公開される予定です。コミュニティからのフィードバックに対処するため、新しい`Value`プリミティブの`scaleValue`を追加し、予定されている期内ハードフォークでアクティブ化するために他の`Value`プリミティブを改良しました。`geq`関数のインライン展開を最適化することでUPLC評価器のパフォーマンスを向上させ、すべての`Value`プリミティブのコスト計算を進めました。  
  
### スケーリング

**Mithril**チームは`2543.0`[ディストリビューションをリリース](https://github.com/input-output-hk/mithril/releases/tag/2543.0)しました。ここではCardanoデータベースの復元のためにデフォルトの増分バックエンド（v2）のサポートを追加し、障害発生時に改ざんされたファイルや不足しているファイルを報告するように強化した整合性検証を導入した他、バグ修正と改善も行っています。

シンプルなアグリゲーター発見メカニズムを実装し、[設定パラメーターの分散化](https://github.com/input-output-hk/mithril/issues/2692)の第1フェーズに関する作業を進めました。SNARKに適したSTMライブラリーの実装に関しては、アーキテクチャーを設計し、Schnorr署名方式を実装しました。

アグリゲーター用の共通HTTPクライアントの実装を完了し、プロトコルセキュリティページを改訂しました。

**Hydra**チームは[Hydra v.1.1.0](https://github.com/cardano-scaling/hydra/releases)をリリースし、Hydraで[HTLCデモ](https://github.com/cardano-scaling/hydra/issues/2080)を完成させ、[スクリプトUTXOをコミットする](https://github.com/cardano-scaling/hydra/issues/1906)ためのドキュメントをマージし、[Blockfrostテスト](https://github.com/cardano-scaling/hydra/issues/2218)を修正してCIを安定させました。[部分的なファンアウト](https://github.com/cardano-scaling/hydra/issues/1468)についても進展させています。現在、未廃棄の発行済みトークンがある場合に閉じさせないための、[SafeCloseクライアント入力機能の実装](https://github.com/cardano-scaling/hydra/issues/2330)に取り組んでいます。

### VOLTAIRE

Intersect委員会選挙は本日11月7日に投票が締め切られました。選挙結果は、独立した外部監査を11月12日に実施した後、11月14日に発表されます。

### 教育

ブレンド型学習であるCardano開発者コースの第1週が始まり、**教育**チームの講義に60人以上が参加しました。この2週間のコースは11月3日月曜日に開講しました。最大限の柔軟性とエンゲージメントを考慮して、第1週は完全にオンラインで行われ、第2週はブエノスアイレス大学にて対面で開催されます。また、将来的にアクセスできるよう録画されます。現地のハッカソンも支援する予定です。

『Mastering Cardano』のスペイン語版と日本語版への翻訳作業が進行中です。
