// Define a function to make GET requests
export async function get(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  }
  
  // Define a function to make POST requests
  export async function post(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error(`POST request failed: ${error.message}`);
    }
  }
  
  // Define other HTTP request methods as needed (e.g., PUT, DELETE)
  
  // Usage example:
  // import { get, post } from './ajaxHelpers';
  
  // const data = { username: 'example', password: 'password' };
  // post('/api/login', data)
  //   .then(response => {
  //     // Handle the response data here
  //   })
  //   .catch(error => {
  //     // Handle errors
  //   });
  
  