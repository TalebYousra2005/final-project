const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ message: "Users list retrieved", data: users });
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};
exports.getOneUserById = async (req, res) => {
  try {
    // req:{
    //   params:{

    //   }
    //   body:{

    //   }
    // }
    let user = await User.findOne({ _id: req.params.id });
    if (!user) {
      res.status(404).send("user not found");
    }
    res.status(200).send({ message: `user retreived`, data: user });
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "something went wrong while getting the user");
  }
};

exports.updateOneUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json({ message: "User updated", data: user });
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "something went wrong while updating user");
  }
};

exports.deleteOneUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send("User deleted");
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "somthing went wrong while deleting the user");
  }
};
