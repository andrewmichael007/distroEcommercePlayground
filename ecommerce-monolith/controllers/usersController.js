//controller controlls the logic
//the flow: 
exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email  || !password) {
    return res.status(400).json({message: "Missing fields"});
  }
  else {
    const user = {id: Date.now(), name, email };
    return res.status(201).json ({message: "User registered", user});
};

