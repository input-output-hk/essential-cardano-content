---
title: What Vasil upgrade brings to Cardano
tags:
  - ada
  - vasil
  - Hard fork
  - Cardano
url: ""
image: https://ucarecdn.com/e00aaa08-6423-47cf-a995-8a306b99a6be/
image_text: What Vasil upgrade brings to Cardano
---

The IOG team doesn’t care if it’s a bear or bull market and is constantly improving the Cardano protocol. What matters is the long-term vision. This way the team delivers what the community expects. Let’s take a look at what the long-awaited Vasil upgrade brings to Cardano.

### **Updates are the future**

No digital technology can do without a team that fixes bugs and brings major improvements from time to time. Blockchain is a technology and it needs to be improved, as only increasing efficiency, new capabilities, and reducing costs for users will bring long-term success in the form of wider adoption. This is true for both the current IT giants and for blockchain technology, which came into the world more than 10 years ago as very inefficient. If a blockchain network is one day to be used by hundreds of millions of users per day, continued innovation is essential.

Cardano is designed to be able to innovate regularly without interruption. Cardano is a global network, so it is not possible to temporarily shut it down to update the network. The team has found a way to make updates while not impacting the use of the network. They created a hard-fork combinator tool to do this. The hard-fork combinator allows updates to be deployed without restricting usage. Users won’t even notice that the improvements have been deployed. However, they can start using them immediately.

