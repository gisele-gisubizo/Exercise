import Product from "../model/productmodel.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateProduct=async(req, res) =>{
    
    try{
        console.log("CreateProduct controller reached");
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("File received:", req.file);

        const{productName, productPrice, productCategory , productDiscount,status}=req.body;
        const newProduct=new Product({productName, productPrice, productCategory , productDiscount, productImage: result.secure_url , status});

        await newProduct.save();
        res.status(201).json({success:true, message:"Product created successfully"})
    }catch(error){
        res.status(500).json({error: false, message:"Server error", error:error.message});

    }
}


export const getAllProduct=async(req,res)=>{

    try{
    const products= await Product.find();
    res.status(200).json({success:true,products})
    }catch(error)
    {
        res.status(500).json({sucess:false,message:"Server Error",error:error.message});
    }

}


export const getAllProductById= async(req,res)=>{
    try{const{id}=req.params;
    const products= await Product.findById(id);
    if (!products)
    {
       return res.status(404).json({sucess:false,message:"Server Error",error:error.message});
    
    }
    res.status(200).json({sucess:true,products});}
    
    catch(error){
    
        res.status(500).json({sucess:false,message:"Server Error",error:error.message});}
    }
    

    

    export const getProductDelete= async(req,res)=>{

        try{
    
            const{id}=req.params;
            const products= await Product.findByIdAndDelete(id);
            if (!products)
            {
               return res.status(404).json({sucess:false,message:"Server Error",error:error.message});
            
            }
            res.status(200).json({sucess:true,products});}
            
    
    
        
        catch(error){
    
            res.status(500).json({sucess:false,message:"Server Error",error:error.message});}
    
        }
    