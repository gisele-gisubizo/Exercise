import { createContact,getAllContact, getAllContactById, getAllContactDelete,updateContactById} from "../controllers/ContactController.js";
import express from "express";
import {admin} from "../middleware/roleIdentification.js";
import {auth} from "../middleware/tokenVerification.js"

const contactRouter = express.Router();


contactRouter.post("/createContact",createContact);
contactRouter.get("/getAllContact",auth,admin,getAllContact);
contactRouter.get("/getAllContactById/:id",admin,auth,getAllContactById);
contactRouter.delete("/getAllContactDelete/:id",admin,auth,getAllContactDelete);
contactRouter.put("/updateContactById/:id",admin,auth,updateContactById);

export default contactRouter;