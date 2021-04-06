import classnames from 'classnames'
// @flow
import * as React from 'react'

import EventItem from './EventItem'

import cls from './calendar.scss'

const CalendarCell = ({
  day,
  displayMonth,
}: any) => (
  <td className={ cls.cellWrapper }>
    <div className={ classnames(cls.dayCell, {
      [cls.highlighted]: day.isPrimaryMonth,
    }) }
    >

      <div className={ cls.dayNumber }>
        {(day.dayNumber === 1 || displayMonth) && (<span className={ cls.monthName }>{day.month}</span>) }
        {day.dayNumber}
      </div>
      {
        day.events && (
          <EventItem event={ day.events[0] } />
        )
      }
    </div>
  </td>
)


export default CalendarCell
