/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikProgressBar,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  {
    prop: 'fill',
    propType: 'Number',
    defaultValue: 1,
    desc: 'value from 0 to 1 indicates the progress',
  },
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikProgressBar
        fill={ 0.37 }
      />
    ),
    code: `<UikProgressBar
  fill={ 0.37 }
/>`,
  },
]


const DocsProgressBar = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikProgressBar
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
          UikProgressBar Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsProgressBar
