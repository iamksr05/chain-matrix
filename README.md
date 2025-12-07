# ChainMatrix

**The First Decentralized Freight & Freelancing Marketplace on the Flare Network.**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Network](https://img.shields.io/badge/network-Flare-orange.svg)

ChainMatrix is a next-generation decentralized application (dApp) that revolutionizes how talent is hired and how bounties are settled. Powered by the **Flare Network**, it utilizes **Smart Accounts** for gasless transactions, the **FTSO (Flare Time Series Oracle)** for real-time price feeds, and the **FDC (Flare Data Connector)** for trustless cross-chain verification.

---

## 🚀 Key Features

*   **🛡️ Trustless Escrow**: Funds are locked in smart contracts and only released when work is verified.
*   **📈 Live Market Intelligence**: Real-time crypto asset pricing (BTC, XRP, FLR) powered by the FTSO.
*   **🌉 Cross-Chain Payments**: Verify transactions from Bitcoin, XRP, and other chains using the Flare Data Connector (FDC).
*   **⛽ Gasless Ease**: Users interact with the blockchain without holding native tokens, thanks to Account Abstraction (Smart Accounts).
*   **🎨 Premium UI**: A stunning, "Antigravity" themed interface built with React, Tailwind, and Framer Motion.

---

## 🛠️ Technology Stack

### Frontend
*   **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Vanilla CSS
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Auth**: [Privy](https://www.privy.io/) (Wallet) + [Clerk](https://clerk.com/) (Social)
*   **Icons**: [Lucide React](https://lucide.dev/)

### Backend
*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Server**: [Express](https://expressjs.com/)
*   **Database**: [Supabase](https://supabase.com/)
*   **Blockchain Interaction**: [Ethers.js v6](https://docs.ethers.org/v6/)

### Smart Contracts
*   **Network**: Flare / Coston2 Testnet
*   **Framework**: [Hardhat](https://hardhat.org/)
*   **Language**: Solidity 0.8.x

---

## 📂 Project Structure

```bash
chain-matrix/
├── backend/            # Express server for FTSO/FDC/FAssets API
├── frontend/           # React + Vite application
├── smart-contracts/    # Hardhat project for Escrow & Token contracts
├── supabase/           # Database migrations and config
└── README.md           # You are here
```

---

## ⚡ Getting Started

### Prerequisites
*   Node.js (v18+)
*   Git
*   A Flare/Coston2 wallet private key (for deployment)

### 1. Installation

Clone the repository and install dependencies for all workspaces:

```bash
git clone https://github.com/yourusername/chain-matrix.git
cd chain-matrix

# Install Frontend Dependencies
cd frontend && npm install

# Install Backend Dependencies
cd ../backend && npm install

# Install Smart Contract Dependencies
cd ../smart-contracts && npm install
```

### 2. Environment Setup

Create `.env` files in each directory based on the examples.

**Backend (`backend/.env`):**
```env
FLARE_RPC=https://coston2-api.flare.network/ext/C/rpc
FTSO_ORACLE_ADDR=0x3d893C53D9e8056135C26C8c638B76C8b60Df726
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=3000
```

**Frontend (`frontend/.env`):**
```env
VITE_API_URL=http://localhost:3000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_PRIVY_APP_ID=your_privy_id
```

### 3. Running Locally

Run each component in a separate terminal:

**Backend:**
```bash
cd backend
npm run dev
# Server running on http://localhost:3000
```

**Frontend:**
```bash
cd frontend
npm run dev
# App running on http://localhost:5173
```

**Smart Contracts (Local Node):**
```bash
cd smart-contracts
npx hardhat node
```

---

## 🔮 Roadmap

- [x] Initial UI Design & "Antigravity" Theme
- [x] Backend FTSO Price Feed Integration
- [x] Live Charts Page
- [ ] Smart Contract Audits
- [ ] Mainnet Launch on Flare

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.
