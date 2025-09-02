//require express
const express = require("express");


const router = express.Router();

//the functions created in the controller
const { register , validator , login } = require("./userController.js");


//then come and make a route for them over here
router.post(

    "/users/register",

    validator,

    register,
);

router.post (
    "/users/login",

    login
);

module.exports = router;

