
import * as React from 'react'
import classnames from 'classnames'

import cls from './tab.scss'
// @flow
type UikTabItemProps = {
  className?: ?String,
  Component?: React.ElementType,
  text?: React.Node,
  children?: React.Node,
  extra: React.Node,
  size?: 'small' | 'smaller',
  active?: Boolean,
}


const UikTabItem = ({
  className,
  Component,
  text,
  children,
  extra,
  size,
  active,
  ...rest
}: UikTabItemProps) => (
  <Component
    className={ classnames(cls.item, className, {
      [cls[size]]: size,
      active,
    }) }
    { ...rest }
  >
    {text}
    {children}
    {extra && (
    <span className={ cls.extra }>
      {extra}
    </span>
    )}
  </Component>
)

UikTabItem.defaultProps = {
  className: null,
  Component: 'span',
  size: null,
  children: null,
  text: null,
  active: false,
}

export default UikTabItem
