const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/product", booksController.getAllBooks);
router.post("/product", booksController.addBook);
router.get("/product/:id", booksController.getById);
router.put("/product/:id", booksController.updateBook);
router.delete("/product/:id", booksController.deleteBook);

module.exports = router;
