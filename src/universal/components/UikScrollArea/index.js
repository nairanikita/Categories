import * as React from 'react'
import classnames from 'classnames'

import cls from './scroll.scss'

// @flow
type UikScrollAreaProps = {
  children?: React.Node,
  className?: ?String,
}


class UikScrollArea extends React.PureComponent<UikScrollAreaProps> {
  render() {
    const {
      children,
      className,
      ...rest
    } = this.props
    return (
      <div
        className={ classnames(cls.wrapper, className) }
        { ...rest }
      >
        {children}
      </div>)
  }
}

UikScrollArea.defaultProps = {
  className: null,
  children: null,
}

export default UikScrollArea
