// Libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers

// import Dashboard from './Dashboard';
//import SignUp from './SignUp';

import Screen from './Screen';

const Categories = () => (
  <Switch>
    <Route component={Screen} exact path="/categories/screen" />
  </Switch>
);

export default Categories;
