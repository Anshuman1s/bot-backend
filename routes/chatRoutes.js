import express from "express";
import { chatHandler } from "../Controllers/ChatController.js";

const router = express.Router();
router.post("/", chatHandler);
export default router;