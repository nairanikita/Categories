import * as React from 'react'
import classnames from 'classnames'

import UikButton from '../UikButton'

import cls from './dropdown-item.scss'

// @flow
type UikDropdownItemProps = {
  children?: React.Node,
  className?: ?String,
}

const UikDropdownItem = ({
  children,
  className,
  ...rest
}: UikDropdownItemProps) => (
  <UikButton
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </UikButton>
)

UikDropdownItem.defaultProps = {
  className: null,
  children: null,
}

export default UikDropdownItem
