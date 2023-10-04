import React from 'react';

function ProgramsAndFees() {
  return (
    <div className="programs-and-fees-page">
      <h1>Programs and Fees</h1>
      <section className="program-section">
        <h2>Programs</h2>
        <ul>
          <li>Program 1: Description of Program 1</li>
          <li>Program 2: Description of Program 2</li>
          <li>Program 3: Description of Program 3</li>
          {/* Add more programs as needed */}
        </ul>
      </section>
      <section className="fees-section">
        <h2>Fees Structure</h2>
        <table>
          <thead>
            <tr>
              <th>Grade Level</th>
              <th>Tuition Fee</th>
              <th>Books Fee</th>
              <th>Total Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Grade 1</td>
              <td>$500</td>
              <td>$100</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Grade 2</td>
              <td>$550</td>
              <td>$110</td>
              <td>$660</td>
            </tr>
            {/* Add more grade levels and fees as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default ProgramsAndFees;
