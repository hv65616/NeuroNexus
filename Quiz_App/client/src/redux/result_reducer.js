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
    updateResultActions: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace,trace+1);
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setuserid,
  pushResultAction,
  resetResultAction,
  updateResultActions,
} = resultreducer.actions;
export default resultreducer.reducer;
