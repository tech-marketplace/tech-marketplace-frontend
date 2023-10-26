import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";

const initialState = {
  // token: JSON.parse(localStorage.getItem("token")),
  token: localStorage.getItem("token"),
  firstName: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: "false",
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/auth/signup`, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      const tokeen = response.data.user.token; // Correctly access the token
      localStorage.setItem("token", tokeen);

      console.log(tokeen);

      return tokeen;
      // localStorage.setItem("token", token.data);
      // // const tokeen = token.data; // Assuming response includes a 'token' property
      // console.log(token.data);

      // // localStorage.setItem("token", JSON.stringify(tokeen)); // Convert to JSON string
      // // localStorage.setItem("token", tokeen.token);

      // return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${url}/auth/signup`, {
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         password: user.password,
//       });
//       const token = response.data.token; // Assuming the token is returned in the response data
//       localStorage.setItem("token", token);
//       return token;
//     } catch (err) {
//       console.error(err); // Log the entire error for further inspection
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/auth/login`, {
        email: user.email,
        password: user.password,
      });
      const tokeen = response.data.user.token;
      localStorage.setItem("token", tokeen);

      // localStorage.setItem("token", JSON.stringify(token.data));
      // const tokeen = token.data; // Assuming response includes a 'token' property
      // localStorage.setItem("token", JSON.stringify(tokeen)); // Convert to JSON string
      return tokeen;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        console.log(user);
        return {
          ...state,
          token: action.payload,
          firstName: user.firstName,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        firstName: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: "false",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          firstName: user.firstName,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          firstName: user.firstName,
          email: user.email,
          _id: user._id,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
