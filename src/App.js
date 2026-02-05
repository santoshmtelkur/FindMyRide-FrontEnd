import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:8080/employees");
      const data = await res.json();
     // console.log(data); // debug
      setStudents(data);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
          <h2>Welcome</h2>
      <button onClick={fetchStudents}>
        Fetch Student List
      </button>

      {students.map((s, i) => (
        <p key={i}>
          USN: {s.usn} | Name: {s.name}
        </p>
      ))}
    </div>
  );
}

export default App;
