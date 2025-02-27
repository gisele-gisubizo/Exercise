import mongoose from "mongoose";
const {model, Schema} = mongoose

// Define the schema for the User model
const blogSchema = new Schema({

BlogName:{
        type:String,
        required:true
    },
   BlogTitle:{
        type:String,
        required:true
    },

  BlogEmail:{
        type:String,
       required:true
    },
   BlogDescription:{
        type:String,
        required:true
    }
})
const Blog= model("blog", blogSchema);
export default Blog;