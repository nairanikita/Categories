import * as React from 'react'
import classnames from 'classnames'

import cls from './btn.scss'

import UikLoaderDots from '../UikLoaderDots'

// @flow
type UikButtonProps = {
  children?: React.Node,
  Component?: React.ElementType,
  className?: String,
  contentClassName?: String,
  href?: String,
  type?: String,

  // appearence

  xs?: Boolean,
  lg?: Boolean,

  primary?: Boolean,
  error?: Boolean,
  success?: Boolean,
  transparent?: Boolean,

  clear?: Boolean,
  isLoading?: Boolean,
  // icon properties
  icon?: React.Node,
  iconRight?: Boolean,
  iconOnly?: Boolean,
  noBorder?: Boolean,
  dark?: Boolean,
  isExpanded?: Boolean
}

export default class Button extends React.PureComponent<UikButtonProps> {
  static defaultProps = {
    Component: 'button',
    primary: false,
    error: false,
    success: false,
    dark: false,
    className: null,
    contentClassName: null,
    clear: false,
    transparent: false,
    noBorder: false,
    // link?
    href: null,
    to: null,
    xs: false,
    lg: false,
    isLoading: false,
    type: 'button',
    children: null,
    icon: null,
    iconRight: false,
    iconOnly: false,
    isExpanded: false,
  }

  render() {
    const {
      Component,
      primary,
      error,
      success,
      dark,
      transparent,
      children,
      className,
      contentClassName,
      xs,
      lg,
      clear,
      isLoading,
      type,
      icon,
      iconRight,
      iconOnly,
      noBorder,
      isExpanded,
      ...rest
    } = this.props

    const classes = classnames(
      cls.base,
      {
        [cls.primary]: primary,
        [cls.error]: error,
        [cls.success]: success,
        [cls.dark]: dark,
        [cls.xs]: xs,
        [cls.lg]: lg,
        [cls.clear]: clear,
        [cls.isLoading]: isLoading,
        [cls.hasIcon]: icon,
        [cls.iconRight]: iconRight,
        [cls.iconOnly]: iconOnly,
        [cls.transparent]: transparent,
        [cls.noBorder]: noBorder,
        [cls.isExpanded]: isExpanded,
      },
      className,
    )

    // put props together so we don't have to repeat it
    const btnProps = {
      className: classes,
      ...rest,
    }

    return (
      <Component
        { ...btnProps }
        type={ Component === 'button' ? type : null }
      >
        {
          icon && (
          <span className={ cls.iconWrapper }>
            {icon}
          </span>
          )
        }
        {
          isLoading && <UikLoaderDots className={ cls.loader } />
        }
        <span className={ classnames(cls.content, contentClassName) }>
          {children}
        </span>
      </Component>
    )
  }
}
