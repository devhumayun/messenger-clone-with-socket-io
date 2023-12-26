import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./userApiSlice";

// create auth slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.user = action.payload.users
      });
  },
});

// selectors
export const getUsersData = (state) => state.user;
// actions
export const { setMessageEmpty } = userSlice.actions;

// export
export default userSlice.reducer;
