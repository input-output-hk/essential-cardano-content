---
title: Weekly development report as of 2024-05-17
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/5e960867-9395-4a08-87f5-9dc2ffd05ac4/
image_text: Weekly development report as of 2024-05-17
---

### CORE TECHNOLOGY

This week, the **consensus** team released [consensus packages for node v.8.11](https://github.com/IntersectMBO/ouroboros-consensus/pull/1101), introducing several improvements:

*   **Improved Praos chain order:** [restricted the VRF tiebreaker based on slot distance](https://github.com/IntersectMBO/ouroboros-consensus/pull/1047) and made a small [tweak to the issue number tiebreaker](https://github.com/IntersectMBO/ouroboros-consensus/pull/1086) to improve chain selection.
    
*   **Statistics on leader schedule:** wrote an [overview of the statistics](https://github.com/IntersectMBO/ouroboros-consensus/pull/1096) on the leader schedule.
    
*   **Robustness refinement:** [integrated a robustness refinement](https://github.com/IntersectMBO/ouroboros-consensus/pull/1031) for concluding that a node is caught up in the context of bootstrap peers.
    

The team also published an update diving into the design and implementation of Ouroboros Genesis. Read the [latest blog post](https://iohk.io/en/blog/posts/2024/05/08/ouroboros-genesis-design-update/) for more details. 

The **performance and tracing** team completed the UTXO-HD benchmarks using the `LMDB` backend, [yielding promising results](https://updates.cardano.intersectmbo.org/2024-05-07-performance-and-tracing#utxo-hd--lmdb). This advancement is significant for improving the efficiency and scalability of the Cardano blockchain.

Lastly, efforts are underway to set up the consensus technical working group within Intersect. Community members interested in participating are encouraged to reach out to [Damian Nadales](mailto:damian.nadales@iohk.io) for more information and involvement.

### WALLETS AND SERVICES

This week, the **Lace** team launched [Lace v.1.11](https://www.lace.io/blog/lace-1-11-0-release). This new update comes with improved NFT functionality. The team has introduced the ability to set a wallet avatar for the user’s favorite NFT and a better search tool to save users time scrolling through their crypto assets. Additionally, the team has launched phase two of a three-part plan to improve transaction UX and added the capability for transaction submission via local Cardano node and `cardano-submit-api`, enhancing control for tech-savvy users. Finally, integration with Trezor T is now available, offering increased security through hardware wallet options.

### SCALING

This week, the **Hydra** team upgraded the Hydra node networking layer to utilize a versioned handshake protocol, and also performed extensive documentation restructuring and bug fixes for the `hydra-tui`. Additionally, the team fixed the transaction envelope type parsing to be compatible with `cardano-cli`. Lastly, the team experimented with removing persistence in the reliability layer and added a custom command to reset the head state to the last confirmed snapshot.

This week, the **Mithril** team released the new distribution [2418.1](https://github.com/input-output-hk/mithril/releases/tag/2418.1), which includes broader CPU support for pre-built binaries and a new memory allocator for the signer and aggregator nodes aimed at preventing memory fragmentation. They also continued implementing the certification of Cardano transactions in Mithril networks and worked on scaling the signature and proof generation for `mainnet`. Specifically, they completed the implementation of compressing the transaction Merkle tree using sub-Merkle trees based on transaction block ranges and initiated testing and assessing performance on `mainnet` in a test Mithril network. Additionally, they started working on minimizing the extra disk space requirements for the signer on the SPO infrastructure.

Finally, the team implemented some optimizations for the aggregator, fixed some bugs on the client, and introduced new documentation for compiling the Mithril relay from source.

### VOLTAIRE & SANCHONET

This week, the **core technology** teams added a new CLI command for initiating hard forks, which makes the `--prev-governance-action-tx-id` parameter optional for creating no-confidence actions, addressing scenarios where the committee is defined in the Conway genesis file. Additionally, they have refined some help texts for better clarity and usability and updated the description fields in governance action files.

The team adjusted the maximum understood protocol version from 9 to 10 when the experimental hard fork flag is enabled. This change allows for bypassing Conway's bootstrap phase during testing. Lastly, work continued on the testing implementation of CIP-1694 with `cardano-testnet`.

Follow [Intersect updates](https://www.intersectmbo.org/news) for more details!

### CATALYST

The proposal submission phase ended on May 13, with 1,283 proposals submitted for Fund12.

The finalization deadline for proposers was May 16 at 11am UTC, so all proposals should now be in their final stage.

Community reviewer applications are ongoing, and anyone who wants to become a reviewer should register by the end of the day on May 19. Catalyst will then move into the community review stage, which will begin on May 23 and last until June 6.

For the latest updates, [follow Catalyst on X](https://twitter.com/Catalyst_onX).

### EDUCATION

This week, the **education** team is working on creating explainers for Voltaire topics and focusing on content for Mastering Cardano.

![](https://ucarecdn.com/05e2ea69-dc11-4860-877d-fcb51ee384de/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**コンセンサス**チームは[ノードv.8.11のコンセンサスパッケージ](https://github.com/IntersectMBO/ouroboros-consensus/pull/1101)をリリースし、複数の改良を導入しました。

*   **Praosチェーンの順序の改良：**[スロット距離に基づいてVRFタイブレーカーを制限](https://github.com/IntersectMBO/ouroboros-consensus/pull/1047)し、チェーン選択を向上させるために[問題番号タイブレーカーを微調整](https://github.com/IntersectMBO/ouroboros-consensus/pull/1047)しました。
    
*   \*\*リーダースケジュールの統計：\*\*リーダースケジュールの[統計概要](https://github.com/IntersectMBO/ouroboros-consensus/pull/1096)を作成しました。
    
*   **ロバストネスの改良**：ノードがブートストラップピアのコンテキストに捕捉されるように[ロバストネスを調整して統合](https://github.com/IntersectMBO/ouroboros-consensus/pull/1031)しました。
    

Outoboros Genesisの設計と実装に関する最新情報を公開しました。詳しくは[こちらの最新ブログ記事](https://iohk.io/jp/blog/posts/2024/05/08/ouroboros-genesis-design-update/)をご覧ください（日本語版は近日公開予定）。

\*\*P&T（パフォーマンス＆トレース）\*\*チームはLMDBバックエンドを使用したUTXO-HDベンチマークを完了し、 [有望な結果をもたらし](https://updates.cardano.intersectmbo.org/2024-05-07-performance-and-tracing#utxo-hd%20--%20lmdb)ました。この進歩は、Cardanoブロックチェーンの効率とスケーラビリティの向上にとって重要です。

Intersect内にコンセンサス技術ワーキンググループを設立する取り組みが進行中です。参加に関心のあるコミュニティメンバーは、詳細や参加方法について[Damian Nadales](mailto:damian.nadales@iohk.io)までお問い合わせください。

### ウォレットとサービス

**Lace**チームは[Lace v.1.11](https://www.lace.io/blog/lace-1-11-0-release)をリリースしました。本更新ではNFT機能が改良されています。ユーザーのお気に入りのNFTにウォレットアバターを設定する機能と、ユーザーが暗号資産をスクロールする時間を節約できるよにするためのより優れた検索ツールを導入しました。トランザクションUXを改善するための3部構成の計画の第2段階を開始し、ローカルのCardanoノードとcardano-submit-apiを介したトランザクション送信機能を追加し、テクノロジーに精通したユーザーの操作性を強化しました。Trezor Tとの統合が可能となったことで、ハードウェアウォレットオプションによるセキュリティの向上を実現しました。

### スケーリング

**Hydra**チームは、バージョン管理されたハンドシェイクプロトコルを利用するためにHydraノードネットワーキング層をアップグレードし、hydra-tuiのドキュメントの再構築とバグ修正を広範囲にわたって行いました。トランザクションエンベロープタイプの解析をcardano-cliに対応するよう修正しました。信頼性層の永続性を削除する実験を行い、ヘッドステータスを最後に確認されたスナップショットにリセットするカスタムコマンドを追加しました。

**Mithril**チームは、新ディストリビューション[2418.1](https://github.com/input-output-hk/mithril/releases/tag/2418.1)をリリースしました。これには、ビルド済みバイナリに対する幅広いCPUサポートと、メモリの断片化を防ぐことを目的とした署名者ノードおよびアグリゲーターノード用の新しいメモリーアロケーターが含まれています。MithrilネットワークにCardanoトランザクション認証を実装する作業続け、mainnetの署名と証明生成のスケーリングに取り組みました。具体的には、トランザクションブロック範囲をベースに、サブマークル木を用いたトランザクションマークル木の圧縮の実装を完了し、Mithrilテストネットワークのmainnetでのパフォーマンスのテストと評価を開始しました。SPOインフラ上の署名者の追加ディスク容量要件を最小限に抑える作業を開始しました。

アグリゲーターの最適化を実装し、クライアントのバグを修正し、ソースからMithrilリレーをコンパイルするための新しいドキュメントを導入しました。

### VOLTAIRE & SANCHONET

**コアテクノロジー**チームは、ハードフォークを開始するための新しいCLIコマンドを追加しました。これにより、不信任アクションを作成するための--prev-governance-action-tx-idパラメーターがオプションになり、Conwayのジェネシスファイルで委員会が定義されるシナリオに対処しました。ヘルプテキストのわかりやすさと使いやすさを向上させ、ガバナンスアクションファイルの説明フィールドを更新しました。

ハードフォークの実験フラグが有効になっている場合の理解されている最大プロトコルバージョンを9から10に調整しました。この変更により、テスト中にConwayのブートストラップフェーズを省略できるようになりました。cardano-testnetでCIP-1694の実装をテストする作業を継続しました。

詳細は、Intersectの[更新情報](https://www.intersectmbo.org/news)を参照してください。

### CATALYST

Fund12の提案提出フェーズは5月13日に終了し、1,283の提案が提出されました。

提案者による最終稿締め切りは、日本時間5月16日20時であったため、すべての提案は最終段階にあります。

コミュニティレビュアーの申請は継続中です。レビュアー希望者は、5月19日いっぱいまでに登録する必要があります。その後、Catalystはコミュニティレビュー段階に移行します。これは5月23日から6月6日までです。

最新の更新情報は、[Catalyst on X](https://twitter.com/Catalyst_onX)でご覧ください。

### 教育

**教育**チームはVoltaireのトピックの説明者を作成し、Mastering Cardanoのコンテンツに焦点を当てています。

# TECNOLOGÍA CENTRAL

Esta semana, el equipo de **consenso** ha publicado [paquetes de consenso para el nodo v.8.11](https://github.com/IntersectMBO/ouroboros-consensus/pull/1101), introduciendo varias mejoras:

*   **Mejora del orden de las cadenas Praos:** [restringió el desempate VRF basado en la distancia entre ranuras](https://github.com/IntersectMBO/ouroboros-consensus/pull/1047) e hizo un pequeño [ajuste en el desempate por número de incidencia](https://github.com/IntersectMBO/ouroboros-consensus/pull/1086) para mejorar la selección de cadenas.
    
*   **Estadísticas sobre el horario del líder:** escribió un [resumen de las estadísticas](https://github.com/IntersectMBO/ouroboros-consensus/pull/1096) sobre el horario del líder.
    
*   **Refinamiento de la robustez:** [integró un refinamiento de la robustez](https://github.com/IntersectMBO/ouroboros-consensus/pull/1031) para concluir que un nodo está atrapado en el contexto de los pares bootstrap.
    

El equipo también publicó una actualización que profundiza en el diseño y la implementación de Ouroboros Génesis. Lea el [último artículo del blog](https://iohk.io/en/blog/posts/2024/05/08/ouroboros-genesis-design-update/) para obtener más detalles.

El equipo de **rendimiento y rastreo** completó los puntos de referencia UTXO-HD utilizando el backend `LMDB`, [arrojando resultados prometedores](https://updates.cardano.intersectmbo.org/2024-05-07-performance-and-tracing#utxo-hd--lmdb). Este avance es significativo para mejorar la eficacia y la escalabilidad de la blockchain Cardano.

Por último, se están realizando esfuerzos para crear el grupo de trabajo técnico de consenso dentro de Intersect. Se anima a los miembros de la comunidad interesados en participar a que se pongan en contacto con [Damian Nadales](mailto:damian.nadales@iohk.io) para obtener más información y participar.

# WALLETS Y SERVICIOS

Esta semana, el equipo de **Lace** ha lanzado [Lace v.1.11](https://www.lace.io/blog/lace-1-11-0-release). Esta nueva actualización viene con una funcionalidad NFT mejorada. El equipo ha introducido la posibilidad de establecer un avatar de wallet para la NFT favorita del usuario y una mejor herramienta de búsqueda para ahorrar tiempo a los usuarios desplazándose por sus cryptoactivos. Además, el equipo ha puesto en marcha la fase dos de un plan de tres partes para mejorar la UX de las transacciones y ha añadido la capacidad de envío de transacciones a través del nodo local Cardano y `cardano-submit-api`, mejorando el control para los usuarios expertos en tecnología. Por último, ya está disponible la integración con Trezor T, que ofrece una mayor seguridad gracias a las opciones de hardware wallet.

# ESCALADA

Esta semana, el equipo de **Hydra** ha actualizado la capa de red del nodo Hydra para utilizar un protocolo de apretón de manos versionado, y también ha realizado una amplia reestructuración de la documentación y correcciones de errores para el `hydra-tui`. Además, el equipo arregló el análisis sintáctico del tipo de sobre de transacción para que fuera compatible con `cardano-cli`. Por último, el equipo experimentó con la eliminación de la persistencia en la capa de fiabilidad y añadió un comando personalizado para restablecer el estado del cabezal a la última instantánea confirmada.

Esta semana, el equipo de **Mithril** publicó la nueva distribución [2418.1](https://github.com/input-output-hk/mithril/releases/tag/2418.1), que incluye una mayor compatibilidad con CPU para los binarios preconstruidos y un nuevo asignador de memoria para los nodos firmante y agregador destinado a evitar la fragmentación de la memoria. También siguieron implementando la certificación de las transacciones de Cardano en las redes Mithril y trabajaron en el escalado de la generación de firmas y pruebas para `mainnet`. En concreto, completaron la implementación de la compresión del árbol Merkle de transacciones utilizando subárboles Merkle basados en rangos de bloques de transacciones e iniciaron las pruebas y la evaluación del rendimiento de `mainnet` en una red Mithril de prueba. Además, empezaron a trabajar en la minimización de los requisitos adicionales de espacio en disco para el firmante en la infraestructura de SPO.

Por último, el equipo implementó algunas optimizaciones para el agregador, corrigió algunos errores en el cliente e introdujo nueva documentación para compilar el relé Mithril desde el código fuente.

# VOLTAIRE & SANCHONET

Esta semana, los equipos de **tecnología de base** han añadido un nuevo comando CLI para iniciar hard forks, que hace que el parámetro `--prev-governance-action-tx-id` sea opcional para crear acciones de no-confianza, abordando escenarios en los que el comité está definido en el archivo de génesis de Conway. Además, han perfeccionado algunos textos de ayuda para mejorar la claridad y la usabilidad y han actualizado los campos de descripción de los archivos de acciones de gobernanza.

El equipo ha ajustado la versión máxima comprendida del protocolo de 9 a 10 cuando está activada la bandera experimental de hard fork. Este cambio permite eludir la fase de arranque de Conway durante las pruebas. Por último, se siguió trabajando en la implementación de pruebas del CIP-1694 con `cardano-testnet`.

¡Siga [Intersect updates](https://www.intersectmbo.org/news) para más detalles!

# CATALYST

La fase de presentación de propuestas finalizó el 13 de mayo, con 1.283 propuestas presentadas para el Fondo12.

La fecha límite de finalización para los proponentes fue el 16 de mayo a las 11am UTC, por lo que todas las propuestas deberían estar ahora en su fase final.

Las solicitudes de los revisores comunitarios están en curso, y cualquiera que desee convertirse en revisor deberá inscribirse antes de que finalice el día 19 de mayo. Catalyst pasará entonces a la fase de revisión comunitaria, que comenzará el 23 de mayo y durará hasta el 6 de junio.

Para conocer las últimas actualizaciones, [siga a Catalyst en X](https://twitter.com/Catalyst_onX).

# EDUCACIÓN

Esta semana, el equipo de **educación** está trabajando en la creación de explicadores para los temas de Voltaire y centrándose en el contenido de Mastering Cardano.
