import { isLoading, hasErrored, storeHelp } from '../actions'

export const fetchHelp = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const help = await response.json()
      dispatch(storeHelp(help))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}