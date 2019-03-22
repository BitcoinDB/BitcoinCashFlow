const _ = require('lodash')
const BN = require('./crypto/bn')
const Point = require('./crypto/point')
const Hash = require('./crypto/hash')
const JSUtil = require('./util/js')
const Network = require('./networks')
const $ = require('./util/preconditions')

/**
 * Instantiate a PublicKey from a {@link PrivateKey}, {@link Point}, `string`, or `Buffer`.
 *
 * There are two internal properties, `network` and `compressed`, that deal with importing
 * a PublicKey from a PrivateKey in WIF format. More details described on {@link PrivateKey}
 *
 * @example
 * ```javascript
 * // instantiate from a private key
 * var key = PublicKey(privateKey, true);
 *
 * // export to as a DER hex encoded string
 * var exported = key.toString();
 *
 * // import the public key
 * var imported = PublicKey.fromString(exported);
 * ```
 *
 * @param {string} data - The encoded data in various formats
 * @param {Object} extra - additional options
 * @param {Network=} extra.network - Which network should the address for this public key be for
 * @param {String=} extra.compressed - If the public key is compressed
 * @returns {PublicKey} A new valid instance of an PublicKey
 * @constructor
 */
function PublicKey(data, extra) {
  if (!(this instanceof PublicKey)) {
    return new PublicKey(data, extra)
  }

  $.checkArgument(data, 'First argument is required, please include public key data.')

  if (data instanceof PublicKey) {
    // Return copy, but as it's an immutable object, return same argument
    return data
  }
  extra = extra || {}

  const info = this._classifyArgs(data, extra)

  // validation
  info.point.validate()

  JSUtil.defineImmutable(this, {
    point: info.point,
    compressed: info.compressed,
    network: info.network || Network.defaultNetwork,
  })

  return this
}

/**
 * Internal function to differentiate between arguments passed to the constructor
 * @param {*} data
 * @param {Object} extra
 */
PublicKey.prototype._classifyArgs = function(data, extra) {
  /* jshint maxcomplexity: 10 */
  let info = {
    compressed: _.isUndefined(extra.compressed) || extra.compressed,
  }

  // detect type of data
  if (data instanceof Point) {
    info.point = data
  } else if (data.x && data.y) {
    info = PublicKey._transformObject(data)
  } else if (typeof data === 'string') {
    info = PublicKey._transformDER(Buffer.from(data, 'hex'))
  } else if (PublicKey._isBuffer(data)) {
    info = PublicKey._transformDER(data)
  } else if (PublicKey._isPrivateKey(data)) {
    info = PublicKey._transformPrivateKey(data)
  } else {
    throw new TypeError('First argument is an unrecognized data format.')
  }
  if (!info.network) {
    info.network = _.isUndefined(extra.network) ? undefined : Network.get(extra.network)
  }
  return info
}

/**
 * Internal function to detect if an object is a {@link PrivateKey}
 *
 * @param {*} param - object to test
 * @returns {boolean}
 * @private
 */
PublicKey._isPrivateKey = function(param) {
  // #weirdstuff resolve circular dependency.
  // eslint-disable-next-line global-require
  const PrivateKey = require('./privatekey')
  return param instanceof PrivateKey
}

/**
 * Internal function to detect if an object is a Buffer
 *
 * @param {*} param - object to test
 * @returns {boolean}
 * @private
 */
PublicKey._isBuffer = function(param) {
  return param instanceof Buffer || param instanceof Uint8Array
}

