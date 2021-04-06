import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikTopBar,
  UikTopBarSection,
  UikDropdownItem,
  UikTopBarMenuDivider,
  UikTopBarTitle,
  Uikon,
  UikInput,
} from '@components'

import * as images from '@exampleAssets'

import UikTopBarUserDropwdown from './UikTopBarUserDropdown'

import cls from './social-header.scss'

const SocialHeader = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>
        <Uikon>
          stats
        </Uikon>
          Socialio
      </UikTopBarTitle>
      <UikTopBarMenuDivider />
      <UikInput
        clear
        icon={ (
          <Uikon>
            search_left
          </Uikon>
      ) }
        placeholder="Search..."
      />
    </UikTopBarSection>
    <UikTopBarSection>
      <Uikon className={ cls.topBarIcon }>
        globe_network
      </Uikon>
      <UikTopBarUserDropwdown
        user={ {
          imgUrl: images.a18,
        } }
      >
        <UikDropdownItem
          Component={ Link }
          to="/social/profile"
        >
          Profile
        </UikDropdownItem>
        <UikDropdownItem>
          Account Settings
        </UikDropdownItem>
        <UikDropdownItem>
          Logout
        </UikDropdownItem>
      </UikTopBarUserDropwdown>
    </UikTopBarSection>
  </UikTopBar>
)

export default SocialHeader
