import React, { useState, useEffect } from 'react';
import Internships from '../Main/Internships';

function Home() {
  // Create state to store email and password
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    // Retrieve values from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Update state with retrieved values
    setCredentials({
      email: storedEmail || '',
      password: storedPassword || '',
    });
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Email: {credentials.email}</p>
      <p>Password: {credentials.password}</p>
      {/* Render other components or content */}
      <Internships />
    </div>
  );
}

export default Home;
