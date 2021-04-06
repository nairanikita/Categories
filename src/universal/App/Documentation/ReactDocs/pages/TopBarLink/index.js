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
  properties.Component({
    defaultValue: 'a',
  }),
  properties.rest(),
]


const DocsTopBarLink = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTopBarLink
        </h1>
        <p>
          Styled link element that matches the design kit inteded to use with default
          {' '}
          <Link to="/docs/react/top-bar">UikTopBar (see example usage)</Link>
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsTopBarLink
