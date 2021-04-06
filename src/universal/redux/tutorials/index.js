import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case '@ui/SET_WINDOW_DIMENSION':
    case '@@router/LOCATION_CHANGE':
      return {
        ...state,
        isFilterOpen: false,
        isMenuOpen: false,
      }
    // main menu
    case '@tutorials/FILTER_OPEN':
      return {
        ...state,
        isFilterOpen: true,
        isMenuOpen: false,
      }

    case '@tutorials/FILTER_CLOSE':
      return {
        ...state,
        isFilterOpen: false,
      }

    case '@tutorials/FILTER_TOGGLE':
      return {
        ...state,
        isFilterOpen: !state.isFilterOpen,
        isMenuOpen: false,
      }
    case '@tutorials/MENU_TOGGLE':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
        isFilterOpen: false,
      }

    default:
      return state
  }
}
