//route
const express = require("express");
const router  = express.Router();

//requiring the usercontroller
const { registerUser } = require("../controllers/usersController");  

//method to use
router.post('/user' ,  registerUser);

//export
module.exports = router;

