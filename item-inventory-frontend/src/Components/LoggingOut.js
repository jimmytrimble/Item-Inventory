import React from 'react';

const LoggingOut = ({ setToken }) => {
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LoggingOut;