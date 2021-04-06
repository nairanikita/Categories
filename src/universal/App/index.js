import * as React from 'react'

// import { connect } from 'react-redux'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'

import {
  withDimensionOnChangeRdx,
} from '@hoc'

import Navigator from './@components/Navigator'

import cls from './App.scss'
import routeMap from './routeMap'

// @flow
type AppProps = {
  location: Object
}


@withRouter
@withDimensionOnChangeRdx
class App extends React.PureComponent<AppProps> {
  render() {
    const { location, location: { pathname } } = this.props
    const key = pathname.slice('/')[0]
    return (
      <div className={ cls.app }>
        <Navigator />
        <Switch
          key={ key }
          location={ location }
        >
          <Route
            component={ routeMap.Knowledge }
            path="/knowledge"
          />
          <Route
            component={ routeMap.Socialio }
            path="/social"
          />
          <Route
            component={ routeMap.Tutorials }
            path="/tutorials"
          />
          <Route
            component={ routeMap.Documentation }
            path="/docs"
          />
          <Route
            component={ routeMap.Analytics }
            path="/analytics"
          />
          <Route
            component={ routeMap.Buildings }
            path="/buildings"
          />
          <Route
            component={ routeMap.AppDirectory }
            exact
            path="/"
            strict
          />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default App
