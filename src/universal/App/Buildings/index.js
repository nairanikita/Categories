// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Containers

import Dashboard from './Dashboard'
import SignUp from './SignUp'


const Buildings = () => (
  <Switch>
    <Route
      component={ SignUp }
      exact
      path="/buildings/sign-up"
      strict
    />
    <Route
      component={ Dashboard }
      path="/buildings"
    />
  </Switch>
)

export default Buildings
