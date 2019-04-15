import { isLoading, hasErrored, storeScenarios } from '../actions'

export const fetchScenarios = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const scenarios = await response.json()
      dispatch(storeScenarios(scenarios))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}