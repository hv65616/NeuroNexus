import React, { useEffect } from "react";
import Question from "./Question";
import { moveNextQuestion } from "../hooks/FetchQuestions";
import { movePrevQuestion } from "../hooks/FetchQuestions";
import { useSelector, useDispatch } from "react-redux";
function Quiz() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(state.questions.trace);
    // console.log(state.questions);
    // console.log(state.questions.queue.length);
  });
  const prevQuestion = () => {
    // console.log("Prev Buttton");
    if (state.questions.trace > 0) {
      dispatch(movePrevQuestion());
    }
  };
  const nextQuestion = () => {
    // console.log("Next button");
    if (state.questions.trace < state.questions.queue.length-1) {
      dispatch(moveNextQuestion());
    }
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Question></Question>
      <div className="grid">
        <button className="btn prev" onClick={prevQuestion}>
          Prev
        </button>
        <button className="btn next" onClick={nextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
