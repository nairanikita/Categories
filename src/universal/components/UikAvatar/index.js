import * as React from 'react'
import classnames from 'classnames'
// @flow

import UikAvatarStatus from './UikAvatarStatus'
import UikAvatarImage from './UikAvatarImage'

import cls from './avatar.scss'

type UikAvatarPlaceholderProps = {
  content?: React.Node,
  color?: 'green' | 'blue' | 'orange' | 'violet' | 'red',
}

export type UikAvatarProps = {
  Component?: React.ElementType,
  className?: String,
  name?: React.Node,
  status?: React.Node,
  imgUrl?: String | Array<String>,
  textTop?: String,
  avatarPlaceholder?: UikAvatarPlaceholderProps,
  highlighted?: Boolean,
  textBottom?: React.Node,
  actionIcon?: React.Node,
  size?: 'small' | 'large' | 'larger' | 'extraLarge' | 'jumbo',
}

const UikAvatar = ({
  name,
  imgUrl,
  avatarPlaceholder,
  textTop,
  className,
  highlighted,
  actionIcon,
  status,
  size,
  textBottom,
  Component,
  ...rest
}: UikAvatarProps) => (
  <Component
    className={ classnames(cls.wrapper, className, {
      [cls.highlighted]: highlighted,
      [cls[size]]: size,
    }) }
    { ...rest }
  >
    <div className={ classnames(cls.avatarWrapper) }>
      {
      imgUrl ? (
        <UikAvatarImage
          className={ cls.avatar }
          imgUrl={ imgUrl }
        />
      ) : (

        <div className={ classnames(cls.avatarPlaceholder, {
          [avatarPlaceholder.color]: avatarPlaceholder.color,
        }) }
        >
          {avatarPlaceholder.content}
        </div>
      )
    }
      {
      actionIcon && (
        <div className={ cls.avatarAction }>
          {actionIcon}
        </div>
      )
    }
    </div>
    {
      (name || textTop || textBottom) && (
        <div className={ cls.info }>
          {textTop && (
            <div className={ cls.textTop }>
              {textTop}
            </div>
          )}
          {name && (
          <div className={ cls.name }>
            {name}
          </div>
          )}
          {textBottom && (
            <div className={ cls.textBottom }>
              {textBottom}
            </div>
          )}
        </div>
      )
    }
    {
      status && (
        <UikAvatarStatus status={ status } />
      )
    }
  </Component>
)

UikAvatar.defaultProps = {
  className: null,
  name: null,
  textTop: null,
  actionIcon: null,
  highlighted: false,
  avatarPlaceholder: {},
  status: null,
  imgUrl: null,
  size: null,
  textBottom: null,
  Component: 'div',
}

export default UikAvatar
