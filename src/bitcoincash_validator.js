var BTCValidator = require('./bitcoin_validator');
var cashaddr = require('cashaddrjs');

function cashaddrValidator(address) {
    try {
        var info = cashaddr.decode(address);
        if (info && info.prefix && info.hash) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

module.exports = {
    isValidAddress: function (address, currency, networkType) {
        return BTCValidator.isValidAddress(address, currency, networkType) || cashaddrValidator(address);
    }
}