// const express = require("express");
// const Product = require("../models/product.model");

// const router = express.Router();

// // Get all products
// router.get("/", async (req, res) => {
//   try {
//     let { limit = 10, page = 1 } = req.query;
//     limit = parseInt(limit);
//     page = parseInt(page);
//     const products = await Product.find()
//       .limit(limit)
//       .skip((page - 1) * limit);
//     res.status(200).send(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.getAllProducts);
router.get("/:productId", productsController.getProductById);

module.exports = router;

