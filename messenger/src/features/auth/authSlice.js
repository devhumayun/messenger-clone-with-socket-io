import { createSlice } from "@reduxjs/toolkit";
import {
  activateAccountByLink,
  activateAccountByOTP,
  createUser,
  getLoggedInUser,
  loginUser,
  logoutUser,
  resentActivationCode,
  resetPasswordUi,
  resetPasswordUiAction,
  userProfilePhoto,
} from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    message: null,
    error: null,
    loader:false
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setLogout: (state) => {
      state.message = null;
      state.error = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
    // create user
      .addCase(createUser.pending, (state) => {
        state.loader = true
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
      })
    // account activation by otp
      .addCase(activateAccountByOTP.pending, (state) => {
        state.loader = true
      })
      .addCase(activateAccountByOTP.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(activateAccountByOTP.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
        state.user = action.payload.user
      })
    // account activation by link
      .addCase(activateAccountByLink.pending, (state) => {
        state.loader = true
      })
      .addCase(activateAccountByLink.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(activateAccountByLink.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
      })
    // resent activation code
      .addCase(resentActivationCode.pending, (state) => {
        state.loader = true
      })
      .addCase(resentActivationCode.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(resentActivationCode.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
      })
    // resent activation code
      .addCase(resetPasswordUi.pending, (state) => {
        state.loader = true
      })
      .addCase(resetPasswordUi.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(resetPasswordUi.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
      })
    // password reset action
      .addCase(resetPasswordUiAction.pending, (state) => {
        state.loader = true
      })
      .addCase(resetPasswordUiAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false
      })
      .addCase(resetPasswordUiAction.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.loader = false
      })
      // user login
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = action.payload.user;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      // user logout
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = null;
        localStorage.removeItem("user");
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      // user profile photo
      .addCase(userProfilePhoto.pending, (state) => {
        state.loader = true
      })
      .addCase(userProfilePhoto.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loader = false
      });
  },
});

// selectors
export const getAuthData = (state) => state.auth;
// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
