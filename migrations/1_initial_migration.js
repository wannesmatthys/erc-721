const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};

const BachelorToken = artifacts.require("BachelorToken");

module.exports = function(deployer) {
  deployer.deploy(BachelorToken);
};