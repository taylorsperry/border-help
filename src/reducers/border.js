export const border = (state=[], action) => {
  switch(action.type) {
    case 'STORE_BORDER':
      return action.coordinates
    default: 
      return state
  }
}