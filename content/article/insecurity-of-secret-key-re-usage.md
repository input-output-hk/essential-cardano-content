---
title: Insecurity of secret key re-usage
tags:
  - Cryptography
  - Cardano
url: ""
image: https://ucarecdn.com/ca1368d2-232f-40a8-932f-0ba55c8910db/
image_text: Insecurity of secret key re-usage
---

### This blog post explains how to extract the key of an ed25519 key pair if its secret is also used to generate a verifiable random function (VRF) proof. The post provides a script that performs such an extraction over libsodium.

In the pre-blockchain era, the typical advice from cryptographers was ‘Don't roll your own crypto!’. This advice aimed to avoid security pitfalls, which are less likely to exist in rigorously researched inventions. However, the advice was muffled by the accelerated advancement of the blockchain space, where new cryptography was invented and rolled out every now and then. This article re-emphasizes the need for rigorous security analysis of every new cryptographic primitive, by demonstrating how a natural shortcut can lead to catastrophic consequences.

Cryptographers are frequently asked whether a single secret key can be used for different algorithms. This may seem like a convenient shortcut, but it is actually bad practice. It is important to use the secret key only for its intended purpose, even if these are repeatedly modeled as random 32 bytes. When asked this question, the typical answer is ‘no’. However, the reasons given for this answer are often too abstract for engineers. The typical explanation is that security analysis is only done in a standalone setting, which means there are no guarantees of security if the key is used in a way that deviates from its intended purpose.

