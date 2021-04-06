import * as React from 'react'
import classnames from 'classnames'

import cls from './messages.scss'

// @flow
type UikMessageSenderType = {
  className?: String,
  Component?: React.ComponentType,
  children?: React.node,
}

const UikMessageSender = ({
  className,
  Component,
  children,
}: UikMessageSenderType) => (
  <Component className={ classnames(cls.imageContainer, className) }>
    {children}
  </Component>
)

UikMessageSender.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
}

export default UikMessageSender
