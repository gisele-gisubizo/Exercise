import { createContact,getAllContact, getAllContactById, getAllContactDelete} from "../controllers/ContactController.js";
import express from "express";

const contactRouter = express.Router();


contactRouter.post("/createContact",createContact);
contactRouter.get("/getAllContact",getAllContact);
contactRouter.get("/getAllContactById/:id",getAllContactById);
contactRouter.delete("/getAllContactDelete/:id",getAllContactDelete);
export default contactRouter;