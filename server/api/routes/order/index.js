const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/order.controller.js");
const checkLogin = require("../../middleware/auth");

module.exports = () => {
  router.post("/orders/create",checkLogin,ordersController.addOneOrder);
  return router;
};
