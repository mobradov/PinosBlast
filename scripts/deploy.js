const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // Get the contract factory
  const BlastPinosNFT = await hre.ethers.getContractFactory("BlastPinosNFT");

  // Deploy the contract
  const blastPinosNFT = await BlastPinosNFT.deploy(/*"0x90A7ef5fc0256fF290d36cA99286857260086da0"*/);


  // Wait for the contract to be mined
  //await blastPinosNFT.deployed();

  console.log("BlastPinosNFT deployed to:", blastPinosNFT.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit with error status
  });
