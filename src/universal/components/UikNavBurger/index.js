import React from 'react'
import classnames from 'classnames'

import cls from './nav-icon.scss'

import LineLong from './assets/LineLong'
import LineShort from './assets/LineShort'

// @flow
type UikNavBurgerType = {
  className?: String,
  Component?: React.ComponentType,
  isOpen?: Boolean,
}

const UikNavBurger = ({
  className,
  Component,
  isOpen,
  ...rest
}: UikNavBurgerType) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [cls.isOpen]: isOpen,
    }) }
    { ...rest }
  >
    <LineShort className={ cls.a } />
    <LineLong className={ cls.b } />
    <LineShort className={ cls.c } />
  </Component>
)

UikNavBurger.defaultProps = {
  className: null,
  Component: 'div',
  isOpen: false,
}

export default UikNavBurger
