import User from "../models/userModel"
import validator from "validator";
import bcrypt from "bcrypt.js"



export const register = async (req,res) =>{
    try {
        const {name,email,password} = req.body
        const userExist = await User.findone({email})
        if(userExist) {
            return res.status(400).json({message :  "User already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message : "Enter valid email"})
        }
        if(password.length < 8){
            return res.status(400).json({message : "Enter strong password"})
        }
        const hashPassword = await bcrypt.hash(password ,10)
        const user = await User.create({name,email,password : hashPassword})
        
    } catch (error) {
        
    }
}