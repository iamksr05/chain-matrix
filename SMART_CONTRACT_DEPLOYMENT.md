# 🚀 Smart Contract Deployment Guide - Step by Step

Complete guide to deploy FlareAdapter and TaskEscrow contracts to Flare network.

---

## 📋 Prerequisites Checklist

Before deploying, make sure you have:

- [ ] Node.js installed (v16+)
- [ ] Dependencies installed: `npm install` in `smart-contracts/`
- [ ] `DEPLOYER_KEY` in `smart-contracts/.env`
- [ ] Deployer wallet funded with FLR (mainnet) or CFLR (testnet)
- [ ] `FLARE_RPC` configured in `.env`

---

## 🔑 Step 1: Setup Environment Variables

### Create/Edit `.env` file:

```bash
cd smart-contracts
```

Create or edit `.env` file:

```env
# Your wallet private key (starts with 0x)
DEPLOYER_KEY=0xYourPrivateKeyHere

# Flare RPC endpoint
FLARE_RPC=https://flare-api.flare.network/ext/C/rpc

# Optional: For testnet
COSTON_RPC=https://coston-api.flare.network/ext/C/rpc
```

**How to get DEPLOYER_KEY?** See `HOW_TO_GET_DEPLOYER_KEY.md`

---

## 💰 Step 2: Fund Your Deployer Wallet

### For Flare Mainnet:
1. Get your wallet address from MetaMask
2. Send FLR tokens to that address
3. Recommended: 0.1-0.5 FLR (enough for deployment + gas)

### For Coston Testnet:
1. Get testnet CFLR from faucet (if available)
2. Or ask in Flare community for test tokens
3. Recommended: 1-2 CFLR

**Check balance**:
- Mainnet: https://flare-explorer.flare.network/
- Testnet: https://coston-explorer.flare.network/

---

## 🔨 Step 3: Compile Contracts

```bash
cd smart-contracts
npx hardhat compile
```

**Expected output**:
```
Compiled 3 Solidity files successfully
```

If you see errors, fix them before proceeding.

---

## 🚀 Step 4: Deploy Contracts

### Option A: Deploy to Flare Mainnet

```bash
npm run deploy:adapter
# or
npx hardhat run scripts/deploy-flare-adapter.js --network flareMainnet
```

### Option B: Deploy to Coston Testnet (Recommended for testing)

```bash
npm run deploy:adapter:coston
# or
npx hardhat run scripts/deploy-flare-adapter.js --network coston
```

---

## 📝 Step 5: Save Deployment Addresses

After deployment, you'll see output like:

```
✅ Deployment Summary:
  TaskEscrow: 0x1234567890123456789012345678901234567890
  FlareAdapter: 0x0987654321098765432109876543210987654321
  FDC Oracle: 0x...
```

### Update `smart-contracts/.env`:

```env
TASK_ESCROW_ADDRESS=0x1234567890123456789012345678901234567890
FLARE_ADAPTER_ADDRESS=0x0987654321098765432109876543210987654321
FDC_ORACLE_ADDRESS=0x...
```

### Update `backend/.env`:

```env
FLARE_ADAPTER_ADDRESS=0x0987654321098765432109876543210987654321
TASK_ESCROW_ADDRESS=0x1234567890123456789012345678901234567890
```

### Update `frontend/.env`:

```env
VITE_FLARE_ADAPTER_ADDRESS=0x0987654321098765432109876543210987654321
VITE_ESCROW_ADDRESS=0x1234567890123456789012345678901234567890
```

---

## ✅ Step 6: Verify Deployment

### Check on Block Explorer:

**Flare Mainnet**:
- Go to: https://flare-explorer.flare.network/
- Search for your contract address
- Verify contract code is deployed

**Coston Testnet**:
- Go to: https://coston-explorer.flare.network/
- Search for your contract address
- Verify contract code is deployed

### Test Contract Functions:

You can interact with the contract using:
- Block explorer (read functions)
- Your frontend app (after updating .env)
- Hardhat console (for testing)

---

## 🐛 Troubleshooting

### Error: "Insufficient funds"

**Solution**:
- Fund your deployer wallet with more FLR/CFLR
- Check balance: `npx hardhat run scripts/check-balance.js` (if you create one)

### Error: "Invalid private key"

**Solution**:
- Verify `DEPLOYER_KEY` starts with `0x`
- Check it's exactly 66 characters (0x + 64 hex)
- No spaces or newlines

### Error: "Network error" or "Connection refused"

**Solution**:
- Check `FLARE_RPC` is correct
- Try different RPC endpoint
- Verify internet connection
- For testnet, try: `COSTON_RPC=https://coston-api.flare.network/ext/C/rpc`

### Error: "Contract deployment failed"

**Solution**:
- Check gas limit (may need to increase)
- Verify contract compiles without errors
- Try testnet first to debug

### Error: "Nonce too high"

**Solution**:
- Reset nonce in MetaMask
- Or wait a few minutes and try again

---

## 📊 Deployment Cost Estimate

**Typical costs**:
- TaskEscrow deployment: ~0.01-0.02 FLR
- FlareAdapter deployment: ~0.01-0.02 FLR
- **Total**: ~0.02-0.04 FLR

**Gas prices vary**, so keep extra FLR for safety.

---

## 🔄 Re-deployment

If you need to redeploy:

1. **Update contract code** (if changed)
2. **Recompile**: `npx hardhat compile`
3. **Deploy again**: `npm run deploy:adapter`
4. **Update addresses** in all `.env` files

**Note**: Each deployment creates new addresses. Old contracts remain on-chain.

---

## 🎯 Quick Reference Commands

```bash
# Navigate to contracts directory
cd smart-contracts

# Install dependencies (if not done)
npm install

# Compile contracts
npx hardhat compile

# Deploy to mainnet
npm run deploy:adapter

# Deploy to testnet
npm run deploy:adapter:coston

# Run tests
npm test
```

---

## 📝 Post-Deployment Checklist

After successful deployment:

- [ ] Contracts deployed successfully
- [ ] Addresses saved to `smart-contracts/.env`
- [ ] Addresses added to `backend/.env`
- [ ] Addresses added to `frontend/.env`
- [ ] Contracts verified on block explorer
- [ ] Tested contract interaction (optional)

---

## 🔐 Security Reminders

- ⚠️ **Never commit `.env` file** to git
- ⚠️ **Use separate wallet** for deployment
- ⚠️ **Keep private key secure**
- ⚠️ **Only fund what you need** for gas
- ⚠️ **Test on testnet first** before mainnet

---

## 📚 Related Guides

- `HOW_TO_GET_DEPLOYER_KEY.md` - Getting your private key
- `DEPLOYMENT_GUIDE.md` - Detailed deployment guide
- `FLARE_INTEGRATION.md` - Flare features documentation
- `COMPLETE_SETUP_CHECKLIST.md` - Full project setup

---

## 🆘 Need Help?

**Common Issues**:
1. Check `smart-contracts/DEPLOYMENT_GUIDE.md` for detailed troubleshooting
2. Verify all prerequisites are met
3. Try testnet deployment first
4. Check Flare network status

**Flare Resources**:
- Flare Docs: https://docs.flare.network/
- Flare Explorer: https://flare-explorer.flare.network/
- Flare Discord: Community support

---

**Ready to deploy?** Follow the steps above! 🚀

