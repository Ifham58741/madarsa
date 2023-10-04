document.addEventListener('DOMContentLoaded', function () {
    const admissionForm = document.querySelector('form');
  
    admissionForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Perform form validation here
      const fullName = document.getElementById('fullName').value.trim();
      const dateOfBirth = document.getElementById('dateOfBirth').value.trim();
      const gender = document.getElementById('gender').value.trim();
      const address = document.getElementById('address').value.trim();
      const gradeLevel = document.getElementById('gradeLevel').value.trim();
      const currentCourses = document.getElementById('currentCourses').value.trim();
      const paymentAmount = document.getElementById('paymentAmount').value.trim();
      const paymentMethod = document.getElementById('paymentMethod').value.trim();
  
      if (!fullName || !dateOfBirth || !gender || !address || !gradeLevel || !currentCourses || !paymentAmount || !paymentMethod) {
        alert('Please fill in all fields.');
        return;
      }
  
      // You can perform more advanced form validation here if needed.
  
      // If the form is valid, you can submit it to the server.
      admissionForm.submit();
    });
  
    // Optional: Add event listeners or other functionality as needed.
  });
  