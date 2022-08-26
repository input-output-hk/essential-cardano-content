---
title: Weekly development report as of 2022-08-26
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/edc20dae-d017-4300-a4bf-6cc26d5337f0/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus** teams continued preparing for the Vasil upgrade. 

Projects and developers testing Vasil functionality are encouraged to upgrade their nodes to v.1.35.3 as well as all the [compatible Cardano components](https://docs.cardano.org/tools/comp-matrix). 

If you’re taking part in Vasil testing, note that the Cardano testnet is no longer recommended for Vasil functionality testing. New dedicated preview and pre-production environments have been spun up to offer improved chain density and a better developer experience. It is recommended that all developers, SPOs, and exchanges use these environments rather than the Cardano testnet. For more details, see [‘Environments’ overview](https://docs.cardano.org/cardano-testnet/getting-started#environments).

![](https://lh4.googleusercontent.com/MS70_z8DYghUB3aC3NgIQkvp2Xi0jF0ztsCQnE-uB60QkxA1KGgaBbwDrlB6VBpk6h5b5TNoZrRJ07Mbq7HTKfZgm8KIbLWcWB9F1vhXonJ2fU22Lbw_izU6ym7FaFfsrce4U3VlltR3ESfyPSQiRA8)

### WALLETS AND SERVICES 

This week, the **Daedalus** team worked on the new testnet wallet versions for preview and pre-production environments, and also tested node v.1.35.3.

Development work is ongoing on the **Lace** desktop features. The team worked on the implementation of an aggregator component that combines the light-wallet-provider data and the data from a local cardano-node. They also worked with quality assurance on end-to-end test improvements for the Lace browser and desktop versions. 

Finally, the teams are working on the creation of a client that generates Typescript types from the Haskell API to be used in the Lace desktop version.

The **Adrestia Haskell** team finalized Vasil-compatible cardano-wallet updates. They are now reviewing the implementation of signing endpoints for the forthcoming multi-signature features. 

They also resumed working on a stand-alone library for building & balancing transactions necessary for features like multi-delegation, which adds value to the company & community members alike. 

Finally, the **Adrestia TypeScript** team have finalized Vasil-compatible updates to cardano-graphql and cardano-rosetta, progressed with production readiness items that pave the way for cardano-js-sdk's 1.0 release, and are in the process of wrapping up the cardano-service packages necessary for Lace's MVP light wallet backend.

### SMART CONTRACTS

This week, the **Plutus** team continued working on the support feature for multiple language versions and updated some relevant documentation. They also made progress implementing Babbage era support for the Plutus tools, and testing the constraints library. 

The **Marlowe** team reviewed the Marlowe code for critical dependencies and the Isabelle specification. They also bumped `plutus-apps/next-node` branch version, created a Marlowe Run Docker image for Marlowe Playground and Marlowe Run, and ran ACTUS contracts on the private testnet. 

Finally, the team separated Playground to be hosted in a dedicated repository, finalized Marlowe semantics testing, and worked on the exploratory design of transaction creation for Marlowe Runtime. 

### BASHO (SCALING)

This week, the **Hydra** team released [version 0.7.0](https://github.com/input-output-hk/hydra-poc/releases/tag/0.7.0), which provides support for Vasil functionality and Plutus V2 scripts. Hydra Plutus scripts now use the `serialiseData` built-in to CBOR encode data on-chain, the node expects Babbage era blocks and produces Babbage era transactions, and the hydra-cluster spins up a stake pool instead of a BFT node. Finally, the user manual is now available in Japanese thanks to the community contribution. 

### GOVERNANCE

This week, Project Catalyst continues to test the voting app experience to ensure voting is accurate, fair, and smooth for all wallets registered to participate in the Fund9 voting round. There will be a go/no-go decision taken this coming Monday, with the goal to start voting on September 1st.  
  
![](https://ucarecdn.com/c0b17786-5949-48aa-a626-7dfeb3d88dcc/)

### コアテクノロジー

**ノード、台帳、コンセンサス**チームはVasilアップグレードの準備を続けました。 

Vasilの機能をテストしているプロジェクトおよび開発者はノードをv.1.35.3にアップグレードするとともに、[対応するすべてのCardanoコンポーネント](https://docs.cardano.org/tools/comp-matrix)をアップグレードすることが奨励されています。 

Vasilテストに参加している場合は、VasilテストにCardanoテストネットが推奨されなくなったことに注意してください。新たに、チェーン密度と開発者の操作性を向上させた専用のプレビュー環境およびプレプロ環境が立ち上げられました。すべての開発者、SPO、取引所は、Cardanoテストネットでなく、プレビュー環境およびプリプロ環境を使用してください。詳細は、「[Environments](https://docs.cardano.org/cardano-testnet/getting-started%23environments)」概要をご覧ください（英語のみ）。

### ウォレットとサービス 

**Daedalus**チームは、プレビュー環境およびプリプロ環境用の新しいテストネットウォレットバージョンに取り組むとともに、ノードv.1.35.3のテストを行いました。

**Lace**デスクトップ機能の開発作業は進行中です。light-wallet-providerのデータとローカルのcardano-nodeのデータを組み合わせるアグリゲーターコンポーネントの実装に取り組みました。Laceのブラウザーバージョンおよびデスクトップバージョン用に改良したエンドツーエンドテストのQAテストにも取り組みました。 

Haskell APIからLaceデスクトップバージョンで使用するTypescript型を作成するクライアントの作成に取り組みました。

**Adrestia Haskell**チームは、Vasil対応cardano-walletの更新を完了しました。現在、予定されているマルチシグ機能の署名エンドポイントの実装を確認しています。 

マルチ委任などの機能に必要なトランザクションの構築および残高用のスタンドアロンライブラリーへの取り組みを再開しました。これは、企業やコミュニティメンバーに付加価値をもたらします。 

**Adrestia TypeScript**チームは、cardano-graphqlのcardano-rosettaチームはVasil対応アップデートを完了し、cardano-js-sdk's 1.0の前段階となる本番環境準備を進め、LaceのMVPライトウォレットバックエンドに必要なcardano-serviceパッケージの最終段階に入っています。

### スマートコントラクト

**Plutus**チームは、多言語バージョンのサポートに関する作業を続けるとともに、関連ドキュメントを更新しました。PlutusツールのBabbage期サポートの実装、constraintsライブラリーのテストを進めました。 

**Marlowe**チームは重要な依存関係のためのMarlowe codeと、Isabelleの仕様をレビューしました。「plutus-apps/next-node」ブランチをバージョンアップし、Marlowe PlaygroundとMarlowe Run用にMarlowe RunのDockerイメージを作成し、プライベートテストネットでACTUSコントラクトを実行しました。Playgroundを分離して専用のリポジトリでホストし、Marloweセマンティクステストを完了し、Marlowe Runtimeのトランザクション作成の予備設計に取り組みました。 

### Basho( スケーリング)

**Hydra**チームは、Vasil機能とPlutus V2スクリプトをサポートする[version 0.7.0](https://github.com/input-output-hk/hydra-poc/releases/tag/0.7.0)をリリースしました。Hydra PlutusスクリプトはオンチェーンでCBORエンコードデータにビルトインされている「serialiseData」を使用することになり、ノードはBabbage期のブロックを想定してBabbage期のトランザクションを生成し、BFTノードに替わってステークプールをスピンアップします。コミュニティの寄稿により、ユーザーマニュアルの日本語版が利用できるようになりました。 

### ガバナンス

Project Catalystは、Fund9投票ラウンドへの参加にあたり、全登録ウォレットにとって投票が正確、公正、円滑に行えるよう、投票アプリの操作性のテストを継続しました。9月1日に投票開始を目指して、来週月曜に実施か中止かの決定が下されます。
