var XRPValidator = require('./ripple_validator');
var ETHValidator = require('./ethereum_validator');
var BTCValidator = require('./bitcoin_validator');
var BCHValidator = require('./bitcoincash_validator');
var EOSValidator = require('./eos_validator');
var XMRValidator = require('./monero_validator');
var NANOValidator = require('./nano_validator');
var XLMValidator = require ('./lumen_validator');
var ALGValidator = require('./algorand_validator');
var XTZValidator = require('./tezos_validator');

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
var CURRENCIES = [{
    name: 'bitcoin',
    symbol: 'btc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'bitcoincash',
    symbol: 'bch',
    addressTypes: {prod: ['00', '05', 'bitcoincash'], testnet: ['6f', 'c4', 'bchtest']},
    validator: BCHValidator
},{
    name: 'litecoin',
    symbol: 'ltc',
    addressTypes: {prod: ['30', '05', '32'], testnet: ['6f', 'c4', '3a']},
    validator: BTCValidator
},{ // Support ETH address only for now
    name: 'Tether',
    symbol: 'usdt',
    validator: ETHValidator
    // addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
    // validator: BTCValidator
},{
    name: 'stellarlumens',
    symbol: 'xlm',
    validator: XLMValidator
},{
    name: 'Algorand',
    symbol: 'alg',
    validator: ALGValidator
},{
    name: 'Basic Attention Token',
    symbol: 'bat',
    validator: ETHValidator
},{
    name: 'OmiseGO',
    symbol: 'omg',
    validator: ETHValidator
},{
    name: '0x',
    symbol: 'zrx',
    validator: ETHValidator
},{
    name: 'peercoin',
    symbol: 'ppc',
    addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'dogecoin',
    symbol: 'doge',
    addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']},
    validator: BTCValidator
},{
    name: 'beavercoin',
    symbol: 'bvc',
    addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator,
},{
    name: 'freicoin',
    symbol: 'frc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'eosio',
    symbol: 'eos',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: EOSValidator
},{
    name: 'protoshares',
    symbol: 'pts',
    addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'megacoin',
    symbol: 'mec',
    addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'primecoin',
    symbol: 'xpm',
    addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'auroracoin',
    symbol: 'aur',
    addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'namecoin',
    symbol: 'nmc',
    addressTypes: {prod: ['34'], testnet: []},
    validator: BTCValidator
},{
    name: 'biocoin',
    symbol: 'bio',
    addressTypes: {prod: ['19', '14'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'garlicoin',
    symbol: 'grlc',
    addressTypes: {prod: ['26', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'vertcoin',
    symbol: 'vtc',
    addressTypes: {prod: ['0x', '47'], testnet: ['6f', 'c4']},
    segwitHrp: 'vtc',
    validator: BTCValidator
},{
    name: 'bitcoingold',
    symbol: 'btg',
    addressTypes: {prod: ['26', '17'], testnet: ['6f', 'c4']},
    validator: BTCValidator
},{
    name: 'komodo',
    symbol: 'kmd',
    addressTypes: {prod: ['3c', '55'], testnet: ['0','5']},
    validator: BTCValidator
},{
    name: 'bitcoinz',
    symbol: 'btcz',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'bitcoinprivate',
    symbol: 'btcp',
    expectedLength: 26,
    addressTypes: {prod: ['1325','13af'], testnet: ['1957', '19e0']},
    validator: BTCValidator
},{
    name: 'hush',
    symbol: 'hush',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'snowgem',
    symbol: 'sng',
    expectedLength: 26,
    addressTypes: {prod: ['1c28','1c2d'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'zcash',
    symbol: 'zec',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'zclassic',
    symbol: 'zcl',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'zencash',
    symbol: 'zen',
    expectedLength: 26,
    addressTypes: {prod: ['2089','2096'], testnet: ['2092','2098']},
    validator: BTCValidator
},{
    name: 'votecoin',
    symbol: 'vot',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8','1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
},{
    name: 'decred',
    symbol: 'dcr',
    addressTypes: {prod: ['073f', '071a'], testnet: ['0f21', '0efc']},
    hashFunction: 'blake256',
    expectedLength: 26,
    validator: BTCValidator
},{
    name: 'digibyte',
    symbol: 'dgb',
    addressTypes: {prod: ['1e'], testnet: []},
    validator: BTCValidator
},{
    name: 'ethereum',
    symbol: 'eth',
    validator: ETHValidator,
},{
    name: 'etherzero',
    symbol: 'etz',
    validator: ETHValidator,
},{
    name: 'ethereumclassic',
    symbol: 'etc',
    validator: ETHValidator,
},{
    name: 'callisto',
    symbol: 'clo',
    validator: ETHValidator,
},{
    name: 'ripple',
    symbol: 'xrp',
    validator: XRPValidator,
},{
    name: 'dash',
    symbol: 'dash',
    addressTypes: {prod: ['4c', '10'], testnet: ['8c', '13']},
    validator: BTCValidator
},{
    name: 'neo',
    symbol: 'neo',
    addressTypes: {prod: ['17'], testnet: []},
    validator: BTCValidator
},{
    name: 'neogas',
    symbol: 'gas',
    addressTypes: {prod: ['17'], testnet: []},
    validator: BTCValidator
},{
    name: 'qtum',
    symbol: 'qtum',
    addressTypes: {prod: ['3a', '32'], testnet: ['78', '6e']},
    validator: BTCValidator
},{
    name: 'bankex',
    symbol: 'bkx',
    validator: ETHValidator
},{
    name: 'monero',
    symbol: 'xmr',
    addressTypes: {prod: ['18'], testnet: ['53']},
    iAddressTypes: {prod: ['19'], testnet: ['54']},
    validator: XMRValidator
},{
    name: 'nano',
    symbol: 'nano',
    validator: NANOValidator,
},{
    name: 'raiblocks',
    symbol: 'xrb',
    validator: NANOValidator,
},{
    name: 'tezos',
    symbol: 'xtz',
    validator: XTZValidator
},{
    name: 'chainlink',
    symbol: 'link',
    validator: ETHValidator,
},{
    name: 'dai',
    symbol: 'dai',
    validator: ETHValidator,
},{
    name: 'maker',
    symbol: 'mkr',
    validator: ETHValidator,
},{
    name: 'kyber',
    symbol: 'knc',
    validator: ETHValidator,
},{
    name: 'augur',
    symbol: 'rep',
    validator: ETHValidator,
},{
    name: 'uniswap',
    symbol: 'uni',
    validator: ETHValidator,
},{
    name: 'loopring',
    symbol: 'lrc',
    validator: ETHValidator,
},{
    name: 'enjin',
    symbol: 'enj',
    validator: ETHValidator,
},{
    name: 'polygon',
    symbol: 'matic',
    validator: ETHValidator,
},{
    name: 'decentraland',
    symbol: 'mana',
    validator: ETHValidator,
},{
    name: 'compound',
    symbol: 'comp',
    validator: ETHValidator,
},{
    name: 'synthetix',
    symbol: 'snx',
    validator: ETHValidator,
},{
    name: 'yearn.finance',
    symbol: 'yfi',
    validator: ETHValidator,
},{
    name: 'balancer',
    symbol: 'bal',
    validator: ETHValidator,
}];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        for (var i = 0; i < CURRENCIES.length; i++) {
            var currency = CURRENCIES[i];
            if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                return currency;
            }
        }
        return null;
    }
};
