import * as React from 'react'
import classnames from 'classnames'

import {
  Uikon,
} from '@components'

import cls from './buildings-signin-card.scss'


// @flow
type UikBuidingsLoginCardProps = {
  className?: ?string,
  children: React.Node,
  isSelected?: Boolean,
}

const UikBuidingsLoginCard = ({
  children,
  className,
  isSelected,
  ...rest
}: UikBuidingsLoginCardProps) => (
  <button
    className={ classnames(cls.wrapper, className, {
      [cls.selected]: isSelected,
    }) }
    type="button"
    { ...rest }
  >
    {children}
    <Uikon className={ cls.selectedCheck }>
      check
    </Uikon>
  </button>
)


UikBuidingsLoginCard.defaultProps = {
  className: null,
  isSelected: false,
}

export default UikBuidingsLoginCard
