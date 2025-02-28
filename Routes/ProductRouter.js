import express from "express"
import upload from "../middleware/multer.js";
import {CreateProduct,getAllProduct,getAllProductById,getProductDelete, updateProductById} from "../controllers/ProductController.js"
import { admin } from "../middleware/roleIdentification.js";
import {auth} from "../middleware/tokenVerification.js"
const productRouter = express.Router();


productRouter.post('/createProduct', upload.single('image'),CreateProduct);
productRouter.get('/getAllProduct',getAllProduct);
productRouter.get("/getAllProductById/:id",getAllProductById);
productRouter.delete("/getProductDelete/:id",getProductDelete);
productRouter.put("/updateProductById/:id",updateProductById);







export default productRouter;