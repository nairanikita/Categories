import * as React from 'react'

import {
  UikWidget,
  UikEmojiHeadline,
  // tutorial
  UikTutorialListItem,
  UikTutorialList,
  UikContainerVertical,
  UikContainerHorizontal,
  UikLayoutMain,
} from '@components'


import tutorials from './assets/tutorials'


const TutorialsHome = () => (
  <UikContainerVertical>
    <UikContainerHorizontal>
      <UikLayoutMain>
        <UikEmojiHeadline
          description="Step-by-step instruction to help you develop new design skills."
          emoji="🏃🏻"
          title="Animations Tutorials"
        />
        <UikTutorialList>
          {
            tutorials.map(item => (
              <UikTutorialListItem
                key={ item.imgUrl }
                Component={ UikWidget }
                margin
                { ...item }
              />
            ))
          }
        </UikTutorialList>
      </UikLayoutMain>
    </UikContainerHorizontal>
  </UikContainerVertical>
)

export default TutorialsHome
