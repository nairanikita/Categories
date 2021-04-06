import * as React from 'react'
import classnames from 'classnames'

import cls from './top-bar-section.scss'


// @flow
type UikTopBarSectionProps = {
  children?: React.Node,
  className?: ?String,
  Component?: React.ElementType,
}


const UikTopBarSection = ({
  children,
  className,
  Component,
  ...rest
}: UikTopBarSectionProps) => (
  <Component
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </Component>
)

UikTopBarSection.defaultProps = {
  className: null,
  children: null,
  Component: 'div',
}

export default UikTopBarSection
