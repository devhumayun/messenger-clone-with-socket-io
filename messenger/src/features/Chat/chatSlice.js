import { createSlice } from "@reduxjs/toolkit";
import { activeChatUser } from "./chatApiSlice";

// create auth slice
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chat: [],
    chatUser: {},
    message: null,
    error: null,
    loader:false
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
    // user chat
      .addCase(activeChatUser.pending, (state) => {
        state.loader = true
      })
      .addCase(activeChatUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(activeChatUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
        state.chatUser = action.payload.chat_user
      })
  },
});

// selectors
export const getChatData = (state) => state.chat;
// actions
export const { setMessageEmpty, setLogout } = chatSlice.actions;

// export
export default chatSlice.reducer;
