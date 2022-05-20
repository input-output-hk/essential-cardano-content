---
title: Zero-knowledge proofs (ZKP)
tags:
  - Zero-knowledge
  - ZKP
  - Research
url: ""
image: ""
image_text: ""
---

ZKP is the technology used to support applications within a multitude of settings that require a balance between privacy and integrity. Zero-knowledge proofs ensure that the verifier is not aware of the witness who evidences the truth of the provided statement, which benefits in privacy settings.

Small proof sizes and fast verification time are important for the practical deployment of zero-knowledge protocols. There are several practical schemes from which to choose, with a vast space of trade-offs in performance and cryptographic assumptions:

*   **Non-interactive zero-knowledge arguments (NIZKs)**: this is the most general concept. NIZK can be non-succinct but as a benefit might rely on standard cryptographic assumptions and often satisfy strong security guarantees. 
    
*   **Succinct non-interactive zero-knowledge arguments (SNARGs)**: achieve succinctness at the cost of stronger cryptographic assumptions and often weaker security guarantees. 
    
*   **Succinct non-interactive zero-knowledge arguments of knowledge (SNARKs or sometimes zk-SNARKs)**: these are SNARGs that are also proofs of knowledge and zero-knowledge. The name is also popular because of Lewis Carrol’s nonsense poem “[The Hunting of the Snark](https://www.poetryfoundation.org/poems/43909/the-hunting-of-the-snark)”. 
    
*   **Succinct transparent arguments of knowledge (STARKs)**: transparent here refers to the setup only requiring a trusted hash function. This is beneficial but can come with a performance overhead.
