import * as React from 'react'
import classnames from 'classnames'

import cls from './map-pin-circle.scss'

// @flow
type UikMapPinCircleProps = {
  children?: React.Node,
  className?: ?String,
  color?: 'blue' | 'green' | 'violet'
}

const UikMapPinCircle = ({
  children,
  className,
  color,
  ...rest
}: UikMapPinCircleProps) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [color]: color,
    }) }
    { ...rest }
  >
    {children}
  </div>
)

UikMapPinCircle.defaultProps = {
  className: null,
  children: null,
  color: 'blue',
}

export default UikMapPinCircle
