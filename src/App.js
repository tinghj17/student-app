import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
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
  return (
    <main>
      <h1>Attendace</h1>
      <ClassInfo studentCount={studentData.length}/>
      {/* props are name-value pairs, like students={studentData} */}
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
