const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  total_payment: Number,
  payment_mode: String,
  status: {
    type: String,
    enum: ["placed", "in-transit", "cancelled"],
    default: "placed",
  },
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;