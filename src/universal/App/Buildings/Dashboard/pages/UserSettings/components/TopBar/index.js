import * as React from 'react'

import {
  UikTopBarSection,
  UikTopBarTitle,
} from '@components'

import BuildingsTopBar from '../../../../components/TopBar'


const BuildingsListingTopBar = props => (
  <BuildingsTopBar { ...props }>
    <UikTopBarSection>
      <UikTopBarTitle>
        Settings
      </UikTopBarTitle>
    </UikTopBarSection>
  </BuildingsTopBar>
)


export default BuildingsListingTopBar
