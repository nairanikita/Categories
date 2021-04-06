import classnames from 'classnames'

// @flow
import * as React from 'react'
import cls from './btn-group.scss'

type UikButtonGroupProps = {
  className?: ?String,
  Component?: React.ElementType,
  children?: React.Node,
}

const UikButtonGroup = ({
  className,
  Component,
  children,
  ...rest
}: UikButtonGroupProps) => (
  <Component
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </Component>
)

UikButtonGroup.defaultProps = {
  className: null,
  Component: 'div',
  children: null,
}

export default UikButtonGroup
