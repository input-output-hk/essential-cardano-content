---
title: "Engineering the Future of Cardano: A Deep Dive into Key Infrastructure
  Proposals from Tweag"
tags:
  - tweag
  - Cardano
  - Building on Cardano
  - Peras
url: ""
image: https://ucarecdn.com/18cd01aa-a2de-4f09-a9d9-09589597ac1c/
image_text: ""
---

We are deeply grateful for the support we’ve received from the Cardano community during our recent Treasury Withdrawal Action. Your engagement enables the kind of focused, high-impact engineering that helps move the ecosystem forward.

We've been tackling tough engineering challenges since 2013. We are passionate contributors to the Cardano ecosystem, where we've led work on everything from security audits and protocol design to its core consensus and ledger systems.

As part of Modus Create—a global consultancy partnered with brands like Atlassian, AWS, and GitHub—we merge high-level strategy with hands-on delivery. Everything we do is guided by rigorous engineering, open collaboration, and our mission to help Cardano reach its full potential.

We recognize that technical proposals—while essential—can sometimes feel distant or opaque. Their significance may not always be immediately clear, even to the most dedicated community members. This post is our way of helping to bridge that gap.

By unpacking the technical initiatives we’re working on—from settlement acceleration to testing frameworks and smart contract tooling—we aim to make the purpose and impact of our work more accessible. Behind every line of code is a shared commitment: to strengthen Cardano’s foundation, to build with integrity, and to grow the capabilities of the ecosystem for everyone involved.

Thank you for continuing to support the builders who believe in Cardano’s long-term vision—and are actively delivering it.

## Peras: Accelerating Settlement Guarantees

