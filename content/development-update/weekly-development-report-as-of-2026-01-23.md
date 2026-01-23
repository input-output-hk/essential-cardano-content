---
title: Weekly development report as of 2026-01-23
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/2fa93660-7d96-45c4-bb8d-3548d3551722/
image_text: Weekly development report as of 2026-01-23
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

This week in ecosystem updates:

*   [Surge](https://x.com/SurgeCardano/status/2013410611867046378) launched on the Cardano mainnet, introducing a non-custodial automated trading platform
    
*   [Minswap](https://x.com/MinswapDEX/status/2014152798326468927) announced an upcoming airdrop of the NIGHT token to eligible users, scheduled to begin on January 29
    
*   [EMURGO’s](https://x.com/emurgo_io/status/2014237011184652708) CEO, Phillip Pon, will appear as a featured speaker at the RWA Summit in Hong Kong this February
    
*   The updated [Cardano constitution](https://x.com/IntersectMBO/status/2014319961502540193) was ratified this week and will come into force on January 24
    
*   Finally, [Zengo Wallet](https://x.com/ZenGo/status/2008198449687113877) announced plans to integrate with Cardano, aiming to expand into the Bitcoin DeFi market. Zengo is a non-custodial Bitcoin wallet with approximately two million users.
    

### CORE TECHNOLOGY

With the beginning of 2026, the **ledger** team continues to focus on several high-priority initiatives spanning the implementation of nested transactions, protocol design, specification improvements, and testing.

The team continued defining ledger validation rules for [CIP-118: nested transactions](https://github.com/polinavino/CIPs/blob/polina/CIP0118/CIP-0118/README.md). They achieved a major milestone with the CIP’s acceptance, which finalized the design and surfaced several important new use cases enabled by nested transactions. On the implementation side, the team completed the binary format and Haskell representation for Dijkstra-era transactions and their sub-transactions. They also defined the overall ledger rule structure for nested transactions, with placeholder logic in place. Implementing the full validation logic will be a key focus in the coming weeks.

Work also began on the first phase of [CIP-159: account address enhancement](https://github.com/fallen-icarus/CIPs/blob/account-enhancement/CIP-0159/README.md). This long-anticipated proposal enables ada micropayments in the Dijkstra era. So far, the team has defined one of the new transaction fields and made preparatory code changes to support the broader implementation.

In parallel, the team made significant progress improving how the Common Development and Distribution License (CDDL) specification is defined and tested. This included major refactoring of `cuddle`, the tool used to define CDDL specifications, introducing a cleaner interface that reduces duplication across eras and improves safety. The team identified and fixed several specification bugs as part of this effort. They also added support for custom value generators, enabling new classes of conformance tests that were previously not possible due to CDDL’s limitations.

Additionally, the team released a new tool, \`[antigen](https://hackage.haskell.org/package/antigen)`, and began integrating it with` cuddle\`. Once complete, this will enable negative property testing for ledger decoders, helping prevent entire classes of deserialization bugs similar to those seen on mainnet earlier this year.

Beyond these core efforts, the ledger team also completed acceptance and full implementation of [CIP-167: remove](https://github.com/cardano-foundation/CIPs/pull/1089) `isValid` [from transactions](https://github.com/cardano-foundation/CIPs/pull/1089), addressed substantial technical debt, and made further improvements to the ledger testing framework.

### SMART CONTRACTS

This week, the **Plutus** team completed the implementation and costing of the Value primitives, along with all remaining development required for the upcoming intra-era hard fork.

The team also published a blog post recapping the [UPLC 2025 event](https://www.iog.io/news/uplc-2025-conference-recap), highlighting conference discussions and outcomes.

In collaboration with MLabs, the team implemented optimized `byteStringToInteger` and `integerToByteString` primitives. These changes reduce execution time from quadratic to linear by leveraging the ghc-bignum library, made possible by dropping support for GHC 8.

In parallel, work continued across several longer-term initiatives. This included early development of Plutus V4, ongoing discussions with professor Philip Wadler on formally verifying the UPLC inliner, further optimization of UPLC runtime performance, and continued improvements to Plinth's usability.

### SCALING

This year, the **Mithril** team continues to prioritize protocol decentralization through the decentralized message queue (DMQ) network, broader protocol adoption, and the introduction of succinct proofs by evolving the STM library with SNARKs.

This week, the team focused on implementing the [SNARK-friendly STM library](https://github.com/input-output-hk/mithril/issues/2795), continued developing the MVP for the non-recursive SNARK circuit, and began work on pre-aggregation SNARK primitives. In parallel, they also progressed on the prototype of the recursive SNARK circuit. 

Additionally, the team prepared for the deployment of the DMQ network by finalizing its infrastructure and node implementation. See how to get involved in the recently published [developer blogs](https://mithril.network/doc/dev-blog/2026/01/06/dmq-testing-program). Finally, they worked on [documenting a proposal](https://github.com/input-output-hk/mithril/issues/2831) to make Mithril and DMQ opt-out features of Cardano, and continued updating the protocol [security page](https://github.com/input-output-hk/mithril/issues/2703).

### VOLTAIRE

Cardano’s governance became fully decentralized in 2025, and 2026 began with a [new constitution](https://ipfs.io/ipfs/bafkreih62pydt57supou6dn5lqbf5klr7xu4xi2rrs7tl3thaufiqmvo24) ratified by a super-majority of the constitutional committee and delegated representatives (DReps).

A [governance action](https://gov.tools/outcomes/governance_actions/4dab331457b61b824bbc6ba4b9d9be4750e25c0b5dd42207aeb63c7431a6b704#0) was enacted on January 10 to add a member to the Cardano constitutional committee, bringing the number to two more than the minimum. The purpose is to provide a buffer in case one member resigns or is otherwise unable to continue.

The ‘Cardano Pentad’, comprising Input Output, EMURGO, the Cardano Foundation, Intersect, and the Midnight Foundation, is a new coalition that works as a coordinated, treasury-supported process focused on network-wide infrastructure needs. Rather than relying on fragmented community-led efforts, the Pentad emphasizes unified decision-making while maintaining ecosystem representation.

RESEARCH

The **Input Output Research (IOR)** team started the year with an ongoing focus on the **Cardano Vision** program. 

Last month, the team submitted two **draft reports** to Intersect for the [Fundamental Research](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-end-year-report-fundamental-research-draft/152057) and [Technology Validation](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-end-year-report-technology-validation-draft/152058) workstreams. These reports provide a high-level overview of progress under each workstream in 2025, moving from peer-reviewed science to implementation-ready designs. Watch the recent [video update](https://www.youtube.com/watch?v=LXWubWqpO6o&feature=youtu.be) from Fergie Miller, director of research partnerships, who reflects on 2025 achievements.

These reports are now **open for community review,** and IOR is seeking your insights and suggestions to ensure they reflect the highest industry standards in the Cardano ecosystem. Join the conversation and share your feedback on the Cardano Forum posts by **January 23**.![](https://ucarecdn.com/ae9a329b-de29-48f1-8658-86de9c8e996c/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_  

今週のエコシステム更新情報  

*   [Surge](https://x.com/SurgeCardano/status/2013410611867046378)のCardanoメインネットローンチで、ノンカストディアル自動取引プラットフォームが導入
    
*   [Minswap](https://x.com/MinswapDEX/status/2014152798326468927)がNIGHTトークンのエアドロップを対象ユーザーに向けて通知、開始は1月29日を予定
    
*   [EMURGO](https://x.com/emurgo_io/status/2014237011184652708)のCEO、Phillip Ponが2月に香港で開催されるRWAサミットに主要講演者として登壇予定
    
*   更新された[Cardano憲法](https://x.com/IntersectMBO/status/2014319961502540193)が今週批准され、1月24日から施行予定
    
*   [Zengo Wallet](https://x.com/ZenGo/status/2008198449687113877)がBitcoin DeFi市場拡大を目指してCardanoとの統合を発表。Zengoは、およそ200万のユーザーを擁するノンカストディアルのビットコインウォレット
    

### コアテクノロジー

2026年の幕開けとともに、**台帳**チームは、ネストされたトランザクションの実装、プロトコル設計、仕様の改善、テストなど、優先度の高い取り組みに引き続き注力しています。

[CIP-0118（ネストされたトランザクション）](https://github.com/polinavino/CIPs/blob/polina/CIP0118/CIP-0118/README.md)の台帳検証ルールの定義付けを続けました。このCIPの承認により、設計が確定し、ネストされたトランザクションによって可能になる複数の新しい重要なユースケースが明らかになったことは、大きなマイルストーンとなりました。実装面では、Dijkstra開発期のトランザクションおよびそのサブトランザクションのバイナリーフォーマットとHaskell表現を完了しました。ネストされたトランザクションの台帳ルール構造全体を定義し、プレースホルダーとしてのロジックを配置しました。完全な検証ロジックの実装は、今後数週間の主要な焦点となります。

Dijkstra開発期におけるADAマイクロペイメントを可能にする、待望の提案、[CIP-159（アカウントアドレスの強化）](https://github.com/fallen-icarus/CIPs/blob/account-enhancement/CIP-0159/README.md)の第1フェーズの作業も開始されました。 新しいトランザクションフィールドの一つを定義し、より広範な実装をサポートするための準備的なコード変更を行いました。

並行して、共通開発および頒布ライセンス（CDDL）仕様の定義とテスト方法の改善を大きく進めました。これには、CDDL仕様を定義するために使用されるツール`cuddle`の大幅なリファクタリングが含まれ、開発期をまたいだ重複を減らし、安全性を向上させるクリーンなインターフェイスが導入されました。この取り組みの一環として、仕様上のバグを特定し修正しました。カスタム値ジェネレーターのサポートを追加し、CDDLの制限により以前は不可能だった新しいクラスの適合性テストを可能にしました。

新しいツール\`[antigen](https://hackage.haskell.org/package/antigen)`をリリースし、`cuddle\`との統合を開始しました。これが完了すると、台帳デコーダーのネガティブ特性テストが可能になり、今年初めにメインネットで見られたものと同様の、非シリアル化に関するバグを未然に防ぐことができるようになります。

これらの中心的な取り組みに加え、[CIP-167（トランザクションから](https://github.com/cardano-foundation/CIPs/pull/1089)`isValid`[を削除）](https://github.com/cardano-foundation/CIPs/pull/1089)の承認と完全な実装を完了し、大幅な技術負債に対処し、台帳テストフレームワークの改良を進めました。

### スマートコントラクト

**Plutus**チームはValueプリミティブの実装とコスト計算、および間近に控えた開発期内ハードフォークに必要な残りのすべての開発を完了しました。

[UPLC 2025イベント](https://www.iog.io/news/uplc-2025-conference-recap)を、カンファレンスでの議論や成果に焦点を当てて振り返ったブログ記事を公開しました。

MLabsとの協力により、最適化した`byteStringToInteger`および`integerToByteString`プリミティブを実装しました。これらの変更により、GHC 8のサポートを終了することで利用可能になったghc-bignumライブラリーを活用し、実行時間を「二次」から「線形」に短縮しました。

並行して、複数の長期的な取り組みも継続しました。これには、Plutus V4の初期開発、Philip Wadler教授とのUPLCインライナーの形式検証に関する議論の継続、UPLCランタイムパフォーマンスのさらなる最適化、Plinthのユーザビリティ改善の継続が含まれます。  

スケーリング

今年、**Mithril**チームは、分散型メッセージキュー（DMQ）ネットワークを通じたプロトコルの分散化、プロトコルの普及拡大、SNARKを用いたSTMライブラリーの進化による簡潔な証明の導入を引き続き優先事項としています。

今週は、[SNARKに適したSTMライブラリー](https://github.com/input-output-hk/mithril/issues/2795)の実装に注力し、非再帰型SNARK回路のMVPの開発を継続し、集約前SNARKプリミティブの作業を開始しました。並行して、再帰型SNARK回路のプロトタイプ作成も進めました。 

インフラとノードの実装を完了し、DMQネットワークのデプロイ準備を整えました。参加方法については、最近公開された[開発者ブログ](https://mithril.network/doc/dev-blog/2026/01/06/dmq-testing-program)をご覧ください。MithrilとDMQをCardanoのオプトアウト機能にするための[提案の文書化](https://github.com/input-output-hk/mithril/issues/2831)に取り組み、プロトコル[セキュリティページ](https://github.com/input-output-hk/mithril/issues/2703)の更新を続けました。

### VOLTAIRE

Cardanoのガバナンスは2025年に完全な分散化を達成しました。2026年は、憲法委員会および委任代表者（DRep）の圧倒的多数によって批准された[新憲法](https://ipfs.io/ipfs/bafkreih62pydt57supou6dn5lqbf5klr7xu4xi2rrs7tl3thaufiqmvo24)とともに幕を開けました。

1月10日には、Cardano憲法委員会にメンバー1名を追加する[ガバナンスアクション](https://gov.tools/outcomes/governance_actions/4dab331457b61b824bbc6ba4b9d9be4750e25c0b5dd42207aeb63c7431a6b704#0)が執行され、委員の数は規定の最小人数を2名上回る体制となりました。これは、メンバーの一人が辞任した場合や継続不能となる事態に備え、バッファを確保することを目的としています。

Input Output、EMURGO、Cardano財団、Intersect、Midnight Foundationで構成されるCardano Pentad（カルダノペンタッド）は、ネットワーク全体のインフラニーズに焦点を当て、トレジャリーの支援を受けて調整を行う新しい連合体です。Pentadは、断片的なコミュニティ主導の取り組みに頼るのではなく、エコシステムの代表性を維持しつつ、統一された意思決定を行うプロセスを重視しています。

  
研究

**Input Output Research (IOR)**チームは、引き続き**Cardano Vision**プログラムへ焦点を当てつつ新年をスタートさせました。 

先月は、[基礎研究](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-end-year-report-fundamental-research-draft/152057)および[技術検証](https://forum.cardano.org/t/ior-cardano-vision-work-program-2025-end-year-report-technology-validation-draft/152058)のワークストリームに関する2つの**レポート草案**をIntersectに提出しました。これらのレポートは、2025年において、各ワークストリームが査読済みの科学から実装可能な設計へと移行していく進捗状況を高レベルで概観したものです。リサーチパートナーシップ担当ディレクターのFergie Millerによる、2025年の成果を振り返る最新の[進捗報告動画](https://www.youtube.com/watch?v=LXWubWqpO6o&feature=youtu.be)もご覧ください。

これらのレポートは現在**コミュニティレビューのために公開**されており、IORはCardanoエコシステムにおける最高の業界基準を反映させるため、皆様の洞察や提案を求めています。対話に参加し、**1月23日**までにCardanoフォーラムでフィードバックを共有してください。
