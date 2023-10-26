import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

const initialState = {
  items: [],
  status: null,
  // error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(`${url}/item/get-items`);
    // const response = await axios.get("http://localhost:3001/item/get-items");
    return response?.data;
  }
  // async (id = null, { rejectWithValue }) => {
  //   try {
  //     const response = await axios.get("http://localhost:3001/item/get-items");
  //     return response?.data;
  //   } catch (error) {
  //     return rejectWithValue("an error occured");
  //     // return rejectWithValue(error.response.data);
  //   }
  // }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      // state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
