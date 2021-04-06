import * as React from 'react'

import * as images from '@exampleAssets'

import {
  Uikon,
  UikAvatar,
} from '@components'

import cls from './social-post-create.scss'

const SocialPostWriteComment = () => (
  <div className={ cls.message }>
    <UikAvatar imgUrl={ images.a02 } />
    <textarea
      placeholder="Write a comment..."
      rows="1"
    />
    <div className={ cls.actions }>
      <Uikon>camera</Uikon>
      <Uikon>smile</Uikon>
    </div>
  </div>
)

export default SocialPostWriteComment
