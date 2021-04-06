
import React from 'react'


import {
  div,
  UikRadio,
} from '@components'

import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-checkboxes.scss'

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="UikRadio"
        to="radio"
      >
        {'Radios'}
      </TopBarTitle>
        07
    </SectionTitle>
    <Content>
      <div className={ cls.grid }>
        <UikRadio
          defaultChecked
          name="test"
        />
        <UikRadio
          name="test"
        />
        <UikRadio
          disabled
          name="test"
        />
        {/** r2 */}
        <UikRadio
          defaultChecked
          label="Opportunities"
          name="test2"
        />
        <UikRadio
          label="Opportunities"
          name="test2"
        />
        <UikRadio
          disabled
          label="Opportunities"
          name="test2"
        />
        {/** r2 */}
        <UikRadio
          defaultChecked
          description="Get a daily email when new coding jobs are posted."
          label="Opportunities"
          name="test3"
        />
        <UikRadio
          description="Get a daily email when new coding jobs are posted."
          label="Opportunities"
          name="test3"
        />
        <UikRadio
          description="Get a daily email when new coding jobs are posted."
          disabled
          label="Opportunities"
          name="test3"
        />
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideButtons
