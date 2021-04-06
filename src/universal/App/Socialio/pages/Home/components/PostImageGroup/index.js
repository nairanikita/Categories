import * as React from 'react'
import { Link } from 'react-router-dom'

import * as images from '@exampleAssets'

import cls from './social-post-image-group.scss'

const SocialPostImageGroup = () => (
  <div
    className={ cls.wrapper }
  >
    <Link
      className={ cls.photo }
      style={ {
        backgroundImage: `url(${images.s01})`,
      } }
      to="#"
    />
    <Link
      className={ cls.photo }
      style={ {
        backgroundImage: `url(${images.s02})`,
      } }
      to="#"
    />
    <Link
      className={ cls.photo }
      style={ {
        backgroundImage: `url(${images.s03})`,
      } }
      to="#"
    />
  </div>
)

export default SocialPostImageGroup
