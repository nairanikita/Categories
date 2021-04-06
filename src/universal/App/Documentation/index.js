// Libraries
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Containers

import GettingStarted from './GettingStarted'
import ReactDocs from './ReactDocs'
import Support from './Support'
import Changelog from './Changelog'

import {
  UikContainerVertical,
} from '@components'

import Header from './components/Header'


const Docs = () => (
  <UikContainerVertical>
    <Header />
    <Switch>
      <Route
        component={ GettingStarted }
        path="/docs/start"
      />
      <Route
        component={ ReactDocs }
        path="/docs/react"
      />
      <Route
        component={ Support }
        path="/docs/support"
      />
      <Route
        component={ Changelog }
        path="/docs/changelog"
      />
      <Redirect to="/docs/start" />
    </Switch>
  </UikContainerVertical>
)

export default Docs
