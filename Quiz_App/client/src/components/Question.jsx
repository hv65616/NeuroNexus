import React, { useEffect, useState } from "react";
import data from "../database/data";
import { useFetchquestions } from "../hooks/FetchQuestions";
function Question() {
  const [checked, setChecked] = useState(undefined);
  const [{ Loading, apiData, serverError }] = useFetchquestions();
  const question = data[0];
  const options = () => {
    // console.log("Radio Button");
  };
  useEffect(() => {
    // console.log(question);
    // console.log(Loading);
    // console.log(apiData);
    // console.log(serverError);
  });
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${i}-option`}
              onChange={options()}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            <div className="check checked"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
