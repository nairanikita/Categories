import * as React from 'react'
import classnames from 'classnames'

import cls from './divider.scss'

// @flow
type UikDividerProps = {
  className?: String,
  direction?: 'vertical' | 'horizontal',
  margin?: Boolean,
  vertical?: Boolean,
}

const UikDivider = ({
  className,
  direction,
  vertical,
  margin,
  ...rest
}: UikDividerProps) => (
  <div
    className={ classnames({
      [cls.vertical]: vertical || direction === 'vertical',
      [cls.horizontal]: !(vertical || direction === 'vertical'),
      [cls.margin]: margin,
    }, className) }
    { ...rest }
  />
)

UikDivider.defaultProps = {
  className: null,
  direction: 'horizontal',
  margin: false,
  vertical: false,
}

export default UikDivider
