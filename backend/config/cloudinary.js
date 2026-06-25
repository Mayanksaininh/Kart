import { v2 as cloudinary } from 'cloudinary'; 

const uploadCloudinary = async(filePath) => {

     // Configuration
     cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_KEY 
    });
    if(!filename) {
        return null 
    }

    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload()
}