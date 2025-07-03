//route
const express = require("express"):
const router  = require("router");
//requiring the usercontroller
const { registerUser } = require("../controllers/usersController");  

//method to use
router.post("/", registerUser); // POST /users -> registerUser()

//export
module.exports = router;

