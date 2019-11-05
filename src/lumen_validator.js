var baseX = require('base-x')
var crc = require('crc')

var ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

var codec = baseX(ALLOWED_CHARS)
var regexp = new RegExp('^G[' + ALLOWED_CHARS + ']{55}$')

module.exports = {
  isValidAddress: function (address) {
    if (regexp.test(address)) {
      return this.verifyChecksum(address)
    }

    return false
  },

  verifyChecksum: function (encodedAddress) {
    var decodedAddress = codec.decode(encodedAddress)
    var versionByte = decodedAddress[0]
    var payload = decodedAddress.slice(0, -2)
    var checksum = decodedAddress.slice(-2)

    if (encodedAddress !== codec.encode(decodedAddress)) {
      return false
    }

    if (versionByte !== 6 << 3) { // ? !== 48
      return false
    }

    var calculatedChecksum = Buffer.alloc(2)
    calculatedChecksum.writeUInt16LE(crc.crc16xmodem(payload), 0)

    if (Buffer.compare(checksum, calculatedChecksum) !== 0) {
      return false
    }

    return true
  }
}