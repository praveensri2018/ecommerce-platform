// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Initialize the express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Routes
app.use('/api/auth', authRoutes); // For authentication routes
app.use('/api/products', productRoutes); // For products routes
app.use('/api/admin', adminRoutes); // For admin related routes
app.use('/api/payment', paymentRoutes); // For payment related routes
app.use('/api/orders', orderRoutes); // For orders related routes

// Default route (for testing purposes)
app.get('/', (req, res) => {
  res.send('E-commerce Backend API is running');
});

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
