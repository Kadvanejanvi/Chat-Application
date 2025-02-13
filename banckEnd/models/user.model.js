import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type :String,
        required:true,
        unique:true,
    },
    email:{
        type :String,
        required:true,
        unique:true,
    },
    passWord:{
        type :String,
        required:true,
        minLength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    proFilePic:{
        type:String,
        default:""
    },

},{timestamps:true}
)

const User = mongoose.model("User",userSchema)

export default User