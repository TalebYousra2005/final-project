const express = require("express");
const authRoutes = require("./auth");
const bookRouter = require("./book");
const router = express.Router();

module.exports = () => {
  router.use("/", authRoutes(),bookRouter());
  return router;
};
