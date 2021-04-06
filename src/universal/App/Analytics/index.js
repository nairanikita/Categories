// Libraries
import * as React from 'react'
import {
  Route, Switch, Redirect, NavLink,
} from 'react-router-dom'

import Home from './Home'


import {
  Uikon,
  UikTabContainer,
  UikTabItem,
  UikContainerVertical,
  UikContainerHorizontal,
} from '@components'


// components
import Header from './components/Header'
import TopBarMobile from './components/TopBarMobile'
import NavigationTablet from './components/NavigationTablet'

import cls from './analytics.scss'


const tabItems = [
  {
    to: '/',
    content: (
      <Uikon>
        gallery_grid_view
      </Uikon>
    ),
  },
  {
    to: '/calendar',
    content: (
      <Uikon>
        calendar
      </Uikon>
    ),
  },
  {
    to: '/inbox',
    content: (
      <Uikon>
        inbox_paper_round
      </Uikon>
    ),
  },
  {
    to: '/invocing',
    content: (
      <Uikon>
        money_round
      </Uikon>
    ),
  },
  {
    to: '/lab',
    content: (
      <Uikon>
        container
      </Uikon>
    ),
  },
]
class Analytics extends React.Component {
  render() {
    return (
      <UikContainerHorizontal>
        <NavigationTablet />

        <UikContainerVertical>
          <TopBarMobile />
          <UikTabContainer className={ cls.mobileNavigation }>
            {
              tabItems.map(item => (
                <UikTabItem
                  key={ item.to }
                  activeClassName="active"
                  className={ cls.mobileItem }
                  Component={ NavLink }
                  size="smaller"
                  to={ `/analytics${item.to}` }
                >
                  {item.content}
                </UikTabItem>
              ))
            }
          </UikTabContainer>
          <Header />
          <Switch>
            <Route
              component={ Home }
              exact
              path="/analytics"
              strict
            />
            <Redirect to="/analytics" />
          </Switch>

        </UikContainerVertical>
      </UikContainerHorizontal>
    )
  }
}

export default Analytics
