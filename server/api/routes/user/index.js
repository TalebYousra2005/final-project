const express = require("express");

const UserController = require("../../controllers/user.controller");
const router = express.Router();

module.exports = () => {
  router.use(function (req, res, next) {
    console.log('"hello fromusers router');
    next();
  });

  router.get("/users", UserController.getAllUsers);
  router.get("/users/:id", UserController.getOneUserById);
  router.put("/users/:id", UserController.updateOneUser);
  router.delete("/users/:id", UserController.deleteOneUser);

  return router;
};
