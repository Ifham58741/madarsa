import React, { useState, useEffect } from 'react';

function StudentInformation() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student information from the server using AJAX or API calls here
    // Example API call using fetch:
    fetch('/api/students')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="student-information-page">
      <h1>Student Information</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{student.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentInformation;
