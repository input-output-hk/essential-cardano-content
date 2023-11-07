---
title: Weekly development report as of 2023-10-27
tags:
  - Development
  - Weekly development updates
  - Statistics
url: ""
image: https://ucarecdn.com/a8387292-e964-4e1e-9f88-6b1fa6886b36/
image_text: Weekly development report as of 2023-10-27
---

### CORE TECHNOLOGY

This week, the **core technology** teams continued working on node, networking, and consensus improvements.

As always, see [this technical development report](https://input-output-hk.github.io/cardano-updates/archive) for more details from different teams.

### SMART CONTRACTS

This week, the **Plutus** tools team continued working on the Marconi API queries, Cardano node emulator for integration testing, and kept experimenting with the transition of Marconi to become the Cardano node. They also worked on updating user documentation. 

The **Marlowe** team introduced a flat version of the functions for submitting transactions from  ts-sdk, implemented health checks to verify the validity of [runtime URLs](https://github.com/input-output-hk/marlowe-payouts/pull/17), and allowed consumers to access their wallet-associated contracts, enhancing user convenience and accessibility.

Furthermore, the team conducted extensive user testing for the Runner MVP, focused on creating a [proof of concept](https://github.com/input-output-hk/marlowe-ts-sdk/pull/50) (POC) of the survey contract in  ts-sdk, and added several key functions, such as [getTransactionById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/42) and [getTransactionsForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/40). They also published the [TS-SDK explainer](https://github.com/input-output-hk/marlowe-doc/pull/177/files), [integrated](https://github.com/input-output-hk/marlowe-ts-sdk/pull/51) ts-sdk with the vesting contract, and added the `ts-sdk` [test suite](https://github.com/input-output-hk/marlowe-ts-sdk/pull/45). 

Finally, the team worked on documentation [improvements](https://github.com/input-output-hk/marlowe-cardano/pull/733), made [protocol adjustments](https://github.com/input-output-hk/marlowe-cardano/pull/730) in the Runtime by propagating remote errors to peers, and introduced functionality for disconnecting wallets in the Runner, improving the overall user experience. 

### SCALING

The **Hydra** team focused on preparing a masterclass and a workshop for the Cardano Summit 2023. They also worked on enhancing the Hydra node API submit-transaction workflow, so that it accepts three different encoding types (Base16 encoded CBOR string, TextEnvelope type, and JSON). Additionally, they continued upgrading the TUI brick to v.1.10. 

This week, the **Mithril** team released a new distribution [2342.0](https://github.com/input-output-hk/mithril/releases/tag/2342.0). This release includes support for SPO tickers displayed in the [Mithril explorer](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator) and the ability to produce slim Docker images for Mithril nodes.

They also kept working on decentralizing the Mithril networks with the [peer-to-peer (P2P) networking proof of concept](https://github.com/input-output-hk/mithril/issues/1300), progressed with the adaptation of the [Mithril client as a library](https://github.com/input-output-hk/mithril/issues/1141), and worked on the deterministic [computation](https://github.com/input-output-hk/mithril/issues/1283) of the UTXO set from the immutable files. 

Finally, they fixed the [bottleneck](https://github.com/input-output-hk/mithril/issues/1187) of the key registration in the aggregator, investigated some unreachability on the release-mainnet aggregator, and enhanced the Mithril explorer UI.

### VOLTAIRE

Collaboration and democratic decision making will soon be a streamlined process for the entire community to enjoy. The Voltaire GovTool serves as a valuable resource for advancing community building on Cardano. It provides a user-friendly interface that enables ada holders to directly interact with CIP-1694, easily register as delegate representatives (DReps), delegate voting power to DReps, and review governance actions. Register [here](https://forms.gle/Sw4vZaga68b2Ps8p7) if you’re interested in testing the Voltaire GovTool.

Work on SanchoNet governance phase 5 continues being iterated after the latest node v.8.5.0-pre release. It has key elements that contribute to the adaptability and resilience of Cardano’s network as it continues to evolve. Visit the [SanchoNet](https://sancho.network) website, and join the conversations on [Discord](https://sancho.network/get-started/discord). Contribute to SanchoNet today by testing the governance processes of CIP-1694.  

To get involved in shaping the future of Cardano, make sure to [join Intersect](http://intersectmbo.org/).

### CATALYST

176 of 192 (92%) funded projects, approved in Fund10 back in September, have their statement of milestones (SoM) now signed off by community members, meaning those teams are beginning to receive their initial funding distributions. Six projects have already submitted their first milestone proof of achievements (PoA) for the community to publicly verify that the deliverables were met and the project can progress to receiving funds for the next milestone. This is a tremendous achievement given that this is the first time milestone-based accountability is being verified by a significant number of community members.

The open-source setup of both Catalyst Voices and Catalyst Ecosystem Accelerator funded projects is underway, the public repos are in an advanced state of readiness, and the team anticipates that proof of achievement will have been verified by the next development update.  

Dry-run testing of the Fund11 Voting App begins this week, with new UI updates that include new filters to help voters get to the proposals they care about quicker.     

The Catalyst Team are also finalizing preparations for Cardano Summit workshops which will zoom in on the plans for the next 12 months, starting with the imminent launch of Fund11 during November, the first announcement from the team since IOG was given the mandate from the community to continue as Project Catalyst’s fund operators. Stop by the booth and sign up to the workshops to find out more. 

### EDUCATION

This week, the **Education** team is wrapping up the last week of teaching the Haskell course with ABC. They also launched the internal IOG Maths Academy and are preparing for the Cardano Summit next week.

![](https://ucarecdn.com/14a0554e-8f94-4f0b-baaa-b824431f8c78/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

コアテクノロジー\*\*チームは、ノード、ネットワーク、コンセンサス改良への取り組みを続けました。

通常通り、チーム別の詳細は[こちらの技術開発レポート](https://input-output-hk.github.io/cardano-updates/archive)をご覧ください。

### スマートコントラクト

**Plutus**ツールチームは、Marconi APIクエリや統合テスト用のCardanoノードエミュレーターの開発を続け、MarconiをCardanoノードに移行させるための実験を続けました。ユーザードキュメントの更新にも取り組みました。 

**Marlowe**チームは、ts-sdkからトランザクションを送信する機能のフラットバージョンを導入し、[ランタイムURL](https://github.com/input-output-hk/marlowe-payouts/pull/17)の妥当性を検証するヘルスチェックを実装し、消費者が自分のウォレットに関連するコントラクトにアクセスできるようにし、ユーザーの利便性とアクセシビリティを向上させました。

Runner MVPのユーザーテストを広範に実施し、ts-sdkで調査コントラクトの[概念実証](https://github.com/input-output-hk/marlowe-ts-sdk/pull/50)（POC）を作成することに焦点を当て、[getTransactionById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/42)や[getTransactionsForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/40)など主要な機能を複数追加しました。[TS-SDKの説明書](https://github.com/input-output-hk/marlowe-doc/pull/177/files)を公開し、ts-sdkとべスティングコントラクトを[統合](https://github.com/input-output-hk/marlowe-ts-sdk/pull/51)し、ts-sdk[テストスイート](https://github.com/input-output-hk/marlowe-ts-sdk/pull/45)を追加しました。 

ドキュメントの[改訂](https://github.com/input-output-hk/marlowe-cardano/pull/733)に取り組み、リモートエラーをピアに伝播することによりRuntimeで[プロトコルを調整](https://github.com/input-output-hk/marlowe-cardano/pull/730)し、Runnerにウォレットを切断する機能を導入して、全体的なユーザーエクスペリエンスを向上させました。 

### スケーリング

**HYDRA**チームは、Cardanoサミット2023に向けたマスタークラスとワークショップの準備に焦点を当てました。HydraノードAPIの送信トランザクションワークフローの強化にも取り組み、3種類のエンコーディングタイプ（Base16エンコードCBOR文字列、TextEnvelope型、JSON）を受け入れるようにしました。TUIブリックのv.1.10へのアップグレード作業を続けました。 

**Mithril**チームは新ディストリビューション[2342.0](https://github.com/input-output-hk/mithril/releases/tag/2342.0)をリリースしました。このリリースには、[Mithrilエクスプローラー](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator)に表示されるSPOティッカーのサポートと、Mithrilノード用のスリムなDockerイメージの作成機能が含まれています。

[P2P（ピアツーピア）ネットワークの概念実証](https://github.com/input-output-hk/mithril/issues/1300)を用いたMithrilネットワーク分散化への取り組みを続け、[ライブラリーとしてのMithrilクライアント](https://github.com/input-output-hk/mithril/issues/1141)の適用を進め、不変ファイルから得られるUTXOセットの決定的[計算](https://github.com/input-output-hk/mithril/issues/1283)に取り組みました。 

アグリゲーターにおける鍵登録の[ボトルネック](https://github.com/input-output-hk/mithril/issues/1187)を修正し、release-mainnetアグリゲーターでの到達不能性を調査し、MithrilエクスプローラーのUIを強化しました。

### VOLTAIRE

コラボレーションと民主的な意思決定は、まもなくコミュニティ全体が享受できる合理化されたプロセスになります。Voltaire GovToolは、Cardanoでコミュニティ構築を進めるための貴重なリソースとして機能します。ADA保有者がCIP-1694と直接やり取りしたり、DRep（デリゲーター代表）として簡単に登録したり、議決権をDRepに委任したり、ガバナンスアクションをレビューしたりできるユーザーフレンドリーなインターフェイスを提供します。Voltaire GovToolのテストに参加を希望する場合は、[こちら](https://forms.gle/Sw4vZaga68b2Ps8p7)から登録してください。

最新ノードv.8.5.0-preのリリース後、SanchoNetガバナンスのフェーズ5ではイテレーションが続いています。これには、Cardanoのネットワークが進化し続ける中で適応性と回復性に貢献する重要な要素が含まれます。[SanchoNet](https://sancho.network)のサイトにアクセスし、[Discord](https://sancho.network/get-started/discord)の会話に参加してください。今すぐCIP-1694のガバナンスプロセスをテストして、SanchoNetにご協力ください。  

Cardanoの未来を形作るために、ぜひ[Intersectに参加して](http://intersectmbo.org/)ください。

### CATALYST

現時点で9月にFund10で承認された192プロジェクトのうち176プロジェクト（92%）のSOM（マイルストンステートメント）にコミュニティが署名し、これらのチームには最初の資金分配が始まっています。すでに6つのプロジェクトが成果物を出し、プロジェクトが次のマイルストンの資金を受け取ることができることを公に検証するために、コミュニティに最初のPOA（マイルストン達成証明）を提出しています。これは、多くのコミュニティメンバーによってマイルストンに基づく説明責任が検証されるのは初めてであることを考えると、大きな成果です。

Catalyst VoicesとCatalyst Ecosystem Acceleratorが資金提供するプロジェクトのオープンソースセットアップが進行中です。公開リポジトリはすでに準備が整っており、次の開発更新時には達成証明が検証されることが予想されます。 

Fund11の投票アプリのドライランテストが今週始まりましたが、ここには投票者が関心のある提案にすばやくアクセスできるようにするための新しいフィルターを含む新しいUI更新が含まれています。 

Catalystチームは、11月に予定されているFund11の開始を皮切りに、今後12か月間の計画に重点を置くCardanoサミットワークショップの準備の最終段階に入っています。これは、IOGがProject Catalystのファンド運営を継続するというコミュニティからの委任を受けて以来、チームからの最初の発表となります。ぜひブースに立ち寄り、ワークショップに参加して詳細を確認してください。

### 教育

**教育**チームに関しては、ABCとの提携によるHaskellバーチャルコースが最終週を迎えました。IOG数学アカデミーを立ち上げたほか、来週のCardanoサミットに向けて準備を進めています。

# TECNOLOGÍA DEL NÚCLEO

Esta semana, los equipos de **tecnología de núcleo** han seguido trabajando en mejoras de nodos, redes y consenso.

Como siempre, consulte [este informe de desarrollo técnico](https://input-output-hk.github.io/cardano-updates/archive) para obtener más detalles de los distintos equipos.

# CONTRATOS INTELIGENTES

El equipo de herramientas de **Plutus** siguió trabajando en las consultas a la API de Marconi, en el emulador del nodo Cardano para las pruebas de integración, y siguió experimentando con la transición de Marconi para convertirse en el nodo Cardano. Asimismo, trabajaron en la actualización de la documentación de usuario.

El equipo de **Marlowe** introdujo una versión plana de las funciones para enviar transacciones desde ts-sdk, implementó comprobaciones de salud para verificar la validez de las [URL en tiempo de ejecución](https://github.com/input-output-hk/marlowe-payouts/pull/17), y permitió a los consumidores acceder a sus contratos asociados a wallet, mejorando la comodidad y accesibilidad de los usuarios.

Por otra parte, el equipo realizó extensas pruebas de usuario para el MVP del corredor, se centró en la creación de una [prueba de concepto](https://github.com/input-output-hk/marlowe-ts-sdk/pull/50) (POC) del contrato de encuesta en ts-sdk, y añadió varias funciones clave, como [getTransactionById](https://github.com/input-output-hk/marlowe-ts-sdk/pull/42) y [getTransactionsForContract](https://github.com/input-output-hk/marlowe-ts-sdk/pull/40). También publicaron el [TS-SDK explainer](https://github.com/input-output-hk/marlowe-doc/pull/177/files), [integraron](https://github.com/input-output-hk/marlowe-ts-sdk/pull/51) ts-sdk con el contrato de adquisición de derechos, y añadieron el \[conjunto de pruebas\] `ts-sdk`([PLT-6937: run test suite in CI by bjornkihlberg · Pull Request #45 · input-output-hk/marlowe-ts-sdk · GitHub](https://github.com/input-output-hk/marlowe-ts-sdk/pull/45)).

Por último, se trabajó en \[mejoras\] de la documentación\]([PLT-3312 More help text by jhbertra · Pull Request #733 · input-output-hk/marlowe-cardano · GitHub](https://github.com/input-output-hk/marlowe-cardano/pull/733)), realizó [ajustes de protocolo](https://github.com/input-output-hk/marlowe-cardano/pull/730) en el Runtime propagando los errores remotos a los peers, e introdujo una funcionalidad para desconectar wallets en el Runner, mejorando la experiencia general del usuario.

# ESCALADO

El equipo **Hydra** se centró en preparar una clase magistral y un taller para la Cumbre Cardano 2023. También trabajaron en la mejora del flujo de trabajo de envío de transacciones de la API del nodo Hydra, para que acepte tres tipos de codificación diferentes (cadena CBOR codificada en Base16, tipo TextEnvelope y JSON). Además, continuaron actualizando el ladrillo TUI a la v.1.10.

El equipo **Mithril** publicó una nueva distribución [2342.0](https://github.com/input-output-hk/mithril/releases/tag/2342.0). Esta versión incluye soporte para los tickers SPO mostrados en el [Explorador Mithril](https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.release-mainnet.api.mithril.network%2Faggregator) y la capacidad de producir imágenes Docker delgadas para los nodos Mithril.

Se trabajó también en la descentralización de las redes Mithril con la [prueba de concepto de red peer-to-peer (P2P)](https://github.com/input-output-hk/mithril/issues/1300), se avanzó en la adaptación del [cliente Mithril como biblioteca](https://github.com/input-output-hk/mithril/issues/1141), y se trabajó en el \[cálculo\] determinista([Light Wallet: Compute deterministic Cardano UTxO/transactions set PoC · Issue #1283 · input-output-hk/mithril · GitHub](https://github.com/input-output-hk/mithril/issues/1283)) del conjunto UTXO a partir de los archivos inmutables.

Además, arreglaron el [cuello de botella](https://github.com/input-output-hk/mithril/issues/1187) del registro de claves en el agregador, investigaron algunas inalcanzabilidades en el agregador release-mainnet, y mejoraron la interfaz de usuario del explorador Mithril.

# VOLTAIRE

La colaboración y la toma de decisiones de forma democrática serán pronto un proceso simplificado del que podrá disfrutar toda la comunidad. La GovTool de Voltaire sirve como un valioso recurso para avanzar en la construcción de la comunidad en Cardano. Ofrece una interfaz fácil de usar que permite a los titulares de ada interactuar directamente con el CIP-1694, registrarse fácilmente como representantes delegados (DReps), delegar el poder de voto a los DReps y revisar las acciones de gobierno. Regístrese [aquí](https://forms.gle/Sw4vZaga68b2Ps8p7) si está interesado en probar el Voltaire GovTool.

El trabajo sobre la quinta fase de gobernanza de SanchoNet sigue iterándose tras la última versión v.8.5.0-pre del nodo. Cuenta con elementos clave que contribuyen a la adaptabilidad y resistencia de la red de Cardano a medida que sigue evolucionando. Visite el sitio web de [SanchoNet](https://sancho.network/) y únase a las conversaciones en [Discord](https://sancho.network/get-started/discord). Contribuya hoy mismo a SanchoNet probando los procesos de gobernanza del CIP-1694.

Para participar en la configuración del futuro de Cardano, asegúrese de [unirse a Intersect](http://intersectmbo.org/).

# CATALYST

176 de los 192 (92%) proyectos financiados, aprobados en el Fondo 10 allá por septiembre, tienen ya su declaración de hitos (SoM) firmada por los miembros de la comunidad, lo que significa que esos equipos están empezando a recibir sus distribuciones iniciales de financiación. Seis proyectos ya han presentado su primera prueba de logros (PdA) de hitos para que la comunidad verifique públicamente que se han cumplido los entregables y el proyecto pueda pasar a recibir fondos para el siguiente hito. Se trata de un gran logro, dado que es la primera vez que la rendición de cuentas basada en hitos está siendo verificada por un número significativo de miembros de la comunidad.

La configuración de código abierto de los proyectos financiados por Catalyst Voices y Catalyst Ecosystem Accelerator está en marcha, los repos públicos se encuentran en un estado avanzado de preparación y el equipo prevé que la prueba de logros se habrá verificado para la próxima actualización de desarrollo.

Esta semana comienzan las pruebas en seco de la aplicación de votación Fund11, con nuevas actualizaciones de la interfaz de usuario que incluyen nuevos filtros para ayudar a los votantes a llegar más rápidamente a las propuestas que les interesan.

El equipo de Catalyst también está ultimando los preparativos para los talleres de la Cumbre Cardano, en los que se profundizará en los planes para los próximos 12 meses, empezando por el inminente lanzamiento de Fund11 durante el mes de noviembre, el primer anuncio del equipo desde que IOG recibió el mandato de la comunidad para continuar como operadores de fondos del Proyecto Catalyst. Pase por el stand e inscríbase en los talleres para obtener más información.

# EDUCACIÓN

Esta semana, el equipo de **Educación** está terminando la última semana de impartición del curso de Haskell con ABC. También han lanzado la Academia de Matemáticas interna del IOG y se están preparando para la Cumbre Cardano de la semana que viene.
