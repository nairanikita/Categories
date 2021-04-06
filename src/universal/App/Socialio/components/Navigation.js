import * as React from 'react'
import { NavLink } from 'react-router-dom'

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavLink,
  UikNavPanel,
} from '@components'


import menuLinks from '../assets/menuLinks'
import menuFavourites from '../assets/menuFavourites'


const SocialNavigation = () => (
  <UikNavPanel>
    <UikNavSection>
      <UikNavSectionTitle>
            Menu
      </UikNavSectionTitle>
      {
        menuLinks.map(({ count, ...link }) => (
          <UikNavLink
            key={ link.text }
            Component={ NavLink }
            highlighted
            rightEl={
              count ? (
                <span>
                  {count}
                </span>
              ) : null
            }
            { ...link }
            to={ `/social${link.to}` }
          >
            {link.text}
          </UikNavLink>
        ))
      }
    </UikNavSection>
    <UikNavSection>
      <UikNavSectionTitle>
            Your Favourites
      </UikNavSectionTitle>
      {
        menuFavourites.map(({ count, ...link }) => (
          <UikNavLink
            key={ link.text }
            highlighted
            { ...link }
          >
            {link.text}
          </UikNavLink>
        ))
      }
    </UikNavSection>
  </UikNavPanel>
)

export default SocialNavigation
