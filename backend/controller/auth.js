import User from "../models/userModel.js"
import validator from "validator";
import bcrypt from "bcryptjs";
import { genToken } from "../config/token.js";


export const registration = async (req,res) =>{
    try {
        const {name,email,password} = req.body
        const userExist = await User.findOne({email})
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

    console.log("User saved in DB 👉", user) // ✅ debug
        const token = await genToken(user._id)
        res.cookie("token" , token,{
            httpOnly: true,
            secure: false,
            sameSite : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        
        return res.status(201).json(user)
        
    } catch (error) {
        console.log("registration error");
        return res.status(500).json({message  : `registration error ${error}`})
    }
}


export const login = async(req,res) =>{
    try {
        const {email ,password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message : "User is not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message : "Password is incorrect"})
        }

        const token = await genToken(user._id)
        res.cookie("token" , token,{
            httpOnly: true,
            secure: false,
            sameSite : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        
        return res.status(201).json(user)

    } catch (error) {
        return res.status(400).json({message : "You can not login"})
    }
}

export const logOut = async(req,res) =>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message : "LogOut successful"})
    } catch (error) {
        console.log("login Error");
        return res.status(500).json({message : "LogOut error"})
    }
}


export const googleLogIn = async(req,res) =>{
    try {
        const {name , email} = req.body
        let user = await User.findOne({email})
         if(!user){
            user = await User.create({
                name , email
            })
        }

        const token = await genToken(user._id)
        res.cookie("token" , token,{
            httpOnly: true,
            secure: false,
            sameSite : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        
        return res.status(200).json(user)

    } catch (error) {
             return res.status(400).json({message : "Google login error"})
    }
}


