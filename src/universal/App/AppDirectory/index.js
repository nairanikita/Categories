import * as React from 'react'
import { Link } from 'react-router-dom'
// @flow
import {
  UikWidget,
  UikButton,
  Uikon,
  UikContainerVertical,
  UikContainerHorizontal,
  UikLayoutMain,
} from '@components'

import Header from './components/Header'

import cls from './app-directory.scss'


import * as images from './assets'


const screens = [
  {
    title: 'Social Network Conceptual App',
    hasMore: true,
    screens: [
      {
        text: 'Homefeed',
        to: '/social',
        imgUrl: images.sHome,
        isNew: true,
      },
      {
        text: 'Profile',
        to: '/social/profile',
        imgUrl: images.socialProfile,
      },
      {
        text: 'Events',
        to: '/social/events',
        imgUrl: images.sCalendar,
        isNew: true,
      },
    ],
  },
  {
    title: 'Buildings Conceptual App',
    screens: [
      {
        text: 'Signup',
        to: '/buildings/sign-up',
        imgUrl: images.bsignup,
      },
      {
        text: 'Listing',
        to: '/buildings/listing',
        imgUrl: images.blist,
      },
      {
        text: 'Listing Detail',
        to: '/buildings/listing/1',
        imgUrl: images.bdetail,
        isNew: true,
      },
      {
        text: 'Dashboard',
        to: '/buildings',
        imgUrl: images.bdashboard,
        isNew: true,
      },
      {
        text: 'Performance',
        to: '/buildings/performance',
        imgUrl: images.brevenue,
        isNew: true,
      },
      {
        text: 'User Settings',
        to: '/buildings/user/settings',
        imgUrl: images.bsettings,
        isNew: true,
      },
      {
        text: 'Conversations',
        to: '/buildings/conversations/1',
        imgUrl: images.bconversations,
        isNew: true,
      },
      {
        text: 'Users',
        to: '/buildings/users/1',
        imgUrl: images.bcontacts,
        isNew: true,
      },
    ],
  },
  {
    title: 'Other Screens',
    hasMore: true,
    screens: [
      {
        text: 'Documentation',
        to: '/knowledge/doc',
        imgUrl: images.documentationDetail,
      },
      {
        text: 'Helpdesk',
        to: '/knowledge',
        imgUrl: images.documentationListHelp,
      },
      {
        text: 'Tutorials',
        to: '/tutorials',
        imgUrl: images.tutorials,
      },
      {
        text: 'Analytics',
        to: '/analytics',
        imgUrl: images.analytics,
      },
    ],
  },
]

const Item = ({ item }: { item: Object }) => (

  <UikWidget
    key={ item.to }
    className={ cls.itemWrapper }
    Component={ Link }
    margin
    to={ item.to }
  >
    {
      item.isNew && (
        <div className={ cls.new }>
          NEW
        </div>
      )
    }
    <span className={ cls.previewText }>
      {item.text}
    </span>
    <img
      alt={ item.text }
      className={ cls.imagePreview }
      src={ item.imgUrl }
    />
  </UikWidget>
)

export default class AppDirectory extends React.PureComponent {
  render() {
    const totalScreens = screens.reduce((all, next) => ([
      ...all,
      ...next.screens,
    ]), []).length
    return (
      <UikContainerVertical>
        <Header />
        <UikContainerHorizontal>
          <UikLayoutMain
            className={ cls.wrapper }
            contentCenter
          >
            <h1>
              Screen Previews
            </h1>
            <p>
              <span className={ cls.screenCount }>{totalScreens}</span>
              {' '}
prebuilt screens. Written in React with minimum dependencies and seamless integration. More than
              {' '}
              <Link to="/docs/react">
70 components
              </Link>
              {' '}
available in a lightweight bundle (23kb Js+CSS gziped).
              <br />
              <br />
              <UikButton
                className={ cls.btnBuy }
                Component="a"
                href="https://janlosert.com/store/dashboard-ui-kit-3.html?from=preview"
                icon={ (
                  <Uikon>
              rocket
                  </Uikon>
          ) }
                primary
              >
          Download Kit
              </UikButton>
            </p>
            {
              screens.map(category => (
                <React.Fragment key={ category.title }>
                  <h2>
                    {category.title}
                  </h2>
                  <div className={ cls.previewWrapper }>
                    {
                      category.screens.map(item => (
                        <Item
                          key={ item.imgUrl }
                          item={ item }
                        />
                      ))
                    }
                  </div>
                  {
                    category.hasMore && (
                      <p className={ cls.commingSoon }>
                        More coming soon.
                      </p>
                    )
                  }
                </React.Fragment>
              ))
            }
          </UikLayoutMain>
        </UikContainerHorizontal>
      </UikContainerVertical>
    )
  }
}
