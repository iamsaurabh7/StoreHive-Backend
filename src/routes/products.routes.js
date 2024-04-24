const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getAllProducts);
router.get("/:productId", productsController.getProductById);

module.exports = router;
