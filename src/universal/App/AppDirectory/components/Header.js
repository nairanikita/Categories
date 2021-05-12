import * as React from 'react'
import { Link } from 'react-router-dom'


import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  Uikon,
  UikButton,
  UikFormInputGroup,
} from '@components'

import cls from './app-dir-header.scss'

const TutorialsHeader = () => (
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle>
        <Uikon>
            desktop
        </Uikon>
          Screen Previews
      </UikTopBarTitle>
    </UikTopBarSection>

    <UikTopBarSection>
      <UikFormInputGroup direction="horizontal">

        <UikButton
          Component={ Link }
          to="/docs"
          transparent
        >
          Documentation
        </UikButton>
      </UikFormInputGroup>
    </UikTopBarSection>
  </UikTopBar>
)

export default TutorialsHeader
