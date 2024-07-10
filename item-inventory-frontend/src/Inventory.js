import React from 'react';

function Inventory() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div>
      <h2>Inventory</h2>
      {loggedInUser && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
          Logged in User: {loggedInUser.name}
        </div>
      )}
      {/* Add inventory content here */}
    </div>
  );
}

export default Inventory;