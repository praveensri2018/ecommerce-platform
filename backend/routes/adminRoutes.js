const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get all customers
router.get("/customers", async (req, res) => {
  try {
    const customers = await User.find();
    res.json(customers);
  } catch (err) {
    res.status(500).send("Error fetching customers");
  }
});

module.exports = router;
