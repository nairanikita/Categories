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
    defaultValue: 'div',
  }),
  properties.rest(),
]


const DocsTopBarLinkContainer = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTopBarLinkContainer
        </h1>
        <p>
          {'Wrapping container for '}
          <Link to="/docs/react/top-bar">UikTopBarLink</Link>
          {' elements, '}
          <Link to="/docs/react/top-bar">UikTopBar (see example usage)</Link>
          , it adds proper margins between the links
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsTopBarLinkContainer
