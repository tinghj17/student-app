import React from "react";
import "./StudentList.css";
import Student from "./Student";

const StudentList = () => {
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
  const studentData = [
    {
      nameData: "Ada",
      emailData: "ada@dev.org",
    },
    {
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
    },
    {
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
    },
  ];

  const studentComponents = studentData.map((student) => {
    return (
      <li>
        <Student name={student.nameData} email={student.emailData}></Student>
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
