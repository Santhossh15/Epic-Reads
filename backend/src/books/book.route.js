const express = require('express');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller.js');
const verifyAdminToken = require('../middleware/verifyAdminToke.js');
const router = express.Router();


router.post("/create-book", verifyAdminToken, postABook)
router.get("/", getAllBooks)
router.get("/:id", getSingleBook)
router.put("/edit/:id", verifyAdminToken, updateBook)
router.delete("/:id", verifyAdminToken, deleteABook)

module.exports = router;