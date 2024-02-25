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
      let {question,answers} = action.payload;
      return {
        ...state,
        queue: question,
        answers: answers,
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
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export const { startExamActions, moveNextAction, movePrevAction, resetAllAction} =
  questionreducer.actions;
export default questionreducer.reducer;
