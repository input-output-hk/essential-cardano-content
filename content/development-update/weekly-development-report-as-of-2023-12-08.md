---
title: Weekly development report as of 2023-12-08
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/332f4bff-f937-4860-bec3-a03bbebf259d/
image_text: ""
---

### CORE TECHNOLOGY

This week, the **performance** team released benchmarking for node v.8.7.0 and performed the first-ever Conway benchmarks. They also worked on quality improvements to the tracing output and added a new test suite among other initiatives. 

Over the past two weeks, the **ledger** team implemented the initial version of Conway conformance testing. This allows generating random valid data with the help of constraint-based testing framework, applying that data to Conway ledger rules and verifying that the output matches the one produced by the executable version of the formal ledger specification, when it is applied to the same random data.

They also fixed several Conway bugs, implemented a few new predicate checks, completed and tested the get constitutional committee query, and made various improvements to the testing tools.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### WALLETS AND SERVICES

This week, the **Lace** team were busy preparing for the Lace 1.8 release, planned for next week, featuring some exciting updates for multi-staking.

### SMART CONTRACTS

This week, the **Plutus** tools team continued working on proving the conformance of Marconi’s indexing compared to DB Sync. This requires providing a method for streaming parts of the chain to Marconi without running a node. Additionally, they proceeded with embedding Marconi into a Cardano node to access ledger events without recomputing the ledger state.

On the node emulator side, the team assessed the versatility of the node emulator, using it to facilitate end-to-end testing of Marconi.

