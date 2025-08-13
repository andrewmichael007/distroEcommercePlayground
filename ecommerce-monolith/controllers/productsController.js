//making an array of  dummy products
let dummyProducts = [
  { name: 'laptop' , price: '1200' , description: 'mac book air pro'},
  { name: 'monitor' , price: '500', description: 'lcd 14 inches screen' },
  { name: 'keyboard' , price: '200', description: 'mechanical wireless keyboard' },
  { name: 'phone' , price: '800', description: 'iphone 13 pro mini' }
];

//getting all  products
const getProducts = (req, res) => {
  res.status(201).json({
    success: true,
    data:  dummyProducts
  });
};

//controller or  logic for adding a product
const addProduct = (req, res) => {
  //make the request body contain the name, price, description
  const { name, price, description } = req.body;

  // if the fields are missing..
  if (!name || !price || !description) {
    //return a message to tell us
    return res.status(400).json({ 
      success: false,
      message: "Product details are missing" 
    });
    //if the fields are there
  } else {
    //let's make  a new product
    const product = {
      id : Date.now(),
      name,
      price,
      description
    };
    //push the new product make to the existing ones
    dummyProducts.push(product);
    //send us a message to confirm
    res.status(201).json({ 
      success: true,
      message: "New Product Added",  
      data : product });
  };
};




//export your arrow functions
module.exports = { addProduct, getProducts };
