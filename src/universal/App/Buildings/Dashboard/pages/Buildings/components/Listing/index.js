import * as React from 'react'
import classnames from 'classnames'

import {
  Uikon,
  UikDivider,
  UikLayoutMain,
  UikContentItem,
} from '@components'


import data from '../../../../../assets/listOfBuildings'
import cls from './buildings-listing.scss'

import ListingGridView from '../../../../components/ListingGridView'
import ListingListView from '../../../../components/ListingListView'

// @flow
type BuildingsListingProps = {
  className?: String
}

class BuildingsListing extends React.Component<BuildingsListingProps> {
  static defaultProps = {
    className: null,
  }

  state = {
    view: 'grid',
  }

  setView = (view) => {
    this.setState({
      view,
    })
  }

  toggleView = () => {
    const { view } = this.state
    this.setView(view === 'grid' ? 'list' : 'grid')
  }

  render() {
    const { view } = this.state
    const { className, ...rest } = this.props
    return (
      <UikLayoutMain
        outerProps={ {
          className: classnames(cls.wrapper, className, {
            [cls.listView]: view === 'list',
          }),
        } }
        { ...rest }
      >
        <UikContentItem className={ cls.header }>
          <h1 className={ cls.headline }>
            45 Buildings
          </h1>
          <div className={ cls.viewSwitchWrapper }>
            <Uikon
              className={ classnames(cls.switchIcon, {
                active: view === 'list',
              }) }
              onClick={ this.toggleView }
            >
              view_list
            </Uikon>
            <UikDivider direction="vertical" />
            <Uikon
              className={ classnames(cls.switchIcon, {
                active: view === 'grid',
              }) }
              onClick={ this.toggleView }
            >
              view_grid
            </Uikon>
          </div>
        </UikContentItem>
        {
          view === 'grid' ? (
            <ListingGridView data={ data } />
          ) : (
            <ListingListView data={ data } />
          )
        }
      </UikLayoutMain>
    )
  }
}


export default BuildingsListing
