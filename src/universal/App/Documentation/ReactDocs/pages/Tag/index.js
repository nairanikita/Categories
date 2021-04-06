/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikTag,
  UikLayoutMain,
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
      <UikTag>
        Example
      </UikTag>
    ),
    code: `<UikTag>
  Example
</UikTag>`,
  },
  {
    rendered: (
      <UikTag color="red">
        Example
      </UikTag>
    ),
    code: `<UikTag color="red">
  Example
</UikTag>`,
  },
  {
    rendered: (
      <UikTag
        color="green"
        fill
      >
        Example
      </UikTag>
    ),
    code: `<UikTag color="green" fill>
  Example
</UikTag>`,
  },
  {
    rendered: (
      <UikTag
        color="orange"
      >
        Example
      </UikTag>
    ),
    code: `<UikTag color="orange">
  Example
</UikTag>`,
  },
  {
    rendered: (
      <UikTag
        color="blue"
        fill
      >
        Example
      </UikTag>
    ),
    code: `<UikTag color="blue" fill>
  Example
</UikTag>`,
  },
]


const DocsButton = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTag
        </h1>
        <p>
          {'Soloely used, the tags are display: inline-block, if you want to use multiple tags as a group, wrap it with '}
          <Link to="/docs/react/tag-container">UikTagContainer</Link>
          .
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikTag Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsButton
