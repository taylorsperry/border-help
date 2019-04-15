import { isLoading, hasErrored, storeBorder } from '../actions'

export const fetchBorder = (url) => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error (response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      const coordinates = data.features[0].geometry.paths[0]
      dispatch(storeBorder(coordinates))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}