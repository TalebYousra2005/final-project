import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    token: {},
  },
  reducers: {
    loginUser: (state, { payload }) => {
      state.isAuth = true;
      state.token = payload;
    },
    logoutUser: (state) => {
      state.isAuth = false;
      state.token = {};
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
