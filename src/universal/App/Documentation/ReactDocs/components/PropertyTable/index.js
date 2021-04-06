/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetTable,
} from '@components'

// @flow
type UikPropertyTableItemProps = {
  prop: String,
  propType?: String,
  required?: Boolean,
  defaultValue?: String,
  desc?: String
}
type UikPropertyTableProps = {
  itemProps?: Array<UikPropertyTableItemProps>
}

const UikPropertyTable = ({
  itemProps,
}: UikPropertyTableProps) => (
  <UikWidgetTable>
    <thead>
      <tr>
        <th>
              Property
        </th>
        <th>
              Type
        </th>
        <th>
              Required
        </th>
        <th>
              Default Value
        </th>
        <th>
              Description
        </th>
      </tr>
    </thead>
    <tbody>
      {
        itemProps.map(item => (
          <tr key={ Math.random() }>
            <td>
              <code>
                {item.prop}
              </code>
            </td>
            <td>
              <code>
                {item.propType}
              </code>
            </td>
            <td>
              <code>
                {item.required ? 'true' : 'false'}
              </code>
            </td>
            <td>
              {item.defaultValue === 'null' || item.defaultValue === 'false' ? (
                <em>
                  {item.defaultValue}
                </em>
              ) : item.defaultValue}
            </td>
            <td>
              {item.desc}
            </td>
          </tr>
        ))
      }
    </tbody>
  </UikWidgetTable>
)

UikPropertyTable.defaultProps = {
  itemProps: [],
}

export default UikPropertyTable
