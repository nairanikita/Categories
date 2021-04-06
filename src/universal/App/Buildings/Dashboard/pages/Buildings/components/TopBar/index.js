import * as React from 'react'

import {
  UikTopBarSection,
  UikSelect,
} from '@components'

import BuildingsTopBar from '../../../../components/TopBar'

import cls from './buildings-listing-top-bar.scss'

import ImgSelectBuildings from './assets/buildings_select.png'


const BuildingsListingTopBar = props => (
  <BuildingsTopBar { ...props }>
    <UikTopBarSection>
      <UikSelect
        activeValueProps={ {
          className: cls.selectInput,
        } }
        defaultValue={ ['czech'] }
        optionProps={ {
          className: cls.option,
        } }
        options={ [
          {
            value: 'czech',
            label: (
              <span className={ cls.selectValueWrapper }>
                <img
                  alt="english"
                  src={ ImgSelectBuildings }
                />
                All Buildings
              </span>
            ),
          },
          {
            value: 'tuvalu',
            label: (
              <span className={ cls.selectValueWrapper }>
                <img
                  alt="tuvalu"
                  src={ ImgSelectBuildings }
                />
                Some Buildings
              </span>
            ),
          },
          {
            value: 'norway',
            label: (
              <span className={ cls.selectValueWrapper }>
                <img
                  alt="norway"
                  src={ ImgSelectBuildings }
                />
                Other Buildings
              </span>
            ),
          },
        ] }
        placeholder="Action"
        position="bottomLeft"
      />
    </UikTopBarSection>
  </BuildingsTopBar>
)


export default BuildingsListingTopBar
