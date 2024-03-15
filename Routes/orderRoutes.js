const express = require("express");
const router = express.Router();
const {
  createOrder,
  updateOrderStatus,
  getOrdersByUserId,
} = require("../Controllers/orderController");
const authMiddleware = require("../Middlewares/authMiddleware");

// Create a new order
router.post("/create", authMiddleware, createOrder);

// Update order status
router.put("/:orderId", authMiddleware, updateOrderStatus);

// Get orders by user ID
router.get("/user/:user_id", authMiddleware, getOrdersByUserId);

module.exports = router;
