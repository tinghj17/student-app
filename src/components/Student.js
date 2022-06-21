import React from "react";
import PropTypes from "prop-types";
import "./Student.css";
// step 1: import
import { useState } from "react";

const Student = (props) => {
  // step 1
  const [isPresent, setIsPresent] = useState(false);
  // step 3: create the event handler 
  const togglePresence = () => {
    setIsPresent(!isPresent);
  }
  // step 5: use css to change color
  const nameColor = isPresent ? 'green':'red';

  return (
    <section>
      <ul>
        {/* step 5 adopt it */}
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Cool Email: {props.email}</li>
      </ul>
      {/* step 2 */}
      {/* step 4: attach the event handler to the button */}
      <button onClick={togglePresence}> Toggle if {props.name} is present </button>
    </section>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;
