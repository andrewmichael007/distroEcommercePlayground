//CONTROLLING THE USER REGISTRATION LOGIC
// arrow function for registering user
const registerUser = (req, res) => {
  
  const { name, email, password } = req.body;
  
  if (!name || !email  || !password) {
    return res.status(400).json({message: "Missing fields"});
  } else {
    //create a new user
    const user = {
      id: Date.now(),
      name, 
      email 
    };
    // return a message to show that new user is created
    return res.status(201).json ({message: "User registered", user});
};


  //just tryin' my hands on deleting a user
  const deleteUser =
//export the function
module.exports = { registerUser };
