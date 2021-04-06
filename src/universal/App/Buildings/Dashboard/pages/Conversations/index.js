import * as React from 'react'
import classnames from 'classnames'

/* eslint-disable max-len */


import {
  UikContainerVertical,
  UikContainerHorizontal,
} from '@components'


import TopBar from './components/TopBar'

import cls from './buildings-conversation.scss'


import Conversation from './components/Conversation'
import ConversationList from './components/ConversationList'


// @flow


class BuildingsDashboard extends React.Component<{
  match: Object,
}> {
  render() {
    const { match: { params: { conversation_id } } } = this.props
    const isConversation = !!conversation_id

    return (
      <UikContainerVertical className={ cls.page }>
        <TopBar />
        <UikContainerHorizontal className={ classnames(cls.container, {
          [cls.containerActiveConversation]: isConversation,
        }) }
        >
          <ConversationList />
          <Conversation />
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
