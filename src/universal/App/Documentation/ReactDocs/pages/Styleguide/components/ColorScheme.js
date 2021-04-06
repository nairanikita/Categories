import React from 'react'
import classnames from 'classnames'
// @flow

import cls from './styleguide.scss'

type StyleguideTopBarType = {
  className?: String,
  name?: String,
  children: React.Node,
  color: String,
  isSpreaded?: Boolean
}

const StyleguideTopBar = ({
  className,
  name,
  children,
  color,
  isSpreaded,
  ...rest
}: StyleguideTopBarType) => (
  <div className={ cls.colorSchemeWrapper }>
    <div
      className={ classnames(cls.colorScheme, {
        [cls.isSpreaded]: isSpreaded,
      }) }
      { ...rest }
    >
      <div
        style={ {
          backgroundColor: color,
        } }
      />
      <div
        style={ {
          backgroundColor: color,
        } }
      />
      <div
        style={ {
          backgroundColor: color,
        } }
      />
      <div
        style={ {
          backgroundColor: color,
        } }
      />
    </div>
    <span className={ cls.colorName }>
      {name}
    </span>
    <span className={ cls.colorCode }>
      {color}
    </span>
  </div>
)

StyleguideTopBar.defaultProps = {
  className: null,
  name: '-',
  isSpreaded: true,
}

export default StyleguideTopBar
