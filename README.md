# bo-crypto-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

Forked from [ognus/wallet-address-validator](https://github.com/ognus/wallet-address-validator).

**File size is ~40K (minifed and gzipped)**.

## Whats new
= Support for eosio / EOS
- Support cashAddr for Bitcoin Cash / BCH
- Support for Stellar Lumens / XLM
- Support ofr OMG, ZRX and BAT
- Support ofr Algorand/ALG
- Support for Tether/USDT (ETH address only for now)
- Support for Tezos/XTZ
- Support for CHAINLINK
- Support for DAI, KNC and REP
- Support for Maker/MKR

## Installation

### NPM
```
npm install bo-crypto-address-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies

* Auroracoin/AUR, `'auroracoin'` or `'AUR'`

* Bankex/BKX, `'bankex'` or `'BKX'`
* BeaverCoin/BVC, `'beavercoin'` or `'BVC'`
* Biocoin/BIO, `'biocoin'` or `'BIO'`
* Bitcoin/BTC, `'bitcoin'` or `'BTC'`
* BitcoinCash/BCH, `'bitcoincash'` or `'BCH'`
* BitcoinGold/BTG, `'bitcoingold'` or `'BTG'`
* BitcoinPrivate/BTCP, `'bitcoinprivate'` or `'BTCP'`
* BitcoinZ/BTCZ, `'bitcoinz'` or `'BTCZ'`

* Tether/USDT, `'Tether'` or `'USDT'` (ETH address only for now)
* OmiseGO/OMG, `'OmiseGO'` or `'OMG'`
* 0x/ZRX, `'0x'` or `'ZRX'`
* BAT/BAT, `'BAT'`
* Algorand/ALG, `'Algorand'` or `'ALG'`

* Callisto/CLO, `'callisto'` or `'CLO'`

* Dash, `'dash'` or `'DASH'`
* Decred/DCR, `'decred'` or `'DCR'`
* Digibyte/DGB, `'digibyte'` or `'DGB'`
* Dogecoin/DOGE, `'dogecoin'` or `'DOGE'`

* Ethereum/ETH, `'ethereum'` or `'ETH'`
* EthereumClassic/ETH, `'ethereumclassic'` or `'ETC'`
* EthereumZero/ETZ, `'etherzero'` or `'ETZ'`

* Freicoin/FRC, `'freicoin'` or `'FRC'`

* Garlicoin/GRLC, `'garlicoin'` or `'GRLC'`

* Hush/HUSH, `'hush'` or `'HUSH'`

* Komodo/KMD, `'komodo'` or `'KMD'`

* Litecoin/LTC, `'litecoin'` or `'LTC'`

* Eosio/EOS, `'eosio'` or `'EOS'`

* StellarLumens/XLM, , `'stellarlumens'` or `'XLM'`

* Megacoin/MEC, `'megacoin'` or `'MEC'`

* Monero/XMR, `'monero'` or `'XMR'`

* Namecoin/NMC, `'namecoin'` or `'NMC'`
* Nano/NANO, `'nano'` or `'NANO'`
* NEO/NEO, `'NEO'` or `'NEO'`
* NeoGas/GAS, `'neogas'` or `'GAS'`

* Peercoin/PPCoin/PPC, `'peercoin'` or `'PPC'`
* Primecoin/XPM, `'primecoin'` or `'XPM'`
* Protoshares/PTS, `'protoshares'` or `'PTS'`

* Qtum/QTUM, `'qtum'` or `'QTUM'`

* Raiblocks/XRB, `'raiblocks'` or `'XRB'`
* Ripple/XRP, `'ripple'` or `'XRP'`

* Snowgem/SNG, `'snowgem'` or `'SNG'`

* Vertcoin/VTC, `'vertcoin'` or `'VTC'`

* Votecoin/VTC, `'votecoin'` or `'VOT'`

* Zcash/ZEC, `'zcash'` or `'ZEC'`

* Zclassic/ZCL, `'zclassic'` or `'ZCL'`

* ZenCash/ZEN, `'zencash'` or `'ZEN'`

* CHAINLINK/LINK, `'chainlink'` or `'LINK'`

* Dai/DAI, `'dai'` or `'DAI'`

* Dai/DAI, `'makter'` or `'MKR'`

* Kyber/KNC, `'kyber'` or `'KNC'`

* Augur/REP, `'augur'` or `'REP'`


### Usage example

#### Node
```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet');
if(valid)
      console.log('This is a valid address');
else
      console.log('Address INVALID');

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
    alert('This is a valid address');
else
    alert('Address INVALID');

// This should show a pop up with text 'This is a valid address'.
```
