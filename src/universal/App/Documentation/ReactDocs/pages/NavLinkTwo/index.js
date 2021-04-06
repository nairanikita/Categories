/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavLinkTwo,
  Uikon,
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
        <UikNavLinkTwo
          className="active"
          highlighted
          icon={ (
            <Uikon>
              gallery_grid_view
            </Uikon>
          ) }
          rightEl={ 23 }
        >
          Some Link
        </UikNavLinkTwo>
        <UikNavLinkTwo
          highlighted
          icon={ (
            <Uikon>
              help
            </Uikon>
          ) }
          rightEl={ 23 }
        >
          Help
        </UikNavLinkTwo>
      </React.Fragment>
    ),
    code: `<UikNavLinkTwo
  className="active"
  highlighted
  icon={ (
    <Uikon>
      gallery_grid_view
    </Uikon>
  ) }
  rightEl={ 23 }
>
  Some Link
</UikNavLinkTwo>
<UikNavLinkTwo
  highlighted
  icon={ (
    <Uikon>
      help
    </Uikon>
  ) }
  rightEl={ 23 }
>
  Help
</UikNavLinkTwo>`,
  },
]


const DocsNavLinkTwo = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavLinkTwo
        </h1>
        <p>
          Just a different style of nav link
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavLinkTwo Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLinkTwo
