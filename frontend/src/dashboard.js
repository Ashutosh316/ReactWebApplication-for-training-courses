import React, { useEffect } from 'react';
import Logout from './logout'; // Import the Logout component

function Dashboard() {
  useEffect(() => {
    console.log('Dashboard component mounted');
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Check if token is retrieved
  
    if (!token) {
      window.location.href = "/login"; // Redirect to login page
    }
  }, []);

  return (
    <div>
      <h1 className='text-center bg-secondary text-white'>Welcome to the Dashboard</h1>
      <Logout />
    </div>
  );
}

export default Dashboard;
