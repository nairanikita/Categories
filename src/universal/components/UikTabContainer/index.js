import * as React from 'react'
import classnames from 'classnames'

import cls from './tab.scss'
// @flow

type UikTabContainerProps = {
  className?: ?String,
  Component?: React.ElementType,
  children?: React.Node,
}

const UikTabContainer = ({
  className,
  Component,
  children,
  ...rest
}: UikTabContainerProps) => (
  <Component
    className={ classnames(cls.container, className) }
    { ...rest }
  >
    {children}
  </Component>
)

UikTabContainer.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
}

export default UikTabContainer
