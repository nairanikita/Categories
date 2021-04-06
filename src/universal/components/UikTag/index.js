import * as React from 'react'
import classnames from 'classnames'
// @flow

import cls from './tag.scss'

type UikTagProps = {
  className?: String,
  Component?: React.ElementType,
  children?: React.Node,
  color?: 'white' | 'red' | 'orange' | 'blue' | 'yellow' | 'green' | 'violet',
  fill?: Boolean,
}

const UikTag = ({
  children,
  className,
  color,
  Component,
  fill,
  ...rest
}: UikTagProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [color]: color,
      [cls.fill]: fill,
    }) }
    { ...rest }
  >
    {children}
  </Component>
)

UikTag.defaultProps = {
  className: null,
  Component: 'span',
  children: null,
  color: null,
  fill: false,
}

export default UikTag
