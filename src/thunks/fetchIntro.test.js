import { fetchIntro } from '../thunks/fetchIntro'
import { isLoading, hasErrored, storeIntro } from '../actions'
import { mockIntro } from '../helpers/mockIntro'

describe('fetchIntro', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'wwww'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchIntro(mockUrl)
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'bad'
    }))

    const thunk = fetchIntro(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('bad'))
  })

  it('calls dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = fetchIntro(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('calls dispatch storeIntro with the correct param', async () => {
    const intro = mockIntro
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(intro)
    }))

    const thunk = fetchIntro(mockUrl)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeIntro(intro))
  })
})