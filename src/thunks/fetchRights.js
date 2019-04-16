import { isLoading, hasErrored, storeRights } from '../actions'

export const fetchRights = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const rights = await response.json()
      dispatch(storeRights(rights))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}