import { isLoading, hasErrored, storeIntro } from '../actions'

export const fetchIntro = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const intro = await response.json()
      dispatch(storeIntro(intro))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}