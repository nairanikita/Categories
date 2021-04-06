import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import {
  UikContainerHorizontal,
} from '@components'


import Menu from './components/Menu'
import { getFlattenLinks } from './menuLinks'


const DocsGettingStarted = () => (
  <UikContainerHorizontal>
    <Menu />
    <Switch>
      {
        getFlattenLinks().map(item => (
          <Route
            key={ item.to }
            component={ item.component }
            path={ `/docs/react${item.to}` }
          />
        ))
      }
      <Redirect to="/docs/react/styleguide" />
    </Switch>
  </UikContainerHorizontal>
)

export default DocsGettingStarted
