/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
  UikContentTitle,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children(),
  properties.Component({
    defaultValue: 'span',
  }),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <React.Fragment>
        <UikContentTitle>How it works</UikContentTitle>
        <h2>
          {'It\'s super simple '}
        </h2>
      </React.Fragment>
    ),
    code: `<UikContentTitle>How it works</UikContentTitle>
<h2>It's super simple</h2>`,
  },
]


const DocsDivider = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikContentTitle
        </h1>
        <p>
          A simply styled component used on section titles or pre titles. See
          {' '}
          <Link to="/buildings/listing/1">property detail</Link>
          {' '}
example in buildings conceptual app.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikContentTitle Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsDivider
