//requires the user model
const User = require("./userModel.js");

const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");

//requiring the unique identifier
const { v4: uuidv4 } = require("uuid");

//validator
const validator = [
    body('name').trim().notEmpty().isLength({ min: 5 }).withMessage("name is required"),
    body('email').isEmail().withMessage("invalid email"),
    body('username').trim().notEmpty().withMessage("message is required"),
    body('password').notEmpty().isLength({ min: 6 }).withMessage("password is required and must be at least 6 characters")
];

//REGISTRATION
//creation of the register arrow function
const register =  async ( req, res ) => {


    const errors =  validationResult(req);

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            success: false,
            message: "validation failed",
            errors: errors.array()
        });
    }

    //defining the request body
    const { name, email, username, password } = req.body;

    try {
        //checking if user already exists using the username or email
        const existingUser = await User.findOne({ 
            $or:  [ { email } , { username } ]
        });

        if ( existingUser ) {
            return res.status(400).json({
                success: false,
                message: " user already exist ",
                // data: existingUser
            });
        }

        //hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //debug
        console.log(
            "password: " , password ,
            "hashedPassword: " , hashedPassword
        );

        //real creation
        const user = new User({
            id : uuidv4(),
            name,
            email,
            username,
            password : hashedPassword
        });

        //logging out data been created
        console.log( "user created: " , user );

        //save
        await user.save();

        //return response
        res.status(200).json({
            success: true,
            message: "user registered successfully",
            data : user
        });
    } catch (error){
        console.error (error);
    }

}


//LOGIN
const login = async ( req, res) => {

    //define the request body
    const { username , password } = req.body;

    //checking if username exists
    const existingUserByEmail = await User.findOne({ email });

    if ( !existingUserByEmail ) { 
        return res.status(400).json({
            success: false ,
            message: " user does not exist "
        });
    };

    //comparing password
    const passwordMatch = await bcrypt.compare( password, User.password );

    if ( !passwordMatch ) { 
        return res.status(400).json({
            success : false,
            message : " password does not match "
        });
    };


};

//export module
module.exports = { 
    register, 
    validator
};