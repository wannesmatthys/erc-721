const BachelorToken = artifacts.require("BachelorToken");

module.exports = (deployer) => {
    deployer.deploy(BachelorToken);
}