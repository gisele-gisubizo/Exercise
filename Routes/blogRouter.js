import express from "express"
import upload from "../middleware/multer.js";
import {CreateBlog,getAllBlog,getAllBlogById,getBlogDeleteById,updateBlogById} from "../controllers/blogController.js"
// import { admin } from "../middleware/roleIdentification.js";
// import {auth} from "../middleware/tokenVerification.js"
const blogRouter = express.Router();


blogRouter.post('/createBlog', upload.single('photo'),CreateBlog);
blogRouter.get('/getAllBlog',getAllBlog);
blogRouter.get("/getAllBlogById/:id",getAllBlogById);
blogRouter.delete("/getBlogDeleteById/:id",getBlogDeleteById);
blogRouter.put("/updateBlogById/:id",updateBlogById);







export default blogRouter;