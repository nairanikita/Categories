import * as React from 'react'
import { connect } from 'react-redux'

import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  Uikon,
  UikDropdownItem,
  UikInput,
  UikNavBurger,
  UikButton,
} from '@components'

import * as images from '@exampleAssets'

import * as actions from '@redux/docs/actions'

import UikTopBarUserDropdown from './UikTopBarUserDropdown'

import cls from './knowledge-top-bar.scss'

// @flow
const KnowledgeHeader = ({
  isMenuOpen,
  toggleMenu,
}: {

  isMenuOpen: Boolean,
  toggleMenu: Function,
}) => (
  <UikTopBar className={ cls.header }>
    <UikButton
      className={ cls.btnMenu }
      onClick={ toggleMenu }
    >
      <UikNavBurger isOpen={ isMenuOpen } />
    </UikButton>
    <UikTopBarSection>
      <UikTopBarTitle>
        <Uikon>
          help
        </Uikon>
        Knowledge
      </UikTopBarTitle>
    </UikTopBarSection>
    <UikTopBarSection>
      <UikInput
        clear
        icon={ (
          <Uikon>
            search_left
          </Uikon>
        ) }
        placeholder="Type to search..."
      />
      <UikTopBarUserDropdown
        user={ {
          imgUrl: images.a10,
          name: 'Minnie',
        } }
      >
        <UikDropdownItem>
          Settings
        </UikDropdownItem>
        <UikDropdownItem>
          Your Profile
        </UikDropdownItem>
        <UikDropdownItem>
          Help &apm; Support center
        </UikDropdownItem>
        <UikDropdownItem>
          Logout
        </UikDropdownItem>
      </UikTopBarUserDropdown>
    </UikTopBarSection>
  </UikTopBar>
)

export default connect(
  store => ({
    isMenuOpen: store.docs.isMenuOpen,
  }),
  {
    toggleFilter: actions.toggleFilter,
    toggleMenu: actions.toggleMenu,
  },
)(KnowledgeHeader)
