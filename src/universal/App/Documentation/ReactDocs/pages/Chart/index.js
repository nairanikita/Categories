/* eslint-disable max-len */
import * as React from 'react'


import {
  UikWidgetContent,
  UikWidgetDoc,
  UikLayoutMain,
} from '@components'
import {
  UikChart,
} from '@componentWrappers'


import PropertyTable from '../../components/PropertyTable'
import ExampleTable from '../../components/ExampleTable'
import properties from '../../shared/properties'

const itemProps = [
  properties.cls({
    desc: 'Wrapping className',
  }),
  {
    prop: 'minHeight',
    propType: 'Number',
    defaultValue: 'null',
    desc: 'Minimum height of the chart',
  },
  {
    prop: 'maxHeight',
    propType: 'Number',
    defaultValue: 'null',
    desc: 'Maximum height of the chart',
  },
  {
    prop: 'width',
    propType: 'Number',
    defaultValue: 'null',
    desc: 'FIxed width of the chart. Otherwise responsive to the changing width.',
  },
  {
    prop: 'height',
    propType: 'Number',
    defaultValue: 'null',
    desc: 'Fixed eight of the chart.',
  },
  {
    prop: 'options',
    propType: 'Object',
    defaultValue: 'null',
    desc: (
      <p>
        Chart options, read more at
        {' '}
        <a href="https://www.chartjs.org/">
          chartjs documentation.
        </a>
      </p>
    ),
  },
  {
    prop: 'data',
    propType: 'Object',
    defaultValue: 'null',
    desc: (
      <p>
        Chart data & datasets, read more at
        {' '}
        <a href="https://www.chartjs.org/">
          chartjs documentation.
        </a>
      </p>
    ),
  },
  {
    prop: 'tooltipRenderer',
    propType: 'Function',
    defaultValue: 'null',
    desc: 'Custom tooltip renderer, see source code (src/components/UikChart/CustomTooltip) for a example reference',
  },
  {
    prop: 'chartType',
    propType: 'String',
    defaultValue: '"Line"',
    desc: (
      <p>
        Line, Bar and others, see
        {' '}
        <a href="https://www.chartjs.org/">
        chartjs documentation.
        </a>
      </p>
    ),
  },
]

const examples = [
  {
    rendered: (
      <UikChart
        chartType="Bar"
        data={ {
          labels: [
            'Mon',
            'Tue',
            'Wed',
          ],
          datasets: [
            {
              borderColor: '#1665D8',
              backgroundColor: '#1665D8',
              label: 'Visitors',
              data: [
                1239,
                764,
                2013,
              ],
            },
          ],
        } }
        height={ 400 }
      />
    ),
    code: `<UikChart
  chartType="Bar"
  data={ {
    labels: [
      'Mon',
      'Tue',
      'Wed',
    ],
    datasets: [
      {
        borderColor: '#1665D8',
        backgroundColor: '#1665D8',
        label: 'Visitors',
        data: [
          1239,
          764,
          2013,
        ],
      },
    ],
  } }
  height={ 400 }
/>`,
  },
]


const DocsChart = () => (
  <UikLayoutMain contentLeft>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h1>
          UikChart
        </h1>
        <p>
          This is a wrapping component with styles and some custom elements (tooltip) above
          {' '}
          <a href="https://github.com/jerairrest/react-chartjs-2">
            react-chartjs-2
          </a>
          {' '}
            and
          {' '}
          <a href="https://www.chartjs.org/">
            chartjs
          </a>
          . Please read full documentation of those libraries if you are not familiar with them.
        </p>
      </UikWidgetContent>
      <PropertyTable itemProps={ itemProps } />
    </UikWidgetDoc>
    <UikWidgetDoc margin>
      <UikWidgetContent>
        <h2>
          UikChart Example
        </h2>
      </UikWidgetContent>
      <ExampleTable examples={ examples } />
    </UikWidgetDoc>
  </UikLayoutMain>
)

export default DocsChart
