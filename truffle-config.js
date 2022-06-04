require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = process.env.MNEMONIC;
const clientURL = process.env.ETH_CLIENT_URL;

module.exports = {
    networks: {
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, clientURL),
            network_id: "*",
            gas: 3000000,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
            networkCheckTimeout: 10000000,
            from: "0x0D3173BC085002501BF80000cEE5b2E2624A9060",
        },
    },
    contracts_directory: "./contracts",
    contracts_build_directory: "./abis",
    compilers: {
        solc: {
            version: "^0.8.0",
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
