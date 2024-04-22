---
title: Weekly development report as of 2024-03-01
tags:
  - Weekly development updates
  - Development
  - Statistics
url: ""
image: https://ucarecdn.com/cafdbebc-3434-4841-b296-4eb9ec57f364/
image_text: Weekly development report as of 2024-03-01
---

### CORE TECHNOLOGY

This week, the **ledger** team added [reference script support for Plutus V1](https://github.com/IntersectMBO/cardano-ledger/pull/4059) in Conway. The team is now writing tests, improving tooling, and fixing Conway-related bugs. This development comes with significant bug fixes, particularly addressing inaccuracies in stake distribution for DReps and stake pools.

### SMART CONTRACTS

The **Plutus** team began implementing the Plutus contract blueprint for `Plutus Tx`. In addition, the team updated the [Plutus quick start](https://app.grammarly.com/ddocs/2377547772#:~:text=https%3A//plutus.readthedocs.io/en/latest/quick%2Dstart.html) guide, recommending that developers use the `IOGX Nix` flake template to set up their environment. 

### SCALING

This week, the **Hydra** team resolved the fanout bug with an [improved model-based test suite](https://github.com/input-output-hk/hydra/issues/1260), transitioned to `cardano-api` v8.38, and initiated testing for `cardano-node` v8.8. The team also optimized fee estimation within the `hydra-node` internal wallet, resulting in a more cost-effective transaction mechanism, and implemented transaction metadata for clearer Hydra transaction identification.

The **Mithril** team announced the release of a new [Mithril distribution 2408.0](https://github.com/input-output-hk/mithril/releases/tag/2408.0) incorporating several critical updates and enhancements, including:

*   improved support for stake distribution 
    
*   Mithril era markers retrieval in the [Pallas chain observer](https://github.com/input-output-hk/mithril/issues/1315)
    
*   enhanced support for the Conway era and SanchoNet network
    
*   other critical bug fixes and performance improvements
    

The team also introduced breaking changes to the Mithril client CLI, changing the log output from `stdout` to `stderr` in \`[v0.7.0](https://mithril.network/doc/dev-blog/2024/02/26/mithril-client-cli-output-breaking-change/)\`. The team continued working on data types to certify Cardano transactions, including completing browser verification support with the [WASM client](https://github.com/input-output-hk/mithril/issues/1470), enhancing the [client CLI API](https://github.com/input-output-hk/mithril/issues/1469), and introducing [smoke tests](https://github.com/input-output-hk/mithril/issues/1510). 

### VOLTAIRE & SANCHONET

This week the **SanchoNet** team launched a [patch release v8.8.1-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.1-pre) for the Cardano node and fixed issues that prevented the `BLS12-381` primitives in Plutus from working properly on some older x86 architectures. 

The [GovTool](https://sanchogov.tools/) is now online with limited wallet support as wallets start to upgrade to the new node version. You can find detailed documentation on the [SanchoNet website](https://sancho.network/).

### CATALYST

This week, Project **Catalyst** is moving forward with onboarding 300 approved projects. Each Grantee is required to complete a series of steps within 60 days of the results announcement to begin their project journey. It is important to note that funding is not automatic and Grantees will also need to obtain an approved Statement of Milestones (SoM) from community Milestone Reviewers. The SoM serves as a public roadmap for Proof of Achievement (PoA).

This is an important [community-led accountability program](https://docs.projectcatalyst.io/current-fund-basics/project-onboarding) that is constantly improving. A big shout out to the proposers who are working hard on their SoMs, as well as the dedicated community members serving as Milestone Reviewers who facilitate the approval of these proposals. Let's not forget the Proof of Life verifiers who help monitor all grantees. If you're interested in checking out the overall progress statistics, take a look at [this tweet](https://x.com/danny_cryptofay/status/1763250544930394445?s=20). 

In other news, the Catalyst team, together with Rare Evo and Sustainable Ada are gearing up for a special voting event to determine where Fund12 is going to launch as a live event. One question, six choices. You’ll be choosing your picks soon. If you’d like to learn more about this, check out [this Cardano Forum post here](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326).

![](https://ucarecdn.com/bc6eac00-3eaa-4bc8-99a2-c192ef4e5d3a/-/preview/-/format/auto/-/quality/smart/)

コアテクノロジー  
台帳チームはConwayでPlutus V1用の参照スクリプトのサポートを追加しました。現在、テストの作成、ツールの改良、コンウェイ関連のバグの修正に取り組んでいます。この開発には、特にDRepとステークプールのステーク分布における不正確さに対処する、重要なバグ修正が含まれています。

スマートコントラクト

**Plutus**チームは、Plutus TxのPlutusコントラクトブループリントの実装を開始しました。環境設定にIOGX Nixフレークテンプレートを使用することを開発者に促すよう、[Plutusのクイックスタート](https://app.grammarly.com/ddocs/2377547772#:~:text=https%3A//plutus.readthedocs.io/en/latest/quick%2Dstart.html)ガイドを更新しました。 

### スケーリング

**Hydra**チームは[改良されたモデルベースのテストスイート](https://github.com/input-output-hk/hydra/issues/1260)でファンアウトのバグを解決し、cardano-api v8.38に移行し、cardano-node v8.8のテストを開始しました。hydra-node内部ウォレット内での手数料の見積もりを最適化し、費用対効果を向上させたトランザクションメカニズムを実現し、Hydraトランザクション識別を明確化するためにトランザクションメタデータを実装しました。

**Mithril**チームは、次の重要な更新と拡張を含む、新しい[Mithrilディストリビューション2408.0](https://github.com/input-output-hk/mithril/releases/tag/2408.0)のリリースを発表しました。

*   ステーク分布サポートの向上 
    
*   [Pallasチェーンオブザーバー](https://github.com/input-output-hk/mithril/issues/1315)でのMithril期マーカーの検索
    
*   Conway期とSanchoNetネットワークのサポートの強化
    
*   その他の重要なバグ修正とパフォーマンスの向上
    

MithrilクライアントのCLIに、[v0.7.0](https://mithril.network/doc/dev-blog/2024/02/26/mithril-client-cli-output-breaking-change/)でログ出力をstdoutからstderrに変更する破壊的変更を導入しました。[WASMクライアント](https://github.com/input-output-hk/mithril/issues/1470)でのブラウザー検証サポートの完了、[クライアントCLI API](https://github.com/input-output-hk/mithril/issues/1469)の強化、[スモークテスト](https://github.com/input-output-hk/mithril/issues/1510)の導入など、Cardanoトランザクションを認証するためのデータタイプへの取り組みを続けました。 

### VOLTAIRE & SANCHONET

**SanchoNet**チームはCardanoノードの[パッチリリースv8.8.1-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.1-pre)をリリースし、PlutusのBLS12-381プリミティブが一部の古いx86アーキテクチャーで正常に動作しない問題を修正しました。 

[GovTool](https://sanchogov.tools/)はオンラインになりましたが、ウォレットが新しいノードバージョンへのアップグレードを開始するため、ウォレットサポートは限定されています。詳細は[SanchoNetサイト](https://sancho.network/)のドキュメントを参照してください。

### CATALYST

Project **Catalyst**は、承認された300のプロジェクトがオンボーディングを進めています。資金提供を受ける提案者は、結果発表から60日以内に一連の手順を完了して、プロジェクトを開始する必要があります。資金調達は自動的ではなく、承認されたマイルストン報告書（SoM）をコミュニティのマイルストンレビュー担当者から取得する必要があることを忘れてはいけません。SoMは、成果証明（PoA）のための公開ロードマップとして機能します。

これは、重要な[コミュニティ主導の説明責任プログラム](https://docs.projectcatalyst.io/current-fund-basics/project-onboarding)であり、改良が続けられています。SoMに取り組んでいる提案者、およびこうした提案の承認を進めるマイルストンレビュー担当者を務める献身的なコミュニティメンバーに大きなエールを送ります。そしてもちろん、資金調達を受けたすべてのプロジェクトの監視をサポートするPoL（Proof of Life：ライフ証明）の検証者も忘れないでください。全体的な進捗状況の統計に興味がある場合は、[このツイート](https://x.com/danny_cryptofay/status/1763250544930394445?s=20)をチェックしてください。  

レアEVOとSustainable Adaとともに、Fund12がライブイベントとしてどこに立ち上げるかを決定するための特別な投票イベントの準備も進んでいます。1つの質問に6つの選択肢。まもなく選ぶ機会がやってきます。詳細は、[こちらのCardanoフォーラムの投稿](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326)をご覧ください。

# TECNOLOGÍA CENTRAL

Esta semana, el equipo de **ledger** ha añadido [soporte de las secuencias de referencia para Plutus V1](https://github.com/IntersectMBO/cardano-ledger/pull/4059) en Conway. El equipo está ahora escribiendo pruebas, mejorando las herramientas y corrigiendo errores relacionados con Conway. Este desarrollo viene con importantes correcciones de errores, en particular abordando las imprecisiones en la distribución de stake para DReps y stake pools.

# SMART CONTRACTS

El equipo de **Plutus** ha comenzado a implementar el modelo de contrato Plutus para `Plutus Tx`. Además, el equipo actualizó la guía [Plutus quick start](https://app.grammarly.com/ddocs/2377547772#:~:text=https%3A//plutus.readthedocs.io/en/latest/quick%2Dstart.html), donde se recomienda a los desarrolladores que utilicen la plantilla de escamas `IOGX Nix` para configurar su entorno.

# ESCALADO

El equipo de **Hydra** ha resuelto el fallo de fanout con una [suite de pruebas mejorada basada en modelos](https://github.com/input-output-hk/hydra/issues/1260), ha realizado la transición a `cardano-api` v8.38 y ha iniciado las pruebas para `cardano-node` v8.8. También optimizó la estimación de tarifas dentro del wallet interno del `hydra-node`, lo que resultó en un mecanismo de transacción más rentable, e implementó metadatos de transacción para una identificación más clara de las transacciones de Hydra.

El equipo de **Mithril** anunció el lanzamiento de una nueva [distribución de Mithril 2408.0](https://github.com/input-output-hk/mithril/releases/tag/2408.0) que incorpora varias actualizaciones y mejoras críticas, entre las que se incluyen:

*   soporte mejorado para la distribución de staking
    
*   recuperación de marcadores de la era Mithril en el [observador de la cadena Pallas](https://github.com/input-output-hk/mithril/issues/1315)
    
*   soporte mejorado para la era Conway y la red SanchoNet
    
*   otras correcciones de errores críticos y mejoras de rendimiento
    

También introdujo cambios de última hora en la CLI del cliente Mithril, cambiando la salida del registro de `stdout` a `stderr` en `[v0.7.0](https://mithril.network/doc/dev-blog/2024/02/26/mithril-client-cli-output-breaking-change/)`. El equipo continuó trabajando en los tipos de datos para certificar las transacciones de Cardano, incluyendo la finalización del soporte de verificación del navegador con el [cliente WASM](https://github.com/input-output-hk/mithril/issues/1470), la mejora de la [API CLI del cliente](https://github.com/input-output-hk/mithril/issues/1469) y la introducción de [pruebas de humo](https://github.com/input-output-hk/mithril/issues/1510).

# VOLTAIRE Y SANCHONET

El equipo de **SanchoNet** ha lanzado un [lanzamiento de parche v8.8.1-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.1-pre) para el nodo Cardano y ha solucionado problemas que impedían que las primitivas `BLS12-381` de Plutus funcionaran correctamente en algunas arquitecturas x86 antiguas.

La [GovTool](https://sanchogov.tools/) ya está en línea con un soporte limitado de wallet mientras los wallets comienzan a actualizarse a la nueva versión del nodo. Puede encontrar documentación detallada en el [sitio web de SanchoNet](https://sancho.network/).

# CATALYST

Esta semana, el Proyecto **Catalyst** avanza con la incorporación de 300 proyectos aprobados. Cada beneficiario debe completar una serie de pasos en un plazo de 60 días a partir del anuncio de los resultados para comenzar su andadura en el proyecto. Es importante señalar que la financiación no es automática y que los beneficiarios también tendrán que obtener una Declaración de Hitos (SoM) aprobada por los revisores de hitos de la comunidad. La SoM sirve como hoja de ruta pública para la Prueba de Logros (PoA).

Se trata de un relevante [programa de rendición de cuentas dirigido por la comunidad](https://docs.projectcatalyst.io/current-fund-basics/project-onboarding) que mejora constantemente. Un gran saludo a los proponentes que están trabajando duro en sus SoM, así como a los dedicados miembros de la comunidad que sirven como Revisores de Hitos y que facilitan la aprobación de estas propuestas. No olvidemos a los verificadores de la Prueba de Vida que ayudan a supervisar a todos los beneficiarios. Si está interesado en consultar las estadísticas generales de progreso, eche un vistazo a [este tweet](https://x.com/danny_cryptofay/status/1763250544930394445?s=20).

En otro orden de cosas, el equipo de Catalyst, junto con Rare Evo y Sustainable Ada, están preparando una votación especial para determinar dónde se lanzará el Fondo12 como evento en directo. Una pregunta, seis opciones. Pronto elegirán sus opciones. Si desea saber más sobre esto, eche un vistazo a [este post del Foro Cardano aquí](https://forum.cardano.org/t/fund12-launch-event-choose-your-city/128326)
