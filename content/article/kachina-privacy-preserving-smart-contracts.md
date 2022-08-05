---
title: "Kachina: privacy-preserving smart contracts"
tags:
  - Research
  - Smart Contracts
  - Privacy
  - Decentralization
url: ""
image: https://ucarecdn.com/127c5d30-5c01-4183-bddc-7b3a22156fda/
image_text: "Kachina: privacy-preserving smart contracts"
---

### Leveraging ZK Snarks to enable privacy-preserving smart contract functionality without sacrificing decentralization characteristics

Smart contracts present a standard approach to expressing complex interactions between two or more parties willing to exchange currencies or data in a decentralized way. Smart contracts are effectively automated digital agreements on a blockchain. Written in code, they can track, verify and execute the binding transactions of a contract when predetermined conditions are met. To create a smart contract expressing such conditions, developers use programming languages. The contract code is stored on, and distributed across, a decentralized blockchain network, making it transparent and, if desired, irreversible.

In this blog post, we discuss Kachina – a privacy-preserving smart contract solution developed by Input Output Global (IOG) in collaboration with the University of Edinburgh. It enables users to achieve privacy-preserving and general-purpose smart contract functionality without sacrificing decentralization characteristics.

## Preserving privacy in smart contract deals

The transparency and public settings of most smart contract ledgers make contract conditions visible to everyone. While transparency is one of the strongest advantages of blockchain technology, privacy remains essential for applications working with sensitive data.

Developers can use several cryptographic techniques to ensure increased privacy in smart contracts. Zero-knowledge proofs (ZKP) and secure computation are two examples. Motivated by such cryptographic techniques, several solutions satisfying various definitions of privacy and requiring trust assumptions appeared. Examples include Zexe, zkay, Hawk, Zether, Secret Network, and others. The most expressive of these solutions, Hawk and Secret, rely on trust assumptions, significantly limiting the level of decentralization that they could achieve. Hawk assumes a small, fixed set of participants at the core of the system, while Secret relies on Trusted Execution Environments (TEEs), a technology with an extensive history of privacy-damaging attacks. These techniques fundamentally clash with the basic principles of a decentralized blockchain platform.

## Kachina: foundations of private smart contracts

Kachina identifies a large _class_ of distributed computations expressible as smart contracts with privacy guarantees, which developers can implement without additional trust assumptions.

A smart-contract protocol relies only on zero-knowledge succinct non-interactive arguments of knowledge (ZK Snarks) to provide privacy. The privacy guarantees of this protocol are proven in the Universal Composability (UC) security framework through mathematical modeling and proofs. The protocol’s primary goal is to provide a sufficiently low-level and general-purpose basis for further privacy-preserving systems without requiring the underlying system to be upgraded with each new extension or change.

Kachina allows contract authors to bridge the gap between the blockchain and users’ local machines ­– these are represented through two independent states, a public and private state, respectively. A contract can update both the on-chain (and shared) public state and the off-chain (and local) private state together. Parties then prove in zero-knowledge that they update the public state in a permissible way: they provide details on a private state's existence and inputs for which this update makes sense.

Kachina contracts also ensure:

*   **Concurrency** in a privacy-preserving manner. Kachina achieves greater concurrency through the novel concept of state oracle transcripts. These are records of operations performed on the contract’s state that interact with oracle queries. Contract authors can optimize conflicting transactions, ensuring minimal leakage while still allowing reorderings.
    
*   Efficient **modular construction**. Kachina is designed to be deployed at scale. Previous works using zero-knowledge do not explicitly maintain a contract state. Kachina allows access to the state indirectly through oracles specified by the contract. This indirect access ensures greater scalability, and as a result, the complexity of what must be proven is under the full control of the contract author and can be optimized.
    

In the research paper, IOG demonstrates the versatility of the Kachina protocol in the case study of private payments. The team formally specifies a private token contract through its transition and leakage functions. This contract supports private fund transfers, balance queries, and asset creation.

While the proposed design is mostly theoretical, Kachina proves the possibility of creating privacy-preserving smart contracts under real-life constraints:

*   The use of state oracles allows moving most computationally hard or storage-intensive operations outside the zero-knowledge proof, which reduces its cost.
    
*   While the zero-knowledge proof system must still be universal, ZKP constructions exist and are practical to use in the proposed setting.
    

For more details, examples, and contract samples, read ‘[Kachina – Foundations of Private Smart Contracts](https://iohk.io/en/research/library/papers/kachina-foundations-of-private-smart-contracts/)’.

*I’d like to thank [Thomas Kerber](https://iohk.io/en/team/thomas-kerber) for his input and support in preparing this blog post.*
