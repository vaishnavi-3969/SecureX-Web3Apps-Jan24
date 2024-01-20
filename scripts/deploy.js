const hre = require("hardhat");

async function main() {
  const Chatapp = await hre.ethers.getContractFactory("ChatApp");
  const chatApp = await Chatapp.deploy();
  await chatApp.deployed();
  console.log("Chat App contract deployed to:", chatApp.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
