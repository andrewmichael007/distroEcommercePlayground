
//requiring statements
const express = require("express");


// allows external clients to access the API.
const cors = require("cors");

//logs HTTP requests to the console. request method, urls, status codes,  response time, 
const morgan = require("morgan");

//allows to make use of the .env file
require("dotenv").config();

//using helmet for protection against click jacking, cross sitee scripting
const helmet = require("helmet");

//setting up rate limiter
const rateLimit = require("express-rate-limit");

//storing routes
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");



// setting up rate limiter
const apiLimiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES) * 60 * 1000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUEST), // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later."
});

// using various frameworks
const app = express();
app.use(apiLimiter);
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());


 //parses incoming JSON requests
app.use(express.json());

// mounting on server
app.use('/', userRoutes);
app.use('/', productRoutes);
app.use('/', orderRoutes);


// Fallback route
app.use((req, res) => 
    res.status(404).send('Route not found')
);

//storing the port number
const PORT = process.env.PORT

//listening
app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);

// Exporting the app for testing purposes
module.exports = app;