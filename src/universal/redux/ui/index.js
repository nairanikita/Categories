import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    // main menu
    case '@ui/SET_WINDOW_DIMENSION':
      return {
        ...state,
        window: action.payload,
      }

    default:
      return state
  }
}
