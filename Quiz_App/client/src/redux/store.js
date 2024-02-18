import { configureStore, combineReducers } from "@reduxjs/toolkit";
// call reducers
import questionreducer from "./question_reducer";
import resultreducer from "./result_reducer";

const rootReducer = combineReducers({
  questions: questionreducer,
  result: resultreducer,
});

// create store with reducer
export default configureStore({ reducer: rootReducer });
