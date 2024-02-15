import React from "react";

function Question() {
  const options = () => {
    console.log("Radio Button");
  };
  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 11</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={true}
            name="options"
            id="q1-option"
            onChange={options()}
          />
          <label htmlFor="q1-option" className="text-primary">
            Option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
}

export default Question;
