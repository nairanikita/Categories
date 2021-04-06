/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikInput,
  Uikon,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.childProps({
    prop: 'wrapperProps',
    desc: 'Wrapper properties',
  }),
  properties.node({
    prop: 'label',
  }),
  properties.node({
    prop: 'icon',
  }),
  properties.node({
    prop: 'errorMessage',
  }),
  {
    prop: 'clear',
    propType: 'Boolean',
    desc: 'Borderless',
  },
  {
    prop: 'iconPosition',
    propType: 'String',
    desc: 'Position of the icon if there is any, one of "left", "right"',
    defaultValue: 'left',
  },
  properties.rest({
    desc: 'Other properties passed down to the input element. See the code for more information.',
  }),
]

const examples = [
  {
    rendered: (
      <UikInput
        label="Your Name"
        placeholder="e.g. John Wick"
      />
    ),
    code: `<UikInput
  label="Your Name"
  placeholder="e.g. John Wick"
/>`,
  },
  {
    rendered: (
      <UikInput
        defaultValue="John Wick"
        errorMessage="That's not your name!"
        label="Your Name"
      />
    ),
    code: `<UikInput
  defaultValue="John Wick"
  errorMessage="That's not your name!"
  label="Your Name"
/>`,
  },
  {
    rendered: (
      <UikInput
        icon={ (
          <Uikon>
            search_left
          </Uikon>
        ) }
        iconPosition="right"
        label="Search for a project"
        placeholder="e.g. Homes for dogs"
      />
    ),
    code: `<UikInput
  icon={ (
    <Uikon>
      search_left
    </Uikon>
  ) }
  iconPosition="right"
  label="Search for a project"
  placeholder="e.g. Homes for dogs"
/>`,
  },
  {
    rendered: (
      <UikInput
        clear
        icon={ (
          <Uikon>
            search_left
          </Uikon>
        ) }
        placeholder="Search for somebody"
      />
    ),
    code: `<UikInput
  clear
  icon={ (
    <Uikon>
      search_left
    </Uikon>
  ) }
  placeholder="Search for somebody"
/>`,
  },
]


const DocsInput = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikInput
        </h1>
        <p>
          Simply styled checkbox
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikInput Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsInput
