---
title: Unlocking more opportunities with Plutus V3
tags:
  - Plutus
  - Smart Contracts
  - Interoperability
  - Cryptography
url: ""
image: https://ucarecdn.com/4ac8aab5-b968-4397-86b7-b298d8349454/
image_text: Unlocking more opportunities with Plutus V3
---

日本語版はスクロールダウンしてください。

### Plutus V3 will elevate the developer experience by improving smart contract adoption, bringing support for governance and voting features, and fostering interoperability between blockchains

Plutus V3, now available for testing on SanchoNet, introduces advanced Plutus primitives and so provides more tools for developers and unlocks more possibilities for writing smart contracts.

Improved developer experience and smart contract adoption are critical to the flourishing smart contract landscape on Cardano. Over the past year, the emergence and growth of a [host of community-built developer tooling](https://www.essentialcardano.io/article/a-list-of-community-built-developer-tools-on-cardano) and alternative languages have added significantly to developer options and the vibrancy of the Cardano builder ecosystem. To continue building out capability, the Plutus and cryptography teams at Input Output Global (IOG) – in collaboration with [MLabs](https://mlabs.city/) – worked on Plutus V3, focusing on performance, throughput, smart contract size, and platform capabilities. With an enriched developer toolkit and better operational efficiency, this upgrade not only reduces costs but also helps bring in new developers.

## What is Plutus V3?

Plutus V3 enhances Plutus Core's cryptographic capabilities, enabling Cardano to conform with the latest industry standards. The [Valentine](https://docs.cardano.org/cardano-testnet/about/secp/) upgrade a year ago added support for SECP elliptic curves (ECDSA and Schnorr).

The introduction of new cryptographic primitives with V3 helps developers meet industry best practices, use well-known and optimal cryptographic algorithms, port smart contracts from Ethereum, and create sidechain bridges. Besides cryptographic primitives, Plutus V3 improves performance by adding a sums of products (SOPs) feature to support the direct encoding of different data types. Finally, V3 provides an updated script context that will let users see [CIP-1694](https://cips.cardano.org/cip/CIP-1694#goal) governance-related entities.

Let’s take a closer look at the new functions.

## Sums of products

A common way of encoding data types in Plutus Core is by using the [Scott](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding) approach. Plutus V3 introduces sums of products – a way of encoding data types that leads to smaller and cheaper scripts compared with Scott encoding.

The sums of products approach aims to boost script efficiency and improve code generation for Plutus Core compilers. The changes involve new term constructors for packing fields into constructor values and efficient tag inspection for case branches. The benefit is the potential for programs to run 30% faster, which is a significant performance optimization, streamlining operations and ensuring swift execution of smart contracts. For more details, [see CIP-85](https://cips.cardano.org/cip/CIP-0085).

## New cryptographic primitives

Central to every blockchain is the use of cryptographic primitives, encompassing hash functions, digital signatures, and zero-knowledge proof (ZKP) systems. These foundational elements are crafted for computational efficiency, ensuring robust security tailored to their respective applications. The outcome is a set of security assurances that establish a trustless ecosystem, facilitating smooth engagement with Cardano's peer-to-peer (P2P) network and its decentralized applications (DApps).

In the Plutus language, built-in functions are those not explicitly defined within the script but are part of the language's runtime environment. Using these functions allows the interpreter to furnish an optimized implementation specific to its system when executing the script. Built-in functions execute frequently-used, well-defined operations, encompassing arithmetic, control, and other crucial tasks. As we delve into Plutus V3, let's explore the new built-in primitives that will enrich the language's capabilities:

*   **BLS12-381** – this curve pairing includes 17 primitives that support cryptographic curves, opening doors to seamless sidechain specification implementation and [Mithril](https://iohk.io/en/blog/posts/2023/07/20/mithril-nears-mainnet-release/) integration.
    
*   **Blake2b-224** – a cryptographic hash function for on-chain computation of public-key hashes for the validation of transaction signatures. Implementation of Blake2b-224 supports community projects, contributing to Cardano's versatility and adoption by accommodating various applications.
    
*   **Keccak-256** – a cryptographic hash function that produces a 256-bit (32-byte) hash value, commonly used for secure data verification. Keccak-256 supports Ethereum signature verification within scripts. This is crucial for cross-chain solutions and facilitates community projects by expanding use cases on Cardano.
    

## Empowering developers with bitwise primitives

The introduction of [CIP-58](https://cips.cardano.org/cip/CIP-0058) bitwise primitives will provide developers with robust capabilities for low-level bit manipulations. This addition offers developers profound benefits in both performance optimization and cryptographic functionality. With their incremental deployment plan, bitwise primitives ensure a seamless integration process and foster a robust environment for developers to build powerful and efficient solutions on Cardano.

Bitwise primitives provide the following features:

*   **Performance boost**. Bitwise primitives introduce the capability for very low-level bit manipulations within Plutus. This capability lays the foundation for executing high-performance data manipulation operations, a crucial aspect for developers seeking efficient solutions.
    
*   **Cryptographic support**. The inclusion of bitwise primitives is essential for supporting cryptographic functions like ED25519, which is a standard requirement for smart contract development. These primitives implement secure and robust cryptographic algorithms within Plutus.
    
*   **Integer-string conversions for smooth integration**. Bitwise primitives facilitate standard, high-performance implementations for conversions between integers and strings. This ability is essential because the primitives require arguments in integer format, while data is often presented in string format.
    
*   **Efficient algorithms and data structures**. CIP-58 adds a class of low-level functions for highly efficient algorithms and data structures. The ability to build efficient hash tables, a common key-value mapping data structure, showcases the practical impact of these low-level functions in building performant solutions.
    

The Plutus upgrade will add two bitwise primitives: `integerToByteString` and `byteStringToInteger`. The remaining primitives will be added to Plutus V3 gradually. Going forward, such upgrades won’t require a new language version. This incremental deployment approach ensures a systematic integration of these powerful features into the Plutus language.

Starting with the release of Cardano [node v.8.8.0-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.0-pre), Plutus V3 is now available on [SanchoNet](https://sancho.network/), introducing the Cardano community to governance features from CIP-1694 in a controlled testnet environment.

## Conclusion

Among its benefits, Plutus V3 offers greater efficiency, optionality, and ease of use to the Cardano builder community – all key to nurturing developer adoption. Prioritizing aspects such as performance, throughput, smart contract size, and platform capabilities ensures that Cardano developers can use the latest standards. These improvements facilitate the smooth migration of smart contracts from Ethereum, enable the creation of sidechain bridges, and ultimately contribute to the expansion of the Cardano ecosystem.

Follow [IOG X (Twitter)](https://twitter.com/InputOutputHK?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) for further announcements.

## Plutus V3でもっと多くのチャンスを引き出す

**スマートコントラクトの普及を促し、ガバナンスと投票機能をサポートし、ブロックチェーン間の相互運用性を促進することで、開発者のエクスペリエンスを向上させるPlutus V3**

現在SanchoNetでテスト可能なPlutus V3は高度なPlutusプリミティブを導入。これにより、開発者にはより多くのツールが提供され、スマートコントラクトを作成するうえでの可能性が広がります。

Cardanoでスマートコントラクトを繁栄に導くには、開発者エクスペリエンスの向上とスマートコントラクトの普及が不可欠です。この1年間で、[コミュニティで構築された開発ツールのホスト](https://www.essentialcardano.io/article/a-list-of-community-built-developer-tools-on-cardano)と代替言語が出現し成長したことにより、開発者の選択肢が増え、Cardanoビルダーのエコシステムが大幅に活性化しました。機能の構築を継続するために、Input Output Global（IOG）のPlutusチームと暗号チームは、[MLabs](https://mlabs.city/)と協力して、パフォーマンス、スループット、スマートコントラクトサイズ、プラットフォーム機能に重点を置きつつ、Plutus V3に取り組みました。充実した開発者ツールキットと操作効率の向上により、このアップグレードはコストを削減するだけでなく、新しい開発者を取り込むのにも役立ちます。

## Plutus V3とは何か

Plutus V3は、Plutus Coreの暗号機能を強化し、Cardanoを最新の業界標準に準拠させることを可能にします。1年前の[Valentine](https://docs.cardano.org/cardano-testnet/about/secp/)アップグレードでは、SECP楕円曲線（ECDSAおよびSchnorr）のサポートが追加されました。

V3での新しい暗号プリミティブの導入は、開発者が業界のベストプラクティスを満たし、よく知られた最適な暗号アルゴリズムを使用し、イーサリアムからスマートコントラクトを移植し、サイドチェーンブリッジを作成するのに役立ちます。暗号化プリミティブに加えて、Plutus V3は、さまざまなデータ型の直接エンコードをサポートするためのSOP（Sums Of Products：製品の合計）機能を追加することでパフォーマンスを向上させます。さらに、ユーザーが[CIP-1694](https://cips.cardano.org/cip/CIP-1694#goal)ガバナンス関連のエンティティを表示できるように更新されたスクリプトコンテキストを提供します。

では、新機能を詳しく見ていきましょう。

## SOP

Plutus Coreでデータ型をエンコードする一般的な方法は、[Scott](https://en.wikipedia.org/wiki/Mogensen%E2%80%93Scott_encoding)アプローチを使用することです。Plutus V3は、Scottエンコーディングと比較して、より小さく安価なスクリプトにつながるデータ型のエンコーディング方法であるSOPを導入しています。

SOPアプローチは、スクリプトの効率を高め、Plutus Coreコンパイラーのコード生成を改善することを目的としています。この変更には、フィールドをコンストラクター値にパックするための新しい用語コンストラクターと、ケースブランチの効率的なタグ検査が含まれます。このメリットは、プログラムの実行速度が30%向上する可能性があることです。これにより、パフォーマンスが大幅に最適化され、運用が合理化され、スマートコントラクトの迅速な実行が保証されます。詳しくは、[CIP-85](https://cips.cardano.org/cip/CIP-0085)を参照してください。

## 新しい暗号プリミティブ

すべてのブロックチェーンの中心となるのは、ハッシュ関数、デジタル署名、ゼロ知識証明（ZKP）システムを含む暗号プリミティブの使用です。これらの基本的な要素は、計算効率を高めるためのもので、それぞれのアプリケーションに合わせた堅牢なセキュリティを確保します。その結果、信頼性の高いエコシステムを確立し、CardanoのP2PネットワークとDApp（分散型アプリケーション）とのスムーズな連携を促進する一連のセキュリティ保証が実現します。

Plutus言語では、組み込み関数はスクリプト内で明示的に定義されていませんが、言語のランタイム環境の一部です。この関数を使用することで、インタプリターはスクリプトを実行するときに、システムに固有の最適化された実装を提供することができます。組み込み関数は、算術、制御、およびその他の重要なタスクを含む、頻繁に使用される適切に定義された操作を実行します。Plutus V3の詳細の一環として、ここで言語の機能を強化する新しい組み込みプリミティブを確認しましょう。

*   **BLS12-381**：この曲線ペアリングには、暗号化曲線をサポートする17プリミティブ、シームレスなサイドチェーン仕様の実装、および[Mithril](https://iohk.io/jp/blog/posts/2023/07/20/mithril-nears-mainnet-release/)の統合が含まれています。
    
*   **Blake2b-224**：トランザクション署名の検証のための公開鍵ハッシュのオンチェーン計算用の暗号ハッシュ関数。Blake2b-224の実装は、コミュニティプロジェクトをサポートし、さまざまなアプリケーションに対応することで、Cardanoの汎用性と普及に貢献します。
    
*   **Keccak-256**：256ビット（32バイト）のハッシュ値を生成する暗号ハッシュ関数で、一般に安全なデータ検証に使用されます。Keccak-256はスクリプト内でのイーサリアム署名検証をサポートしています。これはクロスチェーンソリューションにとって重要であり、Cardanoのユースケースを拡大することでコミュニティプロジェクトが促進されます。
    

## ビット単位プリミティブで開発者を支援

[CIP-58](https://cips.cardano.org/cip/CIP-0058)ビット単位プリミティブの導入により、開発者に低レベルビット操作のための堅牢な機能が提供されます。この追加機能により、開発者はパフォーマンスの最適化と暗号機能の両方で大きなメリットを得ることができます。段階的な導入計画により、ビット単位プリミティブの統合はシームレスに実行され、開発者がCardanoに強力で効率的なソリューションを構築するための堅牢な環境が整備されます。

ビット単位プリミティブは、次の機能を提供します。

*   **パフォーマンスの向上**：ビット単位プリミティブは、Plutus内で非常に低レベルなビット操作を行う機能を導入します。この機能は、効率的なソリューションを求める開発者にとって重要な要素である、高性能なデータ操作を実行するための基盤となります。
    
*   **暗号サポート**：スマートコントラクト開発の標準要件であるED25519のような暗号機能をサポートするには、ビット単位プリミティブを含めることが不可欠です。このプリミティブによって、Plutus内に安全で堅牢な暗号アルゴリズムが実装されます。
    
*   **整数文字列変換によるスムーズな統合**：ビット単位プリミティブは、整数と文字列の変換のための標準的で高性能な実装を容易にします。プリミティブは整数形式の引数を必要としますが、データは文字列形式で表示されることが多いため、この機能は不可欠です。
    
*   **効率的なアルゴリズムとデータ構造**：CIP-58は高効率なアルゴリズムとデータ構造のための低レベル関数のクラスを追加しました。共通の鍵値マッピングデータ構造である効率的なハッシュテーブルを構築する能力は、高性能のソリューションを構築する上でのこれらの低レベル関数の実用的な影響を示しています。
    

Plutusのアップグレードでは、integerToByteStringとbyteStringToIntegerの2つのビット単位プリミティブが追加されます。残りのプリミティブは徐々にPlutus V3に追加されていきます。今後、このようなアップグレードに新しい言語バージョンは不要になります。この段階的な導入アプローチにより、こうした強力な機能をPlutus言語に体系的に統合できます。

Cardano[ノードv.8.8.0-pre](https://github.com/IntersectMBO/cardano-node/releases/tag/8.8.0-pre)のリリースを皮切りに、Plutus V3は[SanchoNet](https://sancho.network/)で利用可能になり、制御されたテストネット環境でCardanoコミュニティにCIP-1694のガバナンス機能がもたらされています。

## まとめ

Plutus V3は、Cardanoビルダーコミュニティにより優れた効率、オプション、使いやすさを提供します。このすべてが、開発者への普及を促がすための鍵となります。パフォーマンス、スループット、スマートコントラクトサイズ、プラットフォーム機能などの側面を優先することで、Cardano開発者が最新の標準を使用できることを保証します。この改善により、イーサリアムからスムーズにスマートコントラクトを移行できるようになり、サイドチェーンブリッジの作成が可能になり、最終的にはCardanoエコシステムの拡大につながります。

[IOG X（Twitter）](https://twitter.com/InputOutputHK?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)をフォローして、更新情報を入手してください。
