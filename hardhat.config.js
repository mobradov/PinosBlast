require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env"});

const NEXT_APP_ALCHEMY_RPC_URL = process.env.NEXT_APP_ALCHEMY_RPC_URL;
const NEXT_APP_PRIVATE_KEY = process.env.NEXT_APP_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: NEXT_APP_ALCHEMY_RPC_URL,
      accounts: [NEXT_APP_PRIVATE_KEY]
    },
  }
};
