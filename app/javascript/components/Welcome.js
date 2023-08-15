import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Welcome = () => {
  const [greeting, setGreeting] = useState('');

  const fetchGreeting = async () => {
    axios
      .get('/api/v1/greetings')
      .then((response) => {
        const greetingData = response.data;
        setGreeting(greetingData.greeting);
      })
      .catch((error) => {
        console.error('Error fetching greeting:', error);
      });
  };

  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <main>
      <h1>{greeting}</h1>
      <button onClick={fetchGreeting}>New Greeting</button>
    </main>
  );
};

export default Welcome;
