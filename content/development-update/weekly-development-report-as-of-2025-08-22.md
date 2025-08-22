---
title: Weekly development report as of 2025-08-22
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/cbf1b42a-e00f-4a83-bb19-1c6bea9d93d3/
image_text: Weekly development report as of 2025-08-22
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

The Cardano ecosystem is expanding, with a total of 2,008 projects currently built on the network. The number of delegated wallets stands at 1.34 million, and there are now 10.89 million native tokens. 

Token activity has also increased, with 220,275 token policies currently active. On-chain usage remains strong, with a total of 112.98 million transactions processed. 

Developer activity continues at a steady pace, with 320 GitHub commits recorded, reflecting ongoing technical contributions to the ecosystem.

In other news:

*   [Blocksign](https://x.com/docufi3d/status/1958090166670700551) has officially obtained ISO 27001:2022 certification, becoming the first Cardano-based company to reach this milestone
    
*   [ADA and CNTs](https://x.com/TapTools/status/1958636836118815109) can now be transferred directly inside Unreal Engine 5, which is used in more than 100 games
    
*   [Nominations](https://x.com/CardanoSummit/status/1957806737546780821) are now open for the Cardano Summit Awards 2025
    
*   [Handle](https://x.com/adahandle/status/1957537576623210969) has partnered with 14 major Cardano projects for their H.A.L. NFT minting experience.
    

### CORE TECHNOLOGY

Over the past two weeks, the **consensus** team continued to advance the integration of LSM trees, the key evolving signature (KES) agent, and the broader Ouroboros Peras initiative. They also made progress on Leios prototyping by [drafting a new section](https://github.com/input-output-hk/ouroboros-leios/pull/498) for the Leios CIP that focuses on the new mini-protocols design aimed at optimizing communication and concurrency.

Additionally, the team implemented two improvements related to Genesis. One [enhancement improved tracing](https://github.com/IntersectMBO/cardano-node/pull/6306) to increase observability, while the other [introduced a new metric for better](https://github.com/IntersectMBO/ouroboros-consensus/pull/1628) monitoring of node startup behavior. 

The **site reliability engineering (SRE)** team has been improving the Cardano environments and conducting general maintenance. Most of the Input Output Engineering playground and mainnet `cardano-node` machines now utilize the new tracing stack, with only a few canary machines still operating on the legacy `cardano-node` tracing system. In addition, the team upgraded \`[adawallet](https://github.com/input-output-hk/adawallet) `to support message signing. This enables Glacier Drop claims for` adawallet\` accounts. Finally, the team updated the [cardano-airgap](https://github.com/IntersectMBO/cardano-airgap) to incorporate this new capability.

### SCALING

This week, the **Hydra** team focused on delivering fixes and user-requested features while actively supporting the Midnight Glacier Drop. A key new feature is the ability to perform a partial `commit` by incrementally depositing UTXOs, as detailed in the [incremental commit guide](https://github.com/cardano-scaling/hydra/blob/master/docs/docs/how-to/incremental-commit.md#deposit-utxo-to-commit). Moving forward, the team will prioritize high-impact improvements, investigate the partial fanout feature, and continue their support for the Glacier Drop.

### VOLTAIRE

The community of ada holders has spoken, and a new constitutional committee has been elected. This committee is responsible for voting on all governance actions, except for types 1 (no-confidence) and 2 (update committee).

The Cardano constitution requires a specific governance action (an update committee action) before the newly elected members can assume their roles in the committee.

The [governance action](https://gov.tools/governance_actions/47a0e7a4f9383b1afc2192b23b41824d65ac978d7741aca61fc1fa16833d1111#0) was submitted on July 30, 2025, and will expire on September 2.

We are calling all DReps and SPOs to participate!

Please note that only ‘Yes’ votes will count toward passing this action. Abstaining will be considered a ‘No’ vote. This rule ensures that important decisions have the backing of the majority of the community.

As of the publication date, the DRep vote is at 69%, which exceeds the required threshold of at least 67% required to pass. Additionally, 31% of votes have not been cast. More concerning is the SPO vote, which [currently stands](https://adastat.net/governances/47a0e7a4f9383b1afc2192b23b41824d65ac978d7741aca61fc1fa16833d111100) at 37.84% of the required 51%, with a staggering 62.16% still to vote.

If you are an SPO and are unsure how to vote, please refer to the step-by-step guide provided by the ATADA stake pool: [How to vote on Cardano governance actions as an SPO on an offline machine.](https://x.com/ATADA_Stakepool/status/1834667349376401669) 

### CATALYST

Project **Catalyst** has recently launched the highly anticipated Fund14. Town hall #202 provided an update on Fund14's progress. If you missed it, you can watch [the recording](https://www.youtube.com/live/Ir9LakrOaKY?si=kEIdkUDCF5sLHrZE). 

Additionally, the team is getting ready to launch the community review stage, with over 3,500 community reviewers prepared to help shape Fund14. Be sure to keep an eye on the weekly newsletter for more information about the next steps.

### EDUCATION

This week, the **education** team continued gathering community feedback on the launch of the [Mastering Cardano e-book](https://book.io/book/mastering-cardano/) and progressed with the self-paced Cardano education program.

Looking ahead, the team is preparing for the next Cardano Days event – a two-day in-person education event at the University of Wyoming on September 26-27, 2025. This event is a key component of the wider[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html). Registration is officially open on the[Luma page](https://lu.ma/g436so6c).

![](https://ucarecdn.com/2dde3f4f-4349-4c13-9352-a4f37de45180/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは拡大しており、現在ネットワークでは合計2,008のプロジェクトが構築されています。委任済みウォレット数は134万、ネイティブトークンは現在1089万に上っています。 

トークンアクティビティも増加し、現在22万275のトークンポリシーが稼働しています。オンチェーンの利用は引き続き好調で、合計1億1298万件のトランザクションが処理されています。 

開発者の活動も着実なペースで続いており、320件のGitHubコミットが記録されるなど、エコシステムへの継続的な技術的貢献が示されています。

その他のニュース：

*   [Blocksign](https://x.com/docufi3d/status/1958090166670700551)はISO 27001:2022認証を正式に取得し、Cardanoベースの企業として初めてこのマイルストーンを達成
    
*   [ADAとCNT](https://x.com/TapTools/status/1958636836118815109)が100を超えるゲームで使用されているUnreal Engine 5内で直接送金可能に
    
*   Cardano Summit Awards 2025への[ノミネート](https://x.com/CardanoSummit/status/1957806737546780821)開始
    

[Handle](https://x.com/adahandle/status/1957537576623210969)がH.A.L. NFTミント経験のために14の主要なCardanoプロジェクトと提携  
コアテクノロジー

この2週間、**コンセンサス**チームはLSMツリー、鍵変化型署名（KES）エージェント、より広範なOuroboros Perasイニシアチブの統合を続けました。通信と並行性の最適化を目的とした新しいミニプロトコル設計に焦点を当てたLeios CIPの[新しいセクションを起草](https://github.com/input-output-hk/ouroboros-leios/pull/498)して、Leiosのプロトタイプを進展させました。

Genesis関連の改善を2つ実施しました。1つは、可観測性を高めるために[追跡を改善](https://github.com/IntersectMBO/cardano-node/pull/6306)したことで、もう1つはノードの起動動作をより良く監視するための[新しいメトリックを導入](https://github.com/IntersectMBO/ouroboros-consensus/pull/1628)したことです。 

**SRE**（サイト信頼性エンジニアリング）チームは、Cardanoの環境改善と総合メンテナンスに取り組んできました。Input Output Engineeringのプレイグラウンドとメインネットのcardano-nodeマシンのほとんどで、新しい追跡スタックが利用されるようになり、ごく一部のカナリアマシンだけが、まだ従来のcardano-node追跡システムで稼働しています。メッセージ署名をサポートするよう\`[adawallet](https://github.com/input-output-hk/adawallet)`をアップグレードしました。これにより、`adawallet\`のアカウントでもGlacier Dropの受け取りが可能になりました。この新しい機能を組み込むために[cardano-airgap](https://github.com/IntersectMBO/cardano-airgap)を更新しました。

### スケーリング

**Hydra**チームは、Midnight Glacier Dropを積極的にサポートしながら、バグ修正とユーザーから要望があった機能の提供に注力しました。主要な新機能は、UTXOを段階的にデポジットすることで部分的な `commit` を実行できる機能です。この詳細は、[インクリメンタルコミットガイド](https://github.com/cardano-scaling/hydra/blob/master/docs/docs/how-to/incremental-commit.md#deposit-utxo-to-commit)で説明されています。今後は影響の大きい改善を優先し、部分的なファンアウト機能の調査、Glacier Dropへのサポートを継続していく予定です。

### VOLTAIRE

ADA保有者のコミュニティが意志を示し、新しい憲法委員会が選出されました。この委員会は、タイプ1（不信任）とタイプ2（委員会更新）を除く、すべてのガバナンスアクションに対する投票を担います。

Cardano憲法は、新たに選出されたメンバーが委員会での役割を引き継ぐためのガバナンスアクション（委員会更新アクション）を定めています。

この[ガバナンスアクション](https://gov.tools/governance_actions/47a0e7a4f9383b1afc2192b23b41824d65ac978d7741aca61fc1fa16833d1111#0)は2025年7月30日に提出され、9月2日に期限を迎えます。

すべてのDRepとSPOの皆さんは、ぜひ参加してください。

なお、「Yes」票のみが、このアクションを通過させるためにカウントされることに注意してください。棄権は「No」票と見なされます。このルールは、重要な決定がコミュニティの過半数の支持を得ていることを保証するものです。

可決に必要なDRep投票率は67%であり、本レポートの執筆時点で69%に達しているものの、36%の票がまだ投じられていません。懸念されるのはSPOの投票で、可決に必要な51%に対し[現在](https://adastat.net/governances/47a0e7a4f9383b1afc2192b23b41824d65ac978d7741aca61fc1fa16833d111100)は37.84%にとどまっており、62.16%という驚くべき数の票がまだ投じられていません。

SPOで投票方法がわからない場合は、ATADAステークプールが提供するステップバイステップガイド、[オフラインマシンでSPOとしてCardanoガバナンスアクションに投票する方法](https://x.com/ATADA_Stakepool/status/1834667349376401669)を参照してください。 

### CATALYST

Project **Catalyst**では最近、待望のFund14が立ち上げられ、第202回タウンホールで、その進捗状況が報告されました。見逃した場合は、[録画](https://www.youtube.com/live/Ir9LakrOaKY?si=kEIdkUDCF5sLHrZE)をご覧ください。 

現在はコミュニティレビューの準備中で、3500人以上のコミュニティレビュアーがFund14の形成を支援する準備をしています。週刊ニュースレターに目を通し、次のステップについての情報を逃さないでください。

### 教育

**教育**チームは、 [Mastering Cardanoの電子書籍](https://book.io/book/mastering-cardano/)発売に関するコミュニティからのフィードバックを収集したほか、自習型のCardano教育プログラムについて進めました。

2025年9月26日、27日にワイオミング大学で開催される2日間の対面イベント、Cardano Daysイベントの準備も進めています。これは、[Wyoming Blockchain Stampede](https://www.uwyo.edu/acct-fin/cbdi/stampede/index.html)の主要イベントです。登録は[Lumaページ](https://lu.ma/g436so6c)で公式に受付中です。
