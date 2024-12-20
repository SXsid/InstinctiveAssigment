# Setup Instructions

Follow these steps to set up the backend and frontend locally:

## 0. Clone the Repository
```bash
git clone https://github.com/SXsid/InstinctiveAssigment.git
```

---

## 1. Backend Setup

### Steps:
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the `Backend` directory and add the following variables:

   **Example `.env` file:**
   ```env
   # Connect to Supabase via connection pooling with Supavisor.
   DATABASE_URL="<YOUR_SUPABASE_CONNECTION_POOL_URL>"

   # Direct connection to the database. Used for migrations.
   DIRECT_URL="<YOUR_SUPABASE_DIRECT_CONNECTION_URL>"

   PORT=3000
   ```
   Replace `<YOUR_SUPABASE_CONNECTION_POOL_URL>` and `<YOUR_SUPABASE_DIRECT_CONNECTION_URL>` with your actual database URLs.

4. Build the TypeScript code:
   ```bash
   tsc -b
   ```

5. Start the backend server:
   ```bash
   node dist/index.js
   ```

---

## 2. Frontend Setup

### Steps:
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the base URL to point to the local backend in `studentslice.ts`:
   - Locate the `studentslice.ts` file.
   - Change the base URL to `http://localhost:3000`.

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## 3. Final Step
Run both the backend and frontend servers simultaneously. You should now have the project running locally.
