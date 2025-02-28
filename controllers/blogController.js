import Blog from "../model/blogModel.js";
import cloudinary from "../utils/cloudinary.js";

export const CreateBlog=async(req, res) =>{
    
    try{
        console.log("CreateBlogger controller reached");
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log("File received:", req.file);

        const{BlogName,BlogTitle,BlogEmail, BlogDescription,status}=req.body;
        const newBlog=new Blog({BlogName,BlogTitle,BlogEmail, BlogDescription,productImage: result.secure_url , status});

        await newBlog.save();
        res.status(201).json({success:true, message:"Blog created successfully"})
    }catch(error){
        res.status(500).json({error: false, message:"Server error", error:error.message});

    }
}


export const getAllBlog=async(req,res)=>{

    try{
    const blogs= await Blog.find();
    res.status(200).json({success:true,blogs})
    }catch(error)
    {
        res.status(500).json({sucess:false,message:"Server Error",error:error.message});
    }

}


export const getAllBlogById= async(req,res)=>{
    try{const{id}=req.params;
    const blogs= await Blog.findById(id);
    if (!blogs)
    {
       return res.status(404).json({sucess:false,message:"Server Error",error:error.message});
    
    }
    res.status(200).json({sucess:true,blogs});}
    
    catch(error){
    
        res.status(500).json({sucess:false,message:"Server Error",error:error.message});}
    }
    

    

    export const getBlogDeleteById= async(req,res)=>{

        try{
    
            const{id}=req.params;
            const blogs= await Blog.findByIdAndDelete(id);
            if (!blogs)
            {
               return res.status(404).json({sucess:false,message:"Server Error",error:error.message});
            
            }
            res.status(200).json({sucess:true,blogs});}
            
    
    
        
        catch(error){
    
            res.status(500).json({sucess:false,message:"Server Error",error:error.message});}
    
        }
    

        export const updateBlogById = async (req, res) => {
            try{
        
                const {id} = req.params;
        
                const blogs= await Blog.findByIdAndUpdate(id, req.body);
                if(!blogs){
                    return res.status(404).json({ success: false, message: "Blog not found" });
                }
                res.status(200).json({ success: true, message: "Blog updated successfully", blogs });
        
            }catch(error){
                res.status(500).json({ success: false, message: "Server error", error: error.message });
            }
        }