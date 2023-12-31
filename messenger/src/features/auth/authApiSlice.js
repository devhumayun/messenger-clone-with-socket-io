import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/register",
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// account activation by otp
export const activateAccountByOTP = createAsyncThunk("auth/activateAccountByOTP", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/activation-by-otp/${data.token}`,
      {otp: data.otp},
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// account activation by link
export const activateAccountByLink = createAsyncThunk("auth/activateAccountByLink", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/activation-by-link/${data}`,
      {otp: data.otp},
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/login",
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    const response = await axios.post(
      "http://localhost:5050/api/v1/auth/logout",
      "",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// Login user
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/auth/me", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// resent activation code
export const resentActivationCode = createAsyncThunk("auth/resentActivationCode", async (auth) => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/auth/resent-activation/${auth}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// reset password
export const resetPasswordUi = createAsyncThunk("auth/resetPasswordUi", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/reset-password`,data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// reset password action
export const resetPasswordUiAction = createAsyncThunk("auth/resetPasswordUiAction", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/reset-password-action/${data.token}`,data.input,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// user profile photo change
export const userProfilePhoto = createAsyncThunk("auth/userProfilePhoto", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/profile-photo-upload/${data.id}`,data.data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

