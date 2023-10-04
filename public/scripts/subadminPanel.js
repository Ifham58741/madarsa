// Add a click event listener to the "Subadmins" button
const subadminsButton = document.getElementById('subadminsButton'); // Replace with your actual button ID
subadminsButton.addEventListener('click', handleSubadminButtonClick);

// Function to handle the "Subadmins" button click event
function handleSubadminButtonClick() {
  // Replace 'subadminManagementSection' with the ID or selector for your Subadmin Management section container
  const subadminManagementSection = document.getElementById('subadminManagementSection');

  // Make an AJAX request to fetch the list of subadmins
  fetch('/api/subadmins') // Replace with your API endpoint
    .then((response) => response.json())
    .then((subadminsData) => {
      // Generate HTML to display the list of subadmins
      const subadminsTable = generateSubadminsTable(subadminsData);

      // Replace the content of the Subadmin Management section with the subadminsTable
      subadminManagementSection.innerHTML = subadminsTable;
    })
    .catch((error) => {
      console.error('Error fetching subadmins:', error);
    });
}

// Function to generate an HTML table for displaying subadmins
function generateSubadminsTable(subadminsData) {
  // Create an HTML table and populate it with subadmin data
  let tableHTML = '<table>';
  tableHTML += '<tr><th>Username</th><th>Actions</th></tr>';

  subadminsData.forEach((subadmin) => {
    tableHTML += `<tr>
                    <td>${subadmin.username}</td>
                    <td>
                      <button class="editSubadmin">Edit</button>
                      <button class="deleteSubadmin">Delete</button>
                    </td>
                  </tr>`;
  });

  tableHTML += '</table>';
  return tableHTML;
}
