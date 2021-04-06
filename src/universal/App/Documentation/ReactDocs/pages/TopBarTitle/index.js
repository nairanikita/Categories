/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import PropertyTable from '../../components/PropertyTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.children(),
  properties.className(),
  {
    prop: 'large',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Increases the font size slightly.',
  },
  properties.Component({
    defaultValue: 'h2',
  }),
  properties.rest(),
]


const DocsTopBarTitle = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTopBarTitle
        </h1>
        <p>
          Stylized simple h2 element that matches the design kit inteded to use with default
          {' '}
          <Link to="/docs/react/top-bar">UikTopBar (see example usage)</Link>
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsTopBarTitle
