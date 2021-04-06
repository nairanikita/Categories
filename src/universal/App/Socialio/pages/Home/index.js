import * as React from 'react'

import {
  UikContainerHorizontal,
  UikScrollArea,
  UikWidget,
  UikWidgetHeader,
  UikDivider,
  UikButton,
  Uikon,
  UikDropdown,
  UikDropdownItem,
  UikAvatar,
} from '@components'

import * as images from '@exampleAssets'

import PostCreate from './components/PostCreate'
import PostHeader from './components/PostHeader'
import PostWrapper from './components/PostWrapper'
import PostImageGroup from './components/PostImageGroup'
import PostActions from './components/PostActions'
import PostCommentWrite from './components/PostCommentWrite'
import Stories from './components/Stories'

import cls from './social-home.scss'


const SocialProfile = () => (
  <UikContainerHorizontal className={ cls.page }>
    <UikScrollArea className={ cls.mainContent }>
      <PostCreate />
      <PostWrapper>
        <PostHeader />
        <p>Travelling to the future, it’s already December 2018 here! 💁🏼🙋🏻‍♂️</p> {/* eslint-disable-line */}
        <PostImageGroup />
        <UikDivider />
        <PostActions />
        <UikDivider />
        <PostCommentWrite />
      </PostWrapper>
      <PostWrapper>
        <PostHeader />
        <p>At the end of your life you’ll always regret the stuff what you didn’t do more than the stuff you did. And that's deep.</p> {/* eslint-disable-line */}
        <UikDivider />
        <PostActions />
        <UikDivider />
        <PostCommentWrite />
      </PostWrapper>
    </UikScrollArea>
    <UikScrollArea className={ cls.extraContent }>
      <UikWidget margin>
        <UikWidgetHeader
          className={ cls.smallWidgetHeader }
          rightEl={ (
            <UikDropdown
              DisplayComponent={
            props => (
              <UikButton
                clear
                icon={ <Uikon>more</Uikon> }
                iconOnly
                { ...props }
              />
            )
          }
              position="bottomRight"
            >
              <UikDropdownItem>
              Edit
              </UikDropdownItem>
              <UikDropdownItem>
              Delete
              </UikDropdownItem>
            </UikDropdown>
        ) }
        >
          Stories
        </UikWidgetHeader>
        <Stories />
      </UikWidget>
      <UikWidget
        className={ cls.eventsWidget }
        margin
      >
        <UikButton
          clear
          icon={ <Uikon>calendar</Uikon> }
        >
          <strong className={ cls.eventText }>5 Event Invites</strong>
        </UikButton>
        <UikButton
          clear
          icon={ <Uikon>calendar</Uikon> }
        >
          <strong className={ cls.eventText }>Noah Frank</strong>
          {'\'s birthday'}
        </UikButton>
      </UikWidget>

      <UikWidget margin>
        <UikWidgetHeader
          className={ cls.smallWidgetHeader }
          rightEl={ (
            <UikDropdown
              DisplayComponent={
            props => (
              <UikButton
                clear
                icon={ <Uikon>more</Uikon> }
                iconOnly
                { ...props }
              />
            )
          }
              position="bottomRight"
            >
              <UikDropdownItem>
              Edit
              </UikDropdownItem>
              <UikDropdownItem>
              Delete
              </UikDropdownItem>
            </UikDropdown>
        ) }
        >
          Suggested Page
        </UikWidgetHeader>
        <div style={ { padding: '20px' } }>
          <UikAvatar
            imgUrl={ images.s05 }
            name="Chilli Burgers"
            textBottom="Restaurant"
          />
          <div
            className={ cls.suggestedPage }
            style={ { backgroundImage: `url("${images.s04}")` } }
          />
        </div>
        <div className={ cls.suggestedCta }>
          <UikButton
            clear
            icon={ <Uikon>love</Uikon> }
          >
            <strong>Like Page</strong>

          </UikButton>
        </div>
      </UikWidget>
    </UikScrollArea>


  </UikContainerHorizontal>
)

export default SocialProfile
