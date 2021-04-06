/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavLink,
  UikNavLinkSecondary,
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
      <React.Fragment>
        <UikNavLink
          highlighted
          rightEl={ 23 }
        >
          Some Link
        </UikNavLink>
        <UikNavLinkSecondary
          rightEl={ 17 }
        >
          Secondary Link
        </UikNavLinkSecondary>
        <UikNavLinkSecondary
          rightEl={ 6 }
        >
          Secondary Link
        </UikNavLinkSecondary>
      </React.Fragment>
    ),
    code: `<UikNavLink
  highlighted
  rightEl={ 23 }
>
  Some Link
</UikNavLink>
<UikNavLinkSecondary
  rightEl={ 17 }
>
  Secondary Link
</UikNavLinkSecondary>
<UikNavLinkSecondary
  rightEl={ 6 }
>
  Secondary Link
</UikNavLinkSecondary>`,
  },
]


const DocsNavLink = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavLinkSecondary
        </h1>
        <p>
          Secondary link for UikNavLink
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavLinkSecondary Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLink
