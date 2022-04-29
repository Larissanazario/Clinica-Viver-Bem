import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import Providers from '../pages/Providers';
import ProvidersAvailability from '../pages/ProvidersAvailability';
import Profile from '../pages/Profile';
import Appointments from '../pages/Appointments';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route exact path="/dashboard" component={Dashboard} isPrivate />
    <Route exact path="/appointments" component={Appointments} isPrivate />
    <Route path="/providers" exact component={Providers} isPrivate />
    <Route
      path="/providers/:id/availability"
      component={ProvidersAvailability}
      isPrivate
    />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
