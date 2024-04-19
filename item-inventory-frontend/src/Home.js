import React from 'react';

function Home() {

  const handleLogout = () => {

  }


  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;