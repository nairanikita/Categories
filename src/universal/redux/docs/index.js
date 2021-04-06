import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case '@ui/SET_WINDOW_DIMENSION':
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        isMenuOpen: false,
      }
    case '@docs/MENU_TOGGLE':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }

    default:
      return state
  }
}
