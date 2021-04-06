
import React from 'react'


import {
  div,
  UikToggle,
} from '@components'

import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-checkboxes.scss'

const DocsStyleguideButtons = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="UikToggle"
        to="toggle"
      >
        {'Toggles'}
      </TopBarTitle>
        08
    </SectionTitle>
    <Content>
      <div className={ cls.grid }>
        <UikToggle
          defaultChecked
          name="test"
        />
        <UikToggle
          name="test"
        />
        <UikToggle
          disabled
          name="test"
        />
        {/** r2 */}
        <UikToggle
          defaultChecked
          label="Publicly Available"
          name="test"
        />
        <UikToggle
          label="Publicly Available"
          name="test"
        />
        <UikToggle
          disabled
          label="Publicly Available"
          name="test"
        />
        {/** r2 */}
        <UikToggle
          defaultChecked
          description="Allow anyone to message me about work."
          label="Publicly Available"
          name="test"
        />
        <UikToggle
          description="Allow anyone to message me about work."
          label="Publicly Available"
          name="test"
        />
        <UikToggle
          description="Allow anyone to message me about work."
          disabled
          label="Publicly Available"
          name="test"
        />
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideButtons
