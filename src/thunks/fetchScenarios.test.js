import { fetchScenarios } from '../thunks/fetchScenarios'
import { isLoading, hasErrored, storeScenarios } from '../actions'
import { mockScenarios } from '../helpers/mockScenarios'

describe('fetchScenarios', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.url.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchScenarios(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }))

    const thunk = fetchScenarios(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('something went wrong'))
  })

  it('calls dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchScenarios(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('calls dispatch storeRights with the correct param', async () => {
    const scenarios = mockScenarios

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(scenarios)
    }))

    const thunk = fetchScenarios(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeScenarios(scenarios))
  })
})