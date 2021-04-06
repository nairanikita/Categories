import * as React from 'react'

import { NavLink } from 'react-router-dom'

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavLink,
} from '@components'


import menuLinks from './menuLinks'

import NavigationWrapper from '../../../components/NavigationWrapper'


const DocsMenu = () => (
  <NavigationWrapper>
    <UikNavSection>
      {
        menuLinks.map(section => (
          <React.Fragment key={ section.name }>
            <UikNavSectionTitle>
              {section.name}
            </UikNavSectionTitle>
            {
            section.links.map(link => (

              <UikNavLink
                key={ link.text }
                activeClassName="active"
                Component={ NavLink }
                exact
                highlighted
                rightEl="→"
                to={ `/docs/start${link.to}` }
              >
                {link.text}
              </UikNavLink>
            ))
          }
          </React.Fragment>
        ))
      }
    </UikNavSection>
  </NavigationWrapper>
)

export default DocsMenu
