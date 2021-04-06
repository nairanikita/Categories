/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikInput,
  UikButton,
  UikFormInputGroup,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.Component({
    defaultValue: 'div',
  }),
  properties.children(),
  {
    prop: 'direction',
    propType: 'String',
    defaultValue: 'vertical',
    desc: '"horizontal" or "vertical", creates spacing between elements in that direction',
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <React.Fragment>
        <UikInput
          label="Your Name"
          placeholder="John Smith"
        />
        <UikInput
          label="Your Email"
          placeholder="john@smith.com"
        />
        <UikButton primary>
          Save
        </UikButton>
      </React.Fragment>
    ),
    code: `// Without groups
<UikInput
  label="Your Name"
  placeholder="John Smith"
/>
<UikInput
  label="Your Email"
  placeholder="john@smith.com"
/>
<UikButton primary>
  Save
</UikButton>`,
  },
  {
    rendered: (
      <UikFormInputGroup>
        <UikInput
          label="Your Name"
          placeholder="John Smith"
        />
        <UikInput
          label="Your Email"
          placeholder="john@smith.com"
        />
        <UikButton primary>
          Save
        </UikButton>
      </UikFormInputGroup>
    ),
    code: `// With group
<UikFormInputGroup>
  <UikInput
    label="Your Name"
    placeholder="John Smith"
  />
  <UikInput
    label="Your Email"
    placeholder="john@smith.com"
  />
  <UikButton primary>
    Save
  </UikButton>
</UikFormInputGroup>`,
  },
  {
    rendered: (
      <UikFormInputGroup>
        <UikFormInputGroup direction="horizontal">
          <UikInput
            label="Your Name"
            placeholder="John Smith"
          />
          <UikInput
            label="Your Email"
            placeholder="john@smith.com"
          />
        </UikFormInputGroup>
        <UikButton primary>
          Save
        </UikButton>
      </UikFormInputGroup>
    ),
    code: `// With group and splitted inputs
<UikFormInputGroup>
  <UikFormInputGroup direction="horizontal">
    <UikInput
      label="Your Name"
      placeholder="John Smith"
    />
    <UikInput
      label="Your Email"
      placeholder="john@smith.com"
    />
  </UikFormInputGroup>
  <UikButton primary>
    Save
  </UikButton>
</UikFormInputGroup>`,
  },
]


const DocsFormInputGroup = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikFormInputGroup
        </h1>
        <p>
          A simple divider, basically just a 1px grey line matching border color.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikFormInputGroup Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsFormInputGroup
