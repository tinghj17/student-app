import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";

function App() {
  return (
    <main>
      <h1>Attendace</h1>
      <StudentList></StudentList>
      <ClassInfo/>
    </main>
  );
}

export default App;
