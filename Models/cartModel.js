const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  quantity: { type: Number, default: 1 },
});

const cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;