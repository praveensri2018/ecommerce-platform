const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // Import your authRoutes
const productRoutes = require('./routes/productRoutes'); // Import product routes
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes
const customerRoutes = require('./routes/customerRoutes'); // Import customer routes
const orderRoutes = require('./routes/orderRoutes'); // Import order routes
//const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Use routes
app.use('/api/auth', authRoutes); // Register routes for authentication
app.use('/api/products', productRoutes); // Register routes for product operations
app.use('/api/admin', adminRoutes); // Register routes for admin-related tasks
app.use('/api/customers', customerRoutes); // Register routes for customer operations
app.use('/api/orders', orderRoutes); // Register routes for order management
//app.use('/api/payments', paymentRoutes); // Register routes for payments

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
