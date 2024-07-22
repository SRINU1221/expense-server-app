const expressAsyncHandler = require('express-async-handler');

const User = require("../../model/User");

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

module.exports = {registerUser, fetchUsersController};