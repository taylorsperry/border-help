import { fetchHelp } from '../thunks/fetchHelp'
import { isLoading, hasErrored, storeHelp } from '../actions'
import { mockHelp } from '../helpers/mockHelp'

describe('fetchHelp', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.url.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchHelp(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }))

    const thunk = fetchHelp(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('something went wrong'))
  })

  it('calls dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchHelp(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('calls dispatch storeRights with the correct param', async () => {
    const help = mockHelp

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(help)
    }))

    const thunk = fetchHelp(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeHelp(help))
  })
})