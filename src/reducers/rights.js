export const rights = (state=[], action) => {
  switch (action.type) {
    case 'STORE_RIGHTS':
      return action.rights
    default:
      return state
  }
}