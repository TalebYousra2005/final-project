const mongoose = require("mongoose");

/**
 * * Order model consists of
 * *owner
 * *item
 * *createdAt
 * *
 */

const orderSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  buyer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  item: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
  },
});
