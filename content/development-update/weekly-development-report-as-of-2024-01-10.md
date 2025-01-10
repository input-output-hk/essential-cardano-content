---
title: Weekly development report as of 2024-01-10
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/5d453887-b9d3-47ea-82ef-217a754231f8/
image_text: Weekly development report as of 2024-01-10
---

### CORE TECHNOLOGY

This week, the core technology teams released Cardano node [v.10.1.4](https://github.com/IntersectMBO/cardano-node/releases/tag/10.1.4), which ensures the network is ready for the upcoming Plomin hard fork. This release includes mempool safeguards designed to block specific types of problematic transactions, further enhancing the reliability and security of the network.

The consensus team worked on the [augmentation of headers with time](https://github.com/IntersectMBO/ouroboros-consensus/pull/1288), simplifying time management within the consensus process. Additionally, the team resolved a [mempool issue](https://github.com/IntersectMBO/ouroboros-consensus/pull/1352) that was too stringent in rejecting certain large transactions. They also overhauled the [block-fetch logic](https://github.com/IntersectMBO/ouroboros-consensus/pull/1179) for bulk synchronization mode, significantly improving synchronization performance. 

Furthermore, the team released the necessary consensus packages for Cardano node v.10.2, which include the following versions: 

*   `ouroboros-consensus-protocol-0.10.0.0` 
    
*   `release-ouroboros-consensus-diffusion-0.19.0.0` 
    
*   `release-ouroboros-consensus-cardano-0.21.0.0` 
    
*   `release-ouroboros-consensus-0.22.0.0`.
    

### SMART CONTRACT

The Plutus Core team is finalizing the data-backed `ScriptContext` API (versions [V1](https://plutus.cardano.intersectmbo.org/haddock/latest/plutus-ledger-api/PlutusLedgerApi-V1-Data-Contexts.html), [V2](https://plutus.cardano.intersectmbo.org/haddock/latest/plutus-ledger-api/PlutusLedgerApi-V2-Data-Contexts.html), and [V3](https://plutus.cardano.intersectmbo.org/haddock/latest/plutus-ledger-api/PlutusLedgerApi-V3-Data-Contexts.html)). This update is expected to significantly enhance the performance of many scripts written in Plinth (formerly  Plutus Tx). For more details, please refer to the [relevant section in the user guide](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/optimizing-scripts-with-asData).

### SCALING

This week, the **Hydra** team focused on finalizing the main portion of their work on [incremental commits](https://github.com/cardano-scaling/hydra/pull/1715), now seeking feedback from the community on this feature. They also made progress on the \`[hydra-explorer](https://github.com/cardano-scaling/hydra/issues/1282)\` by adding support for multiple versions and also advanced their [custom ledger experiment](https://github.com/cardano-scaling/hydra/pull/1742). Additionally, they [upgraded Docusaurus](https://github.com/cardano-scaling/hydra/pull/1768), updated the [dependencies](https://github.com/cardano-scaling/hydra/pull/1760) for the `cardano-api`, and made various cleanups and debugging improvements.

The team's next steps include completing work on the incremental commits, finalizing multi-version support for the Hydra E`xplorer`, concluding the custom ledger experiment, planning the v.0.20.0 release, and providing ongoing support for the Hydra Doom tournament.

The **Mithril** team released the new distribution [2450.0](https://github.com/input-output-hk/mithril/releases/tag/2450.0), which offers stable support for Cardano node v.10.1.3 and includes bug fixes and performance improvements.

The team also continued implementing the incremental certification of the Cardano database. They kept working on creating and synchronizing the artifacts, implemented the artifact routes, and started working on the digest route for the incremental Cardano database in the [aggregator REST API](https://github.com/input-output-hk/mithril/issues/2174).

Finally, they completed the experimental cache for certificate verification in the WASM client, implemented enhancements to the CI, and fixed a bug with identifier collisions in the incremental Cardano database artifacts.

### VOLTAIRE 

Changes to Cardano governance are now controlled by community actions. The governance action for the Cardano Plomin hard fork is the trigger that enables the second and final step in the Chang upgrade. It was submitted to mainnet at the end of epoch 529, on December 20, 2024 at 21:44 UTC, as recommended by the hard fork working group, including representatives from IO. Voting on this governance action is underway with input from stake pool operators and the interim constitutional committee.

### CATALYST

This week in **Catalyst**, the team is gradually returning to routine after the holiday period. The onboarding process for the Fund13 winners is progressing well, with 70% of the onboarding forms submitted, over 50% of the statements of milestones (SOMs) completed, and nearly 10% of SOMs already signed off. 

The upcoming steps in the onboarding process will involve due diligence and test transactions, which will take place in the coming days and weeks. Town halls are currently on break and are scheduled to resume in the next couple of weeks with Fund13 retrospective town halls.

Additionally, the focus on replacing IdeaScale with a native solution to enhance the community experience remains a top priority as technical development continues.

### EDUCATION

The **education** team is developing strategies and plans for courses and events throughout the year while analyzing feedback from the community survey shared in December.

### ![](https://ucarecdn.com/7091f8a8-08d7-4c9f-b392-83b38b48329c/-/preview/-/format/auto/-/quality/smart/)

### スマートコントラクト

Plutus Coreチームは、データ活用型ScriptContext API（バージョン[V1](https://plutus.cardano.intersectmbo.org/haddock/latest/plutus-ledger-api/PlutusLedgerApi-V1-Data-Contexts.html)、[V2](https://plutus.cardano.intersectmbo.org/haddock/latest/plutus-ledger-api/PlutusLedgerApi-V2-Data-Contexts.html)、[V3](https://plutus.cardano.intersectmbo.org/haddock/latest/plutus-ledger-api/PlutusLedgerApi-V3-Data-Contexts.html)）の仕上げに入っています。この更新により、Plinth（Plutus Txから改称）で書かれた多くのスクリプトの性能が大幅に向上することが期待されます。詳しくは、[ユーザーガイドの該当セクション](https://plutus.cardano.intersectmbo.org/docs/working-with-scripts/optimizing-scripts-with-asData)を参照してください。

### スケーリング

**Hydra**チームは、[インクリメンタルコミット](https://github.com/cardano-scaling/hydra/pull/1715)に関する作業の主要部分を仕上げることに焦点を当て、現在、この機能についてコミュニティからのフィードバックを求めています。[hydra-explorer](https://github.com/cardano-scaling/hydra/issues/1282)の複数バージョンへのサポートを追加する作業や、[カスタム台帳実験](https://github.com/cardano-scaling/hydra/pull/1742)を進めました。[Docusaurusのアップグレード](https://github.com/cardano-scaling/hydra/pull/1768)、cardano-apiの[依存関係](https://github.com/cardano-scaling/hydra/pull/1760)の更新、さまざまなクリーンアップとデバッグの改善を行いました。  

次のステップは、インクリメンタルコミットの作業の完了、hydra-explorerのマルチバージョンサポートの仕上げ、カスタム台帳実験のまとめ、v.0.20.0リリースの計画、継続しているHydra Doomトーナメントサポートの提供です。

**Mithril**チームは新しいディストリビューション[2450.0](https://github.com/input-output-hk/mithril/releases/tag/2450.0)をリリースしました。これには、Cardanoノードv.10.1.3の安定したサポートの提供、バグ修正とパフォーマンスの改善が含まれています。

Cardanoデータベースの増分認証の実装作業も継続しました。アーティファクトの作成と同期の作業を続け、アーティファクトルートを実装し、[アグリゲーターREST API](https://github.com/input-output-hk/mithril/issues/2174)での増分Cardanoデータベースのダイジェストルートに関する作業を開始しました。

WASMクライアントで証明書検証のための実験的キャッシュを完成させ、CIの拡張を実装し、増分Cardanoデータベースアーティファクトの識別子衝突のバグを修正しました。

### VOLTAIRE 

Cardanoガバナンス変更は、コミュニティアクションによってコントロールされるようになりました。Cardano Plominハードフォークのガバナンスアクションは、Changアップグレードの2番目かつ最後のステップを可能にするトリガーです。これは、ハードフォークワーキンググループが提案した通り、エポック529の終了時となる日本時間2024年12月21日06:44にメインネットに提出されました。このガバナンスアクションへの投票は、ステークプールオペレーターと暫定憲法委員会からの意見を得て進行中です。

### CATALYST

**Catalyst**では、休暇期間を終え他チームが徐々にルーチンに戻って来ています。Fund13受賞者のためのオンボーディングプロセスは順調に進んでおり、オンボーディングフォームは70%が提出され、マイルストンステートメント（SOM）は50%以上が完了し、SOMの10%近くはすでに承認されています。 

オンボーディングプロセスの今後のステップには、デューデリジェンスとテストトランザクションが含まれ、これは今後数日から数週間で行われます。タウンホールは現在休止中であり、数週間以内にFund13のレトロスペクティブタウンホールで再開される予定となっています。

IdeaScaleをネイティブソリューションに置き換えることでコミュニティエクスペリエンスを強化することは、技術開発が続く中で最優先事項であり続けています。

### 教育

**教育**チームは、12月に共有されたコミュニティ調査からのフィードバックを分析しながら、年間を通じてコースやイベントの戦略と計画を策定しています。
