const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto'); // For generating signature hash
const router = express.Router();

// Initialize Razorpay instance using environment variables
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,  // Use the key from the .env file
    key_secret: process.env.RAZORPAY_KEY_SECRET,  // Use the key secret from the .env file
});

// Create a new payment order
router.post('/create', async (req, res) => {
    const { amount, currency } = req.body; // Amount in paise (1 INR = 100 paise)

    try {
        const options = {
            amount: amount * 100, // Convert to paise
            currency: currency || 'INR', // Default currency INR
            receipt: `order_${Date.now()}`,
            payment_capture: 1, // Automatically capture payment
        };

        razorpay.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).json({ message: 'Payment failed', error: err });
            }
            res.json(order);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
});

// Verify payment
router.post('/verify', async (req, res) => {
    const { order_id, payment_id, signature } = req.body;

    const generated_signature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(order_id + "|" + payment_id)
        .digest('hex');

    if (generated_signature === signature) {
        // Payment is successful
        res.json({ message: 'Payment verified successfully' });
    } else {
        res.status(400).json({ message: 'Payment verification failed' });
    }
});

module.exports = router;
