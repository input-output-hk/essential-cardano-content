---
title: Why Secure Crypto Key Management is Crucial for Cardano Project Integrations
tags:
  - Emurgo
  - Stablecoin
  - anzens
  - Cryptography
  - Wallet
url: ""
image: https://ucarecdn.com/f7a4eda0-73a8-490d-82fb-cdb0c2839996/
image_text: A picture about Cardano crypto key management
---

## **Intro**

In the world of blockchain, private keys are used to authorize various types of transactions, like withdrawing assets or accessing wallets and accounts.  What are they?  Private keys are essentially secret code that is linked to a specific digital asset address or set of addresses and used to sign transactions on the blockchain network.  The owner of the private key has complete control over the associated digital assets, and it is crucial to keep keys secure to prevent unauthorized access or theft of the assets. 

For Cardano projects and businesses, those that ignore safeguarding their private keys do so at their own peril.  Having a robust crypto key management system in place prioritizes the safety of user funds, mitigates against integration risks with other Cardano projects, and safeguards capital investments by providing:

*   Increased security for your users
    
*   Reduced risk of failure or human error 
    
*   Ability to scale
    
*   Compliance with regulatory requirements (generally for offerings extending beyond a crypto-native world, like our [Anzens platform](http://anzens.com/))
    

For this article, we examine the importance of crypto key management and the various ways that projects and businesses can secure private keys – some of which are not readily available for projects building on Cardano at this time.  We identify why the challenges faced by Cardano projects exist, discuss how we built customized architecture for the Anzens USDA platform to work around the challenges, and finally encourage the Cardano community to join us as we promote new solutions for the ecosystem.  

By sharing the insights that we’ve learned throughout the Anzens USDA stablecoin development, we hope to contribute to the overall success and adoption of the Cardano ecosystem.

## **How projects can secure private keys**

### **_Keeping control: Self-custody_**

Self-custodying digital assets means one has complete control of their wallet’s private keys. There are pros and cons to self-custodying your crypto. For example, when a person decides to take complete control over their assets, they have the ability to freely move their assets without third-party involvement, which is inevitably quicker.  On the other hand, self-custody requires technical knowledge of this process and the risk of exposing your sensitive information as it relates to your digital assets. Normally, self-custody is a single signature arrangement but it could also involve multiple signatures by various parties – normally within the same organization.  

**Single signature**

**![Single Signature 1](https://emurgo.io/wp-content/uploads/2023/03/Single-Signature-1.jpg "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 1")**

**Multi-signature**

**![Multi Signature](https://emurgo.io/wp-content/uploads/2023/03/Multi-Signature.jpg "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 2")**

### **_Sharing control: External co-signers and third-party custody_**

Signing arrangements that involve external co-signers require that owners keep two private keys and give up control to at least one other private key, normally outside of the organization.

**External co-signers**

**![External Co signers](https://emurgo.io/wp-content/uploads/2023/03/External-Co-signers.jpg "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 3")**

Third-party custody means an owner has relinquished all access and custody of private keys to a third party.  The third-party will custody and store your crypto assets without the individual or organization managing their own assets. Those who feel comfortable with allowing outside entities to manage their assets have the freedom of not worrying about their own assets. Yet, projects who utilize third-party custody face risks of potential collusion, illegitimate ownership claims by third parties working against their interests, and insolvency, or bankruptcy risks of their custodian. If an outside factor limits or disrupts the third party’s operations, your assets could even become lost.  

**Third-party custody**

**![Third Party Custody 1](https://emurgo.io/wp-content/uploads/2023/03/Third-Party-Custody-1.jpg "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 4")**

### **_Multi-party computation (MPC) custody_**

In an MPC-based key management arrangement, the private key is divided into several parts and distributed among multiple parties, also known as “shares”. These shares are then used collectively to generate the private key, which is used for signing transactions.  A few benefits to MPC custody include no point of failure and full user control.  
  
However, like any security solution, MPC custody is not foolproof and has some potential vulnerabilities. For example, if the MPC implementation is flawed or the parties involved in the custody agreement collude, the security of the assets or data could be compromised. In addition, the parties must be able to communicate securely and reliably to ensure that the custody arrangement functions as intended.  
  
Overall, MPC custody is considered to be a highly secure method of protecting digital assets and sensitive data, but it is important to implement it correctly and be aware of potential vulnerabilities. It is also recommended to use additional security measures, such as regular audits, to further enhance the security of MPC custody solutions.

**![Multi Party Computation](https://emurgo.io/wp-content/uploads/2023/03/Multi-Party-Computation.jpg "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 5")**

#### **Multi-layer security solutions**

Multi-layer security solutions are sophisticated key management infrastructures that utilize a combination of MPC plus other hardware and software technologies to create layers of security to mitigate crypto key risks.  

These Key Management Systems (KMS) are typically proprietary architectures offered to businesses by KMS providers, such as Ledger and Fireblocks.  

As we discuss more below, KMS providers have yet to expand their offerings to include support beyond Cardano’s ADA, resulting in a lack of support for Cardano Native Assets.    

**💡_For additional terms, check out our helpful Key Management glossary_💡**

**Hardware Security Module (HSM)** \- a specialized hardware device designed to manage digital keys, perform cryptographic operations, and protect sensitive data in a secure and tamper-evident manner.

**Key Management System (KMS)** \- a software-based solution designed to manage cryptographic keys and provide a secure way to store and use them for various cryptographic operations. KMS is often used for managing encryption keys, signing keys, and other types of keys used in cryptographic protocols.

**Software Guard Extensions (SGX)** \- a hardware-based security technology developed by Intel. It provides a secure enclave for applications to run in, isolating them from the rest of the system and protecting their data and code from unauthorized access or modification.

## **Cardano’s architecture and key management infrastructure**

Now that we’ve discussed the various arrangements to secure private keys, we’ll turn next to Cardano’s innovative architecture and discuss the surrounding infrastructure supporting key management on Cardano.  

### **What we’ve learned**

What we’ve learned from developing the USDA stablecoin for the Anzens platform is that building a robust key management system on Cardano is currently a challenge.  One of the main issues we encountered is that most of the available KMS/HSM/SGX solutions do not support the [elliptic curve cryptography](https://www.essentialcardano.io/glossary/elliptic-curve-cryptography-ecc) (ECC) used by Cardano, which provides strong security with shorter keys and signatures.  Moreover, these solutions do not support all of the capabilities native to Cardano, such as [native assets](https://docs.google.com/document/d/1zveN5AFFSq2SkTHoj6zKBd5qfog-M7oo-Qv2QnZil3A/edit), staking, and pool management, making holistic integration difficult.

Although KMS providers have sophisticated solutions for generating, distributing, and managing crypto keys at scale, integrating them with Cardano projects would require customized architecture, which is a significant effort and financial commitment. Therefore, until KMS providers innovate and begin supporting Cardano’s architecture, these options are not currently available to projects building on Cardano.

[Read more: How Cardano’s Fiat-Backed USDA Stablecoin Handles Depegging](https://emurgo.io/how-cardano-usda-stablecoin-handles-depegging/)

### **What it means & what we’re doing about it**

As the developers of Cardano fiat-backed stablecoin USDA, we must be vigilant to threats and opportunities for unauthorized access to our private keys.  Take as an example, the importance of keeping safe the private keys that authorize the minting of USDA stablecoin, which is meant to occur based on user demand with a corresponding cash deposit in the user’s Anzens account.  Illegitimate minting of USDA stablecoin could occur if an unauthorized person gains access to these keys. As you can imagine, one essential area (among others) that we have spent a great amount of time on is the key management system that will keep our private keys safe and secure.  (Additional safeguards that are in place to protect against illegitimate USDA minting are not the subject of this blog and we are looking forward to it being revealed in our technical whitepaper to be released later on.)

To ensure that Cardano’s USDA stablecoin on the Anzens platform is one of the most secure and robust projects on the market, despite the lack of KMS provider options available, we have taken two key steps.

Firstly, we have invested in developing a customized technology infrastructure (tech stack) to integrate with one of the top Key Management Solutions (KMS) providers on the market.  This means that our private keys used for signing transactions related to USDA stablecoin will be secured using some of the best technology and systems available within the Cardano ecosystem and in the industry as a whole with a combination of MPC and layered security measures. 

Secondly, as a division of EMURGO, a founding entity of Cardano, we are engaging with KMS providers to encourage them to naturally support Cardano’s native assets, so that new architecture could be built for integration.  By showcasing the growing user base on Cardano, we hope to broaden the perspectives of KMS providers to support Cardano, and in turn, save other projects building on Cardano from the need to develop custom tech stacks.  
You can find more information on the data we have gathered in-house on Cardano in the [PDF here](https://docs.google.com/presentation/d/1yHM1hRRKkQwHiMhukVF16L57p2N8kjkMr03lCNt8C5Q/edit#slide=id.p).  Screenshots have been provided below for ease of reference.

**![image](https://emurgo.io/wp-content/uploads/2023/03/image-1024x541.png "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 6")**

**![image 3](https://emurgo.io/wp-content/uploads/2023/03/image-3-1024x552.png "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 7")**

**![image 2](https://emurgo.io/wp-content/uploads/2023/03/image-2-1024x555.png "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 8")**

**![image 1](https://emurgo.io/wp-content/uploads/2023/03/image-1-1024x565.png "Why Secure Crypto Key Management is Crucial for Cardano Project Integrations 9")**

We encourage Cardano projects and businesses to join us in starting conversations with KMS providers to support Cardano Native Assets, just like we’re doing. 

The security of private keys is critical to our users, project integrations, and capital investments – so much so that as the developers of Anzens USDA stablecoin we invested capital to build custom tech architecture to integrate with a top KMS provider.

Let’s work together to create a brighter future for Cardano and emphasize why good crypto key management is crucial for all projects building on Cardano! 

## **About USDA, Cardano’s Native Fiat-Backed Stablecoin**

[Join the USDA stablecoin waitlist](https://www.anzens.com/)

USDA – Cardano’s first USD-backed stablecoin for the ecosystem – is scheduled to launch in early 2023 and bring value to Cardano’s Web3 ecosystem of decentralized applications. USDA will be a native token to the Cardano blockchain that is backed 1:1 by real-world reserves. It’s meant to be a stable asset that can unlock fast global transactions without legacy banking and payment infrastructure delays. USDA is the key that will unlock all of the future use cases and applications that will be available on Anzens.

Join the waitlist now at [https://www.anzens.com](https://www.anzens.com) to be ready for USDA.

\*This article originally is [here](https://emurgo.io/why-secure-crypto-key-management-is-crucial-for-cardano-projects/).

**About USDA**

*   Official Homepage: [anzens.com](//anzens.com)
    
*   Twitter: [@AnzensOfficial](http://twitter.com/anzensofficial)
    

**About EMURGO**

*   Official Homepage_:_ [emurgo.io](//emurgo.io)
    
*   Twitter (Global): [@EMURGO\_io](https://twitter.com/emurgo_io)
    
*   YouTube: [EMURGO channel](https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ)
    
*   Discord: [EMURGO Community](https://discord.com/invite/AWEp2SG437)
    
*   Facebook: [@](https://www.facebook.com/emurgo.io/)[EMURGO.io](//EMURGO.io)
    
*   Instagram: [@EMURGO\_io](https://www.instagram.com/emurgo_io/)
    
*   LinkedIn: [@EMURGO\_io](https://www.linkedin.com/company/emurgo_io/)
