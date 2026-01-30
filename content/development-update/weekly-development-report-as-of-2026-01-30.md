---
title: Weekly development report as of 2026-01-30
tags:
  - Weekly development updates
url: ""
image: https://ucarecdn.com/71bff422-bb97-44a3-9927-82c53dd7374a/
image_text: A graphic showing the highlights from this week's development report
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   Charles announces [USDCx is coming to Cardano](https://x.com/IOHK_Charles/status/2017130311763861897?s=20), the latest delivery via the Pentad and community-funded Critical Integrations program
    
*   The $NIGHT token can now [be bridged to COTI Network](https://x.com/COTInetwork/status/2015863179864121664) via ChainPort
    
*   [Pondora launched Echo](https://x.com/pondora_org/status/2015847495587205602), the first non-custodial Hydra implementation that transforms smart contracts into Hydra participants
    
*   Pulse Cardano’s privacy DEX is [live on the Midnight public testnet](https://x.com/pulsecardano/status/2017021425215852562)
    
*   Fluid Tokens are in the final stages of [completing their Bitcoin - Cardano bridge](https://x.com/FluidTokens/status/2014779416128229552)
    
*   Input Output Engineering’s Hydra team and Masumi Network are [collaborating to deploy Masumi on Hydra](https://x.com/IOGroup/status/2016858869088026841)
    

### CORE TECHNOLOGY

With the start of 2026, the **consensus** team continued to prioritize work on treasury-funded initiatives, including node maintenance and support, the Ouroboros Leios implementation, and the KES agent.

This week, the team progressed with Cardano node v.10.7 integration and release preparations, prototyped Leios endorsement block production, and advanced the broader Leios protocol implementation. Additionally, they optimized the centralized `TxSubmission` [logic](https://github.com/IntersectMBO/ouroboros-consensus/issues/1444) and released `kes-agent` and `kes-agent-crypto` v.1.0.

### SCALING

The **Hydra** team started the new year with a focus on developer experience. Near-term efforts prioritize performance, observability, and addressing user-reported bugs and feature requests.

This week, the team focused on improving core functionality and demonstrations. They completed the [Raspberry Pi demo](https://github.com/cardano-scaling/hydra/issues/2353), finalized [](https://github.com/cardano-scaling/hydra/issues/2206)improvements to [chain-following](https://github.com/cardano-scaling/hydra/issues/2206), and continued progress on the [partial fanout](https://github.com/cardano-scaling/hydra/issues/1468) feature. They also improved the [HTLC demo](https://github.com/cardano-scaling/hydra-lightning-router/) to better showcase real-world payment flows and accepted a community contribution fixing an [HTTP endpoint](https://github.com/cardano-scaling/hydra/pull/2445).

Next, the team will continue investigating memory usage and performance characteristics ([#2441](https://github.com/cardano-scaling/hydra/issues/2441), [#2422](https://github.com/cardano-scaling/hydra/issues/2422)), improve [benchmarking](https://github.com/cardano-scaling/hydra/issues/2439), and investigate an issue with [incremental commits](https://github.com/cardano-scaling/hydra/issues/2446). Work on partial fanout will continue, alongside preparations for the Hydra v.1.3.0 release.

This week, the **Mithril** team prepared the pre-release for the [2603.1-pre](https://github.com/input-output-hk/mithril/releases/tag/2603.1-pre) distribution, which introduces support for the DMQ protocol, preliminary support for decentralized configuration, implementation of the Blockfrost API to fetch stake pool operators' pool tickers and names, and various bug fixes and improvements.

The team focused on implementing the [SNARK-friendly STM library](https://github.com/input-output-hk/mithril/issues/2795), advanced the non-recursive SNARK circuit MVP, and progressed work on pre-aggregation and recursive SNARK circuits.

Additionally, they worked on the new certification for Cardano [blocks and transactions](https://github.com/input-output-hk/mithril/issues/2905), implementing the storage layer, the artifact builder, and the throttled preloader.

Finally, they continued [documenting proposals](https://github.com/input-output-hk/mithril/issues/2831) to integrate Mithril and DMQ nodes with Cardano and updating the protocol security page.

### VOLTAIRE

Intersect is facilitating an intra-era Cardano upgrade to [protocol version 11](https://www.intersectmbo.org/news/proposed-intra-era-hard-fork-to-protocol-version-11).

The developer experience working group is conducting a 2026 State of Developer Experience Survey in five languages. If you are a developer, regardless of skill level, please be sure to respond. Take the survey here: [English](https://forms.gle/B37kLm78NAfRZFLw9) / [French](https://forms.gle/a4nBCBwgggebPW96A) / [Japanese](https://forms.gle/na3cksZS8LuSYvKV7) / [Chinese](https://forms.gle/h4hEVW2srRS6z1SR7) / [Portuguese](https://forms.gle/ZfNvjxyVP78xmnMm9).

###   
RESEARCH

The **Input Output Research (IOR)** team has gathered community feedback on their end-of-year 2025 reports before final submission to Intersect.

They would also like to announce that Professor Aggelos Kiayias has been named a 2025 Fellow by the Association for Computing Machinery – one of the highest honors in computing. ACM Fellows are selected by their peers and represent roughly the top 1% of the global membership. Find out more in the recent blog post.

  
![A graphic illustrating highlights from this week's development report, in Japanese](https://ucarecdn.com/d8a1f5a6-71a5-4e09-9705-6f795e907a78/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

今週のエコシステム更新情報

*   Charlesが[CardanoへのUSDCx導入](https://x.com/IOHK_Charles/status/2017130311763861897?s=20)を発表、Pentadとコミュニティが資金提供するCritical Integrationsプログラムによる最新の成果
    
*   $NIGHTトークンがChainPort経由で[COTI Networkとブリッジ可能に](https://x.com/COTInetwork/status/2015863179864121664)
    
*   [PondoraがEchoをローンチ](https://x.com/pondora_org/status/2015847495587205602)、スマートコントラクトをHydra参加者に変貌させる、最初のノンカストディアルHydra実装
    
*   CardanoのプライバシーDEX、Pulseが[Midnightパブリックテストネット](https://x.com/pulsecardano/status/2017021425215852562)で稼働開始
    
*   Fluid Tokensが[Bitcoin - Cardanoブリッジ完成](https://x.com/FluidTokens/status/2014779416128229552)に向けた最終段階
    
*   Input Output EngineeringのHydraチームとMasumi Networkが[MasumiのHydraデプロイで提携](https://x.com/IOGroup/status/2016858869088026841)
    

### コアテクノロジー

2026年の幕開けにあたり、**コンセンサス**チームは、引き続きノードのメンテナンスとサポート、Ouroboros Leiosの実装、KESエージェントなど、トレジャリーから資金を得ている取り組みを優先して進めています。

Cardanoノード v.10.7の統合とリリースの準備を進め、Leiosのエンドースメントブロック生成のプロトタイプを作成し、広範なLeiosプロトコルの実装を進展させました。中央集権的な`TxSubmission`[ロジック](https://github.com/IntersectMBO/ouroboros-consensus/issues/1444)を最適化し、`kes-agent`と`kes-agent-crypto` v.1.0をリリースしました。

### スケーリング

Hydraチームは、開発者エクスペリエンスに焦点を当てて新年をスタートさせました。短期的な取り組みでは、パフォーマンス、観測可能性、ユーザーから報告されたバグや機能リクエストへの対応を優先しています。

コア機能の改善とデモンストレーションに注力しました。[Raspberry Piのデモ](https://github.com/cardano-scaling/hydra/issues/2353)、[チェーン追従](https://github.com/cardano-scaling/hydra/issues/2206)の改良を完了し、[部分的なファンアウト](https://github.com/cardano-scaling/hydra/issues/1468)機能を引き続き進めました。実際の支払いフローをより良く示すために[HTLCデモ](https://github.com/cardano-scaling/hydra-lightning-router/)も改良し、[HTTPエンドポイント](https://github.com/cardano-scaling/hydra/pull/2445)を修正するコミュニティからの貢献を受け入れました。

今後は、メモリー使用量とパフォーマンス特性（[#2441](https://github.com/cardano-scaling/hydra/issues/2441)、[#2422](https://github.com/cardano-scaling/hydra/issues/2422)）の調査を継続し、[ベンチマーキング](https://github.com/cardano-scaling/hydra/issues/2439)を改善し、[インクリメンタルコミット](https://github.com/cardano-scaling/hydra/issues/2446)の問題を調査します。部分的なファンアウトの作業は、Hydra v.1.3.0のリリース準備と並行して継続します。

**Mithril**チームは[2603.1-pre](https://github.com/input-output-hk/mithril/releases/tag/2603.1-pre)ディストリビューションのプレリリースを準備しました。これには、DMQプロトコルのサポート、分散型設定の予備サポート、ステークプールオペレーターのプールティッカーと名前を取得するためのBlockfrost APIの実装、 さまざまなバグの修正や改良が導入されています。

[SNARKに適したSTMライブラリー](https://github.com/input-output-hk/mithril/issues/2795)の実装に注力し、非再帰型SNARK回路MVP、集約前および再帰型SNARK回路を進めました。

Cardano[ブロックとトランザクション](https://github.com/input-output-hk/mithril/issues/2905)の新たな認証に取り組み、ストレージ層、アーティファクトビルダー、スロットル付きプレローダーの実装を行いました。

MithrilとDMQのノードをCardanoに統合する[提案の文書化](https://github.com/input-output-hk/mithril/issues/2831)を継続し、プロトコルセキュリティページを更新しました。

### VOLTAIRE

Intersectは、Cardanoの[プロトコルバージョン11](https://www.intersectmbo.org/news/proposed-intra-era-hard-fork-to-protocol-version-11)への開発期内アップグレードを促進しています。

開発者エクスペリエンスワーキンググループは、2026年開発者エクスペリエンス現状調査（2026 State of Developer Experience Survey）を5か国語で実施しています。開発者は、スキルレベルに関わらず、必ず回答してください。調査票はこちら：[英語](https://forms.gle/B37kLm78NAfRZFLw9) / [フランス語](https://forms.gle/a4nBCBwgggebPW96A) / [日本語](https://forms.gle/na3cksZS8LuSYvKV7) / [中国語](https://forms.gle/h4hEVW2srRS6z1SR7) / [ポルトガル語](https://forms.gle/ZfNvjxyVP78xmnMm9)

###   
研究

**Input Output Research (IOR)**チームは、Intersectへの最終提出に先立ち、2025年末のレポートに関するコミュニティからのフィードバックを収集しました。

Aggelos Kiayias教授が、コンピューティング分野で最も高い栄誉の一つであるAssociation for Computing Machinery（ACM）の2025年度フェローに選出されました。ACMフェローは同僚（ピア）によって選出され、世界中の会員の概ね上位1%に相当します。詳細は最近のブログ記事をご覧ください。
