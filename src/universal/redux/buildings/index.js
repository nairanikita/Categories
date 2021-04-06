import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    // main menu
    case '@buildings/NAVIGATION_OPEN':
      return {
        ...state,
        isMenuOpen: true,
      }

    case '@buildings/NAVIGATION_CLOSE':
    case '@ui/SET_WINDOW_DIMENSION':
      return {
        ...state,
        isMenuOpen: false,
      }

    case '@buildings/NAVIGATION_TOGGLE':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      }

    default:
      return state
  }
}
