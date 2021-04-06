import * as React from 'react'

import BuildingsListItem from '../ListingListItem'
import cls from './buildings-list-view.scss'


// @flow
type BuildingsListViewProps = {
  data: Array
}

const BuildingsListView = ({
  data,
}: BuildingsListViewProps) => (
  <div className={ cls.wrapper }>
    {
      data.map(item => (
        <BuildingsListItem
          key={ item.name }
          id={ item.id }
          imgUrl={ item.imgUrl }
          price={ `£${item.price_per_sqm}/sqm` }
          status={ item.status }
          text={ (
            <React.Fragment>
              {item.address.street}
              <br />
              {item.address.city}
              {', '}
              {item.address.state}
              {' '}
              {item.address.zip}
            </React.Fragment>
          ) }
          title={ item.name }
        />
      ))
    }
  </div>
)

export default BuildingsListView
