/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  Uikon,
  UikMapPinCircle,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  {
    prop: 'color',
    propType: 'String',
    defaultValue: 'blue',
    desc: 'One of blue, green, violet',
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikMapPinCircle>
        <Uikon>
          front_store
        </Uikon>
      </UikMapPinCircle>
    ),
    code: `<UikMapPinCircle>
  <Uikon>
    front_store
  </Uikon>
</UikMapPinCircle>`,
  },
  {
    rendered: (
      <UikMapPinCircle color="violet">
        <Uikon>
          front_store
        </Uikon>
      </UikMapPinCircle>
    ),
    code: `<UikMapPinCircle color="violet">
  <Uikon>
    front_store
  </Uikon>
</UikMapPinCircle>`,
  },
  {
    rendered: (
      <UikMapPinCircle color="green">
        <Uikon>
          front_store
        </Uikon>
      </UikMapPinCircle>
    ),
    code: `<UikMapPinCircle color="green">
  <Uikon>
    front_store
  </Uikon>
</UikMapPinCircle>`,
  },
]


const DocsNavSection = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikMapPinCircle
        </h1>
        <p>
          By default, only circle with choosen color is rendered, you should provide e.g. an icon element as children.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikMapPinCircle Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavSection
