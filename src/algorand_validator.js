module.exports = {
  isValidAddress: function (address) {
    if (/^[A-Z2-9]+$/.test(address) && address.length === 58) {
      // there is no 0 or 1, capital case. It also should be 58 characters
      return true;
    }

    return false;
  }
};
