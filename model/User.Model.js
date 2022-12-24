const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    first:{type:String,required:true},
    last:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    created:{type:String,required:true},
    balance:{type:String,required:true},
})


const UserModel = mongoose.model("user",userSchema);


module.exports={UserModel}