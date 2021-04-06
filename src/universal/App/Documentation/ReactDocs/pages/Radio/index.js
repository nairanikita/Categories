/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikRadio,
  UikFormInputGroup,
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
      <UikFormInputGroup>
        <UikRadio
          defaultChecked
          label="Option 1"
          name="rgroup"
        />
        <UikRadio
          label="Option 2"
          name="rgroup"
        />
      </UikFormInputGroup>
    ),
    code: `<UikFormInputGroup>
  <UikRadio
    defaultChecked
    label="Option 1"
    name="rgroup"
  />
  <UikRadio
    label="Option 2"
    name="rgroup"
  />
</UikFormInputGroup>`,
  },
  {
    rendered: (
      <UikRadio
        description="Some description."
        label="Option"
      />
    ),
    code: `<UikRadio
  description="Some description."
  label="Option"
/>`,
  },
  {
    rendered: (
      <UikRadio
        defaultChecked
        label="Toggle Me"
        name="is_hooman"
      />
    ),
    code: `// other properties goes to input element directly
<UikRadio
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
          UikRadio
        </h1>
        <p>
          This is an alias component for
          {' '}
          <code>
            {'<UikCheckbox radio type="radio" />'}
          </code>
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikRadio Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsCheckbox
