# Project Setup Guide

## 1. Status Check
- **Frontend**: Running on `http://localhost:5174` (or 5173).
- **Backend**: Running on `http://localhost:3000`.
- **Blockchain**: Local Hardhat Node running on `http://127.0.0.1:8545`.

## 2. Network Setup (GoChain Testnet)
**Easiest Way**: Click the **"Setup Network"** button on the `Landing` page.

| Field | Value |
| -- | -- |
| **Network Name** | GoChain Testnet |
| **RPC URL** | `http://127.0.0.1:8545` |
| **Chain ID** | `31337` |
| **Currency** | `GO` |

## 3. Account Setup & Fake Coins
Since you are running a local Hardhat node, you have **pre-funded accounts**.

**Action**: Import this account into MetaMask to get 10,000 GO/ETH:
- **Private Key**: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
- **Address**: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`

## 4. Resetting
If something breaks:
1.  Stop servers (`Ctrl+C`).
2.  `npm run dev` (frontend).
3.  `node server.js` (backend).
4.  `npx hardhat node` (smart-contracts).
