---
title: How to mint an NFT project on Cardano using NFT-MAKER
tags:
  - NFT
  - Non-fungible token
  - Metadata
  - Non-fungible
url: https://www.nft-maker.io/
image: https://ucarecdn.com/5620afda-194e-4ae3-a21b-de1260978f82/
image_text: NMKR Logo
---

At [NMKR](https://www.nft-maker.io/), our goal is to make NFTs accessible to everyone.

This guide is designed for those in our community who have very little programming knowledge. Using this step-by-step process, you will be able to create and Mint your NFT project with ease using [NMKR Studio](https://www.nmkr.io/studio).

The aim of this guide is to provide you with the optimal workflow for getting your project live, using our most up to date systems to ensure the best user experience.

You can review the information below or watch the video tutorial (6 minutes).

[https://www.youtube.com/watch?v=j0SRI9QOdok](https://www.youtube.com/watch?v=j0SRI9QOdok)

In every NFT drop, there are 5 high level tasks that need to be completed to ensure everything is technically ready for launch (assuming you have already generated your Art and have your Metadata ready).

*   NMKR Studio Settings
    
*   NMKR Studio Config
    
*   Upload Base Media (The Art)
    
*   Upload Metadata
    
*   User Minting Frontend (Website)
    

This section is designed to be a very quick overview that will likely save you considerable time and effort when getting your project ready, for a full guide you can review the Step-By-Step Workflow in the [KnowledgeHub](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/1.-preparation).

## NMKR Studio Settings

It is logically helpful to think about the NMKR Studio side in two parts, the first of which is settings and this covers all of the simple backend tasks such as:

*   Creating your account
    
*   Verifying your Payout wallet (where sale proceeds will go)
    
*   Policy ID
    
*   NFT Pricing
    
*   ​[Royalty Token](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/selling-your-nfts/royalties)​
    
*   ​[Sale Conditions](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/selling-your-nfts/setting-sale-conditions#available-conditions)​
    
*   ​[Reservation Time](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow)​
    

These tasks don't take very long and are very simple to do using our user interface but they should remain in your mind throughout the project and should not be left until the 'last minute'.

## NMKR Studio Config

### Metadata

The second part of NMKR Studio will be the more technically complex elements that need to be considered ahead of time to ensure the smoothest possible set up. This is specifically referring to the POLICY ID LOCKING and of course, the Metadata Template.

Correctly [configuring the metadata](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/creating-nfts/configuring-metadata) is an important part of constructing your NFTs on the Cardano blockchain. Most projects currently use this as a place to describe the asset such as the serial number, what hat the character is wearing and how many attributes it has.

It is very important to think about the metadata you want to have well in advance so that you can align your art design, your source attribute files and your metadata template.

Think about:

*   What are the variables in my art? For example:
    
    *   Do they have hats, backgrounds, items, glasses, haircuts?
        
    *   Is it a video, a song and so on.
        
*   How granular do I want to be? For example:
    
    *   One attribute for the 'background' like 'gradient-red'
        
    *   Two attributes like 'bgstyle' = 'gradient', 'bgcolour' = 'red'
        
*   Do I want the website/twitter/discord links in the metadata permanently?
    

Note - each metadata attribute has a maximum limit of 64 Characters

### Policy ID

The Policy ID is what identifies the unique collection of NFTs. As such this is something very important and you want to make sure that your community are made aware of the REAL Policy ID.

In terms of config, there really is only one thing to do here and that is to decide when the Policy ID locks. Having a locking policy date means that after that date, not further NFTs can be minted or edited in anyway under that Policy ID. In short - no further changes can be made and those assets will remain on the chain forever.

People expect Policies to close at some point in the near future (less than a year) for several reasons, with the main one being that they know that once the policy locks, the supply of the NFTs is locked and thus their value wont be diluted by a rouge project who mints more.

Note that the locking date can never be edited once set up, so think carefully about how long you need to mint your collection.

Note - We highly recommend implementing a locking date on your project Policy ID

## Upload Media

Once you have your art completed, you need to upload it to our servers so that it can remain there, ready to be minted. There are several ways that this can be done, with the best being via the [SFTP Server](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/managing-your-nfts/uploading-files#sftp-bulk-upload) but the [API](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/managing-your-nfts/uploading-files#api-bulk-upload-this-guide-is-incomplete) is available for those who prefer this.

### Supported File Types

You can upload additional subfiles for \*\*\*, such as:

*   Application: Zip; PDF; Json; GITF+Json, Octet-Stream
    
*   Audio: Mpeg; Ogg; WAV.
    
*   Image: Bmp; SVG+XML.
    
*   Text: HTML; Javascript; Plain Text; CSS.
    
*   Video: Mpeg; Mp4; Ogg; Quicktime; Webm.
    

Further information can be found in the [Uploading Files](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/managing-your-nfts/uploading-files) section.

### Upload via our SFTP-Server

The best method of uploading your files is through our [SFTP-Server (see guide).](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow/managing-your-nfts/uploading-files#sftp-bulk-upload) This allows you to upload, in bulk without needing to write code or use the API (literally drag-and-drop the files).

## Upload Metadata

If you plan on using the SFTP server, this next part is essentially the same process as drag-and-drop as you did with the media files, only using the .metadata JSON files rather than the .PNG Image files or other media you might have already uploaded.

Having already completed the NMKR Studio Metadata Config, you will already have the template and placeholders ready to accept the Metdata and as such can start to upload this.

We also have a feature for people who are more familiar with spreadsheets, allowing you to upload the metadata using a single CSV file.

## Minting Frontend

This final, very important step is all about how your community will actually mint your NFT's. We have made this very easy with various options for how this can be done, with the most recommended being to use our [Payment Gateway](https://docs.nft-maker.io/nft-maker-pro/step-by-step-workflow) on your website. The Payment Gateway provides by far the best end-user experience with a clean, professional interface that seamlessly integrates with the users wallet. If you don't plan on having a website, you can also use our single-pay in address as did many projects in the early months of NFTs on Cardano.

## Final Thoughts

As a final headline overview, try and build your project in a way that means you can try things out with one or two files first, check it and then implement the bulk operations.

You may also want to use our [Testnet](https://docs.nmkr.io/nmkr-studio/testnet) to try things out first before you launch your project.

Thank you for choosing us as your Minting Partner - if you have any further queries that haven't been solved in this Knowledge Base - please contact our support teams who will be happy to help you.

We cant wait to see your project!
