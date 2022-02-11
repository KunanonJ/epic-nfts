require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks:{
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/WgZvrd-v33fDmA9A81q5dAIKijIJI1A4',
      accounts: ['8dfece1da3b15d81038774f62b8eacafe5cb202bb8a4d14a159a6ad6857b28a8'],
    },
  },
};
