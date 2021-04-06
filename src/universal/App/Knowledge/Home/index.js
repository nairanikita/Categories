import * as React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import {
  UikHeadline,
  UikHeadlineDesc,
  UikWidgetHeader,
  UikWidget,
  UikWidgetBottomCta,
  UikWidgetLink,
  UikWidgetVideoPreview,
  UikWidgetVideoPreviewContainer,

  UikKnowledgeTopic,

  UikContainerVertical,
  UikContainerHorizontal,
  UikContent,
  UikLayoutMain,
} from '@components'

// components
import Header from '../components/Header'

import cls from './knowledge-home.scss'


// data
import topics from './assets/topics'
import sidebarNavigation from './assets/sidebarNavigation'
import sidebarVideos from './assets/sidebarVideos'

// @flow
const KnowledgeHome = ({
  isMenuOpen,
}: {
  isMenuOpen: Boolean
}) => (
  <UikContainerVertical>
    <Header />
    <UikContainerHorizontal>
      <UikLayoutMain
        className={ cls.content }
        contentCenter
      >
        <div>
          <UikContent>
            <UikHeadline>
              Knowledge Documentation
            </UikHeadline>
            <UikHeadlineDesc>
              Home / All Tutorials
            </UikHeadlineDesc>
          </UikContent>
          {
            topics.map(item => (
              <UikContent key={ item.title }>
                <UikKnowledgeTopic
                  key={ item.title }
                  { ...item }
                />
              </UikContent>
            ))
          }
        </div>
        <div className={ classnames(cls.menuWrapper, {
          [cls.open]: isMenuOpen,
        }) }
        >
          <UikContent>
            <UikWidget>
              <UikWidgetHeader>
              Navigation
              </UikWidgetHeader>
              {
              sidebarNavigation.map(item => (
                <UikWidgetLink
                  key={ item.title }
                  { ...item }
                />
              ))
            }
            </UikWidget>
          </UikContent>
          <UikContent>
            <UikWidget>
              <UikWidgetHeader>
              Popular Video Tutorials
              </UikWidgetHeader>
              <UikWidgetVideoPreviewContainer>
                {
                sidebarVideos.map(item => (
                  <UikWidgetVideoPreview
                    key={ item.title }
                    { ...item }
                  />
                ))
              }
              </UikWidgetVideoPreviewContainer>
              <UikWidgetBottomCta>
              View All Videos
              </UikWidgetBottomCta>
            </UikWidget>
          </UikContent>
        </div>
      </UikLayoutMain>
    </UikContainerHorizontal>
  </UikContainerVertical>
)

export default connect(
  store => ({
    isMenuOpen: store.docs.isMenuOpen,
  }),
)(KnowledgeHome)
