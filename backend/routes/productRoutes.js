const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
});

// Add a new product (Admin only)
router.post('/', async (req, res) => {
    const { name, description, price, stock, category, imageUrl } = req.body;
    try {
        const product = new Product({ name, description, price, stock, category, imageUrl });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error adding product', error: err.message });
    }
});

module.exports = router;
