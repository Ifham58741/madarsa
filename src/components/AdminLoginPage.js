import React, { Component } from 'react';

class AdminLoginPage extends Component {
  constructor(props) {
    super(props);

    // Initialize state to store form data
    this.state = {
      username: '',
      password: '',
    };
  }

  // Handle input field changes
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (!this.state.username || !this.state.password) {
      // Display an error message or take appropriate action
      console.log('Username and password are required');
      return;
    }

    // If validation passes, perform login logic
    // You can make an API request to your server here

    // Clear the form after submission
    this.setState({ username: '', password: '' });
  };

  render() {
    return (
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AdminLoginPage;
