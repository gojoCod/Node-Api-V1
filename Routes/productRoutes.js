const express = require("express");
const router = express.Router();
const Product = require("../models/productModels");
const {
  getProducts,
  updateProductsById,
  getProductById,
  deleteProductById,
  addProduct,
} = require("../controller/productController");
router.get("/", getProducts);

router.get("/:id", getProductById);

// update a product
router.put("/:id", updateProductsById);

// delete a product
router.delete("/:id", deleteProductById);

router.post("/", addProduct);

module.exports = router;