[Ouroboros Peras](https://peras.cardano-scaling.org/), currently in its pre-alpha stage, enhances settlement guarantees under optimistic network conditions. Compared to the existing protocol, it reduces settlement times from hours to minutes in scenarios with high honest participation and minimal adversarial interference. For additional context, see [CPS-0017](https://cips.cardano.org/cps/CPS-0017).

### Advancing Toward the Peras Testnet

We propose three core tasks necessary to deploy and experiment with a functional Peras testnet:

*   **Pre-Alpha Peras Parameterization Dashboard**  
    Peras introduces nuanced trade-offs, such as:
    

*   Round length vs. network traffic
    
*   Block selection offset vs. resistance to weak adversaries
    
*   Cooldown periods vs. Praos safety
    

*   We aim to create a user-friendly web-based dashboard that visualizes these parameters, informed by integration with Leios network simulators.
    

*   **Implementation for Caught-Up Nodes and Testnet Deployment**  
    We will implement Peras for nodes that are caught up, enabling a dedicated testnet to evaluate its behavior and guarantees. Cryptography will be stubbed initially to accelerate testing.
    
*   **Centralized Vote Diffusion (Temporary)**  
    To minimize network impact, votes will initially route through a centralized party. While this introduces a temporary point of failure for Peras, it does not compromise Cardano’s broader safety and liveness guarantees. A decentralized diffusion mechanism will follow.
    

## Canonical Ledger State: Standardizing Cardano’s Ledger

### The Problem

Today, the ledger state in Cardano is defined by internal Haskell code. Its serialization lacks a canonical, stable format. This presents challenges for: 

*   Signing and distributing snapshots 
    
*   Interoperability across node implementations 
    
*   Building third-party tooling
    

### The Proposal

We aim to define a canonical ledger state format that is: 

*   Stable and versioned 
    
*   Documented and tooling-friendly 
    
*   Usable across all node implementations.
    

This will simplify development, enable signed snapshots (e.g., via [Mithril](https://docs.cardano.org/developer-resources/scalability-solutions/mithril)), and facilitate robust integration and conformance testing.

## Black Box Ledger Conformance Testing: Assuring Implementation Integrity

### The Problem

Formal specifications in [Agda](https://agda.readthedocs.io/en/latest/getting-started/what-is-agda.html) offer the gold standard for correctness, but are too complex for widespread testing. Other ecosystems (like Ethereum) use simpler test suites that provide sufficient assurance.

### The Proposal

We propose a black-box conformance testing framework that: 

*   Uses the canonical ledger state format
    
*   Allows new implementations to run transitions and verify results
    
*   Offers tools to generate test cases from existing test infrastructure
    

This democratizes access to conformance testing while maintaining alignment with Cardano’s formal specifications.

## Conformance Testing of Consensus: Preventing Accidental Forks

### The Problem

Cardano’s consensus assumptions are currently backed by the fact that nodes run identical code. With the rise of alternative node implementations, we need alternative methods to ensure consistency between nodes.

### The Proposal

Extract and adapt existing consensus tests to: 

*   Validate new implementations against the consensus protocol
    
*   Ensure network consistency and prevent accidental hard forks
    

This safeguards the integrity of Cardano as it evolves into a multi-node ecosystem.

## Plutus Script Re-Executor: Monitoring Smart Contract Execution

### The Problem

DApp developers lack simple tools to analyze on-chain Plutus executions without maintaining a full ledger copy. Access to historical (spent) UTxOs is limited to ~12 hours.

### The Proposal

Deliver a lightweight monitoring tool that: 

*   Synchronizes with the node to re-execute past Plutus scripts
    
*   Enables enriched analysis via tracing
    
*   Minimizes infrastructure burden
    

This tool enhances developer insight into intelligent contract behavior while reducing operational overhead.

## Genesis Sync Accelerator: Boosting Historical Sync Speeds

### The Problem

[Ouroboros Genesis](https://iohk.io/en/research/library/papers/ouroboros-genesis-composable-proof-of-stake-blockchains-with-dynamic-availability/) allows trustless historical sync via multiple stake pool relays. However, syncing from remote locations or at scale burdens relays and reduces performance.

### The Proposal

Create a tool that: 

*   Downloads blocks and headers from CDNs
    
*   Maintains Genesis trust assumptions
    
*   Falls back to P2P if CDN serves invalid data
    

This approach reduces relay load and accelerates sync for nodes worldwide.

## Canonical Block and Transaction Diffusion Codecs: Simplifying Node Interoperability

### The Problem

Epoch Boundary Blocks (EBBs) and ledger era tags leak implementation details into the network layer. These have confused developers and hinder interoperability.

### The Proposal

*   Remove EBBs from the historical chain
    
*   Replace ledger era tags with clear protocol versioning in CBOR codecs
    

This simplification makes node implementation and interop easier and more predictable.

## Hoarding Node: Capturing Orphaned and Invalid Data

### The Problem

Currently, Cardano discards invalid or orphaned blocks and transactions. This limits: 

*   Debugging
    
*   Forensic analysis
    
*   Monitoring adversarial behavior
    

### The Proposal

Build a “hoarding node” that: 

*   Acts as a standard relay node
    
*   Stores all observed blocks and transactions
    
*   Exposes data via APIs for analysis
    
*   Implements heuristics to avoid storage bloat
    

This tool enhances transparency, robustness, and network monitoring capabilities.

## Block Cost Investigation: Revisiting Protocol Parameters

### The Problem

Parameters such as Δ (max delay for honest block propagation) were set years ago based on Byron/Shelley era assumptions. With complex features like Plutus, actual block validation costs may now exceed these assumptions, introducing risk.

### The Proposal

Investigate worst-case block costs to: 

*   Validate or revise current assumptions
    
*   Build benchmarks to catch future regression
    

This de-risks protocol behavior and supports safer parameter tuning.

## Cardano-Node-Emulator: Maintenance and Modernization

### The Problem

The Cardano-Node-Emulator (CNE) simulates Cardano node behavior and is vital for testing Plutus scripts. However, it has fallen out of sync with recent updates and lacks active maintenance.

### The Proposal

Modus proposes to: 

*   Modernize CNE to align with the latest Cardano APIs
    
*   Continuously maintain it to support competent contract developers
    

This ensures the testing infrastructure remains robust and accessible.

## History Expiry: Trimming the Blockchain Tail

### The Problem

Cardano’s seamless upgrade model comes with a cost: a full 7-year history must be stored and processed by every node, increasing: 

*   Sync time
    
*   Disk usage
    
*   Network strain
    

### The Proposal

Enable history expiry using tools like Mithril to: 

*   Prune history past a checkpoint
    
*   Reduce node hardware requirements
    
*   Eliminate technical barriers for new implementations
    

This makes Cardano more scalable and developer-friendly.

## Why This Work Matters

These engineering initiatives form some of the foundational infrastructure upon which Cardano's future scalability, security, and developer experience will be built. From deploying and experimenting with a functional Peras testnet to enabling trustless historical sync and creating robust testing frameworks, each proposal addresses fundamental priorities that could facilitate the ecosystem's growth.

This is the essential work of building digital infrastructure: strengthening the underlying systems, creating developer tools, and establishing the open-source frameworks that enable future innovation.

As Cardano evolves into a multi-implementation ecosystem, Tweag's contributions become increasingly significant. Our specialized knowledge in consensus protocols, ledger engineering, and distributed systems positions us to tackle complex, interconnected challenges - work that will ultimately help to determine how successfully Cardano scales to serve developers and users worldwide.

[Learn more about our open-source mindset](https://www.tweag.io/opensource) and check out some of our projects.
