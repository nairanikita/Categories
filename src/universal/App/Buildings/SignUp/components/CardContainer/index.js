import * as React from 'react'
import classnames from 'classnames'

import cls from './buildings-signin-card-container.scss'

// @flow
type UikBuidingsLoginCardContainerProps = {
  className?: ?string,
  children: React.Node,
}

const UikBuidingsLoginCardContainer = ({
  children,
  className,
  ...rest
}: UikBuidingsLoginCardContainerProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </div>
)


UikBuidingsLoginCardContainer.defaultProps = {
  className: null,
}

export default UikBuidingsLoginCardContainer
