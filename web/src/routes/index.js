import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from '../services/history';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashBoard from '../pages/DashBoard';


export default function Routes(){

  return (
    <Router history={history}>
      <Switch>
        <Route component={SignUp} path="/" exact />
        <Route component={SignIn} path="/login" />
        <Route component={DashBoard} path="/dash" isPrivate />
      </Switch>
    </Router>
  )
}
