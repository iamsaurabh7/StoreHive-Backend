const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // Make name field mandatory
    },
    email: {
      type: String,
      unique: true,
      required: true, // Make email field mandatory
    },
    password: {
      type: String,
      required: true, // Make password field mandatory
    },
    age: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = model("User", userSchema);

module.exports = userModel;

//password hashing
//orgon2
//pbkdf2
//bcrypt
