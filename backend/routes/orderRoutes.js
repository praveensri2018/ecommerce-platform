const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Place an order
router.post('/', authMiddleware, async (req, res) => {
    const { items, totalAmount, paymentId } = req.body;
    try {
        const order = new Order({ user: req.user.id, items, totalAmount, paymentId });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ message: 'Error placing order', error: err.message });
    }
});

// Get user's orders
router.get('/', authMiddleware, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('items.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching orders', error: err.message });
    }
});

module.exports = router;
