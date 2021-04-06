
import React from 'react'


import {
  div,
  UikCheckbox,
} from '@components'

import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-checkboxes.scss'

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="UikCheckbox"
        to="checkbox"
      >
        {'Checkboxes'}
      </TopBarTitle>
        06
    </SectionTitle>
    <Content>
      <div className={ cls.grid }>
        <UikCheckbox
          defaultChecked
          name="test"
        />
        <UikCheckbox
          name="test"
        />
        <UikCheckbox
          disabled
          name="test"
        />
        {/** r2 */}
        <UikCheckbox
          defaultChecked
          label="Martha Higerada"
          name="test"
        />
        <UikCheckbox
          label="Martha Higerada"
          name="test"
        />
        <UikCheckbox
          disabled
          label="Martha Higerada"
          name="test"
        />
        {/** r2 */}
        <UikCheckbox
          defaultChecked
          description="Kristin Ortega, a smart and tough lieutenant in the Bay."
          label="Martha Higerada"
          name="test"
        />
        <UikCheckbox
          description="Kristin Ortega, a smart and tough lieutenant in the Bay."
          label="Martha Higerada"
          name="test"
        />
        <UikCheckbox
          description="Kristin Ortega, a smart and tough lieutenant in the Bay."
          disabled
          label="Martha Higerada"
          name="test"
        />
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideButtons
