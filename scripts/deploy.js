const { ethers } = require('hardhat');

async function main() {
    // Get contracts factory
    const Pikachu = await ethers.getContractFactory('Pikachu');
    // Deploy contract
    const pikachu = await Pikachu.deploy('Memo pikachu', 'PKC');
    await pikachu.deployed();

    // Get contract address when contract is deployed
    console.log('Pikachu contract deployed at: ', pikachu.address);
    
    // Mint contract by uri and address owner
    await pikachu.mint('0xD3a8EE8cD86485eBc04E98f6fBB426406d242D6F','http://ipfs.io/ipfs/Qme2pTZqWxpAYWp2SoQ4jNhREu9pYKF21j7gkDbNRZDD3W');
}

main()
 .catch((error) => {
    console.error(error);
    process.exitCode = 1;
 });