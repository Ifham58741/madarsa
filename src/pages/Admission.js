import React, { useState } from 'react';

function Admission() {
  // Define state variables to manage form inputs
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('male');
  const [address, setAddress] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [currentCourses, setCurrentCourses] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [photo, setPhoto] = useState(null);
  const [transcript, setTranscript] = useState(null);

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform form validation and submission logic here
    // For this example, we'll just log the form data to the console
    console.log({
      fullName,
      dateOfBirth,
      gender,
      address,
      gradeLevel,
      currentCourses,
      paymentAmount,
      paymentMethod,
      photo,
      transcript,
    });
  };

  return (
    <div className="admission-page">
      <h1>Admission Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Academic Information Section */}
        <h2>Academic Information</h2>
        <div className="form-group">
          <label htmlFor="gradeLevel">Grade Level:</label>
          <input
            type="text"
            id="gradeLevel"
            name="gradeLevel"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentCourses">Current Courses:</label>
          <input
            type="text"
            id="currentCourses"
            name="currentCourses"
            value={currentCourses}
            onChange={(e) => setCurrentCourses(e.target.value)}
            required
          />
        </div>

        {/* Payment Information Section */}
        <h2>Payment Information</h2>
        <div className="form-group">
          <label htmlFor="paymentAmount">Payment Amount:</label>
          <input
            type="number"
            id="paymentAmount"
            name="paymentAmount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
            <option value="cash">Cash</option>
          </select>
        </div>

        {/* Upload Documents Section */}
        <h2>Upload Documents</h2>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transcript">Academic Transcript:</label>
          <input
            type="file"
            id="transcript"
            name="transcript"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setTranscript(e.target.files[0])}
            required
          />
        </div>

        {/* Buttons for Preview and Submit */}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
        <div className="form-group">
          <button type="button" id="previewButton">Preview</button>
        </div>
      </form>
    </div>
  );
}

export default Admission;
