---
title: Create, Deploy, and Manage your own Plutus contracts effectively - Part 1
tags:
  - gimbalabs
  - plutusPBL
  - plutuspbl.io
  - gimbalabs japan
  - ja.plutuspbl.io
  - Plutus
  - plutus contracts
  - Education
  - Adoption
url: ""
image: https://ucarecdn.com/0540d608-877d-46c1-9fa0-9cc75c70119b/
image_text: ""
---

日本語版はスクロールダウンしてください。

### In this comprehensive three-part series, created and taught by our beloved Gimbalabs instructor, Professor Mix ([M. Ali Modir](https://github.com/input-output-hk/Certification-working-group/blob/vuln-from-audits/Cardano%20Threat%20Intelligence/Vulnerabilities/CTI-2023-ADA-11-04.md)i), you will achieve a deep understanding of how to create, deploy, and manage your own Plutus contracts effectively.

## **Student Learning Targets (SLT)**

*   I can plan and implement my own Plutus contracts
    
*   I can create, update and maintain a Plutus project.
    
*   I understand how time works on Plutus (POSIXTime) and Ledger (Slot Number).
    

In this first part of this series, we will focus on the first **SLT**:

## **_I can plan and implement my own Plutus contracts_**

  
![Gimbalabs Plutus PBL - Module 302 (https://plutuspbl.io/modules/302/3021)](https://ucarecdn.com/cc3f531e-c8e3-4157-8597-b9388eb9b9f2/)

`Fig 1. Gimbalabs Plutus PBL module 302:` [https://plutuspbl.io/modules/302/3021](https://plutuspbl.io/modules/302/3021)

Before we delve into the intricacies of Plutus smart contracts, it's crucial to grasp the significance of meticulous planning. Imagine your smart contract as a blueprint for a building; the quality of the blueprint directly impacts the strength and stability of the structure. Similarly, your contract's planning phase sets the stage for its reliability and predictability.

## Key Considerations in Planning

*   Determinism
    
*   Input Parameters
    
*   Designing the Logic
    
*   State Management
    
*   Error Handling
    
*   Security
    

## Token Vesting Contracts

To help illustrate Planning concepts, we will use 'Token Vesting' or 'Token Lockup' contracts as prime examples. These contracts play a pivotal role in the cryptocurrency and blockchain realm, especially during Initial Coin Offerings (ICOs) or token distribution events.

Consider this example: You're launching a new cryptocurrency and want to distribute tokens to early investors and dev team. Instead of minting all tokens at once, holding them in a wallet and then releasing them, you create a Token Vesting contract to unlock a certain percentage of tokens at regular intervals.

### **Determinism**

All calculations inside Token Vesting contract related to the release of tokens should be deterministic. For example, if an investor is entitled to receive 10% of their tokens every month, the contract must calculate the exact number of tokens to release based on the current date consistently. Given the same inputs (current date, contract start date, token allocation), the contract should always produce the same result, ensuring predictability.

### **Input Parameters**

In a Token Vesting contract, critical parameters include the investor's address, the start date of the vesting period, the total token allocation, and the release schedule. These parameters must be defined clearly and deterministically. For instance, specifying the start date as a `POSIXTime` ensures that the contract's behavior is directly tied to a deterministic blockchain event, making it predictable for all parties involved.

### **Designing the Logic**

The logic of a Token Vesting contract should be precise and entirely deterministic. For instance, consider a scenario where an investor can claim tokens after 6 months, and they can claim the entire allocation at once. The contract's logic can be abstracted as follows:

```haskell
isTokenClaimPossible :: Bool
isTokenClaimPossible =
    if from claimingTime `contains` txInfoValidRange
        then do
            payToPubKey investor totalTokenAmount
        else traceError  "Tokens are locked until the vesting period ends."

```

### **State Management**

Managing the state of data is crucial in a Token Vesting contract. Plutus provides data structures like `Datum` and `Redeemer` to manage state and trigger actions. For instance, you might use the `Datum` to store information about the vested tokens and their release schedule. The contract's state management should be deterministic, ensuring that the data stored in `Datum` aligns with the contract's purpose and can be consistently evaluated.

### **Error Handling**

Error handling is vital to ensure the contract behaves predictably, even in unexpected scenarios. Let's say an investor attempts to claim tokens before the vesting period is over. In this case, the contract should implement error handling to gracefully reject the transaction and return a deterministic 'False' outcome, indicating that the conditions for token release have not been met.

### **Security**

Security is paramount when planning a Token Vesting contract. Consider potential vulnerabilities such as unauthorized access or reentrancy attacks. To maintain the contract's deterministic nature, you should implement robust security measures, including access control checks, input validation, and careful handling of funds. Security audits and thorough testing should be part of the planning process to mitigate potential risks effectively.

See the original lesson (including the video lesson) at: [https://plutuspbl.io/modules/302/3021](https://plutuspbl.io/modules/302/3021)

Follow [Gimbalabs](https://twitter.com/gimbalabs) for further announcements.

## 自分自身のPlutusコントラクトを効果的に作成し、デプロイし、管理する方法 - パート1

### この包括的な3部作は、私たちの愛されるGimbalabsのインストラクターであるMix教授（M. Ali Modiri）によって作成され、教えられました。このシリーズでは、自分自身のPlutusコントラクトを効果的に作成し、デプロイし、管理する方法について、深く理解することができます。

## **Student Learning Targets (SLT)**

*   私は自分自身のPlutus契約を計画し、実装することができます。
    
*   私はPlutusプロジェクトを作成し、更新し、メンテナンスすることができます。
    
*   以下のシナリオで時間がどのように機能するかを理解しています：Plutus（'POSIXTime'）、'Ledger'（'Slot Number'）。  
    

このシリーズの最初の部分では、最初の **SLT** に焦点を当てます。

## **_私は自分自身のPlutus契約を計画し、実装することができます。_**

  
![Fig 1. Gimbalabs Plutus PBL japanese version, module 302: https://ja.plutuspbl.io/modules/302/3021](https://ucarecdn.com/d3fe8b17-a94d-4752-925f-f4f88ab0207a/)

Fig 1. Gimbalabs Plutus PBL japanese version, module 302: [https://ja.plutuspbl.io/modules/302/3021](https://ja.plutuspbl.io/modules/302/3021)

Plutusスマートコントラクトの複雑さに深入りする前に、入念な計画の重要性を理解することが重要です。スマートコントラクトを建物の設計図と想像してください。設計図の品質は、建物の強度と安定性に直接影響します。同様に、契約の計画段階は、その信頼性と予測可能性の舞台を設定します。

## 計画における重要な考慮事項

*   決定論
    
*   入力パラメータ
    
*   ロジックの設計
    
*   状態管理
    
*   エラー処理
    
*   セキュリティ
    

## Token Vesting契約

計画の概念を説明するために、「Token Vesting（トークンベスティング）」または「Token Lockup（トークンロックアップ）」契約を主な例として使用します。これらの契約は、特にICO（Initial Coin Offerings：初期貨幣公開）やトークン配布イベントにおいて、仮想通貨およびブロックチェーンの世界で重要な役割を果たします。

この例を考えてみましょう：新しい仮想通貨を立ち上げ、早期投資家やあなたの開発チームにトークンを配布したいとします。すべてのトークンを一度に鋳造し、ウォレットに保持してからリリースする代わりに、一定の割合のトークンを定期的な間隔で解除するためのtoken vesting契約を作成します。

### **決定論**

token vesting契約内のトークンの解放に関連するすべての計算は、決定論的である必要があります。たとえば、投資家が毎月自身のトークンの10％を受け取る権利がある場合、契約は現在の日付に基づいて解放するトークンの正確な数を一貫して計算する必要があります。同じ入力（現在の日付、契約開始日、トークンの割り当て）が与えられた場合、契約は常に同じ結果を生じるようにすることで、予測可能性を確保します。

### **入力パラメータ**

token vesting契約において、重要なパラメータには、投資家のアドレス、"ベスティング"期間の開始日、トークンの総割り当て、およびリリーススケジュールが含まれます。これらのパラメータは明確かつ決定論的に定義される必要があります。たとえば、開始日を`POSIXTime`として指定することで、契約の振る舞いが決定論的なブロックチェーンのイベントに直接関連付けられ、すべての関係者にとって予測可能になります。  

### **ロジックの設計**

Token Vesting契約のロジックは正確で完全に決定論的である必要があります。例えば、投資家が6ヶ月後にトークンを請求でき、一度に全ての割り当てを請求できる場合を考えてみましょう。契約のロジックは次のように抽象化できます：

```haskell
isTokenClaimPossible :: Bool
isTokenClaimPossible =
    if from claimingTime `contains` txInfoValidRange
        then do
            payToPubKey investor totalTokenAmount
        else traceError  "Tokens are locked until the vesting period ends."

```

### **状態管理**

データの状態管理は、Token Vesting契約において極めて重要です。Plutusは、状態の管理とアクションのトリガーを行うための`Datum`や`Redeemer`などのデータ構造を提供しています。たとえば、`Datum`を使用して、ベステッドトークンとそのリリーススケジュールに関する情報を保存することができます。契約の状態管理は決定論的である必要があり、`Datum`に保存されるデータが契約の目的と一致し、一貫して評価されることを保証する必要があります。

### **エラー処理**

エラー処理は、予期せぬシナリオでも契約が予測可能に振る舞うことを保証するために重要です。例えば、投資家がベスティング期間が終了する前にトークンを請求しようとする場合、契約はエラー処理を実装して、トランザクションを丁寧に拒否し、決定論的な `False` の結果を返します。これは、トークンの解放の条件が満たされていないことを示します。

### **セキュリティ**

Token Vesting契約を計画する際には、セキュリティが最優先です。不正アクセスや再入攻撃などの潜在的な脆弱性を考慮してください。契約の決定論的な性質を維持するために、アクセス制御のチェック、入力の検証、資金の慎重な取り扱いなど、堅牢なセキュリティ対策を実装する必要があります。セキュリティの監査と徹底的なテストは、潜在的なリスクを効果的に緩和するために計画プロセスの一部として行うべきです。

日本語の元のレッスン（ビデオレッスンを含む）は、次のURLでご覧いただけます：[https://ja.plutuspbl.io/modules/302/3021](https://ja.plutuspbl.io/modules/302/3021)

今後のお知らせについては、[Gimbalabs](https://twitter.com/gimbalabs)をフォローしてください。
