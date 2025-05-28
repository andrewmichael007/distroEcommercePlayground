const express = require("express");
const router = express.router();

const { getProducts, createProducts } = require("../controllers/productsController");

router.get("/", getProducts);
router.post("/", createProducts);

module.exports = router;
