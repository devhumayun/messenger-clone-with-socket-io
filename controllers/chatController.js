import asyncHandler from "express-async-handler";
import User from "../models/User.js";

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