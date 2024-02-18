import { createSlice } from "@reduxjs/toolkit";
export const questionreducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamActions: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
  },
});

export const { startExamActions } = questionreducer.actions;
export default questionreducer.reducer;
