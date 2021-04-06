import * as React from 'react'
import classnames from 'classnames'
// @flow

import cls from './tutorial-list.scss'

type TutorialListProps = {
  className?: String,
  children: React.Node,
}

const TutorialList = ({
  children,
  className,
  ...rest
}: TutorialListProps) => (
  <div
    className={ classnames(cls.wrapper, className) }
    { ...rest }
  >
    {children}
  </div>
)

TutorialList.defaultProps = {
  className: null,
}

export default TutorialList
