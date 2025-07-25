---
title: Weekly development report as of 2025-07-25
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/8531e941-a40b-46c4-903f-153714ca8ce4/
image_text: Weekly development report as of 2025-07-25
---

### ECOSYSTEM UPDATES

Cardano continues its growth with steady increases across the ecosystem. Currently, 2,007 projects are building on the network, with 1.34 million delegated wallets. Transaction volume has reached 111.86 million, reflecting ongoing activity and a 0.27% increase.

In terms of assets, the ecosystem now hosts 10.85 million native tokens under 218,533 token policies. Smart contract activity remains robust, with 139,919 Plutus scripts among which 8,512 Aiken scripts. Governance participation has also risen, now involving 1,403 DReps, including 976 active DReps, marking a 1.22% increase since the previous week. Developer activity surged significantly this week, reflected in 390 GitHub commits, highlighting a strong 31% growth in development engagement since the previous week.

In other news:

*   The Cardano Foundation's [Q2 report](https://x.com/Cardano_CF/status/1948417703489806425) is now live, highlighting new product launches, enhancements in governance tooling, and more ecosystem developments
    
*   Crypto exchange [Coinstore](https://x.com/CoinstoreExc/status/1947591753093288293) announced plans to list USDA, with an official launch date yet to be confirmed
    
*   [Atrium Lab’s](https://x.com/atrium_lab/status/1947687273493106728) SocialFi platform has officially launched on mainnet, allowing users to begin minting their profiles
    
*   [Via Labs](https://x.com/VIA_Labs/status/1946208351932543405) announced a partnership with Midnight to enhance cross-chain communication
    
*   The public testnet for the stablecoin project [Obymare](https://x.com/obymare/status/1947679091626250742) is now live.
    

### CORE TECHNOLOGY

This week, the **core technology** teams released [node v.10.5.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.1), which fixes the `slotsMissed_int` tracing metric and introduces networking enhancements, such as Windows socket fixes, shorter DNS error caching, and refined peer sharing configuration behavior. The `--non-producer-node` flag has been deprecated in favor of `--start-as-non-producer-node`. This release also removes unused binaries from the node artifacts and adds the tx-generator tool. See [release notes](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.1) for more details. 

Over the past two weeks, the **consensus** team drafted the addition of Linear Leios to the Haskell simulator, introduced refactorings and optimizations necessary for the upcoming weighted-chain optimizations required for Peras commits ([1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1591), [2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1598)), and merged a thread-labeling feature into \`[async](https://github.com/simonmar/async/pull/164)\`, enabling automatic labeling of threads based on a Cabal flag. This labeling capability is essential for easier debugging in [cardano-node](https://github.com/IntersectMBO/cardano-node/issues/6086).

The team also fixed a snapshot deserialization error in Byron and updated dependencies, including [quick-check-state-machine](https://github.com/stevana/quickcheck-state-machine/pull/53) and [fs-sim](https://github.com/input-output-hk/fs-sim/pull/105), to align with `QuickCheck 2.16`. Work began on integrating [lsm-trees](https://github.com/IntersectMBO/lsm-tree/pull/776) into `ouroboros-consensus`, targeting inclusion in Cardano node v.10.7. Additionally, they integrated the stubbed Dijkstra era into consensus, and updated storage tests to use the new version of \`[quickcheck-lockstep](https://github.com/IntersectMBO/ouroboros-consensus/pull/1585)`, enabling the genesis state machine tests to leverage` [quickcheck-dynamic](https://github.com/IntersectMBO/ouroboros-consensus/pull/1413)\`.

### WALLETS AND SERVICES

The **Lace** team released [Lace v.1.25](https://www.lace.io/blog/lace-1-25-release), delivering significant enhancements as they continue working toward the major v.2 release. This update introduces a partnership with [NFTPrintLab](https://nftprintlab.io/), allowing users to transform digital NFTs into high-quality physical art prints. Lace wallet holders can soon select NFTs directly within their wallet, customize print styles—including framing, material, and size — and have premium-quality artwork delivered to their doorstep.

Additionally, Lace v.1.25 introduces Bitcoin transaction metadata embedding via the `OP_RETURN` opcode. Users can now attach messages, links, or context directly to Bitcoin transactions. This opens new possibilities for developers and artists and empowers users to explore innovative applications on the Bitcoin blockchain.

### SMART CONTRACTS

Over the past few weeks, the **Plutus** **Core** team expanded functionality by introducing [case analysis on lists](https://github.com/IntersectMBO/plutus/pull/7188) in Untyped Plutus Core (UPLC) programs, enhancing performance by replacing built-in functions with more efficient `case` expressions. Additionally, work progressed on implementing similar [case analysis for built-in pairs and units](https://github.com/IntersectMBO/plutus/pull/7221). The team is preparing to [enable sums-of-products and all built-in functions across Plutus V1, V2, and V3](https://github.com/IntersectMBO/plutus/pull/7223) for the upcoming intra-era hard fork. Efforts continued toward introducing a new built-in [Value type](https://github.com/IntersectMBO/plutus/pull/7225) alongside associated functions, as well as the [multi-scalar multiplication primitive](https://github.com/IntersectMBO/plutus/pull/7074).

On the **Plinth** side, the team developed utilities and tooling to improve the developer experience. They added a new module ([PlutusLedgerApi.Envelope](https://github.com/IntersectMBO/plutus/pull/7197))to conveniently generate `.plutus` files from `CompiledCode` without relying on the Cardano API. The new [logWithCallTraceEmitter](https://github.com/IntersectMBO/plutus/pull/7178) emitter mode leverages compiler-generated trace messages to create detailed call traces for debugging evaluation failures. They also expanded benchmarking coverage by incorporating a realistic [open oracle protocol](https://github.com/IntersectMBO/plutus/pull/7156) and [Cardano-loans](https://github.com/IntersectMBO/plutus/pull/7206) scripts into `plutus-benchmark`, enabling better impact assessment for language and compiler changes. Work is ongoing to compile Haskell's `Bool` type directly into UPLC's built-in boolean type, replacing less efficient encodings.

In formal methods, the team successfully [integrated built-in arrays into Plutus metatheory](https://github.com/IntersectMBO/plutus/pull/7127), thereby reinforcing the theoretical foundation of Plutus.

Finally, planning is underway for the UPLC Programming Language Conference, taking place at the University of Edinburgh from October 27 to 31, 2025. The event will bring together key contributors advancing the UPLC programming language. We invite participants to suggest talks or panels, helping to shape the agenda.

The [registration form](https://services.iohk.io/uplc-workshop-interest) is open until August 8, 2025, and requires information on location, travel costs, dietary requirements, and suggested session topics.

Follow [Input | Output on X](https://x.com/InputOutputHK) for event updates and more.

### VOLTAIRE

Cardano governance reached a significant milestone as 39 treasury withdrawal actions are set for a final vote by DReps and the constitutional committee (CC). Intersect, acting as administrator, will oversee the delivery of approved proposals, with contracts enforced by on-chain smart contracts and monitored by an independent oversight committee.

Each action requires 67% support from active DRep stakeholders and backing from at least five of the seven CC members to pass. Voting is open until the end of Epoch 576 (August 17, 2025).

Cardano uses a one-lovelace, one-vote system. If a DRep doesn’t vote, their delegated stake counts as a ‘No.’

A DRep becomes inactive by not voting for a number of epochs. This number is set by the protocol parameter `drepActivity` and shows as ‘DRep Inactivity’ in [Cardanoscan](https://cardanoscan.io/protocolparams). A DRep can become active again simply by casting a vote.

That’s why it’s essential to check how your [DRep is voting](https://adastat.net/governances). If they’re inactive or not aligned with your views, you can change your delegation at any time using [GovTool.](https://gov.tools/)

This is the first fully audited treasury process on the Cardano blockchain. For more details, refer to [CIP-1694](https://cips.cardano.org/cip/CIP-1694) and ensure that your stake is being represented.

### CATALYST

The **Catalyst** team officially launched the highly anticipated [Fund14](https://www.youtube.com/live/3UUMhoEMGz8?feature=shared) during [town hall #198](https://www.youtube.com/live/3UUMhoEMGz8?feature=shared). For a quick recap, you can review the [presentation](https://bit.ly/3GZLsPu). While the journey has begun, there are a few important things to keep in mind:

*   Proposal submissions open next week
    
*   No reviews, voting, or funding decisions will happen until DRep approval of the _treasury withdrawal governance action._
    

Curious about the reasoning behind this phased approach? Read more [here](https://forum.cardano.org/t/launching-catalyst-fund14-gathering-ideas-honouring-governance-and-powering-forward/147564).

Don’t miss next week’s town hall, where the team will be demoing Catalyst key chain – an exciting new feature for the community. 

Also, be sure to check out the [Fund14 launch guide](https://projectcatalyst.io/f14launchguide.pdf), which is designed to help you navigate this journey with confidence.

### EDUCATION

This week, the **education** team is focusing on Mastering Cardano and preparing for workshops at Rare Evo.  
  
![](https://ucarecdn.com/8a2f808f-0e1e-42d1-9d8b-4c2af6c5b79f/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

Cardanoはエコシステム全体で着実に成長を続けています。現在、2,007のプロジェクトがネットワークでアクティブに構築されており、134万のウォレットが委任されています。これは、ユーザーによる持続的なエンゲージメントを示しています。トランザクション件数は、活動の継続を反映し、0.27%増の1億1,186万に達しました。

アセットに関しては、エコシステムは現在21万8,533のトークンポリシーの下で1085万のネイティブトークンをホストしています。スマートコントラクトの活動も堅調で、現在13万9,919のPlutusスクリプトと8,512のAikenスクリプトがデプロイされています。ガバナンスへの参加も増加し、DRep数は976人のアクティブメンバーを含む1,403人と、1.22%の増加を見せています。開発者の活動は今週大幅な増加を見せました。すなわち、390件のGitHubコミットが示すように、開発エンゲージメントは31%の急増を記しました。

その他のニュース：

*   Cardano財団が、新製品の立ち上げ、ガバナンスツールの強化、エコシステムのさらなる発展に焦点をあてた[第2四半期レポート](https://x.com/Cardano_CF/status/1948417703489806425)を公開
    
*   暗号取引所の[Coinstore](https://x.com/CoinstoreExc/status/1947591753093288293)がUSDA取り扱い計画を発表、公式開始日は後日発表
    
*   [Atrium Lab](https://x.com/atrium_lab/status/1947687273493106728)のSocialFiプラットフォームがメインネットで正式に稼働、ユーザープロファイルの作成が可能に
    
*   [VIA Labs](https://x.com/VIA_Labs/status/1946208351932543405)がクロスチェーンコミュニケーションを強化を目的としたMidnightとの提携を発表
    
*   ステーブルコインプロジェクト[Obymare](https://x.com/obymare/status/1947679091626250742)パブリックテストネットが稼働開始
    

### コアテクノロジー

**コアテクノロジー**チームは[ノードv.10.5.1](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.1)をリリースしました。ここでは`slotsMissed_int`トレースメトリクスの修正や、Windowsソケットの修正、DNSエラーキャッシュの短縮、洗練されたピア共有設定動作などのネットワーク拡張が導入されています。`--start-as-non-proder-node`によって、`--non-proder-node`フラグが非推奨となりました。ノードアーティファクトから未使用のバイナリの削除、tx-generatorツールの追加も実施されています。詳細は[リリースノート](https://github.com/IntersectMBO/cardano-node/releases/tag/10.5.1)をご覧ください。 

過去2週間にわたり、**コンセンサス**チームは、HaskellシミュレーターにLinear Leiosを追加するドラフトを作成しました。今後のPerasコミット（[1](https://github.com/IntersectMBO/ouroboros-consensus/pull/1591)、[2](https://github.com/IntersectMBO/ouroboros-consensus/pull/1598)）に必要な加重チェーン最適化のためのリファクタリングと最適化を導入し、\`[async](https://github.com/simonmar/async/pull/164)\`にスレッドラベル付け機能をマージしました。これにより、Cabalフラグに基づいてスレッドの自動ラベル付けが可能になります。このラベリング機能は、[Cardano-node](https://github.com/IntersectMBO/cardano-node/issues/6086)でのデバッグを容易にするために不可欠です。

Byronのスナップショット逆シリアル化に関するエラーを修正し、[quick-check-state-machine](https://github.com/stevana/quickcheck-state-machine/pull/53)や[fs-sim](https://github.com/input-output-hk/fs-sim/pull/105)を含む依存関係を`QuickCheck 2.16`に合わせて更新しました。[lsm-tree](https://github.com/IntersectMBO/lsm-tree/pull/776)を`ouroboros-consensus`に統合する作業が始まりました。目標はCardanoノードv.10.7への包含です。スタブされたDijkstra期をコンセンサスに統合し、ストレージテストを更新して\`[quickcheck-lockstep](https://github.com/IntersectMBO/ouroboros-consensus/pull/1585)`の新バージョンを使用し、ジェネシスステートマシンのテストで`[quickcheck-dynamic](https://github.com/IntersectMBO/ouroboros-consensus/pull/1413)\`を利用できるようにしました。

### ウォレットとサービス

**Lace**チームは、メジャーv.2に向けて作業を続ける中、Lace [v.1.25](https://www.lace.io/blog/lace-1-25-release)をリリースして大幅な機能強化を提供しました。この更新では、[NFTPrintLab](https://nftprintlab.io/)とのパートナーシップが導入され、ユーザーはデジタルNFTを高品質な実際のアートプリントに変換できるようになりました。Laceウォレットの保有者はまもなくウォレット内で直接NFTを選択し、フレーミング、素材、サイズを含むプリントスタイルをカスタマイズして、高品質なアートワークを自宅に配送してもらえるようになります。

Lace v.1.25ではさらに、`OP_RETURN`オペコードを介したビットコイントランザクションメタデータの埋め込みが導入されています。ユーザーはメッセージ、リンク、コンテキストを直接ビットコイントランザクションに添付できるようになりました。これにより、開発者やアーティストに新たな可能性が開かれ、ユーザーはビットコインブロックチェーンで革新的なアプリケーションを探求することができるようになります。

### スマートコントラクト

ここ数週間、**Plutus** **Core**チームはUPLC（Untyped Plutus Core）プログラムの[リストにケース分析](https://github.com/IntersectMBO/plutus/pull/7188)を導入して機能を拡張し、組み込み関数をより効率的な`case`式に置き換え、パフォーマンスを向上させました。[組み込みのペアとユニット](https://github.com/IntersectMBO/plutus/pull/7221)についても同様の[ケース分析](https://github.com/IntersectMBO/plutus/pull/7221)を実装する作業が進められました。来る開発期内ハードフォークに向けて、[Plutus V1、V2、V3全体で和積型とすべての組み込み関数を有効にする](https://github.com/IntersectMBO/plutus/pull/7223)準備を進めています。新しい組み込みの[Value型](https://github.com/IntersectMBO/plutus/pull/7225)と関連する関数、さらに[多倍長スカラー乗算プリミティブ](https://github.com/IntersectMBO/plutus/pull/7074)の導入に向けた取り組みも継続されました。

**Plinth**側では、開発者エクスペリエンスを向上させるためのユーティリティとツールを開発しました。Cardano APIに依存せずに`CompiledCode`から直接`.plutus`ファイルを簡単に生成できる新しいモジュール（[PlutusLedgerApi.Envelope](https://github.com/IntersectMBO/plutus/pull/7197)）を追加しました。新しい[logWithCallTraceEmitter](https://github.com/IntersectMBO/plutus/pull/7178)エミッターモードは、コンパイラーが生成するトレースメッセージを活用し、評価失敗時の詳細なコールトレースを作成します。また、現実的な[オープンオラクルプロトコル](https://github.com/IntersectMBO/plutus/pull/7156)と[Cardano-loans](https://github.com/IntersectMBO/plutus/pull/7206)スクリプトを`plutus-benchmark`に組み込むことでベンチマークの適用範囲を拡大しました。これにより、言語やコンパイラーの変更による影響をより適切に評価できるようになります。Haskellの`bool`型をUPLCの組み込みブール型に直接コンパイルし、効率の低いエンコーディングを置き換える作業も進行中です。

形式手法では、[組み込み配列をPlutusメタ理論に統合](https://github.com/IntersectMBO/plutus/pull/7127)することに成功し、Plutusの理論的基盤を強化しました。

2025年10月27日から31日にエディンバラ大学で開催されるUPLC Programming Language Conference（UPLCプログラミング言語会議）の計画が進行中です。このイベントでは、UPLCプログラミング言語を進歩させている主要な貢献者が一堂に会します。現在、講演やパネルディスカッションについて提案し、アジェンダの形成を助けてくれる参加者を募集しています。

[登録フォーム](https://services.iohk.io/uplc-workshop-interest)は2025年8月8日まで受け付けています。居住地、旅費、食事の要件、提案するセッショントピックに関するなどの情報が必要です。

[XでInput | Output](https://x.com/InputOutputHK)をフォローし、イベントの更新情報などを確認してください。

### VOLTAIRE

Cardanoガバナンスは、DRepと憲法委員会（CC）による39件のトレジャリー引き出しアクションが最終投票にかけられることで、重要なマイルストーンを達成しました。管理者として機能するIntersectが承認された提案の実行を監督し、契約はオンチェーンのスマートコントラクトによって強制され、独立した監視委員会によって監視されます。

各アクションが通過するには、アクティブなDRepステークホルダーの67%、CCメンバー7人のうち5人以上の支持が必要です。投票はエポック576の終了時（2025年8月17日）まで受け付けられます。

Cardanoは、1 lovelace 1票制を採用しています。DRepが投票しない場合、委任されたステークは「いいえ」としてカウントされます。

一定数投票しなかったDRepは非アクティブになります。この数はプロトコルパラメーター`drepActivity`で設定でき、[Cardanoscan](https://cardanoscan.io/protocolparams)では‘Rep Inactivity’で表示されます。投票を行いさえすれば、DRepは再びアクティブになれます。

だからこそ、[DRepの投票行動](https://adastat.net/governances)を確認することが不可欠です。アクティブでなかったり、自分の意見と合わない場合は、[GovTool](https://gov.tools/)を使っていつでも委任を変更できます。

これは、Cardanoブロックチェーンで初めて完全に監査されたトレジャリープロセスです。詳細は[CIP-1694](https://cips.cardano.org/cip/CIP-1694)を参照し、あなたのステークが適切に代表されていることを確認してください。

### CATALYST

Catalystチームは、[第198回タウンホール](https://www.youtube.com/live/3UUMhoEMGz8?feature=shared)で待望の[Fund14](https://www.youtube.com/live/3UUMhoEMGz8?feature=shared)を公式に開始しました。[プレゼンテーション](https://bit.ly/3GZLsPu)で簡単に復習できます。Fund14の旅は始まりましたが、重要なことを心にとめておいてください。

*   提案書の提出は来週から受付開始
    
*   DRepが_トレジャリー引き出しガバナンスアクションを_承認するまで、レビュー、投票、資金調達の決定は行われない
    

この段階的アプローチの理由に興味がある場合は、[ここ](https://forum.cardano.org/t/launching-catalyst-fund14-gathering-ideas-honouring-governance-and-powering-forward/147564)で詳細をチェックしてください。

来週のタウンホールでは、コミュニティにとってエキサイティングな新機能であるCatalystキーチェーンのデモが行われます。 

また、この旅を自信を持ってナビゲートするのに役立つように設計された[Fund14ローンチガイド](https://projectcatalyst.io/f14launchguide.pdf)のチェックもお忘れなく。

教育

**教育**チームはMastering Cardanoに注力しているほか、Rare Evoで開催されるワークショップの準備を行っています。
