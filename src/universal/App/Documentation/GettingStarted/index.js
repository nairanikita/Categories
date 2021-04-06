import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import {
  UikContainerHorizontal,
} from '@components'


import Menu from './components/Menu'

import * as pages from './pages'


const DocsGettingStarted = () => (
  <UikContainerHorizontal>
    <Menu />
    <Switch>
      <Route
        component={ pages.ProjectStructure }
        path="/docs/start/project-structure"
      />
      <Route
        component={ pages.ReactCompiled }
        path="/docs/start/compiled"
      />
      <Route
        component={ pages.BundleContents }
        path="/docs/start/bundle-contents"
      />
      <Route
        component={ pages.ReactStack }
        path="/docs/start/stack"
      />
      <Route
        component={ pages.ReactSource }
        path="/docs/start/source-code"
      />
      <Route
        component={ pages.HtmlCss }
        path="/docs/start/html-css"
      />
      <Route
        component={ pages.CRA }
        path="/docs/start/cra"
      />
      <Redirect to="/docs/start/project-structure" />
    </Switch>
  </UikContainerHorizontal>
)

export default DocsGettingStarted
