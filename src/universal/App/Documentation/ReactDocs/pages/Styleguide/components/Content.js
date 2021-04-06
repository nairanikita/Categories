import React from 'react'
import classnames from 'classnames'
// @flow

import cls from './styleguide.scss'

type StyleguideContentType = {
  className?: String,
  Component?: React.ComponentType,
  children: React.Node
}

const StyleguideContent = ({
  className,
  Component,
  children,
  ...rest
}: StyleguideContentType) => (
  <Component
    className={ classnames(cls.content) }
    { ...rest }
  >
    {children}
  </Component>
)

StyleguideContent.defaultProps = {
  className: null,
  Component: 'div',
}

export default StyleguideContent
