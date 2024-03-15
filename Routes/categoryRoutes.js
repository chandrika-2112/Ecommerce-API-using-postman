const express = require("express");
const { getCategories, createCategory } = require("../Controllers/categoryController");

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);

module.exports = router;
