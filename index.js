require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.routes");
const productsRoutes = require("./src/routes/products.routes");
const cartRoutes = require("./src/routes/cart.routes");

const app = express();

const MONGODB_URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("database connected");

    app.get("/", (req, res) => {
      res.send("Hello StoreHive");
    });

    app.use("/auth", authRoutes);
    app.use("/products", productsRoutes);
    app.use("/cart", cartRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
