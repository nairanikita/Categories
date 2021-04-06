import * as React from 'react'
import classnames from 'classnames'
// @flow

import cls from './content.scss'


type UikContentItemProps = {
  children?: React.Node,
  className?: ?String,
  Component?: React.ElementType
}

const UikContentItem = ({
  className,
  children,
  Component,
  ...rest
}: UikContentItemProps) => (
  <Component
    className={ classnames(cls.item, className) }
    { ...rest }
  >
    {children}
  </Component>
)

UikContentItem.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
}

export default UikContentItem
