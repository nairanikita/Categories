import * as React from 'react'

import * as images from '@exampleAssets'

import {
  UikWidget,
  UikButton,
  Uikon,
  UikDivider,
  UikAvatar,
} from '@components'

import cls from './social-post-create.scss'

const SocialPostCreate = () => (
  <UikWidget margin>
    <div className={ cls.btns }>
      <UikButton
        icon={ <Uikon className={ cls.iconPost }>building</Uikon> }
        transparent
      >
        <span className={ cls.actionDesc }>Make Post</span>
      </UikButton>
      <UikButton
        icon={ <Uikon className={ cls.iconPhoto }>camera</Uikon> }
        transparent
      >
        <span className={ cls.actionDesc }>Photo/Video Album</span>
      </UikButton>
      <UikButton
        icon={ <Uikon className={ cls.iconCamera }>video_camera</Uikon> }
        transparent
      >
        <span className={ cls.actionDesc }>Live Video</span>
      </UikButton>
    </div>
    <UikDivider />
    <div className={ cls.message }>
      <UikAvatar imgUrl={ images.a02 } />
      <textarea
        placeholder="Where you at? What are you doing? What’s your number? Share it!"
        rows="2"
      />
    </div>
    <div className={ cls.footer }>

      <UikButton
        icon={ <Uikon className={ cls.iconPhoto }>camera</Uikon> }
        transparent
      >
        Photo/Video
      </UikButton>
      <UikButton
        icon={ <Uikon className={ cls.iconPhoto }>smile</Uikon> }
        transparent
      >
        Feeling/Activity
      </UikButton>
    </div>
  </UikWidget>
)

export default SocialPostCreate