The Vasil upgrade brings significant performance and capability enhancements to the Cardano protocol. [The upgrade is included in Cardano node version 1.35.0](https://cexplorer.io/versions). The most important improvement in the Vasil upgrade is mainly Diffusion pipelining, which will affect better scalability. There are also several CIPs (Cardano Improvement Proposal) that are related to the Plutus platform.

### **Diffusion pipelining**

Diffusion pipelining streamlines the propagation of information about newly produced blocks among participants in a Peer-to-Peer network. This enhancement allows the distribution of block information before the block is fully validated on a node. This makes it possible to parallelize block validation and distribution.

The throughput of the network can be made more efficient by increasing the block size and decreasing the interval at which new blocks are created. More information, for example, transactions, can be inserted into a larger block. The more frequently blocks are created, the more user requests will be processed in a given time.

Increasing block size and decreasing block size has limitations due to the capabilities of the Internet. Cardano is a global network with nodes all over the world. If a node creates a new block in, for example, Europe, the block must gradually make its way through other nodes to Asia, South and North America, Australia, and other places. Each individual node validates the information before it can distribute it further to its peers. This means that some time called Delay elapses before the block reaches at least 95% of the nodes in the network. This time is at most 5 seconds in a Cardano network. Delay set to 5 seconds is the time needed to guarantee the propagation of a block whose size does not exceed 2 MB.

Obviously, the bigger the block, the longer it will take to validate it (CPU time) and therefore the longer it will take to distribute it. In the Cardano network, it is necessary to validate not only transactions but also Plutus scripts. Validating scripts is more computationally intensive than validating transactions. As the block size grows, the number of scripts in it may grow, so the time to validate the whole block will also grow.

Note that the block time must be set to a longer time than the Delay to allow sufficient margin to propagate the block through the network. In the case of Cardano, the block time is now set to 20 seconds. If the time to distribute the block can be reduced, the block time can be gradually reduced as well. This will result in higher throughput.

How is the validation of blocks actually done? For simplicity, you can think of each node as having three layers. At the very bottom is the network layer, which receives and sends data over the Internet. The network layer can receive and send blocks. A block can be processed in parts, i.e. as a block header and block body. The second layer is the consensus layer. At this level, validation of the block header and body takes place. Validating the block body is more computationally intensive than validating the header. The third layer is the blockchain, which receives valid blocks. You can think of it as information moving from the bottom layer to the top. Only valid blocks get into the blockchain. Invalid blocks will be discarded by consensus, so they will not be stored in the blockchain or distributed further into the network.

Let’s now take a simplified look at how a block is distributed in a Peer-to-Peer network. Imagine that a block producer has just created a new block. We’ll look at what the block validator has to do. The block producer sends the block header to the block validator. The block validator must verify that the header complies with the protocol rules. For example, it must verify that the block producer was indeed the chosen slot leader (proof must be provided), that the digital signature is correct, and that the new block correctly references the previous block. If the block header is in order, the block body is also downloaded. The block header contains a reference to the block body. The block validator verifies that the reference is correct and if so, can validate transactions and execute Plutus scripts. If the block body is correct, the block validator can add the block to its version of the blockchain and further distribute the block to the network to the next peer (next block validator).

![](https://lh6.googleusercontent.com/EAje46H5qfX4MGGRPe78WRGd7GyQjN6YMoNogSkSd-A1MTbbwafceNyKIk7xg598u7gzQptPfqpwHZMReKWxhsDuCHPfVhTSEao0w0s2MRaGQxP2fVKPiLmWdKMJQyQfKdTBfuKqM5Ryci835gaUl90)

Note that each block validator must validate both the block header and the block body before the block can be redistributed. The total time required to distribute a block to the entire network would be obtained by multiplying the average validation time on one block validator by the number of hops in the network.

Diffusion pipelining will speed up the distribution of blocks in the network by having the block validator send the block body to the network before validating the contained data. The block validator only validates the reference between the header and body and if it is OK, it immediately propagates the block. The validator must verify that it has received the block that belongs to the received header. Validating a reference (header’s body hash) takes only a short time compared to validating the rest of the body. This means that the total budget for distributing the block to the entire network is reduced by the time that individual hops would have spent validating the block body. In other words, the validation of the block body and the block distribution are done concurrently. Diffusion pipelining increases the speed of data availability.

![](https://lh6.googleusercontent.com/0Wp44KY7ps4gBA8AMXwr7hQn1gK9s0kjAoaf0G-30UTQkvOrYU_D6_D2go_4AnFH_qGWD18NTfTr4h98N79L_kixHIKKncKuaIaIbyR4NR8JK5kI2qaUDDykgsNtqWYSS21rUH6X4SH2Pxho3HMHoXQ)

Note that only the block producer (slot leader) validates the block body at the beginning of distribution to the network. All other nodes distribute the entire block after validating only the block header and the reference in the block body.

Incomplete blocks are not distributed in the network because if the block validator does not receive a block body with a correct reference, it discards the entire block. If the reference in the block body is correct but the subsequent validation of the body fails, the entire block is discarded by honest nodes.

Note that a change at the network level has no significant effect on consensus. All the necessary validation to accept a block and add it to the blockchain is done in the same way as before the upgrade. Diffusion pipelining increases the speed of block propagation in the network, opening up opportunities for increasing block size and potentially reducing block time.

Let’s calculate how much faster the block is propagated from the block producer through the 4 block validator if the header validation takes 50 ms and the body validation takes 250 ms. We will count the block production in the total time since the producer has to validate the body. Without Diffusion Pipelining, the validation of the whole block takes 300 ms at each node. So the propagation time from the block producer to the fourth block validator takes 5 \* 300 ms, which is 1500 ms (1.5 s).

With Diffusion Pipelining, validating a block takes only the time needed to validate the header (50 ms) and verify the reference between the header and the body of the block, counting 5 ms. Only 55 ms is required for the block to be sufficiently validated and distributed to the peer. The total block distribution time will take 300 + (4 \* 55), which is 520 ms.

![](https://lh6.googleusercontent.com/dJ9VCAR3lRkysE66pIEL6LXR1K4Lan-7AYAGTw6TFZsjS-3yC8yDewQXAn7TQR3XIVeeeJJIFy-Y2W6MLyFt0_UkWOvfOpOwOdsmBpoIvBdx7fO6UASwxZUp1rNW-OMI2wGKV8YJNknImDsL8_t_OTA)

The following table shows the improvements that can be achieved through the upgrade. The last line shows the data for Asynchronous Validation (AV). AV is not part of the Vasil upgrade and is another possible enhancement that extends Diffusion pipelining.

![](https://lh3.googleusercontent.com/_zyRpa51ZmYjON0qBcPHsMWrPl4gN6OJq3840tP1Ft8PL_acjEdjuP04MHwVw46DBoHtQEhxFaEHG6ByPrvmel0EuDYYXCjTpwyESqLVFfPZfRbwOZSE3NSad488WxmG5d_jilseGhWWebKbrXhNxDk)

**CIPs related to the Plutus platform**

Let’s start with [CIP-32](https://cips.cardano.org/cips/cip32/), which refers to Inline Datums. Extended UTXO allows users to optionally add arbitrary user data in JSON-like format to UTXO. This data is called Datum. The Datum will allow developers to give scripts state-like functionality. User data can be considered as a local script state. This state has only local validity as it is associated with a specific UTXO.

Currently, Datum is implemented by attaching hashes of datums to outputs, and requiring that the spending transaction provides the actual Datum. The data from the spending transaction is verified by making a hash that must match the hash that is stored in Datum.

![](https://lh5.googleusercontent.com/baT7KgDxACAx8T_Ijy76TgddJlV6BkXSC7BAhF7zKEWFfUD7sELEeBTdq7-fPvEiZaOWawgy_OPVoZ3I6x_2pFM4kRMsnvk6RRQ2XeAe7lKWHkDTYv7YKHPTSm7migvSaajYxeK8lJcrTVJKom24vg4)

The advantage is the space-saving in the blockchain since the Datum is just a hash to the data, which can be arbitrarily large. The disadvantage is that the data, whose hash is the same as the hash in Datum, must be provided in the transaction. Let’s add that, in theory, the data can be, for example, just a short number that can be smaller than the hash. In this case, it would be more convenient to have the data directly in Datum rather than a hash.

A Datum contains data that represents some application logic. The data in Datum is inserted by the party that creates the output by the Plutus transaction. The spending party must understand this application logic, i.e. it must understand the contents of the Datum, and this is not possible without communication with the party that created the output. The communication must take place either off-chain or by another way on-chain. This might be inconvenient for the spending party.

CIP-32 proposes that the Datum could either contain the data directly (inline data) or a hash of the data, as it is now. Plutus transactions allow you to choose one of the approaches.

![](https://lh6.googleusercontent.com/ivA57VCCFXQ5V-3aYDiy0BXA22ATO6jCen8X3zE84dRK1ylxwyBFCkoE8mATWnNJQQg6x9wsZiAlLrp8obFNXuAY1p_IZgTTVGurtSlLBg4x12ZtnLqoei0I2k8-5ZlOWs2o2A12v--Ri7IN_64b7pE)

If the data were directly in the Datum, there would be no need to insert the data into spending transactions. Remember that the user can still use Redeemer as input for the Plutus script.

![](https://lh4.googleusercontent.com/TXe1_4CK3TXN4_oIozsEmsMrMHoUGH-uJBkGXhUMJMN2PeuTp80EVEbqq5MPbGF35k4xcANsHTx7sM8cUtMfH8SBEIh4M40701TSM7k8dxx-PPzLEKJjkEzn_gjAsbZf8-yLgGApS4LNxD5wwbYDWfA)

This new approach to Datum will make dApp developers’ jobs easier, especially when combined with CIP-31.

[CIP-31](https://cips.cardano.org/cips/cip31/) proposes to create a new kind of input, a reference input, that would allow you to look at the output without having to spend it. This will allow access to the information that is stored in the blockchain in the form of Datums without having to spend and recreate the UTXOs that are associated with Datums. In addition, it will be possible to check the value related to reference input.

The Datum essentially provides a way to store data on the blockchain and access it. You can look at it as a source of information. Unfortunately, access to data in Datum is currently limited in many ways. In order to access and use the information, you must spend an output that is associated with the Datum.

The application may need to use the information and if it wants to keep it for future use, it must create a new output with the same information. The disadvantage is that new output is created, so if someone else wants to access the information, they cannot use the old output, but the newly created one. However, the new output is created after the new block is added. In practice, this means that some applications are limited to one operation per block.

Moreover, if a party wants to look at the information in Datum and is forced to spend an output, then it means that the spend conditions must be met and the party must consider what to do with the funds. This is inconvenient and most importantly expensive.

CIP-31 is going to change it. The author of a transaction specifies inputs as either spending inputs or reference inputs. A reference input is a transaction input, which is linked to a particular transaction output as normal, except that it references the output rather than spending it.

In other words, you now have to pay the transaction fee to get information from Datum since it is necessary to spend the output. After the Vasil upgrade, you can get the information almost for free in the context of spending transaction that is going to spend other UTXOs. Note that even if a transaction contains an input reference, it must still spend at least one output. So the transaction fee must always be paid.

Reference output is not taken into account when balancing a transaction, i.e. when checking if the value on the input is the same as the value on the output of the transaction. This means that spending conditions for reference output are not checked at all. The reference output remains in the active UTXO set for future use. Importantly, reference inputs are visible to scripts, so the data from the Datum of these reference inputs can be used as input for the script’s decision logic.

The script receives information about transactions through the script context. Newly, it receives additional information that a list of reference inputs can be included. This way the script will know how to work with reference inputs correctly.

![](https://lh3.googleusercontent.com/cQOil2ztqKDS1Sqs3gwWOl8Um3fcxPPPe6JcU9EzoOwRQmuRiS9CSsOKDGNJdCUXyubCRFoCQZEt4sv5sPiCx9k0460RxhyFvUxiskOcNZ2K8Knx27RWB4c1db__B3lZbTSF8vLJkCuDJHV5Bo1URTg)

The transaction has as input a UTXO that is planned to be spent and at the same time can also have a reference input. Reference input can be used during the execution of the Plutus script. After validation and inclusion of the transaction in the block, the UTXO is spent, but the reference input remains unchanged and can be accessed by another party afterward. The information in Datum is thus available for a longer period of time for multiple users.

For example, applications can check the state (Datum, or locked value) without having to consume the output. On-chain data providers can store arbitrary data in Datum and other scripts (applications) can access that data. There is only one payment for storing the data on the blockchain, and then it will be available to others.

[CIP-33](https://cips.cardano.org/cips/cip33/) uses CIP-31 and CIP-32 to allow attaching scripts to outputs. CIP-33 introduces reference scripts that can be used to satisfy script requirements during validation.

Each time a script is to be used, the transaction that requires its use must provide the whole script as part of the transaction. This bloats the chain and increases the user fee. If a transaction uses multiple scripts, it may run into a problem with the maximum size limitation.

Reference input and inline Datum solve the problem by allowing the script to be stored in the blockchain. Then it can be referenced repeatedly. A spending transaction that wants to spend UTXO can reference the script to be used for validation. This means that the transaction that uses the script does not have to carry the script’s contents. It just needs to reference the output in which the script is located.

When a transaction is validated and it is necessary to provide the script corresponding to a script hash, in addition to the scripts provided in the transaction itself, it will be also considered any reference scripts from the outputs referred to by the inputs of the transaction. In other words, the reference to the script (that has been already stored in the blockchain) will be used.

![](https://lh6.googleusercontent.com/R7S7jAMxkYVgQM96p-NIbZYu4QxniSdan_s5UJ6yDcb-gJor654j48mpp1FeU4Wp2WTvP87gezI9v8cpJotE89coH38Kymfny0zU2QmHD_Y9BtjaaGUF-PvJOWxI3PXuK6RkSzl3UXz-sXEWasTeDS0)

With this enhancement, applications don’t have to frequently send scripts every time they want to use it. The script will be stored on-chain and reusable for multiple UTXOs. The same script can be used by multiple parties.

## **Conclusion**

We have described the main improvements that the Vasil upgrade will bring. In fact, the upgrade will include several other minor improvements. Increasing the scalability and improving the Plutus platform opens up new possibilities for developers and benefits for users.

We'll be anxious to see [how the TPS changes after activation](https://cexplorer.io/tps) [on](https://cexplorer.io/) [cexplorer.io](//cexplorer.io).

The upgrade was named in honor of the late Vasil St. Dabov, a Cardano ambassador and a big supporter of the project who sadly passed away in 2021.
