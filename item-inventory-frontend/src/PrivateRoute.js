import React from 'react';
import { Route, Link } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = true; // Check if user is authenticated
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated ? <Component {...props} /> : <Link to="/login" />}
    />
  );
}

export default PrivateRoute;