import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// get all user
export const getUsers = createAsyncThunk("auth/getUsers", async () => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/user`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});