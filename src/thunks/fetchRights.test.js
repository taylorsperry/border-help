import { fetchRights } from './fetchRights'
import { isLoading, hasErrored, storeRights } from '../actions'
import { mockRights } from '../helpers/mockRights'

describe('fetchRights', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.mockurl.com'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchRights(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }))

    const thunk = fetchRights(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('something went wrong'))
  })

  it('calls dispatch isLoading(false) if the response is  ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))

    const thunk = fetchRights(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('calls dispatch storeRights with the correct param', async () => {
    const rights = mockRights

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(rights)
    }))

    const thunk = fetchRights(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeRights(rights))
  })
})