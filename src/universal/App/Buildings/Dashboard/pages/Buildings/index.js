import * as React from 'react'
import classnames from 'classnames'
import { Switch, Route } from 'react-router-dom'

/* eslint-disable max-len */

import {
  UikTabContainer,
  UikTabItem,
  UikContainerVertical,
  UikContainerHorizontal,
} from '@components'


import TopBar from './components/TopBar'
import Listing from './components/Listing'
import ListingMap from './components/ListingMap'
import ListingDetail from './components/ListingDetail'

import cls from './buildings.scss'

// @flow
class PageBuildings extends React.Component<{
  match: Object,
  location: Object,
}> {
  state = {
    view: 'list',
  }

  setView = (view) => {
    this.setState({
      view,
    })
  }

  setViewMap = () => {
    this.setView('map')
  }

  setViewList = () => {
    this.setView('list')
  }

  render() {
    const { view } = this.state
    const { match, location } = this.props

    const isDetail = location.pathname.split('/').length > 3

    return (
      <UikContainerVertical>
        <TopBar />

        <Route
          exact
          path={ `${match.path}` }
          render={ () => (
            <UikTabContainer className={ cls.mobileTabSwitch }>
              <UikTabItem
                className={ view === 'list' ? 'active' : null }
                onClick={ this.setViewList }
                size="smaller"
              >
                List of Properties
              </UikTabItem>
              <UikTabItem
                className={ view === 'map' ? 'active' : null }
                onClick={ this.setViewMap }
                size="smaller"
              >
                View on Map
              </UikTabItem>
            </UikTabContainer>
          ) }
          strict
        />
        <UikContainerHorizontal className={ classnames(cls.contentContainer) }>
          <Listing className={ classnames({
            [cls.mapView]: view === 'map' || isDetail,
          }) }
          />
          <Switch>
            <Route
              path={ `${match.path}/:property_id` }
              render={ () => (
                <ListingDetail
                  className={ classnames({
                    [cls.mapView]: isDetail,
                  }) }
                />
              ) }
            />
            <Route
              render={ () => (
                <ListingMap
                  className={ classnames({
                    [cls.mapView]: view === 'map',
                  }) }
                />
              ) }
            />
          </Switch>
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}

export default PageBuildings
