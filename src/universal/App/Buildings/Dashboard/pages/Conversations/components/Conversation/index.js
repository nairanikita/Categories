import * as React from 'react'
import moment from 'moment'
import { withRouter, Link } from 'react-router-dom'
import * as images from '@exampleAssets'


/* eslint-disable max-len */


import {
  Uikon,
  UikButton,
  UikMessageContainer,
  UikMessageBubble,
  UikMessageImageContainer,
  UikMessageImage,
  UikAvatar,
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikDivider,
  UikMessageSender,
  UikContainerVertical,
} from '@components'


import cls from '../../buildings-conversation.scss'

import conversationList from '../../assets/conversationList'


// @flow


class BuildingsDashboard extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    const el = this.messagesScrollRef
    if (this.messagesScrollRef) {
      el.scrollTop = Number.MAX_SAFE_INTEGER
    }
  }

  render() {
    const { match: { params: { conversation_id } } } = this.props

    const flattenConversations = conversationList.reduce((all, next) => ([
      ...all,
      ...next.conversations,
    ]), [])

    const activeConversation = flattenConversations.find(item => `${item.id}` === `${conversation_id}`)

    const isConversation = !!conversation_id

    return (
      <UikContainerVertical>
        {
          !isConversation ? (
            <div className={ cls.emptyConversation }>
              <h2>Select conversation to display</h2>
            </div>
          ) : (
            <React.Fragment>
              <UikTopBar>
                <UikTopBarSection>
                  <UikTopBarTitle>
                    <UikButton
                      className={ cls.conversationBack }
                      clear
                      Component={ Link }
                      icon={ <Uikon>arrow_left</Uikon> }
                      iconOnly
                      to="/buildings/conversations"
                    />
                    {activeConversation.name}

                  </UikTopBarTitle>
                </UikTopBarSection>
                <div className={ cls.conversationActions }>
                  <UikTopBarSection className={ cls.conversationAvatars }>
                    {
                      activeConversation.users.map((u, index) => (
                        <UikAvatar
                          key={ index } // eslint-disable-line
                          size="small"
                          { ...u }
                        />
                      ))
                    }
                  </UikTopBarSection>
                  <UikDivider direction="vertical" />
                  <UikTopBarSection>
                    <UikButton
                      clear
                      icon={ <Uikon>phone_two</Uikon> }
                      iconOnly
                    />
                    <UikButton
                      clear
                      icon={ <Uikon>video_camera</Uikon> }
                      iconOnly
                    />
                    <UikButton
                      clear
                      icon={ <Uikon>settings</Uikon> }
                      iconOnly
                    />
                  </UikTopBarSection>
                </div>
              </UikTopBar>
              <div
                ref={ (e) => { this.messagesScrollRef = e } }
                className={ cls.messagesWrapper }
              >
                <div className={ cls.messages }>
                  <UikMessageContainer position="right">
                    <UikMessageSender
                      time={ moment().subtract(60 * 39, 'seconds').calendar() }
                    >
                      <UikAvatar
                        highlighted
                        imgUrl={ images.a01 }
                        name="Norman Hernandez"
                        size="small"
                      />
                    </UikMessageSender>
                    <UikMessageBubble position="right">
                  I always think teenagers must hate my place as there is nothing to do but relax and enjoy the sea view and sunsets and read books which is not a very teenagery thing to do (my idea of paradise when I was a teen though). No shops or even a park to hang out in. I had one lady stay with her young daughter who wanted to come back at Xmas for a month with husband and teenage daughter from over 1500km away but the teen nixed it as the oldest girls who live here are only about 10.
                    </UikMessageBubble>
                  </UikMessageContainer>
                  <UikMessageContainer position="left">
                    <UikMessageSender
                      time={ moment().subtract(60 * 39, 'seconds').calendar() }
                    >
                      <UikAvatar
                        highlighted
                        imgUrl={ images.a12 }
                        name="Carolyn Chandler"
                        size="small"
                      />
                    </UikMessageSender>
                <UikMessageBubble position="left"> {/* eslint-disable-line */}
                  Hey y’all! We own Hidden Lake Forest which is in a private lake community. We wanted to see how others handle a waiver of liability to use of Kayaks, boats, swimming. 🛶🏖
                </UikMessageBubble>
                <UikMessageBubble position="left"> {/* eslint-disable-line */}
                  Btw want some chicken?
                </UikMessageBubble>
                  </UikMessageContainer>
                  <UikMessageContainer position="right">
                    <UikMessageSender
                      time={ moment().subtract(60 * 39, 'seconds').calendar() }
                    >
                      <UikAvatar
                        highlighted
                        imgUrl={ images.a01 }
                        name="Norman Hernandez"
                        size="small"
                      />
                    </UikMessageSender>
                <UikMessageBubble position="right">{/* eslint-disable-line */}
                    Had considered making kayak available but 🤦🏻‍♂️
                  <br />

                    - will make people stay beyond checkout if they use them, then want to change, shower etc :(
                  <br />
                    - if they get in trouble, you know who they will call...
                  <br />
                    - adds more work, need to brief guests on what to do, where to go, life jackets in different sizes blah blah 😅
                  <br />
                </UikMessageBubble>
                    <UikMessageImageContainer>
                      <UikMessageImage imgUrl={ images.b11 } />
                      <UikMessageImage imgUrl={ images.b03 } />
                      <UikMessageImage imgUrl={ images.b04 } />
                      <UikMessageImage imgUrl={ images.b09 } />
                    </UikMessageImageContainer>
                  </UikMessageContainer>
                  <UikMessageContainer position="left">
                    <UikMessageSender
                      time={ moment().subtract(60 * 39, 'seconds').calendar() }
                    >
                      <UikAvatar
                        highlighted
                        imgUrl={ images.a05 }
                        name="Callie Greene"
                        size="small"
                      />
                    </UikMessageSender>
                <UikMessageBubble position="left"> {/* eslint-disable-line */}
                  We have lake-front vacation rentals. No specific liability waiver for that, but house rules stipulate risks, we assume no liability, etc. We also offer SUP/kayaks; each guest must e-sign liability waiver to get access to those. We also stock PFDs in all sizes for guests. 💁🏻‍♂️
                </UikMessageBubble>
                  </UikMessageContainer>
                </div>
              </div>
              <div className={ cls.textBar }>
                <textarea
                  placeholder="New message..."
                  rows="1"
                />
                <div className={ cls.textBarActions }>
                  <UikButton
                    clear
                    icon={ <Uikon>picture</Uikon> }
                    iconOnly
                  />
                  <UikButton
                    clear
                    icon={ <Uikon>attachment</Uikon> }
                    iconOnly
                  />
                  <UikButton
                    clear
                    icon={ <Uikon>smile</Uikon> }
                    iconOnly
                  />
                </div>
              </div>
            </React.Fragment>
          )
        }

      </UikContainerVertical>
    )
  }
}

export default withRouter(BuildingsDashboard)
