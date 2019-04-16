import { fetchBorder } from '../thunks/fetchBorder'
import { isLoading, hasErrored, storeBorder } from '../actions'

describe('fetchBorder', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.url.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchBorder(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }))

    const thunk = fetchBorder(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('something went wrong'))
  })

  it('calls dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchBorder(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it.skip('calls dispatch storeBorder with the correct param', async () => {
    const coordinates = [[0,1], [1,2]]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(coordinates)
    }))

    const thunk = fetchBorder(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeBorder(coordinates))
  })
})