import React from 'react'
import classnames from 'classnames'
// @flow

import UikButton from '../UikButton'

import cls from './menuDrop.scss'

type DefaultDisplayComponentProps = {
  className?: String
}

const DefaultDisplayComponent = ({ className, ...rest }: DefaultDisplayComponentProps) => (
  <UikButton
    className={ classnames(cls.defaultDisplayComponent, className) }
    contentClassName={ cls.btnContent }
    { ...rest }
  >
    &middot;&middot;&middot;
  </UikButton>
)


DefaultDisplayComponent.defaultProps = {
  className: null,
}

export default DefaultDisplayComponent
