export const scenarios = (state=[], action) => {
  switch (action.type) {
    case 'STORE_SCENARIOS':
      return action.scenarios
    default: 
      return state
  }
}