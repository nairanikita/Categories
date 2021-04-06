import * as React from 'react'
import * as images from '@exampleAssets'

import {
  UikAvatar,
  UikTopBar,
  UikTopBarSection,
  // UikTopBarTitle,
  UikInput,
  Uikon,
} from '@components'

import cls from './analytics-top-bar-mobile.scss'


const AnalyticsHeader = props => (
  <UikTopBar
    className={ cls.wrapper }
    { ...props }
  >
    {/* <UikTopBarSection>
      <UikTopBarTitle>
        <Uikon className={ cls.logo }>
          home
        </Uikon>
      </UikTopBarTitle>
    </UikTopBarSection> */}
    <UikTopBarSection className={ cls.inputWrapper }>
      <UikInput
        clear
        icon={ (
          <Uikon>
            search_left
          </Uikon>
        ) }
        placeholder="Type to search..."
        wrapperProps={ {
          className: cls.inputWrapper,
        } }
      />
    </UikTopBarSection>
    <UikTopBarSection>
      <UikAvatar imgUrl={ images.a21 } />
    </UikTopBarSection>
  </UikTopBar>
)

export default AnalyticsHeader
