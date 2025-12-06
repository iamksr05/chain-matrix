# 🚀 Quick Start: Local Fake Currency System

Get up and running in 3 steps!

---

## ⚡ Step 1: Start Local Blockchain

```bash
cd smart-contracts
npm run node
```

**Keep this terminal open!** You'll see:
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts:
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
...
```

---

## ⚡ Step 2: Deploy Contracts

Open a **NEW terminal** and run:

```bash
cd smart-contracts
npm run setup:local
```

This deploys:
- ✅ TestToken
- ✅ NativeTokenFaucet  
- ✅ TaskEscrow
- ✅ FlareAdapter

**Copy the addresses from the output!**

---

## ⚡ Step 3: Configure MetaMask

### Add Local Network:

1. MetaMask → Settings → Networks → Add Network
2. Enter:
   - **Network Name**: `Hardhat Local`
   - **RPC URL**: `http://127.0.0.1:8545`
   - **Chain ID**: `31337`
   - **Currency Symbol**: `ETH`

### Import Test Account:

1. MetaMask → Account → Import Account
2. Paste private key:
   ```
   0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
   ```
3. You'll see 10,000 ETH! (fake, for testing)

---

## ⚡ Step 4: Update Frontend Config

Add to `frontend/.env`:

```env
VITE_ESCROW_ADDRESS=0x... (from setup output)
VITE_FLARE_ADAPTER_ADDRESS=0x... (from setup output)
VITE_CHAIN_ID=31337
VITE_RPC_URL=http://127.0.0.1:8545
```

---

## ✅ Done! Test It

1. **Start frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

2. **Connect MetaMask:**
   - Make sure you're on "Hardhat Local" network
   - Connect wallet in the app

3. **Accept a task:**
   - Find an open task
   - Click "Accept Task"
   - Confirm in MetaMask
   - ✅ Done! (instant, no real tokens needed)

---

## 🎯 What You Can Do Now

- ✅ Accept tasks on-chain
- ✅ Fund tasks with fake ETH
- ✅ Test all functionality
- ✅ No gas fees, instant transactions!

---

## 📝 Test Accounts

**Account #0 (Default):**
- Address: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`
- Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
- Balance: 10,000 ETH

**Account #1:**
- Address: `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`
- Private Key: `0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`
- Balance: 10,000 ETH

Import both to test with multiple accounts!

---

**That's it! You're ready to test on-chain task acceptance!** 🎉

