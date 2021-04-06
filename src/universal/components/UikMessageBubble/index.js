import * as React from 'react'
import classnames from 'classnames'

import cls from './messages.scss'

// @flow
type UikMessageType = {
  className?: String,
  Component?: React.ComponentType,
  children?: React.node,
  position?: 'left' | 'right'
}

const UikMessage = ({
  className,
  Component,
  children,
  position,
}: UikMessageType) => (
  <Component className={ classnames(cls.bubble, className, {
    [cls[position]]: position,
  }) }
  >
    {children}
  </Component>
)

UikMessage.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
  position: 'left',
}

export default UikMessage
