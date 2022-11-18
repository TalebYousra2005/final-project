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
    res.status(err.status || 500).send(err.message || "something went wrong");
  }
};

exports.getOrders=async(req,res)=>{
  try {
    const order = await Order.find();
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
