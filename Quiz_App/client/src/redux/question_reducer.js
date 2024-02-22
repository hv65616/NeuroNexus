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
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
  },
});

export const { startExamActions, moveNextAction,movePrevAction } = questionreducer.actions;
export default questionreducer.reducer;
