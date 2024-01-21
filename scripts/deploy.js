const hre = require("hardhat");

async function main() {
  const SecureX = await hre.ethers.getContractFactory("SecureX");
  const secureX = await SecureX.deploy();
  await secureX.deployed();

  console.log(
    "Lock deployed to:",
    secureX.address
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
