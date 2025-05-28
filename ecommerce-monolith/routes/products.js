const express = require("express");
const router = express.router();

const { getProducts, addProducts } = require("../controllers/productsController");

router.get("/", getProducts);
router.post("/", addProducts);

module.exports = router;
