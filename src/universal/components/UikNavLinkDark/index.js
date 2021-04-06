import * as React from 'react'
import classnames from 'classnames'

import cls from './nav-link.scss'

import UikNavLink from '../UikNavLink'

// @flow
type UikNavLinkDarkProps = {
  className?: String,
  children?: React.Node,
}

const UikNavLinkDark = ({
  children,
  className,
  ...rest
}: UikNavLinkDarkProps) => (
  <UikNavLink
    className={ classnames(cls.wrapperDark, className) }
    { ...rest }
  >
    {children}
  </UikNavLink>
)

UikNavLinkDark.defaultProps = {
  className: null,
  children: null,
}

export default UikNavLinkDark
