import classnames from 'classnames'
// @flow
import * as React from 'react'

import {
  UikOutsideClickHandler,
  UikAvatar,
} from '@components'

import cls from './calendar.scss'

import * as images from '@exampleAssets'


class EventItem extends React.Component<{
  event: Object
}> {
  state = {
    isExpanded: false,
  }

  handleHideDetail = () => {
    this.setState({ isExpanded: false })
  }

  handleShowDetail = (e) => {
    const clickPos = e.target.getBoundingClientRect()
    this.setState({
      isExpanded: true,
      top: clickPos.top - 20,
      left: clickPos.right - 10,
    })
  }

  render() {
    const { event } = this.props
    const { isExpanded, top, left } = this.state
    return (!event ? null : (
      <UikOutsideClickHandler
        className={ cls.eventWrapper }
        onOutsideClick={ isExpanded ? this.handleHideDetail : null }
      >
        <button
          className={ classnames(cls.event, {
            [event.color]: event.color,
          }) }
          onClick={ !isExpanded ? this.handleShowDetail : () => {} }
          type="button"
        >

          <div className={ cls.title }>{event.title}</div>
          <div className={ cls.time }>{event.from}</div>
        </button>
        {
          isExpanded && (
            <div
              className={ cls.eventDetail }
              style={ {
                top: `${top}px`,
                left: `${left}px`,
              } }
            >
              <div
                className={ cls.cover }
                style={ {
                  backgroundImage: `url("${images.b07}")`,
                } }
              />
              <div className={ cls.content }>
                <div className={ cls.meta }>
                  <div className={ cls.date }>
                    <div className={ cls.weekday }>
                    THU
                    </div>
                    <div className={ cls.day }>
                    14
                    </div>
                  </div>
                  <div className={ cls.eventInfo }>
                    <h4>Socialbook Meetup</h4>
                    <p className={ cls.creator }>Socialbook Guys</p>
                    <p className={ cls.time }>Thu 8:00PM GMT +02:00</p>
                  </div>
                </div>
                <div className={ cls.attendants }>
                  <UikAvatar imgUrl={ images.a01 } />
                  <UikAvatar imgUrl={ images.a02 } />
                  <UikAvatar imgUrl={ images.a03 } />
                  <UikAvatar imgUrl={ images.a04 } />
                </div>
              </div>
            </div>
          )
        }
      </UikOutsideClickHandler>
    ))
  }
}

export default EventItem
