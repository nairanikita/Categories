import * as React from 'react'

import {
  UikButton,
  Uikon,
} from '@components'

import cls from './social-post-actions.scss'

const SocialPostActions = () => (
  <div className={ cls.btns }>
    <UikButton
      icon={ <Uikon>love</Uikon> }
      transparent
    >
        Like
    </UikButton>
    <UikButton
      icon={ <Uikon>message_2</Uikon> }
      transparent
    >
        Comment
    </UikButton>
    <UikButton
      className={ cls.hide }
      icon={ <Uikon>send_round</Uikon> }
      transparent
    >
        Share
    </UikButton>
  </div>
)

export default SocialPostActions
