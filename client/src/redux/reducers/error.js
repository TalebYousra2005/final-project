import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    statusCode: "",
    message: "",
  },
  reducers: {
    errorHappend: (state, { payload }) => {
      state.statusCode = payload.statusCode;
      state.message = payload.message;
    },
    emptyError: (state) => {
      state.statusCode = "";
      state.message = "";
    },
  },
});

export const { errorHappend, emptyError } = errorSlice.actions;
export default errorSlice.reducer;
