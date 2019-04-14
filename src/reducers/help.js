export const help = (state=[], action) => {
  switch(action.type) {
    case 'STORE_HELP':
      return action.help
    default: 
      return state
    }
}