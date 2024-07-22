const expressAsyncHandler = require('express-async-handler');

const User = require("../../model/User");
const generateToken = require('../../middlewares/generateToken');

const registerUser = expressAsyncHandler(async (req,res)=>{

    const {email , firstname , lastname , password} = req?.body;

     //check if the user is exist or not 
     const userExists = await User.findOne({email});
     if(userExists) throw new Error('User already exist');

    try {

        const user = await User.create({email, firstname, lastname ,password});
        res.status(200).send({
            success:'true',
            message:'Your Registration Successful',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(400).send({
            success:'false',
            message:`error found ${error}`
            
        })
    }
});

//fetch all the users

const fetchUsersController = expressAsyncHandler(async (req,res) =>{
        try{
            const users = await User.find({});
            res.json(users);
        } catch(error){
            res.json(error);
        }
    }
);


//login controller
const loginController = expressAsyncHandler(async (req,res)=>{
       const {email,password} = req?.body;
       
       //find the user id
       const userFound = await User.findOne({email});

       //check if the user password is match or not 
       if(userFound && (await userFound?.isPasswordMatch(password))){
            res.json({
                _id:userFound?._id,
                firstname: userFound?.firstname,
                lastname: userFound?.lastname,
                email: userFound?.email,
                isAdmin: userFound?.isAdmin,
                token: generateToken(userFound?._id)
            });
       }
       else{
        res.status(401);
        throw new Error('Invalid Login credentials');
       }

    }
    
);
module.exports = {registerUser, fetchUsersController, loginController};