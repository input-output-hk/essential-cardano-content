---
title: Weekly development report as of 2023-10-20
tags:
  - Weekly development updates
  - Development
  - Statistics
  - Cardano
url: ""
image: https://ucarecdn.com/2413aa13-41cd-424f-b68e-1ef75ddbfef7/
image_text: Weekly development report as of 2023-10-20
---

### CORE TECHNOLOGY

This week, the **ledger** team focused on constraint-based testing and roundtrip serialization, which led to fixing a bug in the Conway Genesis serialization. They also worked on a Conway specialized ledger query for getting the constitutional committee state and preventing the submission of proposal procedures with no valid path to enactment.

During the past two weeks, the **consensus** team received additional benchmark results for the UTXO-HD feature showing that resource usage for the in-memory backend is unsatisfactory for a mainnet release, which requires waiting on the implementation of a new infrastructure to benchmark the LMDB backend. Meanwhile, the team focused on evaluating the feasibility of making the UTXO-HD feature switchable, which will enable its release as an experimental feature. 

On the Genesis development, the team produced the first draft of a ‘[Survivable eclipse duration model](https://github.com/input-output-hk/ouroboros-consensus/pull/422)’. They also released Cardano node v.[8.5.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.5.0-pre), resumed work on subpar handling of future blocks, and improved the tracing system to assist in troubleshooting the node.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team made some SDK changes and prepared for final quality assurance testing for Trezor support. They also worked on the DApp Store local instance spin-up, investigating the required backend changes. Additionally, the team were busy enhancing the multi-staking flow by persisting the portfolio on-chain, rebalancing staking on every new transaction, enabling the delegation from five to ten (maximum) stake pools, and fixing some issues.

### SMART CONTRACTS

The **Marlowe** team worked on a CLI demo on [NFT minting](https://github.com/input-output-hk/marlowe-starter-kit/pull/45), added the `CollectGarbage` [command](https://github.com/input-output-hk/marlowe-cardano/pull/725) to Marlowe Runtime, and [reviewed](https://github.com/input-output-hk/marlowe-cardano/pull/727) all calls to `die` and `throwError` to close communication gracefully. The team also added [instructions](https://github.com/input-output-hk/marlowe-payouts/pull/15) on how to set environment variables for the payouts DApp, implemented the claim vested amount flow in the [vesting DApp](https://github.com/input-output-hk/marlowe-vesting/pull/7), and implemented [open role transactions](https://github.com/input-output-hk/marlowe-cardano/pull/726) in Marlowe Runtime. 

Work is ongoing on Runner development. The team published Runner overview [documentation](https://github.com/input-output-hk/marlowe-doc/pull/171/files), applied some [refactoring](https://github.com/input-output-hk/marlowe-runner/commit/eadc26f) to the source graph, and fixed some issues related to progress reflection and frontend updating. 

### BASHO (SCALING)

The **Hydra** team focused on finalizing the new [network resilience layer](https://github.com/input-output-hk/hydra/pull/1101), which involved adding persistency to ensure data integrity. They also completed the [exploration](https://github.com/input-output-hk/hydra/pull/1072) of potentially moving the Plutus validator scripts to Aiken.

Also, the team enhanced the TUI by [upgrading](https://github.com/input-output-hk/hydra/pull/1103) the Brick framework, undertook a comprehensive refactoring of the project's structure, and addressed various bug fixes. 

This week, the **Mithril** team started working on the decentralization of the Mithril networks with a [proof of concept of peer-to-peer](https://github.com/input-output-hk/mithril/issues/1300) (P2P) networking between nodes. The team kept working on the adaptation of the Mithril client as a [library](https://github.com/input-output-hk/mithril/issues/1141), on the [deterministic computation](https://github.com/input-output-hk/mithril/issues/1283) of the transaction history of an address from the immutable files, and on the [refactoring](https://github.com/input-output-hk/mithril/issues/1187) that will fix the bottleneck of the key registration in the aggregator. Additionally, they published a [security advisory](https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq) for the Mithril relay.

Finally, they enhanced the CI/CD to publish multiple packages to [crates.io](//crates.io) and started improving the developer experience with the Mithril devnet.

### VOLTAIRE

Work on SanchoNet governance phase 5 is now in the process of being iterated after the latest node v.8.5.0-pre release. It is dedicated to more technical functionality testing. This includes protocol parameter updates, queries, and extended keys – elements that contribute to the adaptability and resilience of Cardano’s network as it continues to evolve. Opportunities to test and refine committee functionalities will also be available on SanchoNet. Visit the [SanchoNet](https://sancho.network) website, and join the conversations on [Discord](https://sancho.network/get-started/discord). 

Showcased at the recent NFTxLV event, the Voltaire GovTool serves as a valuable resource for advancing community building on Cardano. It provides a user-friendly interface that enables ada holders to directly interact with CIP-1694, easily register as delegate representatives (DReps), delegate voting power to DReps, and review governance actions. Collaboration and democratic decision making will soon be a streamlined process for the entire community to enjoy. Register [here](https://forms.gle/Sw4vZaga68b2Ps8p7) if you’re interested in testing the Voltaire GovTool together.

To get involved in shaping the future of Cardano governance, make sure to [join Intersect](http://intersectmbo.org/).

### CATALYST

This week, **Project Catalyst** continues the onboarding process for all 192 Fund10 funded projects. Thus far, every project has successfully completed their required proof-of-life meetings and general onboarding forms. Currently, the community is advancing in the review and approval of individual statements of milestones (SoMs). Each funded project must create their own SoM before receiving their initial payment tranche. Approximately 80% of projects have already completed this step, and new ones are being added daily. Learn more about the entire onboarding process in this [onboarding guide](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding).

Project Catalyst has continued conducting a series of workshops focusing on funding categorization and the potential structure of the next funding round. If you are interested in reviewing recent retrospective boards, you can do so by following [this link](https://miro.com/app/board/uXjVOQvpE34=/?share_link_id=844666662682) (password: catalyst). 

Finally, to stay updated with everything happening in Project Catalyst, join the [Catalyst Telegram](https://t.me/cardanocatalyst) announcement channel or review [the latest news section](https://projectcatalyst.io/news) on the website. 

### EDUCATION

This week, the **Education** team is wrapping up the Haskell course with ABC, teaching Plutus and Marlowe fundamentals. They are also analyzing feedback from the recent _Cardano Days_ event at the University of Malta, where they received a net participant score of 83.3%.

![](https://ucarecdn.com/afda6848-9ca9-4a44-a806-c52ab8bf83c2/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**台帳**チームは制約ベースのテストとラウンドトリップのシリアル化に焦点を当てたところ、Conway Genesisのシリアル化のバグの修正につながりました。憲法委員会のステータスを得ること、有効な法制化の道が無い提案手続きの提出を防ぐことを目的とした、Conway専用台帳クエリにも取り組みました。

過去2週間に、**コンセンサス**チームはUTXO-HD機能の追加的なベンチマーク結果を受け取りました。これは、LMDBバックエンドをベンチマークするための新インフラの実装を待つ必要があるメインネットリリースにとって、インメモリバックエンドのリソース使用量が不十分であることを示しています。一方、UTXO-HDの機能を切り替え可能にし、実験的な機能としてリリースできるようにするための実現可能性の評価に注力しました。 

Genesisの開発では、「[生存可能なエクリプス持続時間モデル](https://github.com/input-output-hk/ouroboros-consensus/pull/422)」の草稿を作成しました。Cardano node v.[8.5.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.5.0-pre)をリリースし、将来のブロックを標準以下で処理する取り組みを再開し、ノードのトラブルシューティングを支援するためのトレースシステムを改善しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームはSDKに変更を加え、Trezorサポートの最終QAテストを準備しました。DAppストアのローカルインスタンスのスピンアップにも取り組み、必要なバックエンドの変更を調査しました。マルチステーキングフローの強化にも勤しみ、オンチェーンでポートフォリオを永続化し、新しいトランザクションごとにステーキングのバランスを調整し、委任可能なステークプール数を最大5プールから10プールとしたほか、一部の不具合を修正しました。

### スマートコントラクト

**Marlowe**チームは、[NFTミント](https://github.com/input-output-hk/marlowe-starter-kit/pull/45)に関するCLIデモに取り組み、Marlowe RuntimeにCollectGarbage[コマンド](https://github.com/input-output-hk/marlowe-cardano/pull/725)を追加し、通信を正常に終了するためにdieとthrowErrorへのすべての呼び出しを[確認](https://github.com/input-output-hk/marlowe-cardano/pull/727)しました。ペイアウトDAppの環境変数を設定する方法についての[手順](https://github.com/input-output-hk/marlowe-payouts/pull/15)を追加し、 [べスティングDApp](https://github.com/input-output-hk/marlowe-vesting/pull/7)に既得額請求フローを実装し、Marlowe Runtimeに[オープンロールトランザクション](https://github.com/input-output-hk/marlowe-cardano/pull/726)を実装しました。 

Runnerの開発作業は進行中です。Runnerの概要[ドキュメント](https://github.com/input-output-hk/marlowe-doc/pull/171/files)を公開し、ソースグラフに[リファクタリング](https://github.com/input-output-hk/marlowe-runner/commit/eadc26f)を適用し、進捗状況の反映とフロントエンドの更新に関連する不具合を修正しました。 

### Basho( スケーリング)

**Hydra**チームは、データの整合性を確保するための永続性の追加を含む、新しい[ネットワーク回復性レイヤー](https://github.com/input-output-hk/hydra/pull/1101)の最終作業に焦点を当てました。PlutusバリデータースクリプトをAikenに移動する可能性についての[調査](https://github.com/input-output-hk/hydra/pull/1072)を完了しました。

Brickフレームワークを[アップグレード](https://github.com/input-output-hk/hydra/pull/1103)してTUIを強化し、プロジェクトの構造の包括的なリファクタリングを行い、さまざまなバグ修正に対応しました。 

Mithrilチームは、Mithrilネットワークの分散化への取り組みを、ノード間のピアツーピア（P2P）ネットワークの概念実証から開始しました。Mithrilクライアントを[ライブラリー](https://github.com/input-output-hk/mithril/issues/1141)として適用する作業、不変ファイルからのアドレスのトランザクション履歴の決定的計算、アグリゲーターでの鍵登録のボトルネックを修正するリファクタリングへの取り組みを続けました。Mithrilリレーの[安全勧告](https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq)を公開しました。

CI/CDを拡張して複数のパッケージをcrates.ioに公開し、Mithril devnetで開発者の操作性の改善に着手しました。

### VOLTAIRE

最新ノードv.8.5.0-PREリリース後、SanchoNetガバナンスのフェーズ5ではイテレーションが進行中です。このフェーズでは、より技術的な機能テストに重点が置かれています。これには、プロトコルパラメーターの更新、クエリ、拡張キーなど、Cardanoのネットワークが進化し続ける中で適応性と回復性に貢献する要素が含まれます。SanchoNetでは、委員会の機能をテストおよび改良する機会も提供されています。[SanchoNet](https://sancho.network)のサイトにアクセスし、[Discord](https://sancho.network/get-started/discord)の会話に参加してください。 

先般のNFTxLVイベントで紹介されたVoltaire GovToolは、Cardanoでコミュニティ構築を進めるための貴重なリソースとして機能します。ADA保有者がCIP-1694と直接やり取りしたり、DRep（デリゲーター代表）として簡単に登録したり、議決権をDRepに委任したり、ガバナンスアクションをレビューしたりできるユーザーフレンドリーなインターフェイスを提供します。コラボレーションと民主的な意思決定は、まもなくコミュニティ全体が享受できる合理化されたプロセスになります。Voltaire GovToolのテストに参加を希望する場合は、[こちら](https://forms.gle/Sw4vZaga68b2Ps8p7)から登録してください。

Cardanoガバナンスの未来を形作るために、ぜひ[Intersectに参加して](http://intersectmbo.org/)ください。

### CATALYST

**Project Catalystは**、Fund10で資金提供を受けた192のプロジェクトすべてのオンボーディングプロセスを継続しています。これまでのところ、すべてのプロジェクトで、必要なプルーフオブライフミーティングと一般的なオンボーディングフォームが無事完了しています。現在、コミュニティは個々のマイルストンステートメント（SOM）のレビューと承認を進めています。資金提供を受けた各プロジェクトは、最初の支払いトランシェを受け取る前に、独自のSOMを作成する必要があります。プロジェクトの約80%がすでにこのステップを完了しており、日々新たに追加されています。オンボーディングプロセス全体の詳細は、[オンボーディングガイド](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding)を参照してください。

Project Catalystは、資金のカテゴリーと次の資金調達ラウンドで予想される構造に焦点を当てた一連のワークショップを継続して実施しています。最近の振り返りボードに関心がある場合は、[このリンク](https://miro.com/app/board/uXjVOQvpE34=/?share_link_id=844666662682)をクリックしてください（パスワード：catalyst)。 

Project Catalystの最新情報を入手するには、[Catalyst Telegram](https://t.me/cardanocatalyst)案内チャネルに参加するか、ウェブサイトの[最新情報セクション](https://projectcatalyst.io/news)を確認してください。 

### 教育

**教育**チームは、PlutusとMarloweの基礎をカバーしたABCとのHaskellコースの最終段階に入っています。先般マルタ大学で開催されたCardano Daysイベントからのフィードバックを分析していますが、ここで得られた参加者の正味スコアは83.3%でした。

# TECNOLOGÍA CENTRAL

Esta semana, el equipo del **ledger** se ha centrado en las pruebas basadas en restricciones y en la serialización de ida y vuelta, lo que ha permitido solucionar un error en la serialización del Génesis de Conway. Asimismo, se ocuparon de una consulta especializada del ledger de Conway para obtener el estado del comité constitucional y evitar la presentación de procedimientos de propuesta sin camino válido hacia la promulgación.

En las dos últimas semanas, el equipo de **consenso** recibió resultados de benchmarks adicionales para la función UTXO-HD que mostraban que el uso de recursos para el backend en memoria es insatisfactorio para un lanzamiento en mainnet, lo que obliga a esperar a la implementación de una nueva infraestructura para realizar el benchmark del backend LMDB. Paralelamente, el equipo se centró en evaluar la viabilidad de hacer conmutable la función UTXO-HD, lo que permitirá su lanzamiento como función experimental.

En cuanto al desarrollo de Génesis, el equipo elaboró el primer borrador de un ‘[Modelo de duración del eclipse superviviente](https://github.com/input-output-hk/ouroboros-consensus/pull/422)’. También publicaron el nodo Cardano v.[8.5.0-pre](https://github.com/input-output-hk/cardano-node/releases/tag/8.5.0-pre), reanudaron el trabajo sobre el manejo de bloques futuros y mejoraron el sistema de rastreo para ayudar en la resolución de problemas del nodo.

Consulte, [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

El equipo de **Lace** realizó algunos cambios en el SDK y se preparó para las pruebas finales de control de calidad para la compatibilidad con Trezor. También trabajaron en la puesta en marcha de la instancia local de la DApp Store, investigando los cambios necesarios en el backend. Además, el equipo se ocupó de mejorar el flujo de múltiples stakes persistiendo la cartera en la cadena, reequilibrando el staking en cada nueva transacción, permitiendo la delegación de cinco a diez (máximo) stake pools y solucionando algunos problemas.

# CONTRATOS SMART CONTRACT

El equipo **Marlowe** trabajó en una demostración CLI sobre [NFT minting](https://github.com/input-output-hk/marlowe-starter-kit/pull/45), añadió el \[comando\] `CollectGarbage`([PLT-5853 Contract store garbage collector by jhbertra · Pull Request #725 · input-output-hk/marlowe-cardano · GitHub](https://github.com/input-output-hk/marlowe-cardano/pull/725)) a Marlowe Runtime, y [revisó](https://github.com/input-output-hk/marlowe-cardano/pull/727) todas las llamadas a `die` y `throwError` para cerrar la comunicación de forma elegante. El equipo también añadió [instrucciones](https://github.com/input-output-hk/marlowe-payouts/pull/15) sobre cómo establecer variables de entorno para la DApp de pagos, implementó el flujo de reclamación de importes adquiridos en la [DApp de adquisición de derechos](https://github.com/input-output-hk/marlowe-vesting/pull/7), e implementó [transacciones de roles abiertos](https://github.com/input-output-hk/marlowe-cardano/pull/726) en Marlowe Runtime.

Se continúa con el trabajo de desarrollo de Runner. El equipo publicó la \[documentación\] general de Runner([PLT-7348 - draft Runner page for review by joseph-fajen · Pull Request #171 · input-output-hk/marlowe-doc · GitHub](https://github.com/input-output-hk/marlowe-doc/pull/171/files)), aplicó algunas [refactorizaciones](https://github.com/input-output-hk/marlowe-runner/commit/eadc26f) al grafo fuente y solucionó algunos problemas relacionados con el reflejo del progreso y la actualización del frontend.

# BASHO (ESCALADO)

El equipo **Hydra** se centró en finalizar la nueva [capa de resistencia de la red](https://github.com/input-output-hk/hydra/pull/1101), lo que implicó añadir persistencia para garantizar la integridad de los datos. También completaron la [exploración](https://github.com/input-output-hk/hydra/pull/1072) de trasladar potencialmente las secuencias de comandos del validador Plutus a Aiken.

También mejoró la TUI [actualizando](https://github.com/input-output-hk/hydra/pull/1103) el marco Brick, emprendió una refactorización exhaustiva de la estructura del proyecto y abordó varias correcciones de errores.

El equipo de **Mithril** comenzó a trabajar en la descentralización de las redes Mithril con una [prueba de concepto de red entre pares](https://github.com/input-output-hk/mithril/issues/1300) (P2P) entre nodos. El equipo siguió trabajando en la adaptación del cliente Mithril como [biblioteca](https://github.com/input-output-hk/mithril/issues/1141), en el [cálculo determinista](https://github.com/input-output-hk/mithril/issues/1283) del historial de transacciones de una dirección a partir de los archivos inmutables, y en la [refactorización](https://github.com/input-output-hk/mithril/issues/1187) que solucionará el cuello de botella del registro de claves en el agregador. Además, publicaron un [aviso de seguridad](https://github.com/input-output-hk/mithril/security/advisories/GHSA-9m3h-72xj-x2gq) para el relé Mithril.

Por último, mejoraron el CI/CD para publicar múltiples paquetes en [crates.io](//crates.io) y empezaron a mejorar la experiencia de los desarrolladores con la devnet de Mithril.

# VOLTAIRE

El trabajo sobre la fase 5 de la gobernanza de SanchoNet está ahora en proceso de iteración tras la última versión v.8.5.0-pre del nodo. Está dedicada a pruebas de funcionalidad más técnicas. Esto incluye actualizaciones de parámetros de protocolo, consultas y claves ampliadas, elementos que contribuyen a la adaptabilidad y resistencia de la red de Cardano a medida que sigue evolucionando. Las oportunidades para probar y perfeccionar las funcionalidades de las comisiones también estarán disponibles en SanchoNet. Visite el sitio web de [SanchoNet](https://sancho.network/) y únase a las conversaciones en [Discord](https://sancho.network/get-started/discord).

Mostrado en el reciente evento NFTxLV, el Voltaire GovTool sirve como un valioso recurso para avanzar en la construcción de la comunidad en Cardano. Ofrece una interfaz fácil de usar que permite a los titulares de ada interactuar directamente con el CIP-1694, registrarse fácilmente como representantes delegados (DReps), delegar el poder de voto a los DReps y revisar las acciones de gobernanza. La colaboración y la toma de decisiones democrática serán pronto un proceso agilizado del que podrá disfrutar toda la comunidad. Regístrese [aquí](https://forms.gle/Sw4vZaga68b2Ps8p7) si está interesado en probar juntos la GovTool de Voltaire.

Si desea participar en la configuración del futuro de la gobernanza de Cardano, asegúrese de [unirse a Intersect](http://intersectmbo.org/).

# CATALYST

El **Proyecto Catalyst** prosigue esta semana el proceso de incorporación de los 192 proyectos financiados por el Fondo 10. Hasta ahora todos los proyectos han completado con éxito sus reuniones de prueba de vida y los formularios generales de onboarding requeridos. Actualmente, la comunidad está avanzando en la revisión y aprobación de las declaraciones individuales de hitos (SoM). Todos los proyectos financiados deben crear su propia SoM antes de recibir su tramo de pago inicial. Cerca del 80% de los proyectos ya han completado este paso, y cada día se añaden otros nuevos. Obtenga más información sobre todo el proceso de incorporación en esta [guía de incorporación](https://docs.projectcatalyst.io/catalyst-basics/project-onboarding).

El Proyecto Catalyst ha seguido realizando una serie de talleres centrados en la categorización de la financiación y en la posible estructura de la próxima ronda de financiación. Si está interesado en revisar las juntas retrospectivas recientes, puede hacerlo siguiendo [este enlace](https://miro.com/app/board/uXjVOQvpE34=/?share_link_id=844666662682) (contraseña: catalyst).

Por último, para estar al día de todo lo que ocurre en el Proyecto Catalyst, únase al canal de anuncios [Catalyst Telegram](https://t.me/cardanocatalyst) o revise [la sección de últimas noticias](https://projectcatalyst.io/news) en la página web.

# EDUCACIÓN

Esta semana, el equipo de **Educación** está terminando el curso de Haskell con ABC, enseñando los fundamentos de Plutus y Marlowe. También están analizando los comentarios del reciente evento _Cardano Days_ en la Universidad de Malta, donde recibieron una puntuación neta de los participantes del 83,3%.
