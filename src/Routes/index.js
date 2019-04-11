import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../Components/Landing/LandingPage';

const localStorage = require('localStorage');

const Routes = () => (
  <Switch>
    <Route exact path="/" render={()=><LandingPage localStorage={localStorage} />} />
  </Switch>
);
export default Routes;
