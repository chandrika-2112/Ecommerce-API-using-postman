const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: String,
});

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;