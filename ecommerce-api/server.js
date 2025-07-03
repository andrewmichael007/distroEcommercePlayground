// creating three routes: users, products, and orders in a single service (monolithic architecture)

// concepts covered
// 1. http methods
// 2. REST structure
// 4. Basic latency
// 5. JSON I/O

// require statements
const express = require("express"); //introduces express framework into project
const app = express(); // builds a mini server called app with express
app.use(express.json()); // understands json formats of data

// *******products route********
// this route is when a user is trying to get something from the server from the products routes
app.get('/products', (req,res) => {
    res.json([{id : 1, name : "Product A"}]);
});

// ******users route******
//this route is for when a new user is created, this sends a message to the server. the server returns with 
// status code 201 indicating successful user creation
app.post('/users', (req,res) => {
    res.status(201).send("user created");
});

//orders route
app.post('/orders', (req,res) => {
    res.status(200).send("order successful");
});

// this makes the app server get ready for incoming requests at port 3000
app.listen(3000, () => {
    console.log("server running on port 3000!");
});
