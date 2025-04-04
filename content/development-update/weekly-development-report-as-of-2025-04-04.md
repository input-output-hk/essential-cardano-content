---
title: Weekly development report as of 2025-04-04
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/12aa452c-aade-48d1-8f33-8b40b98d855d/
image_text: Weekly development report as of 2025-04-04
---

### ECOSYSTEM UPDATES

_The information in this section is based on publicly available sources and is provided for informational purposes only. It does not constitute an endorsement or recommendation of any project, product, or service mentioned._

Cardano’s ecosystem continues to grow. The number of projects building on the network has increased to 1,991. Delegated wallets have also grown to 1.329 million, reflecting consistent user participation in staking.

The platform now hosts 10.77 million native tokens and 211,292 token policies, up 0.38% and 0.14% since last week, respectively. Smart contract deployment remains active with 130,036 Plutus scripts. The network has now processed 108.10 million transactions, and 1,230 DReps (including 927 active DReps) are currently involved in governance, highlighting a 0.49% rise in DRep since the previous week.  
In other news:

*   [Input | Output](https://x.com/InputOutputHK/status/1907038759582928985) is attending Paris Blockchain Week on April 8-10. Learn more about shaping the future of blockchain and Web3 technologies in this [news post](https://iohk.io/en/newsroom/shaping-the-future-of-blockchain-and-web3-technologies-together).
    
*   [Turn Protocol](https://x.com/turnprotocol/status/1905373049639346374) has launched its public testnet, offering privacy DeFi on Cardano.
    
*   [LCX has submitted](https://x.com/montymetzger/status/1904571478944997490) the first MiCA-compliant white paper for Cardano, which is now listed in the official ESMA Register. ADA now has ‘Admission to Trading’ at the LCX exchange.
    
*   [Cexplorer 2.0](https://x.com/cexplorer_io/status/1904501229767557122) is on the way, featuring a new backend, updated features, and a refreshed design.
    

### CORE TECHNOLOGY

This week, the **performance and tracing** team conducted preliminary benchmarks on node v.10.3, comparing `GHC8` and `GHC9` compilers, scaling Plutus budgets, and tuning runtime parameters under `GHC9`. Development efforts included creating a new Plutus script calibration tool and updating benchmarking profiles for maintenance. On the infrastructure side, the team adjusted tooling to align with the latest Cardano API and made significant progress simplifying the performance workbench. Additionally, the team tested new tracing enhancements in mainnet metrics monitoring and introduced a generalized Nix service configuration for `cardano-tracer`.

The **consensus team** collaborated with Well-Typed, who presented the penultimate milestone for the `lsm-tree` library. The library now supports table unions with I/O error injection and is compatible with Linux, Windows, and macOS. Once finalized, it will serve as a persistent backend for storing ledger states.

Additionally, several consensus team members attended the [Peras workshop](https://moduscreate.zoom.us/rec/share/a9wMSF373RrN0-UFMPZec02YQTRA_AQotaC7r3kD4GnEA8yeyUAkOfQ0lzcioxpn.dcXTAW8BXwdRH3d4), where they participated in a presentation and discussed a [design and implementation plan](https://tweag.github.io/cardano-peras/peras-design.pdf). The next steps involve making decisions in the Intersect technical steering committee regarding protocol trade-offs, such as operational costs, rewards, and parameterization related to settlement times.

During the technical working group meeting, attendees discussed the incorporation of batch VRF support into `oroboros-consensus` and considered a [draft pull request for a CDDL definition](https://github.com/IntersectMBO/ouroboros-consensus/pull/1422). They also reviewed [support for older-era NTC](https://github.com/IntersectMBO/ouroboros-consensus/issues/1429), exposed a function allowing consensus to provide versions for specific queries, revealed Byron CDDLs from the consensus, and added `QueryStakePoolDefaultVote` for node v.10.3.

### SCALING

This week, the **Hydra** team concentrated on bug fixes and investigations and added a feature to help ‘un-stuck’ a Hydra head through [side-loading snapshots](https://github.com/cardano-scaling/hydra/issues/1858). Documentation for this feature is underway, and future work includes merging additional bug fixes and implementing a ‘Withdraw 0’ trick for custom Plutus operations on layer 2, ensuring users can still fan out.

They also introduced an \`[\--advertise option](https://github.com/cardano-scaling/hydra/pull/1874)\` to bind nodes to public IPs, [investigated mirror node behavior](https://github.com/cardano-scaling/hydra/issues/1859), and [fixed a memory-related bug](https://github.com/cardano-scaling/hydra/issues/1917) to further enhance reliability and performance.

The **Mithril** team [released the 2513.0 distribution](https://github.com/input-output-hk/mithril/releases/tag/2513.0), which supports Cardano node v.10.2.1 and includes various bug fixes and improvements.

They continued adapting the infrastructure to support the aggregator’s prototype ‘follower’ mode and focused on signing ancillary files in the Cardano database snapshots with an IOG key. They also worked on recording the origin of requests made to the aggregator API.

Finally, the team updated the [CIP-0137](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0137) mini-protocols and implementation plan and kept refactoring the STM cryptographic library for improved clarity and maintainability.

The **Leios** team continued working on various aspects of the protocol and its simulation capabilities. They made progress in implementing and testing the Haskell and Rust simulators, focusing on protocol behavior under different network conditions. For more details, see [Leios weekly updates](https://leios.cardano-scaling.org/news/2025/03/24/weekly-progress-summary).

###   
CATALYST

The technical development of the native **Catalyst** app is progressing steadily. This week will see the release of a new episode of ‘Under The Hood’, providing deeper insights into Catalyst’s journey. 

Additionally, the Catalyst town hall was [live on X](https://x.com/Catalyst_onX/status/1907010926999396407), fostering engagement with the community. Catalyst also participated in the CV Labs Crypto Valley London Mixer, where the team shared their vision and connected with industry leaders.

### EDUCATION

This week, the **education** team hosted a successful Cardano Days event at [Florida International University](https://www.fiu.edu/) as part of their Code Crunch event. Participants learned about blockchain fundamentals, received an introduction to Cardano and Ouroboros, and took part in an interactive learning session on how to run stake pools and nodes. 

Additionally, the team focused on creating content for the first two modules of the Midnight Pioneer program and completed more Haskell Bootcamp lectures.

![](https://ucarecdn.com/3d3ba47d-9cdb-43c3-b4de-8c4abf222a59/-/preview/-/format/auto/-/quality/smart/)

### エコシステム

_本セクションの情報は、一般に利用可能な情報源に基づいており、情報提供のみを目的として提供されています。言及されているプロジェクト、製品、サービスを推奨するものではありません。_

Cardanoエコシステムは成長を続けています。ネットワークで構築されたプロジェクト数は1,991に増加しました。委任済みウォレットも132万9000に増加しており、ステーキングへの着実なユーザー参加を反映しています。

プラットフォームは現在、1,077万のネイティブトークンと21万1,292のトークンポリシーをホストしており、それぞれ前週比0.38%増、0.14%増となっています。スマートコントラクトも13万0,036のPlutusスクリプトとともにアクティブにデプロイされています。ネットワークは現在、1億810万件のトランザクションを処理しています。1,230人のDRep（うちアクティブDRepは927人）がガバナンスに関与しており、これは、前週から0.49%増加しています。

その他のニュース：

*   [Input | Output](https://x.com/InputOutputHK/status/1907038759582928985)が4月8～10日のParis Blockchain Weekに出席。ブロックチェーンとWeb3テクノロジーの未来を形作る方法の詳細は、こちらの[ニュース記事](https://iohk.io/jp/newsroom/shaping-the-future-of-blockchain-and-web3-technologies-together)を参照。
    
*   [Turn Protocol](https://x.com/turnprotocol/status/1905373049639346374)はCardanoでプライバシーDeFiを提供するパブリックテストネットを立ち上げ。
    
*   [LCX](https://x.com/montymetzger/status/1904571478944997490)はCardanoのために初めてMiCAに準拠したホワイトペーパーを提出し、現在ESMA Registerに登録。ADAは現在、LCX取引所で「取引資格」を取得しました。
    
*   新しいバックエンド、機能更新、デザインを一新した[Cexplorer 2.0](https://x.com/cexplorer_io/status/1904501229767557122)がまもなく登場。  
    

### コアテクノロジー

**パフォーマンス＆トレース**チームはノードv.10.3で予備的なベンチマークを実施し、GHC8とGHC9コンパイラーの比較、Plutusバジェットのスケーリング、GHC9でのランタイムパラメーターの調整を行いました。開発の取り組みには、新しいPlutusスクリプトキャリブレーションツールの開発や、メンテナンス用ベンチマークプロファイルの更新が含まれます。インフラ面では、最新のCardano APIに合わせてツールを調整し、パフォーマンスワークベンチの簡素化で大きく進展しました。メインネットのメトリクス監視における新しいトレース機能の強化をテストし、Cardano-tracer用に汎用Nixサービス構成を導入しました。

**コンセンサス**チームはWell-Typedと協力し、lsm-treeライブラリーの最後から2番目のマイルストンを提示しました。ライブラリーは、I/Oエラーインジェクションによるテーブルユニオンをサポートし、Linux、Windows、macOSに対応します。完成すると、台帳ステータスを格納するための永続的なバックエンドとして機能します。

一部のメンバーは[Perasワークショップ](https://moduscreate.zoom.us/rec/share/a9wMSF373RrN0-UFMPZec02YQTRA_AQotaC7r3kD4GnEA8yeyUAkOfQ0lzcioxpn.dcXTAW8BXwdRH3d4)に参加し、プレゼンテーションに参加し、[設計と実装計画](https://tweag.github.io/cardano-peras/peras-design.pdf)について発表しました。次のステップには、運用コスト、報酬、決済時間に関するパラメーター化などのプロトコルのトレードオフに関するIntersect技術運営委員会での決定などが含まれます。

技術ワーキンググループ会議では、参加者はバッチVRFサポートをoroboros-consensusに組み込むことについて議論し、[CDDL定義のプルリクエスト案](https://github.com/IntersectMBO/ouroboros-consensus/pull/1422)を検討しました。[旧開発期のNTCサポート](https://github.com/IntersectMBO/ouroboros-consensus/issues/1429)を見直し、コンセンサスから特定のクエリのバージョンを提供できるようにする機能を公開し、コンセンサスからByron CDDLを明らかにし、ノードv.10.3にQueryStakePoolDefaultVoteを追加しました。

### スケーリング

**Hydra**チームはバグ修正と調査に集中し、[スナップショットのサイドローディング](https://github.com/cardano-scaling/hydra/issues/1858)を通じてHydraヘッドをun-stuckにするのを補助する機能を追加しました。この機能のドキュメントは現在作成中で、今後の作業には追加のバグ修正のマージや、ユーザーがレイヤー2で確実にファンアウトできるようにするためのカスタムPlutus操作を可能にするWithdraw 0トリックの実装が含まれます。

また、ノードをパブリックIPにバインドする[\--advertiseオプション](https://github.com/cardano-scaling/hydra/pull/1874)を導入し、[ミラーノードの動作を調査](https://github.com/cardano-scaling/hydra/issues/1859)し、[メモリ関連のバグを修正](https://github.com/cardano-scaling/hydra/issues/1917)して信頼性とパフォーマンスをさらに向上させました。

**Mithril**チームはディストリビューション[2513.0](https://github.com/input-output-hk/mithril/releases/tag/2513.0)をリリースしました。これには、Cardanoノードv.10.2.1のサポートのほか、さまざまなバグ修正や改善が含まれています。

アグリゲーターのプロトタイプ「フォロワー」モードをサポートするためにインフラの調整を続け、IOG鍵を使用したCardanoデータベーススナップショット内の補助ファイルへの署名に注力しました。アグリゲーターAPIに対するリクエストの発生源の記録にも取り組みました。

[CIP-0137](https://github.com/cardano-foundation/CIPs/tree/master/CIP-0137)ミニプロトコルと実装計画を更新し、STM暗号ライブラリーのリファクタリングを継続して、明確さと保守性を向上させました。

**Leios**チームはプロトコルとシミュレーション機能にさまざまな側面から取り組みました。HaskellシミュレーターとRustシミュレーターの実装とテストを、異なるネットワーク条件下でのプロトコルの動作に焦点を当てながら進めました。詳細は、[Leios週刊更新情報](https://leios.cardano-scaling.org/news/2025/03/24/weekly-progress-summary)をご覧ください。

###   
Catalyst

**Catalyst**ネイティブアプリの技術開発は順調に進んでいます。今週、『Under the Hood』の新しいエピソードがリリースされ、Catalystの旅についてより深い洞察が提供されます。 

Catalystタウンホールは[Xでライブ配信](https://x.com/Catalyst_onX/status/1907010926999396407)され、コミュニティとのエンゲージが育まれました。Catalystは、CV Labs Crypto Valley London Mixerに参加し、ビジョンを共有し、業界のリーダーとつながりました。

### 教育

**教育**チームはCode Crunchイベントの一環として、[フロリダ国際大学](https://www.fiu.edu/)でCardano Daysイベントを成功させました。参加者はブロックチェーンの基礎、CardanoとOuroborosのイントロダクションを学び、ステークプールとノードの実行方法に関するインタラクティブな学習セッションに参加しました。 

Midnightパイオニアプログラムの第1、第2モジュールのコンテンツ作成に注力し、さらに多くのHaskell Bootcampレクチャーを完了しました。
