// import React, { useEffect } from "react";
import "../styles/Result.css";
import { Link } from "react-router-dom";
import ResultTable from "../components/ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import {
  attemptsNumber,
  earnPointsNumber,
  checkresult,
} from "../helper/helper";
import { usePublishResult } from "../hooks/setResult";
function Result() {
  const {
    questions: { answers, queue },
    result: { result, userId },
  } = useSelector((state) => state);
  // useEffect(() => {
  //   console.log(earnPoints);
  //   console.log(flag);
  // });
  const totalPoints = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earnPoints = earnPointsNumber(result, answers);
  const flag = checkresult(totalPoints, earnPoints);
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });
  // console.log({
  //   result,
  //   username: userId,
  //   attempts,
  //   points: earnPoints,
  //   achived: flag ? "Passed" : "Failed",
  // });
  const dispatch = useDispatch();
  const onrestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
    console.log("Restart");
  };
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">{userId}</span>
        </div>
        <div className="flex">
          <span>Total Quiz Point</span>
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points</span>
          <span className="bold">{earnPoints || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span style={{ color: `${flag ? "green" : "red"}` }} className="bold">
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>
      <div className="start">
        <Link className="btn" to={"/"} onClick={onrestart}>
          Restart
        </Link>
      </div>
      <div className="container">
        <ResultTable></ResultTable>
      </div>
    </div>
  );
}

export default Result;
