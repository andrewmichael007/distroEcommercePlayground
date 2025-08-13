//routing the routes/products
const express = require("express");
const router = express.Router();

const {  addProduct, getProducts } = require("../controllers/productsController");

// Route to add products
router.post("/product", addProduct );

router.get("/products", getProducts );

module.exports = router;
