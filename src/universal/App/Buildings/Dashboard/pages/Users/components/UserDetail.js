import * as React from 'react'
import * as images from '@exampleAssets'
import { withRouter, Link } from 'react-router-dom'


/* eslint-disable max-len */


import {
  UikDivider,
  UikContentTitle,
  UikScrollArea,
  Uikon,
  UikonText,
  UikAvatar,
  UikStatusDot,
  UikTag,
  UikTagContainer,
  UikButton,
} from '@components'


import cls from '../buildings-users.scss'

import buildings from '../assets/buildings'
import teams from '../assets/teams'
import users from '../assets/users'
// @flow

class BuildingsDashboard extends React.Component<{
  match: Object,
}> {
  render() {
    const { match: { params: { user_id } } } = this.props

    const flattenUsers = users.reduce((all, next) => ([
      ...all,
      ...next.users,
    ]), [])

    const activeUser = flattenUsers.find(item => `${item.id}` === `${user_id}`)

    const isDetail = !!user_id

    return (
      <UikScrollArea className={ cls.detail }>
        {
          !isDetail ? (

            <div className={ cls.emptyDetail }>
              <h2>Select user to display details</h2>
            </div>
          ) : (
            <React.Fragment>
              <UikButton
                className={ cls.userBack }
                clear
                Component={ Link }
                icon={ <Uikon>arrow_left</Uikon> }
                iconOnly
                to="/buildings/users"
              />
              <UikAvatar
                highlighted
                imgUrl={ activeUser.imgUrl }
                name={ (
                  <React.Fragment>
                    {activeUser.name}
                    <UikStatusDot className={ cls.statusDot } />
                  </React.Fragment>) }
                size="jumbo"
                textBottom={ (
                  <React.Fragment>
                    {activeUser.textBottom}
                    <div className={ cls.detailReviews }>
                      <span className={ cls.reviewsCount }>9</span>
                      {' Reviews'}
                    </div>
                  </React.Fragment>
              ) }
              />
              <div className={ cls.basicsWrapper }>
                <UikContentTitle>
                Basic Details
                </UikContentTitle>
                <div className={ cls.basics }>
                  <UikonText
                    icon={ <Uikon>message_2</Uikon> }
                    textHighlight
                  >
                me@angenewton.co
                  </UikonText>
                  <UikonText
                    icon={ <Uikon>phone</Uikon> }
                    textHighlight
                  >
                +44 (0) 7887 665 221
                  </UikonText>
                  <UikonText
                    icon={ <Uikon>pin_rounded_circle</Uikon> }
                    textHighlight
                  >
                United Kingdom
                  </UikonText>
                </div>

              </div>
              <div className={ cls.bioWrapper }>
                <UikContentTitle>
                Bio
                </UikContentTitle>
                <p>
                Working in automotive quality management for over 3 years. A passionate traveller, loves to spend time with her dog. Wine taster. Biggest dream is to travel the world with all the money I make from renting building to my dearest customers who pay well.
                </p>
              </div>
              <div className={ cls.tagsWrapper }>
                <UikContentTitle>
                Tags
                </UikContentTitle>
                <UikTagContainer className={ cls.tags }>
                  <UikTag
                    color="green"
                    fill
                  >
                  Office Management
                  </UikTag>
                  <UikTag
                    color="orange"
                    fill
                  >
                  Design
                  </UikTag>
                  <UikTag
                    color="blue"
                    fill
                  >
                  Developer
                  </UikTag>
                </UikTagContainer>
              </div>
              <UikDivider margin />
              <div className={ cls.associated }>
                <div className={ cls.sectionHeader }>
                  <UikContentTitle>
                  Associated with buildings (45)
                  </UikContentTitle>
                  <span className={ cls.seeAll }>See All</span>
                </div>
                <div className={ cls.assocBuildingsList }>
                  {
                  buildings.map(b => (
                    <div className={ cls.assocBuilding }>
                      <div
                        className={ cls.image }
                        style={ { backgroundImage: `url(${b.imgUrl})` } }
                      />
                      <h5 className={ cls.title }>{b.name}</h5>
                      <p className={ cls.location }>{b.location}</p>
                    </div>
                  ))
                }
                </div>
              </div>
              <UikDivider margin />
              <div>
                <div className={ cls.sectionHeader }>
                  <UikContentTitle>
                  Member of teams (5)
                  </UikContentTitle>
                  <span className={ cls.seeAll }>See All</span>
                </div>
                <div className={ cls.teams }>
                  {
                  teams.map(t => (
                    <div className={ cls.team }>
                      <div
                        className={ cls.image }
                        style={ { backgroundImage: `url(${t.imgUrl})` } }
                      />
                      <div className={ cls.content }>
                        {
                          t.isOwner && (

                          <UikTag
                            color="white"
                            fill
                          >
                            OWNER
                          </UikTag>
                          )
                        }
                        <h5 className={ cls.title }>{t.name}</h5>
                        <p className={ cls.membersCount }>
                          {t.membersCount}
                          {' members'}
                        </p>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
              <UikDivider margin />
              <div>
                <div className={ cls.sectionHeader }>
                  <UikContentTitle>
                  Reviews (18)
                  </UikContentTitle>
                  <span className={ cls.seeAll }>See All</span>
                </div>

                <UikAvatar
                  highlighted
                  imgUrl={ images.a02 }
                  name="Alice Townsend"
                  textBottom="I've had the pleasure to work with Angelina on a number of projects requiring quality check. It's not easy communicating project requirements, especially aesthetics, when your design work is being done remotely. "
                />
              </div>
            </React.Fragment>
          )
        }
      </UikScrollArea>
    )
  }
}

export default withRouter(BuildingsDashboard)
