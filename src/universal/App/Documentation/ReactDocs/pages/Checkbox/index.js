/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikCheckbox,
  UikLayoutMain,
} from '@components'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.children({
    prop: 'description',
  }),
  {
    prop: 'color',
    propType: 'String',
    defaultValue: 'green',
    desc: 'One of green | blue | orange | violet | red',
  },
  properties.className(),
  properties.rest({
    desc: 'Other properties passed down to the input element. See the code for more information.',
  }),
]

const examples = [
  {
    rendered: (
      <UikCheckbox label="Check me" />
    ),
    code: '<UikCheckbox label="Check me" />',
  },
  {
    rendered: (
      <UikCheckbox
        color="blue"
        defaultChecked
        label="Check me"
      />
    ),
    code: '<UikCheckbox color="blue" defaultChecked label="Check me" />',
  },
  {
    rendered: (
      <UikCheckbox
        description="If you click, it will check."
        label="Check me"
      />
    ),
    code: `<UikCheckbox
  description="If you click, it will check."
  label="Check me"
/>`,
  },
  {
    rendered: (
      <UikCheckbox
        defaultChecked
        label="Check me"
        name="is_hooman"
      />
    ),
    code: `// other properties goes to input element directly
<UikCheckbox
  defaultChecked
  label="Check me"
  name="is_hooman"
/>`,
  },
]


const DocsCheckbox = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikCheckbox
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
          UikCheckbox Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsCheckbox
