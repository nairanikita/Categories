import * as React from 'react'
import classnames from 'classnames'


import UikContentTitle from '../UikContentTitle'

import cls from './input.scss'

// @flow
type UikInputProps = {
  wrapperProps?: Object,
  label?: React.Node,
  name?: React.Node,
  className?: String,
  icon?: React.Node,
  iconPosition?: 'left' | 'right',
  clear?: Boolean,
  errorMessage?: String
}

class Input extends React.PureComponent<UikInputProps> {
  static defaultProps = {
    wrapperProps: {},
    label: null,
    name: null,
    className: null,
    icon: null,
    clear: false,
    iconPosition: 'left',
    errorMessage: null,
  }

  setRef = (node) => {
    this.input = node
  }

  setValue = (value) => {
    this.input.value = value
  }

  render() {
    const {
      className,
      wrapperProps,
      name,
      icon,
      label,
      focus, // eslint-disable-line
      clear,
      iconPosition,
      errorMessage,
      // size
      ...rest
    } = this.props

    return (
      <div
        { ...wrapperProps }
        className={ classnames(wrapperProps.className, cls.formGroup, {
          [cls.clear]: clear,
        }) }
      >
        { label && (
          <UikContentTitle>
            {label}
          </UikContentTitle>
        )}
        <div
          className={ classnames(cls.inputWrapper) }
        >
          {
            icon && (
              <span className={ classnames(cls.iconWrapper, {
                [cls.iconWrapperRight]: iconPosition === 'right',
              }) }
              >
                {icon}
              </span>
            )
          }
          <input
            ref={ this.setRef }
            className={ classnames(className, cls.input, {
              [cls.errorHighlight]: errorMessage,
            }) }
            name={ name }
            type="text"
            { ...rest }
          />
        </div>
        {
          errorMessage && (
            <p className={ cls.errorMessage }>
              {errorMessage}
            </p>
          )
        }
      </div>
    )
  }
}

export default Input
