const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  //   productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, min: 1, required: true },
  quantity: { type: Number, min: 0, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
