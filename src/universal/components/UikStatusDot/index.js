

import * as React from 'react'
import classnames from 'classnames'

// @flow

import cls from './status-dot.scss'

type UikStatusDotProps = {
  className?: String,
  Component?: React.ElementType,
  children?: React.Node,
  color?: 'green' | 'orange' | 'red' | 'grey',
}

const UikStatusDot = ({
  children,
  className,
  color,
  name,
  Component,
  fill,
  ...rest
}: UikStatusDotProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [color]: color,
    }) }
    { ...rest }
  >
    {children}
  </Component>
)

UikStatusDot.defaultProps = {
  className: null,
  Component: 'span',
  children: null,
  color: 'green',
}

export default UikStatusDot
