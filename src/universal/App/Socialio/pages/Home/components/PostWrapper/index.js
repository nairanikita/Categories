import * as React from 'react'

import {
  UikWidget,
} from '@components'

import cls from './social-post-post.scss'

const SocialPostHeader = props => (
  <UikWidget
    className={ cls.wrapper }
    margin
    { ...props }
  />
)

export default SocialPostHeader
