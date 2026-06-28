import express from "express"
import { addproduct } from "../controller/productController"

const productroute = express.Router()

productroute.post("/addproduct" , upload([{name : "image1" , maxCount : 1}, 
    {name : "image2" , maxCount : 1},
    {name : "image2" , maxCount : 1} ,
    {name : "image4" , maxCount : 1}]),addproduct)

export default productroute
