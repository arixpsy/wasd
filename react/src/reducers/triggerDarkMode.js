const triggerDarkModeReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TRIGGER':
      return state + 1
    default:
      return state
  }
}

export default triggerDarkModeReducer