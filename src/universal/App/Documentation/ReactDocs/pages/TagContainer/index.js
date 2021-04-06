/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikTag,
  UikLayoutMain,
  UikTagContainer,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.color(),
  properties.Component({
    defaultValue: '"span"',
  }),
  {
    prop: 'fill',
    propType: 'Boolean',
    required: false,
    defaultValue: 'false',
    desc: 'By default, tags are outlined, use this property to fill the colors.',
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikTagContainer>
        <UikTag
          color="red"
          fill
        >
          Red Is good
        </UikTag>
        <UikTag
          color="blue"
          fill
        >
          Blue as well
        </UikTag>
        <UikTag
          color="orange"
          fill
        >
          Orange is a fruit
        </UikTag>
      </UikTagContainer>
    ),
    code: `
<UikTagContainer>
  <UikTag
    color="red"
    fill
  >
    Red Is good
  </UikTag>
  <UikTag
    color="blue"
    fill
  >
    Blue as well
  </UikTag>
  <UikTag
    color="orange"
    fill
  >
    Orange is a fruit
  </UikTag>
</UikTagContainer>`,
  },
]


const DocsButton = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTagContainer
        </h1>
        <p>
          {'Wraps tags '}
          <Link to="/docs/react/tag">UikTag</Link>
          {' and adds some extra properties like margins between them.'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikTagContainer Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsButton
