import * as React from 'react'

import { NavLink } from 'react-router-dom'

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavLink,
} from '@components'


import NavigationWrapper from '../../../components/NavigationWrapper'
import menuLinks from '../../menuLinks'


const DocsMenu = () => (
  <NavigationWrapper>
    {
      menuLinks.map(section => (
        <UikNavSection key={ section.name }>
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
              to={ `/docs/react${link.to}` }
            >
              {link.text}
            </UikNavLink>
          ))
        }
        </UikNavSection>
      ))
    }
  </NavigationWrapper>
)

export default DocsMenu
