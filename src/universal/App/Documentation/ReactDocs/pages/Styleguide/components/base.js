import React from 'react'
import classnames from 'classnames'
// @flow

import cls from './styleguide.scss'

type StyleguideTopBarType = {
  className?: String,
  Component?: React.ComponentType,
  children: React.Node
}

const StyleguideTopBar = ({
  className,
  Component,
  children,
  ...rest
}: StyleguideTopBarType) => (
  <Component
    className={ classnames(cls.topBar) }
    { ...rest }
  >
    {children}
  </Component>
)

StyleguideTopBar.defaultProps = {
  className: null,
  Component: 'div',
}

export default StyleguideTopBar
