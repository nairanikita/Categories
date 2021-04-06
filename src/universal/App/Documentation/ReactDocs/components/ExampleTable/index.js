/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetTable,
} from '@components'

import {
  UikCodeHighlight,
} from '@componentWrappers'

// @flow
type DocsExampleTableProps = {
  examples: Array
}


const DocsExampleTable = ({ examples }: DocsExampleTableProps) => (
  <UikWidgetTable>
    <thead>
      <tr>
        <th>
              Component
        </th>
        <th>
              Example Code
        </th>
      </tr>
    </thead>
    <tbody>
      {
            examples.map(item => (
              <tr key={ Math.random() }>
                <td>
                  {item.rendered}
                </td>
                <td>
                  <UikCodeHighlight
                    code={ item.code }
                    language="jsx"
                  />
                </td>
              </tr>
            ))
          }
    </tbody>
  </UikWidgetTable>
)

export default DocsExampleTable
