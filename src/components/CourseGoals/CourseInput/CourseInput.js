import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // Set a red background color if the user entered something invalid
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    };
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Make sure the input is not emtpy, if it is, then return nothing
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      
      <div className={`form-control ${!isValid ? 'invalid': ''}`}>
        {/* Dynamic Change the label */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{ borderColor: !isValid ? "red" : "black",
          background: !isValid ? "salmon" : "transparent" }}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
