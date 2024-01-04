import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import { createChat, getActiveChatUser, getUserChats } from "../controllers/chatController.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route

router.route("/:id").get(tokenVerify ,getActiveChatUser)
router.route("/message/:id").get(tokenVerify ,getUserChats)
router.route("/").post(tokenVerify ,createChat)


// export default router
export default router;
