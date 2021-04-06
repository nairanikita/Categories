import * as React from 'react'
import classnames from 'classnames'

import * as images from '@exampleAssets'
import {
  UikMapPinCircle,
  Uikon,
} from '@components'


import cls from './buildings-map.scss'

// @flow
type BuildingsListingMapProps = {
  className?: String
}
const BuildingsListingMap = ({
  className,
}: BuildingsListingMapProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    style={ {
      backgroundImage: `url("${images.map}")`,
    } }
  >
    <UikMapPinCircle className={ cls.pin1 }>
      <Uikon>
        front_store
      </Uikon>
    </UikMapPinCircle>
    <UikMapPinCircle
      className={ cls.pin2 }
      color="green"
    >
      <Uikon>
        buildings
      </Uikon>
    </UikMapPinCircle>
    <UikMapPinCircle
      className={ cls.pin3 }
      color="green"
    >
      <Uikon>
        buildings
      </Uikon>
    </UikMapPinCircle>
    <UikMapPinCircle
      className={ cls.pin4 }
      color="violet"
    >
      <Uikon>
        profile_card
      </Uikon>
    </UikMapPinCircle>
    <UikMapPinCircle
      className={ cls.pin5 }
      color="violet"
    >
      <Uikon>
        profile_card
      </Uikon>
    </UikMapPinCircle>
  </div>
)

BuildingsListingMap.defaultProps = {
  className: null,
}

export default BuildingsListingMap
