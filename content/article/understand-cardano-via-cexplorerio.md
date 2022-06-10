---
title: " Understand Cardano via Cexplorer.io"
tags:
  - explore
  - education
  - blockchain
  - explorer
  - newbies
  - learn
  - Research
  - analytics
url: ""
image: https://ucarecdn.com/dfd7962b-6112-4926-9034-572343e1399a/
image_text: ""
---

It can be difficult for the average user to understand how a blockchain network works because they can’t touch and view it. Various tools that monitor the network and provide users with information in an understandable form can help with analysis. Learn how to use [https://cexplorer.io](https://cexplorer.io)

##   
Intro

Most users interact with the Cardano network through wallets or the interface of decentralized applications. This is good, as users should be insulated from technical details and use should be as simple as possible. However, in the case of public networks, it is good to have some understanding of how they work. The theory is a good basis, but people may need to be in some closer connection with the network. For this, they need analytical tools to help them explore the network, look at events, or track various statistics.

This is useful for staking, for example. Users know that by holding ADA coins they can participate in the security and decentralization of the network. Practically, this means that they have to choose the right pool to which they delegate their ADA coins. Therefore, it is necessary to use a suitable tool that shows detailed information about the pools.

In this article, we will try to clarify the important aspects of the Cardano network and show you the Cexplorer tool that will help you to get important information about the network. The article does not aim to completely describe all available data, but only the really important ones.

##   
Basic overview

The Dashboard provides an overview of the most important information about the network. Specifically, if the network is running, if it is able to process transactions, what epoch we are currently in, how many ADA coins are in circulation, and how many coins are staked.

![](https://cexplorer.io/assets/images/internal/kb/a1/1.png)

The most important information in Dashboard. Basic information about the price of ADA coins, epoch, staking, and assets can be found in 4 boxes.

There are two key roles in the Cardano ecosystem in terms of block production: pool operators and stakers. Pool operators have registered with the network to produce blocks, they become staking pool operators. They operate full nodes 24/7 and are given assignments to produce new blocks at random intervals. The frequency of block production assignments is proportional to the pool's total stake (size). The total stake of a pool consists of the number of ADA coins that the pool operator has put into his/her pool (pledge) and the ADA coins delegated to the pool by a group of stakers. Stakers increase the total stake of the pool through the process of delegation while ADA coins remain unlocked in their own wallets.

![](https://cexplorer.io/assets/images/internal/kb/a1/2.png)

The operator put his 1,000,000 ADA coins (pledge) into the pool. 12 stakers have delegated ADA coins to the same pool, increasing the total stake of the pool by 1,051,155. In total, the total stake of the pool is 2,051,155.

In the Cardano ecosystem, time is divided into epochs of 5 days. Between epochs, a snapshot occurs in which the state of ADA coin balances on addresses are scanned. Epochs are used as a specific accounting period for which rewards are paid. The Cardano network measures the performance of pools in terms of block production in order to reward pool operators and stakers.

There are 432,000 seconds in each epoch, which corresponds to the number of slots in which a new block can be created. The protocol is set up so that new blocks are produced only in certain slots. Some slots will remain empty. Randomly selected pools become slot leaders in randomly selected slots. It means that a selected pool (or a few pools) is assigned the right to produce and sign a new block.

If you want to specify a point in time in the Cardano network, you can do so by combining epoch and slot as follows: epoch/slot. At the time of writing, the time is 343/212,079.

We found this information in the Dashboard, in a box called Epoch. Note that the slot number increases every second. In the progress bar, you can see when the epoch ends. In our case, it’s in 2 days and 13 hours.

You can find more useful information related to the epoch. For example, the average block size in an epoch and blockchain increment per epoch. As you can see in the picture, the average block size is 59% and the increment is 522,4 MB. At the very bottom of the box, you can find the number of registered pools. In the picture, it is 3,174.

A box called Live Stake gives you an overview of the most important information regarding staked coins. Cardano has capped the number of ADA coins at 45,000,000,000. Circulating supply, the number of coins currently in circulation, is 33,939,795,591 at the time of writing. This is 75.4% of the total coin supply. Every epoch, rewards are paid to pool operators and stakers, so the circulating supply will increase. By the way, if you want to know the exact figure, hover your mouse over the value and a tooltip will appear.

The progress bar shows the amount of staked coins from the circulating supply. As you can see, 73% of the coins are staked at the time of writing. That’s 24,555,840,771 ADA coins.

During the current epoch, Cardano uses the state that was valid two epochs earlier at the time the snapshot was taken. This state is called Active Stake. This state is immutable and serves as input to the network consensus. The snapshot contains information about the total stake of all pools together with all delegations. This is important information when determining slot leaders and calculating rewards. The larger the pool, the more likely it is to be given the right to produce more blocks. New delegations and pool changes do not affect the active stake.

People can delegate to another pool at any time during the epoch, new pools can be registered or their settings can be changed. The state is constantly changing so it is called a Live Stake. All ongoing changes in blockchain are reflected in the live stake. The current live stake will become the active stake over the next epoch. In other words, the current state (live stake) has to wait for an epoch before it becomes the input to the network consensus (active stake).

If you delegate coins to a pool in the current epoch N, the coins will be used by the PoS consensus in epoch N+2.

![](https://cexplorer.io/assets/images/internal/kb/a1/3.png)

At the time of writing, the live stake was 24,666,617,259 ADA coins. If you follow the figure for a while, you will see that it is constantly changing.

At the end of the active stake line, you can see the percentage that indicates the difference between the active stake and the live stake. At the time of writing it is 0.5%. A positive figure means that the live stake is higher than the active stake. This means that more people stake ADA coins in the current epoch than in the previous epoch.

##   
Rewards ([https://cexplorer.io/rewards](https://cexplorer.io/rewards))

Cexplorer can show you details of your staking rewards. In the left menu, go to More / Rewards. Copy your staking key or address from your Cardano wallet and paste it into the edit box. You will see all the rewards of the past epochs.

![](https://cexplorer.io/assets/images/internal/kb/a1/4.png)

Cardano pays out rewards after ADA coins have been used in the active stake epoch. You must wait for one epoch after the end of the active stake epoch to be rewarded.

![](https://cexplorer.io/assets/images/internal/kb/a1/5.png)

Note that when you delegate ADA coins in the current epoch, i.e. in a live stake, the ADA coins are only used after one epoch has passed. Once the coins are used in active stake, you must wait for another one epoch before the reward is paid. So there are 3 epochs in between your delegation and receiving the reward.

If you go to More / Epochs, you will see detailed information about epochs. Of interest is information on how many blocks were minted and how many were missed (slot leaders did not produce any blocks in their slots), how many transactions took place, how many ADA coins the network collected in fees, and what the total reward was to pool operators and stakers. Rewards increase the number of coins in circulation.

![](https://cexplorer.io/assets/images/internal/kb/a1/6.png)

##   
Pools ([https://cexplorer.io/pool](https://cexplorer.io/pool))

Every staker will be looking for information on pools. These can be found by clicking on Pools in the left menu. On this page, you will find a list of all registered pools in the Cardano network and details about them. There is one pool on each line.

![](https://cexplorer.io/assets/images/internal/kb/a1/7.png)

A staker will only receive a reward in an epoch if the pool to which the staker has delegated ADA coins receives the reward. A pool only gets a reward if it produces at least one block in the epoch. In order for a pool to produce at least one block in an epoch, it must have a minimum total stake.

If you sort the pools by stake size and go from the pools with the largest total stake to the smaller ones, you will find that if a pool has a total stake of roughly under 1 million ADA coins, it is not certain to produce a block in a given epoch.

To prevent the existence of big pools, there is a limit to the size of rewards a pool can earn per epoch. If the number of ADA coins in the pool exceeds what is considered the saturation point, the rewards for the pool operator and stakers begin to diminish. The saturation mechanism was designed to prevent centralization. The network encourages stakers to delegate to different stake pools and incentivizes new operators to set up alternative pools.

The parameter K determines the number of existing pools, which is currently considered ideal. Maximum rewards for pool operators and stakers would be achieved if a few conditions were achieved. One of these conditions is that there is just the number of pools defined by parameter K, these pools are just before the saturation point, and all pools are 100% successful in producing blocks. You can calculate the saturation point by taking the number of ADA coins in circulation and dividing by K. Setting the K parameter to 500, this would be e.g: 33,939,795,591 / 500 = 67,879,591. As a staker, always make sure you delegate coins to a pool that is not saturated.

Let’s have look at the CRDNS pool.

![](https://cexplorer.io/assets/images/internal/kb/a1/8.png)

You can find a ticker of the pool in the cracked \[CRDNS\]. You can use the ticker to find the pool in your wallet when you want to delegate to the pool. You can also use the pool ID that you can find below the pool name.

Next to the pool name, you will find an icon indicating whether the operator operates multiple pools or just one.

As you can see, it is ok to delegate to CRDNS, since the total stake is 60,447M ADA coins. The progress bar provides information about saturation which is 89% saturation. It means the pool is not saturated and has sufficient stake to produce blocks in every epoch.

The size of the pool determines the chances of the pool becoming a slot leader and producing a new block in the assigned slots. However, the chance is not purely proportional to pool size. For the sake of protocol security, an element of chance comes into play.

Let’s say that, based on a calculation that takes into account the proportional size of pools, a given pool has 40 slots in an epoch in which it can create a new block. This is the expected number. However, due to randomness, it may happen that a pool is assigned a larger or smaller number of slots. In the end, the pool can create either 45 or 35 blocks. Pool performance is calculated as the number of blocks that a pool has produced in a given epoch, divided by the expected number of blocks. When the pool has created 45 blocks, its performance is 112.5%. When it has only created 35 blocks, its performance is 87.5%, The pool reward per epoch reflects the performance of the pool, so it can be higher or lower.

It is important to know that it does not matter whether a pool is currently above or below 100% of the expected performance. Within a longer period of time, the randomness is fair so the performance is expected to be ~100% provided that the pool creates blocks in all assigned slots.

As you can see, the current luck of CRDNS is 65%.

You can also view the production history of the blocks in the pool. Next to it is an indication of how many blocks the pool is expected to produce in a given epoch and what the current state is.

As a staker, you should be interested in the operator’s fee. Each pool operator sets two fees, a fixed fee, and a margin. The fixed fee determines the number of ADA coins the operator receives each epoch if the pool is eligible for a reward. The fixed fee minimum is set by the protocol at 340 ADA coins and is not changed by most operators. Margin is a variable component given as a percentage of the remainder of the pool reward after the fixed fee has been deducted.

Let’s take an example. A pool operator has a fixed fee set at 340 ADA coins and a margin set at 2%. The pool receives a reward of 30,000 ADA coins. The first 340 ADA coins are deducted, leaving 29,660 coins. 2% of 29,660 is 593.2 ADA coins. The pool operator gets 340 + 593.2 ADA coins, which is 933.2. There are 29,066.8 ADA coins left for all stakers, which will be split proportionally.

At the very end of the line, you can find the number of ADA coins that the operator has used as his own stake. It is called a pledge. CRDNS has the pledge of 500,000 ADA.

##   
Blocks ([https://cexplorer.io/block](https://cexplorer.io/block))

Cexplorer allows you to explore the blocks. You can look at the order number (height) of the block, what epoch and slot it was created in, and who minted it. Then you can see the number of transactions and how full the block is.

![](https://cexplorer.io/assets/images/internal/kb/a1/9.png)

If you click on the magnifying glass icon, you will see the block detail including all transactions.

##   
Transactions ([https://cexplorer.io/tx](https://cexplorer.io/tx))

It often happens that you send a transaction to someone and would like to see the details. Each transaction has a Transaction ID (TID). Copy the TID and go to Transactions on the left menu in Cexplorer. There is a magnifying glass icon in the upper left. Paste the TID into the edit box and confirm with the ENTER button.

![](https://cexplorer.io/assets/images/internal/kb/a1/10.png)

You can see when the transaction occurred by the date. You can also find out it in blockchain time, i.e. by a combination of epoch and slot (343/290956). Total Output is the total amount of coins (or tokens) that were sent in the transaction. Remember that in the UTXO accounting model, some of the coins may go back into your wallet. You can also see the transaction fee. On the right you can find the number of confirmations, that is, the number of blocks that follow the block in which the transaction is. Next, you can see the size of the transaction that affects the fee.

If you scroll down, you will find details of addresses and UTXOs.

![](https://cexplorer.io/assets/images/internal/kb/a1/11.png)

In the left part, you can see 7 UTXO inputs to the transaction, and in the right part 2 UTXO outputs of the transaction. You can see that the transaction sent 21.4 ADA and 1.63 ADA. The red arrow tells you that 21.4 ADA was sent to the external address, so 1.63 ADA was returned to the original wallet.

![](https://cexplorer.io/assets/images/internal/kb/a1/12.png)

Let’s explain how value is moved in Cardano networks through UTXO. UTXOs are on blockchain addresses and carry some value. For example, ADA coins. When Alice wants to send 125 ADA to Bob, Alice’s wallet must select the appropriate UTXOs. In our case, the wallet has selected 3 UTXOs with ADA coins worth 50, 50, and 30. These UTXOs will be the input of the transaction. You can see that the input value is 130 ADA, which is more than Alice wants to send. It usually happens that the exact value is not available in the wallet, so part of the value sent will be returned to Alice’s wallet in the form of a new UTXO. In addition, there is a transaction fee, in our example, it is 0.2 ADA. Transactions transform input UTXOs into output UTXOs. Note that the value is retained and the output is the new UTXOs with a value of 130 ADA. UTXO with a value of 125 ADA for Bob, 0.2 ADA is the transaction fee, so Alice gets a new UTXO with a value of 4.8 in her wallet.

![](https://cexplorer.io/assets/images/internal/kb/a1/13.png)

You would see a Total Output of 129.8 in Cexplorer. Outputs would have value 2. The fee would be 0,2 ADA. On the left side, you would see 3 UTXOs with values of 50, 50, and 30 ADA. On the right side, you would see two output UTXOs with values of 125 and 4.8 ADA. The UTXO with a value of 125 ADA would have a red arrow icon so you would know it is an external wallet.

##   
Analytics

In the left menu, you will find the Analytics section where you can explore the network from different angles.

If you are interested in how decentralized the Cardano network is, go to Decentralization / Groups (Donuts).

For example, you may find operators who operate multiple pools. These operators control a large percentage of the total stack, i.e. all the coins that are used for stacking at any given time. At the time of writing, this is more than 24B ADA coins. As can be seen in the image below, the largest stake of one entity is the total stake of all pools of the Binance exchange.

![](https://cexplorer.io/assets/images/internal/kb/a1/14.png)

You can also look at the number of pools each group operates.

![](https://cexplorer.io/assets/images/internal/kb/a1/15.png)

You can see below the charts for more information on each group.

You can find a lot of other information, such as network capacity and current usage, number of transactions, power consumption, block producers, new pools, updated pools, new delegations, etc.

##   
Conclusion

[Cexplorer.io](//Cexplorer.io) is a useful tool to help you find the staking pool, find details about transactions, and also to analyze the network.
