---
title: "Gimbalabs series: Create, Deploy, and Manage your own Plutus contracts
  effectively - Part 2"
tags:
  - gimbalabs
  - gimbalabs japan
  - gimbalabs series
  - Education
  - Open Source
  - Plutus
  - Cardano Japan
  - Japan
url: ""
image: https://ucarecdn.com/4f5d7e8a-f8c6-4b6c-bcd6-6436759f318d/
image_text: ""
---

日本語版はスクロールダウンしてください。  
![6a8a03ba11a6c9509414a7f9628efdbc9be356a7_2_1000x569](https://global.discourse-cdn.com/business4/uploads/cardano/original/3X/3/1/31a18c164b092b94e56b24769fd482927ae75665.png)  
Fig 1. Gimbalabs Plutus Project-Based Learning

**In the second part of this comprehensive three-part series, created and taught by our always beloved Gimbalabs instructor, Professor Mix (**[M. Ali Modiri](https://github.com/input-output-hk/Certification-working-group/blob/vuln-from-audits/Cardano%20Threat%20Intelligence/Vulnerabilities/CTI-2023-ADA-11-04.md)), as part of the [Gimbalabs Plutus Project-Based Learning](https://plutuspbl.io/), we will continue our journey into your understanding of how to create, deploy, and manage your own Plutus contracts effectively.

## **Student Learning Targets (SLT)**

*   I can plan and implement my own Plutus contracts
    
*   I can create, update and maintain a Plutus project.
    
*   I understand how time works on Plutus (POSIXTime) and Ledger (Slot Number).
    

In the [first part of the series](https://forum.cardano.org/t/gimbalabs-series-create-deploy-and-manage-your-own-plutus-contracts-effectively-part-1/127780), we covered the first SLT: _I can plan and implement my own Plutus contracts_. Today, in this second part, we will focus on the next SLT:

## **_I can create, update and maintain a Plutus project._**

![Fig 2. Gimbalabs Plutus PBL Japanese - SLT 302.2](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/d/4/d40c0921607a4a3c3ba04d19cc3a3c75aef05e46_2_1000x562.png)Fig 2. [Gimbalabs Plutus PBL - SLT 302.2](https://plutuspbl.io/modules/302/3022)

So, let’s earn that “I can”.

\---

Here, you will learn the process of creating your Plutus project from scratch, the essential steps, such as project structure, file organization, and setting up the development environment.

Learning how to utilize version control systems effectively, enabling you to manage and track changes to your Plutus projects seamlessly.

You will gain expertise in keeping your projects up-to-date with the latest advancements in the Cardano ecosystem.

# Creating Your Plutus Project: Step-by-Step Guide

To initiate your Plutus project effectively, follow these comprehensive steps to create your cabal.project file and set up your development environment:

### Step 1: Navigate to the Plutus-Apps Repository

*   Visit the [Plutus-Apps repository](https://github.com/input-output-hk/plutus-apps).
    

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Why Plutus-Apps?](https://www.youtube.com/clip/UgkxF3xhx9Ec6H7OdZW8o9cEkOkHiW-fE62u?si=X_261nzdGB-De_Oj)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

### Step 2: Choose a Version

*   You have the option to choose either a _specific release version_ or a _commit hash_.
    
*   For a release version, click on [release/tags](https://github.com/input-output-hk/plutus-apps/tags), and select the version you prefer.
    
*   If you prefer a specific commit hash, go to the [commit](https://github.com/input-output-hk/plutus-apps/commits/main) page and find the hash you want to use.
    

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ The importance of choosing right plutus-apps "flavor" (a.k.a. version)](https://www.youtube.com/clip/UgkxfCulrbrFawAXhWJwb9PCBh6hAOfPHIlH?si=v6t8VSuLbuLsE9AZ)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Choosing a plutus-apps version](https://www.youtube.com/clip/UgkxpdqB8l2UzWrXdDLbQMrAKFobOlkd9ii2?si=eE90wDbHkbK0hTJ-)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

### Step 3: Clone the Plutus-Apps Repository

*   Ensure you have already cloned the Plutus-Apps repository using `git clone` or that you are inside your existing clone in your local machine.
    

### Step 4: Set Up the Nix Development Environment

*   Open your terminal and navigate to the Plutus-Apps directory:
    

```hljs
$ cd plutus-apps

```

*   Update the repository and check out the version you selected (either a tag or commit hash):
    

```hljs
$ git pull
$ git checkout <TAG_OR_COMMIT_HASH>

```

*   Initialize the Nix development environment:
    

```hljs
$ nix develop

```

#### _More info on execution of steps 3 and 4,_ [here](https://plutuspbl.io/modules/101/1014).

### Step 5: Create Your Plutus Project Folder

*   In your terminal, create a folder for your Plutus project, replacing `YOUR_PROJECT_NAME` with your chosen project name:
    

```hljs
$ mkdir YOUR_PROJECT_NAME
$ cd YOUR_PROJECT_NAME

```

*   Create the `cabal.project` file:
    

```hljs
$ touch cabal.project

```

### Step 6: Populate Your `cabal.project` File

*   Now, you need to populate your `cabal.project` file with package information based on the Plutus-Apps version you selected.
    
*   For a release version:
    
    *   Click on the short form of the commit hash next to the release date. On the right side, click on “Browse files.”
        
*   For a commit hash:
    
    *   Search for the commit hash in the search bar:
        

```hljs
repo:IntersectMBO/plutus-apps <COMMIT_HASH>

```

*   Click on the search result that corresponds to the commit.
    
*   Locate the “Browse files” button in the top right corner and click it.
    
*   In either case, you will reach the version of Plutus-Apps associated with your selected tag or commit hash.
    
*   Find the `cabal.project` file in that page and click on it.
    
*   Click the “Raw” button to obtain the content of the `cabal.project` file.
    
*   Copy the content.
    

### Step 7: Edit Your cabal.project File

Paste the copied content inside your `cabal.project` file within your project folder. At the end of the copied content, add the following lines, replacing `<THE_TAG_OR_COMMIT_HASH_YOU_HAVE_CHOOSE>` with your selected tag or commit hash:

```hljs
source-repository-package
    type: git
    location: https://github.com/input-output-hk/plutus-apps.git
    tag: <THE_TAG_OR_COMMIT_HASH_YOU_HAVE_CHOOSE>
    subdir:

```

*   Find the `packages:` section in your `cabal.project` file.
    
*   Cut the `packages:` line from its current position and paste it beneath or under the `subdir` line within the `source-repository-package` section you added.
    
*   With these steps completed, you will have successfully initiated your Plutus project, configured your development environment, and set up your `cabal.project` file with the required package information. This prepares you for next step which creation of your project `.cabal` file.
    

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Setting the cabal.project file of your project](https://www.youtube.com/clip/Ugkxljhk4nHfz2G-jTD-ZaJTCuC5d4GBnLMf?si=9DuPe9UharmzaULg)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

# Creation of Cabal file

Now that we have our `cabal.project` file in place, we can proceed to create the `.cabal` file for your Plutus project. The `.cabal` file is essential for specifying project metadata and configurations. Below is a step-by-step guide:

### Step 1: create `.cabal` file:

*   Open your terminal and navigate to your project directory.
    
*   Create a `.cabal` file, replacing `<YOUR_PROJECT_NAME>` with the name of your project:
    

```hljs
$ touch <YOUR_PROJECT_NAME>.cabal

```

### Step 2: Define Project Metadata

This section is dedicated to defining important metadata about your project, providing crucial information for its management and distribution. Here’s a template for this section:

```hljs
-- Specifies the version of the Cabal specification used for this project.
Cabal-Version:            3.0

-- The name of the Plutus project, in this case, "token-vesting".
Name:                     token-vesting

-- The version number of the project. This helps in managing different versions of your project.
Version:                  1.0.0

-- The author or organization responsible for creating the project, in this case, "Gimbalabs".
Author:                   Gimbalabs

-- Indicates the build type, "Simple" in this case, which is suitable for most projects.
Build-Type:               Simple

-- Specifies the project's license. Here, it's licensed under GPL version 3.0 or later.
License:                  GPL-3.0-or-later

-- References the file that contains the full text of the project's license for reference.
License-file:             LICENSE

```

### Step 3: Common Project Configuration

*   In this section, you can define common project configurations, such as language extensions and GHC (Glasgow Haskell Compiler) options.
    
*   Language Extensions:
    
    *   Language extensions serve as a powerful tool for enabling specific language features in Haskell. They allow you to enhance the capabilities of your code when needed. You can selectively enable these extensions in your smart contract files using the LANGUAGE pragma: `{-# LANGUAGE <Extension>, <Extension> #-}`.
        
    *   To determine which language extensions are suitable for your project, you can refer to the extensive list of available extensions. Each extension provides unique functionalities that can be beneficial in particular scenarios, so researching and choosing the right ones can greatly enhance your project’s capabilities.
        
*   GHC Options (Compiler Flags):
    
    *   GHC options, also known as compiler flags, provide fine-grained control over various aspects of the Glasgow Haskell Compiler (GHC) and the compilation process.
        
    *   These options allow you to tailor how your Haskell code is compiled and executed. You can use them to optimize performance, enable debugging, or configure other compiler-related behaviors.
        

```hljs
Common project-config
  default-language:       Haskell2010

  default-extensions:     NoImplicitPrelude
                          OverloadedStrings
                          ExplicitForAll
                          ScopedTypeVariables
                          DeriveGeneric
                          StandaloneDeriving
                          DeriveLift
                          GeneralizedNewtypeDeriving
                          DeriveFunctor
                          DeriveFoldable
                          DeriveTraversable
                          LambdaCase
                          MultiParamTypeClasses
                          TypeOperators
                          FlexibleInstances
                          NamedFieldPuns
                          TypeFamilies
                          FlexibleContexts
                          DeriveAnyClass
                          DerivingStrategies
                          DerivingVia
                          DataKinds
                          PatternGuards
                          OverloadedRecordFields
                          GADTs
                          ImportQualifiedPost
                          MultiWayIf
                          RankNTypes
                          RecordWildCards
                          TemplateHaskell
                          TypeApplications
                          UndecidableInstances
                          DuplicateRecordFields

  ghc-options:            -Wall
                          -Wcompat
                          -Wincomplete-record-updates
                          -Wnoncanonical-monad-instances
                          -Wredundant-constraints
                          -Wincomplete-uni-patterns
                          -Wunused-packages
                          -Widentities
                          -fno-ignore-interface-pragmas
                          -fno-omit-interface-pragmas
                          -fobject-code
                          -fno-specialise
                          -fno-spec-constr
                          -fno-strictness

```

### Step 4: Library Configuration (Replace with Your Specifics)

*   For the library section, you can specify the project’s source directories and exposed modules. Make sure to customize this section with your module names, directory structure, and dependencies:
    

```hljs
Library
  import:           project-config
  hs-source-dirs:   <MODULE_FOLDERS_OR_FILES_DIRECTORY_NAME>
  exposed-modules:
                    <MODULE_NAME>.<SUB_MODULE_NAME>.<NAME_OF_THE_FILE>

  build-depends:
                    <PACKAGE_NAME_1>
                  , <PACKAGE_NAME_2>
                  , <PACKAGE_NAME_3>
                  , ...

```

### Step 5: Executable Configuration (Replace with Your Specifics)

*   If your project includes executable files, define their configurations in this section. Adjust the settings according to your project’s requirements:
    

```hljs
executable <EXECUTABLE_FILE_NAME>
  default-language: Haskell2010
  main-is: <EXECUTABLE_FILE_NAME>.hs
  hs-source-dirs:      <EXECUTABLE_FILE_DIRECTORY_NAME>
  ghc-options:         -threaded -rtsopts "-with-rtsopts=-T"
  build-depends:        <PACKAGE_NAME_1>
                      , <PACKAGE_NAME_2>
                      , <PACKAGE_NAME_3>
                      , ...

```

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Setting the myproject.cabal file of your project](https://www.youtube.com/clip/UgkxNzwzherQ2gjy-AOD0UpT-ynYdUIq3nwf?si=B8x7pkdWl3_LR0-C)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

\---

Find [here](https://plutuspbl.io/modules/302/3022) the original lesson (including the video lesson)

Follow [Gimbalabs](https://twitter.com/gimbalabs) for further announcements.

Come to Gimbalabs [Discord](https://discord.gg/nCq8sSChBN) and start interacting with the Gimbalabs community.

\---

## **自分自身のPlutusコントラクトを効果的に作成し、デプロイし、管理する方法 - パート2**

![Fig 1. Gimbalabs Plutus PBL - Japanese version](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/7/4/748351f128af0719e14052cd56b5344fb6a4cb59_2_1000x562.png)Fig 1. Gimbalabs Plutus PBL - Japanese version

**この包括的な3部作シリーズの第2部は、私たちの愛される Gimbalabs の講師、Professor Mix (**[M. Ali Modiri](https://github.com/input-output-hk/Certification-working-group/blob/vuln-from-audits/Cardano%20Threat%20Intelligence/Vulnerabilities/CTI-2023-ADA-11-04.md))によって[Gimbalabs Plutus Project-Based Learning](https://ja.plutuspbl.io/)のために作成され、教えられます。このシリーズでは、自分自身のPlutus契約を効果的に作成、展開、管理する方法についての理解を深めるための旅を続けます。

## **Student Learning Targets (SLT)**

*   私は自分自身のPlutus契約を計画し、実装することができます。
    
*   私はPlutusプロジェクトを作成し、更新し、メンテナンスすることができます。
    
*   以下のシナリオで時間がどのように機能するかを理解しています：Plutus（‘POSIXTime’）、‘Ledger’（‘Slot Number’）。
    

シリーズの[第1部](https://forum.cardano.org/t/gimbalabs-series-create-deploy-and-manage-your-own-plutus-contracts-effectively-part-1/127780)では、最初の**SLT**：**_私は自分自身のPlutus契約を計画し、実装することができます_**をカバーしました。そして、今日のこの第2部では、次のSLTに焦点を当てます：

## **_私はPlutusプロジェクトを作成し、更新し、メンテナンスすることができます。_**

[![Fig 2. Gimbalabs Plutus PBL Japanese - SLT 302.2](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/d/4/d40c0921607a4a3c3ba04d19cc3a3c75aef05e46_2_1000x562.png)Fig 2. Gimbalabs Plutus PBL Japanese - SLT 302.2](https://plutuspbl.io/modules/302/3022)

では、「私ができる」という実感を得ましょう。

\---

あなたは、Plutusプロジェクトをゼロから作成するプロセスを学びます。プロジェクトの構造やファイルの組織、開発環境のセットアップなど、重要なステップについて学びます。

効果的にバージョン管理システムを利用する方法を学び、Plutusプロジェクトの変更をシームレスに管理および追跡する能力を身につけます。

あなたは、Cardanoエコシステムの最新の進歩に常に追従し、プロジェクトを最新の状態に保つことに関する専門知識を身につけます。

# Plutusプロジェクトの作成：ステップバイステップガイド

Plutusプロジェクトを効果的に開始するには、次の包括的な手順に従って、`cabal.project`ファイルを作成し、開発環境をセットアップしてください。

### ステップ1：`Plutus-Apps`リポジトリに移動します。

*   [Plutus-Apps](https://github.com/input-output-hk/plutus-apps)リポジトリを訪れます
    

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Why Plutus-Apps?](https://www.youtube.com/clip/UgkxF3xhx9Ec6H7OdZW8o9cEkOkHiW-fE62u?si=X_261nzdGB-De_Oj)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

### ステップ2：バージョンを選択します。

*   あなたは、特定の`Plutus-Apps`リリースバージョンまたは特定の`Plutus-Apps` commit hash を選択するオプションがあります。
    
*   リリースバージョンの場合は、[release/tags](https://github.com/input-output-hk/plutus-apps/tags)をクリックし、好みのバージョンを選択してください。
    
*   特定のcommit hashを希望する場合は、[commit](https://github.com/input-output-hk/plutus-apps/commits/main)ページに移動し、使用したいhashを見つけます。
    

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ The importance of choosing right plutus-apps "flavor" (a.k.a. version)](https://www.youtube.com/clip/UgkxfCulrbrFawAXhWJwb9PCBh6hAOfPHIlH?si=v6t8VSuLbuLsE9AZ)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Choosing a plutus-apps version](https://www.youtube.com/clip/UgkxpdqB8l2UzWrXdDLbQMrAKFobOlkd9ii2?si=eE90wDbHkbK0hTJ-)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

### ステップ3：Plutus-Appsリポジトリをクローンします。

*   あなたのコンピュータで既に`git clone`を使用して`Plutus-Apps`リポジトリをクローンしているか、またはあなたのコンピュータ内の既存のクローン内にいることを確認してください。
    

### ステップ4：Nix開発環境をセットアップします。

*   ターミナルを開いて、`Plutus-Apps`ディレクトリに移動します。
    

```hljs
$ cd plutus-apps

```

*   リポジトリを更新し、選択したバージョン（tagまたはcommit hash）をチェックアウトしてください。
    

```hljs
$ git pull
$ git checkout <TAG_OR_COMMIT_HASH>

```

*   Nix開発環境を初期化してください。
    

```hljs
$ nix develop

```

#### _ステップ3と4の実行に関する詳細は、_[こちら](https://ja.plutuspbl.io/modules/101/1014)でご確認ください。

### ステップ5：あなたのPlutusプロジェクトフォルダーを作成します。

*   ターミナルで、Plutusプロジェクト用のフォルダを作成します。選択したプロジェクト名で`YOUR_PROJECT_NAME`を置き換えてください。
    

```hljs
$ mkdir YOUR_PROJECT_NAME
$ cd YOUR_PROJECT_NAME

```

*   `cabal.project`ファイルを作成してください。
    

```hljs
$ touch cabal.project

```

### ステップ6：`cabal.project`ファイルを記入してください。

*   今、選択したPlutus-Appsのバージョンに基づいて、`cabal.project`ファイルにパッケージ情報を含める必要があります。
    
*   リリースバージョンの場合:
    
    *   リリース日の横にあるcommit hashの短縮形をクリックしてください。 右側にある「Browse Files」をクリックします。
        
*   commit hashの場合：
    
    *   検索バーでcommit hashを検索します。
        

```hljs
repo:IntersectMBO/plutus-apps <COMMIT_HASH>

```

*   commitに対応する検索結果をクリックしてください。
    
*   右上隅にある「Browse Files」ボタンを見つけ、クリックします。
    
*   いずれの場合も、選択したtagまたはcommit hashに関連するPlutus-Appsのバージョンに到達します。
    
*   そのページで`cabal.project`ファイルを見つけ、それをクリックします。
    
*   「Raw」ボタンをクリックして、`cabal.project`ファイルの内容を取得します。
    
*   内容をコピーします。
    

### ステップ7：cabal.projectファイルを編集します。

コピーした内容を、プロジェクトフォルダ内の`cabal.project`ファイルに貼り付けます。 コピーした内容の最後に、以下の行を追加します。`<THE_TAG_OR_COMMIT_HASH_YOU_HAVE_CHOOSE>`を選択したtagまたはcommit hashに置き換えます。

```hljs
source-repository-package
    type: git
    location: https://github.com/input-output-hk/plutus-apps.git
    tag: <THE_TAG_OR_COMMIT_HASH_YOU_HAVE_CHOOSE>
    subdir:

```

*   `cabal.project`ファイル内の`packages:`セクションを見つけます。
    
*   `packages:`セクションの内容を切り取ります。それを、追加した`source-repository-package`セクション内の`subdir`行の下に貼り付けます。
    
*   これらの手順を完了すると、Plutusプロジェクトの開始、開発環境の設定、および必要なパッケージ情報を含む`cabal.project`ファイルのセットアップが成功します。次のステップは、プロジェクトの`.cabal`ファイルを作成することです。
    

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Setting the cabal.project file of your project](https://www.youtube.com/clip/Ugkxljhk4nHfz2G-jTD-ZaJTCuC5d4GBnLMf?si=9DuPe9UharmzaULg)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

# Cabalファイルの作成

`cabal.project`ファイルが準備されたので、Plutusプロジェクトの`.cabal`ファイルを作成する準備が整いました。 `.cabal`ファイルは、プロジェクトのメタデータや設定を指定するために重要です。以下はステップバイステップのガイドです：

### ステップ1：`.cabal`ファイルを作成します。

*   ターミナルを開き、プロジェクトディレクトリに移動します。
    
*   `<YOUR_PROJECT_NAME>`をプロジェクトの名前に置き換えて、`.cabal`ファイルを作成します。
    

```hljs
$ touch <YOUR_PROJECT_NAME>.cabal

```

### ステップ2：プロジェクトのメタデータを定義します。

このセクションは、プロジェクトに関する重要なメタデータを定義し、その管理や配布に必要な情報を提供するために用意されています。このセクションのテンプレートを以下に示します。

```hljs
-- Specifies the version of the Cabal specification used for this project.
Cabal-Version:            3.0

-- The name of the Plutus project, in this case, "token-vesting".
Name:                     token-vesting

-- The version number of the project. This helps in managing different versions of your project.
Version:                  1.0.0

-- The author or organization responsible for creating the project, in this case, "Gimbalabs".
Author:                   Gimbalabs

-- Indicates the build type, "Simple" in this case, which is suitable for most projects.
Build-Type:               Simple

-- Specifies the project's license. Here, it's licensed under GPL version 3.0 or later.
License:                  GPL-3.0-or-later

-- References the file that contains the full text of the project's license for reference.
License-file:             LICENSE

```

### ステップ3：Common Project Config

*   このセクションでは、Language ExtensionsやGHC (Glasgow Haskell Compiler) Optionsなどの一般的なプロジェクトの設定を定義できます。
    
*   Language Extensions:
    
    *   Language Extensionsは、Haskellで特定の言語機能を有効にする強力なツールです。必要に応じてコードの機能を拡張することができます。スマートコントラクトファイルでこれらの拡張機能を選択的に有効にするには、LANGUAGE pragmaを使用します：`{-# LANGUAGE <Extension>, <Extension> #-}`。
        
    *   プロジェクトに適したlanguage extensionsを特定するには、利用可能な拡張機能の詳細なリストを参照できます。各拡張機能には、特定のシナリオで有益な独自の機能が提供されていますので、適切な拡張機能を調査して選択することで、プロジェクトの機能を大幅に向上させることができます。
        
*   GHC Options (Compiler Flags):
    
    *   GHC options、またはcompiler flagsは、Glasgow Haskell Compiler (GHC)とコンパイルプロセスのさまざまな側面に対して細かい制御を提供します。
        
    *   これらのオプションを使用すると、Haskellコードのコンパイルと実行方法をカスタマイズできます。これらを使用して、パフォーマンスの最適化、デバッグの有効化、または他のコンパイラ関連の動作の設定を行うことができます。
        

```hljs
Common project-config
  default-language:       Haskell2010

  default-extensions:     NoImplicitPrelude
                          OverloadedStrings
                          ExplicitForAll
                          ScopedTypeVariables
                          DeriveGeneric
                          StandaloneDeriving
                          DeriveLift
                          GeneralizedNewtypeDeriving
                          DeriveFunctor
                          DeriveFoldable
                          DeriveTraversable
                          LambdaCase
                          MultiParamTypeClasses
                          TypeOperators
                          FlexibleInstances
                          NamedFieldPuns
                          TypeFamilies
                          FlexibleContexts
                          DeriveAnyClass
                          DerivingStrategies
                          DerivingVia
                          DataKinds
                          PatternGuards
                          OverloadedRecordFields
                          GADTs
                          ImportQualifiedPost
                          MultiWayIf
                          RankNTypes
                          RecordWildCards
                          TemplateHaskell
                          TypeApplications
                          UndecidableInstances
                          DuplicateRecordFields

  ghc-options:            -Wall
                          -Wcompat
                          -Wincomplete-record-updates
                          -Wnoncanonical-monad-instances
                          -Wredundant-constraints
                          -Wincomplete-uni-patterns
                          -Wunused-packages
                          -Widentities
                          -fno-ignore-interface-pragmas
                          -fno-omit-interface-pragmas
                          -fobject-code
                          -fno-specialise
                          -fno-spec-constr
                          -fno-strictness

```

### ステップ4：Libraryの設定（あなたの具体的な内容に置き換えてください）

*   Libraryセクションでは、プロジェクトのsource directoriesとexposed modulesを指定できます。モジュール名、ディレクトリ構造、および依存関係をカスタマイズしてください。
    

```hljs
Library
  import:           project-config
  hs-source-dirs:   <MODULE_FOLDERS_OR_FILES_DIRECTORY_NAME>
  exposed-modules:
                    <MODULE_NAME>.<SUB_MODULE_NAME>.<NAME_OF_THE_FILE>

  build-depends:
                    <PACKAGE_NAME_1>
                  , <PACKAGE_NAME_2>
                  , <PACKAGE_NAME_3>
                  , ...

```

### ステップ5：Executableの設定（あなたの具体的な内容に置き換えてください）

*   プロジェクトに実行可能ファイルが含まれる場合は、このセクションでそれらの設定を定義します。プロジェクトの要件に応じて設定を調整してください。
    

```hljs
executable <EXECUTABLE_FILE_NAME>
  default-language: Haskell2010
  main-is: <EXECUTABLE_FILE_NAME>.hs
  hs-source-dirs:      <EXECUTABLE_FILE_DIRECTORY_NAME>
  ghc-options:         -threaded -rtsopts "-with-rtsopts=-T"
  build-depends:        <PACKAGE_NAME_1>
                      , <PACKAGE_NAME_2>
                      , <PACKAGE_NAME_3>
                      , ...

```

![](https://global.discourse-cdn.com/business4/uploads/cardano/optimized/3X/5/3/53bcc98ea4ecfc54c0aa62b961dc17cda7771248_2_1000x562.jpeg)

### [✂️ Setting the myproject.cabal file of your project](https://www.youtube.com/clip/UgkxNzwzherQ2gjy-AOD0UpT-ynYdUIq3nwf?si=B8x7pkdWl3_LR0-C)

60 seconds · Clipped by Sebastian Pabon · Original video "Plutus PBL Live Coding 2023-09-28" by Gimbalabs

\---

オリジナルのレッスン（ビデオレッスンを含む）は[こちら](https://ja.plutuspbl.io/modules/302/3022)からご覧いただけます。

今後のお知らせについては、[Gimbalabs](https://twitter.com/gimbalabs)をフォローしてください。

Gimbalabsの[Discord](https://discord.gg/nCq8sSChBN)に参加して、Gimbalabsコミュニティとのやり取りを始めましょう。  
![:man_bowing:](https://emoji.discourse-cdn.com/apple/man_bowing.png?v=12 ":man_bowing:")
