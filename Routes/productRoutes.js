const express = require("express");
const {
  getProducts,
  createProduct,
  getProductById,
  getProductsByCategory,
} = require("../Controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:productId", getProductById);

// GET products by category title
router.get("/category/:categoryTitle", getProductsByCategory);

module.exports = router;
