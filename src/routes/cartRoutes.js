const express = require("express");
const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const authMiddleware = require("../middleware/authenticateToken");

const router = express.Router();

// Apply authMiddleware to all routes in this router
router.use(authMiddleware);

// GET all carts for the authenticated user
router.get("/", async (req, res) => {
  try {
    // Find all carts associated with the authenticated user
    let carts = await Cart.find({ user: req.user.id }).populate("product");
    res.status(200).send(carts);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST a new item to the cart
router.post("/", async (req, res) => {
  try {
    // Create a new cart item associated with the authenticated user
    let cart = await Cart.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PATCH (update) an item in the cart
router.patch("/", async (req, res) => {
  try {
    let { quantity, product } = req.body;
    // Update the quantity of the product in the cart for the authenticated user
    let updatedCart = await Cart.findOneAndUpdate(
      { user: req.user.id, product: product },
      { quantity: quantity },
      { new: true }
    ).populate("product");

    if (!updatedCart) {
      return res.status(404).send("Cart item not found");
    }

    res.status(200).send(updatedCart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETE an item from the cart
router.delete("/", async (req, res) => {
  try {
    let { product } = req.body;
    // Delete the product from the cart for the authenticated user
    let deletedCart = await Cart.findOneAndDelete({
      user: req.user.id,
      product: product,
    }).populate("product");

    if (!deletedCart) {
      return res.status(404).send("Cart item not found");
    }

    res.status(200).send(deletedCart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
