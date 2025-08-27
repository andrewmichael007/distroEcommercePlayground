
//require statements
const express = require("express");
const mongoose = require("mongoose");
// const createBugsRoute = require( "./Routes/createBugsRoute" );

require("dotenv").config();

//builds a mini server call app
const app = express();

//understands json format of data
app.use(express.json());

//server mounting at "/" +  route path = final url "/bug"

//create bugs server mount
// app.use( '/', createBugsRoute);


//mongodb connection
mongoose.connect(process.env.PRODUCT_SERVICE_MONGO_URI, {
    // deprecated in mongoose 6.x
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(() => 
    console.log("mongodb connected to user product serviceDb😎")
)
.catch(err => 
    console.error(err)
);

// taking the port number from the .env file and store in port
const port = process.env.PRODUCT_SERVICE_PORT;

//listening for incoming requests
app.listen(port, () => {
    console.log(`server is running on port ${port}!🚀 for the product service`);
});

