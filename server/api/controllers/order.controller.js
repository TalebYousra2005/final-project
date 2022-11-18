const Order = require("../models/order.model");
const Book = require("../models/book.model");
exports.addOneOrder = async (req, res) => {
  try {
    const product = Book.findById(req.body.productId);
    if (!product) {
      return res.status(404).send({ message: "book not found" });
    }
    //! check if product exists
    const order = new Order({
      product: req.body.productId,
    });
    const savedOrder = await order.save();
    res
      .status(201)
      .send({ message: "order created successfully", data: savedOrder });
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "something went wrong with adding an order");
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "something went wrong with getting orders");
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    await Order.deleteOne({ _id: req.params.id });
    res.status(200).send("order deleted");
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "something went wrong with deleting an order");
  }
};
