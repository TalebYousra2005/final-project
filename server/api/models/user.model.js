const mongoose = require("mongoose");

/**
 * *User model consists of :
 * *userName
 * *email
 * *password
 * *studyFeild
 * *orders
 * *token
 * *createdAt
 */
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  studyFeild: {
    type: String,
    required: true,
  },
  orders: {
    type: [Object],
    default: [],
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
