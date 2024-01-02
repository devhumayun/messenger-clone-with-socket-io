import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Chat from "../models/Chat.js";

/**
 * @DESC Get active chat user
 * @ROUTE /api/v1/chat
 * @method GET
 */
export const getActiveChatUser = asyncHandler(async (req, res) => {

    const id = req.params.id
   
  const chat_user = await User.findById(id)
  if (chat_user) {
      res.status(200).json({chat_user});
    }
});

/**
 * @DESC create new chat data
 * @ROUTE /api/v1/chat
 * @method POST
 */
export const createChat = asyncHandler(async (req, res) => {

   const { chat, receiverId } = req.body
   const senderId = req.me._id

   const chatMsg = await Chat.create({
    message: {
        text : chat
    },
    receiverId,
    senderId
   })
   console.log(chatMsg);
});