# Decentralized Star Notary

# Objective

Create and implement an [ERC-721](http://erc721.org/) smart contract with its proper UT and a basic UI to "Register" (Add) and "Retrieve" a "Digital Asset" (in this case, a Star) by its "Token ID".

The contract should cover the following functionality:

* Creation
* Existence
* Token to Asset (Star)
* Transaction: Selling and Buying
* Transferring
* Exchanging

# Installation

```
cd erc721-smart-contract
cd smart_contracts
npm install
```

_Note:_ [electron](https://github.com/electron) will be downloaded and installed.

## Deploying locally

1. Install `truffle` and `ganache-cli` globally

```
npm install --global truffle ganache-cli
```

2. Open one terminal and execute

```
ganache-cli
```

Example result:

```
Ganache CLI v6.2.4 (ganache-core: 2.3.2)

Available Accounts
==================
(0) 0xdf224df7a6922a153c22f523a26e942703e7dc79 (~100 ETH)
(1) 0x328be691a2ad0a713d8d59602e694fc9d01a852e (~100 ETH)
(2) 0x5e96adbbada2e30f5857c4d35490c540790c6193 (~100 ETH)
(3) 0x4d56d91a73de76189268dd082a2d6393dc981999 (~100 ETH)
(4) 0x0949c6244925d6c77982ae5092f491f4d474454d (~100 ETH)
(5) 0x6d35ab7ae32e86324a328823c3627dfdabca95c1 (~100 ETH)
(6) 0xb0583f897ab701ac9f5671306c9eca297e7763f5 (~100 ETH)
(7) 0x2f7ae937adc457a6eb15f7a30d040f51df270de2 (~100 ETH)
(8) 0xec0208919d5c82cffe00c58228108af077564493 (~100 ETH)
(9) 0x1f6bc2f37a5d70b737575fcf53b3aad7de09e77a (~100 ETH)

Private Keys
==================
(0) ...?
(1) ...?
(2) ...?
(3) ...?
(4) ...?
(5) ...?
(6) ...?
(7) ...?
(8) ...?
(9) ...?

HD Wallet
==================
Mnemonic:      ...?
Base HD Path:  m/44'/60'/0'/0/{account_index}

Gas Price
==================
20000000000

Gas Limit
==================
6721975

Listening on 127.0.0.1:8545
```

3. Open another terminal and execute

```
truffle develop
```

Example result:

```
Truffle Develop started at http://127.0.0.1:9545/

Accounts:
(0) 0x931d4b4d410d9ceb89b35132df8b9da8d39eba98
(1) 0xaf7aa7c665885743ba4e77e7e3dd591d737691ce
(2) 0x7e62bab71d131ad7df42bf01293818347127fd18
(3) 0xf65ecebee0e5978ddd1cbdda77b9b93d1b793218
(4) 0xc472dfc3f7a2c5f27c5c7cf6ba8f2724c8c7e8b2
(5) 0x168ecc20dac109c611abc1ff6a224a0d90996763
(6) 0x04b9ba43bd087ca726b94f5f3e26982fcc654694
(7) 0x6b5629613c795683fa1f88bcdd40b61ebcbbafb6
(8) 0xfe0679a313ef4350c91e5077012b7bd306855519
(9) 0x43c7e124bc58cf3f71e259c65ad4b44c4dea7cc8

Private Keys:
(0) ...?
(1) ...?
(2) ...?
(3) ...?
(4) ...?
(5) ...?
(6) ...?
(7) ...?
(8) ...?
(9) ...?

Mnemonic: ...?

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.

truffle(develop)>
```

4. In truffle´s terminal, run the tests

```
test
```

Expected output:

```
Using network 'develop'.

Compiling .\contracts\StarNotary.sol...


  Contract: StarNotary
    Token information
      √ displays the right token name
      √ displays the right token symbol (833ms)
    Star Creation
      √ can create a star and retrieve its name (149ms)
      transfering Stars
        √ can transfer a star (109ms)
      buying and selling stars
        √ user1 can put up their star for sale (108ms)
        user2 can buy a star that was put up for sale
          √ user2 is the owner of the star after they buy it (90ms)
          √ user2 ether balance changed correctly (81ms)
      transfering tokens simultaneously between 2 owners
        √ changes token from user1 to user 2 and viceversa (117ms)
    Other functions tests...
      checkIfStarExist()
        √ verifies if a Star was registered
      mint() and ownerOf()
        √ verifies ownership after mint (68ms)
      approve() and getApproved()
        √ approves and get approved. (71ms)
      setApprovalForAll()
        √ sets approval for all (84ms)
      safeTransferFrom()
        √ can be transferred (91ms)


  13 passing (4s)
```

5. Compile executing

```
compile
```

Example output:

```
Compiling .\contracts\StarNotary.sol...
Writing artifacts to .\build\contracts
```

6. Migrate or deploy

```
migrate
```

Example output:

```
Starting migrations...
======================
> Network name:    'development'
> Network id:      1546555279160
> Block gas limit: 6721975


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xdac32349b8284c9cc1aa90804838c6c71a2e2430b3e1cb2e3158e6e9eaf2ecec
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 0
   > contract address:    0xfc9C8010288d57e7921F6Bd19458dBf6cdFa5Cbd
   > account:             0x1F5403BFd20157547f2A29FA2149dAE46195997B
   > balance:             99.99445076
   > gas used:            277462
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00554924 ETH


- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00554924 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0x55404c9144cba9d6db3f8df175a887f246c2332fa9546f41d54e5706a5f0fb45
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 0
   > contract address:    0x44810F8ABe4829bc59cE9a2E9018Dc2c9FEE4FE2
   > account:             0x1F5403BFd20157547f2A29FA2149dAE46195997B
   > balance:             99.92991134
   > gas used:            3184963
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06369926 ETH


- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.06369926 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.0692485 ETH
```

## Deploying to Rinkeby

In truffle´s terminal, execute:

```
migrate --reset --network rinkeby
```

Output:

```
Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 7000000


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x4fda5a7d1a31b0c1c1039df7af5979f5d32cd11283773bd3339bd413ad54f045
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 4
   > contract address:    0x2eE13C495BE37d1A1aa3651B429c4be31f504cb4
   > account:             0x7f04D59435Eaf5059F038Cfb5448d8f8De0B8F56
   > balance:             18.468876334
   > gas used:            277462
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00277462 ETH


- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00277462 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0x3041fce7bdc905e64c86c7f3df8c1370dfe328e8a437a5eff0903070e14e9e73
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 12
   > contract address:    0xF7c71e77b4E0670019D4e4C89Be877428A25489d
   > account:             0x7f04D59435Eaf5059F038Cfb5448d8f8De0B8F56
   > balance:             18.436606624
   > gas used:            3184963
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03184963 ETH


- Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03184963 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.03462425 ETH
```

### Contract address

https://rinkeby.etherscan.io/address/0xF7c71e77b4E0670019D4e4C89Be877428A25489d

(TxHash): `0x3041fce7bdc905e64c86c7f3df8c1370dfe328e8a437a5eff0903070e14e9e73`

### Open the Truffle´s console with rinkeby network...

```
truffle console --network rinkeby
```

### Create Star

```
StarNotary.deployed().then(function(instance){myDapp = instance;});
```

```
myDapp.createStar("Star power 103!", "I love my wonderful star", "ra_032.155", "dec_121.874", "mag_245.978");
```

Output:

```
{ tx: '0xb02eed37b65a3eb19761847279a33bc0c8bca2f00288cf7a938d8cc29fba92ca',
  receipt:
   { blockHash: '0x104e71fab0766c23ea57585d789b0bee30947178835064c171cf826ccfad6d2f',
     blockNumber: 3628448,
     contractAddress: null,
     cumulativeGasUsed: 513284,
     from: '0x7f04d59435eaf5059f038cfb5448d8f8de0b8f56',
     gasUsed: 238860,
     logs: [ [Object] ],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000002040000000000000000000000000008000000000000000000040000000000000000000000000000020000000000000000000800000000000000000000000010000000100000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000060000000000000000001000000000000000000000000000000000000000000400000',
     status: true,
     to: '0xf7c71e77b4e0670019d4e4c89be877428a25489d',
     transactionHash: '0xb02eed37b65a3eb19761847279a33bc0c8bca2f00288cf7a938d8cc29fba92ca',
     transactionIndex: 1,
     rawLogs: [ [Object] ] },
  logs:
   [ { address: '0xF7c71e77b4E0670019D4e4C89Be877428A25489d',
       blockHash: '0x104e71fab0766c23ea57585d789b0bee30947178835064c171cf826ccfad6d2f',
       blockNumber: 3628448,
       logIndex: 1,
       removed: false,
       transactionHash: '0xb02eed37b65a3eb19761847279a33bc0c8bca2f00288cf7a938d8cc29fba92ca',
       transactionIndex: 1,
       id: 'log_b4013ce1',
       event: 'Transfer',
       args: [Object] } ] }
```

In Etherscan...
https://rinkeby.etherscan.io/tx/0xb02eed37b65a3eb19761847279a33bc0c8bca2f00288cf7a938d8cc29fba92ca

### Put Star on Sale

```
myDapp.putStarUpForSale(1, 10000000000);
```

Output:

```
{ tx: '0x57e5634cb70b31a60e1a5c559e38b417c12727c6e8b4a1492c1e491f51423f80',
  receipt:
   { blockHash: '0x63d503ea49e7b0cd55804c4a0de202637959daa32ce2164706ed67e6f26dfeac',
     blockNumber: 3628670,
     contractAddress: null,
     cumulativeGasUsed: 72449,
     from: '0x7f04d59435eaf5059f038cfb5448d8f8de0b8f56',
     gasUsed: 45043,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0xf7c71e77b4e0670019d4e4c89be877428a25489d',
     transactionHash: '0x57e5634cb70b31a60e1a5c559e38b417c12727c6e8b4a1492c1e491f51423f80',
     transactionIndex: 1,
     rawLogs: [] },
  logs: [] }
```

In Etherscan...
https://rinkeby.etherscan.io/tx/0x57e5634cb70b31a60e1a5c559e38b417c12727c6e8b4a1492c1e491f51423f80

### Retrieve token name

```
myDapp.name();
```

Output:

```
'UdaTokenName'
```

### Retrieve token symbol

```
myDapp.symbol();
```

Output:

```
'USYMB'
```

### Exchange stars

I decided to go with one caller approach: we see user1 as a "source of trust".
In a real environment, logic would be applied to verify that both users are transferring their assets before crediting one to either of them.
First, be sure that both accounts have an Star.
In my case, account1 has the Star with name "Star power 103!" and token 1.
And, account2 has the Star with name "SuperStar" and token 3.

```
myDapp.exchangeStars('0x7f04D59435Eaf5059F038Cfb5448d8f8De0B8F56', 1, '0xb74E0d06B4C917A10E0744A14498047b1D1B7267', 3);
```

Output:

```
{ tx: '0xaee0bb570cf51bbde91777705654830637e4503569445809da303e223d7f9bb7',
  receipt:
   { blockHash: '0xd812fe3312799c4230e966af31a283c143828544840adcb5728626613c313f3b',
     blockNumber: 3650085,
     contractAddress: null,
     cumulativeGasUsed: 149327,
     from: '0x7f04d59435eaf5059f038cfb5448d8f8de0b8f56',
     gasUsed: 75513,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     status: true,
     to: '0xf7c71e77b4e0670019d4e4c89be877428a25489d',
     transactionHash: '0xaee0bb570cf51bbde91777705654830637e4503569445809da303e223d7f9bb7',
     transactionIndex: 2,
     rawLogs: [] },
  logs: [] }
```

## Interact through the WebApp

### Launch the local server

```
node server
```

Alternatively, for development, you can run: `nodemon server`

Then go to http://127.0.0.1:3000/

### Check a Star by Token

In Retrieve Star section, put your token. Example: **1** and click the button _Retrieve Star Data_.

Output (if everything went well):

```
Name: Star power 103!
Story: I love my wonderful star
Coordinates
RA: ra_032.155
DEC: dec_121.874
MAG: mag_245.978
```

### Register Star

Fill the inputs with your data.
Example:

```
Name: Star 2
Story: Great Star
Coordinates
RA: ra_2
DEC: dec_2
MAG: mag_2
```

Then, click in _Add Star_.

MetaMask will ask to CONFIRM the operation. Please, click in _CONFIRM_ in the pop-up.
After 15 seconds (+/-), you transaction should be confirmed.

Output (if everything went well):
https://rinkeby.etherscan.io/tx/0xc4c692d5ffadc29d7c061d1801bd9f7321a9a8bc39af9dec4f77ef5a0822a96d

In `Tokens Transfered: From 0x0000000000000000000000000000000000000000To 0x7f04d59435eaf5059f038cfb5448d8f8de0b8f56For ERC-721 TokenID [5] ERC-721 Token` you can see the **TokedID**; in this case, **5**. You can use that token to retrieve the Star info.

## Exchanging tokens

I tried to exchange tokens through MetaMask, failing both times:

* https://rinkeby.etherscan.io/tx/0x77663844eb161a66bac70594b14316469dad1c47e22019bf5670486c53df2ed9
* https://rinkeby.etherscan.io/tx/0x7e9ad711950fc9635f4cb68e7745e7159702b55366d3d2c9819e7d732f4964a9
  However, since `MetaMask` can only process `transfers` for `ERC-720` contracts, I ended using `MyEtherWallet`: https://www.myetherwallet.com/#contracts

## Author Notes

For privacy...

I´m deleting...

1. Personal configuration in `truffle-config.js` (infura link and seed)
2. The artifact or build output `build/contracts/*` since some of those files explicitly expose my OS username

And excluding...

3. `node_modules/` I´m using openzeppelin-solidity so you can install the dependencies or check them in their repo.
   Example for ERC-721: https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/token/ERC721/ERC721.sol

## Useful resources

* https://medium.com/coinmonks/the-many-ways-to-deploy-your-smart-contract-to-rinkeby-network-38cadf7b20be
* https://medium.com/coinmonks/exploring-non-fungible-token-with-zeppelin-library-erc721-399cb180cfaf
* https://github.com/trufflesuite/truffle-contract

## Credits

Background image: [Scenic View Of Rocky Mountain During Evening](https://www.pexels.com/photo/scenic-view-of-rocky-mountain-during-evening-1624438/) - By: Eberhard Grossgasteiger
