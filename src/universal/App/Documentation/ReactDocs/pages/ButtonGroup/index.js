/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikButton,
  UikButtonGroup,
  Uikon,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.Component({
    defaultValue: '"div"',
  }),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikButtonGroup>
        <UikButton>Example</UikButton>
        <UikButton>Example</UikButton>
      </UikButtonGroup>
    ),
    code: `<UikButtonGroup>
  <UikButton>Example</UikButton>
  <UikButton>Example</UikButton>
</UikButtonGroup>`,
  },
  {
    rendered: (
      <UikButtonGroup>
        <UikButton primary>Example</UikButton>
        <UikButton primary>Example</UikButton>
      </UikButtonGroup>
    ),
    code: `<UikButtonGroup>
  <UikButton primary>Example</UikButton>
  <UikButton primary>Example</UikButton>
</UikButtonGroup>`,
  },
  {
    rendered: (
      <UikButtonGroup>
        <UikButton
          icon={ <Uikon>add</Uikon> }
          success
        >
          Example
        </UikButton>
        <UikButton
          success
        >
          Example
        </UikButton>
      </UikButtonGroup>
    ),
    code: `<UikButtonGroup>
  <UikButton
    icon={ <Uikon>add</Uikon> }
    success
  >
    Example
  </UikButton>
  <UikButton
    success
  >
    Example
  </UikButton>
</UikButtonGroup>`,
  },
]


const DocsButton = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikButtonGroup
        </h1>
        <p>Wrap multiple buttons and create a pill like group of buttons.</p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikButtonGroup Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsButton
