---
title: "The Haus Protocol: A Technical Blueprint for Onboarding $34.5T of
  Real-World Home Equity to Cardano"
tags:
  - "#cardano"
  - Adoption
  - Real Finance
url: ""
image: ""
image_text: ""
---

# **The Haus Protocol: A Technical Blueprint for Onboarding $34.5T of Real-World Home Equity to Cardano**

## **Introduction**

The tokenization of Real World Assets (RWAs) represents the most significant evolution in financial markets, a paradigm shift projected to command an $34.5 trillion ecosystem by 2033. For Layer-1 blockchains, establishing leadership in this domain is not merely an opportunity but a strategic imperative for ensuring long-term institutional relevance and economic vitality. This movement is being led by the titans of traditional finance (TradFi), with firms like BlackRock, JPMorgan, and Citi actively developing the foundational infrastructure for what BlackRock's CEO has termed "the next generation for markets".1 The experimental phase of asset tokenization is over; the era of institutional-scale implementation has begun.

### **The Strategic Imperative for Cardano**

  
The Cardano ecosystem stands at a critical inflection point. It is a platform renowned for its technological prowess, formal methods, and a meticulously researched, security-first design philosophy. Yet, a significant disconnect persists between this technical sophistication and its on-chain economic activity. With a market valuation often exceeding $25 billion, Cardano's current Total Value Locked (TVL) in Decentralized Finance (DeFi) hovers around $250 million, and its RWA market share is negligible at approximately $1.5 million.1 This results in a Fully Diluted Valuation (FDV) to TVL ratio of roughly 100-to-1, an order of magnitude higher than its peers. Such a high speculative premium, if not substantiated by tangible, real-world economic activity, represents a strategic vulnerability that could undermine the network's long-term sustainability and competitive standing against platforms like Provenance, which already boasts over $16 billion in RWA TVL.1 Cardano requires a powerful, institutional-grade catalyst to bridge this gap and anchor its valuation to on-chain utility.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcJkgk_fSNU20aL1Xl-AT7rVT_3_1YPj-ExDT7OJiyhlg5fhwz46Rp4NMM67zxhkT2RkwMpHoeTntP0MBa9b3wvBeUjN7pmQ3ldmRNqydGMvX1c80bLly8wgDuEBSqMk89miDg5?key=0h9E1OKX6gYqQ4cRF_x_bQ)

  

### **The Haus Proposition: A Turnkey Solution for Institutional-Scale RWA**

The Haus Protocol is engineered to be that catalyst. It presents a turnkey, institutional-grade solution designed to onboard the single largest and most illiquid asset class in the United States: the $34.5 trillion U.S. homeowner equity market.1 The protocol's model is centered on non-debt Home Equity Investments (HEIs), a structure that provides homeowners with a timely liquidity solution in a high-interest-rate environment where traditional options like Home Equity Lines of Credit (HELOCs) have become prohibitively expensive, with average rates exceeding 8%.1 Unlike debt-based models, which are cyclically vulnerable, the HEI model offers a counter-cyclical growth engine, providing homeowners with cash in exchange for a share of their home's future appreciation, without incurring monthly payments or interest.1

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc7_SSEN6NgfQgrR4pREVOlesNnEE_MDorSqDZFXnIzZp9biKZJZ1oFoNY-EbMjlhWVldYplvbNBn6Y4ZmFLGUwbhyyC9SrPnz-PGNf_svTFEXJnKKoA7pLVgQHZjV4yrC8q0_tDw?key=0h9E1OKX6gYqQ4cRF_x_bQ)

### **Thesis: A Technical Architecture for Cardano's Future**

This document presents the definitive technical architecture for the Haus Protocol on Cardano. It moves beyond high-level concepts to provide a detailed, developer-focused blueprint that is not merely built _on_ Cardano but is fundamentally designed _for_ Cardano. The following sections will demonstrate how leveraging Cardano's unique Extended Unspent Transaction Output (eUTXO) model, advanced native token standards, and robust smart contract capabilities enables the creation of a secure, scalable, and compliant RWA pipeline. This pipeline is poised to onboard an immediate $20 million upon launch, with a projected $1.35 billion in high-quality, institutionally-sourced TVL within four years.1 This is a direct appeal to the developers, dReps, and builders of the Cardano community, showcasing a project architected to ignite a powerful DeFi flywheel, solidify Cardano's position as the preeminent RWA platform, and begin its journey to becoming a trillion-dollar ecosystem.

## **Section 1: The Haus Protocol: A High-Level Architectural Overview**

The Haus Protocol is designed to be a comprehensive, end-to-end system for transforming illiquid, real-world home equity into a liquid, tradable, and composable on-chain asset. The architecture bridges the gap between the complex legal and financial realities of the U.S. real estate market and the transparent, efficient world of decentralized finance on Cardano.

### **Core Business Logic and Asset Lifecycle**

The protocol's operational flow can be distilled into five distinct stages, moving from the physical world to on-chain representation and, finally, to value distribution.1

1.  **Origination:** The process begins off-chain. Haus, the operating entity, enters into legally binding agreements with U.S. homeowners. In exchange for an upfront cash payment, the homeowner grants Haus an equity stake in their property. This is structured as a Home Equity Investment (HEI), not a loan, meaning the homeowner takes on no new debt.1 These agreements are executed in key markets with high homeowner equity, such as California, Oregon, and Washington, selected via a proprietary economic model to optimize investment quality.1 
    
2.  **Asset Pooling:** Each individual HEI, representing a fractional ownership claim on a specific property, is legally structured and bundled into a diversified, off-chain investment fund. This pooling strategy mitigates idiosyncratic risk associated with any single property and creates a large, aggregate portfolio of real estate equity.1  
    
3.  **Tokenization:** The total net asset value (NAV) of this off-chain fund is represented on-chain by a single, fungible native token on the Cardano blockchain, designated as $HAUS. The total supply of $HAUS tokens is algorithmically tied to the value of the underlying equity portfolio, ensuring that each token represents a fractional, collateralized share of the entire real estate pool.1 For example, an initial fund of $10 million would be represented by 10,000,000 $HAUS tokens, each with an intrinsic value of $1.1  
    
4.  **Valuation and Price Adjustment:** To ensure the on-chain token value accurately reflects the real-world asset value, the underlying properties in the portfolio undergo a monthly revaluation. This is performed using a sophisticated off-chain Automated Valuation Model (AVM) that aggregates market data to produce up-to-date property valuations.1 The intrinsic value of each $HAUS token is then adjusted on-chain based on this new data, calculated by dividing the total portfolio value by the number of tokens in circulation. This process provides investors with transparent, near-real-time alignment with market conditions.1  
    
5.  **Liquidity Events & Dividend Distribution:** The protocol generates returns for investors when a homeowner exits their HEI contract. This typically occurs when the homeowner sells their home or refinances their mortgage. Upon such an event, Haus's equity stake is liquidated, and the proceeds are captured by the fund. These realized gains are then distributed as dividends to all $HAUS token holders, proportional to their holdings.1 For instance, if a property sale generates $500,000 for the fund and there are 10,000,000 $HAUS tokens, a dividend of $0.05 per token would be distributed.1
    

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeUES99PJbrS7xICQpWGMw40YrzT__M4mgf6CxB8-u3jMk-0r41fXlch5EjKJxxcPWWCri2mCpi_Jvcs_i0oTja0wTxMC1VeAIwUvsD97R4_rJNMxtHEtxco0Tc-w5RFKbRM20NrA?key=0h9E1OKX6gYqQ4cRF_x_bQ)

### **The Shift from EVM to a Cardano-Native Architecture**

Initial conceptual diagrams for the Haus Protocol were based on an EVM-compatible framework.1 However, a thorough analysis of the protocol's specific requirements—particularly concerning deterministic transaction outcomes, predictable fees, and the need for scalable mass payouts—revealed the inherent superiority of Cardano's eUTXO architecture for this use case. This document details a ground-up implementation specifically designed to harness the unique advantages of Cardano. This Cardano-native approach provides significant improvements in security, scalability, and operational predictability, which are critical for building an institutional-grade financial product. The subsequent sections will elaborate on this bespoke architecture, demonstrating how Cardano's core features are not just accommodated but actively leveraged to create a more robust and efficient system.

## **Section 2: A Cardano-Native Implementation: Leveraging the eUTXO Model**

The successful tokenization of a complex RWA like home equity demands an on-chain architecture that is secure, flexible, and capable of faithfully representing the dynamic nature of the underlying asset. The Haus Protocol's design on Cardano is built upon three pillars: a sophisticated tokenization strategy using the CIP-68 standard, a modular smart contract architecture written in Aiken, and a decentralized oracle bridge for verifiable data integrity.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrOKtydXv4NNLJnZW1FZCg4onUhOasdJLMfuJxJ8Er9hDoTROat04KnuB1q-q225ytMZJAgPyUo0tO28gkEDwGMcqN5wOIiQX4cfF3DsqLeDZc4HFc9Co5mRP2KDPNZV291jFU1A?key=0h9E1OKX6gYqQ4cRF_x_bQ)

### **2.1. Tokenization Strategy: CIP-68 for Dynamic RWA Representation**

A core technical challenge in RWA tokenization is managing the asset's metadata. For Haus, this includes not only static property details but also dynamic data, such as the monthly valuation provided by the AVM.1 An appropriate token standard must accommodate these updates securely and efficiently.

An analysis of available Cardano Improvement Proposals (CIPs) reveals a clear choice. The foundational standard, **CIP-25**, is primarily designed for static NFTs, where metadata is included in the minting transaction and is therefore immutable.2 To update a property's valuation under CIP-25 would require a cumbersome and computationally expensive burn-and-remint cycle for the NFT every single month. This is operationally untenable for a portfolio of thousands of properties and introduces unnecessary complexity and risk.

In contrast, **CIP-68**, the Datum Metadata Standard, is purpose-built for dynamic assets.3 It introduces a novel dual-token structure: a

**User Token** and a **Reference Token**.3 The critical innovation is that the asset's metadata is not stored in the minting transaction but is instead placed within the

_datum_ of the UTXO that holds the Reference Token.3 Because the datum of a UTXO can be updated when it is spent and recreated, this allows the metadata to be programmable and modified without altering the core asset itself.6 This provides a secure, on-chain link between an asset and its evolving data, effectively preventing metadata spoofing and ensuring data integrity.3

The Haus Protocol's implementation of CIP-68 will be as follows:

*   **Property Representation:** Each HEI will be represented by a pair of unique tokens under a single minting policy.
    
*   The **User Token**, following the (222) label for standard NFTs, will be named with the property's unique identifier (e.g., (222)PropertyID-12345). This non-fungible token will be held in the homeowner's wallet as a cryptographic receipt of their participation in the HEI agreement.
    
*   The **Reference Token**, using the (100) label, will have an identical asset name (e.g., (100)PropertyID-12345). This token will be locked by a dedicated smart contract, the PropertyNFTValidator. Its UTXO will contain an inline datum holding all critical RWA data.
    

This structure allows for secure, on-chain updates to property valuations and other key data points via smart contract logic, providing the dynamism required for a real-world financial instrument. The metadata schema itself is designed to be comprehensive, capturing all legally and financially relevant information.

<table><tbody><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Table 1: Proposed CIP-68 Datum Metadata Schema for a Haus Property NFT</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p></p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Field</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p><strong>Description &amp; Data Type</strong></p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>metadata.name</p></td><td style="background-color: rgb(248, 250, 253);"><p>The human-readable property address (e.g., "123 Main St, Anytown, USA"). bounded_bytes</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>metadata.image</p></td><td style="background-color: rgb(248, 250, 253);"><p>A URI pointing to a standardized property image or document preview. uri</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>metadata.description</p></td><td style="background-color: rgb(248, 250, 253);"><p>A brief description of the Home Equity Investment. bounded_bytes</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>metadata.files</p></td><td style="background-color: rgb(248, 250, 253);"><p>An array of files_details objects linking to key legal documents (e.g., signed HEI contract, title report) stored on a decentralized file system like Arweave. [* files_details]</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>version</p></td><td style="background-color: rgb(248, 250, 253);"><p>The version of the metadata schema being used, per CIP-68 specification. int</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>extra.propertyDetails</p></td><td style="background-color: rgb(248, 250, 253);"><p>A map containing static property information. map</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.spv_id</p></td><td style="background-color: rgb(248, 250, 253);"><p>Unique identifier for the Special Purpose Vehicle holding the legal title to the equity. bounded_bytes</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.property_type</p></td><td style="background-color: rgb(248, 250, 253);"><p>e.g., "Single-Family Residence," "Condominium." bounded_bytes</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.legal_description</p></td><td style="background-color: rgb(248, 250, 253);"><p>The official legal description of the property parcel. bounded_bytes</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>extra.valuationData</p></td><td style="background-color: rgb(248, 250, 253);"><p>A map containing dynamic valuation data. map</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.last_avm_value_usd</p></td><td style="background-color: rgb(248, 250, 253);"><p>The most recent valuation in USD, updated monthly. big_int</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.last_valuation_date</p></td><td style="background-color: rgb(248, 250, 253);"><p>The POSIX timestamp of the last valuation update. int</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.next_valuation_date</p></td><td style="background-color: rgb(248, 250, 253);"><p>The POSIX timestamp for the next scheduled valuation. int</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>.avm_provider_ids</p></td><td style="background-color: rgb(248, 250, 253);"><p>An array of identifiers for the AVM providers used in the last valuation. [* bounded_bytes]</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>extra.status</p></td><td style="background-color: rgb(248, 250, 253);"><p>A field indicating the current state of the asset (e.g., "Active," "In-Liquidation," "Liquidated"). bounded_bytes</p></td></tr></tbody></table>

### **2.2. On-Chain Logic: Smart Contract Architecture with Aiken**

The choice of smart contract language is critical for security, efficiency, and developer adoption. While PlutusTx is the original, IOG-supported language, the Haus Protocol will be implemented using **Aiken**. This decision is based on several pragmatic advantages: Aiken offers a modern developer experience with a simpler, more intuitive syntax inspired by languages like Rust and TypeScript, which lowers the barrier to entry for a wider pool of developers.8 It comes with a superior, integrated toolchain for testing, documentation, and code formatting.10 Crucially, Aiken's compiler is highly optimized, producing more efficient and compact Plutus Core scripts, which directly translates to lower transaction fees for all protocol operations—a vital consideration for an institutional-scale application.8

The protocol's on-chain logic is designed with a modular, separation-of-concerns approach, comprising three core validator scripts.

<table><tbody><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Table 2: Core Validator Scripts and Functions</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p></p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Validator Script</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p><strong>Primary Responsibility &amp; Key Functions</strong></p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>FundValidator.ak</p></td><td style="background-color: rgb(248, 250, 253);"><p>Manages the central treasury and the minting/burning of $HAUS tokens. It acts as the on-chain representation of the entire asset pool.</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>PropertyNFTValidator.ak</p></td><td style="background-color: rgb(248, 250, 253);"><p>Locks the CIP-68 Reference Token for each individual property. It governs the lifecycle of a single HEI, including valuation updates and liquidation events.</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p>DividendDistributor.ak</p></td><td style="background-color: rgb(248, 250, 253);"><p>A stateless utility validator designed to securely and efficiently validate the mass distribution of dividends to all $HAUS token holders in a single transaction.</p></td></tr></tbody></table>

#### **Detailed Validator Descriptions**

*   **FundValidator.ak (The Treasury Contract):** This stateful contract is the heart of the protocol's economic logic. Its state is tracked by a unique NFT (the "state token"). The validator script enforces the following rules:
    
*   **Minting $HAUS:** New $HAUS tokens can only be minted when the transaction consumes a valid, newly created PropertyNFTValidator UTXO. The script verifies the initial valuation in the property's datum and calculates the precise amount of $HAUS to mint, ensuring the total supply remains fully backed. The newly minted tokens are sent to the Haus treasury for sale to investors.
    
*   **Burning/Distributing  $HAUS:** When a property is liquidated and its proceeds are moved out of the fund for dividend distribution, a corresponding amount of $HAUS tokens (based on the property's last valuation) must be burned. This maintains the 1:1 backing between the circulating supply of $HAUS and the NAV of the on-chain portfolio.. Or alternatively, we can let the value fall, reflecting the value of the token to decrease post the dividend. This is a topic we are still finalizing. 
    
*   **PropertyNFTValidator.ak (The Property Lifecycle Contract):** This script locks the CIP-68 Reference Token for a single property and controls its state transitions via specific redeemers.
    
*   **UpdateValuation Redeemer:** This function allows the metadata in the UTXO's datum to be updated. Its logic is highly restrictive: it can only be successfully executed if the transaction is signed by a whitelisted oracle operator's key and references valid, recent data feeds from the designated oracle networks. The script performs an on-chain check to ensure the new value is within an acceptable deviation from the previous value.
    
*   **InitiateLiquidation Redeemer:** When an off-chain exit event occurs (e.g., home sale), this redeemer can be used to transition the NFT's status in the datum to "In-Liquidation." This signals to the FundValidator that the asset is being prepared for removal from the portfolio.
    
*   **DividendDistributor.ak (The Mass Payout Contract):** This is a specialized, stateless validator designed for a single purpose: validating the dividend distribution transaction. It does not lock any long-term funds. Its logic simply checks that a transaction attempting to use it as a witness meets strict criteria:
    
*   The transaction's inputs must originate from the FundValidator's designated liquidation address.
    
*   The redeemer must contain a cryptographic hash of the list of all recipient addresses and their corresponding dividend amounts.
    
*   The script verifies that the transaction's outputs perfectly match this list, ensuring that the total payout is correct and that every investor receives their exact proportional share.  
    

### **2.3. The Oracle Bridge: Ensuring Verifiable Off-Chain Valuations**

For any RWA protocol, the oracle is the most critical and vulnerable link to the real world.12 The integrity of the

$HAUS token's value is entirely dependent on the accuracy and reliability of the monthly AVM data. A centralized oracle would introduce an unacceptable single point of failure and a vector for manipulation.14 Therefore, the Haus Protocol employs a robust, decentralized, multi-oracle architecture to ensure data integrity.

The architecture is layered:

1.  **Off-Chain Data Sourcing:** Haus will not rely on a single source of truth. The off-chain component of the system will procure property valuation data from a minimum of three independent, reputable AVM providers for each property in the portfolio. This follows the best practice of data triangulation to mitigate the risk of a single anomalous or compromised source.16
    
2.  **On-Chain Data Provision:** This aggregated off-chain data will be brought on-chain via established, decentralized Cardano oracle networks. The protocol will contract with few leading providers, such as **Charli3** and **Orcfax**, to create custom, redundant data feeds. Both networks feature decentralized node pools and robust aggregation mechanisms, providing a high degree of resilience and tamper resistance.16 The recent integration of Chainlink via zenGate provides a potential third layer of redundancy.19
    
3.  **On-Chain Reconciliation:** The final layer of security is enforced by the smart contract itself. The PropertyNFTValidator's UpdateValuation function will not blindly trust any single oracle feed. The transaction that updates a property's value must reference the UTXOs containing the latest data from _at least two_ different oracle providers (e.g., one UTXO from Charli3's feed and one from Orcfax's feed). The Aiken script will then perform a final on-chain reconciliation, reading the values from both referenced datums and asserting that they fall within a predefined deviation threshold (e.g., less than 5% difference). This on-chain check, inspired by the outlier detection algorithms used by oracle networks themselves 20, provides a trustless, programmatic guarantee against a single oracle network failure or attack.
    

This multi-layered approach—combining off-chain source diversification, decentralized on-chain provision, and trustless on-chain reconciliation—creates an institutional-grade data bridge that is arguably more secure and transparent than the data systems used in traditional finance.  

<table><tbody><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Table 3: Comparison of Cardano Oracle Solutions for the Haus Protocol</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p></p></td><td style="background-color: rgb(248, 250, 253);"><p></p></td><td style="background-color: rgb(248, 250, 253);"><p></p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Oracle Provider</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p><strong>Decentralization Model</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p><strong>Data Source Aggregation</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p><strong>Key Feature for Haus</strong></p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Charli3</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p>Decentralized network of node operators who reach consensus on data feeds.20</p></td><td style="background-color: rgb(248, 250, 253);"><p>Aggregates data from multiple CEXs, DEXs, and APIs off-chain before consensus.21</p></td><td style="background-color: rgb(248, 250, 253);"><p>Offers both push (automated) and pull (on-demand) models, providing flexibility for different protocol needs.21 Audited infrastructure with high uptime.18</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Orcfax</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p>Decentralized pool of validator nodes that verify data integrity.16</p></td><td style="background-color: rgb(248, 250, 253);"><p>Enforces a strict triangulation policy, requiring data from a minimum of three independent sources for all feeds.16</p></td><td style="background-color: rgb(248, 250, 253);"><p>Focus on permanent verifiability, archiving data on Arweave for long-term auditability and dispute resolution, which is critical for RWAs.17</p></td></tr><tr><td style="background-color: rgb(248, 250, 253);"><p><strong>Chainlink (via zenGate)</strong></p></td><td style="background-color: rgb(248, 250, 253);"><p>The industry's largest decentralized oracle network, now accessible on Cardano through the Palmyra Platform.19</p></td><td style="background-color: rgb(248, 250, 253);"><p>Battle-tested, highly decentralized aggregation from premium data sources.22</p></td><td style="background-color: rgb(248, 250, 253);"><p>Provides access to Chainlink Functions for custom computations and Proof of Reserve for asset verification, offering a powerful and highly credible third layer of redundancy.19</p></td></tr></tbody></table>

## **Section 3: Transaction Patterns and On-Chain Data Flow**

A deep understanding of Cardano's eUTXO model allows for the design of highly efficient and predictable transaction patterns. This section details the on-chain data flow for the two most critical processes in the Haus Protocol: the initial tokenization of an equity stake and the mass distribution of dividends.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeunG5ZFgSMkhr4Ytz1yS056_Y16MdqFCVRuMT7LCy_5mbygk5NOX58_SZsbwbg62bnAqM0KdejugwRXNuvNbpYvwq05E1PbO_Kyo7f3eczoRQYI51khP2mUIyC3cKBsFXPvzb8tw?key=0h9E1OKX6gYqQ4cRF_x_bQ)

### **3.1. Equity Event Lifecycle: From Homeowner to On-Chain Asset**

The process of bringing a real-world equity agreement onto the Cardano blockchain is a multi-stage process that demonstrates the power and clarity of the eUTXO model.23 Each step is an atomic transaction that is either fully valid or fails completely, with no intermediate states.

*   **Step 1: Off-Chain Legal Execution.** The process begins in the traditional legal world. A homeowner signs a Home Equity Investment agreement with Haus, and all necessary legal and title work is completed. This off-chain activity is the prerequisite for any on-chain action.
    
*   **Step 2: Transaction 1 - The Minting Transaction.** Once the legal agreement is finalized, Haus initiates the on-chain tokenization. A single transaction is constructed and submitted to the network.
    
*   **Inputs:** A UTXO from a Haus operational wallet.
    
*   **Minting Policy:** The transaction is governed by the unique minting policy for the property asset.
    
*   **Outputs:**
    

1.  A UTXO containing the **User Token** ((222)PropertyID-12345) is sent to the homeowner's verified wallet address. This serves as their cryptographic proof of participation.
    
2.  A UTXO containing the **Reference Token** ((100)PropertyID-12345) is sent to the PropertyNFTValidator script address. This UTXO's inline datum is populated with the initial metadata as defined in Table 1, including the property's address, legal identifiers, and its initial valuation.3
    
3.  A change UTXO is sent back to the Haus operational wallet.
    

*   **Step 3: Transaction 2 - The Fund Update.** The newly created PropertyNFTValidator UTXO must now be formally recognized by the main fund.
    
*   **Inputs:**
    

1.  The current state UTXO from the FundValidator script address (containing the state token).
    
2.  The newly created PropertyNFTValidator UTXO from Step 2.
    

*   **Redeemer:** A redeemer is provided to the FundValidator script, signaling an AddAsset action.
    
*   **Validator Logic:** The FundValidator script executes. It verifies that the input UTXO is a valid property NFT, reads its initial valuation from the datum, and calculates the corresponding amount of $HAUS tokens to be minted.
    
*   **Outputs:**
    

1.  A new state UTXO is created at the FundValidator script address, with its datum updated to reflect the new total portfolio value.
    
2.  A UTXO containing the newly minted $HAUS tokens is sent to the Haus treasury wallet, ready for distribution to investors.
    
3.  The PropertyNFTValidator UTXO is passed through, now under the logical control of the fund's overall state.
    

*   **Step 4: Transaction 3 - The Monthly Valuation Update.** Each month, the value of the property NFT must be updated on-chain.
    
*   **Inputs:** The PropertyNFTValidator UTXO for the specific property.
    
*   **Reference Inputs:** The transaction references the UTXOs from the Charli3 and Orcfax oracle feeds that contain the latest AVM data for that property.
    
*   **Redeemer:** The UpdateValuation redeemer is used, containing the new valuation data.
    
*   **Signatory:** The transaction must be signed by the private key of a whitelisted oracle operator.
    
*   **Validator Logic:** The PropertyNFTValidator script runs. It checks the signature, verifies that the data in the redeemer matches the data in the referenced oracle UTXOs, and confirms that the values from the different oracles are within the acceptable deviation.
    
*   **Output:** A new PropertyNFTValidator UTXO is created at the same script address, identical to the input except for the updated valuation data in its inline datum.  
    

### **3.2. Dividend Distribution at Scale: A Multi-Recipient eUTXO Pattern**

One of the most powerful demonstrations of the eUTXO model's suitability for institutional finance is its ability to handle mass payouts efficiently and deterministically. When a property is sold and profits are realized, they must be distributed to thousands of $HAUS token holders.1 On an account-based blockchain, this would necessitate a loop of thousands of individual

send transactions, each incurring a separate fee, each subject to network congestion and potential failure, making the overall process slow, expensive, and operationally risky.

Cardano's eUTXO model provides a vastly superior solution by allowing a single transaction to have an arbitrary number of outputs.25 This enables the creation of a single, atomic transaction that pays all dividend recipients simultaneously.

The implementation of this pattern is as follows:

1.  **Off-Chain Preparation:** Following a liquidation event, an off-chain service performs a snapshot of the Cardano blockchain at a specific block height. It queries all addresses holding $HAUS tokens and records their balances. Based on the total profit to be distributed, this service calculates the precise dividend amount due to each individual holder. This generates a definitive list of (address, amount) pairs.
    
2.  **Transaction Construction:** A specialized off-chain tool, using a robust transaction library like PyCardano 28 or  
    cardano-transaction-lib 29, constructs a single, large transaction.
    

*   **Inputs:** One or more UTXOs from the FundValidator's liquidation address, containing the total sum of profits to be distributed.
    
*   **Outputs:** The transaction is built with thousands of TransactionOutput objects. Each output is directed to a unique token holder's address and contains their exact, pre-calculated dividend amount in ADA or a stablecoin.28
    
*   **Witness Script:** The transaction is configured to be validated by the DividendDistributor.ak script.
    
*   **Redeemer:** The redeemer for the DividendDistributor script includes a cryptographic hash of the entire (address, amount) list. This ensures that the transaction being validated corresponds exactly to the intended payment schedule.
    

3.  **Validation and Atomic Execution:** The transaction is submitted to the network. The DividendDistributor validator script runs only once. It performs two simple but critical checks: it verifies the redeemer hash against the transaction's outputs, and it ensures that the sum of all output values plus the transaction fee equals the sum of the input values.
    

The power of this eUTXO-native pattern cannot be overstated from an institutional perspective. The success or failure of the transaction is determined _before_ it is submitted to the chain, based solely on its own contents.23 This provides several key advantages:

*   **Predictable Fees:** The fee for the entire batch distribution can be calculated precisely upfront, eliminating the "gas war" uncertainty of account-based models.23
    
*   **Atomicity:** The transaction is guaranteed to either succeed completely, with every single investor being paid, or fail completely, with no funds being moved. The risk of partial, failed payment runs is entirely eliminated.
    
*   **Auditability:** A single transaction ID provides a complete, immutable, and easily auditable record of the entire dividend distribution event.
    

This "deterministic settlement guarantee" is a core feature that transforms a technical detail of Cardano's architecture into a compelling business advantage, directly addressing the risk management and operational efficiency concerns of institutional capital.

## **Section 4: Composability and the Cardano DeFi Flywheel**  

A core tenet of the Haus Protocol's strategy is not just to bring TVL to Cardano, but to ensure that this TVL is deeply integrated and composable within the existing DeFi ecosystem. The $HAUS token is designed to be a productive, yield-bearing asset that can serve as high-quality collateral, igniting the powerful "flywheel effect" envisioned in the protocol's founding documents.1 This creates a self-reinforcing cycle of growth: Haus brings in real-world value, which strengthens DeFi protocols, which in turn creates more utility and demand for assets like $HAUS.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeq8wJButsrTsOr4hWai5SXjdpRBlxv2WShslv12H5t6yS5RCDsKUpgl9xN0cgKjg8qYL0aNTQ3BdVYjx6WWUSrNK_UHQgje3qHEiFUG_VbDTSPYqKc043Bca8LGp2KM_2xRAdaUw?key=0h9E1OKX6gYqQ4cRF_x_bQ)

### **4.1. $HAUS as High-Quality Collateral in Money Markets**

The primary vector for DeFi integration is the use of $HAUS as collateral in leading Cardano money market protocols, most notably Liqwid Finance. This allows $HAUS holders to unlock liquidity by borrowing against their tokenized real estate equity without having to sell their underlying asset, a powerful tool for capital efficiency.31

The technical pathway to achieve this integration is clear and methodical:

1.  **Reliable Oracle Feed:** The absolute prerequisite for any asset to be used as collateral in a lending protocol is a robust, manipulation-resistant, on-chain price feed. The multi-oracle architecture detailed in Section 2.3, which leverages Charli3, Orcfax, and potentially Chainlink, will be extended to publish a reliable HAUS/ADA price feed. This feed will be the cornerstone of the integration, providing Liqwid's smart contracts with the data needed to manage loan-to-value ratios and trigger liquidations.
    
2.  **Liqwid DAO Governance Proposal:** Armed with a live, high-quality price feed, the Haus team will formally engage with the Liqwid DAO. This will involve submitting a comprehensive governance proposal to list $HAUS as a new supported collateral type. The proposal will be data-driven, outlining:
    

*   **Asset Profile:** The nature of $HAUS as a token backed by a diversified pool of U.S. residential real estate equity.
    
*   **Risk Parameters:** A detailed analysis of the asset's low volatility profile compared to crypto-native assets, proposing conservative initial parameters for Loan-To-Value (LTV), liquidation thresholds, and liquidation penalties.
    
*   **Oracle Security:** A thorough explanation of our multi-oracle architecture, demonstrating its resilience and reliability.
    
*   **Value Proposition:** A clear articulation of the benefits to the Liqwid protocol, including a significant increase in TVL, new borrowing demand, and enhanced protocol stability.
    
*   **Asset Onboarding:** Upon approval by Liqwid's governance, $HAUS will be added to the protocol's list of accepted collateral assets.33 Users will then be able to supply  
    $HAUS to the Liqwid lending pools and borrow other assets such as ADA, or native stablecoins like DJED, USDA, and iUSD.
    

The introduction of $HAUS as collateral offers a strategic advantage that extends beyond simply increasing TVL. The current DeFi landscape is heavily reliant on volatile, crypto-native assets for collateral.33 The $HAUS token, backed by a "traditionally stable and growing asset class" 1 and valued by off-chain models, introduces a new type of collateral with a fundamentally different and lower-risk profile. This diversification can significantly enhance the stability and resilience of protocols like Liqwid, making the entire Cardano DeFi ecosystem less susceptible to the violent price swings of the broader crypto market. This argument—that RWA collateral acts as a stabilizing layer for DeFi—is a powerful one for convincing dReps and the broader community of the protocol's systemic importance.  

### **4.2. Unlocking Further Liquidity with Indigo Protocol**

To further enhance the utility and liquidity of the Haus ecosystem, the protocol will seek integration with Indigo Protocol, Cardano's premier platform for synthetic assets.34 This integration will enable the creation of

iAssets that track the value of Haus Protocol assets, opening up new avenues for price exposure, hedging, and complex trading strategies.

The technical pathway for this integration follows Indigo's established governance process:

1.  **Proposing a New iAsset:** The Haus team will engage with the Indigo DAO via their public governance forum to propose the creation of iHAUS, a synthetic token designed to track the price of the $HAUS token.34
    
2.  **Providing an Oracle Feed:** The Indigo protocol relies on oracles to maintain the peg between a synthetic iAsset and its underlying real-world asset.35 The same robust  
    HAUS/ADA price feed developed for the Liqwid integration will be supplied to the Indigo protocol, satisfying this critical requirement.
    
3.  **Minting iHAUS:** Once the iHAUS market is approved and launched by the Indigo DAO, any user on Cardano can gain price exposure to the U.S. residential real estate market. They can do so by locking ADA or another accepted asset as collateral in an Indigo Collateralized Debt Position (CDP) and minting new iHAUS tokens.34 This allows traders and investors to speculate on or hedge against the real estate market without needing to pass the KYC requirements to hold the underlying  
    $HAUS security token.
    

This integration is a key component of the DeFi flywheel. The existence of $HAUS enables a new synthetic market on Indigo. The trading activity on this market will generate fees for the Indigo DAO and drive demand for Indigo's native stablecoin, iUSD, as well as other stablecoins like USDA and DJED, which are often used in stability pools and for trading.37 This increased demand for native stablecoins and higher transaction volumes benefits the entire Cardano ecosystem, creating the self-reinforcing loop of growth that will drive Cardano's on-chain economy forward.1

## **Section 5: Building for Institutional Adoption and Regulatory Compliance**

For any RWA protocol to succeed at scale, it must be built on a foundation of regulatory compliance, institutional-grade security, and trusted custody solutions. The Haus Protocol is being architected from day one to meet these stringent requirements, ensuring it is a platform that conservative institutional partners can trust.1

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfsTyvC-CFMJfP1LV3C-6KWVtl0etb7JCLHt9k0Yi-ppdOpj_LDyARc2WgB8UsoqGbtkLAP_ynsqI-x34GdxtTzEo6wt3vs3uPgqewfOCxRYjsc9n6GtHq3fwjCmgPjYeCnWDm9?key=0h9E1OKX6gYqQ4cRF_x_bQ)

### **5.1. On-Chain Guardrails for Regulatory Compliance**

It is an unavoidable legal reality that a token representing fractional ownership of an equity investment, such as $HAUS, is a security.38 As such, its issuance and transfer are subject to securities regulations. The Haus Protocol is being designed to operate under a framework such as the U.S. Securities and Exchange Commission's (SEC)

**Regulation A+**. This exemption allows for public offerings of up to $75 million in a 12-month period to both accredited and non-accredited investors, making it an ideal pathway for a project seeking to democratize access to real estate equity.41

A key advantage of blockchain technology is the ability to encode regulatory rules directly into the asset itself, providing automated and immutable enforcement. The Haus Protocol's smart contracts will feature several on-chain guardrails to ensure compliance:

*   **Identity Verification and Whitelisting:** All potential investors in $HAUS will be required to undergo a thorough off-chain Know Your Customer (KYC) and Anti-Money Laundering (AML) verification process.38 Upon successful verification, the investor's Cardano wallet address will be added to an on-chain registry. The  
    FundValidator's logic will be designed to only permit the minting and initial distribution of $HAUS tokens to addresses present on this whitelist.
    
*   **Transfer Restrictions:** To comply with securities laws governing secondary trading, the native token logic for $HAUS will be controlled by a validator script. This script will consult the on-chain whitelist registry for every transfer attempt. Peer-to-peer transfers will only be permitted if both the sender and receiver addresses are on the whitelist, preventing the token from being traded on unauthorized decentralized exchanges or sent to non-compliant wallets.
    
*   **Investor Limitations and Holding Periods:** Regulation A+ (Tier 2) imposes limitations on the amount non-accredited investors can purchase, typically capped at 10% of their annual income or net worth.41 The smart contracts governing the primary issuance can be designed to enforce these investment caps programmatically at the point of sale. Similarly, if any regulatory holding periods apply, the same smart contract logic can prevent the transfer of tokens until the specified period has elapsed.  
    

### **5.2. A Framework for Institutional Custody**

Institutional investors, from family offices to large asset managers, are bound by fiduciary duties and regulatory requirements to use qualified custodians for the safekeeping of their assets.44 The availability of such services is a non-negotiable prerequisite for institutional participation. The Cardano ecosystem has matured to the point where multiple trusted, institutional-grade custody solutions now explicitly support Cardano native assets. The Haus Protocol will integrate with these providers to offer a secure custody framework for its institutional clients.

Key partners in this framework include:

*   **Cactus Custody™:** A qualified institutional custodian born from a strategic partnership between EMURGO, a founding entity of Cardano, and the digital asset financial services giant Matrixport. This partnership was specifically orchestrated to deliver regulated, institutional-grade custody solutions for Cardano native assets, making them a natural and deeply aligned partner for the Haus Protocol.45
    
*   **Zodia Custody:** A leading institution-first digital asset custodian, uniquely owned by a consortium of major global banks including Standard Chartered, SBI Holdings, and Northern Trust. Zodia Custody recently launched support for Cardano, offering institutional ADA staking and custody services from cold storage wallets, demonstrating their commitment to the ecosystem.50
    
*   **Anchorage Digital Bank:** As the only federally chartered crypto bank in the United States, Anchorage Digital represents the gold standard in regulated digital asset custody. They offer qualified custody under the oversight of the U.S. Office of the Comptroller of the Currency, providing a level of regulatory assurance that is highly attractive to the most conservative U.S.-based institutions.44
    

By establishing clear pathways for institutional investors to hold $HAUS tokens via these trusted custodians, the protocol removes a major barrier to entry and signals its readiness for serious capital deployment.  

### **5.3. Commitment to Security: Audits and Formal Verification**

In the world of decentralized finance, security is paramount. The financial gravity of a protocol designed to hold billions of dollars in real-world value demands an uncompromising approach to security auditing and code verification. The Haus Protocol is committed to a multi-faceted security strategy that aligns with Cardano's own high-assurance philosophy.

*   **Multiple, Independent Audits:** Prior to any mainnet deployment, the entire suite of Haus Protocol smart contracts will undergo rigorous security audits by multiple, independent, and globally recognized auditing firms. The protocol will engage a blend of firms with broad blockchain security expertise and those with specific, deep knowledge of the Cardano development environment. Potential audit partners include:
    
*   **Global Leaders:** Firms like **CertiK** 51,  
    **Halborn** 54, and  
    **Quantstamp** 57, which have extensive experience auditing top-tier projects across numerous ecosystems, including Cardano.
    
*   **Cardano Specialists:** Firms with a proven track record of auditing major Cardano protocols, such as **Vacuumlabs** (auditors of Liqwid and Agora) 58 and  
    **Anastasia Labs** (founded by a lead architect of WingRiders DEX and auditors of the OpShin compiler).59
    
*   **Formal Verification:** Given the critical nature of the protocol's core logic, particularly the FundValidator script that governs the minting and burning of $HAUS, the project will explore the use of formal verification techniques. This process goes beyond traditional auditing by using mathematical methods to create a formal proof that the code behaves exactly as specified, eliminating entire classes of potential bugs and vulnerabilities.51 This commitment to the highest possible standard of code assurance is a direct reflection of Cardano's foundational principles and is essential for earning the trust of institutional partners. All audit reports will be made public to ensure full transparency with the community and investors.  
    

## **Conclusion: A Catalyst for Cardano's RWA Dominance**

The architecture detailed in this document represents more than just a plan for a single project; it is a comprehensive blueprint for how Cardano can achieve a dominant position in the multi-trillion-dollar Real World Asset market. The Haus Protocol has been meticulously designed to leverage the most powerful and unique features of the Cardano blockchain—from the dynamic metadata capabilities of CIP-68 and the developer-friendly efficiency of Aiken, to the deterministic settlement guarantees of the eUTXO model—to create a system that is uniquely suited to tokenize real estate equity securely, transparently, and at institutional scale.

The value proposition for the Cardano ecosystem is direct and substantial. The protocol is projected to drive over $1.35 billion in high-quality, real-world TVL onto the chain, beginning with an immediate $20 million deployment upon launch.1 This is not speculative value derived from volatile crypto assets, but stable capital locked against one of the world's largest and most reliable asset classes. This infusion of value will directly address the network's current high valuation-to-TVL ratio, providing a powerful anchor of tangible economic activity and fundamentally strengthening the Cardano blockchain.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcsL4SE4YakE8-POpYDCeuQIVkHB9sdP_QvYGDWlVps0Bvi_XaRPMG6VpOVwhQM17kH_pdV8fBaEIMB9Ab9H53dKuvIFJSXs7tueMX3PxW_jGOx31xA5vVIV5UnajSj4iYCojYf0g?key=0h9E1OKX6gYqQ4cRF_x_bQ)

This endeavor, however, is not one that can be accomplished in isolation. It requires the engagement and support of the entire Cardano community.

*   **A Call to Developers:** The Haus Protocol is designed to be a foundational "Lego block" for the next generation of Cardano DeFi. The introduction of a stable, yield-bearing, real-world-backed asset like $HAUS will create countless new opportunities for innovation in lending, derivatives, and other financial products. In the spirit of collaboration, the Haus project commits to open-sourcing key infrastructure components and design patterns developed during this process, contributing directly to the public good of the developer ecosystem.1
    
*   **A Call to Delegated Representatives (dReps):** The governance of Cardano is now in the hands of its community, represented by dReps. The decision to support and fund a project of this magnitude is a strategic one. Supporting the Haus Protocol is a vote for the long-term economic security, competitive relevance, and institutional adoption of Cardano. It is a direct and credible pathway to closing the TVL gap and establishing a powerful narrative of real-world utility that will resonate with global capital markets. In recognition of this partnership, the Haus Protocol commits to a revolutionary model of community alignment: any grants received from the Cardano Treasury will be repaid from a percentage of the protocol's future operating profits, ensuring that the community's investment is not a grant, but a true, value-generating partnership.1
    

The vision is clear: to establish Cardano as the premier, institutional-grade settlement layer for the tokenized financial future. The Haus Protocol is not merely asking to build on Cardano; it is committing to building _with_ Cardano, to construct the foundational infrastructure that will unlock the vast potential of the $34.5 trillion home equity market and, in doing so, help secure the future of the entire ecosystem.

#### **Works cited**

1.  Hauscoin Memo.pdf
    
