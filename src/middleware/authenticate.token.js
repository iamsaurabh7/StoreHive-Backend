const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/keys");

module.exports = (req, res, next) => {
  // Middleware logic for JWT verification here
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const verification = jwt.verify(token, JWT_SECRET_KEY);
    if (verification) {
      req.user = verification; // Attach user details to request object
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send("Invalid token");
  }
};