This week, the **Marlowe** team released [Marlowe TS-SDK beta](https://twitter.com/marlowe_io/status/1732445238851960986), which allows embedding Marlowe contracts into your project using a familiar environment. They also ran a [Twitter space](https://twitter.com/i/spaces/1yoKMwQmdnwJQ?s=20) with LaPetiteAda, optimized [Plutus latest validators](https://github.com/input-output-hk/marlowe-cardano/pull/764), improved [import maps in Marlowe TS-SDK](https://github.com/input-output-hk/marlowe-ts-sdk/pull/103), and fixed some issues related to [role-token outputs](https://github.com/input-output-hk/marlowe-cardano/pull/767) and [open-role input application](https://github.com/input-output-hk/marlowe-cardano/pull/765). The team added support for [additional properties](https://github.com/input-output-hk/marlowe-cardano/pull/762) on token metadata and improved some error messages along with Marlowe Runner UI fixes.

Finally, they published the [payouts DApp prototype overview](https://docs.marlowe.iohk.io/docs/developer-tools/ts-sdk/payouts-dapp-prototype) and worked on Runner and Agda functionality improvements.

### SCALING

This week, there was the [monthly review meeting](https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM/edit), featuring demonstrations from Hydra, Mithril, and related projects around Cardano scaling. Make sure to check out the recording or the related [monthly report](https://hydra.family/head-protocol/monthly/2023-11) for more details.

The **Hydra** team addressed flakiness in tests and enhanced the logs' JSON schema, improving overall test reliability. Additionally, the team built MacOS ARM64 (aarch64-darwin) [binaries in CI](https://github.com/input-output-hk/hydra/pull/1182) and improved the [network configuration](https://github.com/input-output-hk/hydra/issues/1174) by detecting incompatible persisted states, contributing to overall system robustness. Finally, the team released [version 0.14.0](https://github.com/input-output-hk/hydra/releases/tag/0.14.0), highlighting their commitment to delivering regular updates and improvements.

The **Mithril** team made progress in adapting the Mithril client library for [WASM compilation](https://github.com/input-output-hk/mithril/issues/1336) and providing a JavaScript API for it. They also completed the optimization of the [aggregator's performance](https://github.com/input-output-hk/mithril/issues/1327). Additionally, the team initiated the implementation of a [testing Mithril network for SanchoNet](https://github.com/input-output-hk/mithril/issues/1173) and conducted [threat modeling and risk analysis](https://github.com/input-output-hk/mithril/issues/1350) for P2P networking. Finally, they enhanced the developer experience of the Mithril client library by providing ready-to-run examples in the repository and implemented a [workflow to manually publish libraries](https://github.com/input-output-hk/mithril/issues/1380) on [crates.io](//crates.io).

### VOLTAIRE

In **Voltaire**, Intersect members continue forging a secure, collaborative ecosystem to ensure Cardano's sustained growth and evolution in a safe space. 

Over the past few weeks, there have been different updates from the civics, membership, and community (MCC), parameter, and open source committees. The civics committee focused on ensuring accessible, fair, and transparent Cardano governance. It provided a recommendation related to Cardano governance and is prioritizing its focus areas for 2024. The MCC committee continued fostering community inclusivity within Cardano. With 10 meetings since its interim establishment, one being public, a second public meeting is scheduled for December 12. The parameter committee offered technical advice and recommendations for updating protocol parameters. Their first recommendation, PCP-001, was published on the Cardano Forum, and advisory groups are actively working on additional recommendations. You can follow the [meeting notes here](https://forum.cardano.org/c/governance/parameters-committee-updates/220).

Finally, the open source committee formulated a comprehensive roadmap for open source initiatives, emphasizing transparency, accessibility, and community-driven development. Two technical working groups – policy and strategy – are actively engaged in this work.

### CATALYST

This week, submissions for **Project Catalyst** Fund11 closed, and proposers with active submissions will get a chance to refine and finalize their proposals ahead of community review. Registration is also open for community reviewers. For this, you can navigate to [IdeaScale](http://cardano.ideascale.com/) and respond to a pop-up message if you’re interested in participating. Make sure to respond by the end of the day on December 10. 

Additionally, Catalyst town halls are back this week and are expected to resume on a regular basis. If you’re interested in hosting a meeting, [make sure to register it](https://mail.iogservices.io/e3t/Ctc/2M+113/d12bk-04/VX0Nh_5qBMjFW7Nvb-C1pG_BmW35KrPN56G7klN35KTBR3lYMRW69sMD-6lZ3kVN2VLXMJr6vt9W30dyd87nxHZzW43C_Zb1cfQvMW2mTyTw1HBsW2W4qh0qD2DpF-fW3rJ11p8mwYBgW2ZKHq06MFpM9W51ZLbK5h5h8CW3h_8Rf4gD-fvW5Cfpb26NT8Z9W3C4PbT4DPqR1W7XYfwr2CTt3gW5RdWFP1zLhMsVhlBzg4K-xQfW1SgzMJ8l73kvW8CRXW04rPPL3W1W2LWw1GXWnrW7sJ7Q12L4zKFW49c-_L1sYLPxW7MF7Y77VZCzgf46pnLz04) before every Tuesday to plan accordingly. 

### EDUCATION

This week, the **education** team worked on planning activities for the next Haskell course in 2024. They also continued work on Mastering Cardano content and Marlowe education tasks.

![](https://ucarecdn.com/e54d629b-8c60-4b9b-a8d2-a90bc1decfb9/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**パフォーマンス**チームはノードv.8.7.0のベンチマークをリリースし、Conway初のベンチマークを実行しました。アウトプットトレースの品質向上に取り組み、新たなテストスイートを追加しました。 

この2週間で、**台帳**チームはConway適合性テストの初期バージョンを実装しました。これにより、制約ベースのテストフレームワークの助けを借りてランダムに有効なデータを生成し、そのデータをConway台帳ルールに適用し、同じランダムデータに適用された場合に、アウトプットが台帳の形式仕様の実行可能バージョンによって生成されたものと一致することを検証できます。

Conwayのバグを複数修正し、新しい述語チェックを実装し、憲法委員会関連のクエリを完了してテストし、テストツールにさまざまな改良を加えました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### ウォレットとサービス

**Lace**チームは、来週に予定されているマルチステーキングのためのエキサイティングな更新を備えたLace 1.8のリリース準備に追われました。

### スマートコントラクト

**Plutus**ツールチームは、引き続きDB Syncと比較したMarconiのインデックス作成の適合性の証明に取り組みました。このためには、ノードを実行せずにMarconiにチェーンの一部をストリーミングする方法を提供する必要があります。MarconiをCardanoノードに埋め込んで、台帳ステータスを再計算せずに台帳イベントにアクセスしました。

ノードエミュレーター側では、ノードエミュレーターの汎用性を評価し、Marconiのエンドツーエンドのテストを実施するために使用しました。

**Marlowe**チームは、使い慣れた環境を使用してMarloweコントラクトをプロジェクトに埋め込むことができる[Marlowe TS-SDKベータ版](https://twitter.com/marlowe_io/status/1732445238851960986)をリリースしました。LaPetiteAdaと[Twitterスペース](https://twitter.com/i/spaces/1yoKMwQmdnwJQ?s=20)を開催し、[Plutusの最新バリデーター](https://github.com/input-output-hk/marlowe-cardano/pull/764)を最適化し、[Marlowe TS-SDKのインポートマップ](https://github.com/input-output-hk/marlowe-ts-sdk/pull/103)を改善し、[ロールトークンアウトプット](https://github.com/input-output-hk/marlowe-cardano/pull/767)と[オープンロールインプットアプリケーション](https://github.com/input-output-hk/marlowe-cardano/pull/765)に関する不具合を修正しました。トークンメタデータの[追加プロパティ](https://github.com/input-output-hk/marlowe-cardano/pull/762)のサポートを追加し、Marlowe Runner UIの修正に伴い、一部のエラーメッセージを改良しました。

[ペイアウトDAppプロトタイプの概要](https://docs.marlowe.iohk.io/docs/developer-tools/ts-sdk/payouts-dapp-prototype)を公開し、RunnerとAgdaの機能改善に取り組みました。

### スケーリング

今週は[月例レビュー会議](https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM/edit)があり、Hydra、Mithril、そして、Cardanoスケーリングに関する関連プロジェクトのデモが行われました。詳細は、記録または関連する[月次レポート](https://hydra.family/head-protocol/monthly/2023-11)を確認してください。

**Hydra**チームはテストの脆弱性に対処し、ログのJSONスキーマを強化し、テスト全体の信頼性を向上させました。MacOS ARM64（Aarch64-Darwin）[バイナリをCI内に](https://github.com/input-output-hk/hydra/pull/1182)構築し、互換性のない永続状態を検出することで[ネットワーク設定](https://github.com/input-output-hk/hydra/issues/1174)を改善し、システム全体の堅牢性に貢献しました。バージョン0.14.0をリリースし、定期的な更新と改良を提供することへのコミットメントを強調しました。

**Mithril**チームは、MithrilクライアントライブラリーをWASMコンパイル用に適応させ、このためにJavaScript APIを提供する作業を進めました。[アグリゲーターのパフォーマンス](https://github.com/input-output-hk/mithril/issues/1327)の最適化も完了しました。[SanchoNetのMithrilテストネットワーク](https://github.com/input-output-hk/mithril/issues/1173)の実装を開始し、P2Pネットワークの[脅威モデリングとリスク分析](https://github.com/input-output-hk/mithril/issues/1350)を実施しました。リポジトリですぐに実行できるサンプルを提供し、Crates.io上で[ライブラリーを手動で公開するワークフロー](https://github.com/input-output-hk/mithril/issues/1380)を実装することで、Mithrilクライアントライブラリーの開発者エクスペリエンスを向上させました。

### VOLTAIRE

**Voltaire**に関しては、Cardanoが安全な場所で確実に成長と進化を続けられるよう、Intersectメンバーが安全なコラボレーションエコシステムの構築を続けています。 

ここ数週間、市民、メンバーシップ、コミュニティ（MCC）、パラメーター、およびオープンソースの各委員会から更新情報が届いています。市民委員会は、アクセスしやすく、公正で透明性のあるCardanoガバナンスの確保に焦点を当てました。Cardanoガバナンスに関する提言を行い、2024年の重点分野に優先順位をつけています。MCC委員会は、Cardanoにおけるコミュニティの包摂性を促進する取り組みを続けました。暫定的な設立から数えて10回行われたミーティングのうち1回は公開されており、12月12日に第2回公開会議が予定されています。パラメーター委員会は、プロトコルパラメーターの更新に関する技術的助言と勧告を提供しました。そのうち最初の勧告であるPCP-001はCardano Forumに掲載され、諮問グループは追加の勧告に積極的に取り組んでいます。[議事録はこちら](https://forum.cardano.org/c/governance/parameters-committee-updates/220)で確認できます。

オープンソース委員会は、透明性、アクセシビリティ、コミュニティ主導の開発を強調した、オープンソースイニシアチブの包括的なロードマップを策定しました。政策と戦略の2つのテクニカルワーキンググループがこの作業に積極的に取り組んでいます。

### CATALYST

**Project Catalyst** Fund11の提出は締め切られました。提出案が有効である提案者には、コミュニティのレビューに先立って提案を絞り込み、最終稿にするチャンスがあります。コミュニティレビュアーの登録も受付中です。参加に興味がある場合は[IdeaScale](http://cardano.ideascale.com/)に移動して、ポップアップメッセージに応答します。必ず12月10日が終わるまでに回答してください。 

 Catalystタウンホールは今週再開され、定期開催となることが期待されています。会議を主催することに興味がある場合は、計画を立てるために毎週火曜日までに[必ず登録](https://mail.iogservices.io/e3t/Ctc/2M+113/d12bk-04/VX0Nh_5qBMjFW7Nvb-C1pG_BmW35KrPN56G7klN35KTBR3lYMRW69sMD-6lZ3kVN2VLXMJr6vt9W30dyd87nxHZzW43C_Zb1cfQvMW2mTyTw1HBsW2W4qh0qD2DpF-fW3rJ11p8mwYBgW2ZKHq06MFpM9W51ZLbK5h5h8CW3h_8Rf4gD-fvW5Cfpb26NT8Z9W3C4PbT4DPqR1W7XYfwr2CTt3gW5RdWFP1zLhMsVhlBzg4K-xQfW1SgzMJ8l73kvW8CRXW04rPPL3W1W2LWw1GXWnrW7sJ7Q12L4zKFW49c-_L1sYLPxW7MF7Y77VZCzgf46pnLz04)してください。

### 教育

**教育**チームは2024年の次回Haskellコースの企画に取り組みました。Mastering CardanoのコンテンツとMarloweの教育課題への取り組みも続けました。

# TECNOLOGÍA DE NÚCLEO

Esta semana, el equipo de **performance** ha publicado las pruebas comparativas para el nodo v.8.7.0 y ha realizado las primeras pruebas comparativas Conway. Además, trabajaron en la mejora de la calidad de la salida de rastreo y añadieron un nuevo conjunto de pruebas, entre otras iniciativas.

En las dos últimas semanas, el equipo de **ledger** puso en marcha la versión inicial de las pruebas de conformidad de Conway. Ello posibilita generar datos aleatorios válidos con la ayuda del entorno de pruebas basado en restricciones, aplicar esos datos a las reglas del ledger Conway y verificar que la salida coincide con la producida por la versión ejecutable de la especificación formal del ledger, cuando se aplica a los mismos datos aleatorios.

Asimismo, corrigieron varios errores de Conway, implementaron algunas comprobaciones de predicados nuevas, completaron y probaron la consulta para obtener el comité constitucional e introdujeron varias mejoras en las herramientas de comprobación.

Como siempre, consulte [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# WALLETS Y SERVICIOS

Durante esta semana, el equipo de **Lace** se ha dedicado a preparar el lanzamiento de Lace 1.8, previsto para la próxima semana, que incluye algunas actualizaciones interesantes para el staking múltiple.

# SMART CONTRACTS

El equipo de herramientas de **Plutus** ha seguido trabajando para probar la conformidad de la indexación de Marconi frente a DB Sync. Esto implica ofrecer un método para transmitir partes de la cadena a Marconi sin ejecutar un nodo. Además, procedieron a incrustar Marconi en un nodo Cardano para acceder a los eventos del ledger sin volver a calcular el estado del ledger.

En cuanto al emulador de nodos, el equipo evaluó la versatilidad del emulador de nodos, utilizándolo para facilitar las pruebas de extremo a extremo de Marconi.

El equipo **Marlowe** publicó [Marlowe TS-SDK beta](https://twitter.com/marlowe_io/status/1732445238851960986), que permite incrustar contratos Marlowe en su proyecto utilizando un entorno familiar. También ejecutaron un [espacio de Twitter](https://twitter.com/i/spaces/1yoKMwQmdnwJQ?s=20) con LaPetiteAda, optimizaron [los últimos validadores de Plutus](https://github.com/input-output-hk/marlowe-cardano/pull/764), mejoraron [los mapas de importación en Marlowe TS-SDK](https://github.com/input-output-hk/marlowe-ts-sdk/pull/103), y solucionaron algunos problemas relacionados con [las salidas de tokens de rol](https://github.com/input-output-hk/marlowe-cardano/pull/767) y [la aplicación de entrada de rol abierto](https://github.com/input-output-hk/marlowe-cardano/pull/765). El equipo añadió compatibilidad con [propiedades adicionales](https://github.com/input-output-hk/marlowe-cardano/pull/762) en los metadatos de tokens y mejoró algunos mensajes de error junto con correcciones en la interfaz de usuario de Marlowe Runner.

Por último, publicaron el [resumen del prototipo de DApp de pagos](https://docs.marlowe.iohk.io/docs/developer-tools/ts-sdk/payouts-dapp-prototype) y trabajaron en las mejoras de funcionalidad del Runner y Agda.

# ESCALADO

Esta semana se celebró la [reunión de revisión mensual](https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM/edit), con demostraciones de Hydra, Mithril y proyectos relacionados en torno al escalado de Cardano. Asegúrese de consultar la grabación o el [informe mensual](https://hydra.family/head-protocol/monthly/2023-11) relacionado para obtener más detalles.

El equipo de **Hydra** abordó la flaqueza en las pruebas y mejoró el esquema JSON de los registros, mejorando la fiabilidad general de las pruebas. Además, el equipo construyó \[binarios en CI\] para MacOS ARM64 (aarch64-darwin)([Build aarch64-darwin binaries by ch1bo · Pull Request #1182 · input-output-hk/hydra · GitHub](https://github.com/input-output-hk/hydra/pull/1182)) y mejoró la [configuración de red](https://github.com/input-output-hk/hydra/issues/1174) detectando estados persistentes incompatibles, lo que contribuyó a la robustez general del sistema. Por último, el equipo publicó la [versión 0.14.0](https://github.com/input-output-hk/hydra/releases/tag/0.14.0), destacando su compromiso de ofrecer actualizaciones y mejoras periódicas.

El equipo **Mithril** avanzó en la adaptación de la biblioteca cliente Mithril para la [compilación WASM](https://github.com/input-output-hk/mithril/issues/1336) y ofreció una API JavaScript para la misma. También completaron la optimización del [rendimiento del agregador](https://github.com/input-output-hk/mithril/issues/1327). Además, el equipo inició la implementación de una [red Mithril de pruebas para SanchoNet](https://github.com/input-output-hk/mithril/issues/1173) y llevó a cabo un [modelado de amenazas y análisis de riesgos](https://github.com/input-output-hk/mithril/issues/1350) para la red P2P. Por último, mejoraron la experiencia del desarrollador de la biblioteca cliente Mithril ofreciendo ejemplos listos para ejecutar en el repositorio e implementaron un [flujo de trabajo para publicar manualmente bibliotecas](https://github.com/input-output-hk/mithril/issues/1380) en [crates.io](//crates.io).

# VOLTAIRE

Los miembros de Intersect continúan forjando un ecosistema seguro y colaborativo para garantizar el crecimiento sostenido y la evolución de Cardano en un espacio seguro.

A lo largo de las últimas semanas, ha habido diferentes actualizaciones de los comités cívicos, de miembros y comunidad (MCC), de parámetros y de código abierto. El comité cívico se centró en garantizar una gobernanza de Cardano accesible, justa y transparente. Ofreció una recomendación relacionada con la gobernanza de Cardano y está priorizando sus áreas de interés para 2024. El comité MCC continuó fomentando la inclusión de la comunidad dentro de Cardano. Con 10 reuniones desde su creación provisional, una de ellas pública, se ha programado una segunda reunión pública para el 12 de diciembre. El comité de parámetros ofreció asesoramiento técnico y recomendaciones para actualizar los parámetros del protocolo. Su primera recomendación, PCP-001, se publicó en el Foro Cardano, y los grupos asesores están trabajando activamente en recomendaciones adicionales. Puede seguir las [notas de la reunión aquí](https://forum.cardano.org/c/governance/parameters-committee-updates/220).

Por último, el comité de código abierto formuló una hoja de ruta exhaustiva para las iniciativas de código abierto, haciendo hincapié en la transparencia, la accesibilidad y el desarrollo impulsado por la comunidad. Dos grupos de trabajo técnicos -política y estrategia- participan activamente en esta labor.

# CATÁLOGO

Esta semana se han cerrado las inscripciones para el **Proyecto Catalyst** Fund11, y los proponentes con inscripciones activas tendrán la oportunidad de perfeccionar y finalizar sus propuestas antes de la revisión por parte de la comunidad. También está abierta la inscripción para los revisores de la comunidad. Para ello, puede navegar hasta [IdeaScale](http://cardano.ideascale.com/) y responder a un mensaje emergente si está interesado en participar. Asegúrese de responder antes de que finalice el día 10 de diciembre.

Además, los ayuntamientos Catalyst vuelven esta semana y se espera que se reanuden con regularidad. Si está interesado en organizar una reunión, [asegúrese de registrarla](https://mail.iogservices.io/e3t/Ctc/2M+113/d12bk-04/VX0Nh_5qBMjFW7Nvb-C1pG_BmW35KrPN56G7klN35KTBR3lYMRW69sMD-6lZ3kVN2VLXMJr6vt9W30dyd87nxHZzW43C_Zb1cfQvMW2mTyTw1HBsW2W4qh0qD2DpF-fW3rJ11p8mwYBgW2ZKHq06MFpM9W51ZLbK5h5h8CW3h_8Rf4gD-fvW5Cfpb26NT8Z9W3C4PbT4DPqR1W7XYfwr2CTt3gW5RdWFP1zLhMsVhlBzg4K-xQfW1SgzMJ8l73kvW8CRXW04rPPL3W1W2LWw1GXWnrW7sJ7Q12L4zKFW49c-_L1sYLPxW7MF7Y77VZCzgf46pnLz04) antes de cada martes para planificarse adecuadamente.

# EDUCACIÓN

El equipo de **educación** trabajó en la planificación de actividades para el próximo curso de Haskell en 2024. También siguieron trabajando en el contenido de Mastering Cardano y en las tareas educativas de Marlowe.
