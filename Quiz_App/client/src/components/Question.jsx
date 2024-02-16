import React, { useEffect } from "react";
import data from "../database/data";
function Question() {
  const options = () => {
    console.log("Radio Button");
  };
  const question = data[0];
  useEffect(() => {
    console.log(question);
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
