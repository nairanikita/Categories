import * as React from 'react'
import classnames from 'classnames'

import {
  Uikon,
} from '@components'

import BuildingsGridItem from '../ListingGridItem'
import cls from './buildings-grid-view.scss'

// @flow
type BuildingsGridViewProps = {
  data: Array,
  className?: String
}

const BuildingsGridView = ({
  data,
  className,
}: BuildingsGridViewProps) => (
  <div className={ classnames(cls.wrapper, className) }>
    {
      data.map(item => (
        <BuildingsGridItem
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
              <div className={ cls.extra }>
                <div className={ cls.extraItem }>
                  <Uikon className={ cls.extraIcon }>
                    profile_round
                  </Uikon>
                  {item.views}
                  {' Users'}
                </div>
                <div className={ cls.extraItem }>
                  <Uikon className={ cls.extraIcon }>
                    shopping_bag
                  </Uikon>
                  {item.offices}
                  {' Offices'}
                </div>
              </div>
            </React.Fragment>
          ) }
          title={ item.name }
        />
      ))
    }
  </div>
)

BuildingsGridView.defaultProps = {
  className: null,
}

export default BuildingsGridView
