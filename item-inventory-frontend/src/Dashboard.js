import React from 'react';

function Dashboard() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Clear user details from localStorage
    window.location.href = '/'; // Redirect to login page or another appropriate page
  };

  return (
    <div>
      <div style={{ float: 'right', marginRight: '20px' }}>
        {loggedInUser && (
          <div>
            Logged in User: {loggedInUser.name}
            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
          </div>
        )}
      </div>
      <h2>Dashboard: {loggedInUser}</h2>
      {/* Add dashboard content here */}
    </div>
  );
}

export default Dashboard;