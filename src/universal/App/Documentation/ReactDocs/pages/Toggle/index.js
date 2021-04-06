/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikToggle,
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
  properties.className(),
  properties.rest({
    desc: 'Other properties passed down to the input element. See the code for more information.',
  }),
]

const examples = [
  {
    rendered: (
      <UikToggle label="Toggle Me" />
    ),
    code: '<UikToggle label="Toggle Me" />',
  },
  {
    rendered: (
      <UikToggle
        description="If you click, it will check."
        label="Toggle Me"
      />
    ),
    code: `<UikToggle
  description="If you click, it will toggleeee."
  label="Toggle Me"
/>`,
  },
  {
    rendered: (
      <UikToggle
        defaultChecked
        label="Toggle Me"
        name="is_hooman"
      />
    ),
    code: `// other properties goes to input element directly
<UikToggle
  defaultChecked
  label="Toggle Me"
  name="is_hooman"
/>`,
  },
]


const DocsCheckbox = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikToggle
        </h1>
        <p>
          This is an alias component for
          {' '}
          <code>
            {'<UikCheckbox toggle />'}
          </code>
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikToggle Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsCheckbox
