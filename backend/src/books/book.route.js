const express = require('express');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller.js');
const router = express.Router();


router.post("/create-book", postABook)
router.get("/", getAllBooks)
router.get("/:id", getSingleBook)
router.put("/edit/:id", updateBook)
router.delete("/:id", deleteABook)

module.exports = router;