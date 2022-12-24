import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    addCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { addCurrentUser, removeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
