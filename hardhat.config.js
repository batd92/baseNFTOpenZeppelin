/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.2",
  defaultNetwork: 'matic',
  networks: {
    hardhat: {},
    matic: {
      url: process.env.MUNBAI_RPC_URL,         // URL networks
      accounts: [process.env.PRIVATE_KEY], // Address deployed
    }
  }
};
