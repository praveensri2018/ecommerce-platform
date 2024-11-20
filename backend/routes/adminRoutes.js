const express = require('express');
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');
const router = express.Router();

// Admin route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Admin route to add a new product
router.post('/products', async (req, res) => {
    const { name, description, price, stock, image } = req.body;

    try {
        const newProduct = new Product({ name, description, price, stock, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Admin route to update a product
router.put('/products/:id', async (req, res) => {
    const { name, description, price, stock, image } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, description, price, stock, image },
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Admin route to delete a product
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Admin route to get all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find().populate('customer');
        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Admin route to get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await User.find({ role: 'customer' });
        res.json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

module.exports = router;
