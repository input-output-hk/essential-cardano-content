---
title: Weekly development report as of 2023-12-01
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/e3908307-39dc-4d99-9dae-02e672fb3e2d/
image_text: ""
---

### CORE TECHNOLOGY

Over the past few weeks, the **site reliability engineering** (SRE) team have continued working on Cardano environment improvements and general maintenance. Particularly, they updated the Cardano node’s Nixos service to support SIGHUP peer-to-peer (P2P) topology reloading when the `useSystemdReload` option is enabled.

The **consensus** team implemented and tested a [patch](https://github.com/input-output-hk/ouroboros-consensus/pull/525) to eliminate the propagation of future headers. This is currently under review and expected to be part of the next Cardano node version. In UTXO-HD development, the team [completed](https://github.com/input-output-hk/ouroboros-consensus/issues/510) prototyping the `LedgerDB` and `BackingStore` redesign needed for LSM-tree integration. This may help with the implementation of a more resource-efficient in-memory backend. The team also [investigated](https://github.com/input-output-hk/ouroboros-consensus/pull/513) unexpected performance degradation when acquiring the block context, released [Cardano node v.8.7.0](https://github.com/input-output-hk/cardano-node/releases/tag/8.7.0-pre)\-pre, and [relocated](https://github.com/input-output-hk/cardano-ledger/pull/3893) `tree-diff` from `cardano-ledger` libraries.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### SMART CONTRACTS

This week, the **Plutus tools** team migrated the Marconi sidechain to the new API, comparing results with DB Sync. They also experimented with transitioning Marconi into a Cardano node, worked on indexing, and improved the node emulator for certification.

This week, the **Marlowe** team implemented the [initial linting check](https://github.com/input-output-hk/marlowe-cardano/pull/747) for the OpenAPI schema, [improved Marlowe CLI](https://github.com/input-output-hk/marlowe-cardano/pull/759) in terms of publishing reference scripts, added new [checks to the Marlowe validator](https://github.com/input-output-hk/marlowe-plutus/pull/9), and modified some [semantic types](https://github.com/input-output-hk/marlowe-plutus/pull/10). The team continued working on TS-SDK, creating the first version of the [Marlowe object package](https://github.com/input-output-hk/marlowe-ts-sdk/pull/101) and `createContractSources`, and also focused on Marlowe Runtime, marlowe-cardano, and Runner improvements. Additionally, the team published the [payouts DApp overview](https://github.com/input-output-hk/marlowe-doc/pull/188/files), added a [compatibility matrix](https://github.com/input-output-hk/marlowe-doc/pull/187/files), and handled some [wallet errors](https://github.com/input-output-hk/marlowe-runner/pull/27) in Marlowe Runner.

### SCALING

This week, the **Hydra** team focused on internal testing of the Hydra head, opening it on mainnet using the 0.14.0 release candidate and addressing some [node restarting issues](https://github.com/input-output-hk/hydra/issues/1174). This also involved the [dynamic calculation of the UTXO](https://github.com/input-output-hk/hydra/pull/1176) value – a necessary adjustment following the switch to inline datums. Additionally, the team engaged with Cardano CLI and Cardano API maintainers to discuss recent changes and collaborated on drafting feature ideas, including the implementation of [Conway support](https://github.com/input-output-hk/hydra/issues/1177) within Hydra’s roadmap. As part of ongoing improvements, they also experimented with writing the specification in Markdown instead of LaTex.

This week, the **Mithril** team released the initial version of the [Mithril client library](https://crates.io/crates/mithril-client), enabling developers to integrate core Mithril features into their applications. They also released a new distribution, [2347.0](https://github.com/input-output-hk/mithril/releases/tag/2347.0), which includes support for slim certificate production by the aggregator, along with bug fixes and performance improvements.

The team also introduced the initial version of Cardano/Mithril node communication enhancements, implemented by TxPipe as part of the Catalyst project. They made progress in decentralizing Mithril networks, including testing the Mithril peer-to-peer (P2P) relay on a test network and conducting threat modeling and risk analysis for P2P networking. Additionally, they started working on adapting the Mithril client library for WASM compilation and made progress in optimizing aggregator performance. 

Finally, they fixed inaccuracies in the verbosity level of logs across most nodes and worked on troubleshooting for some users.

### VOLTAIRE

The **Voltaire** team concludes a dynamic November, marked by the beta launch of GovTool on SanchoNet, committee workshops, the Cardano Summit, Intersect town halls, and the approaching Cardano Ballot on CIP-1694 progress.

Opening on December 1 and closing on December 11 at 21:44 UTC, the Cardano Ballot on CIP-1694 invites your nonbinding feedback on the Voltaire governance journey. Don't miss the opportunity to share your insights. [Learn more here](https://t.co/GQtVYT2CdQ). 

Three new Intersect grant categories will open soon: _Education_, _Localization_, and an _Open_ category for unique ideas. These grants support community tooling and awareness of Cardano's governance journey. The Voltaire team expresses gratitude to all who have submitted applications.

In other Voltaire news, the Intersect membership has surpassed 800 members and continues to grow. At the Summit, Intersect welcomed over 150 enthusiastic new members, all eager to contribute to Cardano's forward momentum. The Voltaire team anticipates engaging with Intersect members in the 2024 events.

To learn more about Intersect or to join, [explore the website](https://www.intersectmbo.org/). 

### CATALYST

This week, **the Project Catalyst** draft submission deadline of November 30, at 11 am UTC expired. Now, proposers will have about seven days left to finalize their proposals before the process moves to the community review stage. The finalization deadline is scheduled for December 7, at 11 am UTC. If you are a proposer, make sure to check your proposals for any flags or issues with your submissions and follow instructions as provided in the comments section on IdeaScale. If you would like to participate in helping review proposals more formally, head over to [cardano.ideascale.com](//cardano.ideascale.com) and register before December 10, 2023 to become eligible.

![](https://ucarecdn.com/47190d73-26d9-495c-a4cf-8d85453a9b2f/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

この数週間、**SRE**（サイト信頼性エンジニアリング）チームは、Cardanoの環境の改善と総合的なメンテナンスに取り組んできました。特に、useSystemdReloadオプションが有効になっている場合にSIGHUP P2Pトポロジーのリロードをサポートするように、CardanoノードのNixosサービスを更新しました。

**コンセンサス**チームは、未来のヘッダーの伝播を排除した[パッチ](https://github.com/input-output-hk/ouroboros-consensus/pull/525)を実装しテストしました。これは現在レビュー中であり、Cardanoノード次回バージョンに含まれる予定です。UTXO-HD開発に関しては、LSMツリーの統合に必要なLedgerDBとBackingStoreの再設計のプロトタイプを[完成](https://github.com/input-output-hk/ouroboros-consensus/issues/510)させました。これは、よりリソース効率の高いインメモリーバックエンドの実装に役立ちます。ブロックのコンテクストを取得する際に見られた予想外のパフォーマンス低下を調査し、[Cardanoノードv.8.7.0](https://github.com/input-output-hk/cardano-node/releases/tag/8.7.0-pre)をリリースし、tree-diffをcardano-ledgerライブラリーから[移動](https://github.com/input-output-hk/cardano-ledger/pull/3893)しました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### スマートコントラクト

**Plutusツール**チームは、Marconiサイドチェーンを新しいAPIに移行し、DB Syncと結果を比較しました。MarconiをCardanoノードに移行する実験を行い、インデックスの作成に取り組み、認証用ノードエミュレーターを改良しました。

**Marlowe**チームは、OpenAPIスキーマの初期リントチェックを実装し、参照スクリプトの公開の観点からMarlowe CLIを改良し、Marloweバリデーターに新しいチェックを追加し、セマンティックタイプを修正しました。TS-SDKの開発を続け、[Marloweオブジェクトパッケージ](https://github.com/input-output-hk/marlowe-ts-sdk/pull/101)の初回バージョンとcreateContractSourcesを作成し、Marlowe Runtime、marlowe-cardano、Runnerの改良にも注力しました。[ペイアウトDAppの概要](https://github.com/input-output-hk/marlowe-doc/pull/188/files)を公開し、[互換性マトリクス](https://github.com/input-output-hk/marlowe-doc/pull/187/files)を追加し、Marlowe Runnerの[ウォレットのエラー](https://github.com/input-output-hk/marlowe-runner/pull/27)を処理しました。

### スケーリング

**Hydra**チームはHydraヘッドの社内テストに焦点を当て、0.14.0リリース候補を使用してメインネットで開き、[ノードの再起動に関する問題](https://github.com/input-output-hk/hydra/issues/1174)に対処しました。これには、インラインデータムへの切り替え後に必要な調整である、[UTXO値の動的計算](https://github.com/input-output-hk/hydra/pull/1176)も含まれていました。Cardano CLIおよびCardano APIのメンテナーと最近の変更点について話し合い、Hydraのロードマップ内での[Conwayサポート](https://github.com/input-output-hk/hydra/issues/1177)の実装を含む機能について共同で草稿を作成しました。継続的な改良の一環として、実験的にLa Texの代わりにMarkdownで仕様を作成しました。

**Mithril**チームは、[Mithrilクライアントライブラリー](https://crates.io/crates/mithril-client)の初期バージョンをリリースしました。これにより、開発者はMithrilのコア機能をアプリケーションに統合できます。新ディストリビューション[2347.0](https://github.com/input-output-hk/mithril/releases/tag/2347.0)をリリースしました。ここには、アグリゲーターによるスリムな証明書生成のサポート、バグの修正とパフォーマンスの向上が含まれています。

Catalystプロジェクトの一環としてTxPipeによって実装されたCardano/Mithrilノード通信拡張の初期バージョンも導入しました。テストネットワーク上でのMithril P2Pリレーのテストや、P2Pネットワーキングの脅威モデリングとリスク分析の実施など、Mithrilネットワークの分散化が進展しました。MithrilクライアントライブラリーをWASMコンパイルに適応させる作業を開始し、アグリゲーターのパフォーマンスの最適化を進めました。 

ほとんどのノードでログの冗長レベルの不正確さを修正し、一部のユーザーのトラブルシューティングに取り組みました。

### VOLTAIRE

**Voltaire**チームは、SanchoNetでのGovToolベータ版の立ち上げ、委員会ワークショップ、Cardanoサミット、Intersectタウンホール、CIP-1694の進捗状況に関するCardano Ballotイベント準備など、ダイナミックな11月を締めくくります。

12月1日に開始され、12月11日21:44（UTC）に締め切られるCIP-1694に関するCardano Ballotは、Voltaireガバナンスの旅に関して拘束力のないフィードバックを求めています。あなたの考えを共有する機会をお見逃しなく。[詳細はこちらをご覧ください](https://t.co/GQtVYT2CdQ)。 

Intersectではまもなく、教育、ローカライゼーション、オープンカテゴリーの3つの助成金が新たに\_オープンし\_ます。これらの助成金は、コミュニティツールとCardanoガバナンスに関する認識を支援します。Voltaireチームは、申請を提出したすべての人に感謝の意を表します。

Intersectの参加人数は800を超え、成長を続けています。Intersectはサミットで、150人の熱心な新メンバーを歓迎しました。誰もがCardanoの前進する勢いに貢献したいと意欲を燃やしています。Voltaireチームは、2024年のイベントでIntersectのメンバーと交流することを期待しています。  
Intersectの詳細や参加方法については、 [ウェブサイト](https://www.intersectmbo.org/)をご覧ください。 

### CATALYST

Project Catalystでは、11月30日11:00（UTC）にドラフト提出期限が締め切られました。提案者は、今後7日管内で提案を最終稿に仕上げ、その後プロセスはコミュニティレビュー段階に移行します。最終稿の締め切りは、12月7日の11:00（UTC）に設定されています。提案者は、提案にフラグや問題がないかどうかを確認し、IdeaScaleのコメントセクションに記載されている指示に従ってください。より正式に提案の審査に参加したい場合は、[cardano.ideascale.com](//cardano.ideascale.com)にアクセスし、2023年12月10日までに登録して資格を取得してください。

\---

# TECNOLOGÍA CENTRAL

Durante las últimas semanas, el equipo de **ingeniería de fiabilidad del sitio** (SRE) ha seguido trabajando en las mejoras del entorno Cardano y en el mantenimiento general. Concretamente, actualizaron el servicio Nixos del nodo Cardano para que admita la recarga de topología peer-to-peer (P2P) SIGHUP cuando está activada la opción `useSystemdReload`.

El equipo **consensus** implementó y probó un [parche](https://github.com/input-output-hk/ouroboros-consensus/pull/525) para eliminar la propagación de futuras cabeceras. Actualmente se está revisando y se espera que forme parte de la próxima versión del nodo Cardano. En el desarrollo de UTXO-HD, el equipo [completó](https://github.com/input-output-hk/ouroboros-consensus/issues/510) el prototipo del rediseño de `LedgerDB` y `BackingStore` necesario para la integración del árbol LSM. Esto puede ayudar a la implementación de un backend en memoria más eficiente en cuanto a recursos. El equipo también [investigó](https://github.com/input-output-hk/ouroboros-consensus/pull/513) una degradación inesperada del rendimiento al adquirir el contexto de bloque, publicó [Cardano node v.8.7.0](https://github.com/input-output-hk/cardano-node/releases/tag/8.7.0-pre)\-pre, y [reubicó](https://github.com/input-output-hk/cardano-ledger/pull/3893) `tree-diff` de las bibliotecas `cardano-ledger`.

Consulte, como siempre, [este informe técnico de desarrollo](https://input-output-hk.github.io/cardano-updates/archive) si desea más detalles de los distintos equipos.

# SMART CONTRACTS

El equipo de **Plutus tools** migró la sidechains Marconi a la nueva API, comparando los resultados con DB Sync. También experimentaron con la transición de Marconi a un nodo Cardano, trabajaron en la indexación y mejoraron el emulador de nodos para la certificación.

El equipo de **Marlowe** implementó la [comprobación inicial de linting](https://github.com/input-output-hk/marlowe-cardano/pull/747) para el esquema OpenAPI, [mejoró la CLI de Marlowe](https://github.com/input-output-hk/marlowe-cardano/pull/759) en cuanto a la publicación de las secuencias de comandos de referencia, añadió nuevas [comprobaciones al validador de Marlowe](https://github.com/input-output-hk/marlowe-plutus/pull/9) y modificó algunos [tipos semánticos](https://github.com/input-output-hk/marlowe-plutus/pull/10). El equipo siguió trabajando en TS-SDK, creando la primera versión del [paquete de objetos Marlowe](https://github.com/input-output-hk/marlowe-ts-sdk/pull/101) y `createContractSources`, y también se centró en las mejoras de Marlowe Runtime, marlowe-cardano y Runner. Además, el equipo publicó la [descripción general de la DApp de pagos](https://github.com/input-output-hk/marlowe-doc/pull/188/files), añadió una [matriz de compatibilidad](https://github.com/input-output-hk/marlowe-doc/pull/187/files), y gestionó algunos [errores de wallet](https://github.com/input-output-hk/marlowe-runner/pull/27) en Marlowe Runner.

# ESCALADO

El equipo de **Hydra** se dedicó esta semana a las pruebas internas de la cabeza de Hydra, abriéndola en mainnet con la versión candidata 0.14.0 y solucionando algunos [problemas de reinicio de nodos](https://github.com/input-output-hk/hydra/issues/1174). Para ello también se realizó el [cálculo dinámico del valor UTXO](https://github.com/input-output-hk/hydra/pull/1176), un ajuste necesario tras el cambio a los datos en línea. Además, el equipo se comprometió con los mantenedores de la CLI de Cardano y de la API de Cardano para debatir los cambios recientes y colaboró en la redacción de ideas de características, incluida la implementación de [compatibilidad con Conway](https://github.com/input-output-hk/hydra/issues/1177) dentro de la hoja de ruta de Hydra. Como parte de las mejoras en curso, también experimentaron con la escritura de la especificación en Markdown en lugar de LaTex.

El equipo de **Mithril** ha publicado la versión inicial de la [biblioteca cliente de Mithril](https://crates.io/crates/mithril-client), que permite a los desarrolladores integrar las características principales de Mithril en sus aplicaciones. También publicaron una nueva distribución, [2347.0](https://github.com/input-output-hk/mithril/releases/tag/2347.0), que incluye soporte para la producción de certificados slim por parte del agregador, junto con correcciones de errores y mejoras de rendimiento.

También presentaron la versión inicial de las mejoras de comunicación entre nodos Cardano/Mithril, implementadas por TxPipe como parte del proyecto Catalyst. Realizaron progresos en la descentralización de las redes Mithril, incluyendo la prueba del relé peer-to-peer (P2P) de Mithril en una red de prueba y la realización de modelos de amenazas y análisis de riesgos para las redes P2P. Además, empezaron a trabajar en la adaptación de la biblioteca cliente de Mithril para la compilación WASM y avanzaron en la optimización del rendimiento del agregador.

Corrigieron imprecisiones en el nivel de verbosidad de los registros en la mayoría de los nodos y trabajaron en la resolución de problemas de algunos usuarios.

# VOLTAIRE

El equipo de **Voltaire** concluye un noviembre dinámico, marcado por el lanzamiento beta de GovTool en SanchoNet, los talleres del comité, la Cumbre Cardano, los ayuntamientos de Intersect y la proximidad de la votación Cardano sobre el progreso del CIP-1694.

La votación Cardano sobre el CIP-1694, que se abrirá el 1 de diciembre y se cerrará el 11 de diciembre a las 21:44 UTC, le invita a hacernos llegar sus comentarios no vinculantes sobre el proceso de gobernanza de Voltaire. No pierda la oportunidad de compartir sus puntos de vista. [Más información aquí](https://t.co/GQtVYT2CdQ).

Pronto se abrirán tres nuevas categorías de subvenciones Intersect: _Educación_, _Localización_ y una categoría _Abierta_ para ideas únicas. Estas subvenciones apoyan la creación de herramientas comunitarias y la concienciación sobre el viaje de la gobernanza de Cardano. El equipo de Voltaire expresa su gratitud a todos los que han presentado solicitudes.

En otras noticias de Voltaire, la membresía de Intersect ha superado los 800 miembros y sigue creciendo. En la Cumbre, Intersect dio la bienvenida a más de 150 nuevos miembros entusiastas, todos ellos deseosos de contribuir al impulso hacia adelante de Cardano. El equipo de Voltaire espera comprometerse con los miembros de Intersect en los eventos de 2024.

Para saber más sobre Intersect o unirse a ella, [explore el sitio web](https://www.intersectmbo.org/).

# CATALYST

**En esta semana se finalizó el plazo de presentación de borradores \[de propuestas\] del Proyecto Catalyst**, el 30 de noviembre a las 11 h UTC. Ahora, a los proponentes les quedarán unos siete días para finalizar sus propuestas antes de que el proceso pase a la fase de revisión por parte de la comunidad. La fecha límite de finalización está prevista para el 7 de diciembre, a las 11 am UTC. Si es usted un proponente, asegúrese de revisar sus propuestas para detectar cualquier señal o problema con sus envíos y siga las instrucciones que se ofrecen en la sección de comentarios de IdeaScale. Si desea participar ayudando a revisar las propuestas de manera más formal, diríjase a [cardano.ideascale.com](//cardano.ideascale.com) y regístrese antes del 10 de diciembre de 2023 para ser elegible.
