
//this holds the logic for registering a user
const registerUser = (req, res) => {
  
  const { name, email, password } = req.body;
  
  if (!name || !email  || !password) {
    return res.status(400).json({
      success: false,
      message: "Fill missings fields"
    });
  } else {
    //create a new user
    const user = {
      id: Date.now(),
      name,
      email,
      password
    };
    // return a message to show that new user is created
    return res.status(201).json ({
      success: true,
      message: "User registered", 
      data: user
    });
  };

};

// 2. Functions for get user
// 3. Functions for update user
// 4. Functions for deleted user


//exporting functions
module.exports = { registerUser };
