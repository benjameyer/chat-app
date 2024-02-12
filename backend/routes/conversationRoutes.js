import express from "express";
import { conversationController } from "../controllers/conversationController.js"
import userLogged from "../middlewares/userLogged.js";

const router = express.Router();

router.get("/", userLogged, conversationController.getConversations);

export default router;