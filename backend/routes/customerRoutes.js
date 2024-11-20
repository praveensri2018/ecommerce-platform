const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const router = express.Router();

// Get all available products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Get customer profile
router.get('/profile', async (req, res) => {
    try {
        const user = await User.findById(req.user.id); // Assumes user authentication middleware is in place
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Update customer profile
router.put('/profile', async (req, res) => {
    const { name, email } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id, // Assumes user authentication middleware is in place
            { name, email },
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Place an order
router.post('/orders', async (req, res) => {
    const { products } = req.body; // An array of product IDs
    try {
        const order = new Order({
            customer: req.user.id, // Assumes user authentication middleware is in place
            products,
            status: 'Pending',
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Get customer order history
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find({ customer: req.user.id });
        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

module.exports = router;
