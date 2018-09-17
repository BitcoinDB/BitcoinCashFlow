# [BitcoinCashFlow](https://github.com/BitcoinDB/BitcoinCashFlow): A Bitcoin Cash implementation written in modern Javascript

## About BitcoinCashFlow

BitcoinCashFlow is a community driven effort to produce a readable, reliable and modern Javascript implementation of Bitcoin. Most current Javascript Bitcoin implementations do not adhere to modern coding standards and are very hard to read as a consequence. We want to create a Bitcoin implementation that every JavaScript programmer can read and understand.

In step one, we want to get the entire codebase to comply with the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). Step two will be to port the code base to ES6. Step three will be to statically typecheck the entire codebase with Facebook’s Flow. We suspect we will uncover bugs in the process.

We are looking for contributors. You do not have to be a Bitcoin protocol expert to contribute. All you need to be is a good Javascript programmer. If you want to help, check out [CONTRIBUTING.md](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/CONTRIBUTING.md) or email [clemens@bitcointoken.com](mailto:clemens@bitcointoken.com).

## Warning

BitcoinCashFlow is currently undergoing a major refactoring which might break parts of the API. **We do not recommend it to be used until the version 1.0.0 is released.**

## About Bitcoin Cash

Bitcoin Cash is peer-to-peer electronic cash for the Internet. It is fully decentralized, has no central bank, and requires no trusted third-parties to operate. Bitcoin Cash is the continuation of the Bitcoin project, upgraded with consensus rules that allow it to grow and scale.

## Installation

### Using NPM

```s
$ npm install --save bitcoincashflow
```

### Using Bower

```s
$ bower install --save bitcoincashflow
```

### Manually

You can also download a pre-compiled and minified version here: [dist](https://github.com/BitcoinDB/BitcoinCashFlow/tree/master/dist)

## Examples

You can find many useful, up-to-date examples to get you started right away by following the provided
examples:

* [Generate a random address](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Translate an address to any Bitcoin Cash address format](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#translate-an-address-to-any-bitcoin-cash-address-format)
* [Read an address from any Bitcoin Cash address format](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#read-an-address-from-any-bitcoin-cash-address-format)
* [Import an address via WIF](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#create-a-transaction)
* [Verify a Bitcoin message](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#verify-a-bitcoin-message)
* [Sign a Bitcoin message](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#sign-a-bitcoin-message)
* [Create an OP RETURN transaction](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/BitcoinDB/BitcoinCashFlow/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## Security

BitcoinCashFlow is a fork of [bitcore-lib](https://github.com/bitpay/bitcore-lib/), which is used in production at Bitpay Inc. and many other [projects](http://bitcore.io#projects). If you find a security issue, please email [clemens@bitcointoken.com](mailto:clemens@bitcointoken.com).

## Contributing

This is an open-source project, and any form of contribution is welcome. Feel free to create an issue in case you would like to share ideas for improvement, or would like to report a bug. Also, please send pull requests for bug fixes or code optimization. For more information on how to contribute, please refer to our [CONTRIBUTING](CONTRIBUTING.md) file.

## Development

To get started with development, you should first clone the repository and install any dependencies:

```s
$ git clone https://github.com/BitcoinDB/BitcoinCashFlow
$ cd BitcoinCashFlow
$ npm install
```
Next, you can check everything is installed correctly by running the full test-suite and verifying that all tests are completed successfully.

```s
$ npm test
```

## Progress


| File       | Airbnb Style Guide | ES6 | Flow
| ---------- | :---: | :---: | :---: |
| address.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| bitcoincash.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| block/block.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| block/blockheader.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| block/index.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| block/merkleblock.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| crypto/bn.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| crypto/ecdsa.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| crypto/hash.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| crypto/point.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| crypto/random.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| crypto/signature.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| encoding/base58.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| encoding/base58check.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| encoding/bufferreader.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| encoding/bufferwriter.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| encoding/varint.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| errors/index.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| errors/spec.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| hdprivatekey.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| hdpublickey.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| message.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/index.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/mnemonic.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/pbkdf2.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/chinese.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/english.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/french.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/index.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/italian.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/japanese.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| mnemonic/words/spanish.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| networks.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| opcode.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| privatekey.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| publickey.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| script/index.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| script/interpreter.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| script/script.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/index.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/index.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/input.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/multisig.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/multisigscripthash.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/publickey.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/publickeyhash.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/input/scripthash.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/output.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/sighash.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/signature.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/transaction.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| transaction/unspentoutput.js | ![done](https://i.imgur.com/RXSkZTD.png "Done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| unit.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| uri.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| util/buffer.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| util/js.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |
| util/preconditions.js | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") | ![not done](https://i.imgur.com/MleS2Jt.png "Not done") |



## License

Code released under [the MIT license](https://github.com/bitcoincashjs/bitcoincashjs/blob/master/LICENSE).
