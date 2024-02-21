import React, { useEffect } from "react";
import Question from "./Question";
import { useSelector } from "react-redux";
function Quiz() {
  const state = useSelector((state) => state);
  useEffect(() => {
    // console.log(state);
  });
  const prevQuestion = () => {
    // console.log("Prev Buttton");
  };
  const nextQuestion = () => {
    // console.log("Next button");
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
