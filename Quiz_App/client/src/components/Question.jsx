import React, { useEffect, useState } from "react";
import data from "../database/data";
import { useFetchquestions } from "../hooks/FetchQuestions";
import { useSelector } from "react-redux";
function Question({ onchecked }) {
  const [checked, setChecked] = useState(undefined);
  const [{ Loading, apiData, serverError }] = useFetchquestions();
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const question = data[0];
  const options = (i) => {
    // console.log("Radio Button");
    // console.log(i);
    onchecked(i);
  };
  useEffect(() => {
    // console.log(questions);
    // console.log(Loading);
    // console.log(apiData);
    // console.log(serverError);
  });
  if (Loading) return <h3 className="text-light">IsLoading</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown Error"}</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={() => {
                options(i);
              }}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
