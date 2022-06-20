import React from "react";

const ClassInfo = (props) => {
  return (
    // in order to return only one JSX object
    // must wrap multiple elements into one parent element, like <section>
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {props.studentCount}</li>
      </ul>
    </section>
  );
};

export default ClassInfo;
