import jwt from "jsonwebtoken"


export const adminAuth = async(req, res, next) => {
  try {
    
    const { adminToken } = req.cookies 
    
    if (!adminToken) {
      return res.status(401).json({ message: "admin does not have token" })
    }

    const verifyToken = jwt.verify(adminToken, process.env.JWT_SECRET)

    if (verifyToken.email !== process.env.ADMIN_EMAIL) {
      console.log("EMAIL:", verifyToken.email, "ENV:", process.env.ADMIN_EMAIL) 
      return res.status(403).json({ message: "Not authorized as admin" })
    }

    req.adminEmail = process.env.ADMIN_EMAIL
    next()

  } catch (error) {
    console.log("ERROR:", error.message)     
    return res.status(400).json({ message: "AdminAuth error" })
  }
}