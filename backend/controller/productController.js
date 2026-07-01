import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../models/productModel.js";


export const addproduct = async (req,res) =>{
    try {
        const {name , description, price, category} = req.body

        const image1 = await uploadOnCloudinary(req.files.image1[0].path)
        const image2 = await uploadOnCloudinary(req.files.image2[0].path)
        const image3 = await uploadOnCloudinary(req.files.image3[0].path)
        const image4 = await uploadOnCloudinary(req.files.image4[0].path)

        const productdata = {
         name , 
         description, 
         price : Number(price),
         category,
         image1,
         image2,
         image3,
         image4
        }

        const product = await Product.create(productdata)

        return res.status(201).json(product)

    } catch (error) {
        console.log("AddProduct error");
    }
} 

export const listproduct = async(req,res) =>{
    try {
        const product = await Product.find({})
        return res.status(200).json(product)
    } 
    
    catch (error) {
        console.log("Listing Product error");
    }
}

export const removeproduct = async(req,res) =>{
    try {
        let {id} = req.param
        const removeproduct = await Product.findByIdAndDelete(id)
        return res.status(200).json(product)
    } 
    
    
    catch (error) {
        console.log("Remove Product Error");
    }
}