//require express
const express = require("express");


const router = express.Router();

const { register , validator } = require("./userController.js");


//then come and make a route for them over here
router.post(

    "/register",

    validator,

    register
);

module.exports = router;

