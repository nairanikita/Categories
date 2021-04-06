/* hidden when above 1200px */

import * as React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import {
  UikNavSectionTitle,
  UikNavSection,
  UikNavTitle,
  UikNavLink,
  UikCheckbox,
  UikNavPanel,
} from '@components'


import filterLinks from '../../assets/filterLinks'
import filterChecks from '../../assets/filterChecks'

import cls from './tutorials-navigation.scss'

// @flow
const TutorialsNavigation = ({
  isMenuOpen,
}: {
  isMenuOpen: Boolean
}) => (
  <UikNavPanel className={ classnames(cls.wrapper, {
    [cls.isMenuOpen]: isMenuOpen,
  }) }
  >
    <UikNavTitle>
      Filter Tutorials
    </UikNavTitle>
    <UikNavSection>
      <UikNavSectionTitle>
      Topic
      </UikNavSectionTitle>
      {
        filterLinks.map(link => (
          <UikNavLink
            key={ link.text }
            className={ link.text === 'Animations' ? 'active' : null }
            rightEl={ link.rightEl }
          >
            {link.text}
          </UikNavLink>
        ))
      }
    </UikNavSection>
    {
      filterChecks.map(checkData => (

        <UikNavSection key={ checkData.name }>
          <UikNavSectionTitle>
            {checkData.name}
          </UikNavSectionTitle>
          {
            checkData.data.map(label => (
              <UikNavLink
                key={ label }
              >
                <UikCheckbox
                  color="blue"
                  defaultChecked={ label === 'All' }
                  label={ label }
                />
              </UikNavLink>
            ))
          }
        </UikNavSection>
      ))
    }
  </UikNavPanel>
)

export default connect(
  store => ({
    isMenuOpen: store.tutorials.isMenuOpen,
  }),
)(TutorialsNavigation)
