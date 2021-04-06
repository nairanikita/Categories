/* eslint-disable max-len */
import * as React from 'react'
import classnames from 'classnames'
import { Route, Switch, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import {
  UikContainerHorizontal,
  UikContainerVertical,
} from '@components'

import Navigation from './components/Navigation'

import cls from './buildings.scss'

// pages
import PageBuildings from './pages/Buildings'
import PageDashboard from './pages/Dashboard'
import PagePerformance from './pages/Performance'
import PageConversations from './pages/Conversations'
import PageUserSettings from './pages/UserSettings'
import PageUsers from './pages/Users'
// @flow
type BuildingsDashboardProps = {
  isMenuOpen: Boolean
}

const BuildingsDashboard = ({
  isMenuOpen,
}: BuildingsDashboardProps) => (
  <UikContainerHorizontal>
    <Navigation className={ classnames(cls.buildingsMenuAnimate, {
      [cls.buildingsMenuOpen]: isMenuOpen,
    }) }
    />
    <UikContainerVertical className={ classnames(cls.buildingsMenuAnimate, {
      [cls.buildingsMenuOpen]: isMenuOpen,
    }) }
    >
      <Switch>
        <Route
          component={ PageBuildings }
          path="/buildings/listing"
        />
        <Route
          component={ PageUserSettings }
          path="/buildings/user/settings"
        />
        <Route
          component={ PageUsers }
          path="/buildings/users/:user_id"
        />
        <Route
          component={ PageUsers }
          path="/buildings/users"
        />
        <Route
          component={ PageConversations }
          path="/buildings/conversations/:conversation_id"
        />
        <Route
          component={ PageConversations }
          path="/buildings/conversations"
        />
        <Route
          component={ PageDashboard }
          exact
          path="/buildings/dashboard"
          strict
        />
        <Route
          component={ PagePerformance }
          path="/buildings/performance"
        />
        <Redirect to="/buildings/dashboard" />
      </Switch>
    </UikContainerVertical>
  </UikContainerHorizontal>
)

export default connect(
  store => ({
    isMenuOpen: store.buildings.isMenuOpen,
  }),
)(BuildingsDashboard)
