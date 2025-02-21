---
title: Weekly development report as of 2025-02-21
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2b8d33d9-b161-4039-9703-3c7f8db6ad53/
image_text: Weekly development report as of 2025-02-21
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem continues to show stable growth across various key metrics. The number of projects building on Cardano remains at 1,985, reflecting ongoing development activity. The network has processed 106.50 million transactions, a 0.29% increase since last week, indicating sustained on-chain usage.

Native asset activity has also expanded, with 10.69 million native tokens issued and 207,745 token policies registered. Plutus scripts have grown to 126,445, marking a 0.72% increase since last week, showing steady adoption of smart contract capabilities. Governance participation continues to rise, with 1,122 DReps, reflecting a 4.08% increase in decentralized representation. Meanwhile, 1.323 million delegated wallets contribute to the network’s staking ecosystem.

In other news:

*   CDEC has launched its new [website](https://cdec.site/) and [Twitter (X) account](https://x.com/CDEC_Cardano/status/1892245573752779257).
    
*   The Lace paper wallet [bug bounty challenge](https://x.com/lace_io/status/1890447390940803159) ended with no winners, as no one was able to hack it.
    
*   [Wanchain](https://x.com/wanchain_org/status/1892183317530685890) has introduced XFlows, enabling native asset swaps across 16 blockchains.
    

### CORE TECHNOLOGY

This week, the **consensus** team published [an explainer](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/Ticking) covering the role of ticking within the consensus layer. They also benchmarked the in-memory backend for UTXO-HD, confirming that resource usage is similar to that of the baseline node, with CPU usage reduced by 9% and memory usage increased by 3%. Additionally, they fixed a [regression in the mempool snapshot](https://github.com/IntersectMBO/ouroboros-consensus/pull/1382), improving performance from +185% to -21%, added a new consensus section to the [Cardano](https://github.com/cardano-scaling/cardano-blueprint/pull/7/files) [blueprints](http://src/consensus/draft.md), and discussed the importance of the KES agent and its roadmap during a recent [technical working group meeting](https://drive.google.com/file/d/1z1of19KJJD92Gv7Xt9ybC53vC_OqskcM/view).

### WALLETS AND SERVICES

This week, the **Lace** team released [version 1.20.0](https://www.lace.io/blog/lace-1-20-0-release), which enhances the Web3 experience through improved organization and key optimizations. Users can now rename wallets and accounts for better clarity. A new ‘Governance’ tab has been added to centralize participation in Cardano governance.

DApp signing has been made smoother with improved input focusing, while transactions, UTXOs, and resolved inputs are now cached more efficiently, resulting in faster wallet operations. The full activity feed has been restored to provide a comprehensive overview of the transaction and rewards history. Additionally, the enhanced Nami mode full-screen lander now offers a more intuitive transition for Nami users switching to Lace.

Debug logging is now optional, giving users more control over diagnostics, and the removal of automatic collateral handling allows for greater flexibility in transactions. These updates pave the way for an even more seamless Web3 experience, with mobile support coming soon.

### SMART CONTRACTS

The **Plutus** team officially renamed Plutus Tx to Plinth and updated the [user guide](https://plutus.cardano.intersectmbo.org/docs/) accordingly. Read [this blog post](https://iohk.io/en/blog/posts/2025/02/20/plutus-tx-gets-a-makeover-meet-plinth/) to learn more about Plinth and its new functionality. 

The team also made several improvements to the Plinth compiler, making inlining more tunable, including the `inline-fix` flag and the \`[PlutusTx.Optimize.Inline.inline](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Optimize-Inline.html) `function for callsite inlining. Furthermore, they added utility functions to support recursion unrolling in` [PlutusTx.Optimize.SpaceTime](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Optimize-SpaceTime.html)\`.

### SCALING

The **Hydra** team has brought the [Hydra explorer](http://explorer.hydra.family/) back online, and it is now tracking over 1,000 heads across various networks and versions. They also improved the explorer, allowing it to monitor multiple Hydra versions. Additionally, they resolved a crash caused by [malformed party information](https://github.com/cardano-scaling/hydra/issues/1856) and continued to [reduce the memory footprint](https://github.com/cardano-scaling/hydra/issues/1618) of a Hydra node. In the future, the team plans to focus on further memory optimization, ongoing networking enhancements, and addressing potential ‘getting stuck’ scenarios by implementing a reset to a previous snapshot.

This week, the **Mithril** team released the new distribution [2506.0](https://github.com/input-output-hk/mithril/releases/tag/2506.0), which fixes a certificate chain security issue discussed in this [developer blog post](https://mithril.network/doc/dev-blog/2025/02/14/client-security-advisory).

The team continued implementing incremental certification of the Cardano database, completed the client library, client CLI, and monitoring, fixed bugs, and worked on resolving unstable features. Additionally, they worked on decommissioning the `testing-sanchonet` Mithril network and ending support for macOS x64 pre-built binaries in the CI.

Finally, the team fixed all remaining flakiness in end-to-end tests in the CI and worked on cleaning up legacy code from the 'Thales' era.

This week, the **Leios** team worked on a detailed DeltaQ analysis of network topologies, extensive BLS cryptography benchmarking, and improvements to Haskell and Rust simulations. The team also explored succinct schemes for BLS key registration and conducted a detailed certificate performance analysis. Both Haskell and Rust simulations received substantial updates to improve visualization and support more realistic testing conditions.

### VOLTAIRE 

The new **Cardano constitution** has been ratified on-chain and will replace the interim constitution at the next epoch boundary on Sunday, February 23. 

Meanwhile, Input | Output Research’s 2025 work program proposal, presented via the Intersect research working group, has been approved for socialization and feedback with DReps and the community — followed by a budget info governance action and, subsequently, a treasury withdrawal governance action.

The five-year Cardano vision proposal includes 34 work streams across nine thematic focus areas, of which 20 research streams and six innovation streams are proposed for 2025. These encompass several Ouroboros protocol initiatives: Leios, Hydra layer 2, tokenomics, interoperability, anti-grinding, and fastBFT. Further information is available in [this blog post](https://iohk.io/en/blog/posts/2025/02/05/io-researchs-vision-for-cardano-submitted-to-community-for-feedback-by-the-intersect-product-committee/) and the Intersect knowledge base for the [research working group and product committee](https://committees.docs.intersectmbo.org/groups-overview/working-groups/research).

### CATALYST

The **Catalyst** Fund13 onboarding is progressing smoothly, while technical advancements on the Catalyst platform continue, with the deprecation of IdeaScale remaining a key priority ahead of Fund14.  
A major milestone has been achieved with the completion of the working group research and scoping analysis initiative, funded in Fund11 by the Cardano community. Check out the [closeout video](https://x.com/Catalyst_onX/status/1890094322311393587) and the [milestone module](https://milestones.projectcatalyst.io/projects/1100087) for more details.  
As Fund14 approaches, the team has begun showcasing [platform demos](https://x.com/Catalyst_onX/status/1889329358491226151) to keep the community engaged and excited about upcoming features. In case you missed it, explore the [Cardano innovation budget proposal](https://forum.cardano.org/t/cardano-innovation-budget-proposal/143046) 2025, along with Catalyst’s roadmap. 

### EDUCATION

This week, the **education** team is continuing to update the Cardano developer course and plan education events. They are also collaborating with the Midnight team on educational content.  
  
![](https://ucarecdn.com/9f7d25dc-4d2f-4d39-b575-ec624c4ecde2/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは、さまざまな主要メトリクスで着実な進歩を続けています。Cardanoに構築中のプロジェクト数は1,985で、開発活動が進行中であることを反映しています。ネットワークは、先週から0.29%増の1億650万件のトランザクションを処理しており、オンチェーンの使用が維持されていることを示しています。

ネイティブ資産の活動も拡大し、1,069万のネイティブトークンが発行され、207,745のトークンポリシーが登録されました。Plutusスクリプトは先週から0.72%増の126,445まで増加し、スマートコントラクト機能が着実に普及していることが示されています。ガバナンスへの参加は引き続き増加しており、分散型代表における4.08%増を反映してDRepは1,122人に上っています。132万1000の委任済みウォレットがネットワークのステーキングエコシステムに貢献しています。

その他のニュース：

●    CDECは新しい[ウェブサイト](https://cdec.site/)と[Twitter（X）アカウント](https://x.com/CDEC_Cardano/status/1892245573752779257)を立ち上げました。

●    Laceペーパーウォレットの[バグ懸賞金チャレンジ](https://x.com/lace_io/status/1890447390940803159)は、誰もハッキングできなかったため、勝者なしで終了しました。

●    [Wanchain](https://x.com/wanchain_org/status/1892183317530685890)がXFlowsを導入し、16のブロックチェーン間でネイティブ資産のスワップを可能にしました。

### コアテクノロジー

**コンセンサス**チームは、コンセンサス層でティックする役割をカバーした[ガイド](https://ouroboros-consensus.cardano.intersectmbo.org/docs/for-developers/Ticking)を公開しました。UTXO-HDのメモリー内バックエンドのベンチマークを行い、リソース使用率がベースラインノードのそれと似ており、CPU使用率が9%減少し、メモリー使用率が3%増加していることを確認しました。[メモリープールスナップショットの不具合](https://github.com/IntersectMBO/ouroboros-consensus/pull/1382)を修正し、パフォーマンスを+185%から-21%に改善し、[Cardanoのブループリント](https://github.com/cardano-scaling/cardano-blueprint/pull/7/files)に新しいコンセンサスセクションを追加し、最近の[テクニカルワーキンググループ会議](https://drive.google.com/file/d/1z1of19KJJD92Gv7Xt9ybC53vC_OqskcM/view)でKESエージェントとそのロードマップの重要性について議論しました。

### ウォレットとサービス

**Lace**チームは[バージョン1.20.0](https://www.lace.io/blog/lace-1-20-0-release)をリリースしました。これは、整理機能と鍵の最適化を改善してWeb3エクスペリエンスを強化したものです。明確さを上げるために、ウォレットとアカウントの名前を変更できるようになりました。Cardanoのガバナンスへの参加を一元化するために、新たに「Governance」（ガバナンス）タブを追加しました。

DApp署名はインプットフォーカスの改良によりスムーズになり、トランザクション、UTXO、および解決済みインプットがより効率的にキャッシュされるようになり、ウォレット操作の高速化に繋がりました。完全なアクティビティフィードが復元され、トランザクションと報酬の履歴の包括的な概要が提供されるようになりました。強化されたNamiモードのフルスクリーンランダーによって、Namiユーザーはより直感的にLaceに切り替えることができるようになりました。

デバッグログはオプションとなり、ユーザーは診断をより詳細に制御できるようになり、自動担保処理を削除することでトランザクションの柔軟性が向上しました。こうした更新により、よりシームレスなWeb3体験への道が開かれます。近日中にモバイルサポートが提供される予定です。

### スマートコントラクト

**Plutus**チームは公式にPlutus TxをPlinthと改称し、[ユーザーガイド](https://plutus.cardano.intersectmbo.org/docs/)を更新しました。Plinthとその新機能の詳細については、[このブログ](https://iohk.io/jp/blog/posts/2025/02/20/plutus-tx-gets-a-makeover-meet-plinth/)を参照してください。 

Plinthコンパイラーに改良を加え、inline-fixフラグや呼び出し元をインライン化する[PlutusTx.Optimize.Inline.inline](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Optimize-Inline.html)関数など、インライン化の詳細な調整を可能にしました。[PlutusTx.Optimize.spacetime](https://plutus.cardano.intersectmbo.org/haddock/master/plutus-tx/PlutusTx-Optimize-SpaceTime.html)に再帰展開をサポートするユーティリティ関数を追加しました。

### スケーリング

**Hydra**チームは、[Hydraエクスプローラー](http://explorer.hydra.family/)をオンラインに戻し、現在、さまざまなネットワークとバージョンで1000人を超える人々を追跡しています。エクスプローラーは改良して、複数のHydraバージョンを監視できるようにしました。[不正なパーティー情報](https://github.com/cardano-scaling/hydra/issues/1856)によるクラッシュを解決し、Hydraノードの[メモリーフットプリントの削減](https://github.com/cardano-scaling/hydra/issues/1618)を続けました。将来的には、メモリーのさらなる最適化、進行中のネットワーク機能の強化を続けるとともに、以前のスナップショットへのリセットを実装することにより、潜在的な「行き詰まり」シナリオに対処することを計画しています。

**Mithril**チームは新ディストリビューション[2506.0](https://github.com/input-output-hk/mithril/releases/tag/2506.0)をリリースしました。これは、この[開発者ブログ](https://mithril.network/doc/dev-blog/2025/02/14/client-security-advisory)で説明した証明書チェーンのセキュリティ問題を修正したものです。

Cardanoデータベースの増分認証の実装を続け、クライアントライブラリー、クライアントCLI、監視を完了し、バグを修正し、不安定な機能の解消に取り組みました。testing-sanchonet Mithrilネットワークの廃止と、macOS x64でCIのビルド済みバイナリサポートを終了する作業も行いました。

CIエンドツーエンドテストの残りの脆弱性をすべて修正し、Thales期からのレガシーコードのクリーンアップに取り組みました。

**Leios**チームは、ネットワークトポロジーの詳細なDeltaQ分析、広範なBLS暗号ベンチマーク、HaskellとRustシミュレーションの改良に取り組みました。BLS鍵登録の簡潔なスキームを検討し、詳細な証明書パフォーマンス分析を実施しました。HaskellとRustの両シミュレーションは、視覚化を向上させ、より現実的なテスト条件をサポートするために大幅に更新されました。

### VOLTAIRE 

新しい**Cardano憲法**はオンチェーンで批准され、次のエポック境界（2月23日日曜日）に暫定憲法に置き換えられます。 

Input | Output Researchの2025年ワークプログラム案は、Intersect研究ワーキンググループを通じて提示され、DRepとコミュニティとの社会化とフィードバックのために承認され、続いて予算情報ガバナンスアクション、そしてその後、トレジャリーの引き出しガバナンスアクションが承認されました。

5年間のCardanoビジョン提案には9つの重点分野にわたる34のワークストリームが含まれており、そのうち20の研究ストリームと6つのイノベーションストリームが2025年用として提案されています。ここでは、Leios、Hydraレイヤー2、トークノミクス、相互運用性、アンチグラインディング、fastBFTなど、Ouroborosプロトコルイニシアチブが含まれています。詳細は、[このブログ](https://iohk.io/jp/blog/posts/2025/02/05/io-researchs-vision-for-cardano-submitted-to-community-for-feedback-by-the-intersect-product-committee/)およびIntersect[研究ワーキンググループおよびプロダクト委員会](https://committees.docs.intersectmbo.org/groups-overview/working-groups/research)のナレッジベースを参照してください。

###   
Catalyst

**Catalyst** Fund13のオンボーディングがスムーズに進行する一方、Catalystプラットフォームの技術的進歩も継続しており、IdeaScaleの廃止がFund14に先立つ重要な優先事項となっています。  
  
Fund11でCardanoコミュニティから資金提供を受けたワーキンググループ研究とスコーピング分析イニシアチブが完了したことで、主要なマイルストンが達成されました。詳細は、[クローズアウト動画](https://x.com/Catalyst_onX/status/1890094322311393587)と[マイルストンモジュール](https://milestones.projectcatalyst.io/projects/1100087)で確認してください。  
  
Fund14が近づく中、チームはコミュニティの関心と新機能への期待を高めるために、[プラットフォームデモ](https://x.com/Catalyst_onX/status/1889329358491226151)の公開を開始しました。万が一見逃してしまった場合は、[Cardanoイノベーション予算案](https://forum.cardano.org/t/cardano-innovation-budget-proposal/143046)2025とCatalystロードマップをご覧ください。 

### 教育

**教育**チームはCardano開発者コースの更新と教育イベントの計画を続けました。Midnightチームと教育コンテンツのコラボレーションも行っています。
