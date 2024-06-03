import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RequireAuth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('isAuthenticated') === 'true' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RequireAuth;
