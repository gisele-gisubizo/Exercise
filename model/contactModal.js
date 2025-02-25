import mongoose, { mongo } from "mongoose";
const {model,Schema}=mongoose;

const ContactSchema=new Schema(
    
    {names:{
        type:String,
        required:true
    },
   email: {
        type:String,
        required:true
    },
    subject:{

        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    }

},

{
timestamps:true

}

)

const Contact=model("Contact",ContactSchema)
export default Contact;