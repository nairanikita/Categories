import * as React from 'react'
import classnames from 'classnames'

import {
  Uikon,
  UikAvatar,
} from '@components'

import cls from './header-user-dropdown.scss'

// @flow
type UikTopBarUserDropdownDisplayElementType = {
  className?: String,
  Component?: React.ElementType,
  name?: String,
  children?: React.Node,
  imgUrl?: String,
}

const UikTopBarUserDropdownDisplayComponent = ({
  className,
  Component,
  children,
  imgUrl,
  name,
  ...rest
}: UikTopBarUserDropdownDisplayElementType) => (
  <Component
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    <UikAvatar
      imgUrl={ imgUrl }
      name={ name }
    />
    <Uikon className={ cls.dropdownArrow }>
      arrow_dropdown
    </Uikon>
  </Component>
)

UikTopBarUserDropdownDisplayComponent.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
  imgUrl: null,
  name: null,
}

export default UikTopBarUserDropdownDisplayComponent
