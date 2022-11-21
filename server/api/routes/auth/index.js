const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/auth.controller");
const checkLogin = require("../../middleware/auth");

module.exports = () => {
  router.post("/auth/signup", AuthController.register);
  router.post("/auth/signin", AuthController.login);
  router.get("/user/profile", checkLogin, AuthController.getAccount);
  return router;
};
