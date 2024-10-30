const express = require('express');
const { createAOrder, getOrderByEmail } = require('./order.controller.js');

const router = express.Router();

router.post("/", createAOrder);

router.get("/email/:email", getOrderByEmail);

module.exports = router;