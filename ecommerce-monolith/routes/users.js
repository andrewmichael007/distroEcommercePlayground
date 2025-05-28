const express = require("express"):
const router  = require("router");
//requiring the usercontroller
const { registerUser } = require("../controllers/usersController");

//method to use
router.post("/", registerUser);

//export
module.exports = router;





