import { createSlice } from "@reduxjs/toolkit";
export const resultreducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setuserid: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

export const { setuserid, pushResultAction } = resultreducer.actions;
export default resultreducer.reducer;
