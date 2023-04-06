---
title: ZK-SNARK
tags:
  - Zero-knowledge
url: ""
image: ""
image_text: ""
---

Zk-SNARK is an acronym that stands for “Zero-Knowledge Succinct Non-Interactive Argument of Knowledge.” A zk-SNARK is a cryptographic proof that allows one party to prove it possesses certain information without revealing that information.

In this general setting of so-called interactive protocols, there is a **prover** and a **verifier** and the prover wants to convince the verifier about a statement (e.g. that f(x) = y) by exchanging messages.

The generally desired properties are that no prover can convince the verifier about a wrong statement (soundness) and there is a certain strategy for the prover to convince the verifier about any true statement (completeness). The individual parts of the acronym have the following meaning:

• Succinct: verifier run time is exponentially less than running the complete computation

• Non-interactive: there is no interaction. For zkSNARKs, there is usually a setup phase and after that a single message from the prover to the verifier. Furthermore, SNARKs always have the so-called “public verifier” property meaning that anyone can verify without interacting anew, which is important for blockchains.

• ARguments: the verifier is only protected against computationally limited provers. Provers with enough computational power can create proofs/arguments about wrong statements (Note that with enough computational power, any public-key encryption can be broken). This is also called “computational soundness”, as opposed to “perfect soundness”.

• Knowledge soundness: it is not possible for the prover to construct a proof/argument without knowing a certain so-called witness (for example the address she wants to spend from, the preimage of a hash function or the path to a certain Merkle-tree node).
