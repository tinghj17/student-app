import React from "react";
import "./StudentList.css";
import Student from "./Student";
import PropTypes from "prop-types";

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

  const studentComponents = props.students.map((student) => {
    return (
      <li key={student.id}>
        <Student
          id={student.id}
          name={student.nameData}
          email={student.emailData}
          isPresent={student.isPresentData}
          onUpdate={props.onUpdateStudent}
        ></Student>
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

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nameData: PropTypes.string.isRequired,
      emailData: PropTypes.string.isRequired,
      isPresentData: PropTypes.bool,
    })
  ),
  onUpdateStudent: PropTypes.func.isRequired,
};
export default StudentList;
