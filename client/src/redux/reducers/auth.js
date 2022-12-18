import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    token: null,
  },
  reducers: {
    signinUser: (state, { payload }) => {
      state.isAuth = true;
      state.token = payload;
    },
    signupUser: (state, { payload }) => {
      state.isAuth = false;
      state.token = {};
    },
    signoutUser: (state) => {
      state.isAuth = false;
      state.token = {};
    },
  },
});

export const { signinUser, signoutUser, signupUser } = authSlice.actions;
export default authSlice.reducer;
