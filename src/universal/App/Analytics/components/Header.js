import * as React from 'react'
import * as images from '@exampleAssets'

import {
  UikTopBar,
  UikTopBarSection,
  UikTopBarTitle,
  UikSelect,
} from '@components'

import cls from './analytics-header.scss'


const AnalyticsHeader = props => (
  <UikTopBar { ...props }>
    <UikTopBarSection>
      <UikTopBarTitle large>
        Dashboard
      </UikTopBarTitle>
    </UikTopBarSection>
    <UikTopBarSection>

      <UikSelect
        defaultValue={ ['english'] }
        options={ [
          {
            value: 'english',
            label: (
              <span>
                <img
                  alt="english"
                  className={ cls.selectFlag }
                  src={ images.flag01 }
                />
                ENG
              </span>
            ),
          },
          {
            value: 'english2',
            label: (
              <span>
                <img
                  alt="english"
                  className={ cls.selectFlag }
                  src={ images.flag01 }
                />
                ENG 2
              </span>
            ),
          },
        ] }
        placeholder="Action"
      />
    </UikTopBarSection>
  </UikTopBar>
)

export default AnalyticsHeader
