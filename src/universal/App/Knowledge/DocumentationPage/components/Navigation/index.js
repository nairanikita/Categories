import * as React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

/* eslint-disable max-len */

import {
  UikNavSection,
  UikNavLink,
  UikNavLinkSecondary,
  UikNavPanel,
} from '@components'


import cls from './docs-navigation.scss'

import menuLinks from '../../assets/menuLinks'

// @flow
const KnowledgeDocumentationPage = ({
  isMenuOpen,
}: {
  isMenuOpen: Boolean
}) => (
  <UikNavPanel className={ classnames(cls.wrapper, {
    [cls.open]: isMenuOpen,
  }) }
  >
    <UikNavSection>
      {
        menuLinks.map(link => (
          <React.Fragment key={ link.text }>
            <UikNavLink
              key={ link.text }
              className={ link.text === 'Collections' ? 'active' : null }
              highlighted
            >
              {link.text}
            </UikNavLink>
            {
              link.items && link.items.map(subLink => (
                <UikNavLinkSecondary
                  key={ subLink.text }
                  highlighted={ subLink.text === 'Model' ? 'active' : null }
                >
                  {subLink.text}
                </UikNavLinkSecondary>
              ))
            }
          </React.Fragment>
        ))
      }
    </UikNavSection>
  </UikNavPanel>
)

export default connect(
  store => ({
    isMenuOpen: store.docs.isMenuOpen,
  }),
)(KnowledgeDocumentationPage)
