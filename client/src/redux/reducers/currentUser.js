import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    statusCode: "",
    message: "",
  },
  reducers: {
    addCurrentUser: (state, { payload }) => {
      state.statusCode = payload.statusCode;
      state.message = payload.message;
    },
    removeCurrentUser: (state) => {
      state.statusCode = "";
      state.message = "";
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;