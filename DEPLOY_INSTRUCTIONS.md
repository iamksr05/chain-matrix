# Deploying New Skillshare to Vercel

This guide explains how to deploy both the Frontend (React + Vite) and Backend (Express) to Vercel.

Since your project has a `frontend` and `backend` folder, we will deploy them as two separate projects on Vercel.

## Prerequisites

1.  **GitHub Repository**: Ensure your project is pushed to a GitHub repository.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).

---

## Part 1: Deploying the Backend

We need to deploy the backend first to get the **API URL**.

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** -> **"Project"**.
2.  Import your GitHub repository.
3.  **Configure Project**:
    *   **Framework Preset**: Select **Other**.
    *   **Root Directory**: Click "Edit" and select `backend`.
4.  **Environment Variables**:
    *   Expand the "Environment Variables" section.
    *   Add all variables from your `backend/.env` file. You will need to copy these manually.
        *   `SUPABASE_URL`
        *   `SUPABASE_KEY`
        *   `FLARE_RPC`
        *   `SPONSOR_WALLET_PRIVATE_KEY` (if you have one)
        *   etc.
5.  Click **"Deploy"**.
6.  Once deployed, Vercel will give you a domain (e.g., `https://your-backend-project.vercel.app`). **Copy this URL.**

---

## Part 2: Deploying the Frontend

Now we deploy the frontend and connect it to the backend.

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** -> **"Project"**.
2.  Import the **same** GitHub repository again.
3.  **Configure Project**:
    *   **Framework Preset**: Vercel should auto-detect **Vite**. If not, select it.
    *   **Root Directory**: Click "Edit" and select `frontend`.
4.  **Environment Variables**:
    *   Add the `VITE_API_URL` variable.
    *   **Name**: `VITE_API_URL`
    *   **Value**: Paste your Backend URL from Part 1 (e.g., `https://your-backend-project.vercel.app`).
    *   Add other frontend variables if needed (e.g. `VITE_MAPBOX_API`, `VITE_DYNAMIC_KEY`, etc.).
5.  Click **"Deploy"**.

## Part 3: Final Check

1.  Open your deployed Frontend URL.
2.  The app should load effectively.
3.  Any API calls will now go to your deployed Backend on Vercel.

## Troubleshooting

-   **Backend Errors**: Check the "Logs" tab in your Backend project on Vercel.
-   **CORS Issues**: Your backend is configured with `cors()`, so it should accept requests from any domain. For better security, update `backend/server.js` to only allow your frontend domain in production.
