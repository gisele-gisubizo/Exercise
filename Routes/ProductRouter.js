import express from "express"
import upload from "../middleware/multer.js";
import {CreateProduct,getAllProduct,getAllProductById,getProductDelete, updateProductById} from "../controllers/ProductController.js"
const productRouter = express.Router();


productRouter.post('/createProduct', upload.single('image'), CreateProduct);
productRouter.get('/getAllProduct',getAllProduct);
productRouter.get("/getAllProductById/:id",getAllProductById);
productRouter.delete("/getProductDelete/:id",getProductDelete);







export default productRouter;