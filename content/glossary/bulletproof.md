---
title: Bulletproof
tags:
  - Zero-knowledge
url: ""
image: ""
image_text: ""
---

Bulletproofs form part of the family of distinct _Zero-knowledge Proof_ systems, such as Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (zk-SNARK); Succinct Transparent ARgument of Knowledge (STARK); and Zero Knowledge Prover and Verifier for Boolean Circuits (ZKBoo). Zero-knowledge proofs are designed so that a _prover_ is able to indirectly verify that a statement is true without having to provide any information beyond the verification of the statement, e.g. to prove that a number is found that solves a cryptographic puzzle and fits the hash value without having to reveal the _Nonce_

The Bulletproofs technology is a Non-interactive Zero-knowledge (NIZK) proof protocol for general _Arithmetic Circuits_ with very short proofs (_Arguments of Knowledge Systems_) and without requiring a trusted setup. They rely on the _Discrete Logarithm_ (DL) assumption and are made non-interactive using the _Fiat-Shamir Heuristic_. The name “Bulletproof” originated from a non-technical summary from one of the original authors of the scheme’s properties: “_Short like a bullet with bulletproof security assumptions_”

Bulletproofs also implement a Multi-party Computation (MPC) protocol, whereby distributed proofs of multiple _provers_ with secret committed values are aggregated into a single proof before the Fiat-Shamir challenge is calculated and sent to the _verifier_, thereby minimizing rounds of communication. Secret committed values will stay secret.

The essence of Bulletproofs is its inner-product algorithm originally presented by Groth and then further refined by Bootle et al. The latter development provided a proof (argument of knowledge) for two independent (not related) _binding_ vector _Pedersen Commitments_ that satisfied the given inner-product relation. Bulletproofs build on these techniques, which yield communication-efficient, zero-knowledge proofs, but offer a further replacement for the inner product argument that reduces overall communication by a factor of three.
