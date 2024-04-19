const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const { JWT_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = require("../config/keys");

exports.generateAuthTokens = async (email, password) => {
  const user = await userModel.findOne({ email, password });

  if (!user) {
    return {
      statusCode: 401,
      data: "Invalid credentials",
    };
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
    },
    JWT_SECRET_KEY,
    {
      expiresIn: "2 days",
    }
  );

  const refreshToken = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
    },
    JWT_REFRESH_SECRET_KEY,
    {
      expiresIn: "7 days",
    }
  );

  return {
    statusCode: 201,
    data: {
      userName: user.name,
      id: user.id,
      token,
      refreshToken,
      message: "Signin successful",
    },
  };
};

exports.refreshToken = async (refreshToken) => {
  try {
    const verification = jwt.verify(refreshToken, JWT_REFRESH_SECRET_KEY);

    if (verification) {
      const userData = await userModel.findOne({ _id: verification.id });
      const newToken = jwt.sign(
        {
          id: verification.id,
          name: verification.name,
          email: verification.email,
          age: verification.age,
        },
        JWT_SECRET_KEY,
        { expiresIn: "7 days" }
      );
      return { token: newToken };
    }
  } catch (error) {
    console.log({ error, message: "Refresh token expired" });
    throw new Error("Refresh token expired");
  }
};
