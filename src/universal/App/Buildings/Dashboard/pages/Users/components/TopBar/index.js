import * as React from 'react'

import {
  UikTopBarSection,
  UikTopBarTitle,
  UikButton,
} from '@components'

import BuildingsTopBar from '../../../../components/TopBar'


const BuildingsListingTopBar = props => (
  <BuildingsTopBar
    { ...props }
    rightEl={ (
      <UikButton success>Add User</UikButton>
    ) }
  >
    <UikTopBarSection>
      <UikTopBarTitle>
        Users
      </UikTopBarTitle>
    </UikTopBarSection>
  </BuildingsTopBar>
)


export default BuildingsListingTopBar
