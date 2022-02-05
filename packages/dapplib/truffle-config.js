require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind history include process blush twelve'; 
let testAccounts = [
"0xed15dbdbb46f9fb9ce33f2c256ec3bb57034eaf9b7cbc612caad515c836425f5",
"0xf3d5f18045951a7bd14621381b8e1acdc37cbc70190d89aa697ed3f8bc57e037",
"0x7708b8b593346ea4ecb2a4764ff80a550b3fa31a842cc3b6cbb3dbf1a069aa7c",
"0x003896a7d052911d8849b2533acae576c3388aa06514557c5e7578b5eec66f0e",
"0x88bf6b6e7bcec891d73abb9f04d741a20517ce29b366326db650bfc3c2d7c5a8",
"0xce1e0f0da6919395aab329c025b7517dba1894821c7539163ba645065337ec4e",
"0x8056f0239f58af3cb333e161028b4580768d4ed5bc7ffc614220b65dd07352eb",
"0xfec971f1502dde78ff232283b39783ccd562e222a0fd6f3d306856a4f77db698",
"0xe6dda59bbf04d5ac982156bc14d1c6a30eea1932d6101e03a7b266a25abb4535",
"0xd8983ac141577a3edb1f8117438cda0f3c263df3d874b3a301235f8021765b0d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

