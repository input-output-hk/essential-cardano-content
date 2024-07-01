---
title: "The Mesh team present: \"An Aiken library to make devs' day-to-day
  lives🌤️easier\" | Contract: Escrow"
tags:
  - meshjs
  - aiken
  - aiken smart contracts
  - aiken library
url: ""
image: https://ucarecdn.com/ec0c7b72-f185-49b3-9073-870bc1dbc1dd/
image_text: ""
---

### The Escrow contract is the trusted intermediary that allows two parties to safely exchange assets, holding them until both parties agree and sign the Tx. Let’s try it!

To do so, you’ll need two _preprod_ wallets (to simulate the two parties in agreement).

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 1**: Go to [https://meshjs.dev/smart-contracts/escrow](https://meshjs.dev/smart-contracts/escrow)

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 2**: Connect one of the _preprod_ wallets (_user B_) and mint a _Mesh token_.

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/6/8/684e90a04d672802cc747c97f904a750163f904a_2_1000x581.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/6/8/684e90a04d672802cc747c97f904a750163f904a.jpeg)

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 3**: With the other _preprod_ wallet (_user A_), go to “_Initiate Escrow_”, and initiate it.

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 4**: Refresh the page. With the _preprod_ wallet that holds the _Mesh token_ (_user B_), go to “_Recipient Deposit_” and click on “_Deposit_”.

If you check the wallet, the _Mesh token_ should be gone.

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/8/c/8c326d59c0747aa767d93c7878367c7e572c2344_2_999x527.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/8/c/8c326d59c0747aa767d93c7878367c7e572c2344.jpeg)

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 5**: Refresh the page and connect the wallet that initiated the Escrow (_user A_).

![:phone:](https://emoji.discourse-cdn.com/apple/phone.png?v=12 ":phone:")**Beware**: only connect the wallet, _don’t mint a new Mesh token again_.

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/6/8/684e90a04d672802cc747c97f904a750163f904a_2_1000x581.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/6/8/684e90a04d672802cc747c97f904a750163f904a.jpeg)

Now, go to “_Complete Escrow_” and click on “_Sign Transaction_”.

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/9/f/9fc66c3f158eca4d7c7a322e5431a9e196590305_2_1000x547.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/9/f/9fc66c3f158eca4d7c7a322e5431a9e196590305.jpeg)

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 6**: Still in “_Complete Escrow_”, switch to the wallet that deposited the _Mesh token_ (_user B_). Click on “_Complete Escrow_”.

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/e/0/e0a8adb8c13794d8251a102189394b759181e81c_2_1000x547.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/e/0/e0a8adb8c13794d8251a102189394b759181e81c.jpeg)

If you check _user B_’s wallet, you’ll notice that _10 tAda_ have arrived. And if you check _user A_’s wallet, you’ll see that a _Mesh token_ has arrived.

![:white_check_mark:](https://emoji.discourse-cdn.com/apple/white_check_mark.png?v=12 ":white_check_mark:")**Step 7**: Let’s try the “_Cancel Escrow_” option. To do so, **_repeat steps 2, 3, and 4._** Next, proceed to “_Cancel Escrow_” and click on the “_Cancel Escrow_” button using **_either wallet_** (_user A_ or _user B_).

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/6/9/69cb8235b0edcfc75ac177dcb05b8f39ed862d3c_2_1000x536.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/6/9/69cb8235b0edcfc75ac177dcb05b8f39ed862d3c.jpeg)

![:pancakes:](https://emoji.discourse-cdn.com/apple/pancakes.png?v=12 ":pancakes:")Would you like to take a look at the source code of the Aiken Escrow contract? For sure!

Go to [https://github.com/MeshJS/mesh/tree/main/packages/contracts/src/escrow](https://github.com/MeshJS/mesh/tree/main/packages/contracts/src/escrow)

[![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/4/7/47004863005acb71dde8e8b8edff00e815ff6799_2_1000x585.jpeg)](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/4/7/47004863005acb71dde8e8b8edff00e815ff6799.jpeg)

## Mesh: making life ![:sun_behind_small_cloud:](https://emoji.discourse-cdn.com/apple/sun_behind_small_cloud.png?v=12 ":sun_behind_small_cloud:")easier for developers
