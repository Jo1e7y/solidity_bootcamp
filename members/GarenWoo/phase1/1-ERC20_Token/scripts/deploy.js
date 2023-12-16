// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const GTTContract = await hre.ethers.getContractFactory("GarenTestToken")
    const totalSupply = hre.ethers.utils.parseUnits("100000000000000000000000", 0);
    const GTT = await GTTContract.deploy("GarenTestToken", "GTT", totalSupply, "0xf7CE0E442f3e4F849472Cb04FFA9802d4ec16EA9");

    await GTT.waitForDeployment();

    console.log("GarenTestToken has been deployed to: " + GTT.target);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});