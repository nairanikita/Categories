// Libraries
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'


import {
  UikContainerVertical,
  UikContainerHorizontal,
} from '@components'

// Containers

import * as pages from './pages'


import Filters from './components/Filters'
import TopBar from './components/TopBar'
import NavigationLeft from './components/NavigationLeft'

export default class Tutorials extends Component {
  render() {
    return (
      <UikContainerVertical>
        <TopBar />
        <NavigationLeft />
        <UikContainerHorizontal>
          <Filters />
          <Switch>
            <Route
              component={ pages.Animations }
              exact
              path="/tutorials/animations"
              strict
            />
            <Redirect to="/tutorials/animations" />
          </Switch>
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}
