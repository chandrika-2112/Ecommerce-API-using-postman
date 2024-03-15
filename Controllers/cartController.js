const Cart = require("../Models/cartModel");

// Add an item to the cart
const addToCart = async (req, res) => {
  try {
    const { product_id, user_id, quantity } = req.body;
    const cartItem = await Cart.findOne({ product_id, user_id });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
      res.status(200).json({ message: "Item updated in the cart" });
    } else {
      const newCartItem = new Cart({ product_id, user_id, quantity });
      await newCartItem.save();
      res.status(201).json({ message: "Item added to the cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update quantity of an item in the cart
const updateCartItem = async (req, res) => {
  try {
    const { cartItemId, quantity } = req.body;
    const cartItem = await Cart.findById(cartItemId);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    cartItem.quantity = quantity;
    await cartItem.save();
    res.status(200).json({ message: "Cart item updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Remove an item from the cart
const removeFromCart = async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    await Cart.findByIdAndDelete(cartItemId);
    res.status(200).json({ message: "Cart item removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { addToCart, updateCartItem, removeFromCart };
