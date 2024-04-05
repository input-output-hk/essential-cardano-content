---
title: Weekly development report as of 2024-04-05
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/3967c6df-cf37-40db-bf78-d7e596dc184f/
image_text: Weekly development report as of 2024-04-05
---

### CORE TECHNOLOGY

This week, the **consensus** team worked on [the modification of](https://github.com/IntersectMBO/ouroboros-consensus/issues/1009) `LocalTxMonitor` [and](https://github.com/IntersectMBO/ouroboros-consensus/issues/1009) `HasTx` [functionalities](https://github.com/IntersectMBO/ouroboros-consensus/issues/1009) improving cross-era behavior. The team completed most tests for the UTXO-HD branch within `ouroboros-consensus`, with ongoing efforts to resolve some issues in the `mempool-parallel` test.

They also [addressed an upstream issue within](https://github.com/stevana/quickcheck-state-machine/pull/43) `quickcheck-state-machine`, facilitating a more streamlined setup for parallel mempool tests. Additionally, they proposed a new [parallel state machine testing framework](https://github.com/input-output-hk/quickcheck-dynamic/pull/72) for `quickcheck-dynamic`, potentially enhancing future testing capabilities. 

In preparation for node release v.8.10, the team integrated changes across consensus, ledger, and networking components. Upcoming efforts will focus on releasing updated CLI and API versions before the final node update.

### WALLETS AND SERVICES

The **Lace** team released Lace v.1.9, which brings multi-wallets and multi-accounts functionality to Lace. For more information, see the [latest blog post](https://www.lace.io/blog/lace-1-9-0-release). 

### SCALING

This week, the **Hydra** and **Mithril** teams gave demonstrations at the monthly review meeting. You can find a full report, including slides and a recording, in the [scaling monthly report](https://cardano-scaling.org/monthly/2024-03).

The **Hydra** team [investigated a broken head situation](https://github.com/input-output-hk/hydra/issues/1374), [slightly improved Conway forward compatibility](https://github.com/input-output-hk/hydra/pull/1373) in `explorer` / `hydra-node`, enhanced `hydra-cluster --devnet` allowing end-to-end testing of `kupo`, [extended smoke tests to also include committing ada into the head](https://github.com/input-output-hk/hydra/pull/1377), documented the anticipated behavior of incremental decommits, and added decommits to the tutorial.

The **Mithril** team continued [implementing the certification of Cardano transactions](https://github.com/input-output-hk/mithril/issues/1457) in Mithril networks. They focused on scaling the signature and proof generation for `mainnet`, completed the implementation of a more versatile [beaconing mechanism](https://github.com/input-output-hk/mithril/issues/1562), worked on implementing [incremental storage of transactions](https://github.com/input-output-hk/mithril/issues/1591), and fixed the bug in the block parser that [prevented some Conway transactions from being signed](https://github.com/input-output-hk/mithril/issues/1577). Additionally, they continued working on a prototype to [decentralize signer registration](https://github.com/input-output-hk/mithril/issues/1587) with the relay and a peer-to-peer (P2P) network.

### CATALYST

This week in **Project Catalyst**, the team is preparing for Fund12, which is set to launch on April 26 with an in-person event in Barcelona, Spain. For those unable to attend in person, the Catalyst working groups initiative offers opportunities to engage with local Cardano communities globally or participate in online groups. See [the full schedule of events](https://catalystwg.gitbook.io/docs/cwg-schedule) for more information.

### EDUCATION

This week, the **education** team continues delivering their online Cardano Developer course, and are also preparing to support the constitutional committee training.

![](https://ucarecdn.com/6624c81a-e4ed-4a4b-81b6-743ce3707643/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは、開発期をまたいだ動作を改善する[LocalTxMonitorとHasTxの機能変更](https://github.com/IntersectMBO/ouroboros-consensus/issues/1009)に取り組みました。ouroboros-consensusでUTXO-HDブランチのテストをほぼ終え、mempool-parallelテストでの断続的な失敗に対する取り組みを続けました。

[quickcheck-state-machineのアップストリームの問題にも対処](https://github.com/stevana/quickcheck-state-machine/pull/43)し、並列メモリープールテストのセットアップの合理化を進めました。新たにquickcheck-dynamic用の並列ステートマシンテストフレームワークを提案しました。これは、将来のテスト機能を強化する可能性があります。 

ノードv.8.10のリリース準備として、コンセンサス、台帳、ネットワークコンポーネントの変更を統合しました。今後は、最終的なノード更新の前に、CLIとAPIの更新バージョンをリリースすることに重点を置く予定です。

### ウォレットとサービス

**Lace**チームは、マルチウォレットとマルチアカウント機能を搭載したLace v.1.9をリリースしました。詳細は、[ブログの最新記事](https://www.lace.io/blog/lace-1-9-0-release)を参照してください。 

### スケーリング

**Hydra**チームと**Mithril**チームは月例レビュー会議でデモンストレーションを行いました。[スケーリング月刊レポート](https://cardano-scaling.org/monthly/2024-03)で、スライドや録画を含むフルレポートを確認できます。

**Hydra**チームは、[ヘッドが壊れている状況](https://github.com/input-output-hk/hydra/issues/1374)を調査し、explorer/hydra-nodeの[Conway前方互換性を少し改良](https://github.com/input-output-hk/hydra/pull/1373)し、hydra-cluster --devnetを強化してkupoのエンドツーエンドテストを可能にしました。[ADAのヘッドへのコミットを含めた拡張スモークテスト](https://github.com/input-output-hk/hydra/pull/1377)も可能にし、インクリメンタルデコミットの予想される動作を文書化し、チュートリアルにデコミットを追加しました。

**Mithril**チームは、Mithrilネットワークに[Cardanoトランザクション認証を実装](https://github.com/input-output-hk/mithril/issues/1457)する作業を続けました。mainnetの署名と証明生成のスケーリングに焦点を当て、より汎用性の高い[ビーコンメカニズム](https://github.com/input-output-hk/mithril/issues/1562)の実装を完了し、[トランザクションの増分ストレージ](https://github.com/input-output-hk/mithril/issues/1591)の実装に取り組み、[一部のConwayトランザクションに署名できない](https://github.com/input-output-hk/mithril/issues/1577)というブロックパーサのバグを修正しました。リレーとピアツーピア（P2P）ネットワークで[署名者登録を分散化](https://github.com/input-output-hk/mithril/issues/1587)するためのプロトタイプの作業を続けました。

### CATALYST

Project Catalystでは、スペインのバルセロナで4月26日に予定されているFund12ローンチ対面イベントに向けた準備を進めています。このイベントに参加できない方には、Catalyst Working Groupsイニシアチブが、世界各地でCardanoコミュニティとつながるローカルイベントのほか、オンラインイベントも企画しています。詳細は、[イベントのフルスケジュール](https://catalystwg.gitbook.io/docs/cwg-schedule)を参照してください。

### 教育

**教育**チームはCardano開発者オンラインコースの提供を継続しているほか、憲法委員会のトレーニングをサポートする準備も行っています。
