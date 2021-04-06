import * as React from 'react'
import { connect } from 'react-redux'

import {
  UikButton,
  UikTopBar,
  UikTopBarSection,
  UikTopBarLink,
  UikTopBarLinkContainer,
  UikTopBarTitle,
  UikTopBarMenuDivider,
  Uikon,
  UikInput,
  UikNavBurger,
} from '@components'

import * as actions from '@redux/tutorials/actions'

import cls from './tutorials-top-bar.scss'

// @flow
type TutorialsTopBarProps = {
  toggleFilter: Function,
  toggleMenu: Function,
  isMenuOpen: Boolean
}

const TutorialsTopBar = ({
  toggleFilter,
  toggleMenu,
  isMenuOpen,
}: TutorialsTopBarProps) => (
  <UikTopBar>
    <UikButton
      className={ cls.btnMenu }
      onClick={ toggleMenu }
    >
      <UikNavBurger isOpen={ isMenuOpen } />
    </UikButton>
    <UikTopBarSection>
      <UikTopBarTitle>
        <Uikon color="blue">
            desktop
        </Uikon>
          Tutorials
      </UikTopBarTitle>
      <UikTopBarMenuDivider className={ cls.divider } />
      <UikTopBarLinkContainer className={ cls.links }>
        {
          [
            'Explore',
            'Tutorials',
            'Courses',
            'Projects',
            'Resources',
          ].map(link => (
            <UikTopBarLink
              key={ link }
              className={ link === 'Tutorials' ? 'active' : null }
            >
              {link}
            </UikTopBarLink>
          ))
        }
      </UikTopBarLinkContainer>
      <UikTopBarMenuDivider />
      <UikInput
        clear
        icon={ (
          <Uikon>
            search_left
          </Uikon>
      ) }
        placeholder="I want to learn..."
      />
    </UikTopBarSection>
    <UikTopBarSection className={ cls.actions }>
      <UikTopBarLinkContainer>
        {
          [
            'Sign In',
            'Register',
          ].map(link => (
            <UikTopBarLink
              key={ link }
              className={ link === 'Register' ? 'active' : null }
            >
              {link}
            </UikTopBarLink>
          ))
        }
      </UikTopBarLinkContainer>
      <UikTopBarMenuDivider className={ cls.divider2 } />
      <UikButton
        className={ cls.goPremiumBtn }
        success
      >
          Go Premium
      </UikButton>
    </UikTopBarSection>
    <UikButton
      className={ cls.btnFilter }
      onClick={ toggleFilter }
    >
      <Uikon>
        view_list
      </Uikon>
    </UikButton>
  </UikTopBar>
)

export default connect(
  store => ({
    isMenuOpen: store.tutorials.isMenuOpen,
  }),
  {
    toggleFilter: actions.toggleFilter,
    toggleMenu: actions.toggleMenu,
  },
)(TutorialsTopBar)