/**
 * Internal function to transform a private key into a public key point
 *
 * @param {PrivateKey} privkey - An instance of PrivateKey
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformPrivateKey = function(privkey) {
  $.checkArgument(PublicKey._isPrivateKey(privkey), 'Must be an instance of PrivateKey')
  const info = {}
  info.point = Point.getG().mul(privkey.bn)
  info.compressed = privkey.compressed
  info.network = privkey.network
  return info
}

/**
 * Internal function to transform DER into a public key point
 *
 * @param {Buffer} buf - An hex encoded buffer
 * @param {bool=} strict - if set to false, will loosen some conditions
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformDER = function(buf, strict) {
  $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key')
  let info = {}

  strict = _.isUndefined(strict) ? true : strict

  let x
  let y
  let xbuf
  let ybuf

  if (buf[0] === 0x04 || (!strict && (buf[0] === 0x06 || buf[0] === 0x07))) {
    xbuf = buf.slice(1, 33)
    ybuf = buf.slice(33, 65)
    if (xbuf.length !== 32 || ybuf.length !== 32 || buf.length !== 65) {
      throw new TypeError('Length of x and y must be 32 bytes')
    }
    x = new BN(xbuf)
    y = new BN(ybuf)
    info.point = new Point(x, y)
    info.compressed = false
  } else if (buf[0] === 0x03) {
    xbuf = buf.slice(1)
    x = new BN(xbuf)
    info = PublicKey._transformX(true, x)
    info.compressed = true
  } else if (buf[0] === 0x02) {
    xbuf = buf.slice(1)
    x = new BN(xbuf)
    info = PublicKey._transformX(false, x)
    info.compressed = true
  } else {
    throw new TypeError('Invalid DER format public key')
  }
  return info
}

/**
 * Internal function to transform X into a public key point
 *
 * @param {Boolean} odd - If the point is above or below the x axis
 * @param {Point} x - The x point
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformX = function(odd, x) {
  $.checkArgument(typeof odd === 'boolean', 'Must specify whether y is odd or not (true or false)')
  const info = {}
  info.point = Point.fromX(odd, x)
  return info
}

/**
 * Internal function to transform a JSON into a public key point
 *
 * @param {String|Object} json - a JSON string or plain object
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformObject = function(json) {
  const x = new BN(json.x, 'hex')
  const y = new BN(json.y, 'hex')
  const point = new Point(x, y)
  return new PublicKey(point, {
    compressed: json.compressed,
  })
}

/**
 * Instantiate a PublicKey from a PrivateKey
 *
 * @param {PrivateKey} privkey - An instance of PrivateKey
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromPrivateKey = function(privkey) {
  $.checkArgument(PublicKey._isPrivateKey(privkey), 'Must be an instance of PrivateKey')
  const info = PublicKey._transformPrivateKey(privkey)
  return new PublicKey(info.point, {
    compressed: info.compressed,
    network: info.network,
  })
}

/**
 * Instantiate a PublicKey from a Buffer
 * @param {Buffer} buf - A DER hex buffer
 * @param {bool=} strict - if set to false, will loosen some conditions
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromBuffer = function(buf, strict) {
  $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key')
  const info = PublicKey._transformDER(buf, strict)
  return new PublicKey(info.point, {
    compressed: info.compressed,
  })
}
PublicKey.fromDER = PublicKey.fromBuffer

/**
 * Instantiate a PublicKey from a Point
 *
 * @param {Point} point - A Point instance
 * @param {boolean=} compressed - whether to store this public key as compressed format
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromPoint = function(point, compressed) {
  $.checkArgument(point instanceof Point, 'First argument must be an instance of Point.')
  return new PublicKey(point, {
    compressed,
  })
}

/**
 * Instantiate a PublicKey from a DER hex encoded string
 *
 * @param {string} str - A DER hex string
 * @param {String=} encoding - The type of string encoding
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromString = function(str, encoding) {
  const buf = Buffer.from(str, encoding || 'hex')
  const info = PublicKey._transformDER(buf)
  return new PublicKey(info.point, {
    compressed: info.compressed,
  })
}

/**
 * Instantiate a PublicKey from an X Point
 *
 * @param {Boolean} odd - If the point is above or below the x axis
 * @param {Point} x - The x point
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromX = function(odd, x) {
  const info = PublicKey._transformX(odd, x)
  return new PublicKey(info.point, {
    compressed: info.compressed,
  })
}

/**
 * Check if there would be any errors when initializing a PublicKey
 *
 * @param {string} data - The encoded data in various formats
 * @returns {null|Error} An error if exists
 */
PublicKey.getValidationError = function(data) {
  let error
  try {
    // #weirdstuff Refactor.
    // eslint-disable-next-line no-new
    new PublicKey(data)
  } catch (e) {
    error = e
  }
  return error
}

/**
 * Check if the parameters are valid
 *
 * @param {string} data - The encoded data in various formats
 * @returns {Boolean} If the public key would be valid
 */
PublicKey.isValid = function(data) {
  return !PublicKey.getValidationError(data)
}

/**
 * @returns {Object} A plain object of the PublicKey
 */
PublicKey.prototype.toJSON = function toObject() {
  return {
    x: this.point.getX().toString('hex', 2),
    y: this.point.getY().toString('hex', 2),
    compressed: this.compressed,
  }
}
PublicKey.prototype.toObject = PublicKey.prototype.toJSON

/**
 * Will output the PublicKey to a DER Buffer
 *
 * @returns {Buffer} A DER hex encoded buffer
 */
PublicKey.prototype.toDER = function() {
  const x = this.point.getX()
  const y = this.point.getY()

  const xbuf = x.toBuffer({
    size: 32,
  })
  const ybuf = y.toBuffer({
    size: 32,
  })

  let prefix
  if (!this.compressed) {
    prefix = Buffer.from([0x04])
    return Buffer.concat([prefix, xbuf, ybuf])
  }
  const odd = ybuf[ybuf.length - 1] % 2
  if (odd) {
    prefix = Buffer.from([0x03])
  } else {
    prefix = Buffer.from([0x02])
  }
  return Buffer.concat([prefix, xbuf])
}
PublicKey.prototype.toBuffer = PublicKey.prototype.toDER

/**
 * Will return a sha256 + ripemd160 hash of the serialized public key
 * @see https://github.com/bitcoin/bitcoin/blob/master/src/pubkey.h#L141
 * @returns {Buffer}
 */
PublicKey.prototype._getID = function _getID() {
  return Hash.sha256ripemd160(this.toBuffer())
}

/**
 * Will return an address for the public key
 *
 * @param {String|Network=} network - Which network should the address be for
 * @returns {Address} An address generated from the public key
 */
PublicKey.prototype.toAddress = function(network) {
  // #weirdstuff resolve circular dependency.
  // eslint-disable-next-line global-require
  const Address = require('./address')
  return Address.fromPublicKey(this, network || this.network)
}

/**
 * Will output the PublicKey to a DER encoded hex string
 *
 * @returns {string} A DER hex encoded string
 */
PublicKey.prototype.toString = function() {
  return this.toDER().toString('hex')
}

/**
 * Will return a string formatted for the console
 *
 * @returns {string} Public key
 */
PublicKey.prototype.inspect = function() {
  return `<PublicKey: ${this.toString()}${this.compressed ? '' : ', uncompressed'}>`
}

module.exports = PublicKey
