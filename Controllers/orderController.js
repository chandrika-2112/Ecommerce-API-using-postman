const Order = require("../Models/orderModel");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { user_id, total_payment, payment_mode } = req.body;
    const newOrder = new Order({ user_id, total_payment, payment_mode });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get orders by user ID
const getOrdersByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const orders = await Order.find({ user_id });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createOrder, updateOrderStatus, getOrdersByUserId };
