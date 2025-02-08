import { getMessages } from "../controllers/messagesController.js";
import {verifyToken} from "../middleware/AuthMiddleware.js"
import { Router } from "express";

const messagesRoutes = Router();


messagesRoutes.post("/get-messages",verifyToken,getMessages);


export default messagesRoutes;