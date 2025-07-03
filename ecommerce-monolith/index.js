const express = require("express");

// allows external clients to access the API.
const cors = require("cors");

//logs HTTP requests.
const morgan = require("morgan");
require("dotenv").config();

//using helmet for protection against click jacking, cross sitee scripting
const helmet = require("helmet");
app.use(helmet());


//storing routes
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

// using various frameworks
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan());

 //parses incoming JSON requests
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// Fallback route
app.use((req, res) => res.status(404).send('Route not found'));

//listening
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
