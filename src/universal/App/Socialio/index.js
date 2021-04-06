// Libraries
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import classnames from 'classnames'


import {
  UikTabContainer,
  UikTabItem,
  Uikon,
  UikContainerVertical,
  UikContainerHorizontal,
} from '@components'

import * as pages from './pages'

import Chat from './components/Chat'
import Navigation from './components/Navigation'
import Header from './components/Header'

import cls from './socialio.scss'

const tabItems = [
  {
    className: 'Menu',
    icon: 'gallery_grid_view',
    content: (
      <Uikon>
        gallery_grid_view
      </Uikon>
    ),
  },
  {
    id: 'centerIcon',
    className: 'Home',
    icon: 'home',
    content: (
      <Uikon>
        home
      </Uikon>
    ),
  },
  {
    className: 'Chat',
    icon: 'message',
    content: (
      <Uikon>
        message
      </Uikon>
    ),
  },
]

const icons = {
  profile: 'smile',
  events: 'calendar',
}

const getIcon = page => icons[page] || 'home'


class Social extends React.PureComponent<{
  location: Object
}> {
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      pathname: props.location.pathname,
      activeContent: props.location.pathname === state.pathname ? state.activeContent : 'Home',
    }
  }

  state = {
    activeContent: 'Home',
  }

  setActiveContent = content => () => {
    this.setState({
      activeContent: content,
    })
  }

  render() {
    const { activeContent } = this.state
    const { location: { pathname } } = this.props
    const page = pathname.split('/')[2]

    return (
      <UikContainerVertical>
        <Header />
        <UikTabContainer className={ cls.mobileNavigation }>
          {
            tabItems.map(item => (
              <UikTabItem
                key={ classnames(cls.mobileItem, item.className) }
                className={ classnames(cls.mobileItem, {
                  active: activeContent === item.className,
                }) }
                onClick={ this.setActiveContent(item.className) }
                size="smaller"
              >

                <Uikon>
                  {item.id === 'centerIcon' ? getIcon(page) : item.icon}
                </Uikon>
              </UikTabItem>
            ))
          }
        </UikTabContainer>
        <UikContainerHorizontal className={ classnames(cls.contentContainer, {
          [cls[activeContent]]: activeContent,
        }) }
        >
          <Navigation />
          <div className={ cls.content }>
            <Switch>
              <Route
                component={ pages.Profile }
                exact
                path="/social/profile"
              />
              <Route
                component={ pages.Events }
                exact
                path="/social/events"
              />
              <Route
                component={ pages.Home }
                exact
                path="/social"
              />
              <Redirect to="/social" />
            </Switch>
          </div>
          <Chat />
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}

export default Social
