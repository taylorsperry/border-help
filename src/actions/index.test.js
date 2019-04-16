import * as actions from '../actions'

describe('actions', () => {
  it('shoud have a type of STORE_INTRO', () => {
    const intro = 'introduction'
    const expectedAction = {
      type: 'STORE_INTRO',
      intro
    }
    const result = actions.storeIntro(intro)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of STORE_RIGHTS', () => {
    const rights = ['one', 'two']
    const expectedAction = {
      type: 'STORE_RIGHTS',
      rights
    }
    const result = actions.storeRights(rights)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of STORE_SCENARIOS', () => {
    const scenarios = ['one', 'two']
    const expectedAction = {
      type: 'STORE_SCENARIOS',
      scenarios
    }
    const result = actions.storeScenarios(scenarios)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of STORE_HELP', () => {
    const help = ['one', 'two']
    const expectedAction = {
      type: 'STORE_HELP',
      help
    }
    const result = actions.storeHelp(help)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of IS_LOADING', () => {
    const isLoading = true
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading
    }
    const result = actions.isLoading(isLoading)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of HAS_ERRORED', () => {
    const message = 'something went wrong'
    const expectedAction = {
      type: 'HAS_ERRORED',
      message
    }
    const result = actions.hasErrored(message)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of STORE_BORDER', () => {
    const coordinates = ['one', 'two']
    const expectedAction = {
      type: 'STORE_BORDER',
      coordinates
    }
    const result = actions.storeBorder(coordinates)
    expect(result).toEqual(expectedAction)
  })
})