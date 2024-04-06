require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const mongodbUrl = process.env.MONGODB_URL;
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(mongodbUrl).then(() => {
  console.log("database connected");

  app.use("/auth", authRoutes);
  app.use("/products", productRoutes);
  app.use("/cart", cartRoutes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
