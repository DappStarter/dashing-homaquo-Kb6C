require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note payment unit gesture merry forward gauge'; 
let testAccounts = [
"0x7716adc465aaf753b1ee42ff0017ed7fc800d5d9788b9ee9cb9bd75595a11065",
"0x7b35630b7943578038f3d542d474c048f8d179a764b3540695af5047a25a3c1e",
"0x720e21979a83d3a78b19a67574e2ddc2d764f12d3c0b4aac8dcde58570cff218",
"0x3b6180287652c7c66193efd430afe3b5de501cf338a22952ca62bf5b27ab45a7",
"0x4f464b5436f4036182eb67d00b9b9ab5e18527ea8e4d156989bc00f4b4a75daf",
"0xcdf54e82a6fb2a8e38fbe84764dc261b90b5d4db4bdfdadedf42076572c69e5a",
"0xf7d00f926dbd45a4c8dfe07060151d46e2cb79d996b6c6be1d61c493368354bb",
"0xe28a0d4a697e43f4cd9f600326baa253070ea6b711d135e8948369637c062cf7",
"0x78c5297b1166b49f7cdb22a2988e30d7ee86aff336f755bd81f6e9530ee4a39f",
"0x419c9b1a070f050652dd7df1ff4e1d69a340d7f518ad24bdb57a499479e6f3b0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


