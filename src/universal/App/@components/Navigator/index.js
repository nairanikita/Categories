import React from 'react'
import classnames from 'classnames'
import { Link, withRouter } from 'react-router-dom'

import {
  Uikon,
  UikOutsideClickHandler,
  UikNavLinkDark,
} from '@components'

import cls from './Navigator.scss'

// @flow
type NavigatorType = {
  className?: String,
  Component?: React.ComponentType,
  // location: Object,
}

class Navigator extends React.PureComponent<NavigatorType> {
  static getDerivedStateFromProps(props, state) {
    // reset isExpanded on route change
    if (state.location !== props.location.pathname) {
      return {
        isExpanded: false,
        location: props.location.pathname,
      }
    }
    return state
  }

  state = {
    isExpanded: false,
  }

  handleToggle = () => {
    this.setState(state => ({
      isExpanded: !state.isExpanded,
    }))
  }

  handleHide = () => {
    this.setState({
      isExpanded: false,
    })
  }

  render() {
    const {
      className,
      Component,
    } = this.props

    const {
      isExpanded,
    } = this.state

    return (

      <Component
        className={ classnames(cls.wrapper, className) }
        onOutsideClick={ isExpanded ? this.handleHide : null }
      >
        <button
          className={ classnames(cls.expandButton, {
            [cls.isExpanded]: isExpanded,
          }) }
          onClick={ this.handleToggle }
          type="button"
        >
          <Uikon>view_list</Uikon>
        </button>
        <div className={ classnames(cls.list, {
          [cls.isExpanded]: isExpanded,
        }) }
        >
          <UikNavLinkDark
            Component={ Link }
            icon={
              <Uikon>gallery_grid_view</Uikon>
            }
            to="/"
          >
            Screen Previews
          </UikNavLinkDark>
          <UikNavLinkDark
            Component={ Link }
            icon={ (
              <Uikon>rocket</Uikon>
              ) }
            to="/docs"
          >
            Getting Started
          </UikNavLinkDark>
          <UikNavLinkDark
            Component={ Link }
            icon={ (
              <Uikon>help</Uikon>
              ) }
            to="/docs/react"
          >
            React Docs
          </UikNavLinkDark>
          <UikNavLinkDark
            Component={ Link }
            icon={
              <Uikon>multitasking</Uikon>
            }
            to="/docs/changelog"
          >
            Changelog
          </UikNavLinkDark>
          <UikNavLinkDark
            Component={ Link }
            icon={
              <Uikon>lightbulb</Uikon>
            }
            to="/docs/support"
          >
            Support
          </UikNavLinkDark>
          <UikNavLinkDark
            className="active"
            href="https://janlosert.com/store/dashboard-ui-kit-3.html?from=docs"
            icon={
              <Uikon>love</Uikon>
            }
          >
Download kit

          </UikNavLinkDark>
        </div>
      </Component>
    )
  }
}

Navigator.defaultProps = {
  className: null,
  Component: UikOutsideClickHandler,
}

export default withRouter(Navigator)
