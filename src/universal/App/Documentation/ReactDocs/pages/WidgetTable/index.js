

/* eslint-disable max-len */
import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  UikWidgetContent,
  UikWidgetDoc,
  UikWidgetTable,
  UikLayoutMain,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'


import PropertyTable from '../../components/PropertyTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.className(),
  properties.children(),
  properties.Component({
    defaultValue: 'div',
  }),
  {
    prop: 'padding',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Adds internal 30px padding',
  },
  {
    prop: 'margin',
    propType: 'Boolean',
    defaultValue: 'false',
    desc: 'Adds outer 15px margin',
  },
  properties.rest(),
]


const DocsWidgetDoc = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikWidgetTable
        </h1>
        <p>
          Variation of
          {' '}
          <Link to="/docs/react/widget">
            UikWidget
          </Link>
          {' '}
            that inherits all props and have some extra styling for basic elements such as h1, p, code, ...
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikWidgetTable Example
        </h2>
      </UikWidgetContent>

      <UikWidgetTable>
        <thead>
          <tr>
            <th>
              Column
            </th>
            <th>
              Another one
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Some value
            </td>
            <td>
              Value
            </td>
          </tr>
          <tr>
            <td>
              Another Line
            </td>
            <td>
              And value
            </td>
          </tr>
        </tbody>
      </UikWidgetTable>
      <UikWidgetContent>
        <UikCodeHighlight
          code={ `<UikWidgetTable>
  <thead>
    <tr>
      <th>
        Column
      </th>
      <th>
        Another one
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Some value
      </td>
      <td>
        Value
      </td>
    </tr>
  </tbody>
</UikWidgetTable>` }
          language="jsx"
        />
      </UikWidgetContent>
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsWidgetDoc
