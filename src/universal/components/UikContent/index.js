import * as React from 'react'
import classnames from 'classnames'
// @flow

import cls from './content.scss'

type UikContentProps = {
  children?: React.Node,
  className?: ?String,
  Component?: React.ElementType,
  contentCenter?: Boolean
}

const UikContent = ({
  className,
  Component,
  children,
  contentCenter,
  ...rest
}: UikContentProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [cls.contentCenter]: contentCenter,
    }) }
    { ...rest }
  >
    {children}
  </Component>
)

UikContent.defaultProps = {
  className: null,
  Component: 'div',
  contentCenter: false,
  children: null,
}

export default UikContent
