---
title: Weekly development report as of 2022-09-23
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/6bd96fb0-de2b-4d4d-90c4-d8f71ef0d80c/
image_text: ""
---

### CORE TECHNOLOGY

This week on September 22, IOG together with Cardano Foundation triggered the hard fork combinator event to deploy Vasil at the protocol level. Full Vasil functionality, which includes support for reference inputs, inline datums, reference scripts, collateral outputs, and a new Plutus cost model, will become available to developers on mainnet on September 27. 

Diffusion pipelining, also implemented as part of the Vasil release, will improve scalability by enabling further performance improvements. A ‘spike’ in activity is possible immediately following the upgrade – as the community ‘test drives’ the capabilities. Monitoring will continue for at least four epochs post-hard fork, at which point a decision will be made about further adjustments, based on 'regular' network bandwidth.

You can track the latest status of the [ecosystem readiness](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade) and find out [everything about Vasil in Tim Harrison’s post](https://www.essentialcardano.io/article/cardanos-approaching-vasil-upgrade-what-to-expect).

The **ledger** team also worked on era types in terms of organizational consistency, transaction output modules, and improved different parameters for more efficient script and transaction deployment.

The **consensus** team continued working on UTXO HD and in-memory reimplementation, added some test coverage reports, and investigated anti-difference prototype benchmarking results. 

### WALLETS AND SERVICES 

This week, the **Daedalus** team added voluntary-anonymous analytics tracking to the application. They also added and tested the LedgerJS library v.5.1.0.

Development work is ongoing on the **Lace** desktop features. The team deployed the first proof of concept to test embedded DApps in the desktop application, made improvements to the display of the local node sync process, and added support for preview and pre-production testing environments. 

The **Adrestia** team released a GraphQL update with some fixes and improvements for exchanges. They're also working to get cardano-js-sdk production-ready, and are continuing with the implementation of multisig (shared wallets) and ‘light’ mode features in cardano-wallet.

### SMART CONTRACTS

This week, the **Plutus** team continued improving documentation, made some Hackage and API improvements, and ran more testing. They progressed on the implementation of Babbage support for Plutus tools and continued setting up the Marconi testing infrastructure. 

The **Marlowe** team updated the validator to comply with constraint 4, replaced PK with Address in the specification and Isabelle proofs, implemented the constant validator, and added an end-to-end test case for publishing and using the constant validator. They also wrote tests for HistoryStore and reorganized semantic types to use literal programming. 

Finally, the team updated README instructions for NixOS in the marlowe-cardano repository. 

### BASHO (SCALING)

This week, the **Hydra** team connected two hydra-node instances using cloud services to run a more persistent example application. They also fixed layer 2 transaction resubmission using a TTL approach, and improved some flaky tests.

Development work is ongoing on the Mithril proof of concept: this week, the **Mithril** team worked on the migration of the internal stores of the signer and aggregator nodes, and also on the certification of the SPOs registering in the Mithril network. They also worked on the design of a new version of the release process. For more details, see the [Mithril repository](https://github.com/input-output-hk/mithril#readme).

### GOVERNANCE

This week, Project Catalyst closed voting for Fund9. Community participation in this fund has surpassed expectations, with voting increasing by 53%. The voting power has also increased, which shows more ada being used across more proposals in Project Catalyst with 11% of all circulating ada being used in Fund9. This number continues to grow and demonstrates that the community is making its voice heard on what they want to see on Cardano.

Fund9 results will be shared early next week, and IOG wishes all proposals the best of luck. 

  
**Some statistics:**

*   The total number of registered wallets: 58,167
    
*   Total voting power in ada: 3,908,712,434
    
*   Total votes cast: 364,288
    
*   Ideascale users: 60,055  
      
    ![](https://lh3.googleusercontent.com/NLCwtflvnnlOxZJJ7ROA038se_fvdbh9KzBnCS_UA22cZPdxbX3fJpBSCI7u1V1ViiNaQmhaFC2h5qQCHjWjfpxuIfXFhKIOon93WlzfrHAfELCnjhBEThsOTV-adrFlD4ZqwX8PzRbYhR9MitrOzhDwFWdTqdrPQBvvJinKar24YHzT9FCuYTcYTA)  
    

![](https://lh4.googleusercontent.com/OazaRWKc-AJW52aZGDFua3LGxEWyh9tLmN9yMOvHTz_VXU5wX2Zvq9Fs2Cl5h9RzJa3_DWNNePz3Cu4N4KRTMvgtQ7AX-R9yteG-MXmBv9LYMUN9w2nYs5REb9REgWsQlWjXmN6th01pCDl1tAf2ZISYbjvFOQt3CKvEcC2VGjoliF8WuMTogPCyAw_2)

### コアテクノロジー

9月22日、IOGはCardano財団とともにハードフォークコンビネーターイベントを発動してVasilをプロトコルレベルでデプロイします。開発者は、9月27日からメインネットで参照インプット、インラインデータム、参照スクリプト、担保アウトプット、新しいPlutusコストモデルを含むVasilの全機能を利用できるようになります。 

Vasilリリースに実装される拡散パイプラインは、さらなるパフォーマンスの改善を可能にすることによって、スケーラビリティを向上させます。コミュニティが機能を試用することによって、アップグレード直後にアクティビティが「急増」する可能性があります。監視は、ハードフォーク後の少なくとも4エポックの間継続され、その時点で「通常」のネットワーク帯域幅に基づき、さらなる調整に関して判断することになります。

最新の状況は[エコシステムの進捗情報ページ](https://iohk.zendesk.com/hc/en-us/articles/7981157534105-Third-party-readiness-for-Vasil-upgrade)を、また、[Tim HarrisonによるVasilの解説ブログ](https://iohk.io/jp/blog/posts/2022/07/04/cardano-s-approaching-vasil-upgrade-what-to-expect/)も合わせてご覧ください。

**台帳**チームはまた、組織の一貫性、トランザクションアウトプットモジュール、そして、より効率的なスクリプトとトランザクションデプロイのためのさまざまなパラメーターの改善に関して、開発期の型に取り組みました。

**コンセンサス**チームはUTXO HDとインメモリー再実装の作業を続け、テストカバレッジレポートを追加し、差異防止プロトタイプのベンチマークの結果を調査しました。 

### ウォレットとサービス 

**Daedalus**チームは、任意の匿名追跡分析をアプリケーションに追加しました。LedgerJSライブラリーv.5.1.0の追加とテストも行いました。

**Lace**デスクトップ機能の開発作業は進行中です。デスクトップアプリケーションで埋め込まれたDAppをテストするための最初の概念実証をデプロイし、ローカルノードの同期プロセス画面を改良し、プレビュー環境およびプリプロ環境のサポートを加えました。 

**Adrestia**は、取引所向けに修正と改良を加えたGraphQL更新版をリリースしました。cardano-js-sdkを本番環境にするための作業に取り組んだほか、cardano-walletのマルチシグ（ウォレット共有）と「ライト」モード機能の実装作業を続けました。

### スマートコントラクト

**Plutus**チームはドキュメントの改良を続け、HackageとAPIを改良したほか、テストを実行しました。PlutusツールのBabbageサポートの実装を進め、Marconiテストインフラのをセットアップを続けました。 

**Marlowe**チームは、制約4に準拠するようバリデーターを更新し、仕様とIsabelle証明でPKをAddressに置き換え、コンスタントバリデーターを実装し、コンスタントバリデーターの公開および使用のためのエンドツーエンドのテストケースを追加しました。HistoryStoreのテストを作成し、リテラルプログラミングを使用するためにセマンティクス型を再編成しました。 

marlowe-cardanoリポジトリでNixOSのREADMEインストラクションを更新しました。 

### Basho( スケーリング)

**Hydra**チームは、より永続的なサンプルアプリケーションを実行するために、クラウドサービスを使用する2つのhydra-nodeインスタンスを接続しました。TTLアプローチを使ったレイヤー2トランザクションの再送信を修正し、Flakyテストを改良しました。

Mithril概念実証の開発作業は進行中です。**Mithril**チームは署名者ノードとアグリゲーターノードの内部ストアの移動と、MithrilネットワークのSPO登録証明に取り組みました。新しいリリースプロセスバージョンの設計にも取り組みました。詳細は、[Mithrilリポジトリ](https://github.com/input-output-hk/mithril%23readme)をご覧ください。

### ガバナンス

Project CatalystはFund9の投票を締め切りました。今回のファンドへのコミュニティの参加者は予想を上回り、投票数は53%増加しました。投票力も増加しました。これは、Project Catalystに投票するために登録されたADAが増加したことを示しており、流通しているすべての投票対象となるADAの11%を占めています。この数は増え続けており、コミュニティがCardanoに望むことについて、その声が聞き届けられることを示しています。

Fund9の結果は最終初めに公開されます。IOGはすべての提案に幸運を祈ります。 

  
**統計：**

*   登録されたウォレット総数：58167
    
*   総投票力（ADA）：3908712434
    
*   総投票数：364288
    
*   Ideascaleユーザー数：60055  
      
    ![](https://lh6.googleusercontent.com/hcn3SgX9_6mouBHSp2rYN4jCZRFxaS73QfnrKfPzrcUwlpKDNNvLpYtfls0ohyPbskL8gyRW7c4Bg1gwbxdzngYHxxYLxytLzgvFtOE0qnZiUSRmPOukGbc6szGr8jU5PAzF8DdR-Rtm8oa6WdrTV5wlzvXDr9pHXnEpNSNaqj2zsoJ3yTswhUsezX1w)
