import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import initialState from './initialState'

import buildings from './buildings'
import tutorials from './tutorials'
import ui from './ui'
import docs from './docs'

const appReducer = combineReducers(
  {
    routing: routerReducer,
    buildings,
    tutorials,
    ui,
    docs,
  },
  initialState,
)

export default (state, action) => appReducer(state, action)
