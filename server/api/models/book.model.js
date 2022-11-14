const mongoose = require("mongoose");
/**
 * * the book must have
 * *title
 * *author
 * *price
 * *image
 * *cloudinary_id
 * *createdAt
 */
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
