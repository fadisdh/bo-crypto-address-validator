module.exports = {
  isValidAddress: function (address) {
    if (/^[a-z0-9]+$/.test(address) && address.length === 12) {
      // Numbers and small case letters. It also should be 12 characters
      return true;
    }

    return false;
  }
};
