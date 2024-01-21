const hre = require("hardhat");

async function main() {
  const SecureX = await hre.ethers.getContractFactory("SecureX"); 
  const secureX = await SecureX.deploy(); 
  await secureX.deployed();
  console.log("Deployed contract address:",`${secureX.address}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e