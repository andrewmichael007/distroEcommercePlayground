//require express
const express = require("express");

const router = express.Router();

const { register } = require("./userController.js");


//then come and make a route for them over here
router.post('/register', register ); 

module.exports = router;
