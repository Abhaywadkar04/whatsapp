import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import { getContactsForDMList, SearchContacts,getAllContacts } from "../controllers/ContactsController.js";


const contactsRoutes = Router();

contactsRoutes.post("/search",verifyToken,SearchContacts);
contactsRoutes.get("/get-contacts-for-dm",verifyToken,getContactsForDMList);
contactsRoutes.get("/get-all-contacts",verifyToken,getAllContacts);



export default contactsRoutes