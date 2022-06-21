import React from "react";
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <ul>
      <li>Nickname: {props.name}</li>
      <li>Cool Email: {props.email}</li>
    </ul>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;
