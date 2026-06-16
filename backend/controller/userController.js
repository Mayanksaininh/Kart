import User from "../models/userModel.js"

export const getCurrentUser = async(req,res) =>{
    try {
        const user = await User.findById(req.userId).select("-password")

        if(!user){
            return res.status(400).json({message : "User is not found"})
        }

        return res.status(200).json({ user })
    } 
    
    catch (error) {
     return res.status(400).json({message : "getCurrentUser error"})   
    }
}