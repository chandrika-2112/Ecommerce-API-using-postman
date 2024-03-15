const express = require("express");
const router = express.Router();
const {
  addToCart,
  updateCartItem,
  removeFromCart,
} = require("../Controllers/cartController");
const authMiddleware = require("../Middlewares/authMiddleware");

// Add item to the cart
router.post("/add", authMiddleware, addToCart);

// Update item quantity in the cart
router.put("/update", authMiddleware, updateCartItem);

// Remove item from the cart
router.delete(
  "/remove/:cartItemId",
  authMiddleware,
  removeFromCart
);

module.exports = router;
