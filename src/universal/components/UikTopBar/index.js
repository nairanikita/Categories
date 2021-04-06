import * as React from 'react'
import classnames from 'classnames'

import cls from './top-bar.scss'

// @flow
type UikTopBarProps = {
  center?: Boolean,
  className?: ?String,
  children?: React.Node
}

const UikTopBar = ({
  children,
  className,
  center,
  ...rest
}: UikTopBarProps) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [cls.center]: center,
    }) }
    { ...rest }
  >
    {children}
  </div>
)

UikTopBar.defaultProps = {
  className: null,
  children: null,
  center: false,
}

export default UikTopBar
