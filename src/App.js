import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  return (
    <main>
      <h1>Attendace</h1>
      <ClassInfo/>
      <StudentList></StudentList>
    </main>
  );
}

export default App;
