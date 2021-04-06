import * as React from 'react'
import classnames from 'classnames'

import cls from './form-input-group.scss'

// @flow
type UikFormInputGroupProps = {
  className?: ?string,
  children: React.Node,
  Component?: React.ElementType,
  direction?: 'vertical' | 'horizontal',
  horizontal?: Boolean
}

const UikFormInputGroup = ({
  children,
  className,
  Component,
  direction,
  horizontal,
  ...rest
}: UikFormInputGroupProps) => (
  <Component
    className={ classnames(className, {
      [cls.horizontal]: direction === 'horizontal' || horizontal,
      [cls.vertical]: !(direction === 'horizontal' || horizontal),
    }) }
    { ...rest }
  >
    {children}
  </Component>
)


UikFormInputGroup.defaultProps = {
  className: null,
  Component: 'div',
  direction: 'vertical',
  horizontal: false,
}

export default UikFormInputGroup
