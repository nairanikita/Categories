import React from 'react'
import classnames from 'classnames'
// @flow

import cls from './styleguide.scss'

type ComponentTitleType = {
  className?: String,
  Component?: React.ComponentType,
  children: React.Node,
}

const ComponentTitle = ({
  className,
  Component,
  children,
  ...rest
}: ComponentTitleType) => (
  <Component
    className={ classnames(cls.componentTitle) }
    { ...rest }
  >
    {children}
  </Component>
)

ComponentTitle.defaultProps = {
  className: null,
  Component: 'div',
}

export default ComponentTitle
