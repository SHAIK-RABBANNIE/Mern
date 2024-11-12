// Logout.js
import React, { useEffect } from 'react';
import './Logout.css'; // Importing the CSS file
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or session data here
    localStorage.removeItem('authToken'); // Example: Clear token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  // Optional: Automatically redirect after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Redirect after 5 seconds
    }, 5000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="logout-container">
      <h2>You have successfully logged out!</h2>
      <p>You will be redirected to the login page shortly...</p>
      <button className="logout-button" onClick={handleLogout}>
        Login Again
      </button>
    </div>
  );
};

export default Logout;
