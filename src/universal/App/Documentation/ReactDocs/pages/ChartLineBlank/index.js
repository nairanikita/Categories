/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'

import {
  UikChartLineBlank,
} from '@componentWrappers'


import ExampleTable from '../../components/ExampleTable'

const examples = [
  {
    rendered: (
      <UikChartLineBlank
        data={ {
          labels: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
          ],
          datasets: [
            {
              borderColor: '#1665D8',
              backgroundColor: '#E7EFFB',
              label: 'Visitors',
              data: [
                1239,
                764,
                2013,
                875,
                467,
                2348,
                732,
              ],
            },
          ],
        } }
      />
    ),
    code: `<UikChartLineBlank
  data={ {
    labels: [
      'Mon',
      'Tue',
      'Wed',
    ],
    datasets: [
      {
        borderColor: '#1665D8',
        backgroundColor: '#E7EFFB',
        label: 'Visitors',
        data: [
          1239,
          764,
          2013,
          875,
          428,
          2348,
          732,
        ],
      },
    ],
  } }
/>`,
  },
]


const DocsChartLineBlank = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikChartLineBlank
        </h1>
        <p>
          This is a wrapping component with custom options
          {' '}
          <a href="https://github.com/jerairrest/react-chartjs-2">
            UikChart
          </a>
          {' sharing the same properties. By default, this chart doesn\'t display tooltip or any information on the axes.'}
        </p>
      </UikWidgetContent>
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikChartLineBlank Example
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsChartLineBlank
