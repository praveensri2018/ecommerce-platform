const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send("Error fetching products");
  }
});

module.exports = router;
