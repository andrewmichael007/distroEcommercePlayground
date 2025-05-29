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

  //THIS IS THE LOGIC FOR DELETING USERS
  //making an array of deleted users
let deletedUsers = [];
  
//let's say i want to delete a user
const deleteUser = (req, res) => {
  
  const { name, email,  password } = req.body;
  
  if (!name || !email || !password){
    res.status(400).json({ message: "Missing fields" });
  } else {
    const deletedUser = {
      id: Date.now(),
      name: " ",
      email: " " 
    };
    //adding deleted user to the array  of deleted users
    deletedUsers.push(deletedUser);

    //send out a json message to show that user is deleted
    res.status(200).json({ message: "User Deleted" });
  };
};

  
  //updating users
  const updateUser = (req, res) => {
    const { name, email, password } = req.body;

    
  };
//export the function
module.exports = { registerUser, deleteUser };
