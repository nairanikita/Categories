/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavLink,
  UikLayoutMain,
} from '@components'

import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className({
    desc: 'your className or "active" to display active state',
  }),
  properties.node({
    prop: 'rightEl',
    desc: 'Node element to be displayed on the right side, e.g. number of items',
  }),
  properties.node({
    prop: 'icon',
    desc: 'Node element to be displayed on the left side, e.g. icon',
  }),
  properties.Component({
    defaultValue: '"a"',
  }),
  {
    prop: 'highlighted',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Just makes the text bold',
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikNavLink>
        Some Link
      </UikNavLink>
    ),
    code: `<UikNavLink>
  Some Link
</UikNavLink>`,
  },
  {
    rendered: (
      <UikNavLink
        rightEl="23"
      >
        Some Link
      </UikNavLink>
    ),
    code: `<UikNavLink
  rightEl="23"
>
  Some Link
</UikNavLink>`,
  },
  {
    rendered: (
      <UikNavLink
        icon="🏃🏻"
        rightEl="23"
      >
        Some Link
      </UikNavLink>
    ),
    code: `<UikNavLink
  icon="🏃🏻"
  rightEl="23"
>
  Some Link
</UikNavLink>`,
  },
  {
    rendered: (
      <UikNavLink
        className="active"
        highlighted
        icon="🏃🏻"
        rightEl="23"
      >
        Some Link
      </UikNavLink>
    ),
    code: `<UikNavLink
  className="active"
  highlighted
  icon="🏃🏻"
  rightEl="23"
>
  Some Link
</UikNavLink>`,
  },
  {
    rendered: (
      <UikNavLink>
        Some Link
      </UikNavLink>
    ),
    code: `import { NavLink } from 'react-router-dom'
// renders with NavLink from react-router
<UikNavLink Component={NavLink}>
  Some Link
</UikNavLink>`,
  },
]


const DocsNavLink = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavLink
        </h1>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavLink Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLink
