const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const { JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = require("../config/keys");
const authService = require("../services/auth.service");

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const authResult = await authService.generateAuthTokens(email, password);
    return res.status(authResult.statusCode).send(authResult.data);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

// exports.getUserById = async (req, res) => {
//   // Get user by ID logic here
//   const { id } = req.params;

//   try {
//     const user = await userModel.findOne({ _id: id });

//     if (user) {
//       return res.status(201).send({
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         age: user.age,
//         message: "Authorized",
//       });
//     } else {
//       return res.status(404).send("User not found");
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error");
//   }
// };

exports.signup = async (req, res) => {
  // Signup logic here
  const { name, email, password, age } = req.body;
  const user = new userModel({ name, email, password, age });
  await user.save();
  // await userModel.create({ name, email, password, age })
  // userModel.create - used for creating only
  // user.save can be used for both creating new doc and updating old one as well, as it creates instance on an model

  res.status(201).send("signup successful");
};

exports.refreshToken = async (req, res) => {
  // Refresh token logic here
  const refreshToken = req.headers["authorization"];

  if (!refreshToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const tokenData = await authService.refreshToken(refreshToken);
    return res.send(tokenData);
  } catch (error) {
    console.log(error);
    return res.status(401).send("Unauthorized");
  }
};
