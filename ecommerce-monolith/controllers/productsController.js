//making an array of  dummy products
let dummyProducts = [
  { id: 1, name: 'laptop' , price: '1200' , description: 'mac book air pro'},
  { id: 2, name: 'monitor' , price: '500', description: 'lcd 14 inches screen' },
  { id: 3, name: 'keyboard' , price: '200', description: 'mechanical wireless keyboard' },
  { id: 4, name: 'phone' , price: '800', description: 'iphone 13 pro mini' }
];

//getting user products
const getProducts = (req, res) => { 
  res.json({products:  dummyProducts});
};

//this is a route to add products to the database or the dummy products
//this is an arrow function
const addProduct = (req, res) => { 
  //make the request body contain the name, price, description
  const { name, price, description } = req.body;

  // if the fields are missing..
  if (!name || !price || !description) {
    //return a message to tell us
    return res.status(400).json({ message: "Product details are missing" });
    //if the fields are there
  } else {
    //let's make  a new product
    const addProduct = {
      id : Date.now(),
      name,
      price,
      description
    };
    //push the new product make to the existing ones
    dummyProducts.push(addProduct);
    //send us a message to confirm
    res.status(201).json({ message: "New Product Added",  product : addProduct });
  };
};

//export your arrow functions
module.exports = { getProducts, addProduct };
