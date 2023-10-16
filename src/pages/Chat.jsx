import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Automatically fetch messages every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add an event listener to receive messages from the server
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Clean up the event listener on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && message) {
      // Send a POST request to your backend to save the message
      fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message, sender: name }),
      });

      setName('');
      setMessage('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          value={message}
          placeholder="Your message"
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.sender}: {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
