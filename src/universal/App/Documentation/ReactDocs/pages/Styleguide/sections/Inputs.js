
import React from 'react'


import {
  div,
  UikInput,
  Uikon,
} from '@components'


import SectionTitle from '../components/TopBar'
import Content from '../components/Content'
import TopBarTitle from '../components/TopBarTitle'

import cls from './styleguide-buttons.scss'

const DocsStyleguideInputs = () => (
  <React.Fragment>
    <SectionTitle>
      <TopBarTitle
        name="UikInput"
        to="input"
      >
          Inputs
      </TopBarTitle>
        05
    </SectionTitle>
    <Content>
      <div className={ cls.inputGrid }>
        <UikInput
          defaultValue="Value"
          label="Label"
        />
        <UikInput
          defaultValue="ioowijrower"
          label="Label"
          type="password"
        />
        <UikInput
          defaultValue="Value"
          icon={ (
            <Uikon>
              search_left
            </Uikon>
          ) }
          iconPosition="right"
          label="Label"
        />
        <UikInput
          defaultValue="Click to focus"
          focus
          icon={ (
            <Uikon>
              search_left
            </Uikon>
          ) }
          iconPosition="right"
          label="Label"
        />
        <UikInput
          label="Label"
          placeholder="Placeholder"
        />
        <UikInput
          defaultValue="iuwhriuhwer"
          icon={ (
            <Uikon>
              view_simple
            </Uikon>
          ) }
          iconPosition="right"
          label="Label"
          type="password"
        />
        <UikInput
          focus
          icon={ (
            <Uikon>
              search_left
            </Uikon>
          ) }
          iconPosition="right"
          label="Label"
          placeholder="Search"
        />
        <UikInput
          errorMessage="There is an error!"
          focus
          icon={ (
            <Uikon>
              search_left
            </Uikon>
          ) }
          iconPosition="right"
          label="Label"
          placeholder="Search"
        />
      </div>
    </Content>
  </React.Fragment>
)


export default DocsStyleguideInputs
