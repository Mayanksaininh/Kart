import express from "express"
import { addproduct, listproduct, removeproduct } from "../controller/productController.js"
import upload from "../middleware/multer.js"
import { adminAuth } from "../middleware/adminAuth.js"


const productroute = express.Router()

productroute.post("/addproduct" , upload.fields([{name : "image1" , maxCount : 1}, 
    {name : "image2" , maxCount : 1},
    {name : "image3" , maxCount : 1} ,
    {name : "image4" , maxCount : 1}]),addproduct)

export default productroute


productroute.get("/listproduct" , listproduct)
productroute.post("/removeproduct/:id" ,adminAuth, removeproduct)