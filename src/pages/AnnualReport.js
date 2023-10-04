import React, { useState, useEffect } from 'react';

function AnnualReports() {
  // Define state variables to store annual report data
  const [annualReports, setAnnualReports] = useState([]);
  
  // Fetch annual report data from the server when the component mounts
  useEffect(() => {
    fetch('/api/annual-reports')
      .then((response) => response.json())
      .then((data) => setAnnualReports(data))
      .catch((error) => console.error('Error fetching annual reports:', error));
  }, []);

  return (
    <div className="annual-reports-page">
      <h1>Annual Reports</h1>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Description</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {annualReports.map((report) => (
            <tr key={report.id}>
              <td>{report.year}</td>
              <td>{report.description}</td>
              <td>
                <a href={report.downloadLink} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnnualReports;
