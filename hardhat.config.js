// require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */

// const GOERLI_URL = process.env.GOERLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     goerli: {
//       url: GOERLI_URL,
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-sepolia.g.alchemy.com/v2/q1EcCUUqp-yTfoM-ngDpk7iyOjFsa3_G",
      accounts: ['be99a3be77e47c2bee28f6e5d470c409dcb0eac80a7de2160e7ead90a264ebba'],
    }
  }
};

// 0xBC8C00440dd64b698c19D36773690Fcee2a8dd29
