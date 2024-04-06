const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/login", authController.signin);
// router.post("/user/:id", authController.getUserById);
router.post("/signup", authController.signup);
router.post("/refresh", authController.refreshToken);

module.exports = router;
