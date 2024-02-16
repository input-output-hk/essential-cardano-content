---
title: Weekly development report as of 2024-02-16
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/587d6804-9b6c-45ac-ad72-8cb8e880577e/
image_text: Weekly development report as of 2024-02-16
---

### CORE TECHNOLOGY

This week, the **core** technology teams released [Cardano node v.8.8.0-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.0-pre), which enables testing Plutus V3 scripts on SanchoNet. Read more in the Voltaire section. 

**DB-Sync** started integration with the latest version of the Cardano node.  
  
The **ledger** team focused on implementing fixes, writing tests, and improving testing frameworks. Critical bug fixes included retaining Anchor for proposal procedures in the ledger state, ensuring JSON [serialization](https://github.com/IntersectMBO/cardano-ledger/pull/4040) of rational numbers in protocol parameters and governance procedures. Additionally, the team achieved a significant milestone by developing the [cuddle](https://github.com/input-output-hk/cuddle) Haskell package, aimed at transitioning to specifying CDDL in Haskell for all eras. This transition will streamline CDDL specification compilation and offer benefits such as reduced duplication, reuse of specifications, and enhanced safety and correctness of specifications and decoders.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS & SERVICES

This week, the **Lace** team addressed core API usage issues, ensuring readiness for a forthcoming small patch in v.1.8.2.

### SMART CONTRACTS

This week, the **Plutus** team enhanced the Plutus IR inliner to enable the inlining of constants. This adjustment consistently lowers the script cost and often further reduces it.

### SCALING

This week, the **Hydra** team worked on forward compatibility for Conway support, deployed the Hydra explorer tool, and improved model-based testing to support more actions.

The **Mithril** team implemented a new data type for certifying Cardano transactions within Mithril networks and upgraded the client [library](https://github.com/input-output-hk/mithril/issues/1468) and [CLI](https://github.com/input-output-hk/mithril/issues/1469) for transaction verification. They released the new [Mithril network on SanchoNet](https://mithril.network/doc/dev-blog/2024/02/08/testing-sanchonet-network-available) and added a feature to the Pallas chain observer to support the retrieval of Mithril era markers. Additionally, the team [addressed flakiness](https://github.com/input-output-hk/mithril/issues/1147) in CI end-to-end tests.

Finally, the team kept working on the [threat modeling and risk analysis](https://github.com/input-output-hk/mithril/issues/1350) for the Mithril network and updated the Mithril network [architecture](https://github.com/input-output-hk/mithril/issues/1488) documentation.

### VOLTAIRE & SANCHONET

With the release of Cardano node v.8.8.0-pre, community members can now experiment with Plutus V3 in Conway-era transactions on SanchoNet. Plutus V3 brings several new capabilities such as a new `Voting` script purpose for writing voting scripts, access to governance actions in the `ScriptContext`, new cryptographic Plutus primitives (BLS, Keccak256, and Blake2b-224), and more. For more details about Plutus V3, read this recently published [blog post](https://iohk.io/en/blog/posts/2024/02/12/unlocking-more-opportunities-with-plutus-v3/).

### CATALYST

This week the **Project Catalyst team** is delighted to announce the official results of Project Catalyst Fund11. Congratulations to all participants in this round.

Once again, community participation has underscored the desire to voice opinions and guide the ecosystem's progress. Approximately 8,000 wallets collectively submitted over 300,000 individual votes to determine 300 funded projects in this round. This brings the total number of projects in the Catalyst history to 1,647, with nearly 800 now completed.

On behalf of the entire Catalyst team, we thank each and every one of you for your trust and patience and for making this moment a reality! See [the full announcement here.](https://forum.cardano.org/t/the-project-catalyst-fund11-results-are-in/127781)

### EDUCATION

This week, the **education** team is delivering the second iteration of the Cardano Developer Course with ABC to an online cohort of aspiring blockchain developers across Africa. 

They are also finalizing the Marlowe Curriculum for Educators, a new open education resource for Cardano community members who want to offer an introductory class or workshop on Marlowe and the Marlowe TS-SDK.

![](https://ucarecdn.com/7889f532-3e5a-4efb-aa97-24085acdd701/-/preview/-/format/auto/-/quality/smart/)  
  
コアテクノロジー

**コア**テクノロジーチームは[Cardanoノードv.8.0-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.0-pre)をリリースしました。これで、Plutus V3スクリプトがSanchoNetでテスト可能になります。詳細は、Voltaireセクションをご覧ください。 

**DB-Sync**とCardanoノード最新バージョンとの統合を開始しました。  
  
**台帳**チームは修正の実装、テストの作成、テストフレームワークの改良に焦点を当てました。重要なバグ修正には、台帳ステータスで提案手続きのためのAnchorを保持し、プロトコルパラメーターとガバナンス手続きで有理数のJSON[シリアル化](https://github.com/IntersectMBO/cardano-ledger/pull/4040)を確実にすることが含まれます。全開発期用にHaskellでのCDDL仕様へ移行することを目的とした[cuddle](https://github.com/input-output-hk/cuddle)Haskellパッケージを開発して、重要なマイルストンを達成しました。この移行により、CDDL仕様のコンパイルが合理化され、重複の削減、仕様の再利用、仕様とデコーダーの安全性と正確性の向上などのメリットが得られます。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://updates.cardano.intersectmbo.org/archive)をご覧ください。

### ウォレット&サービス

**Lace**チームはコアAPIの使用に関する問題に対処し、v.1.8.2で予定されている小規模なパッチの準備を整えました。

### スマートコントラクト

**Plutus**チームはPlutus IRインライナーを強化し、定数のインライン化を可能にしました。この調整でスクリプトコストが全体的に削減され、多くのケースでさらなる削減が見られます。

### スケーリング  
  
**Hydra**チームはConwayサポートのための上位互換性に取り組み、Hydraエクスプローラーツールをデプロイし、より多くのアクションをサポートするためにモデルベースのテストを改良しました。

**Mithril**チームは、Mithrilネットワーク内でCardanoトランザクションを認証するための新しいデータタイプを実装し、トランザクション検証用のクライアント[ライブラリー](https://github.com/input-output-hk/mithril/issues/1468)と[CLI](https://github.com/input-output-hk/mithril/issues/1469)をアップグレードしました。[SanchoNetで新しいMithrilネットワーク](https://mithril.network/doc/dev-blog/2024/02/08/testing-sanchonet-network-available)を公開し、Mithril期のマーカー検索をサポートするためにPallasチェーンオブザーバーに機能を追加しました。CIエンドツーエンドテストでの[脆弱性に対処](https://github.com/input-output-hk/mithril/issues/1147)しました。

Mithrilネットワークの[脅威モデリングとリスク分析](https://github.com/input-output-hk/mithril/issues/1350)への取り組みを続け、Mithrilネットワーク[アーキテクチャー](https://github.com/input-output-hk/mithril/issues/1488)のドキュメントを更新しました。

### VOLTAIRE & SANCHONET

Cardanoノードv.8.0-preのリリースに伴い、コミュニティメンバーはSanchoNet上においてConway期のトランザクションでPlutus V3を試すことができるようになりました。Plutus V3は、投票スクリプトを書くための新しいVotingスクリプト、ScriptContextでのガバナンスアクションへのアクセス、新しいPlutus暗号化プリミティブ（BLS、Keccak256、Blake2b-224）など、複数の新機能をもたらします。Plutus V3の詳細は、最近公開された[こちらのブログ記事](https://iohk.io/jp/blog/posts/2024/02/12/unlocking-more-opportunities-with-plutus-v3/)をご覧ください。

### CATALYST

**Project Catalystチーム**は、Project Catalyst Fund11の公式結果を発表できることを嬉しく思います。このラウンドのすべての参加者の皆さん、おめでとうございます。

ここでも、コミュニティの参加によって、意見を表明し、エコシステムの進歩を導きたいという願望が強調されました。このラウンドでは、集合的に約8,000のウォレットが300,000の個々の投票を介して、資金提供するプロジェクト300を決定しました。これにより、Catalyst史上のプロジェクト総数は1,647件となり、現在はほぼ800が完了しています。

Catalystチームを代表して、皆様の信頼と忍耐、そして、この瞬間を実現してくださったことにお礼を申し上げます。[詳細はこちら](https://forum.cardano.org/t/the-project-catalyst-fund11-results-are-in/127781)をご覧ください。 

### 教育

**教育**チームは、ABCと提携したCardano開発者コースの第2弾を、アフリカ全土の意欲的なブロックチェーン開発者のオンラインコホートに提供しています。 

MarloweとMarlowe TS-SDKの入門クラスやワークショップを提供したいと考えているCardanoコミュニティメンバーに向けた新しいオープン教育リソース、Marlowe Curriculum for Educatorsも仕上げに入っています。
