const hre = require("hardhat");

const CONTRACT_ADDR = "0xf8457C6e611342E2AB43528fcF3692635106bbe1";

async function main() {
  //hardhat-ethers
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);
  
  console.log(await contract.x());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
