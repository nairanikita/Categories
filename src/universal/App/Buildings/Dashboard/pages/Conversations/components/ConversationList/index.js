import * as React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

/* eslint-disable max-len */


import {
  UikContentTitle,
  UikAvatar,
  UikTabContainer,
  UikTabItem,
  UikTopBar,
  UikStatusDot,
  UikContainerVertical,
  UikScrollArea,
} from '@components'


import cls from '../../buildings-conversation.scss'

import conversationList from '../../assets/conversationList'


// @flow


class BuildingsDashboard extends React.Component {
  render() {
    return (
      <UikContainerVertical className={ cls.conversations }>
        <UikTopBar>
          <UikTabContainer>
            <UikTabItem active>All Conversations</UikTabItem>
            <UikTabItem>Archived</UikTabItem>
            <UikTabItem>Starred</UikTabItem>
          </UikTabContainer>
        </UikTopBar>
        <UikScrollArea className={ cls.conversationList }>
          {
              conversationList.map(section => (
                <React.Fragment key={ section.title }>

                  <UikContentTitle className={ cls.conversationSectionTitle }>{section.title}</UikContentTitle>
                  {
                    section.conversations.map(item => (
                      <NavLink
                        key={ item.name }
                        className={ cls.conversationListItem }
                        to={ `/buildings/conversations/${item.id}` }
                      >
                        <div className={ cls.avatars }>
                          {
                            item.users.slice(0, 2).map((u, index) => (
                              <UikAvatar
                                key={ index } // eslint-disable-line
                                { ...u }
                              />
                            ))
                          }
                        </div>
                        <div className={ cls.content }>
                          <div className={ cls.contentHeader }>
                            <h3 className={ cls.title }>
                              <span>{item.name}</span>
                              {
                                item.status === 'online' ? <UikStatusDot /> : null
                              }

                            </h3>
                            <span className={ cls.time }>
                              {
                              moment(item.last_message.time).calendar()
                            }
                            </span>
                          </div>
                          <div className={ cls.contentCenter }>
                            <p className={ cls.message }>
                              {item.last_message.message}
                            </p>
                            {
                              item.notification ? (
                                <span className={ cls.notification }>{ item.notification}</span>
                              ) : null
                            }
                          </div>
                          {
                            item.building ? (
                              <div className={ cls.contentBottom }>
                                <div
                                  className={ cls.buildingImage }
                                  style={ {// eslint-disable-line
                                    backgroundImage: `url(${item.building.imgUrl})`, // eslint-disable-line
                                  } }// eslint-disable-line
                                />
                                <span className={ cls.buildingName }>{item.building.name}</span>
                              </div>
                            ) : null
                          }
                        </div>
                      </NavLink>
                    ))
                  }
                </React.Fragment>
              ))
            }
        </UikScrollArea>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
