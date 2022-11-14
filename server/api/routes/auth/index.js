const express = require("express");
const router = express.Router();
const AuthController = require("../../controllers/auth-controller");
const checkLogin = require("../../middleware/auth")

module.exports = () => {
  router.post("/auth/register", AuthController.register);
  router.post("/auth/login", AuthController.login);
  router.get("/user/profile", checkLogin, AuthController.account);
  return router;
};
