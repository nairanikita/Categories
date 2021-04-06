import * as React from 'react'
import numberFormatZeros from '@lib/numberFormatZeros'
import classnames from 'classnames'


/* eslint-disable max-len */


import {
  Uikon,
  UikWidget,
  UikWidgetContent,
  UikWidgetHeader,
  UikSelect,
  UikContentTitle,
  UikTag,
  UikAvatar,
  UikContainerVertical,
  UikLayoutMain,
} from '@components'

import {
  UikChart,
} from '@componentWrappers'

import TopBar from './components/TopBar'

import cls from './buildings-performance.scss'

import invoices from './assets/invoices'
import performanceProfit from './assets/performanceProfit'


// @flow


class BuildingsDashboard extends React.Component<{
}> {
  state = {
    gradientFill: null,
  }

  componentDidMount() {
    const chart = document.getElementById('performance-chart')
    if (chart) {
      const ctx = chart.getContext('2d')
      if (ctx) {
        const gradientFill = ctx.createLinearGradient(0, 0, 0, 280)
        gradientFill.addColorStop(0, 'rgba(25, 145, 235, 0.15)')
        gradientFill.addColorStop(0.9, 'rgba(25, 145, 235, 0)')
        this.setState({
          gradientFill,
        })
      }
    }
  }

  render() {
    const { gradientFill } = this.state
    return (
      <UikContainerVertical className={ cls.page }>
        <TopBar />
        <UikLayoutMain className={ cls.wrapper }>
          <UikWidget margin>
            <UikWidgetHeader rightEl={ (
              <UikSelect
                className={ cls.selectRange }
                defaultValue={ [
                  1,
                ] }
                options={ [
                  {
                    value: 1,
                    label: (
                      <span>
                        <Uikon
                          style={ {
                            marginRight: '10px',
                          } }
                        >
                          calendar_2
                        </Uikon>
                        {' Last Year'}
                      </span>
                    ),
                  },
                  {
                    value: 2,
                    label: (
                      <span>
                        <Uikon
                          style={ {
                            marginRight: '10px',
                          } }
                        >
                          building
                        </Uikon>
                        {' Last Month'}
                      </span>
                    ),
                  },
                  {
                    value: 3,
                    label: (
                      <span>
                        <Uikon
                          style={ {
                            marginRight: '10px',
                          } }
                        >
                        calendar_2
                        </Uikon>
                        {' Last Week'}
                      </span>
                    ),
                  },
                ] }
                placeholder="Select Range"
              />
              ) }
            >
              Buildings Overview
            </UikWidgetHeader>
            <div className={ cls.boxes }>
              <div className={ cls.box }>
                <UikContentTitle>Total Revenue</UikContentTitle>
                <div className={ cls.boxContent }>
                  <span className={ cls.boxValue }>$485,985</span>
                  <UikTag
                    color="green"
                    fill
                  >
                    +5.8%
                  </UikTag>
                </div>
              </div>
              <div className={ cls.box }>
                <UikContentTitle>Predicted Monthly Revenue</UikContentTitle>
                <div className={ cls.boxContent }>
                  <span className={ cls.boxValue }>$6,576</span>
                  <UikTag
                    color="green"
                    fill
                  >
                    +9.1%
                  </UikTag>
                </div>
              </div>
              <div className={ cls.box }>
                <UikContentTitle>Active Renters</UikContentTitle>
                <div className={ cls.boxContent }>
                  <span className={ cls.boxValue }>152</span>
                  <UikTag
                    color="red"
                    fill
                  >
                    -12
                  </UikTag>
                </div>
              </div>
              <div className={ cls.box }>
                <UikContentTitle>Pending Rents</UikContentTitle>
                <div className={ cls.boxContent }>
                  <span className={ `${cls.boxValue} ${cls.boxValuePending}` }>$930,10</span>
                </div>
              </div>
            </div>
            <UikWidgetContent>
              <UikChart
                chartType="Line"
                data={ {
                  labels: [
                    // '',
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                    // '',
                  ],
                  datasets: [
                    {
                      borderColor: '#1665D8',
                      backgroundColor: gradientFill || 'transparent',
                      label: 'Revenue',
                      lineTension: 0,
                      pointRadius: 5,
                      pointBackgroundColor: '#1665D8',
                      pointBorderColor: '#FFF',
                      pointBorderWidth: 2,
                      data: [
                        // null,
                        4567,
                        6286,
                        5935,
                        6234,
                        5273,
                        4785,
                        6234,
                        5689,
                        7234,
                        6075,
                        7230,
                        6730,
                        // null,
                      ],
                    },
                  ],
                } }
                height={ 280 }
                id="performance-chart"
                options={ {
                  scales: {
                    yAxes: [{
                      ticks: {
                        callback: value => `${numberFormatZeros(value)}   `,
                      },
                      gridLines: {
                        drawBorder: false,
                        drawTicks: true,
                      },
                    }],
                  },
                } }
              />
            </UikWidgetContent>

          </UikWidget>
          <div className={ cls.tables }>

            <UikWidget
              className={ cls.widgetOverflow }
              margin
            >
              <UikWidgetHeader>Most Profitable Renters</UikWidgetHeader>
              <div className={ cls.tableWrapper }>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  className={ cls.tableProfit }
                >
                  <tbody>
                    {
                    performanceProfit.map(item => (
                      <tr key={ item.value }>
                        <td>
                          <UikAvatar
                            { ...item.avatar }
                          />
                        </td>
                        <td>
                          {item.value}
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </UikWidget>
            <UikWidget
              className={ cls.widgetOverflow }
              margin
            >
              <UikWidgetHeader>Latest Invoices</UikWidgetHeader>
              <div className={ cls.tableWrapper }>
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  className={ cls.tableInvoices }
                >
                  <tbody>
                    {
                    invoices.map(item => (
                      <tr key={ item.id }>
                        <td className={ cls.name }>
                          {item.name}
                        </td>
                        <td>
                          {item.date}
                        </td>
                        <td className={ cls.invoiceId }>
                          {item.id}
                        </td>
                        <td className={ classnames(cls.value, {
                          [cls.payed]: item.payed,
                          [cls.unpayed]: !item.payed,
                        }) }
                        >
                          {item.value}
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </UikWidget>
          </div>

        </UikLayoutMain>
      </UikContainerVertical>
    )
  }
}

export default BuildingsDashboard
