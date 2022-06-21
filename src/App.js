import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";

function App() {
  // in ordeer to modify and update studentData
  // turn studentdata into State
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isPresentData: true,
    },
  ]);

  // create a function to update studentData
  const updateStudentData = (updatedStudent) => {
    // create a helper array here with updated data
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendace</h1>
      <ClassInfo studentCount={studentData.length} />
      {/* props are name-value pairs, like students={studentData} */}
      <StudentList 
      students={studentData}
      onUpdateStudent={updateStudentData}
      ></StudentList>
    </main>
  );
}

export default App;
