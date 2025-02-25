import Contact from "../model/contactModal.js";

export const createContact=async(req,res)=>{
 
    try{
     
        const{names,email,subject,message}=req.body
    const newContact=new Contact({names,email,subject,message})

    await newContact.save();

    res.status(201).json({sucess:true,message:"Contact created successfully"});
    }catch(error){
        res.status(500).json({sucess:false,message:"Server Error",error:error.message});

    }


}

export const getAllContact=async(req,res)=>{

    try{
    const contacts= await Contact.find();
    res.status(200).json({success:true,contacts})
    }catch(error)
    {
        res.status(500).json({sucess:false,message:"Server Error",error:error.message});
    }

}

export const getAllContactById= async(req,res)=>{
try{const{id}=req.params;
const contacts= await Contact.findById(id);
if (!contacts)
{
   return res.status(404).json({sucess:false,message:"Server Error",error:error.message});

}
res.status(200).json({sucess:true,contacts});}

catch(error){

    res.status(500).json({sucess:false,message:"Server Error",error:error.message});}
}


export const getAllContactDelete= async(req,res)=>{

    try{

        const{id}=req.params;
        const contacts= await Contact.findById(id);
        if (!contacts)
        {
           return res.status(404).json({sucess:false,message:"Server Error",error:error.message});
        
        }
        res.status(200).json({sucess:true,contacts});}
        


    
    catch(error){

        res.status(500).json({sucess:false,message:"Server Error",error:error.message});}

    }
