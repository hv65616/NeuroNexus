import React, { useEffect, useState } from "react";
import Question from "./Question";
import { moveNextQuestion } from "../hooks/FetchQuestions";
import { movePrevQuestion } from "../hooks/FetchQuestions";
import { useSelector, useDispatch } from "react-redux";
import { pushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";
function Quiz() {
  const [checked, setChecked] = useState(undefined);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(state.questions.trace);
    // console.log(state.questions);
    // console.log(state.questions.queue.length);
    // console.log(state);
    // console.log(state.result.result);
    // console.log(state.questions.queue.length);
    // console.log(state.result.result.length);
  });
  const prevQuestion = () => {
    // console.log("Prev Buttton");
    if (state.questions.trace > 0) {
      dispatch(movePrevQuestion());
    }
  };
  const nextQuestion = () => {
    // console.log("Next button");
    if (state.questions.trace < state.questions.queue.length) {
      dispatch(moveNextQuestion());
      if (state.result.result.length <= state.questions.trace) {
        dispatch(pushAnswer(checked));
      }
    }
  };
  const onchecked = (checked) => {
    // console.log(checked);
    setChecked(checked);
  };

  if (
    state.result.result.length &&
    state.result.result.length >= state.questions.queue.length
  ) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Question onchecked={onchecked}></Question>
      <div className="grid">
        {state.questions.trace > 0 ? (
          <button className="btn prev" onClick={prevQuestion}>
            Prev
          </button>
        ) : (
          <div></div>
        )}

        <button className="btn next" onClick={nextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
