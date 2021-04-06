import * as React from 'react'

import {
  UikAvatar,
} from '@components'

import * as images from '@exampleAssets'

import cls from './social-stories.scss'

const SocialStories = () => (
  <div className={ cls.wrapper }>
    <div className={ cls.content }>
      <div
        className={ cls.story }
        style={ {
          backgroundImage: `url("${images.s01}")`,
        } }
      >
        <div
          className={ cls.avatar }
        >
          <UikAvatar
            imgUrl={ images.a07 }
          />
          <span className={ cls.name }>Mario</span>
        </div>
      </div>
      <div
        className={ cls.story }
        style={ {
          backgroundImage: `url("${images.s07}")`,
        } }
      >
        <div
          className={ cls.avatar }
        >
          <UikAvatar
            imgUrl={ images.a19 }
          />
          <span className={ cls.name }>Ralph</span>
        </div>
      </div>
      <div
        className={ cls.story }
        style={ {
          backgroundImage: `url("${images.s06}")`,
        } }
      >
        <div
          className={ cls.avatar }
        >
          <UikAvatar
            imgUrl={ images.a25 }
          />
          <span className={ cls.name }>Ava</span>
        </div>
      </div>
      <div
        className={ cls.story }
        style={ {
          backgroundImage: `url("${images.s02}")`,
        } }
      >
        <div
          className={ cls.avatar }
        >
          <UikAvatar
            imgUrl={ images.a14 }
          />
          <span className={ cls.name }>Jonathan</span>
        </div>
      </div>
    </div>
  </div>
)


export default SocialStories
