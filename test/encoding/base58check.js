import chai from 'chai'
import Bitcoin from '../bitcoin'

const should = chai.should()
const { Base58Check } = Bitcoin.encoding
const { Base58 } = Bitcoin.encoding

describe('Base58Check', function () {
  const buf = Buffer.from([0, 1, 2, 3, 253, 254, 255])
  const enc = '14HV44ipwoaqfg'

  it('should make an instance with "new"', function () {
    const b58 = new Base58Check()
    should.exist(b58)
  })

  it('can validate a serialized string', function () {
    let address = '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy'
    Base58Check.validChecksum(address).should.equal(true)
    address += 'a'
    Base58Check.validChecksum(address).should.equal(false)
  })

  it('should make an instance without "new"', function () {
    const b58 = Base58Check()
    should.exist(b58)
  })

  it('should allow this handy syntax', function () {
    Base58Check(buf).toString().should.equal(enc)
    Base58Check(enc).toBuffer().toString('hex').should.equal(buf.toString('hex'))
  })

  describe('#set', function () {
    it('should set a buf', function () {
      should.exist(Base58Check().set({ buf }).buf)
    })
  })

  describe('@encode', function () {
    it('should encode the buffer accurately', function () {
      Base58Check.encode(buf).should.equal(enc)
    })

    it('should throw an error when the input is not a buffer', function () {
      ;(function () {
        Base58Check.encode('string')
      }.should.throw('Input must be a buffer'))
    })
  })

  describe('@decode', function () {
    it('should decode this encoded value correctly', function () {
      Base58Check.decode(enc).toString('hex').should.equal(buf.toString('hex'))
    })

    it('should throw an error when input is not a string', function () {
      ;(function () {
        Base58Check.decode(5)
      }.should.throw('Input must be a string'))
    })

    it('should throw an error when input is too short', function () {
      ;(function () {
        Base58Check.decode(enc.slice(0, 1))
      }.should.throw('Input string too short'))
    })

    it('should throw an error when there is a checksum mismatch', function () {
      const buf2 = Base58.decode(enc)
      buf2[0] += 1
      const enc2 = Base58.encode(buf2)
      ;(function () {
        Base58Check.decode(enc2)
      }.should.throw('Checksum mismatch'))
    })
  })

  describe('#fromBuffer', function () {
    it('should not fail', function () {
      should.exist(Base58Check().fromBuffer(buf))
    })

    it('should set buffer', function () {
      const b58 = Base58Check().fromBuffer(buf)
      b58.buf.toString('hex').should.equal(buf.toString('hex'))
    })
  })

  describe('#fromString', function () {
    it('should convert this known string to a buffer', function () {
      Base58Check().fromString(enc).toBuffer().toString('hex').should.equal(buf.toString('hex'))
    })
  })

  describe('#toBuffer', function () {
    it('should return the buffer', function () {
      const b58 = Base58Check({ buf })
      b58.buf.toString('hex').should.equal(buf.toString('hex'))
    })
  })

  describe('#toString', function () {
    it('should return the buffer', function () {
      const b58 = Base58Check({ buf })
      b58.toString().should.equal(enc)
    })
  })
})
