import React, { useState } from 'react';

function AdminAuth() {
  // State variables to manage user credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Rest of your component code...

  return (
    <div>
      {/* Your authentication form */}
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Other form fields and submit button */}
      </form>
    </div>
  );
}
import React, { useState } from 'react';

function AdminAuth() {
  // State variables to manage user credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here, you can perform authentication logic
    // For example, sending a request to your server for authentication
    // If authentication is successful, you can redirect or perform further actions
    // If authentication fails, you can display an error message
  };

  return (
    <div>
      {/* Authentication form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
import React, { useState } from 'react';

function AdminAuth() {
  // State variables to manage user credentials and validation errors
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize errors object
    const validationErrors = {};

    // Validate username
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }

    // Validate password
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    // Check if there are validation errors
    if (Object.keys(validationErrors).length === 0) {
      // If no errors, you can proceed with authentication logic here

      // Reset form fields
      setUsername('');
      setPassword('');
      setErrors({});
    } else {
      // If there are errors, update the state with the validation errors
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      {/* Authentication form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {/* Display validation error if any */}
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Display validation error if any */}
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}




export default AdminAuth;