[Cardano uses ed25519 signatures](https://www.essentialcardano.io/article/new-cardano-cryptographic-primitives-will-bring-greater-interoperability-and-secure-cross-chain-dapp-development) and verifiable random functions (VRFs) to ensure security in cryptographic algorithms. Given their similarly structured public keys, one may be tempted to use the same secret key for both cryptographic primitives. However, doing so can allow an adversary to easily extract the secret key. Note that cryptographic systems used on Cardano are proven secure – see [ed25519](https://datatracker.ietf.org/doc/rfc8032/) and [ECVRF](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-14) – however, only in standalone settings (ie, ed25519 is proven secure in the setting where an adversary has access to signatures only). 
  
> **NOTE: Using the same secret keys for two distinct cryptosystems doesn't necessarily disclose the secret. However, it's a good example of why it's important to be cautious when using the same key for multiple algorithms. If you're unsure that using the same key for two algorithms is secure, it's better to assume that it isn't.**

## Schnorr signatures, predecessors of Ed25519 and ECVRF

[Schnorr](https://en.wikipedia.org/wiki/Schnorr_signature) signatures are the basis of Ed25519 and ECVRF designs. Schnorr signatures have been around for some years, and are deployed widely in many applications. Following [Cardano’s Valentine upgrade](https://docs.cardano.org/cardano-testnet/about/secp), IOG introduced native support for Schnorr signatures over [SECP256k1](https://www.essentialcardano.io/glossary/secp) curve in Plutus. Schnorr signatures are simply [sigma protocols](https://en.wikipedia.org/wiki/Proof_of_knowledge#Sigma_protocols) that are tied to a message. In particular, let _(sk, vk)_ be a key pair such that _vk = sk_ ᐧ _G_ with _G_ being the elliptic curve base point (see annotation 1) that is the generator of a prime order group with prime order _p_. Then, the signature algorithm is defined interactively (between the prover [P] and the verifier [V]) as follows:

![](https://lh4.googleusercontent.com/4O4rU1Z-akscvEmAzZQMnQdGCwLszs4H4w1zGNbP4NYUWzb7hCvoPW7t7pSxAH-h-D8nsIkXYz4vmbyIW_aoYOq-wpeg5NtaGJ55tEbrCxKa-qdveQAL9pcozF9UQ42UbXKvpbERk-QjnLoSMayyfXA)

Note that we have just described an interactive protocol where no messages are involved. We now briefly describe how to transform it into a non-interactive version that signs messages. A typical cryptographic method used for this purpose is the [Fiat-Shamir](https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic) transformation, which replaces the random challenges with outputs of a random oracle. The input to the random oracle is the transcript generated so far. Moreover, to link a signature (as described above) to a message, the message should be included while computing the hash that defines the challenge.

This post describes all algorithms in their interactive version; note that the Fiat-Shamir heuristic can be used to make any algorithm non-interactive. For simplicity, this post omits the specification of messages from the descriptions of Schnorr-like signature schemes.

Subtle deviations from the protocol can be catastrophic. One such example is producing two signatures that share the same value _R_ but a different value _s_. This completely breaks the system (for example, by using an incorrect source of randomness that returns the same value of _k_). With some basic algebraic knowledge at the high school level, it becomes apparent why. Assume there are two valid signatures – _(R, s)_ and _(R, s')_ with _s ≠ s'_. Recall that the values _c_ and _c'_ are known to the verifier, and the latter knows that _s = k + c \* sk_. Given that the value of _R_ (and therefore _k_) is equal in both proofs, the verifier can compute the secret key as:

![](https://lh5.googleusercontent.com/sRjMOs3PPVgqK5rtQ1KRCL0d-_d1zao8b4rDYCxwNKGsluGj9h2ZILrQDXjkJjCEEP3LD1MO4UrpxW64_M--pZmELXC_af4-e8lrJKhyZqCcjoj9hHOVnQj1IFqYB-UsXZFcFKU88ol3e0BbAMum51A)

Fortunately, if the value _k_ is chosen uniformly at random, the above happens with probability 1 / 2^256 which is negligible over the security parameter. 

### Ed25519

The ed25519 signature scheme, proposed by Bernstein, Duif, Lange, Schwabe, and Yang, is a variant of the Schnorr signature scheme designed specifically for curve Edwards25519. The main reason for this is to improve efficiency and security. Although we won't go into the specifics of the curve or its benefits, it is important to note that ed25519 introduces a key difference from Schnorr: its signatures are deterministic. This means that the randomness used in the first step of the prover is generated using a hash function, rather than sampling the value _k_ uniformly at random. The rationale behind this decision is to address the past [security flaw](https://fahrplan.events.ccc.de/congress/2010/Fahrplan/attachments/1780_27c3_console_hacking_2010.pdf) of the secret keys for ECDSA, which resulted from a lack of secure sources of randomness. By computing this value pseudorandomly, developers can rely on the security of the pseudorandom function instead of a potentially unreliable secure source of randomness.

Below we present a simplified version of ed25519, which differs from the standard version but not in any meaningful way for the attack described. Let _KDF_ be a key derivation function (see annotation 2) that takes as input a key and an index, and returns an integer modulo _p_. Let _(sk, vk)_ be a key pair such that _vk = KDF (sk, 0) ᐧ G_. The protocol proceeds as follows:

![](https://lh4.googleusercontent.com/c_4pfEMmBP-EDHumYLItts6kWjLVc1xin7ChHvz3Pl-OwPw7U206aDSjJz9egrSxcyTyuioBtu4Dt-2IxhHRHTrN5qiEpcwXUUPcgXax0I0tnVdUgFxTWjNjMK-rN4ixze6QvhjxuPGxfXZNbv3fqvM)

As one can observe, both Schnorr and ed25519 algorithms are closely related. It's worth noting that in the secret key generation, the elliptic curve base point is not multiplied by the secret key. Instead, the secret key is utilized to derive two scalars. As mentioned earlier, the Fiat-Shamir heuristic can be utilized to make this algorithm non-interactive.

### ECVRF

The ECVRF protocol is another protocol inspired by Schnorr in general and ed25519 in particular, specifically the ECVRF-EDWARDS25519-SHA512-ELL2 scheme in the VRF [IRTF](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-vrf-14#name-ecvrf-ciphersuites) draft. With a VRF, a prover can create a pseudorandom value associated with their private key and prove that they did so correctly. While the specifics of why this is useful or how it is used are not relevant here, it is worth examining how the protocol functions.

In this algorithm, we use a different hash function, _Hs2c_ , which takes an array of bytes as input  and returns a point in the elliptic curve. Again, we simplify the protocol for this blogpost's core goal (extracting the keys of both VRF and Ed25519). Let _(sk, vk)_ be a key pair such that _vk = KDF (sk, 0) ᐧ G_. The protocol proceeds as follows:

![](https://lh6.googleusercontent.com/TGGb3sDbd7CHAjkpwcVEG_74CIitjFtDXOSil2359DZTWw6w8bBubwzKdbEBvClvxV7auBtB7onOj_RqK8AxLy23LKN2mcqkqZ13MCzWAa9oXonjLxFfJaM2-Mm04MccfCBjoPk8HNtRK-qBpyoXWnY)

It's clear that when using the same secret key, both ed25519 and ECVRF algorithms produce the same public key. This might appear to be a convenient way to reduce the burden on users who need to remember multiple keys or to set up complex key derivation mechanisms. However, unfortunately, using the same secret key can have catastrophic consequences.

## Don't share your secrets!

Using the same secret key for both ed25519 and ECVRF can enable an adversary to effectively reveal the signer's secret key. As previously mentioned, the adversary's strategy involves tricking the ed25519 signer into producing the same value of _k_ (and therefore _R_) as the VRF counterpart while having different values of the challenge _c_. If successful, the secret key can be extracted, and this attack is not difficult to carry out.

To execute this attack, an adversary only needs a VRF proof for public key _pk_ and must request an ed25519 signature from _pk_'s owner to sign _L_, which is a public value. The nonces _k_ will be identical in both instances, but the challenges will be different, enabling the adversary to recover the key.

The script below demonstrates the simplicity of the attack. The script takes a VRF proof for any message as input and then requests the owner of the key to sign a specific message using ed25519. This results in the extraction of the secret key. One can also see that the forged signature is accepted by the ed25519 verifier in libsodium.

We start by defining the message we will use for the VRF proof and initializing some variables:

```markup
#define MESSAGE (const unsigned char *) "yup"

#define MESSAGE_LEN 3

// The message that we need to craft in order to extract the key is a value 

// publicly available. However, libsodium does not export the functions to 

// compute it. Nonetheless, it is computed internally. To simplify our lives, 

// we slightly modify libsodium VRF verifier to return the crafted message.

unsigned char crafted_msg[32], proof[80], sig[crypto_sign_BYTES], pk[crypto_sign_PUBLICKEYBYTES];
```

Next, we create a scope for the signer, which we cannot access when faking the signature:

```markup
{

    unsigned char sk[crypto_sign_SECRETKEYBYTES];

    crypto_sign_keypair(pk, sk);

    // Now let's use these keys for vrf generation.

    crypto_vrf_ietfdraft03_prove(proof, sk, MESSAGE, MESSAGE_LEN);

    // Now, we have a proof that consists of 80 bytes that correspond to:

    // * 32 bytes of an EC point that we can ignore

    // * 16 bytes of a challenge C = H(pk, H, Gamma, U, V), where the values

    // of H, Gamma, U and V are irrelevant.

    //  32 bytes of a scalar s' = k + C'  az

    // where k = H(z || m), with z = H(sk)[32..], and az = H(sk)[..32].

    unsigned char random_output[64];

    if (crypto_vrf_ietfdraft03_verify(random_output, crafted_msg, pk, proof, MESSAGE, MESSAGE_LEN))

        printf("failed VRF\n \n");

    // Now we use the same key to create an ed25519 signature for the crafted message. Note

    // that the only 'trick' we are doing is asking the signer to sign a particular message, after

    // she has used the key to create a VRF proof. We do not access the secret key in any other way.

    crypto_sign_detached(sig, NULL, crafted_msg, 32, sk);

    if (crypto_sign_verify_detached(sig, crafted_msg, 32, pk))

        printf("failed on ed25519 generation");

    // Now we should have a 64 bytes signature that corresponds to:

    //  first 32 bytes represent the point R = k  G, where k = H(z || m)

    // where z = H(sk)[32..]

    //  second 32 bytes represent a scalar s = k + az  HRAM

    // where HRAM = H(R || pk || m), and az = H(sk)[..32]

}
```

As explained earlier, the issue arises due to the difference in challenges between the two algorithms. So, what does this mean? It means that an adversary can extract the secret key. To be more precise, we have the following:

`s - s' = (c - c') * az <=> az = (s - s') / (c - c')`

Let's try to extract the key:

```markup
unsigned char c[64], cprime[32];

// First we need to compute c, as it is not given in the ed25519 signature. This is done

// using public values.

crypto_hash_sha512_state hs;

crypto_hash_sha512_init(&hs);

crypto_hash_sha512_update(&hs, sig, 32);

crypto_hash_sha512_update(&hs, pk, 32);

crypto_hash_sha512_update(&hs, crafted_msg, 32);

crypto_hash_sha512_final(&hs, c);

crypto_core_ed25519_scalar_reduce(c, c);

// Now we simply copy the challenge into a 16 byte string

memcpy(cprime, proof + 32, 16);

memset(cprime + 16, 0, 16); // Just for sanity.

// Now we have all we need, let's extract the secret.

unsigned char cminuscprimeinv[32], extracted_skey[32], extracted_pkey[32];

crypto_core_ed25519_scalar_sub(extracted_skey, sig + 32, proof + 48);

crypto_core_ed25519_scalar_sub(cminuscprimeinv, c, cprime);

crypto_core_ed25519_scalar_invert(cminuscprimeinv, cminuscprimeinv);

crypto_core_ed25519_scalar_mul(extracted_skey, extracted_skey, cminuscprimeinv);

crypto_scalarmult_ed25519_base_noclamp(extracted_pkey, extracted_skey);
```

Now, let's create a fake ed25519 signature for the message `{0}`, which was not signed before.

We cannot use the normal API because the algorithm uses the preimage of an extension of the key we have extracted. With the algorithm described above, we cannot access this preimage that the API expects. However, it's not necessary to have this ‘missing’ data to forge a signature as we see below. It's worth noting that as a result, the adversary can also create invalid VRF proofs.

```markup
unsigned char nonce_fake[32], challenge[64], sig_fake[64], reduced_c[32];

crypto_hash_sha512_state hs_f;

unsigned char msg[32] = {0};

// commitment

crypto_core_ed25519_scalar_random(nonce_fake);

crypto_scalarmult_ed25519_base_noclamp(sig_fake, nonce_fake);

// challenge

crypto_hash_sha512_init(&hs_f);

crypto_hash_sha512_update(&hs_f, sig_fake, 32);

crypto_hash_sha512_update(&hs_f, extracted_pkey, 32);

crypto_hash_sha512_update(&hs_f, msg, 32);

crypto_hash_sha512_final(&hs_f, challenge);

crypto_core_ed25519_scalar_reduce(reduced_c, challenge);

// response

crypto_core_ed25519_scalar_mul(sig_fake + 32, reduced_c, extracted_skey);

crypto_core_ed25519_scalar_add(sig_fake + 32, sig_fake + 32, nonce_fake);
```

The fake proof we generated could not be generated using the exposed API, but we can still use the usual API to verify it. This means there is no need to modify the verification algorithm to accept the crafted signatures:

```markup
if (crypto_sign_verify_detached(sig_fake, msg, 32, pk))

    printf("Failed to fake ed25519\n");

else

    printf("Successfully faked an ed25519 sig\n");
```

After running the script (details provided in the [README.md file](https://github.com/input-output-hk/blogpost_breaking_ed25519_vrf/blob/main/README.md)), it becomes apparent that we successfully faked the ed25519 signature!  

## Some simple fixes

Although cryptographic algorithms should not be designed to share secret keys, it is unfortunately something that often attracts engineers. One proposal to address the issue of deterministic nonce generation (which also caused [issues](https://www.reddit.com/r/cryptography/comments/vextlk/40_unsafe_ed25519_libs_where_private_key_can_be/) in some libraries with incorrect APIs) was to combine determinism with a secure source of randomness. This approach ensures that the algorithm would be flawed only if both sources failed.

Another simple solution is to use domain separation when computing the value of `k`. This involves using padding in the hash function, similar to the way `suite_string` is used in the output computation of the VRF (see standard draft), to ensure that there is no match between the randomness used in the VRF and that used in ed25519.

However, as suggested in this blog post, the best solution is to avoid sharing secret keys among different cryptosystems altogether.

## Acknowledgments

Thanks to my wonderful colleagues, Gamze Kilic, David Nevado, and Vanishree Rao for their comments and review! 

## Annotations

1.  For a non-expert reader, it is not necessary to understand the technical details behind the extraction of _sk_ from _pk_. Rather, one should trust that this process is computationally difficult and that operations over elliptic curve points are associative and cyclic.
    
2.  A key derivation function can simply be seen as a function that, given a secret seed, derives some secret value in a deterministic way.
