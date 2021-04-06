import * as React from 'react'
import classnames from 'classnames'

import cls from './icon-text.scss'

// @flow


const UikonText = ({
  icon,
  children,
  highlight,
  textHighlight,
  className,
  ...rest
}: {
  icon: React.node,
  children: React.node,
  highlight?: Boolean,
  textHighlight?: Boolean,
  className?: String,
}) => (
  <div
    className={ classnames(cls.wrapper, className, {
      [cls.highlight]: highlight,
      [cls.textHighlight]: textHighlight,
    }) }
    { ...rest }
  >
    {icon}
    <span className={ cls.text }>
      {children}
    </span>
  </div>
)

UikonText.defaultProps = {
  className: null,
  highlight: false,
  textHighlight: false,
}

export default UikonText
