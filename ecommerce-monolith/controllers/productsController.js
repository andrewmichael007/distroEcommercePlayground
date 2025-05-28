//making an array of  dummy product
let dummyProducts = [
  { id: 1, name: 'laptop' , price: '1200'},
  { id: 2, name: 'monitor' , price: '500' },
  { id: 3, name: 'keyboard' , price: '200' },
  { id: 4, name: 'phone' , price: '800' }
];

//getting user products
exports.getProducts = (req, res) => { 
  res.json({products: , dummyProducts});
};


exports.addProducts = (req, res) => { 
  const { name, price } = req.body;

  


}
