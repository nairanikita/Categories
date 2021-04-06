/* eslint-disable max-len */
import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
import classnames from 'classnames'
import * as images from '@exampleAssets'

import {
  UikNavSection,
  UikNavLinkDark,
  UikNavSectionTitle,
  UikAvatar,
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  Uikon,
  UikNavPanel,
  UikContainerVertical,
  UikScrollArea,
} from '@components'

import cls from './buildings-navigation.scss'

const menuLinks = [
  {
    text: 'Dashboard',
    to: 'dashboard',
    exact: true,
    strict: true,
  },
  {
    text: 'Buildings',
    to: 'listing',
  },
  {
    text: 'Posts',
    to: 'posts',
  },
  {
    text: 'Conversations',
    to: 'conversations',
    count: 2,
  },
  {
    text: 'Amenities',
    to: 'amenities',
  },
  {
    text: 'Tenants',
    to: 'tenants',
  },
  {
    text: 'Performance',
    to: 'performance',
  },
  {
    text: 'Users',
    to: 'users',
  },
]

const supportLinks = [
  {
    text: 'Need Help?',
    to: 'help',
  },
  {
    text: 'Contact Us',
    to: 'contact',
  },
  {
    text: 'Knowledge Base',
    to: 'knowledge-base',
  },
]
// @flow
type BuildingsNavigationProps = {
  className?: ?String
}

const BuildingsNavigation = ({
  className,
}: BuildingsNavigationProps) => (
  <UikNavPanel className={ classnames(cls.wrapper, className) }>
    <UikContainerVertical>

      <UikTopBar className={ cls.topBar }>
        <UikTopBarSection>
          <UikTopBarTitle className={ cls.title }>
            <Uikon>
              building
            </Uikon>
            <span className={ cls.titleText }>
              Buildings
            </span>
          </UikTopBarTitle>

        </UikTopBarSection>
      </UikTopBar>

      <UikScrollArea className={ cls.content }>
        <UikNavSection>
          <UikNavSectionTitle>
            Menu
          </UikNavSectionTitle>
          {
            menuLinks.map(({
              to,
              count,
              text,
              ...rest
            }) => (
              <UikNavLinkDark
                key={ to }
                Component={ NavLink }
                rightEl={
                  count ? (
                    <span className={ cls.navCount }>
                      {count}
                    </span>
                  ) : null
                }
                to={ `/buildings/${to}` }
                { ...rest }
              >
                {text}
              </UikNavLinkDark>
            ))
          }
        </UikNavSection>
        <UikNavSection>
          <UikNavSectionTitle>
            Support
          </UikNavSectionTitle>
          {
            supportLinks.map(link => (
              <UikNavLinkDark
                key={ link.to }
                Component={ NavLink }
                to={ `/buildings/${link.to}` }
              >
                {link.text}
              </UikNavLinkDark>
            ))
          }
        </UikNavSection>
      </UikScrollArea>
      <Link
        className={ cls.userContainer }
        to="/buildings/user/settings"
      >
        <UikAvatar
          imgUrl={ images.a07 }
          name={ <span className={ cls.avatarName }>Kara Johnson</span> }
          textBottom="HR Specialist"
        />
        <Uikon className={ cls.dropdownIcon }>dropdown_arrow</Uikon>
      </Link>
      <div className={ cls.aboutAppContainer }>
        <div className={ cls.copyright }>
          © Buildings Ltd. 2018
        </div>
        <div className={ cls.copyAbout }>
          Created with love for the environment. By designers and develodivers who love to work together in offices!
        </div>
      </div>
    </UikContainerVertical>
  </UikNavPanel>

)

BuildingsNavigation.defaultProps = {
  className: null,
}

export default BuildingsNavigation
