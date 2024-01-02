import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get active chat user
export const activeChatUser = createAsyncThunk("chat/activeChatUser", async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/chat/${id}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// create new chat
export const createChatMsg = createAsyncThunk("chat/createChatMsg", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/chat/`,data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
