import * as React from 'react'
import classnames from 'classnames'

import cls from './messages.scss'

// @flow
type UikMessageSenderType = {
  className?: String,
  Component?: React.ComponentType,
  children?: React.node,
  imgUrl?: String,
  style?: Object,
}

const UikMessageSender = ({
  className,
  Component,
  children,
  imgUrl,
  style,
}: UikMessageSenderType) => (
  <Component
    className={ classnames(cls.image, className) }
    style={ {
      ...style,
      ...(imgUrl ? {
        backgroundImage: `url("${imgUrl}")`,
      } : {}),
    } }
  >
    {children}
  </Component>
)

UikMessageSender.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
  imgUrl: null,
  style: {},
}

export default UikMessageSender
