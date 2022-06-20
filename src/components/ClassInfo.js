import React from "react";

const ClassInfo = () => {
  return (
    // in order to return only one JSX object
    // must wrap multiple elements into one parent element, like <section>
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: 30</li>
      </ul>
    </section>
  );
};

export default ClassInfo;
