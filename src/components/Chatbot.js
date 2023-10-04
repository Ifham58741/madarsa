import React, { Component } from 'react';

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      userInput: '',
    };
  }

  // Function to handle user input
  handleUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  // Function to send a message
  sendMessage = () => {
    const { userInput, messages } = this.state;

    // Check if the user input is not empty
    if (userInput.trim() === '') {
      return;
    }

    // Add the user's message to the chat
    const newMessages = [...messages, { text: userInput, type: 'user' }];
    this.setState({ messages: newMessages, userInput: '' });

    // Perform chatbot logic here
    // You can send the user's message to a server for processing
    // and receive a response to display in the chat

    // For now, let's simulate a simple chatbot response
    setTimeout(() => {
      const botResponse = 'Hello! I am the chatbot. How can I assist you?';
      const updatedMessages = [...newMessages, { text: botResponse, type: 'bot' }];
      this.setState({ messages: updatedMessages });
    }, 1000);
  };

  render() {
    const { messages, userInput } = this.state;

    return (
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={this.handleUserInput}
          />
          <button onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chatbot;