2.  What to Know About Dynamic NFTs - EMURGO, accessed July 9, 2025, [https://www.emurgo.io/press-news/what-to-know-about-dynamic-nfts/](https://www.emurgo.io/press-news/what-to-know-about-dynamic-nfts/)
    
3.  CIP 68 - NFT Guild, accessed July 9, 2025, [https://www.nft-guild.io/cardano-nft-guides/cip-68](https://www.nft-guild.io/cardano-nft-guides/cip-68)
    
4.  The Cardano NFT Guides - Minting - Squarespace, accessed July 9, 2025, [https://static1.squarespace.com/static/624c2f59896254755d01c624/t/6627297131bd0a3c2bd4d40a/1713842554093/04.An+Introduction+to+Cardano+Standards+%5BThe+Cardano+NFT+Guides%5D.pdf](https://static1.squarespace.com/static/624c2f59896254755d01c624/t/6627297131bd0a3c2bd4d40a/1713842554093/04.An+Introduction+to+Cardano+Standards+%5BThe+Cardano+NFT+Guides%5D.pdf)
    
5.  CIP-68 | Datum Metadata Standard - Cardano Improvement Proposals, accessed July 9, 2025, [https://cips.cardano.org/cip/CIP-68](https://cips.cardano.org/cip/CIP-68)
    
6.  CIP-68 - NMKR Docs, accessed July 9, 2025, [https://docs.nmkr.io/nmkr-studio/token/metadata/cip-68](https://docs.nmkr.io/nmkr-studio/token/metadata/cip-68)
    
7.  Unlocking the Future: NMKR Studio Integrates CIP-68, accessed July 9, 2025, [https://www.nmkr.io/blog/unlocking-the-future-nmkr-studio-integrates-cip-68-for-dynamic-asset-metadata-on-cardano](https://www.nmkr.io/blog/unlocking-the-future-nmkr-studio-integrates-cip-68-for-dynamic-asset-metadata-on-cardano)
    
8.  The Programming Languages Behind Cardano On-Chain Code - EMURGO, accessed July 9, 2025, [https://www.emurgo.io/press-news/the-programming-languages-behind-cardano-on-chain-code/](https://www.emurgo.io/press-news/the-programming-languages-behind-cardano-on-chain-code/)
    
9.  The Heartbeat of Cardano Shifts to Aiken | Lido Nation English, accessed July 9, 2025, [https://www.lidonation.com/en/posts/the-heartbeat-of-cardano-shifts-to-aiken](https://www.lidonation.com/en/posts/the-heartbeat-of-cardano-shifts-to-aiken)
    
10.  Aiken: the Future of Smart Contracts - Cardano Foundation, accessed July 9, 2025, [https://cardanofoundation.org/blog/aiken-the-future-of-smart-contracts](https://cardanofoundation.org/blog/aiken-the-future-of-smart-contracts)
    
11.  Navigating the Cardano Development Landscape: What are the options? | Developer Diary #2 | by Mike Borman | Coinmonks | Medium, accessed July 9, 2025, [https://medium.com/coinmonks/navigating-the-cardano-development-landscape-what-are-the-options-developer-diary-2-a1ac930514eb](https://medium.com/coinmonks/navigating-the-cardano-development-landscape-what-are-the-options-developer-diary-2-a1ac930514eb)
    
12.  Oracle integrated Real World tokenization Platform Development - Antier Solutions, accessed July 9, 2025, [https://www.antiersolutions.com/blogs/the-role-of-oracles-in-real-world-tokenization-platforms-powering-trust-speed-and-accuracy/](https://www.antiersolutions.com/blogs/the-role-of-oracles-in-real-world-tokenization-platforms-powering-trust-speed-and-accuracy/)
    
13.  Oracle basics - Orcfax, accessed July 9, 2025, [https://docs.orcfax.io/oracle-basics](https://docs.orcfax.io/oracle-basics)
    
14.  Oracle – Blockchain Patterns - CSIRO Research, accessed July 9, 2025, [https://research.csiro.au/blockchainpatterns/general-patterns/interacting-with-the-external-world/oracle/](https://research.csiro.au/blockchainpatterns/general-patterns/interacting-with-the-external-world/oracle/)
    
15.  Blockchain Oracle Design Patterns — Explained | by Harshana Serasinghe | Coinmonks, accessed July 9, 2025, [https://medium.com/coinmonks/blockchain-oracle-design-patterns-explained-1ce2e185fa1d](https://medium.com/coinmonks/blockchain-oracle-design-patterns-explained-1ce2e185fa1d)
    
16.  Solution overview | Orcfax, accessed July 9, 2025, [https://docs.orcfax.io/solution-overview](https://docs.orcfax.io/solution-overview)
    
17.  Orcfax, accessed July 9, 2025, [https://orcfax.io/](https://orcfax.io/)
    
18.  Charli3 Docs - Technical Guide of Oracle Integration, accessed July 9, 2025, [https://docs.charli3.io/](https://docs.charli3.io/)
    
19.  RWA Tokenization on Cardano and Ergo via Chainlink, accessed July 9, 2025, [https://cexplorer.io/article/rwa-tokenization-on-cardano-and-ergo-via-chainlink](https://cexplorer.io/article/rwa-tokenization-on-cardano-and-ergo-via-chainlink)
    
20.  Infrastructure - Charli3 Docs, accessed July 9, 2025, [https://docs.charli3.io/introduction/infrastructure](https://docs.charli3.io/introduction/infrastructure)
    
21.  Charli3 | Decentralized Oracles and Market Data for Cardano, accessed July 9, 2025, [https://charli3.io/](https://charli3.io/)
    
22.  RWA Tokenization Enters New Phase: 10 Key Drivers Shaping the Future of On-Chain Finance and its Impact on LINK - Blockchain News, accessed July 9, 2025, [https://blockchain.news/flashnews/rwa-tokenization-enters-new-phase-10-key-drivers-shaping-the-future-of-on-chain-finance-and-its-impact-on-link](https://blockchain.news/flashnews/rwa-tokenization-enters-new-phase-10-key-drivers-shaping-the-future-of-on-chain-finance-and-its-impact-on-link)
    
23.  Extended UTXO model - Cardano Docs, accessed July 9, 2025, [https://docs.cardano.org/about-cardano/learn/eutxo-explainer](https://docs.cardano.org/about-cardano/learn/eutxo-explainer)
    
24.  Cardano's EUTXO model: bringing deterministic predictability to blockchain - IOHK Blog, accessed July 9, 2025, [https://iohk.io/blog/posts/2025/05/02/cardano-s-eutxo-model-bringing-deterministic-predictability-to-blockchain/](https://iohk.io/blog/posts/2025/05/02/cardano-s-eutxo-model-bringing-deterministic-predictability-to-blockchain/)
    
25.  How to Understand Transactions in Transaction - Cardano Explorer, accessed July 9, 2025, [https://cexplorer.io/article/how-to-understand-transactions-in-transaction](https://cexplorer.io/article/how-to-understand-transactions-in-transaction)
    
26.  Smart way of sending multiple transactions? - Misc Dev Talk - Cardano Forum, accessed July 9, 2025, [https://forum.cardano.org/t/smart-way-of-sending-multiple-transactions/98999](https://forum.cardano.org/t/smart-way-of-sending-multiple-transactions/98999)
    
27.  Understanding UTxO spending | Cardano Explorer, accessed July 9, 2025, [https://cexplorer.io/article/understanding-utxo-spending](https://cexplorer.io/article/understanding-utxo-spending)
    
28.  Python-Cardano/pycardano: A lightweight Cardano library in Python - GitHub, accessed July 9, 2025, [https://github.com/Python-Cardano/pycardano](https://github.com/Python-Cardano/pycardano)
    
29.  Plutonomicon/cardano-transaction-lib: A Purescript library for building smart contract transactions on Cardano - GitHub, accessed July 9, 2025, [https://github.com/Plutonomicon/cardano-transaction-lib](https://github.com/Plutonomicon/cardano-transaction-lib)
    
30.  Multi-witness transactions - Cardano Developer Portal, accessed July 9, 2025, [https://developers.cardano.org/docs/integrate-cardano/multi-witness-transactions-cli/](https://developers.cardano.org/docs/integrate-cardano/multi-witness-transactions-cli/)
    
31.  Liqwid Finance price today, LQ to USD live price, marketcap and chart | CoinMarketCap, accessed July 9, 2025, [https://coinmarketcap.com/currencies/liqwid-finance/](https://coinmarketcap.com/currencies/liqwid-finance/)
    
32.  Liqwid Finance, accessed July 9, 2025, [https://liqwid.finance/](https://liqwid.finance/)
    
33.  Liqwid Finance, accessed July 9, 2025, [https://v2.liqwid.finance/](https://v2.liqwid.finance/)
    
34.  Indigo Protocol | Decentralized synthetics & tokenized trading on ..., accessed July 9, 2025, [https://indigoprotocol.io/](https://indigoprotocol.io/)
    
35.  Indigo Protocol: Unlocking the World of Synthetic Assets on Cardano Blockchain, accessed July 9, 2025, [https://flagship.fyi/outposts/dapps/indigo-protocol-unlocking-the-world-of-synthetic-assets-on-cardano-blockchain/](https://flagship.fyi/outposts/dapps/indigo-protocol-unlocking-the-world-of-synthetic-assets-on-cardano-blockchain/)
    
36.  Cardano Deep Dive #1: Indigo Protocol | The Financial Future - Medium, accessed July 9, 2025, [https://medium.com/the-financial-future/cardano-deep-dive-1-indigo-protocol-868ecfe277b1](https://medium.com/the-financial-future/cardano-deep-dive-1-indigo-protocol-868ecfe277b1)
    
37.  WTF is Indigo...(seriously)? : r/cardano - Reddit, accessed July 9, 2025, [https://www.reddit.com/r/cardano/comments/10ghfan/wtf\_is\_indigoseriously/](https://www.reddit.com/r/cardano/comments/10ghfan/wtf_is_indigoseriously/)
    
38.  Real Estate Tokenization: 2024 Legal & Regulatory Guide - Rapid Innovation, accessed July 9, 2025, [https://www.rapidinnovation.io/post/legal-and-regulatory-aspects-of-real-estate-tokenization](https://www.rapidinnovation.io/post/legal-and-regulatory-aspects-of-real-estate-tokenization)
    
39.  Enchanting, but Not Magical: A Statement on the Tokenization of Securities - SEC.gov, accessed July 9, 2025, [https://www.sec.gov/newsroom/speeches-statements/peirce-statement-tokenized-securities-070925](https://www.sec.gov/newsroom/speeches-statements/peirce-statement-tokenized-securities-070925)
    
40.  Real Estate Tokenization In 2025: What Blockchain Companies Must Know About SEC Rules - Primior, accessed July 9, 2025, [https://primior.com/real-estate-tokenization-in-2025-what-blockchain-companies-must-know-about-sec-rules/](https://primior.com/real-estate-tokenization-in-2025-what-blockchain-companies-must-know-about-sec-rules/)
    
41.  Regulation A+ Tokenized Offerings | Lawyer/Attorney - Dilendorf Law Firm, accessed July 9, 2025, [https://dilendorf.com/blockchain-crypto/regulation-a-tokenized-offerings.html](https://dilendorf.com/blockchain-crypto/regulation-a-tokenized-offerings.html)
    
42.  Asset Tokenization Regulations in the US - Antier Solutions, accessed July 9, 2025, [https://www.antiersolutions.com/blogs/decoding-the-legal-landscape-asset-tokenization-regulations-in-the-us/](https://www.antiersolutions.com/blogs/decoding-the-legal-landscape-asset-tokenization-regulations-in-the-us/)
    
43.  Real Estate Tokenization - Allomerlaw, accessed July 9, 2025, [https://www.allomerlaw.com/Service/real-estate-tokenization/](https://www.allomerlaw.com/Service/real-estate-tokenization/)
    
44.  Crypto Custody for Institutions - Anchorage Digital, accessed July 9, 2025, [https://www.anchorage.com/platform/custody](https://www.anchorage.com/platform/custody)
    
45.  EMURGO Partners with Matrixport's Cactus CustodyTM for Institutional-Grade Custody Solutions - PR Newswire, accessed July 9, 2025, [https://www.prnewswire.com/apac/news-releases/emurgo-partners-with-matrixports-cactus-custodytm-for-institutional-grade-custody-solutions-301963936.html](https://www.prnewswire.com/apac/news-releases/emurgo-partners-with-matrixports-cactus-custodytm-for-institutional-grade-custody-solutions-301963936.html)
    
46.  EMURGO Partners with Matrixport's Cactus CustodyTM for, accessed July 9, 2025, [https://themalaysianreserve.com/2023/11/02/emurgo-partners-with-matrixports-cactus-custodytm-for-institutional-grade-custody-solutions/](https://themalaysianreserve.com/2023/11/02/emurgo-partners-with-matrixports-cactus-custodytm-for-institutional-grade-custody-solutions/)
    
47.  EMURGO and Matrixport's Cactus Custody Formulate Strategic, accessed July 9, 2025, [https://www.binance.com/es-LA/square/post/1598166](https://www.binance.com/es-LA/square/post/1598166)
    
48.  Cactus Custody: Qualified Custody Services for Institutions, accessed July 9, 2025, [https://www.mycactus.com/](https://www.mycactus.com/)
    
49.  EMURGO Partners with Matrixport's Cactus Custody™ for Institutional-Grade Custody Solutions, accessed July 9, 2025, [https://www.emurgo.io/press-news/emurgo-partners-with-matrixports-cactus-custody/](https://www.emurgo.io/press-news/emurgo-partners-with-matrixports-cactus-custody/)
    
50.  Zodia Custody launches institutional ADA staking, accessed July 9, 2025, [https://zodia-custody.com/zodia-custody-launches-institutional-ada-staking/](https://zodia-custody.com/zodia-custody-launches-institutional-ada-staking/)
    
51.  CertiK: Largest Blockchain Security Auditor, accessed July 9, 2025, [https://www.certik.com/](https://www.certik.com/)
    
52.  Smart Contract Audit - CertiK, accessed July 9, 2025, [https://www.certik.com/products/smart-contract-audit](https://www.certik.com/products/smart-contract-audit)
    
53.  Cardano Ecosystem - CertiK, accessed July 9, 2025, [https://www.certik.com/ecosystems/cardano](https://www.certik.com/ecosystems/cardano)
    
54.  Smart Contract Audit Companies & Blockchain Auditors - Milk Road, accessed July 9, 2025, [https://milkroad.com/security/audit/](https://milkroad.com/security/audit/)
    
55.  HalbornSecurity/PublicReports - GitHub, accessed July 9, 2025, [https://github.com/HalbornSecurity/PublicReports](https://github.com/HalbornSecurity/PublicReports)
    
56.  BlockDAG Passes CertiK Audit as Chainlink Hits $150T Milestone and Avalanche Eyes $52 Breakout | Bitget News, accessed July 9, 2025, [https://www.bitget.com/news/detail/12560604744290](https://www.bitget.com/news/detail/12560604744290)
    
57.  Audits - Quantstamp, accessed July 9, 2025, [https://quantstamp.com/audits](https://quantstamp.com/audits)
    
58.  Smart Contract Auditing Services - Vacuumlabs, accessed July 9, 2025, [https://vacuumlabs.com/blockchain/smart-contract-auditing/](https://vacuumlabs.com/blockchain/smart-contract-auditing/)
    
59.  OpShin Audit - Project Catalyst, accessed July 9, 2025, [https://projectcatalyst.io/funds/12/cardano-open-developers/opshin-audit](https://projectcatalyst.io/funds/12/cardano-open-developers/opshin-audit)
