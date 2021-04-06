import * as React from 'react'
import { connect } from 'react-redux'
import * as uiActions from '@redux/ui/actions'
// @flow

type ReduxDimensionSetterProps = {
  uiSetDimension: Function
}

export default (Component: React.ElementType) => {
  class ReduxDimensionSetter extends React.PureComponent<ReduxDimensionSetterProps> {
    componentDidMount() {
      window.addEventListener('resize', this.onResize)
      this.onResize()
    }

    componentWillUnmount() {
      if (window) {
        window.removeEventListener('resize', this.onResize)
      }
    }

    onResize = () => {
      if (window) {
        const { uiSetDimension } = this.props
        uiSetDimension(window.innerWidth, window.innerHeight)
      }
    }

    render() {
      return <Component { ...this.props } />
    }
  }

  return connect(
    null,
    {
      uiSetDimension: uiActions.uiSetDimension,
    },
  )(ReduxDimensionSetter)
}
