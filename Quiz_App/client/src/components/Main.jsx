import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
function Main() {
  const inputref = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <ol>
        <li>You will be asked 10 questions one after another</li>
        <li>10 Points will be awarded for the correct answer</li>
        <li>Each question has three options. Only one of them is correct</li>
        <li>You can review and change answers before the quiz finish</li>
        <li>The result will be declared after successful completion of quiz</li>
      </ol>
      <form id="form">
        <input ref={inputref} type="text" placeholder="Enter your name" className="userid"/>
      </form>
      <div className="start">
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Main;
