const productModel = require("../Models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find().populate("category");
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.productId)
      .populate("category");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const categoryTitle = req.params.categoryTitle;
    const products = await productModel.find({}).populate({
      path: "category",
      match: { title: categoryTitle },
    });
    res.json(products.filter((product) => product.category !== null));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  getProductsByCategory,
};
