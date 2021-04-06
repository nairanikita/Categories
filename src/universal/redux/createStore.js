import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import appReducer from './rootReducer'
import initialState from './initialState'

export default (preloadedState = initialState, history) => {
  const isDev = process.env.NODE_ENV !== 'production'
  const isServer = process.env.BUILD_TARGET === 'server'

  const routerMiddleware = createRouterMiddleware(history)

  const middleware = [
    routerMiddleware,
  ]

  if (isDev && !isServer) {
    // Add Redux Logger
    const createLogger = require('redux-logger').createLogger // eslint-disable-line
    const logger = createLogger({
      collapsed: true,
      predicate: (getState, action) => action.type !== '@ui/SET_WINDOW_DIMENSION',
    })
    middleware.push(logger)
  }

  const store = createStore(appReducer, preloadedState, applyMiddleware(...middleware))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./', () => {
      store.replaceReducer(appReducer)
    })
  }

  return store
}
