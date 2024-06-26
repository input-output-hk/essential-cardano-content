---
title: Weekly development report as of 2024-05-10
tags:
  - Weekly development updates
  - Statistics
  - Development
url: ""
image: https://ucarecdn.com/65b4c30e-2285-420e-b151-b73e68def26d/
image_text: Weekly development report as of 2024-05-10
---

### CORE TECHNOLOGY

The **performance and tracing** team analyzed benchmarks for the Conway era with DReps injected, traced DRep data, and improved error reporting in the `tx-generator`. They fully supported the new CLI `create-testnet-data` command and injected DRep into the Conway genesis. 

The team expanded the node metrics by including build information and block producer roles. They aimed to harmonize metrics naming for consistency. Furthermore, they finalized the analysis and reports for benchmarks targeting UTXO scaling scenarios. Lastly, the team performed multiple runs benchmarking the LMDB (on-disk) backend of UTXO-HD.

This week, the **networking** team worked on several key areas:

*   **peer-sharing improvements**: the team improved peer sharing by restructuring light peer sharing and merging the work on outbound governor counters. Now, sending more peers than requested by the peer-sharing client causes a protocol error that terminates the connection. The team also refactored the inbound governor loop to keep the internal state pure and expose the public part to other components. For more details, see (commit: [1](https://github.com/IntersectMBO/ouroboros-network/pull/4869), [2](https://github.com/IntersectMBO/ouroboros-network/issues/4845), [3](https://github.com/IntersectMBO/ouroboros-network/pull/4861), [4](https://github.com/IntersectMBO/ouroboros-network/pull/4871),). These changes will be released in `cardano-node-8.9.3`.
    
*   **Genesis:** the team developed APIs required by the consensus layer for `Genesis` (commit: [1](https://github.com/IntersectMBO/ouroboros-network/issues/4815), [2](https://github.com/IntersectMBO/ouroboros-network/issues/4846)) and continued working on outbound governor changes to support this feature (commit: [1](https://github.com/IntersectMBO/ouroboros-network/pull/3396), [2](https://github.com/IntersectMBO/ouroboros-network/pull/4813), [3](https://github.com/IntersectMBO/ouroboros-network/pull/4849)).
    
*   **bootstrap peers**: CF identified and resolved issues related to big-ledger and public root peers.
    
*   **churn**: the team [synchronized churn](https://github.com/IntersectMBO/ouroboros-network/issues/4617) with the outbound governor to ensure stability and efficiency in peer connections.
    

### SMART CONTRACTS

This week, the Plutus team improved the fixed point operator implementation, making UPLC programs compiled from Plutus Tx and PIR more efficient.

### SCALING

This week, the **Hydra** team [refactored and detected](https://github.com/input-output-hk/hydra/pull/1381) network protocol version mismatches. They [merged the changes](https://github.com/input-output-hk/hydra/issues/1350) to the `/commit` endpoint, including a follow-up fix for fee calculation. Additionally, they made minor workflow fixes by adding Docker images to Nix checks and disabling Mithril integration testing on preview until Mithril v.2418 is released.

### VOLTAIRE & SANCHONET

Over the past two weeks, the **ledger** team finalized key features for the Conway era. They have successfully implemented the bootstrap phase and the `HardForkInitiation` governance action, which will transition to the post-Conway era. Moreover, they have extended DRep stake distribution to include rewards accounts and deposits left for governance proposals. The team also updated the `CostModels` for Plutus scripts, which increases flexibility for adding new primitives starting from the Conway era.

Additionally, the team has developed new testing functionalities, including the first conformance test for a `GOV` rule and improvements to constraint-based generator functionalities. They have made significant improvements to the continuous integration (CI) setup, making it easier to identify failing tests and handle potential flakiness.

### CATALYST

Fund12 is well underway. Submissions are rolling in from all corners of the world across many varied domains. Remember, the general submission deadline for general categories is fast approaching, May 13 at 11am UTC. All existing public submissions will have until May 16 11am UTC to be finalized. Keep an eye on moderator feedback that some of you may receive, as it will help you align your submission with the correct categories. As a highlight, 'Cardano Partners' has an extended submission deadline (11am on June 6). Keep an eye out for the timeline and further updates [via the website](https://projectcatalyst.io/funds/12) or follow [Catalyst on X](https://twitter.com/Catalyst_onX). 

### EDUCATION

This week, the **education** team prepared content and held onboarding calls for the launch of the DRep Pioneer Program. They also published the 19th lesson of the Haskell Bootcamp. Additionally, work is ongoing on Mastering Cardano.

![](https://ucarecdn.com/cac5f702-7da3-4f09-9e47-afeb7546b969/-/preview/-/format/auto/-/quality/smart/)

### コアテクノロジー

**パフォーマンス＆トレース**チームは、DRepを注入したConway期のベンチマークを分析し、DRepデータをトレースし、tx-generatorでエラー報告を改善しました。CLIの新コマンドcreate-testnet-dataをフルサポートし、ConwayジェネシスにDRepを注入しました。 

ノードメトリクスを拡張してビルド情報とブロックプロデューサーの役割を含めました。メトリクスの名前に一貫性を持たせるべく調整しました。UTXOスケーリングシナリオを対象としたベンチマークの分析とレポートを完成させました。UTXO-HDのLMDB（ディスク上）バックエンドのベンチマークを複数回実行しました。

**ネットワーク**チームは複数の主要分野に取り組みました。

*   \*\*ピア共有の改良：\*\*ライトピア共有を再構築し、アウトバウンドガバナーカウンターの作業をマージすることで、ピア共有を改良しました。ピア共有クライアントが要求した数よりも多くのピアを送信するとプロトコルエラーとなり、接続が切断されます。内部ステータスを純粋に保ち、パブリック部分を他のコンポーネントに公開するために、インバウンドガバナーループをリファクタリングしました。詳細は、コミット：[1](https://github.com/IntersectMBO/ouroboros-network/pull/4869)、[2](https://github.com/IntersectMBO/ouroboros-network/issues/4845)、[3](https://github.com/IntersectMBO/ouroboros-network/pull/4861)、[4](https://github.com/IntersectMBO/ouroboros-network/pull/4871)を参照してください。これらの変更はcardano-node-8.9.3でリリースされます。
    
*   \*\*Genesis：\*\*Genesisのコンセンサス層に必要なAPI（コミット：[1](https://github.com/IntersectMBO/ouroboros-network/issues/4815)、[2](https://github.com/IntersectMBO/ouroboros-network/issues/4846)）を開発し、この機能をサポートするためのアウトバウンドガバナーの変更（コミット：[1](https://github.com/IntersectMBO/ouroboros-network/pull/3396)、[2](https://github.com/IntersectMBO/ouroboros-network/pull/4813)、[3](https://github.com/IntersectMBO/ouroboros-network/pull/4849)）への取り組みを続けました。
    
*   **ブートストラップピア**：CFは、big-ledgerとパブリックルートピアに関連する問題を特定し、解決しました。
    
*   \*\*チャーン：\*\*ピア接続の安定性と効率を確保するために、アウトバウンドガバナーと[チャーンを同期](https://github.com/IntersectMBO/ouroboros-network/issues/4617)させました。
    

### スマートコントラクト

Plutusチームは、不動点オペレーターの実装を改良し、Plutus TxとPIRからコンパイルしたUPLCプログラムを効率化しました。

### スケーリング

**Hydra**チームは、ネットワークプロトコルバージョンの不一致を[リファクタリングし、検出](https://github.com/input-output-hk/hydra/pull/1381)しました。料金計算のフォローアップ修正を含む、/commitエンドポイントへの[変更をマージ](https://github.com/input-output-hk/hydra/issues/1350)しました。Nix ChecksにDockerイメージを追加し、Mithril v.2418がリリースされるまでプレビューのMithril統合テストを無効にして、ワークフローを微修正しました。

### VOLTAIRE & SANCHONET

過去2週間にわたって、 **台帳**チームはConway期の主要な機能を完成させました。ブートストラップフェーズとHardForkInitiationガバナンスアクションの実装に成功したことで、今後はポストConway期に移行します。ガバナンス提案のために残された報酬アカウントやデポジットを含めるように、DRepのステーク分配を拡張しました。Plutusスクリプト用のCostModelsを更新し、Conway期から始まる新プリミティブを追加しやすくしました。

GOVルールの最初の適合性テストや制約ベースのジェネレーター機能の改善など、新しいテスト機能を開発しました。継続的統合（CI）の設定を大幅に改良し、失敗したテストの特定、潜在的な脆弱性の処理を簡易化しました。

### CATALYST

Fund12は順調に進んでいます。世界各地からさまざまな分野にわたり提案が提出されています。一般カテゴリーの提出期限は日本時間5月13日20時。もうまもなくです。公開されている既存の提案はすべて、日本時間16日20時までに最終案に仕上げることになっています。モデレーターからフィードバックを得られる場合があるので、注意してください。正しいカテゴリーに適合させるために役立ちます。Cardano Partnersについては提出期限が延長されています（日本時間6月6日20時）。タイムラインや今後の更新情報は、[ウェブサイト](https://projectcatalyst.io/funds/12)を確認するか、[XのCatalystアカウント](https://twitter.com/Catalyst_onX)をフォローしてください。 

### 教育

**教育**チームは、DRepパイオニアプログラムの開始に向けてコンテンツを準備し、オンボーディングコールを開催しました。Haskell Bootcampのレッスン19も公開しました。Mastering Cardanoに関する作業も進行中です。

# TECNOLOGÍA CENTRAL

El equipo de **rendimiento y rastreo** analizó los puntos de referencia de la era Conway con DReps inyectados, rastreó los datos DRep y mejoró el informe de errores en el `tx-generator`. Dieron soporte completo al nuevo comando CLI `create-testnet-data` e inyectaron DRep en la génesis Conway.

El equipo amplió las métricas de nodo incluyendo información de compilación y funciones de productor de bloques. Su objetivo era armonizar la nomenclatura de las métricas en aras de la coherencia. Además, finalizaron el análisis y los informes para los benchmarks dirigidos a escenarios de escalado UTXO. Por último, el equipo realizó múltiples ejecuciones de pruebas comparativas del backend LMDB (en disco) de UTXO-HD.

Esta semana, el equipo de **redes** trabajó en varias áreas clave:

*   **mejoras en el intercambio de pares**: el equipo mejoró el intercambio de pares reestructurando el intercambio de pares ligeros y fusionando el trabajo en los contadores de gobernadores salientes. Ahora, el envío de más pares de los solicitados por el cliente de compartición de pares provoca un error de protocolo que finaliza la conexión. El equipo también refactorizó el bucle del gobernador de entrada para mantener puro el estado interno y exponer la parte pública a otros componentes. Para más detalles, consulte (commit: [1](https://github.com/IntersectMBO/ouroboros-network/pull/4869), [2](https://github.com/IntersectMBO/ouroboros-network/issues/4845), [3](https://github.com/IntersectMBO/ouroboros-network/pull/4861), [4](https://github.com/IntersectMBO/ouroboros-network/pull/4871),). Estos cambios se publicarán en `cardano-node-8.9.3`.
    
*   **Genesis:** el equipo desarrolló las APIs requeridas por la capa de consenso para `Genesis` (commit: [1](https://github.com/IntersectMBO/ouroboros-network/issues/4815), [2](https://github.com/IntersectMBO/ouroboros-network/issues/4846)) y continuó trabajando en los cambios del gobernador de salida para soportar esta característica (commit: [1](https://github.com/IntersectMBO/ouroboros-network/pull/3396), [2](https://github.com/IntersectMBO/ouroboros-network/pull/4813), [3](https://github.com/IntersectMBO/ouroboros-network/pull/4849)).
    
*   **bootstrap peers**: El CF identificó y resolvió los problemas relacionados con los peers de big ledger y raíz pública.
    
*   **churn**: el equipo [sincronizó churn](https://github.com/IntersectMBO/ouroboros-network/issues/4617) con el gobernador de salida para garantizar la estabilidad y la eficiencia en las conexiones entre pares.
    

# SMART CONTRACTS

Esta semana, el equipo de Plutus ha mejorado la implementación del operador de punto fijo, haciendo que los programas UPLC compilados desde Plutus Tx y PIR sean más eficientes.

# ESCALADO

El equipo **Hydra** [refactorizó y detectó](https://github.com/input-output-hk/hydra/pull/1381) desajustes en la versión del protocolo de red. Han [fusionado los cambios](https://github.com/input-output-hk/hydra/issues/1350) en el punto final `/commit`, incluyendo una corrección de seguimiento para el cálculo de tarifas. Además, realizaron correcciones menores del flujo de trabajo añadiendo imágenes Docker a las comprobaciones de Nix y desactivando las pruebas de integración de Mithril en la vista previa hasta que se publique Mithril v.2418.

# VOLTAIRE & SANCHONET

Durante las dos últimas semanas, el equipo de **ledger** ha finalizado las características clave para la era Conway. Han implementado con éxito la fase de arranque y la acción de gobierno `HardForkInitiation`, que hará la transición a la era post-Conway. Además, han ampliado la distribución de staking de DRep para incluir las cuentas de recompensas y los depósitos dejados para las propuestas de gobierno. El equipo también ha actualizado los `CostModels` para las secuencias de comandos de Plutus, lo que aumenta la flexibilidad para añadir nuevas primitivas a partir de la era Conway.

Además, el equipo ha desarrollado nuevas funcionalidades de prueba, incluida la primera prueba de conformidad para una regla `GOV` y mejoras en las funcionalidades del generador basado en restricciones. Han introducido mejoras significativas en la configuración de la integración continua (IC), facilitando la identificación de las pruebas que fallan y el manejo de posibles fallos.

# CATALYST

El Fondo12 está en marcha. Están llegando propuestas de todos los rincones del mundo y de ámbitos muy variados. Recuerde que el plazo de presentación para las categorías generales se acerca rápidamente, el 13 de mayo a las 11am UTC. Todas las presentaciones públicas existentes tendrán hasta el 16 de mayo a las 11am UTC para ser finalizadas. Esté atento a los comentarios de los moderadores que algunos de ustedes puedan recibir, ya que le ayudarán a alinear su envío con las categorías correctas. Como punto destacado, ‘Cardano Partners’ tiene un plazo de presentación ampliado (11am el 6 de junio). Esté atento al calendario y a las próximas actualizaciones [a través de la página web](https://projectcatalyst.io/funds/12) o siga [Catalyst en X](https://twitter.com/Catalyst_onX).

# EDUCACIÓN

Esta semana, el equipo de **educación** preparó contenidos y celebró convocatorias de incorporación para el lanzamiento del Programa Pionero DRep. También publicaron la 19ª lección del Haskell Bootcamp. Además, se está trabajando en Mastering Cardano.
