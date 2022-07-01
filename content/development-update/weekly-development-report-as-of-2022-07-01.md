---
title: Weekly development report as of 2022-07-01
tags:
  - Weekly development updates
  - Development
  - Statistics
  - Cardano
url: ""
image: https://ucarecdn.com/3741ef27-7c8d-46bf-9be0-4ff9c1331cf6/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **node, ledger, and consensus teams** [released node v.1.35.0](https://twitter.com/InputOutputHK/status/1540711787468795904), which will be the final candidate for the mainnet Vasil hard fork. This node version will enable the use of new Plutus capabilities, including node and CLI support for reference inputs, inline datums, reference scripts, collateral output, and Plutus V2 primitives. Plutus V2 code testing (including new CIPs, which significantly improve smart contract performance) has been successful and delivered positive results in terms of performance and improved cost. 

On June 28, the IOG team [reported](https://twitter.com/InputOutputHK/status/1541800451460431872) it had submitted an update proposal to hard fork the Cardano testnet, which will be available for public testing after the start of epoch 215 at 20:20 UTC on July 3.

The teams also continued working on ledger optimizations, test enhancements, CLI functionality, and issue resolution. Work is ongoing on diffusion pipelining design and UTXO HD properties.

The **networking** team continued working on the dynamic block production feature, which is now in review, the automated deployment of nodes in the network, and improvements to IOSim timeout primitives.

### WALLETS AND SERVICES 

This week, the **Daedalus** team continued testing the new, Vasil-compatible cardano-node and cardano-wallet components. They also fixed an issue related to hardware wallet functionality, and released a beta version of the cardano-node that stores UTXOs on the hard disk or SSD instead of RAM. 

Work is ongoing on the **Lace** lightwallet platform development. The team completed the first round of beta testing, reporting positive feedback from the community regarding the wallet’s UX. The team also discussed Lace on [June’s 360 show](https://www.youtube.com/watch?v=ShBFTaD8nss&t=862s), watch it to learn the latest updates. 

The **Adrestia** team upgraded Adrestia components to be Vasil-compatible, continued preparing cardano-js-sdk for production, and made some improvements to a new HTTP API on top of DB Sync. 

### SMART CONTRACTS

This week, the Plutus team worked on testing improvements and preparing Plutus infrastructure for future hard forks. They also worked on plutus-chain-index and performance issues, fixing memory issues in the emulator, correcting the emulator minting policy behavior, and reducing PAB memory usage on a real network. Finally, they worked on the bootstrapping of Architectural Design Records.

This week, the **Marlowe** team fixed the Isabelle build as a CI check, fixed the warning tab crash and the template parameter order for an Escrow example within Marlowe Playground, and added [tarball.js](tarball.js) bindings. They also added Merkleization support to the Marlowe CLI and published the Marlowe Pioneers lecture and quiz on using Marlowe CLI. 

### BASHO (SCALING)

This week, the **Hydra** team completed a first spike on model-based testing using quickcheck-dynamic and identified further development steps. They also fixed several bugs related to configuration settings and released the hydra-node v.0.6.0. That is a first version of the hydra-node that supports contestation and completing the basic Hydra Head protocol as suggested in the original paper.

### GOVERNANCE

This week, **Project Catalyst** closed proposal submissions for Fund9. There are over 1,000 proposals put forward for QA. A community vote will take place in August. 

All proposals will now head into the QA stage where Proposal Assessors will review every single proposal for quality, detail, and its response to the challenge. Each proposal aims to have at least five reviews to create a balanced opinion before it heads over to the Veteran Proposal Assessors for further checks. If you’re interested in becoming a Proposal Assessor (and being rewarded for your time) register on our innovation platform, [Ideascale](https://cardano.ideascale.com), and fill out the relevant profile fields. 

In other news, there are now over 100 completed projects funded by **Project Catalyst** and over 3,500 proposals have had votes cast on them. With projects completing every single day, and given the exponential growth of Project Catalyst fund amounts since its inception, we’re anticipating hundreds more completed projects coming through over the coming weeks.

![](https://lh4.googleusercontent.com/apkADxxFy2sdLIxr1wfX9pqcsq1Lx0kDP45bqgJzL8QJBWkaurY2TfvCqHP-Ua8iUX-V81bQG3DI4DJXmbzUbQyfXwcm52oLnu9BritJzLhXhx0pcp1QFvvwAz83RuoOnOk-JSuijA9Rs32D6rs)

### STATISTICS TO DATE

![](https://lh5.googleusercontent.com/isyLnOph_3tKRAApHuUh860H14U8Rq9wLU7_M4HzchLJXbLuBEeqGTo45HQLkFuNldV252i6sIZarfed4GkIqT9y4z_kZbJTv0ylzegZ-QV8OZ51uubXKYFbRZmXEsCzW4q67IqDEaBDRAqiMTo)

### 週刊開発レポート　2022年7月1日

### コアテクノロジー

**ノード、台帳、コンセンサス**チームは、メインネットVasilハードフォークの最終候補版となる[ノードv.1.35.0をリリース](https://twitter.com/InputOutputHK/status/1540711787468795904)しました。このノードバージョンは、参照インプット、インラインデータム、参照スクリプト、担保アウトプット、Plutus V2プリミティブのノードおよびCLIサポートを含む、新しいPlutus機能の使用を可能にします。Plutus V2コードテスト（スマートコントラクトのパフォーマンスを大幅に向上させる新しいCIPを含む）は順調で、パフォーマンスとコスト改良の観点から良い結果が得られました。 

6月28日、IOGチームはCardanoテストネットのハードフォーク更新提案送信を[報告](https://twitter.com/InputOutputHK/status/1541800451460431872)しました。これにより、日本時間7月4日5:20に始まるエポック215以降パブリックテストが可能になります。

台帳の最適化、テストの改良、CLI機能、不具合の解消に関する作業も継続しました。拡散パイプラインの設計とUTXO HDプロパティに関する作業は進行中です。

**ネットワーキング**チームは、動的ブロック生成機能の作業を継続し、これは現在レビュー段階にあります。同時に、ノードをネットワークに自動デプロイする機能への取り組み、IOSimタイムアウトプリミティブの改良も続けました。

### ウォレットとサービス 

**Daedalus**チームは新しいVasil対応のcardano-nodeとcardano-walletコンポーネントのテストを続けました。ハードウェアウォレット機能に関する不具合を解消し、UTXOをRAMの代わりにハードディスクまたはSSDに保存するcardano-nodeのベータバージョンをリリースしました。 

**Lace**ライトウォレットプラットフォームの開発は継続中です。ベータテストの初回ラウンドを完了し、コミュニティからはウォレットのUXに関して好意的なフィードバックを受けました。Laceに関しては、6月の360ショーでも紹介されます。最新情報にご期待ください。 

**Adrestia**チームはAdrestiaコンポーネントをVasil対応にアップグレードし、cardano-js-sdkを本番環境にする準備を進め、新しいDB Sync上のHTTP APIの一部に改良を加えました。 

### スマートコントラクト

**Plutus**チームは、ハードフォークに向けたテストの改良とPlutusインフラの準備に取り組みました。plutus-chain-indexとパフォーマンスの不具合に取り組み、エミュレーターのメモリーの不具合とミントポリシーの動作を修正し、実際のネットワークでPABメモリーの使用量を削減しました。Architectural Design Recordsのブートストラップにも取り組みました。

**Marlowe**チームはIsabelleビルドをCIチェックとして修正し、Marlowe [Playgroundのエスクローサンプルで警告タブのクラッシュとテンプレートパラメーターの順番を修正し、tarball.jsバインディングを追加しました。Marlowe](Playgroundのエスクローサンプルで警告タブのクラッシュとテンプレートパラメーターの順番を修正し、tarball.jsバインディングを追加しました。Marlowe) CLIにマークル化サポートを追加し、Marlowe CLIの使用に関するMarloweパイオニアの講義とクイズを公開しました。 

### Basho( スケーリング)

**Hydra**チームはquickcheck-dynamicを使用してモデルベーステストの最初のスパイクを完了し、さらなる開発ステップを特定しました。コンフィグ設定に関する複数のバグを修正し、hydra-node v.0.6.0をリリースしました。これは、コンテステーションをサポートする初のhydra-nodeバージョンで、元の論文で提案されていたHydra Headプロトコルを完了しています。

### ガバナンス

**Project Catalyst**はFund9の提案受付を締め切りました。1,000を超える提案がQAに進みました。コミュニティによる投票は8月に実施されます。 

すべての提案は現在QA段階にあり、ここでは提案査定担当者が、すべての提案に関して、そのクオリティ、詳細、チャレンジへの対応に関してレビューします。提案ごとに、意見のバランスをとるために少なくとも5回のレビューを通すことを予定しており、その後、経験豊富な提案査定担当者がさらに確認を行います。提案査定担当者（そして費やした時間に対する報酬を得ること）に関心がある場合は、イノベーションプラットフォーム、[Ideascale](https://cardano.ideascale.com)で登録し、必要なプロフィールフィールドに入力してください。 

これまでに**Project Catalyst**により資金調達を受けたプロジェクトで100以上が完了しており、3,500を超える提案に票が投じられています。プロジェクトは日々完了しており、Project Catalystの資金額はその開始時から指数関数的に増加していることから、今後数週間以内にも数百規模のプロジェクトが完了することが見込まれます。

![](https://lh5.googleusercontent.com/xB9Es-XH3Z-vJ2bDI5yuGbg2UVivdHn2lyaYbfnff11gX0ppd3bZCqHwOvtMmRMVMSOSthkm7meS6s9uXxZaz_bw7O1IW33T8GigTa3GHZ_5jWEU0z4xXjdVtHGaW8RG26ezSJ6Bt2RSyDH-m82aIA05qkE)

### 現時点の統計

![](https://lh5.googleusercontent.com/waeKWuRw7JgTr8J4l8zPxzi3fgBc5ewFG12VnLjsAfgzCkI-sZOcMl8g87zUjxLh62R2BG_w_Yuc_503qJjPdK-G92wG6Dvw7sBVd6ru9uGnA4lbra3mU5EPa7wbA-7e3AOYR5clLlRDp5L7Eg8)
