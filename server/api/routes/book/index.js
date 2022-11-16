const express = require("express");
const router = express.Router();
const BooksController = require("../../controllers/book.controller");
const checkLogin = require("../../middleware/auth");
const upload = require("../../middleware/upload");
module.exports = () => {
  router.post(
    "/books/create",
    checkLogin,
    upload.single("image"),
    BooksController.addOneBook
  );
  router.get("/books/:id", checkLogin, BooksController.getOneBookById);
  router.put("/books/edit/:id", checkLogin, BooksController.updateOneBook);
  router.delete("/books/:id", checkLogin, BooksController.deleteOneBook);
  return router;
};
