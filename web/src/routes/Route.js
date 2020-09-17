import React from 'react';
import { Route as Router, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

// Authenticated route
function Route({ component : Component, isPrivate, ...rest }) {
  const { state }  = useAuth();
  const expired = Date.now()/1000 > Number(state.exp);

  if((isPrivate && !state.isAuthenticated)) {
    return <Redirect to="/login" />;
  }

  // Is private but the token already expired
  if(isPrivate && expired) {
    return <Redirect to="/login"/>;
  }

  if(!isPrivate && state.isAuthenticated) {
    return <Redirect to="/dash" />;
  }

  return (
    <Router
      {...rest}
      render={(props) =>  <Component {...props} />
      }
    />
  );
}

export default Route;
