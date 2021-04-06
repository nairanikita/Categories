import * as React from 'react'
import classnames from 'classnames'

import cls from './messages.scss'

// @flow
type UikMessageSenderType = {
  className?: String,
  Component?: React.ComponentType,
  children?: React.node,
  time?: React.node,
}

const UikMessageSender = ({
  className,
  Component,
  children,
  time,
}: UikMessageSenderType) => (
  <Component className={ classnames(cls.sender, className) }>
    {children}
    {
      time && (
        <span className={ cls.timeSent }>
          {time}
        </span>
      )
    }
  </Component>
)

UikMessageSender.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
  time: null,
}

export default UikMessageSender
