import React from "react";
import "./StudentList.css";
import Student from "./Student";

const StudentList = (props) => {
  //[
  //   <li>
  //     <Student name="Ada" email="ada@dev.org"></Student>
  //   </li>,
  //   <li>
  //     <Student name="Soo-ah" email="sooah@dev.org"></Student>
  //   </li>,
  //   <li>
  //     <Student name="Chrissy" email="chrissy@dev.org"></Student>
  //   </li>,
  // ];

  const studentComponents = props.students.map((student, index) => {
    return (
      <li key={index}>
        <Student 
        name={student.nameData} 
        email={student.emailData}
        >
        </Student>
      </li>
    );
  });

  return (
    <section>
      <h2>Student List</h2>
      <ul>{studentComponents}</ul>
    </section>
  );
};

export default StudentList;
