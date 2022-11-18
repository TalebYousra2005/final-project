const mongoose = require("mongoose");

/**
 * * Order model consists of
 * *owner
 * *item
 * *createdAt
 * *
 */

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
