const express = require("express");
const authRoutes = require("./auth");
const bookRouter = require("./book");
const orderRouter = require("./order/index");
const router = express.Router();

module.exports = () => {
  router.use("/", authRoutes(), bookRouter(),orderRouter());
  return router;
};
