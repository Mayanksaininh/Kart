import jwt from "jsonwebtoken" 

export const adminAuth = async(req,res,next) =>{
    try {

        const {token} = req.cookies
        if(!token){
            return res.status(401).json({message : "admin does not have token"})
        }
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({message : "admin does not have valid token"})
        }

        req.adminEmail = process.env.ADMIN_EMAIL

        next()

    } catch (error) {
           return res.status(400).json({message : "AdminAuth error"})
    }
}