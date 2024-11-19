# E-commerce Platform

## Technologies
- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Database**: MongoDB
- **Payment Gateway**: Razorpay (Alternative to Stripe)

## Key Features:
- Product catalog and shopping cart.
- Checkout system with payment integration (Razorpay).
- User authentication and order history.
- Admin panel for managing products, orders, and customers.

## Setup Instructions:

### Frontend:
1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start

### Backend:
1. Clone the repository:
   ```bash
   git clone <repo_url>
   cd backend
2. Install dependencies:
   ```bash
   npm install
3. Start the server:
   ```bash
   node server.js

## Environment Variables:
- JWT_SECRET: Secret key for JWT authentication.
- MONGO_URI: MongoDB connection URI.
- RAZORPAY_KEY: Razorpay key for payments.
