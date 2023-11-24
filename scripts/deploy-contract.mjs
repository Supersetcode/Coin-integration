const ownerAd = "0xEA6d0B55Ca7BAF9B6222286a38Ee8634Cb895e84"


async function deployContract(ownerAd) {
  const ExampleNFT = await ethers.getContractFactory("InclusiveMindMetaverseLearning");
  const exampleNFT = await ExampleNFT.deploy(ownerAd);
  await exampleNFT.deployed();
  // This solves the bug in Mumbai network where the contract address is not the real one
  const txHash = exampleNFT.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  const contractAddress = txReceipt.contractAddress;
  console.log("Contract deployed to address:", contractAddress);
}

deployContract(ownerAd)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
