// scripts/setup-local-network.js
// Complete setup script for local Hardhat network

const hre = require("hardhat");

async function main() {
  const [deployer, account1, account2] = await hre.ethers.getSigners();
  
  console.log("🚀 Setting up local Hardhat network...\n");
  console.log("Deployer:", deployer.address);
  console.log("Account 1:", account1.address);
  console.log("Account 2:", account2.address);

  // 1. Deploy TestToken
  console.log("\n1️⃣ Deploying TestToken...");
  const TestToken = await hre.ethers.getContractFactory("TestToken");
  const token = await TestToken.deploy(deployer.address);
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log("✅ TestToken deployed:", tokenAddress);

  // 2. Deploy NativeTokenFaucet
  console.log("\n2️⃣ Deploying NativeTokenFaucet...");
  const Faucet = await hre.ethers.getContractFactory("NativeTokenFaucet");
  const faucet = await Faucet.deploy();
  await faucet.waitForDeployment();
  const faucetAddress = await faucet.getAddress();
  
  // Fund faucet
  const faucetAmount = hre.ethers.parseEther("1000");
  await deployer.sendTransaction({
    to: faucetAddress,
    value: faucetAmount,
  });
  console.log("✅ Faucet deployed and funded:", faucetAddress);

  // 3. Deploy TaskEscrow
  console.log("\n3️⃣ Deploying TaskEscrow...");
  // Use fully qualified name to avoid conflict with SkillSnap.sol
  const TaskEscrow = await hre.ethers.getContractFactory("contracts/TaskEscrow.sol:TaskEscrow");
  const escrow = await TaskEscrow.deploy();
  await escrow.waitForDeployment();
  const escrowAddress = await escrow.getAddress();
  console.log("✅ TaskEscrow deployed:", escrowAddress);

  // 4. Deploy FlareAdapter
  console.log("\n4️⃣ Deploying FlareAdapter...");
  const FlareAdapter = await hre.ethers.getContractFactory("FlareAdapter");
  const adapter = await FlareAdapter.deploy(escrowAddress, deployer.address);
  await adapter.waitForDeployment();
  const adapterAddress = await adapter.getAddress();
  console.log("✅ FlareAdapter deployed:", adapterAddress);

  // 5. Mint test tokens to accounts
  console.log("\n5️⃣ Minting test tokens...");
  const mintAmount = hre.ethers.parseEther("10000");
  const accounts = [deployer, account1, account2];
  
  for (const account of accounts) {
    await token.mint(account.address, mintAmount);
    const balance = await token.balanceOf(account.address);
    console.log(`✅ ${account.address}: ${hre.ethers.formatEther(balance)} TEST`);
  }

  // 6. Send native tokens to accounts
  console.log("\n6️⃣ Sending native tokens to accounts...");
  const nativeAmount = hre.ethers.parseEther("100");
  for (const account of [account1, account2]) {
    await deployer.sendTransaction({
      to: account.address,
      value: nativeAmount,
    });
    const balance = await hre.ethers.provider.getBalance(account.address);
    console.log(`✅ ${account.address}: ${hre.ethers.formatEther(balance)} ETH`);
  }

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("✅ LOCAL NETWORK SETUP COMPLETE!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  console.log("📝 Add to your frontend/.env:");
  console.log(`  VITE_ESCROW_ADDRESS=${escrowAddress}`);
  console.log(`  VITE_FLARE_ADAPTER_ADDRESS=${adapterAddress}`);
  console.log(`  VITE_TEST_TOKEN_ADDRESS=${tokenAddress}`);
  console.log(`  VITE_FAUCET_ADDRESS=${faucetAddress}`);
  console.log(`  VITE_CHAIN_ID=31337`);
  console.log(`  VITE_RPC_URL=http://127.0.0.1:8545`);

  console.log("\n📝 Add to your backend/.env:");
  console.log(`  FLARE_ADAPTER_ADDRESS=${adapterAddress}`);
  console.log(`  TASK_ESCROW_ADDRESS=${escrowAddress}`);

  console.log("\n💡 Test Accounts:");
  console.log(`  Deployer: ${deployer.address}`);
  console.log(`  Account 1: ${account1.address}`);
  console.log(`  Account 2: ${account2.address}`);

  console.log("\n🚀 You can now:");
  console.log("  • Accept tasks using these accounts");
  console.log("  • Fund tasks with native tokens or TEST tokens");
  console.log("  • Test all on-chain functionality locally!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

