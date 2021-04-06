import * as React from 'react'
import classnames from 'classnames'

import cls from './nav-panel.scss'

// @flow
type UikNavPanelProps = {
  children?: React.Node,
  className?: ?String,
  positionRight?: ?Boolean
}

const UikNavPanel = ({
  children,
  className,
  positionRight,
  ...rest
}: UikNavPanelProps) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [cls.positionRight]: positionRight,
    }) }
    { ...rest }
  >
    {children}
  </div>
)

UikNavPanel.defaultProps = {
  className: null,
  positionRight: false,
  children: null,
}

export default UikNavPanel
