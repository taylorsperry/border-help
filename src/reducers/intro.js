export const intro = (state=[], action) => {
  switch(action.type) {
    case 'STORE_INTRO':
      return action.intro
    default: 
      return state
  }
}