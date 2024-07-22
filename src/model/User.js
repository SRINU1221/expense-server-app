const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    firstname: {
        required: [true,'first name is required'],
        type: String,
    },
    lastname: {
        required: [true, "last name is required"],
        type: String,
    },
    email:{
        required: [true,"email is required"],
        type: String,

    },
    password:{
        required : [true,'Password is required'],
        type: String,
    },
    isAdmin :{
        type:Boolean,
        default:false,
    }

},{
    timesamp:true,
});

//Hash password
userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

//verify password 
userSchema.methods.isPasswordMatch = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password);
}



//compile schema into the model

const User = mongoose.model('User', userSchema);

module.exports = User;