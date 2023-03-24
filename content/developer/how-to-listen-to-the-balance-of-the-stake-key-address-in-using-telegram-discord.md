---
title: How to listen to the balance of the Stake Key address in using Telegram,
  Discord
tags:
  - DCOneCrypto
  - Api
  - Development
  - Stake Key
  - Stake
url: https://dconecrypto.finance/e2553ad0-3579-4ef1-3552-08db2bb6b566.Stake-key-balance-tracking-with-Telegram,-Discord.html
image: https://ucarecdn.com/c4f23836-c5ee-4fe9-a621-c9fb6d0b15b1/
image_text: DCOne Crypto Telegram, Discord
---

### **Allows users to connect via API to receive information on changes to the Cardano blockchain stake balance about Telegram and Discord**

*   Read more: [https://docs.dconecrypto.finance/community-user/wallets-tracking-notify](https://docs.dconecrypto.finance/community-user/wallets-tracking-notify)
    
*   Document Github: [https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord)
    

> **Note: Create an account before using the APIs**

1.  Create an account: Mainnet [https://dconecrypto.finance](https://dconecrypto.finance/)
    

> Note: Website direct menu (please login before):

1.  Live: `Mainnet Telegram:` [https://dconecrypto.finance/DC\_TelegramWallets](https://dconecrypto.finance/DC_TelegramWallets)
    
2.  Live: `Mainnet Discord:` [https://dconecrypto.finance/DC\_DiscordWallets](https://dconecrypto.finance/DC_DiscordWallets)
    

## **REST API**

Network: `Mainnet` Endpoint: `https://dconecrypto-mainnet.dconecrypto.finance`

### **Credentials when using API**

```hljs
Authorization: Bearer {{accessToken}}
```

### **Authenticate**

Example api request:

*   Required field:
    
    *   **userNameOrEmailAddress** (login account name) ,
        
    *   **password** (login password)
        

```hljs
curl --location '{{domain}}/api/TokenAuth/Authenticate' \
--header 'Content-Type: application/json' \
--data '{
  "userNameOrEmailAddress": "",
  "password": "",
  "rememberClient": true
}'
```

Example api Authenticate responses

```hljs
{
  "accessToken": "string",
  "encryptedAccessToken": "string",
  "expireInSeconds": 0,
  "shouldResetPassword": true,
  "passwordResetCode": "string",
  "userId": 0,
  "requiresTwoFactorVerification": true,
  "twoFactorAuthProviders": ["string"],
  "twoFactorRememberClientToken": "string",
  "returnUrl": "string",
  "refreshToken": "string",
  "refreshTokenExpireInSeconds": 0
}
```

## **Telegram API**

### **Get userId by token. (GetAllUserForTableDropdown)**

*   Get the userId variable and put in the userId input parameter in the `"CreateOrEdit"` api
    

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_TelegramWallets/GetAllUserForTableDropdown' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''
```

Example api response:

```hljs
{
  "result": [
    {
      "id": 1,
      "displayName": "dconecrypto"
    }
  ],
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Send security code "CodeOTP" to Telegram. (TelegramSendOTP)**

*   Security code is 6 digits long & valid for 2 minutes
    
*   Required fields to enter
    
    *   **telegramId** (get telegramId [https://t.me/DCOneCryptoBot](https://t.me/DCOneCryptoBot))
        
    *   **stakeAddress** (stakexxxxxxxxxxxxxxxxxxxxx)
        
    *   **userId** (get userId at API `GetAllUserForTableDropdown`)
        

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_TelegramWallets/TelegramSendOTP' \
--header 'Authorization: Bearer {{accessToken}}' \
--data '{
  "telegramId": 806901872,
  "stakeAddress": "stake1782cckupa4zyp95edhghqwegr5spyglt7dsu5wpqsrkdaxcmhyjr5",
  "userId": 1,
  "telegramCodeOTP": "",
  "id": ""
}'
```

Example api response:

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Create a new connection to track balance via Telegram. (CreateOrEdit)**

When a payment is detected in the stake address, it will be sent information to **Telegram**

*   Required fields to enter
    
    *   **telegramId** (get telegramId [https://t.me/DCOneCryptoBot](https://t.me/DCOneCryptoBot))
        
    *   **stakeAddress** (stakexxxxxxxxxxxxxxxxxxxxx)
        
    *   **userId** (get userId at API `GetAllUserForTableDropdown`)
        
    *   **telegramCodeOTP** (security code sent via Telegram at API `TelegramSendOTP`)
        

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_TelegramWallets/CreateOrEdit' \
--header 'Authorization: Bearer {{accessToken}}' \
--data '{
  "telegramId": 806901872,
  "stakeAddress": "stake1782cckupa4zyp95edhghqwegr5spyglt7dsu5wpqsrkdaxcmhyjr5",
  "userId": 1,
  "telegramCodeOTP": "473653",
  "id": ""
}'
```

Example api response:

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Delete stake address balance connection tracking via Telegram. (Delete)**

*   Required fields to enter
    
    *   **Id** (the `Id` field is taken from the API `GetAll`)
        

Example api request:

```hljs
curl --location --request DELETE '{{domain}}/api/services/app/DC_TelegramWallets/Delete?Id=0b28648a-4e35-4670-e92b-08db2ba3d184' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''
```

Example api response:

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **List of Telegram connections (GetAll)**

*   Get a list of all **Telegram** connected to the system
    

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_TelegramWallets/GetAll' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''
```

Example api response:

```hljs
{
  "result": {
    "totalCount": 1,
    "items": [
      {
        "dC_TelegramWallet": {
          "telegramId": 806901872,
          "stakeAddress": "stake1782cckupa4zyp95edhghqwegr5spyglt7dsu5wpqsrkdaxcmhyjr5",
          "userId": 1,
          "id": "0b28648a-4e35-4670-e92b-08db2ba3d184"
        },
        "userName": "dconecrypto"
      }
    ]
  },
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

## **Discord API**

### **Get userId by token. (GetAllUserForTableDropdown)**

*   Get the userId variable and put in the userId input parameter in the `"CreateOrEdit"` api
    

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_DiscordWallets/GetAllUserForTableDropdown' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''
```

Example api response:

```hljs
{
  "result": [
    {
      "id": 1,
      "displayName": "dconecrypto"
    }
  ],
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Send security code "CodeOTP" to Discord. (DiscordWebhookSendOTP)**

*   Security code is 6 digits long & valid for 2 minutes
    
*   Required fields to enter
    
    *   **discordId** (your display name)
        
    *   **stakeAddress** (stakexxxxxxxxxxxxxxxxxxxxx)
        
    *   **webhookUrl** (webhook address is taken from discord channel settings)
        
    *   **discordStatus** (notification on/off status)
        
    *   **userId** (get userId at API `GetAllUserForTableDropdown`)
        

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_DiscordWallets/DiscordWebhookSendOTP' \
--header 'Authorization: Bearer {{accessToken}}' \
--header 'Content-Type: application/json' \
--data '{
    "discordId": "Your display name",
    "stakeAddress": "stake1782cckupa4zyp95edhghqwegr5spyglt7dsu5wpqsrkdaxcmhyjr5",
    "webhookUrl": "https://discord.com/api/webhooks/1079715947830579231/5Yi-I3Anq1SMrjIz6Ka5SfcuhSpRi4Lz0rXIdc7pO7VpVV34fPSgFYZS6utkTqcQ30ur",
    "discordStatus": true,
    "userId": 1,
    "discordCodeOTP": "",
    "id": ""
}'
```

Example api response:

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Create a new connection to track balance via Discord. (CreateOrEdit)**

When a payment is detected in the stake address, it will be sent information to **Discord**

*   Required fields to enter
    
    *   **discordId** (your display name)
        
    *   **stakeAddress** (stakexxxxxxxxxxxxxxxxxxxxx)
        
    *   **webhookUrl** (webhook address is taken from discord channel settings)
        
    *   **discordStatus** (notification on/off status)
        
    *   **userId** (get userId at API `GetAllUserForTableDropdown`)
        
    *   **discordCodeOTP** (security code sent via Discord at API `DiscordWebhookSendOTP`)
        

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_DiscordWallets/CreateOrEdit' \
--header 'Authorization: Bearer {{accessToken}}' \
--header 'Content-Type: application/json' \
--data '{
    "discordId": "Your display name",
    "stakeAddress": "stake1782cckupa4zyp95edhghqwegr5spyglt7dsu5wpqsrkdaxcmhyjr5",
    "webhookUrl": "https://discord.com/api/webhooks/1079715947830579231/5Yi-I3Anq1SMrjIz6Ka5SfcuhSpRi4Lz0rXIdc7pO7VpVV34fPSgFYZS6utkTqcQ30ur",
    "discordStatus": true,
    "userId": 1,
    "discordCodeOTP": "310379",
    "id": ""
}'
```

Example api response:

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Delete stake address balance connection tracking via Discord. (Delete)**

*   Required fields to enter
    
    *   **Id** (the `Id` field is taken from the API `GetAll`)
        

Example api request:

```hljs
curl --location --request DELETE '{{domain}}/api/services/app/DC_DiscordWallets/Delete?Id=719893f4-e3d4-410a-6803-08db262d5910' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''
```

Example api response:

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **List of Discord connections (GetAll)**

*   Get a list of all **Discord** connected to the system
    

Example api request:

```hljs
curl --location '{{domain}}/api/services/app/DC_DiscordWallets/GetAll' \
--header 'Authorization: Bearer {{accessToken}}' \
--data ''
```

Example api response:

```hljs
{
  "result": {
    "totalCount": 1,
    "items": [
      {
        "dC_DiscordWallet": {
          "discordId": "DCOne Crypto",
          "stakeAddress": "stake1782cckupa4zyp95edhghqwegr5spyglt7dsu5wpqsrkdaxcmhyjr5",
          "webhookUrl": "https://discord.com/api/webhooks/1079715947830579231/5Yi-I3Anq1SMrjIz6Ka5SfcuhSpRi4Lz0rXIdc7pO7VpVV34fPSgFYZS6utkTqcQ30ur",
          "discordStatus": true,
          "userId": 1,
          "id": "719893f4-e3d4-410a-6803-08db262d5910"
        },
        "userName": "dconecrypto"
      }
    ]
  },
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Example success response:**

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": true,
  "error": null,
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Example error response:**

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": false,
  "error": {
    "code": 0,
    "message": "Wallet address already exists",
    "details": null,
    "validationErrors": null
  },
  "unAuthorizedRequest": false,
  "__abp": true
}
```

```hljs
{
  "result": null,
  "targetUrl": null,
  "success": false,
  "error": {
    "code": 0,
    "message": "Discord code otp error",
    "details": null,
    "validationErrors": null
  },
  "unAuthorizedRequest": false,
  "__abp": true
}
```

### **Some sample data results sent to Telegram, Discord**

1.  Automatically send notifications when there is a balance change
    
2.  [![Stake-address-tracking-via-telegram](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord/raw/main/screenshots/Stake-address-tracking-via-telegram.PNG)](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord/blob/main/screenshots/Stake-address-tracking-via-telegram.PNG)
    
3.  List of all stake addresses
    
4.  [![List of all stake addresses](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord/raw/main/screenshots/list-all-stake-address.PNG)](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord/blob/main/screenshots/list-all-stake-address.PNG)
    
5.  Automatically send notifications when there is a balance change
    
6.  [![List of all stake addresses](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord/raw/main/screenshots/stake-address-tracking-via-discord.PNG)](https://github.com/DCOneCrypto/StakeAddress-Tracking-Telegram-Discord/blob/main/screenshots/stake-address-tracking-via-discord.PNG)
