/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikNavTitle,
  UikLayoutMain,
} from '@components'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  properties.rest(),
]

const examples = [
  {
    rendered: (
      <UikNavTitle>
        Navigation Title
      </UikNavTitle>
    ),
    code: `<UikNavTitle>
  Navigation Title
</UikNavTitle>`,
  },
]


const DocsNavLink = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikNavTitle
        </h1>
        <p>
Just a styled title being used in the navigation panel. See example on
          {' '}
          <Link to="/tutorials">
tutorials page
          </Link>
.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikNavTitle Examples
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsNavLink
