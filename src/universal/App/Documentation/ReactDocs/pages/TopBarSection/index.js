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


const DocsTopBarSection = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikTopBarSection
        </h1>
        <p>
          {'Just a simple component inteded to be used in '}
          <Link to="/docs/react/top-bar">UikTopBar (see example usage)</Link>
          {' that wraps the content with 30px side margins.'}
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsTopBarSection
